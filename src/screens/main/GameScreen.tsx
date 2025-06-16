import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  StatusBar,
} from 'react-native';
import { LightTheme, Typography, Spacing } from '@/constants/theme';
import { validateJapaneseInput } from '@/utils/japaneseInput';
import { KanjiModeScreen } from '@/screens/game-modes/KanjiModeScreen';
import { LongTextModeScreen } from '@/screens/game-modes/LongTextModeScreen';
import { TetrisModeScreen } from '@/screens/game-modes/TetrisModeScreen';

interface GameScreenProps {
  route?: {
    params: {
      mode: 'infinite' | 'practice' | 'daily_challenge' | 'kanji_to_kana' | 'long_text' | 'tetris_typing';
    };
  };
  navigation?: {
    goBack: () => void;
  };
}

/**
 * 遊戲屏幕
 * 核心的日文打字遊戲界面
 */
export const GameScreen: React.FC<GameScreenProps> = ({ route, navigation }) => {
  const gameMode = route?.params?.mode || 'infinite';
  
  // 如果是漢字模式，使用專用的漢字模式畫面
  if (gameMode === 'kanji_to_kana') {
    return <KanjiModeScreen navigation={navigation} />;
  }
  
  // 如果是長文模式，使用專用的長文模式畫面
  if (gameMode === 'long_text') {
    return <LongTextModeScreen navigation={navigation} />;
  }
  
  // 如果是俄羅斯方塊模式，使用專用的俄羅斯方塊模式畫面
  if (gameMode === 'tetris_typing') {
    return <TetrisModeScreen navigation={navigation} />;
  }
  
  // 遊戲狀態
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'paused' | 'finished'>('idle');
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentWord, setCurrentWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [gameTime, setGameTime] = useState(0);

  // 日文單詞樣本（包含濁音和促音測試）
  const sampleWords = [
    'ひらがな', 'カタカナ', 'にほん', 'せかい', 'ありがとう',
    'こんにちは', 'さようなら', 'がくせい', 'せんせい', 'ともだち',
    'がっこう', 'いえ', 'みず', 'たべもの', 'くるま',
    // 包含濁音的詞語
    'げんき', 'だいがく', 'ばんごはん', 'ぎゅうにゅう', 'ぞう',
    // 包含促音的詞語  
    'がっこう', 'きっぷ', 'ざっし', 'てっだい', 'こっち',
    // 混合測試
    'びっくり', 'ぐっすり', 'ばったり'
  ];

  // 遊戲開始
  const startGame = useCallback(() => {
    setGameState('playing');
    setScore(0);
    setCombo(0);
    setLives(3);
    setUserInput('');
    setGameTime(0);
    generateNewWord();
  }, []);

  // 生成新單詞
  const generateNewWord = useCallback(() => {
    const randomWord = sampleWords[Math.floor(Math.random() * sampleWords.length)];
    if (randomWord) {
      setCurrentWord(randomWord);
    }
  }, []);

  // 處理輸入
  const handleInputChange = useCallback((text: string) => {
    setUserInput(text);
    
    // 使用智能輸入驗證
    const validation = validateJapaneseInput(text, currentWord);
    
    if (validation.isComplete) {
      // 完全正確，完成當前單詞
      const points = currentWord.length * 10 * (combo + 1);
      setScore(prev => prev + points);
      setCombo(prev => prev + 1);
      setUserInput('');
      generateNewWord();
    } else if (!validation.canContinue && validation.errorType === 'wrong_character') {
      // 錯誤輸入，但只有在確定錯誤時才扣分
      setCombo(0);
      setLives(prev => Math.max(0, prev - 1));
      setUserInput('');
      
      if (lives <= 1) {
        endGame();
      }
    } else if (!validation.canContinue && validation.errorType === 'too_long') {
      // 輸入過長，重置輸入
      setUserInput(text.slice(0, currentWord.length));
    }
    // 如果 validation.canContinue 為 true，則允許用戶繼續輸入（支持兩段式輸入）
  }, [currentWord, combo, lives, generateNewWord]);

  // 結束遊戲
  const endGame = useCallback(() => {
    setGameState('finished');
  }, []);

  // 暫停/恢復遊戲
  const togglePause = useCallback(() => {
    setGameState(prev => prev === 'playing' ? 'paused' : 'playing');
  }, []);

  // 返回主選單
  const goBackToMenu = useCallback(() => {
    navigation?.goBack();
  }, []);

  // 遊戲計時器
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (gameState === 'playing') {
      interval = setInterval(() => {
        setGameTime(prev => prev + 1);
      }, 1000);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [gameState]);

  // 渲染遊戲界面
  const renderGameContent = () => {
    switch (gameState) {
      case 'idle':
        return <GameStartScreen onStart={startGame} mode={gameMode} />;
      case 'playing':
      case 'paused':
        return (
          <GamePlayScreen
            currentWord={currentWord}
            userInput={userInput}
            onInputChange={handleInputChange}
            onPause={togglePause}
            isPaused={gameState === 'paused'}
            score={score}
            combo={combo}
            lives={lives}
            gameTime={gameTime}
          />
        );
      case 'finished':
        return (
          <GameEndScreen
            score={score}
            gameTime={gameTime}
            onRestart={startGame}
            onBackToMenu={goBackToMenu}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={LightTheme.primary} />
      {renderGameContent()}
    </SafeAreaView>
  );
};

// 遊戲開始屏幕
interface GameStartScreenProps {
  onStart: () => void;
  mode: string;
}

const GameStartScreen: React.FC<GameStartScreenProps> = ({ onStart, mode }) => (
  <View style={styles.centerContainer}>
    <Text style={styles.gameModeTitle}>
      {mode === 'infinite' && '無限模式'}
      {mode === 'practice' && '練習模式'}
      {mode === 'daily_challenge' && '每日挑戰'}
    </Text>
    <Text style={styles.instructions}>
      輸入出現的日文單詞來消除氣泡！
    </Text>
    <Pressable style={styles.startButton} onPress={onStart}>
      <Text style={styles.startButtonText}>開始遊戲</Text>
    </Pressable>
  </View>
);

// 遊戲進行屏幕
interface GamePlayScreenProps {
  currentWord: string;
  userInput: string;
  onInputChange: (text: string) => void;
  onPause: () => void;
  isPaused: boolean;
  score: number;
  combo: number;
  lives: number;
  gameTime: number;
}

const GamePlayScreen: React.FC<GamePlayScreenProps> = ({
  currentWord,
  userInput,
  onInputChange,
  onPause,
  isPaused,
  score,
  combo,
  lives,
  gameTime,
}) => (
  <View style={styles.gameContainer}>
    {/* 遊戲頭部信息 */}
    <View style={styles.gameHeader}>
      <Text style={styles.scoreText}>分數: {score}</Text>
      <Text style={styles.comboText}>連擊: {combo}</Text>
      <Text style={styles.livesText}>生命: {'❤️'.repeat(lives)}</Text>
      <Text style={styles.timeText}>時間: {Math.floor(gameTime / 60)}:{(gameTime % 60).toString().padStart(2, '0')}</Text>
    </View>

    {/* 遊戲區域 */}
    <View style={styles.gameArea}>
      {isPaused ? (
        <View style={styles.pauseOverlay}>
          <Text style={styles.pauseText}>遊戲暫停</Text>
          <Pressable style={styles.resumeButton} onPress={onPause}>
            <Text style={styles.resumeButtonText}>繼續</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.wordBubbleContainer}>
          <View style={styles.wordBubble}>
            <Text style={styles.currentWordText}>{currentWord}</Text>
          </View>
          
          {/* 用戶輸入顯示區域 */}
          <View style={styles.inputDisplayContainer}>
            <Text style={styles.inputDisplayLabel}>你的輸入:</Text>
            <View style={styles.inputDisplayBox}>
              {userInput ? (
                <InputProgress userInput={userInput} targetWord={currentWord} />
              ) : (
                <Text style={styles.inputDisplayPlaceholder}>開始輸入...</Text>
              )}
              <View style={styles.inputCursor} />
            </View>
          </View>
        </View>
      )}
    </View>

    {/* 輸入區域 */}
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={userInput}
        onChangeText={onInputChange}
        placeholder="在這裡輸入日文..."
        placeholderTextColor={LightTheme.textSecondary}
        autoFocus
        editable={!isPaused}
      />
    </View>

    {/* 控制按鈕 */}
    <View style={styles.controlsContainer}>
      <Pressable style={styles.pauseButton} onPress={onPause}>
        <Text style={styles.pauseButtonText}>
          {isPaused ? '繼續' : '暫停'}
        </Text>
      </Pressable>
    </View>
  </View>
);

// 輸入進度顯示組件
interface InputProgressProps {
  userInput: string;
  targetWord: string;
}

const InputProgress: React.FC<InputProgressProps> = ({ userInput, targetWord }) => {
  const validation = validateJapaneseInput(userInput, targetWord);
  
  return (
    <View style={styles.inputProgressContainer}>
      <Text style={[
        styles.inputDisplayText,
        validation.isPartialMatch ? styles.inputTextCorrect : styles.inputTextError
      ]}>
        {userInput}
      </Text>
      {validation.hint && (
        <Text style={styles.inputHint}>
          💡 {validation.hint}
        </Text>
      )}
      {validation.canContinue && validation.nextPossibleChars && validation.nextPossibleChars.length > 0 && (
        <Text style={styles.inputHint}>
          下一個字符: {validation.nextPossibleChars.join(' 或 ')}
        </Text>
      )}
    </View>
  );
};

// 遊戲結束屏幕
interface GameEndScreenProps {
  score: number;
  gameTime: number;
  onRestart: () => void;
  onBackToMenu: () => void;
}

const GameEndScreen: React.FC<GameEndScreenProps> = ({
  score,
  gameTime,
  onRestart,
  onBackToMenu,
}) => (
  <View style={styles.centerContainer}>
    <Text style={styles.gameOverText}>遊戲結束！</Text>
    <Text style={styles.finalScoreText}>最終分數: {score}</Text>
    <Text style={styles.gameTimeText}>
      遊戲時間: {Math.floor(gameTime / 60)}:{(gameTime % 60).toString().padStart(2, '0')}
    </Text>
    
    <View style={styles.endGameButtons}>
      <Pressable style={styles.restartButton} onPress={onRestart}>
        <Text style={styles.restartButtonText}>再試一次</Text>
      </Pressable>
      <Pressable style={styles.menuButton} onPress={onBackToMenu}>
        <Text style={styles.menuButtonText}>回到主選單</Text>
      </Pressable>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LightTheme.background,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.lg,
  },
  gameContainer: {
    flex: 1,
  },
  gameModeTitle: {
    fontSize: Typography.sizes.ui.title,
    fontWeight: '700',
    color: LightTheme.primary,
    marginBottom: Spacing.lg,
    textAlign: 'center',
  },
  instructions: {
    fontSize: Typography.sizes.ui.body,
    color: LightTheme.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.xl,
    lineHeight: Typography.lineHeights.ui,
  },
  startButton: {
    backgroundColor: LightTheme.primary,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: 12,
  },
  startButtonText: {
    color: LightTheme.surface,
    fontSize: Typography.sizes.ui.body,
    fontWeight: '600',
  },
  gameHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Spacing.md,
    backgroundColor: LightTheme.surface,
  },
  scoreText: {
    fontSize: Typography.sizes.ui.caption,
    fontWeight: '600',
    color: LightTheme.text,
  },
  comboText: {
    fontSize: Typography.sizes.ui.caption,
    fontWeight: '600',
    color: LightTheme.accent,
  },
  livesText: {
    fontSize: Typography.sizes.ui.caption,
  },
  timeText: {
    fontSize: Typography.sizes.ui.caption,
    color: LightTheme.textSecondary,
  },
  gameArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  wordBubbleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wordBubble: {
    backgroundColor: LightTheme.primary,
    borderRadius: 50,
    padding: Spacing.lg,
    minWidth: 120,
    minHeight: 120,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  currentWordText: {
    fontSize: Typography.sizes.bubble.hiragana,
    color: LightTheme.surface,
    fontWeight: '600',
    textAlign: 'center',
  },
  inputDisplayContainer: {
    marginTop: Spacing.xl,
    alignItems: 'center',
    backgroundColor: LightTheme.surface,
    padding: Spacing.md,
    borderRadius: 12,
    minWidth: 280,
  },
  inputDisplayLabel: {
    fontSize: Typography.sizes.ui.caption,
    color: LightTheme.textSecondary,
    marginBottom: Spacing.xs,
  },
  inputDisplayBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: LightTheme.background,
    borderWidth: 2,
    borderColor: LightTheme.primary,
    borderRadius: 8,
    padding: Spacing.md,
    minWidth: 240,
  },
  inputDisplayText: {
    fontSize: Typography.sizes.ui.body,
    color: LightTheme.text,
    fontWeight: '500',
    flex: 1,
  },
  inputDisplayPlaceholder: {
    fontSize: Typography.sizes.ui.body,
    color: LightTheme.textSecondary,
    fontWeight: '400',
    flex: 1,
  },
  inputProgressContainer: {
    flex: 1,
  },
  inputTextCorrect: {
    color: LightTheme.primary,
  },
  inputTextError: {
    color: LightTheme.error,
  },
  inputHint: {
    fontSize: Typography.sizes.ui.caption,
    color: LightTheme.textSecondary,
    marginTop: Spacing.xs,
  },
  inputCursor: {
    width: 2,
    height: 20,
    backgroundColor: LightTheme.primary,
    marginLeft: Spacing.xs,
  },
  pauseOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pauseText: {
    fontSize: Typography.sizes.ui.title,
    color: 'white',
    fontWeight: '600',
    marginBottom: Spacing.lg,
  },
  resumeButton: {
    backgroundColor: LightTheme.primary,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: 8,
  },
  resumeButtonText: {
    color: 'white',
    fontSize: Typography.sizes.ui.body,
    fontWeight: '600',
  },
  inputContainer: {
    padding: Spacing.md,
    backgroundColor: LightTheme.surface,
  },
  textInput: {
    borderWidth: 1,
    borderColor: LightTheme.primary,
    borderRadius: 8,
    padding: Spacing.md,
    fontSize: Typography.sizes.ui.body,
    color: LightTheme.text,
    backgroundColor: LightTheme.background,
  },
  controlsContainer: {
    padding: Spacing.md,
    backgroundColor: LightTheme.surface,
  },
  pauseButton: {
    backgroundColor: LightTheme.textSecondary,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: 8,
    alignSelf: 'center',
  },
  pauseButtonText: {
    color: 'white',
    fontSize: Typography.sizes.ui.caption,
    fontWeight: '600',
  },
  gameOverText: {
    fontSize: Typography.sizes.ui.title,
    fontWeight: '700',
    color: LightTheme.error,
    marginBottom: Spacing.lg,
  },
  finalScoreText: {
    fontSize: Typography.sizes.ui.subtitle,
    fontWeight: '600',
    color: LightTheme.text,
    marginBottom: Spacing.md,
  },
  gameTimeText: {
    fontSize: Typography.sizes.ui.body,
    color: LightTheme.textSecondary,
    marginBottom: Spacing.xl,
  },
  endGameButtons: {
    gap: Spacing.md,
    alignItems: 'center',
  },
  restartButton: {
    backgroundColor: LightTheme.primary,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: 8,
  },
  restartButtonText: {
    color: 'white',
    fontSize: Typography.sizes.ui.body,
    fontWeight: '600',
  },
  menuButton: {
    backgroundColor: LightTheme.textSecondary,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: 8,
  },
  menuButtonText: {
    color: 'white',
    fontSize: Typography.sizes.ui.body,
    fontWeight: '600',
  },
}); 