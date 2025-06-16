import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getRandomWordImproved, getWordByLength, getWordByLevelAndLength, type TetrisWord } from '@/data/tetrisData';
import type { DifficultyLevel } from '@/types';

// 類型定義
interface TetrisPiece {
  id: string;
  shape: number[][];
  word: string;
  kana: string;
  x: number;
  y: number;
  color: string;
  meaning: string;
  kanji?: string; // 漢字版本（可選）
  isKanji?: boolean; // 是否為漢字方塊
}

interface TetrisSettings {
  difficulty: DifficultyLevel;
  wordType: 'hiragana' | 'katakana' | 'mixed';
}

interface TetrisModeScreenProps {
  route?: {
    params: {
      settings?: TetrisSettings;
    };
  };
  navigation?: {
    goBack: () => void;
  };
}

// 方塊形狀定義
const TETRIS_SHAPES = {
  I: [[1, 1, 1, 1]], // 長條 - 4格
  O: [[1, 1], [1, 1]], // 正方形 - 4格
  T: [[0, 1, 0], [1, 1, 1]], // T型 - 4格
  L: [[1, 0], [1, 0], [1, 1]], // L型 - 4格
  J: [[0, 1], [0, 1], [1, 1]], // J型 - 4格
  S: [[0, 1, 1], [1, 1, 0]], // S型 - 4格
  Z: [[1, 1, 0], [0, 1, 1]], // Z型 - 4格
  // 新增2格方塊用於漢字
  H: [[1, 1]], // 水平2格 - 2格
  V: [[1], [1]], // 垂直2格 - 2格
  // 新增3格方塊用於漢字
  I3H: [[1, 1, 1]], // 水平3格 - 3格
  I3V: [[1], [1], [1]], // 垂直3格 - 3格
  L3A: [[1, 0], [1, 1]], // 短L型 - 3格
  L3B: [[0, 1], [1, 1]], // 短J型 - 3格
};

const SHAPE_NAMES = Object.keys(TETRIS_SHAPES) as Array<keyof typeof TETRIS_SHAPES>;

// 科技感霓虹顏色定義
const PIECE_COLORS = [
  '#00ffff', // 青色霓虹
  '#ff0080', // 粉紅霓虹
  '#00ff00', // 綠色霓虹
  '#ffff00', // 黃色霓虹
  '#ff8000', // 橙色霓虹
  '#8000ff', // 紫色霓虹
  '#0080ff', // 藍色霓虹
  '#ff4080'  // 玫瑰霓虹
];

// 遊戲設定
const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;
const INITIAL_FALL_SPEED = 1000; // 1秒 (原本是2秒)
const SPEED_INCREASE_FACTOR = 0.85; // 每次加速15% (原本是10%)

export const TetrisModeScreen: React.FC<TetrisModeScreenProps> = ({ route, navigation }) => {
  // 遊戲狀態
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'paused' | 'finished'>('idle');
  const [board, setBoard] = useState<number[][]>(() => 
    Array(BOARD_HEIGHT).fill(null).map(() => Array(BOARD_WIDTH).fill(0))
  );
  const [currentPiece, setCurrentPiece] = useState<TetrisPiece | null>(null);
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [piecesCleared, setPiecesCleared] = useState(0);
  const [fallSpeed, setFallSpeed] = useState(INITIAL_FALL_SPEED);
  const [inputFocused, setInputFocused] = useState(false);
  const [stars, setStars] = useState<Array<{id: number, x: number, y: number, opacity: number}>>([]);
  
  // 動畫值
  const titlePulse = useRef(new Animated.Value(1)).current;
  const scoreGlow = useRef(new Animated.Value(0.5)).current;
  const buttonScale = useRef(new Animated.Value(1)).current;
  const pieceGlow = useRef(new Animated.Value(0)).current;
  
  // 設定
  const settings: TetrisSettings = route?.params?.settings || {
    difficulty: 'beginner',
    wordType: 'hiragana'
  };

  // 定時器引用
  const fallTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 根據背景色計算最佳文字顏色
  const getTextColorForBackground = useCallback((backgroundColor: string): string => {
    // 移除 # 符號並轉換為RGB
    const hex = backgroundColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // 計算亮度 (使用 YIQ 公式)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    
    // 如果背景色亮度高於128，使用深色文字；否則使用淺色文字
    return brightness > 128 ? '#000000' : '#ffffff';
  }, []);

  // 啟動動畫效果
  useEffect(() => {
    // 標題脈動動畫
    const titleAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(titlePulse, {
          toValue: 1.1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(titlePulse, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    );

    // 分數發光動畫
    const scoreAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(scoreGlow, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: false,
        }),
        Animated.timing(scoreGlow, {
          toValue: 0.5,
          duration: 1500,
          useNativeDriver: false,
        }),
      ])
    );

    // 方塊發光動畫
    const pieceAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(pieceGlow, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(pieceGlow, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    );

    titleAnimation.start();
    scoreAnimation.start();
    pieceAnimation.start();

    return () => {
      titleAnimation.stop();
      scoreAnimation.stop();
      pieceAnimation.stop();
    };
  }, [titlePulse, scoreGlow, pieceGlow]);

  // 生成星空背景
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      const screenWidth = Dimensions.get('window').width;
      const screenHeight = Dimensions.get('window').height;
      
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * screenWidth,
          y: Math.random() * screenHeight,
          opacity: Math.random() * 0.8 + 0.2,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  // 計算方塊需要的字符數
  const getShapeCharCount = useCallback((shape: number[][]): number => {
    let count = 0;
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col] === 1) {
          count++;
        }
      }
    }
    return count;
  }, []);

  // 生成隨機方塊
  const generateRandomPiece = useCallback((): TetrisPiece => {
    const shapeKey = SHAPE_NAMES[Math.floor(Math.random() * SHAPE_NAMES.length)];
    const shape = TETRIS_SHAPES[shapeKey];
    const charCount = getShapeCharCount(shape);
    
    // 調試信息
    console.log(`生成方塊 - 形狀: ${shapeKey}, 格數: ${charCount}, 等級: ${level}`);
    
    // 使用改進的隨機選擇函數
    const word = getWordByLevelAndLength(charCount, level, settings.difficulty, settings.wordType);
    
    // 調試信息
    console.log(`選擇單字:`, word);
    
    // 安全檢查：確保 word 對象有效
    if (!word || typeof word !== 'object' || !word.word || !word.kana || !word.meaning) {
      console.error('Invalid word object:', word);
      // 使用備用單字
      const fallbackWord = {
        word: 'ともだち',
        kana: 'ともだち',
        meaning: '朋友',
        difficulty: 'beginner' as const,
        category: '人物'
      };
      const color = PIECE_COLORS[Math.floor(Math.random() * PIECE_COLORS.length)];
      const maxX = BOARD_WIDTH - shape[0].length;
      const x = Math.floor(Math.random() * (maxX + 1));
      
      return {
        id: Date.now().toString(),
        shape,
        word: fallbackWord.word,
        kana: fallbackWord.kana,
        meaning: fallbackWord.meaning,
        x,
        y: 0,
        color,
      };
    }
    
    const color = PIECE_COLORS[Math.floor(Math.random() * PIECE_COLORS.length)];
    
    // 隨機X位置（確保方塊不會超出邊界）
    const maxX = BOARD_WIDTH - shape[0].length;
    const x = Math.floor(Math.random() * (maxX + 1));
    
    return {
      id: Date.now().toString(),
      shape,
      word: word.word,
      kana: word.kana,
      meaning: word.meaning,
      kanji: word.kanji,
      isKanji: word.isKanji,
      x,
      y: 0,
      color,
    };
  }, [settings, getShapeCharCount, level]);

  // 檢查方塊是否可以放置在指定位置
  const canPlacePiece = useCallback((piece: TetrisPiece, newX: number, newY: number): boolean => {
    for (let row = 0; row < piece.shape.length; row++) {
      for (let col = 0; col < piece.shape[row].length; col++) {
        if (piece.shape[row][col] === 1) {
          const boardX = newX + col;
          const boardY = newY + row;
          
          // 檢查邊界
          if (boardX < 0 || boardX >= BOARD_WIDTH || boardY >= BOARD_HEIGHT) {
            return false;
          }
          
          // 檢查是否與現有方塊重疊
          if (boardY >= 0 && board[boardY][boardX] !== 0) {
            return false;
          }
        }
      }
    }
    return true;
  }, [board]);

  // 將方塊固定到遊戲板上
  const placePieceOnBoard = useCallback((piece: TetrisPiece) => {
    const newBoard = board.map(row => [...row]);
    
    for (let row = 0; row < piece.shape.length; row++) {
      for (let col = 0; col < piece.shape[row].length; col++) {
        if (piece.shape[row][col] === 1) {
          const boardX = piece.x + col;
          const boardY = piece.y + row;
          
          if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
            newBoard[boardY][boardX] = 1;
          }
        }
      }
    }
    
    setBoard(newBoard);
    
    // 檢查遊戲結束 - 如果新方塊無法放置在頂部，遊戲結束
    // 這個檢查應該在生成新方塊時進行，而不是在這裡
  }, [board]);

  // 方塊下落邏輯
  const dropPiece = useCallback(() => {
    if (!currentPiece || gameState !== 'playing') return;
    
    const newY = currentPiece.y + 1;
    
    if (canPlacePiece(currentPiece, currentPiece.x, newY)) {
      setCurrentPiece(prev => prev ? { ...prev, y: newY } : null);
    } else {
      // 方塊無法繼續下落，固定到遊戲板
      placePieceOnBoard(currentPiece);
      setCurrentPiece(null);
      setUserInput(''); // 清空輸入
      
      // 生成新方塊
      setTimeout(() => {
        const newPiece = generateRandomPiece();
        // 檢查新方塊是否可以放置在起始位置
        if (canPlacePiece(newPiece, newPiece.x, newPiece.y)) {
          setCurrentPiece(newPiece);
        } else {
          // 無法放置新方塊，遊戲結束
          setGameState('finished');
        }
      }, 100);
    }
  }, [currentPiece, gameState, canPlacePiece, placePieceOnBoard, generateRandomPiece]);

  // 計算階段性加速
  const calculateSpeedDecrease = useCallback((newLevel: number): number => {
    // 確定當前階段 (1-5級=階段1, 6-10級=階段2, 等等)
    const stage = Math.ceil(newLevel / 5);
    
    // 每個階段的加速度：階段1=1, 階段2=1.5, 階段3=2, 等等
    const stageSpeedIncrease = stage * 0.5 + 0.5;
    
    console.log(`等級 ${newLevel}, 階段 ${stage}, 加速度 ${stageSpeedIncrease}`);
    
    return stageSpeedIncrease;
  }, []);

  // 處理用戶輸入
  const handleInputChange = useCallback((text: string) => {
    setUserInput(text);
    
    if (currentPiece && text === currentPiece.kana) {
      // 輸入正確，消除方塊
      const baseScore = currentPiece.kana.length * 10;
      const levelBonus = level;
      const totalScore = baseScore * levelBonus;
      
      setScore(prev => prev + totalScore);
      setPiecesCleared(prev => prev + 1);
      setCurrentPiece(null);
      setUserInput('');
      
      // 檢查是否需要升級
      const newPiecesCleared = piecesCleared + 1;
      if (newPiecesCleared % 5 === 0) { // 每5個方塊升級一次
        const newLevel = level + 1;
        setLevel(newLevel);
        
        // 階段性加速
        const speedDecrease = calculateSpeedDecrease(newLevel);
        setFallSpeed(prev => {
          const newSpeed = Math.max(100, prev - (speedDecrease * 50)); // 最低速度100ms
          console.log(`速度變化: ${prev}ms -> ${newSpeed}ms (減少${speedDecrease * 50}ms)`);
          return newSpeed;
        });
      }
      
      // 生成新方塊
      setTimeout(() => {
        const newPiece = generateRandomPiece();
        // 檢查新方塊是否可以放置在起始位置
        if (canPlacePiece(newPiece, newPiece.x, newPiece.y)) {
          setCurrentPiece(newPiece);
        } else {
          // 無法放置新方塊，遊戲結束
          setGameState('finished');
        }
      }, 100);
    }
  }, [currentPiece, level, piecesCleared, generateRandomPiece, canPlacePiece, calculateSpeedDecrease]);

  // 開始遊戲
  const startGame = useCallback(() => {
    setGameState('playing');
    setBoard(Array(BOARD_HEIGHT).fill(null).map(() => Array(BOARD_WIDTH).fill(0)));
    setScore(0);
    setLevel(5); // 暫時從第5關開始，方便測試漢字方塊
    setPiecesCleared(0);
    setFallSpeed(INITIAL_FALL_SPEED);
    setUserInput('');
    
    const newPiece = generateRandomPiece();
    setCurrentPiece(newPiece);
  }, [generateRandomPiece]);

  // 暫停/恢復遊戲
  const togglePause = useCallback(() => {
    setGameState(prev => prev === 'playing' ? 'paused' : 'playing');
  }, []);

  // 重新開始遊戲
  const restartGame = useCallback(() => {
    startGame();
  }, [startGame]);

  // 返回主選單
  const goBackToMenu = useCallback(() => {
    navigation?.goBack();
  }, [navigation]);

  // 設置下落定時器
  useEffect(() => {
    if (gameState === 'playing') {
      fallTimerRef.current = setInterval(dropPiece, fallSpeed);
    } else {
      if (fallTimerRef.current) {
        clearInterval(fallTimerRef.current);
        fallTimerRef.current = null;
      }
    }
    
    return () => {
      if (fallTimerRef.current) {
        clearInterval(fallTimerRef.current);
      }
    };
  }, [gameState, fallSpeed, dropPiece]);

  // 渲染遊戲板
  const renderBoard = () => {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const availableWidth = screenWidth - 40; // 減去 padding
    const availableHeight = screenHeight * 0.5; // 使用螢幕高度的50%
    
    // 根據可用空間計算最適合的格子大小
    const cellSizeByWidth = availableWidth / BOARD_WIDTH;
    const cellSizeByHeight = availableHeight / BOARD_HEIGHT;
    const cellSize = Math.min(cellSizeByWidth, cellSizeByHeight, 25); // 最大25px
    
    return (
      <View style={[styles.board, { 
        width: cellSize * BOARD_WIDTH, 
        height: cellSize * BOARD_HEIGHT,
        marginVertical: 10
      }]}>
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <View
              key={`${rowIndex}-${colIndex}`}
              style={[
                styles.cell,
                {
                  left: colIndex * cellSize,
                  top: rowIndex * cellSize,
                  width: cellSize,
                  height: cellSize,
                  backgroundColor: cell === 1 ? 'rgba(0, 255, 255, 0.4)' : 'rgba(0, 255, 255, 0.02)',
                  borderColor: cell === 1 ? 'rgba(0, 255, 255, 0.8)' : 'rgba(0, 255, 255, 0.15)',
                  borderWidth: cell === 1 ? 2 : 0.5,
                  shadowColor: cell === 1 ? '#00ffff' : 'transparent',
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: cell === 1 ? 0.6 : 0,
                  shadowRadius: cell === 1 ? 8 : 0,
                  elevation: cell === 1 ? 5 : 0,
                }
              ]}
            />
          ))
        )}
        
        {/* 渲染當前下落的方塊 */}
        {currentPiece && (
          <View style={styles.fallingPiece}>
            {/* 方塊背景和文字 */}
            {currentPiece.shape.map((row, rowIndex) =>
              row.map((cell, colIndex) => {
                if (cell === 1) {
                  const x = (currentPiece.x + colIndex) * cellSize;
                  const y = (currentPiece.y + rowIndex) * cellSize;
                  
                  // 計算當前格子應該顯示的字符
                  let charIndex = 0;
                  for (let r = 0; r < rowIndex; r++) {
                    for (let c = 0; c < currentPiece.shape[r].length; c++) {
                      if (currentPiece.shape[r][c] === 1) {
                        charIndex++;
                      }
                    }
                  }
                  for (let c = 0; c < colIndex; c++) {
                    if (currentPiece.shape[rowIndex][c] === 1) {
                      charIndex++;
                    }
                  }
                  
                  // 如果是漢字方塊，顯示漢字；否則顯示假名
                  const displayText = currentPiece.isKanji && currentPiece.kanji ? currentPiece.kanji : currentPiece.kana;
                  const character = displayText[charIndex] || '';
                  
                  return (
                    <Animated.View
                      key={`piece-${rowIndex}-${colIndex}`}
                      style={[
                        styles.pieceCell,
                        {
                          left: x,
                          top: y,
                          width: cellSize,
                          height: cellSize,
                          backgroundColor: currentPiece.color,
                          shadowColor: currentPiece.color,
                          shadowOffset: { width: 0, height: 0 },
                          shadowOpacity: pieceGlow.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0.6, 1],
                          }),
                          shadowRadius: pieceGlow.interpolate({
                            inputRange: [0, 1],
                            outputRange: [cellSize * 0.3, cellSize * 0.5],
                          }),
                          elevation: 12,
                          borderColor: currentPiece.color,
                          borderWidth: 2,
                        }
                      ]}
                    >
                      <Animated.Text style={[
                        styles.pieceCharacter, 
                        { 
                          fontSize: Math.min(cellSize * 0.6, 16),
                          color: getTextColorForBackground(currentPiece.color),
                          textShadowColor: getTextColorForBackground(currentPiece.color) === '#000000' ? '#ffffff' : '#000000',
                          textShadowOffset: { width: 0, height: 0 },
                          textShadowRadius: pieceGlow.interpolate({
                            inputRange: [0, 1],
                            outputRange: [8, 15],
                          }),
                        }
                      ]}>
                        {character}
                      </Animated.Text>
                    </Animated.View>
                  );
                }
                return null;
              })
            )}
          </View>
        )}
      </View>
    );
  };

  // 渲染遊戲界面
  const renderGameContent = () => {
    switch (gameState) {
      case 'idle':
        return (
          <View style={styles.menuContainer}>
            <Animated.Text 
              style={[
                styles.title,
                {
                  transform: [{ scale: titlePulse }],
                }
              ]}
            >
🎮 俄羅斯方塊模式 🎮
            </Animated.Text>
                          <Text style={styles.description}>
                ⚡ 輸入方塊上的假名來消除方塊！ ⚡{'\n'}
                🎯 方塊會自動下落，在落地前輸入正確的假名即可消除 🎯{'\n'}
                🔥 第5關開始出現漢字方塊，第10關出現更長的漢字方塊 🔥
              </Text>
            <View style={styles.settingsInfo}>
                              <Text style={styles.settingText}>⚙️ 難度: {settings.difficulty}</Text>
                <Text style={styles.settingText}>📝 類型: {settings.wordType}</Text>
            </View>
            <TouchableOpacity 
              style={styles.startButton} 
              onPress={startGame}
              onPressIn={() => {
                Animated.spring(buttonScale, {
                  toValue: 0.95,
                  useNativeDriver: true,
                }).start();
              }}
              onPressOut={() => {
                Animated.spring(buttonScale, {
                  toValue: 1,
                  useNativeDriver: true,
                }).start();
              }}
            >
              <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
                <Text style={styles.startButtonText}>🚀 開始遊戲 🚀</Text>
              </Animated.View>
            </TouchableOpacity>
          </View>
        );
        
      case 'playing':
      case 'paused':
        return (
          <ScrollView 
            style={styles.gameScrollView}
            contentContainerStyle={styles.gameContainer}
            showsVerticalScrollIndicator={false}
          >
            {/* 遊戲信息 */}
            <Animated.View 
              style={[
                styles.gameInfo,
                {
                  shadowOpacity: scoreGlow,
                }
              ]}
            >
              <Animated.Text 
                style={[
                  styles.infoText,
                  {
                    textShadowRadius: scoreGlow.interpolate({
                      inputRange: [0.5, 1],
                      outputRange: [8, 15],
                    }),
                  }
                ]}
              >
                                 🏆 分數: {score}
               </Animated.Text>
               <Text style={styles.infoText}>📈 等級: {level}</Text>
               <Text style={styles.infoText}>🧩 已消除: {piecesCleared}</Text>
            </Animated.View>
            
            {/* 遊戲板 */}
            {renderBoard()}
            
            {/* 當前單字顯示 */}
            {currentPiece && (
              <View style={styles.wordContainer}>
                {currentPiece.isKanji ? (
                  <>
                    <Text style={styles.wordText}>{currentPiece.kanji}</Text>
                    <Text style={styles.kanaText}>讀音: {currentPiece.kana}</Text>
                    <Text style={styles.meaningText}>{currentPiece.meaning}</Text>
                    <Text style={styles.hintText}>輸入完整讀音來消除漢字方塊</Text>
                  </>
                ) : (
                  <>
                    <Text style={styles.wordText}>{currentPiece.word}</Text>
                    <Text style={styles.kanaText}>({currentPiece.kana})</Text>
                    <Text style={styles.meaningText}>{currentPiece.meaning}</Text>
                  </>
                )}
              </View>
            )}
            
            {/* 輸入框 */}
            <TextInput
              style={[
                styles.input,
                inputFocused && {
                  borderColor: '#00ffff',
                  shadowColor: '#00ffff',
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.6,
                  shadowRadius: 15,
                  elevation: 8,
                }
              ]}
              value={userInput}
              onChangeText={handleInputChange}
              placeholder=">>> 輸入假名來消除方塊 <<<"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              autoFocus={gameState === 'playing'}
              editable={gameState === 'playing'}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
            />
            
            {/* 控制按鈕 */}
            <View style={styles.controlButtons}>
              <TouchableOpacity style={styles.controlButton} onPress={togglePause}>
                <Text style={styles.controlButtonText}>
                  {gameState === 'playing' ? '⏸️ 暫停' : '▶️ 繼續'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.controlButton} onPress={goBackToMenu}>
                <Text style={styles.controlButtonText}>🏠 返回</Text>
              </TouchableOpacity>
            </View>
            
            {/* 暫停覆蓋層 */}
            {gameState === 'paused' && (
              <TouchableOpacity 
                style={styles.pauseOverlay}
                onPress={togglePause}
                activeOpacity={1}
              >
                <View style={styles.pauseContent}>
                  <Animated.Text 
                    style={[
                      styles.pauseText,
                      {
                        transform: [{ scale: titlePulse }],
                      }
                    ]}
                  >
                    ⏸️ 遊戲暫停 ⏸️
                  </Animated.Text>
                  <Text style={styles.pauseHint}>🎮 點擊任意處繼續 🎮</Text>
                                      <TouchableOpacity style={styles.resumeButton} onPress={togglePause}>
                      <Text style={styles.resumeButtonText}>▶️ 繼續遊戲 ▶️</Text>
                    </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          </ScrollView>
        );
        
      case 'finished':
        return (
          <View style={styles.gameOverContainer}>
            <Animated.Text 
              style={[
                styles.gameOverTitle,
                {
                  transform: [{ scale: titlePulse }],
                }
              ]}
            >
                             💀 遊戲結束 💀
             </Animated.Text>
             <Animated.Text 
               style={[
                 styles.finalScore,
                 {
                   textShadowRadius: scoreGlow.interpolate({
                     inputRange: [0.5, 1],
                     outputRange: [15, 25],
                   }),
                 }
               ]}
             >
               🏆 最終分數: {score} 🏆
             </Animated.Text>
             <Text style={styles.finalStats}>
               📊 等級: {level} | 🧩 消除方塊: {piecesCleared} 📊
             </Text>
            
            <View style={styles.gameOverButtons}>
              <TouchableOpacity style={styles.restartButton} onPress={restartGame}>
                <Text style={styles.restartButtonText}>🔄 重新開始 🔄</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.backButton} onPress={goBackToMenu}>
                <Text style={styles.backButtonText}>🏠 返回主選單 🏠</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
        
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 星空背景 */}
      <View style={styles.starField}>
        {stars.map(star => (
          <View
            key={star.id}
            style={[
              styles.star,
              {
                left: star.x,
                top: star.y,
                opacity: star.opacity,
              }
            ]}
          />
        ))}
      </View>
      {renderGameContent()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0f',
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(10, 10, 15, 0.95)',
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#00ffff',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: '#00ffff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
    letterSpacing: 2,
  },
  description: {
    fontSize: 16,
    color: '#b8c6db',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
    backgroundColor: 'rgba(0, 255, 255, 0.05)',
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(0, 255, 255, 0.2)',
  },
  settingsInfo: {
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(0, 255, 255, 0.3)',
  },
  settingText: {
    fontSize: 16,
    color: '#00ffff',
    marginBottom: 8,
    fontWeight: '600',
    textShadowColor: '#00ffff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  startButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 40,
    paddingVertical: 18,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#00ffff',
    shadowColor: '#00ffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
  },
  startButtonText: {
    color: '#00ffff',
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    textShadowColor: '#00ffff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    letterSpacing: 1,
  },
  gameContainer: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    minHeight: Dimensions.get('window').height - 100,
    backgroundColor: 'rgba(10, 10, 15, 0.95)',
  },
  gameInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
    backgroundColor: 'rgba(0, 255, 255, 0.1)',
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(0, 255, 255, 0.3)',
  },
  infoText: {
    color: '#00ffff',
    fontSize: 16,
    fontWeight: '700',
    textShadowColor: '#00ffff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  board: {
    borderWidth: 3,
    borderColor: '#00ffff',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'relative',
    shadowColor: '#00ffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 25,
    elevation: 15,
    borderRadius: 8,
  },
  cell: {
    position: 'absolute',
    borderWidth: 0.5,
    borderColor: 'rgba(0, 255, 255, 0.1)',
    backgroundColor: 'rgba(0, 255, 255, 0.02)',
  },
  pieceCell: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#ffffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 8,
  },
  pieceCharacter: {
    fontWeight: '900',
    textAlign: 'center',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  wordContainer: {
    marginTop: 25,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 255, 255, 0.1)',
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'rgba(0, 255, 255, 0.4)',
    shadowColor: '#00ffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
  },
  wordText: {
    fontSize: 28,
    fontWeight: '900',
    color: '#00ffff',
    textShadowColor: '#00ffff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
    letterSpacing: 2,
  },
  kanaText: {
    fontSize: 20,
    color: '#b8c6db',
    marginTop: 8,
    fontWeight: '600',
  },
  meaningText: {
    fontSize: 16,
    color: '#8892b0',
    marginTop: 5,
    fontWeight: '500',
  },
  hintText: {
    fontSize: 14,
    color: '#ffd700',
    marginTop: 8,
    fontStyle: 'italic',
    fontWeight: '600',
    textShadowColor: '#ffd700',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    paddingHorizontal: 25,
    paddingVertical: 18,
    fontSize: 20,
    marginTop: 25,
    width: '85%',
    textAlign: 'center',
    color: '#ffffff',
    borderWidth: 2,
    borderColor: 'rgba(0, 255, 255, 0.5)',
    shadowColor: '#00ffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    fontWeight: '600',
  },
  controlButtons: {
    flexDirection: 'row',
    marginTop: 25,
    gap: 20,
  },
  controlButton: {
    backgroundColor: 'rgba(0, 255, 255, 0.1)',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'rgba(0, 255, 255, 0.4)',
    shadowColor: '#00ffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  controlButtonText: {
    color: '#00ffff',
    fontSize: 16,
    fontWeight: '700',
    textShadowColor: '#00ffff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
  pauseOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pauseContent: {
    padding: 30,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 255, 255, 0.1)',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'rgba(0, 255, 255, 0.4)',
    shadowColor: '#00ffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 15,
  },
  pauseText: {
    fontSize: 36,
    fontWeight: '900',
    color: '#00ffff',
    marginBottom: 25,
    textShadowColor: '#00ffff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
    letterSpacing: 3,
  },
  pauseHint: {
    fontSize: 18,
    color: '#b8c6db',
    marginBottom: 20,
    textAlign: 'center',
  },
  resumeButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#00ffff',
    shadowColor: '#00ffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 10,
  },
  resumeButtonText: {
    color: '#00ffff',
    fontSize: 18,
    fontWeight: '800',
    textShadowColor: '#00ffff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  gameOverContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(10, 10, 15, 0.95)',
  },
  gameOverTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: '#ff0080',
    marginBottom: 25,
    textShadowColor: '#ff0080',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
    letterSpacing: 2,
  },
  finalScore: {
    fontSize: 26,
    color: '#00ffff',
    marginBottom: 15,
    fontWeight: '700',
    textShadowColor: '#00ffff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
  finalStats: {
    fontSize: 18,
    color: '#b8c6db',
    marginBottom: 40,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 255, 255, 0.05)',
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(0, 255, 255, 0.2)',
  },
  gameOverButtons: {
    gap: 20,
    alignItems: 'center',
  },
  restartButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 35,
    paddingVertical: 18,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#00ffff',
    shadowColor: '#00ffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
    minWidth: 200,
  },
  restartButtonText: {
    color: '#00ffff',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    textShadowColor: '#00ffff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  backButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 35,
    paddingVertical: 18,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    minWidth: 200,
  },
  backButtonText: {
    color: '#b8c6db',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
  fallingPiece: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
  },
  gameScrollView: {
    flex: 1,
  },
  starField: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  star: {
    position: 'absolute',
    width: 2,
    height: 2,
    backgroundColor: '#ffffff',
    borderRadius: 1,
    shadowColor: '#ffffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 2,
  },
}); 