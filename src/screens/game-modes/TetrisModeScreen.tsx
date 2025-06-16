import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getRandomWord, getWordByLength, type TetrisWord } from '@/data/tetrisData';
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
  I: [[1, 1, 1, 1]], // 長條
  O: [[1, 1], [1, 1]], // 正方形
  T: [[0, 1, 0], [1, 1, 1]], // T型
  L: [[1, 0], [1, 0], [1, 1]], // L型
  J: [[0, 1], [0, 1], [1, 1]], // J型
  S: [[0, 1, 1], [1, 1, 0]], // S型
  Z: [[1, 1, 0], [0, 1, 1]], // Z型
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
const INITIAL_FALL_SPEED = 2000; // 2秒
const SPEED_INCREASE_FACTOR = 0.9; // 每次加速10%

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
    
    // 根據方塊大小選擇合適長度的單字
    const word = getWordByLength(charCount, settings.difficulty, settings.wordType);
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
      x,
      y: 0,
      color,
    };
  }, [settings, getShapeCharCount]);

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
    
    // 檢查遊戲結束
    if (piece.y <= 0) {
      setGameState('finished');
      return;
    }
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
        setCurrentPiece(newPiece);
      }, 100);
    }
  }, [currentPiece, gameState, canPlacePiece, placePieceOnBoard, generateRandomPiece]);

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
      if (newPiecesCleared % 10 === 0) {
        setLevel(prev => prev + 1);
        setFallSpeed(prev => Math.max(500, prev * SPEED_INCREASE_FACTOR));
      }
      
      // 生成新方塊
      setTimeout(() => {
        const newPiece = generateRandomPiece();
        setCurrentPiece(newPiece);
      }, 100);
    }
  }, [currentPiece, level, piecesCleared, generateRandomPiece]);

  // 開始遊戲
  const startGame = useCallback(() => {
    setGameState('playing');
    setBoard(Array(BOARD_HEIGHT).fill(null).map(() => Array(BOARD_WIDTH).fill(0)));
    setScore(0);
    setLevel(1);
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
    const cellSize = (Dimensions.get('window').width - 40) / BOARD_WIDTH;
    
    return (
      <View style={[styles.board, { width: cellSize * BOARD_WIDTH, height: cellSize * BOARD_HEIGHT }]}>
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <View
              key={`${rowIndex}-${colIndex}`}
              style={[
                styles.cell,
                {
                  width: cellSize,
                  height: cellSize,
                  backgroundColor: cell === 1 ? '#666' : 'transparent',
                }
              ]}
            />
          ))
        )}
        
        {/* 渲染當前下落的方塊 */}
        {currentPiece && currentPiece.shape.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            if (cell === 1) {
              const x = (currentPiece.x + colIndex) * cellSize;
              const y = (currentPiece.y + rowIndex) * cellSize;
              
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
                />
              );
            }
            return null;
          })
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
              方塊會自動下落，在落地前輸入正確的假名即可消除
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
          <View style={styles.gameContainer}>
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
                <Text style={styles.wordText}>{currentPiece.word}</Text>
                <Text style={styles.kanaText}>({currentPiece.kana})</Text>
                <Text style={styles.meaningText}>{currentPiece.meaning}</Text>
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
              <View style={styles.pauseOverlay}>
                <Text style={styles.pauseText}>遊戲暫停</Text>
              </View>
            )}
          </View>
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
    flex: 1,
    padding: 20,
    alignItems: 'center',
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
  pauseText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
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
}); 