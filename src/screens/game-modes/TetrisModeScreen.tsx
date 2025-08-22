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
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { getRandomWordImproved, getWordByLength, getWordByLevelAndLength, type TetrisWord } from '@/data/tetrisData';
import { GlassNavBar } from '@/components/common/GlassNavBar';
import { GlassContainer } from '@/components/common/GlassContainer';
import { PauseOverlay } from '@/components/common/PauseOverlay';
import type { DifficultyLevel, CombinedDifficultyLevel } from '@/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchAllBossQuestions, type BossQuestion } from '@/services/bossQuestionService';
import { BlurView } from 'expo-blur';
import { useRatingPrompt } from '@/hooks/useRatingPrompt';
import { getRatingState } from '@/utils/ratingPrompt';
import { Audio } from 'expo-av';

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
  chineseMeaning?: string; // 中文解釋（可選）
  kanji?: string; // 漢字版本（可選）
  isKanji?: boolean; // 是否為漢字方塊
}

interface TetrisSettings {
  difficulty: CombinedDifficultyLevel;
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

// 新增：主題色切換用霓虹主色陣列
const NEON_THEME_COLORS = [
  '#00D4FF', // 青色
  '#FF8500', // 橙色
  '#8B5CF6', // 紫色
  '#FF006E', // 粉紅
  '#00FF88', // 綠色
];

// 遊戲設定
const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;
const INITIAL_FALL_SPEED = 1000; // 1秒 (原本是2秒)
const SPEED_INCREASE_FACTOR = 0.85; // 每次加速15% (原本是10%)

export const TetrisModeScreen: React.FC<TetrisModeScreenProps> = ({ route, navigation }) => {
  const { t, i18n } = useTranslation();
  
  // 調試信息
  console.log('TetrisModeScreen - Current language:', i18n.language);
  console.log('TetrisModeScreen - Available languages:', i18n.languages);
  console.log('TetrisModeScreen - Is initialized:', i18n.isInitialized);
  console.log('TetrisModeScreen - Translation test:', {
    instruction1: t('tetris.instruction1'),
    score: t('tetris.score'),
    level: t('tetris.level'),
    cleared: t('tetris.cleared'),
    pleaseInput: t('tetris.pleaseInput'),
    bestScore: t('tetris.bestScore'),
    bestLevel: t('tetris.bestLevel'),
    bestCleared: t('tetris.bestCleared'),
  });
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
    difficulty: 'elementary',
    wordType: 'mixed'  // 改為 'mixed' 以包含漢字詞彙
  };

  // 新增最高紀錄狀態
  const [bestScore, setBestScore] = useState(0);
  const [bestLevel, setBestLevel] = useState(0);
  const [bestCleared, setBestCleared] = useState(0);

  // 新增 boss 狀態
  const [bossMode, setBossMode] = useState(false);
  const [bossQuestion, setBossQuestion] = useState<BossQuestion | null>(null);
  const [bossInput, setBossInput] = useState('');
  const [bossTimer, setBossTimer] = useState(0);
  const bossTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [bossResult, setBossResult] = useState<'success' | 'fail' | null>(null);
  const bossLineAnim = useRef(new Animated.Value(1)).current;
  const [lastBossCleared, setLastBossCleared] = useState(0);
  const [bossQuestions, setBossQuestions] = useState<BossQuestion[]>([]);

  // 新增主題色 index 狀態
  const [themeColorIndex, setThemeColorIndex] = useState(0);
  const currentThemeColor = NEON_THEME_COLORS[themeColorIndex];

  // 主遊戲輸入框 ref
  const mainInputRef = useRef<TextInput>(null);

  // 評分提示 Hook
  const { triggerOnGameCompleted, recordSession } = useRatingPrompt();
  
  // 評分狀態
  const [hasRated, setHasRated] = useState(false);

  // 載入 Boss 題目
  useEffect(() => {
    const loadBossQuestions = async () => {
      try {
        const questions = await fetchAllBossQuestions();
        if (questions.length === 0) {
          console.warn('No boss questions loaded from database');
        } else {
          setBossQuestions(questions);
          console.log(`Loaded ${questions.length} boss questions from database`);
        }
      } catch (error) {
        console.error('Failed to load boss questions:', error);
      }
    };
    
    loadBossQuestions();
  }, []);

  // 讀取本地最高紀錄
  useEffect(() => {
    const loadBestRecords = async () => {
      try {
        const score = await AsyncStorage.getItem('tetris_best_score');
        const level = await AsyncStorage.getItem('tetris_best_level');
        const cleared = await AsyncStorage.getItem('tetris_best_cleared');
        if (score) setBestScore(Number(score));
        if (level) setBestLevel(Number(level));
        if (cleared) setBestCleared(Number(cleared));
      } catch (e) {
        // ignore
      }
    };
    loadBestRecords();
  }, []);

  // 遊戲結束時自動更新最高紀錄並檢查評分狀態
  useEffect(() => {
    if (gameState === 'finished') {
      let updated = false;
      if (score > bestScore) {
        setBestScore(score);
        AsyncStorage.setItem('tetris_best_score', String(score));
        updated = true;
      }
      if (level > bestLevel) {
        setBestLevel(level);
        AsyncStorage.setItem('tetris_best_level', String(level));
        updated = true;
      }
      if (piecesCleared > bestCleared) {
        setBestCleared(piecesCleared);
        AsyncStorage.setItem('tetris_best_cleared', String(piecesCleared));
        updated = true;
      }
      
      // 檢查用戶是否已經評分過
      const checkRatingStatus = async () => {
        try {
          const ratingState = await getRatingState();
          setHasRated(ratingState.hasRated);
          console.log('📊 Tetris 評分狀態檢查:', { hasRated: ratingState.hasRated });
        } catch (error) {
          console.error('❌ 檢查評分狀態失敗:', error);
        }
      };
      
      checkRatingStatus();
    }
  }, [gameState]);

  // 觸發 boss 機制
  useEffect(() => {
    if (
      !bossMode &&
      piecesCleared > 0 &&
      piecesCleared % 10 === 0 &&
      piecesCleared !== lastBossCleared &&
      gameState === 'playing' &&
      bossQuestions.length > 0
    ) {
      // 每次隨機抽一題
      const q = bossQuestions[Math.floor(Math.random() * bossQuestions.length)];
      if (q) {
        setBossMode(true);
        setBossQuestion(q);
        setBossInput('');
        setBossTimer(q.timeLimit);
        setBossResult(null);
        setLastBossCleared(piecesCleared);
        bossLineAnim.setValue(1);
        Animated.timing(bossLineAnim, {
          toValue: 0,
          duration: q.timeLimit * 1000,
          useNativeDriver: false,
        }).start();
      }
    }
  }, [piecesCleared, gameState, bossMode, lastBossCleared, bossQuestions]);

  // boss 倒數計時
  useEffect(() => {
    if (bossMode && bossTimer > 0 && bossResult === null) {
      bossTimerRef.current = setTimeout(() => {
        setBossTimer(t => t - 1);
      }, 1000);
    } else if (bossMode && bossTimer === 0 && bossResult === null) {
      setBossResult('fail');
    }
    return () => {
      if (bossTimerRef.current) clearTimeout(bossTimerRef.current);
    };
  }, [bossMode, bossTimer, bossResult]);

  // 處理 boss 輸入
  const handleBossInput = (text: string) => {
    setBossInput(text);
    if (bossQuestion && text === bossQuestion.inputContent && bossResult === null) {
      setBossResult('success');
    }
  };

  // boss 結果處理
  useEffect(() => {
    if (!bossMode || bossResult === null) return;
    if (bossResult === 'success') {
      // 播放成功音效
      const playSuccessSound = async () => {
        try {
          const { sound } = await Audio.Sound.createAsync(
            require('@/assets/audio/sfx/achievement.wav')
          );
          await sound.playAsync();
          // 音效播放完成後自動卸載
          sound.setOnPlaybackStatusUpdate((status) => {
            if (status.isLoaded && status.didJustFinish) {
              sound.unloadAsync();
            }
          });
        } catch (error) {
          console.log('音效播放失敗:', error);
        }
      };

      // 立即播放音效
      playSuccessSound();

      // 成功特效：簡化的動畫效果
      const successAnimation = Animated.sequence([
        Animated.timing(bossLineAnim, {
          toValue: 1.1,
          duration: 450,
          useNativeDriver: false,
        }),
        Animated.timing(bossLineAnim, {
          toValue: 1,
          duration: 450,
          useNativeDriver: false,
        }),
      ]);

      successAnimation.start(() => {
        // 動畫完成後處理遊戲邏輯
        setBoard(prev => {
          const newBoard = prev.slice(0, -1);
          newBoard.unshift(Array(BOARD_WIDTH).fill(0));
          return newBoard;
        });
        setLevel(Math.floor(piecesCleared / 10) + 1);
        setFallSpeed(prev => Math.max(100, prev * SPEED_INCREASE_FACTOR));
        // 新增：切換主題色
        setThemeColorIndex(idx => (idx + 1) % NEON_THEME_COLORS.length);
        setBossMode(false);
        setBossQuestion(null);
        setBossInput('');
        setBossTimer(0);
        setBossResult(null);
        setGameState('playing');
        setTimeout(() => {
          mainInputRef.current?.focus();
        }, 100);
      });
    } else if (bossResult === 'fail') {
      // 失敗特效：簡化的動畫效果
      const failAnimation = Animated.sequence([
        Animated.timing(bossLineAnim, {
          toValue: 0.9,
          duration: 450,
          useNativeDriver: false,
        }),
        Animated.timing(bossLineAnim, {
          toValue: 1,
          duration: 450,
          useNativeDriver: false,
        }),
      ]);

      failAnimation.start(() => {
        // 動畫完成後處理遊戲邏輯
        setBoard(prev => {
          const newBoard = prev.slice(1);
          newBoard.push(Array(BOARD_WIDTH).fill(1));
          return newBoard;
        });
        // 新增：切換主題色
        setThemeColorIndex(idx => (idx + 1) % NEON_THEME_COLORS.length);
        setBossMode(false);
        setBossQuestion(null);
        setBossInput('');
        setBossTimer(0);
        setBossResult(null);
        setGameState('playing');
        setTimeout(() => {
          mainInputRef.current?.focus();
        }, 100);
      });
    }
  }, [bossResult, bossMode, piecesCleared]);

  // 定時器引用
  const fallTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 當題目（currentPiece）id 變動時，自動清空輸入框
  const prevPieceId = useRef<string | null>(null);
  useEffect(() => {
    if (currentPiece && currentPiece.id !== prevPieceId.current) {
      setUserInput('');
      prevPieceId.current = currentPiece.id;
    }
  }, [currentPiece]);

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
    console.log(`🎲 生成方塊 - 形狀: ${shapeKey}, 格數: ${charCount}, 等級: ${level}`);
    console.log(`⚙️ 設定 - 難度: ${settings.difficulty}, 詞彙類型: ${settings.wordType}`);
    
    // 使用簡單的隨機選擇函數，更接近原本的實現
    let word;
    try {
      // 先嘗試根據長度選擇
      word = getWordByLength(charCount, settings.difficulty, settings.wordType);
    } catch (error) {
      console.error('❌ getWordByLength 錯誤:', error);
      // 使用備用方法
      word = getRandomWordImproved(settings.difficulty, settings.wordType);
    }
    
    // 調試信息
    console.log(`📝 選擇單字:`, word);
    console.log(`  單字: ${word?.word}`);
    console.log(`  假名: ${word?.kana}`);
    console.log(`  意思: ${word?.meaning}`);
    
    // 安全檢查：確保 word 對象有效
    if (!word || typeof word !== 'object' || !word.word || !word.kana || !word.meaning) {
      console.error('Invalid word object:', word);
      // 使用備用單字
      const fallbackWord = {
        word: 'あめ',
        kana: 'あめ',
        meaning: '雨',
        difficulty: 'beginner' as const,
        category: '天氣'
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
      setCurrentPiece((prev: TetrisPiece | null) => prev ? { ...prev, y: newY } : null);
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
    
    // 每個階段的加速度：階段1=0.6, 階段2=0.9, 階段3=1.2, 等等 (調低加速度)
    const stageSpeedIncrease = stage * 0.3 + 0.3;
    
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
      
      setScore((prev: number) => prev + totalScore);
      setPiecesCleared((prev: number) => prev + 1);
      setCurrentPiece(null);
      setUserInput('');
      
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
  }, [currentPiece, level, piecesCleared, generateRandomPiece, canPlacePiece]);

  // 開始遊戲
  const startGame = useCallback(() => {
    setGameState('playing');
    setBoard(Array(BOARD_HEIGHT).fill(null).map(() => Array(BOARD_WIDTH).fill(0)));
    setScore(0);
    setLevel(1); // 從1級開始
    setPiecesCleared(0);
    setFallSpeed(INITIAL_FALL_SPEED);
    setUserInput('');
    
    const newPiece = generateRandomPiece();
    setCurrentPiece(newPiece);
    
    // 記錄會話
    recordSession();
  }, [generateRandomPiece, recordSession]);

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

  // 設置下落定時器（bossMode 時暫停）
  useEffect(() => {
    if (gameState === 'playing' && !bossMode) {
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
  }, [gameState, fallSpeed, dropPiece, bossMode]);

  // 渲染遊戲板
  const renderBoard = () => {
    const screenWidth = Dimensions.get('window').width;
    const availableWidth = screenWidth - 40; // 減去 padding
    const availableHeight = 340; // 固定高度，避免被鍵盤遮住
    // 預留邊框厚度
    const borderThickness = 6;
    const cellSizeByWidth = (availableWidth - borderThickness * 2) / BOARD_WIDTH;
    const cellSizeByHeight = (availableHeight - borderThickness * 2) / BOARD_HEIGHT;
    const cellSize = Math.min(cellSizeByWidth, cellSizeByHeight, 25);
    const boardWidth = cellSize * BOARD_WIDTH;
    const boardHeight = cellSize * BOARD_HEIGHT;
    return (
      <View style={{
        borderWidth: borderThickness,
        borderColor: currentThemeColor,
        borderRadius: 12,
        shadowColor: currentThemeColor,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 25,
        elevation: 15,
        backgroundColor: 'rgba(0,0,0,0.8)',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        width: boardWidth + borderThickness * 2,
        height: boardHeight + borderThickness * 2,
      }}>
        <View style={{
          width: boardWidth,
          height: boardHeight,
          position: 'relative',
          backgroundColor: 'rgba(0,0,0,0.8)',
          borderRadius: 6,
          overflow: 'hidden',
        }}>
          {board.map((row: number[], rowIndex: number) =>
            row.map((cell: number, colIndex: number) => (
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
                    shadowColor: cell === 1 ? currentThemeColor : 'transparent',
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
              {currentPiece.shape.map((row: number[], rowIndex: number) =>
                row.map((cell: number, colIndex: number) => {
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
      </View>
    );
  };

  // 渲染遊戲界面
  const renderGameContent = () => {
    // bossMode 彈跳卡片
    const bossCard = bossMode && bossQuestion && (
      <View
        style={{
          position: 'absolute',
          top: 80,
          left: '5%',
          width: '90%',
          alignItems: 'center',
          zIndex: 21,
        }}>
        <Animated.View style={{
          width: '100%',
          backgroundColor: bossResult === 'success' ? 'rgba(0, 40, 20, 0.95)' : 
                           bossResult === 'fail' ? 'rgba(40, 10, 10, 0.95)' : 'rgba(10, 30, 40, 0.92)',
          borderRadius: 20,
          paddingVertical: 28,
          paddingHorizontal: 20,
          alignItems: 'center',
          borderWidth: 2.5,
          borderColor: bossResult === 'success' ? '#00ff00' : 
                      bossResult === 'fail' ? '#ff0000' : currentThemeColor,
          shadowColor: bossResult === 'success' ? '#00ff00' : 
                      bossResult === 'fail' ? '#ff0000' : currentThemeColor,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: bossResult === 'success' ? 0.8 : 
                        bossResult === 'fail' ? 0.8 : 0.4,
          shadowRadius: bossResult === 'success' ? 25 : 
                       bossResult === 'fail' ? 25 : 18,
          elevation: 16,
          transform: [{
            scale: bossResult ? bossLineAnim : 1
          }]
        }}>
          <Text style={{
            fontSize: 22,
            fontWeight: '900',
            color: bossResult === 'success' ? '#00ff00' : 
                   bossResult === 'fail' ? '#ff0000' : currentThemeColor,
            marginBottom: 12,
            letterSpacing: 2,
            textShadowColor: bossResult === 'success' ? '#00ff00' : 
                            bossResult === 'fail' ? '#ff0000' : currentThemeColor,
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 12,
          }}>
            {bossResult === 'success' ? `✅ ${t('tetris.bossDefeated')}` : 
             bossResult === 'fail' ? `❌ ${t('tetris.bossFailed')}` : t('tetris.bossChallenge')}
          </Text>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: 18,
            textAlign: 'center',
            lineHeight: 32,
            textShadowColor: currentThemeColor,
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 8,
          }}>
            {bossResult === 'success' ? t('tetris.congratulationsChallengeSuccess') : 
             bossResult === 'fail' ? t('tetris.timeUpChallengeFailed') : bossQuestion.displayContent}
          </Text>
          {/* 倒數引線動畫 - 成功時變為綠色進度條，失敗時變為紅色 */}
          <View style={{width: '100%', height: 8, backgroundColor: '#003a4d', borderRadius: 4, marginBottom: 14, overflow: 'hidden'}}>
            <Animated.View style={{
              height: 8,
              backgroundColor: bossResult === 'success' ? '#00ff00' : 
                              bossResult === 'fail' ? '#ff0000' : currentThemeColor,
              borderRadius: 4,
              width: bossResult ? '100%' : bossLineAnim.interpolate({inputRange: [0,1], outputRange: ['0%','100%']}),
              shadowColor: bossResult === 'success' ? '#00ff00' : 
                          bossResult === 'fail' ? '#ff0000' : currentThemeColor,
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.7,
              shadowRadius: 8,
            }}/>
          </View>
          <Text style={{
            fontSize: 15,
            color: bossResult === 'success' ? '#00ff00' : 
                   bossResult === 'fail' ? '#ff0000' : currentThemeColor,
            marginBottom: 12,
            fontWeight: '700',
            letterSpacing: 1,
            textShadowColor: bossResult === 'success' ? '#00ff00' : 
                            bossResult === 'fail' ? '#ff0000' : currentThemeColor,
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 6,
          }}>
            {bossResult === 'success' ? `🎉 ${t('tetris.returningToGame')}` : 
             bossResult === 'fail' ? `😔 ${t('tetris.returningToGame')}` : `${t('tetris.remainingTime')}：${bossTimer} ${t('tetris.seconds')}`}
          </Text>
          {!bossResult && (
            <TextInput
              style={{
                backgroundColor: 'rgba(255,255,255,0.13)',
                borderRadius: 12,
                borderWidth: 2,
                borderColor: currentThemeColor,
                padding: 14,
                fontSize: 18,
                minWidth: 200,
                textAlign: 'center',
                marginBottom: 6,
                color: '#fff',
                fontWeight: '700',
                shadowColor: currentThemeColor,
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 4,
              }}
              value={bossInput}
              onChangeText={handleBossInput}
              placeholder={t('tetris.pleaseInputFull')}
              placeholderTextColor="#b8c6db"
              editable={bossResult===null}
              autoFocus
            />
          )}
        </Animated.View>
      </View>
    );
    // 主內容：左右分佈，固定在上方
    const mainContent = (() => {
      switch (gameState) {
        case 'idle':
          return (
            <ScrollView 
              style={styles.menuScrollView}
              contentContainerStyle={styles.menuContainer}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              <Animated.Text 
                style={[
                  styles.title,
                  {
                    transform: [{ scale: titlePulse }],
                  }
                ]}
              >
🎯 Tetris Mode
              </Animated.Text>
              <View style={{marginBottom: 30}}>
                <Text style={styles.description}>
                  {t('tetris.instruction1')}{'\n'}
                  {t('tetris.instruction2')}{'\n'}
                  {t('tetris.instruction3')}{'\n'}
                  {t('tetris.instruction4')}
                </Text>
              </View>
              <View style={styles.settingsInfo}>
                <Text style={{color: currentThemeColor, fontWeight: 'bold', fontSize: 16}}>🏅 {t('tetris.bestScore')}：{bestScore}</Text>
                <Text style={{color: currentThemeColor, fontWeight: 'bold', fontSize: 16}}>📈 {t('tetris.bestLevel')}：{bestLevel}</Text>
                <Text style={{color: currentThemeColor, fontWeight: 'bold', fontSize: 16}}>🧩 {t('tetris.bestCleared')}：{bestCleared}</Text>
              </View>
              <View style={styles.startButtonContainer}>
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
                    <Text style={styles.startButtonText}>🚀 {t('gameSettings.startGame')} 🚀</Text>
                  </Animated.View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          );
        
        case 'playing':
        case 'paused':
          return (
            <View style={{ flex: 1 }}>
              {/* 主內容：左右分佈，固定在上方 */}
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', paddingHorizontal: 10 }}>
                {/* 左側：方塊堆疊區 */}
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  {renderBoard()}
                </View>
                {/* 右側：題目提示、分數等級、輸入匡 */}
                <View style={{ flex: 1, marginLeft: 10, justifyContent: 'flex-start', marginTop: 10 }}>
                  {/* 題目提示 */}
                  {currentPiece && (
                    <View style={[styles.wordContainer, { marginTop: 0, padding: 12, borderRadius: 14, borderColor: currentThemeColor, shadowColor: currentThemeColor, backgroundColor: currentThemeColor + '22' }]}> 
                      {currentPiece.isKanji ? (
                        <>
                          <Text style={[styles.wordText, { fontSize: 20, color: currentThemeColor, textShadowColor: currentThemeColor }]}>{currentPiece.kanji}</Text>
                          <Text style={[styles.kanaText, { fontSize: 14, color: currentThemeColor }]}>讀音: {currentPiece.kana}</Text>
                          <Text style={[styles.meaningText, { fontSize: 13, color: currentThemeColor }]}>{currentPiece.meaning}</Text>
                          {currentPiece.chineseMeaning && (
                            <Text style={[styles.meaningText, { fontSize: 12, color: currentThemeColor, opacity: 0.8 }]}>{currentPiece.chineseMeaning}</Text>
                          )}
                        </>
                      ) : (
                        <>
                          <Text style={[styles.wordText, { fontSize: 20, color: currentThemeColor, textShadowColor: currentThemeColor }]}>{currentPiece.word}</Text>
                          <Text style={[styles.kanaText, { fontSize: 14, color: currentThemeColor }]}>{'(' + currentPiece.kana + ')'}</Text>
                          <Text style={[styles.meaningText, { fontSize: 13, color: currentThemeColor }]}>{currentPiece.meaning}</Text>
                          {currentPiece.chineseMeaning && (
                            <Text style={[styles.meaningText, { fontSize: 12, color: currentThemeColor, opacity: 0.8 }]}>{currentPiece.chineseMeaning}</Text>
                          )}
                        </>
                      )}
                    </View>
                  )}
                  {/* 分數等級消除數 */}
                  <View style={{ backgroundColor: currentThemeColor + '22', borderRadius: 14, borderWidth: 1.5, borderColor: currentThemeColor, marginTop: 18, padding: 10, alignItems: 'center', shadowColor: currentThemeColor, shadowOpacity: 0.3, shadowRadius: 8 }}>
                    <Text style={{ color: currentThemeColor, fontSize: 15, fontWeight: '700', marginBottom: 4 }}>🏆 {t('tetris.score')}: {score}</Text>
                    <Text style={{ color: currentThemeColor, fontSize: 15, fontWeight: '700', marginBottom: 4 }}>📈 {t('tetris.level')}: {level}</Text>
                    <Text style={{ color: currentThemeColor, fontSize: 15, fontWeight: '700' }}>🧩 {t('tetris.cleared')}: {piecesCleared}</Text>
                  </View>
                  {/* 輸入匡 */}
                  <TextInput
                    ref={mainInputRef}
                    style={[
                      styles.input,
                      { marginTop: 18, width: '100%', fontSize: 18 },
                      inputFocused && {
                        borderColor: currentThemeColor,
                        shadowColor: currentThemeColor,
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.6,
                        shadowRadius: 15,
                        elevation: 8,
                      },
                      { borderColor: currentThemeColor, color: currentThemeColor }
                    ]}
                    value={userInput}
                    onChangeText={handleInputChange}
                    placeholder={t('tetris.pleaseInput')}
                    placeholderTextColor={currentThemeColor + '88'}
                    autoFocus={gameState === 'playing' && !bossMode}
                    editable={gameState === 'playing' && !bossMode}
                    onFocus={() => setInputFocused(true)}
                    onBlur={() => setInputFocused(false)}
                  />
                </View>
              </View>
            </View>
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
                💀 {t('tetris.gameOver')} 💀
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
                🏆 {t('tetris.finalScore')}: {score} 🏆
              </Animated.Text>
              <Text style={styles.finalStats}>
                📊 {t('tetris.level')}: {level} | 🧩 {t('tetris.clearedBlocks')}: {piecesCleared} 📊
              </Text>
              {/* 新增最高紀錄顯示 */}
              <View style={{marginBottom: 20, backgroundColor: 'rgba(0,255,255,0.07)', borderRadius: 10, padding: 10, borderWidth: 1, borderColor: '#00ffff33'}}>
                <Text style={{color: currentThemeColor, fontWeight: 'bold', fontSize: 15, marginBottom: 2}}>🏅 {t('tetris.bestRecord')}</Text>
                <Text style={{color: currentThemeColor, fontSize: 14}}>{t('tetris.score')}：{bestScore}　{t('tetris.level')}：{bestLevel}　{t('tetris.cleared')}：{bestCleared}</Text>
              </View>
              <View style={styles.gameOverButtons}>
                <TouchableOpacity style={styles.restartButton} onPress={restartGame}>
                  <Text style={styles.restartButtonText}>🔄 {t('tetris.restart')} 🔄</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.backButton} onPress={goBackToMenu}>
                  <Text style={styles.backButtonText}>🏠 {t('tetris.backToMenu')} 🏠</Text>
                </TouchableOpacity>
                {/* 評分按鈕 - 使用新的評分條件 */}
                {(() => {
                  // 使用與 nativeRating.ts 中相同的條件
                  const shouldShowRating = (
                    score >= 1500 || 
                    level >= 8 || 
                    piecesCleared >= 25 || 
                    (score > bestScore || level > bestLevel || piecesCleared > bestCleared)
                  ) && !hasRated;
                  
                  console.log('🔍 Tetris 評分按鈕顯示條件檢查:', { 
                    score, 
                    level,
                    piecesCleared, 
                    hasRated,
                    shouldShowRating,
                    condition1: score >= 1500,
                    condition2: level >= 8,
                    condition3: piecesCleared >= 25,
                    condition4: !hasRated,
                    bestScore,
                    bestLevel,
                    bestCleared
                  });
                  return shouldShowRating;
                })() && (
                  <TouchableOpacity 
                    style={[styles.ratingButton, { borderColor: currentThemeColor }]} 
                    onPress={async () => {
                      console.log('🎯 Tetris 評分按鈕被點擊');
                      
                      try {
                        const { Linking } = await import('react-native');
                        const { Platform } = await import('react-native');
                        
                        // 直接打開 App Store 評分頁面
                        const appStoreUrl = Platform.select({
                          ios: 'https://apps.apple.com/tw/app/kanakana-%E3%81%8B%E3%81%AA%E3%82%AB%E3%83%8A/id6748865873?action=write-review',
                          android: 'market://details?id=com.kanakana.app&showAllReviews=true',
                        });
                        
                        if (appStoreUrl) {
                          const canOpen = await Linking.canOpenURL(appStoreUrl);
                          if (canOpen) {
                            await Linking.openURL(appStoreUrl);
                            console.log('✅ 成功打開 App Store 評分頁面');
                          } else {
                            console.log('❌ 無法打開 App Store 連結');
                          }
                        }
                      } catch (error) {
                        console.error('❌ 打開 App Store 失敗:', error);
                      }
                    }}
                  >
                    <Text style={styles.ratingButtonText}>⭐ {t('tetris.rateUs')} ⭐</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          );
        
        default:
          return null;
      }
    })();
    return (
      <View style={{flex:1}}>
        {mainContent}
        {bossMode && (
          <BlurView intensity={30} tint="light" style={{position:'absolute',top:0,left:0,right:0,bottom:0,zIndex:20}} />
        )}
        {bossCard}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* 星空背景 */}
      <View style={styles.starField}>
        {stars.map((star: {id: number, x: number, y: number, opacity: number}) => (
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
      
      {/* 統一導航欄 */}
      <GlassNavBar
        title={t('mainMenu.tetrisMode')}
        leftButton={{
          text: `← ${t('common.back')}`,
          onPress: () => navigation?.goBack(),
          style: 'secondary',
        }}
        rightButton={
          gameState === 'playing' || gameState === 'paused'
            ? {
                text: gameState === 'paused' ? t('common.resume') : t('common.pause'),
                onPress: togglePause,
                style: 'primary',
              }
            : undefined
        }
      />
      
      {renderGameContent()}
      
      {/* 暫停覆蓋層 */}
      <PauseOverlay
        visible={gameState === 'paused'}
        onResume={togglePause}
        onRestart={startGame}
        onMainMenu={() => navigation?.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0f',
  },
  menuScrollView: {
    flex: 1,
  },
  menuContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 40, // 增加底部間距
    backgroundColor: 'rgba(10, 10, 15, 0.95)',
  },
  startButtonContainer: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
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
    textAlign: 'left',
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
  ratingButton: {
    backgroundColor: 'rgba(0, 255, 0, 0.1)',
    paddingHorizontal: 35,
    paddingVertical: 18,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#00ff00',
    shadowColor: '#00ff00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 8,
    minWidth: 200,
  },
  ratingButtonText: {
    color: '#00ff00',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    textShadowColor: '#00ff00',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
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
  infoItem: {
    alignItems: 'center',
  },
}); 