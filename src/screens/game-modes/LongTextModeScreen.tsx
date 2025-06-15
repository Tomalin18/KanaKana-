import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  StatusBar,
  ScrollView,
} from 'react-native';
import { LightTheme, Typography, Spacing } from '@/constants/theme';
import { validateJapaneseInput } from '@/utils/japaneseInput';
import { getRandomLongText } from '@/data/longTexts';
import type { LongTextContent, LongTextSettings } from '@/types';

interface LongTextModeScreenProps {
  route?: {
    params: {
      settings?: LongTextSettings;
    };
  };
  navigation?: {
    goBack: () => void;
  };
}

/**
 * 長文模式遊戲畫面
 * 類似一般模式的介面，但用於打字長篇日文文章
 */
export const LongTextModeScreen: React.FC<LongTextModeScreenProps> = ({ route, navigation }) => {
  const settings: LongTextSettings = route?.params?.settings || {
    includeSpaces: true,
    includePunctuation: true,
    textLength: 'short',
    textType: 'article',
    showProgress: true,
    allowBackspace: true,
  };

  // 遊戲狀態
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'paused' | 'finished'>('idle');
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentText, setCurrentText] = useState<LongTextContent | null>(null);
  const [userInput, setUserInput] = useState('');
  const [gameTime, setGameTime] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [errors, setErrors] = useState(0);

  // 生成新長文
  const generateNewText = useCallback(() => {
    const difficulty = settings.textLength === 'short' ? 'beginner' : 'normal';
    const newText = getRandomLongText(difficulty);
    setCurrentText(newText);
    setCurrentPosition(0);
    setUserInput('');
    setErrors(0);
  }, [settings]);

  // 遊戲開始
  const startGame = useCallback(() => {
    setGameState('playing');
    setScore(0);
    setCombo(0);
    setLives(3);
    setUserInput('');
    setGameTime(0);
    generateNewText();
  }, [generateNewText]);

  // 處理輸入
  const handleInputChange = useCallback((text: string) => {
    if (!currentText || gameState !== 'playing') return;

    setUserInput(text);

    // 檢查輸入是否正確（逐字比對）
    const targetText = currentText.content;
    const isCorrect = text === targetText.substring(0, text.length);
    
    if (isCorrect) {
      setCurrentPosition(text.length);
      
      // 檢查是否完成整個文章
      if (text.length === targetText.length) {
        // 完成文章
        const points = targetText.length * 5 * (combo + 1);
        setScore(prev => prev + points);
        setCombo(prev => prev + 1);
        endGame();
      }
    } else {
      // 錯誤輸入
      setCombo(0);
      setErrors(prev => prev + 1);
      setLives(prev => Math.max(0, prev - 1));
      
      if (lives <= 1) {
        endGame();
      }
      
      // 重置到正確的位置
      setUserInput(targetText.substring(0, text.length - 1));
    }
  }, [currentText, combo, lives, gameState]);

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
  }, [navigation]);

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

  // 渲染文字內容
  const renderTextContent = () => {
    if (!currentText) return null;

    const content = currentText.content;
    const typedPart = content.substring(0, currentPosition);
    const currentChar = content[currentPosition];
    const remainingPart = content.substring(currentPosition + 1);

    return (
      <View style={styles.textDisplayContainer}>
        <Text style={styles.textTitle}>{currentText.title}</Text>
        <View style={styles.textContentContainer}>
          <Text style={styles.textContent}>
            <Text style={styles.typedText}>{typedPart}</Text>
            <Text style={styles.currentChar}>{currentChar}</Text>
            <Text style={styles.remainingText}>{remainingPart}</Text>
          </Text>
        </View>
        {settings.showProgress && (
          <View style={styles.progressContainer}>
            <Text style={styles.progressText}>
              進度: {currentPosition}/{content.length} ({Math.round((currentPosition / content.length) * 100)}%)
            </Text>
          </View>
        )}
      </View>
    );
  };

  // 渲染遊戲界面
  const renderGameContent = () => {
    switch (gameState) {
      case 'idle':
        return <LongTextGameStartScreen onStart={startGame} settings={settings} />;
      case 'playing':
      case 'paused':
        return (
          <LongTextGamePlayScreen
            renderTextContent={renderTextContent}
            userInput={userInput}
            onInputChange={handleInputChange}
            onPause={togglePause}
            isPaused={gameState === 'paused'}
            score={score}
            combo={combo}
            lives={lives}
            gameTime={gameTime}
            errors={errors}
          />
        );
      case 'finished':
        return (
          <LongTextGameEndScreen
            score={score}
            gameTime={gameTime}
            errors={errors}
            currentText={currentText}
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

// 遊戲開始畫面
interface LongTextGameStartScreenProps {
  onStart: () => void;
  settings: LongTextSettings;
}

const LongTextGameStartScreen: React.FC<LongTextGameStartScreenProps> = ({ onStart, settings }) => (
  <View style={styles.centerContainer}>
    <Text style={styles.gameModeTitle}>長文模式</Text>
    <Text style={styles.instructions}>
      完整輸入日文長文來練習打字技巧！
    </Text>
    <View style={styles.settingsInfo}>
      <Text style={styles.settingText}>文章長度：{settings.textLength === 'short' ? '短篇' : '中篇'}</Text>
      <Text style={styles.settingText}>顯示進度：{settings.showProgress ? '是' : '否'}</Text>
    </View>
    <Pressable style={styles.startButton} onPress={onStart}>
      <Text style={styles.startButtonText}>開始遊戲</Text>
    </Pressable>
  </View>
);

// 遊戲進行畫面
interface LongTextGamePlayScreenProps {
  renderTextContent: () => React.ReactNode;
  userInput: string;
  onInputChange: (text: string) => void;
  onPause: () => void;
  isPaused: boolean;
  score: number;
  combo: number;
  lives: number;
  gameTime: number;
  errors: number;
}

const LongTextGamePlayScreen: React.FC<LongTextGamePlayScreenProps> = ({
  renderTextContent,
  userInput,
  onInputChange,
  onPause,
  isPaused,
  score,
  combo,
  lives,
  gameTime,
  errors,
}) => (
  <View style={styles.gameContainer}>
    {/* 遊戲狀態顯示 */}
    <View style={styles.gameStats}>
      <Text style={styles.statText}>分數: {score}</Text>
      <Text style={styles.statText}>連擊: {combo}</Text>
      <Text style={styles.statText}>❤️ {lives}</Text>
      <Text style={styles.statText}>{Math.floor(gameTime / 60)}:{(gameTime % 60).toString().padStart(2, '0')}</Text>
    </View>

    {isPaused && (
      <View style={styles.pauseOverlay}>
        <Text style={styles.pauseText}>遊戲暫停</Text>
      </View>
    )}

    {/* 文字顯示區域 */}
    {renderTextContent()}

    {/* 輸入區域 */}
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={userInput}
        onChangeText={onInputChange}
        placeholder="在這裡輸入文章內容..."
        placeholderTextColor={LightTheme.textSecondary}
        multiline
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

// 遊戲結束畫面
interface LongTextGameEndScreenProps {
  score: number;
  gameTime: number;
  errors: number;
  currentText: LongTextContent | null;
  onRestart: () => void;
  onBackToMenu: () => void;
}

const LongTextGameEndScreen: React.FC<LongTextGameEndScreenProps> = ({
  score,
  gameTime,
  errors,
  currentText,
  onRestart,
  onBackToMenu,
}) => (
  <View style={styles.centerContainer}>
    <Text style={styles.gameOverTitle}>遊戲結束</Text>
    <View style={styles.finalScoreContainer}>
      <Text style={styles.finalScoreLabel}>最終分數</Text>
      <Text style={styles.finalScoreValue}>{score}</Text>
      <Text style={styles.finalTimeText}>
        用時：{Math.floor(gameTime / 60)}分{gameTime % 60}秒
      </Text>
      <Text style={styles.finalErrorText}>
        錯誤次數：{errors}
      </Text>
      {currentText && (
        <Text style={styles.finalTextText}>
          完成文章：{currentText.title}
        </Text>
      )}
    </View>
    <View style={styles.endButtonsContainer}>
      <Pressable style={styles.restartButton} onPress={onRestart}>
        <Text style={styles.restartButtonText}>再玩一次</Text>
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
    padding: Spacing.lg,
  },
  gameModeTitle: {
    fontSize: Typography.sizes.ui.title,
    fontWeight: '700',
    color: LightTheme.primary,
    marginBottom: Spacing.md,
    textAlign: 'center',
  },
  instructions: {
    fontSize: Typography.sizes.ui.body,
    color: LightTheme.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.lg,
    lineHeight: Typography.lineHeights.ui,
  },
  settingsInfo: {
    marginBottom: Spacing.xl,
  },
  settingText: {
    fontSize: Typography.sizes.ui.caption,
    color: LightTheme.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.xs,
  },
  startButton: {
    backgroundColor: LightTheme.primary,
    borderRadius: 12,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
  },
  startButtonText: {
    color: 'white',
    fontSize: Typography.sizes.ui.body,
    fontWeight: '600',
    textAlign: 'center',
  },
  gameStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.sm,
    backgroundColor: LightTheme.surface,
    borderRadius: 12,
    marginBottom: Spacing.lg,
  },
  statText: {
    fontSize: Typography.sizes.ui.caption,
    fontWeight: '600',
    color: LightTheme.text,
  },
  pauseOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  pauseText: {
    fontSize: Typography.sizes.ui.subtitle,
    color: 'white',
    fontWeight: '600',
  },
  textDisplayContainer: {
    flex: 1,
    backgroundColor: LightTheme.surface,
    borderRadius: 16,
    marginVertical: Spacing.lg,
    padding: Spacing.lg,
    width: '100%',
  },
  textTitle: {
    fontSize: Typography.sizes.ui.subtitle,
    fontWeight: '600',
    color: LightTheme.text,
    marginBottom: Spacing.md,
    textAlign: 'center',
  },
  textScrollView: {
    flex: 1,
    width: '100%',
  },
  textScrollContent: {
    paddingBottom: Spacing.lg,
  },
  textContentContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: Spacing.md,
    marginHorizontal: Spacing.xs,
    minHeight: 200,
  },
  textContent: {
    fontSize: Typography.sizes.ui.body,
    lineHeight: Typography.lineHeights.ui * 1.6,
    textAlign: 'left',
  },
  typedText: {
    color: LightTheme.success,
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
  },
  currentChar: {
    backgroundColor: LightTheme.accent,
    color: 'white',
  },
  remainingText: {
    color: LightTheme.textSecondary,
  },
  progressContainer: {
    marginTop: Spacing.md,
    alignItems: 'center',
  },
  progressText: {
    fontSize: Typography.sizes.ui.caption,
    color: LightTheme.textSecondary,
  },
  inputContainer: {
    marginVertical: Spacing.lg,
  },
  textInput: {
    backgroundColor: LightTheme.surface,
    borderRadius: 12,
    padding: Spacing.md,
    fontSize: Typography.sizes.ui.body,
    color: LightTheme.text,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  controlsContainer: {
    alignItems: 'center',
    marginTop: Spacing.lg,
  },
  pauseButton: {
    backgroundColor: LightTheme.secondary,
    borderRadius: 12,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
  },
  pauseButtonText: {
    color: 'white',
    fontSize: Typography.sizes.ui.body,
    fontWeight: '600',
    textAlign: 'center',
  },
  gameOverTitle: {
    fontSize: Typography.sizes.ui.title,
    fontWeight: '700',
    color: LightTheme.text,
    marginBottom: Spacing.lg,
  },
  finalScoreContainer: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  finalScoreLabel: {
    fontSize: Typography.sizes.ui.body,
    color: LightTheme.textSecondary,
    marginBottom: Spacing.xs,
  },
  finalScoreValue: {
    fontSize: 48,
    fontWeight: '700',
    color: LightTheme.primary,
    marginBottom: Spacing.sm,
  },
  finalTimeText: {
    fontSize: Typography.sizes.ui.caption,
    color: LightTheme.textSecondary,
    marginBottom: Spacing.xs,
  },
  finalErrorText: {
    fontSize: Typography.sizes.ui.caption,
    color: LightTheme.textSecondary,
    marginBottom: Spacing.xs,
  },
  finalTextText: {
    fontSize: Typography.sizes.ui.caption,
    color: LightTheme.textSecondary,
  },
  endButtonsContainer: {
    gap: Spacing.md,
  },
  restartButton: {
    backgroundColor: LightTheme.primary,
    borderRadius: 12,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
  },
  restartButtonText: {
    color: 'white',
    fontSize: Typography.sizes.ui.body,
    fontWeight: '600',
    textAlign: 'center',
  },
  menuButton: {
    backgroundColor: LightTheme.surface,
    borderRadius: 12,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
  },
  menuButtonText: {
    color: LightTheme.text,
    fontSize: Typography.sizes.ui.body,
    fontWeight: '600',
    textAlign: 'center',
  },
}); 