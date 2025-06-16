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

// 顏色定義
const PIECE_COLORS = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
  '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F'
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
  
  // 設定
  const settings: TetrisSettings = route?.params?.settings || {
    difficulty: 'beginner',
    wordType: 'hiragana'
  };

  // 定時器引用
  const fallTimerRef = useRef<NodeJS.Timeout | null>(null);

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
                  backgroundColor: cell === 1 ? '#666' : 'transparent',
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
                    <View
                      key={`piece-${rowIndex}-${colIndex}`}
                      style={[
                        styles.pieceCell,
                        {
                          left: x,
                          top: y,
                          width: cellSize,
                          height: cellSize,
                          backgroundColor: currentPiece.color,
                        }
                      ]}
                    >
                      <Text style={[styles.pieceCharacter, { fontSize: Math.min(cellSize * 0.6, 16) }]}>
                        {character}
                      </Text>
                    </View>
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
            <Text style={styles.title}>俄羅斯方塊模式</Text>
            <Text style={styles.description}>
              輸入方塊上的假名來消除方塊！{'\n'}
              方塊會自動下落，在落地前輸入正確的假名即可消除{'\n'}
              第5關開始出現漢字方塊，第10關出現更長的漢字方塊
            </Text>
            <View style={styles.settingsInfo}>
              <Text style={styles.settingText}>難度: {settings.difficulty}</Text>
              <Text style={styles.settingText}>類型: {settings.wordType}</Text>
            </View>
            <TouchableOpacity style={styles.startButton} onPress={startGame}>
              <Text style={styles.startButtonText}>開始遊戲</Text>
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
            <View style={styles.gameInfo}>
              <Text style={styles.infoText}>分數: {score}</Text>
              <Text style={styles.infoText}>等級: {level}</Text>
              <Text style={styles.infoText}>已消除: {piecesCleared}</Text>
            </View>
            
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
              style={styles.input}
              value={userInput}
              onChangeText={handleInputChange}
              placeholder="輸入假名..."
              autoFocus={gameState === 'playing'}
              editable={gameState === 'playing'}
            />
            
            {/* 控制按鈕 */}
            <View style={styles.controlButtons}>
              <TouchableOpacity style={styles.controlButton} onPress={togglePause}>
                <Text style={styles.controlButtonText}>
                  {gameState === 'playing' ? '暫停' : '繼續'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.controlButton} onPress={goBackToMenu}>
                <Text style={styles.controlButtonText}>返回</Text>
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
                  <Text style={styles.pauseText}>遊戲暫停</Text>
                  <Text style={styles.pauseHint}>點擊任意處繼續</Text>
                  <TouchableOpacity style={styles.resumeButton} onPress={togglePause}>
                    <Text style={styles.resumeButtonText}>繼續遊戲</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          </ScrollView>
        );
        
      case 'finished':
        return (
          <View style={styles.gameOverContainer}>
            <Text style={styles.gameOverTitle}>遊戲結束</Text>
            <Text style={styles.finalScore}>最終分數: {score}</Text>
            <Text style={styles.finalStats}>等級: {level} | 消除方塊: {piecesCleared}</Text>
            
            <View style={styles.gameOverButtons}>
              <TouchableOpacity style={styles.restartButton} onPress={restartGame}>
                <Text style={styles.restartButtonText}>重新開始</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.backButton} onPress={goBackToMenu}>
                <Text style={styles.backButtonText}>返回主選單</Text>
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
      {renderGameContent()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  settingsInfo: {
    marginBottom: 30,
    alignItems: 'center',
  },
  settingText: {
    fontSize: 14,
    color: '#4ECDC4',
    marginBottom: 5,
  },
  startButton: {
    backgroundColor: '#4ECDC4',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  gameContainer: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    minHeight: Dimensions.get('window').height - 100,
  },
  gameInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  infoText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  board: {
    borderWidth: 2,
    borderColor: '#444',
    backgroundColor: '#000',
    position: 'relative',
  },
  cell: {
    position: 'absolute',
    borderWidth: 0.5,
    borderColor: '#333',
  },
  pieceCell: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pieceCharacter: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  wordContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  wordText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4ECDC4',
  },
  kanaText: {
    fontSize: 18,
    color: '#ccc',
    marginTop: 5,
  },
  meaningText: {
    fontSize: 14,
    color: '#999',
    marginTop: 3,
  },
  hintText: {
    fontSize: 12,
    color: '#FFD93D',
    marginTop: 5,
    fontStyle: 'italic',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 18,
    marginTop: 20,
    width: '80%',
    textAlign: 'center',
  },
  controlButtons: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 15,
  },
  controlButton: {
    backgroundColor: '#666',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
  },
  controlButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  pauseOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pauseContent: {
    padding: 20,
    alignItems: 'center',
  },
  pauseText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  pauseHint: {
    fontSize: 18,
    color: '#ccc',
  },
  resumeButton: {
    backgroundColor: '#4ECDC4',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  resumeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  gameOverContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  gameOverTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF6B6B',
    marginBottom: 20,
  },
  finalScore: {
    fontSize: 24,
    color: '#4ECDC4',
    marginBottom: 10,
  },
  finalStats: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 40,
  },
  gameOverButtons: {
    gap: 15,
  },
  restartButton: {
    backgroundColor: '#4ECDC4',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  restartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#666',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
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
}); 