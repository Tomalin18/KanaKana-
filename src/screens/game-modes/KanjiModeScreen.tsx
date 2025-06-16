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
import { TechTheme, Typography, Spacing, Shadows, TechColors } from '@/constants/theme';
import { validateJapaneseInput } from '@/utils/japaneseInput';
import { getRandomKanjiWord } from '@/data/kanjiWords';
import { GlassNavBar } from '@/components/common/GlassNavBar';
import { GlassContainer } from '@/components/common/GlassContainer';
import { PauseOverlay } from '@/components/common/PauseOverlay';
import type { KanjiWord, KanjiModeSettings } from '@/types';

interface KanjiModeScreenProps {
  route?: {
    params: {
      settings?: KanjiModeSettings;
    };
  };
  navigation?: {
    goBack: () => void;
  };
}

/**
 * 漢字模式遊戲畫面
 * 顯示漢字，讓用戶輸入對應的假名讀音
 */
export const KanjiModeScreen: React.FC<KanjiModeScreenProps> = ({ route, navigation }) => {
  const settings: KanjiModeSettings = route?.params?.settings || {
    showMeaning: true,
    difficultyLevel: 'jlpt_n5',
    readingType: 'hiragana',
    hintDelay: 5,
    showStrokeCount: false,
  };

  // 遊戲狀態
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'paused' | 'finished'>('idle');
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentWord, setCurrentWord] = useState<KanjiWord | null>(null);
  const [userInput, setUserInput] = useState('');
  const [gameTime, setGameTime] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // 生成新漢字詞彙
  const generateNewWord = useCallback(() => {
    // 轉換 difficultyLevel 格式 (jlpt_n5 -> n5)
    const level = settings.difficultyLevel.replace('jlpt_', '') as 'n5' | 'n4' | 'n3' | 'n2' | 'n1';
    const newWord = getRandomKanjiWord(level);
    setCurrentWord(newWord);
    setShowMeaning(false);
    setShowHint(false);
    
    // 根據設定決定是否延遲顯示提示
    if (settings.hintDelay > 0) {
      setTimeout(() => {
        setShowMeaning(settings.showMeaning);
      }, settings.hintDelay * 1000);
    } else {
      setShowMeaning(settings.showMeaning);
    }
  }, [settings]);

  // 遊戲開始
  const startGame = useCallback(() => {
    setGameState('playing');
    setScore(0);
    setCombo(0);
    setLives(3);
    setUserInput('');
    setGameTime(0);
    generateNewWord();
  }, [generateNewWord]);

  // 處理輸入
  const handleInputChange = useCallback((text: string) => {
    setUserInput(text);
    
    if (!currentWord) return;

    // 根據設定決定驗證的目標讀音
    let targetReading = '';
    if (settings.readingType === 'hiragana') {
      targetReading = currentWord.hiragana;
    } else if (settings.readingType === 'katakana' && currentWord.katakana) {
      targetReading = currentWord.katakana;
    } else {
      // both 模式，接受任一種讀音
      targetReading = currentWord.hiragana;
    }

    const validation = validateJapaneseInput(text, targetReading);
    
    if (validation.isComplete) {
      // 完全正確
      const points = currentWord.kanji.length * 15 * (combo + 1);
      setScore(prev => prev + points);
      setCombo(prev => prev + 1);
      setUserInput('');
      generateNewWord();
    } else if (!validation.canContinue && validation.errorType === 'wrong_character') {
      // 錯誤輸入
      setCombo(0);
      setLives(prev => Math.max(0, prev - 1));
      setUserInput('');
      
      if (lives <= 1) {
        endGame();
      }
    } else if (settings.readingType === 'both' && !validation.canContinue) {
      // 在 both 模式下，如果平假名不匹配，嘗試片假名
      if (currentWord.katakana) {
        const katakanaValidation = validateJapaneseInput(text, currentWord.katakana);
        if (katakanaValidation.isComplete) {
          const points = currentWord.kanji.length * 15 * (combo + 1);
          setScore(prev => prev + points);
          setCombo(prev => prev + 1);
          setUserInput('');
          generateNewWord();
        }
      }
    }
  }, [currentWord, combo, lives, settings, generateNewWord]);

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

  // 顯示提示
  const showHintHandler = useCallback(() => {
    setShowHint(true);
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
        return <KanjiGameStartScreen onStart={startGame} settings={settings} />;
      case 'playing':
      case 'paused':
        return (
          <>
            <KanjiGamePlayScreen
              currentWord={currentWord}
              userInput={userInput}
              onInputChange={handleInputChange}
              onShowHint={showHintHandler}
              isPaused={gameState === 'paused'}
              score={score}
              combo={combo}
              lives={lives}
              gameTime={gameTime}
              showMeaning={showMeaning}
              showHint={showHint}
              settings={settings}
            />
            <PauseOverlay
              visible={gameState === 'paused'}
              onResume={togglePause}
              onRestart={startGame}
              onMainMenu={goBackToMenu}
            />
          </>
        );
      case 'finished':
        return (
          <KanjiGameEndScreen
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
    <View style={styles.container}>
      {/* 星空背景 */}
      <StarfieldBackground />
      
      {/* 統一導航欄 */}
      <GlassNavBar
        title="漢字模式"
        leftButton={{
          text: '← 返回',
          onPress: goBackToMenu,
          style: 'secondary',
        }}
        rightButton={
          gameState === 'playing' || gameState === 'paused'
            ? {
                text: gameState === 'paused' ? '繼續' : '暫停',
                onPress: togglePause,
                style: 'primary',
              }
            : undefined
        }
      />
      
      {/* 遊戲內容 */}
      {renderGameContent()}
    </View>
  );
};

/**
 * 星空背景組件
 */
const StarfieldBackground: React.FC = () => {
  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.6 + 0.2,
    size: Math.random() * 2 + 1,
  }));

  return (
    <View style={styles.starfield}>
      {stars.map((star) => (
        <View
          key={star.id}
          style={[
            styles.star,
            {
              left: `${star.left}%`,
              top: `${star.top}%`,
              opacity: star.opacity,
              width: star.size,
              height: star.size,
            },
          ]}
        />
      ))}
    </View>
  );
};

// 遊戲開始畫面
interface KanjiGameStartScreenProps {
  onStart: () => void;
  settings: KanjiModeSettings;
}

const KanjiGameStartScreen: React.FC<KanjiGameStartScreenProps> = ({ onStart, settings }) => (
  <View style={styles.centerContainer}>
    <GlassContainer
      variant="accent"
      glowEffect={true}
      neonBorder={true}
      style={styles.startContainer}
    >
      <Text style={styles.gameModeTitle}>🈯 漢字模式</Text>
      <Text style={styles.instructions}>
        看漢字，輸入對應的{settings.readingType === 'hiragana' ? '平假名' : 
                          settings.readingType === 'katakana' ? '片假名' : '假名'}讀音！
      </Text>
      <View style={styles.settingsInfo}>
        <Text style={styles.settingText}>難度：{settings.difficultyLevel.toUpperCase()}</Text>
        <Text style={styles.settingText}>
          顯示意思：{settings.showMeaning ? '是' : '否'}
        </Text>
      </View>
      <Pressable 
        style={({ pressed }) => [
          styles.startButton,
          pressed && styles.buttonPressed,
          Shadows.neon.blue,
        ]} 
        onPress={onStart}
      >
        <Text style={styles.startButtonText}>🚀 開始遊戲</Text>
      </Pressable>
    </GlassContainer>
  </View>
);

// 遊戲進行畫面
interface KanjiGamePlayScreenProps {
  currentWord: KanjiWord | null;
  userInput: string;
  onInputChange: (text: string) => void;
  onShowHint: () => void;
  isPaused: boolean;
  score: number;
  combo: number;
  lives: number;
  gameTime: number;
  showMeaning: boolean;
  showHint: boolean;
  settings: KanjiModeSettings;
}

const KanjiGamePlayScreen: React.FC<KanjiGamePlayScreenProps> = ({
  currentWord,
  userInput,
  onInputChange,
  onShowHint,
  isPaused,
  score,
  combo,
  lives,
  gameTime,
  showMeaning,
  showHint,
  settings,
}) => (
  <View style={styles.gameContainer}>
    {/* 遊戲狀態顯示 */}
    <GlassContainer
      variant="secondary"
      glowEffect={false}
      style={styles.gameStats}
    >
      <Text style={styles.statText}>分數: {score}</Text>
      <Text style={styles.statText}>連擊: {combo}</Text>
      <Text style={styles.statText}>❤️ {lives}</Text>
      <Text style={styles.statText}>{Math.floor(gameTime / 60)}:{(gameTime % 60).toString().padStart(2, '0')}</Text>
    </GlassContainer>

    {/* 漢字顯示區域 */}
    <GlassContainer
      variant="accent"
      glowEffect={true}
      neonBorder={true}
      style={styles.kanjiDisplayContainer}
    >
      {currentWord && (
        <>
          <Text style={styles.kanjiText}>{currentWord.kanji}</Text>
          {showMeaning && (
            <Text style={styles.meaningText}>{currentWord.meaning}</Text>
          )}
          {showHint && (
            <Text style={styles.hintText}>
              提示：{settings.readingType === 'hiragana' ? currentWord.hiragana : 
                    settings.readingType === 'katakana' && currentWord.katakana ? currentWord.katakana :
                    `${currentWord.hiragana} / ${currentWord.katakana || ''}`}
            </Text>
          )}
          {settings.showStrokeCount && currentWord.strokeCount && (
            <Text style={styles.strokeText}>筆畫：{currentWord.strokeCount}</Text>
          )}
        </>
      )}
    </GlassContainer>

    {/* 輸入區域 */}
    <GlassContainer
      variant="primary"
      glowEffect={true}
      style={styles.inputContainer}
    >
      <TextInput
        style={styles.textInput}
        value={userInput}
        onChangeText={onInputChange}
        placeholder="輸入假名讀音..."
        placeholderTextColor={TechTheme.textSecondary}
        autoFocus
        editable={!isPaused}
      />
    </GlassContainer>

    {/* 控制按鈕 */}
    <View style={styles.controlsContainer}>
      <Pressable 
        style={({ pressed }) => [
          styles.controlButton,
          pressed && styles.buttonPressed,
        ]} 
        onPress={onShowHint}
      >
        <Text style={styles.controlButtonText}>💡 提示</Text>
      </Pressable>
    </View>
  </View>
);

// 遊戲結束畫面
interface KanjiGameEndScreenProps {
  score: number;
  gameTime: number;
  onRestart: () => void;
  onBackToMenu: () => void;
}

const KanjiGameEndScreen: React.FC<KanjiGameEndScreenProps> = ({
  score,
  gameTime,
  onRestart,
  onBackToMenu,
}) => (
  <View style={styles.centerContainer}>
    <GlassContainer
      variant="surface"
      glowEffect={true}
      neonBorder={true}
      style={styles.endGameContainer}
    >
      <Text style={styles.gameOverTitle}>🎮 遊戲結束！</Text>
      <View style={styles.finalScoreContainer}>
        <Text style={styles.finalScoreLabel}>最終分數</Text>
        <Text style={styles.finalScoreValue}>{score}</Text>
        <Text style={styles.finalTimeText}>
          用時：{Math.floor(gameTime / 60)}分{gameTime % 60}秒
        </Text>
      </View>
      <View style={styles.endButtonsContainer}>
        <Pressable 
          style={({ pressed }) => [
            styles.restartButton,
            pressed && styles.buttonPressed,
            Shadows.neon.blue,
          ]} 
          onPress={onRestart}
        >
          <Text style={styles.restartButtonText}>🔄 再玩一次</Text>
        </Pressable>
        <Pressable 
          style={({ pressed }) => [
            styles.menuButton,
            pressed && styles.buttonPressed,
          ]} 
          onPress={onBackToMenu}
        >
          <Text style={styles.menuButtonText}>🏠 回到主選單</Text>
        </Pressable>
      </View>
    </GlassContainer>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: TechTheme.background,
  },
  
  // 星空背景
  starfield: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  
  star: {
    position: 'absolute',
    backgroundColor: TechColors.neonBlue,
    borderRadius: 50,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.lg,
  },
  
  startContainer: {
    alignItems: 'center',
    minWidth: '90%',
  },
  
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.95 }],
  },
  gameContainer: {
    flex: 1,
    padding: Spacing.lg,
  },
  
  endGameContainer: {
    alignItems: 'center',
    minWidth: '90%',
  },
  gameModeTitle: {
    fontSize: Typography.sizes.ui.title,
    fontWeight: '700',
    color: TechTheme.primary,
    marginBottom: Spacing.md,
    textAlign: 'center',
  },
  instructions: {
    fontSize: Typography.sizes.ui.body,
    color: TechTheme.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.lg,
    lineHeight: Typography.lineHeights.ui,
  },
  settingsInfo: {
    marginBottom: Spacing.xl,
  },
  settingText: {
    fontSize: Typography.sizes.ui.caption,
    color: TechTheme.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.xs,
  },
  startButton: {
    backgroundColor: TechTheme.primary,
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
    backgroundColor: TechTheme.surface,
    borderRadius: 12,
    marginBottom: Spacing.lg,
  },
  statText: {
    fontSize: Typography.sizes.ui.caption,
    fontWeight: '600',
    color: TechTheme.text,
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
  kanjiDisplayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: TechTheme.surface,
    borderRadius: 16,
    marginVertical: Spacing.lg,
    padding: Spacing.xl,
  },
  kanjiText: {
    fontSize: 120,
    fontWeight: '400',
    color: TechTheme.text,
    marginBottom: Spacing.md,
  },
  meaningText: {
    fontSize: Typography.sizes.ui.subtitle,
    color: TechTheme.textSecondary,
    marginBottom: Spacing.sm,
  },
  hintText: {
    fontSize: Typography.sizes.ui.body,
    color: TechTheme.accent,
    fontWeight: '600',
    marginBottom: Spacing.sm,
  },
  strokeText: {
    fontSize: Typography.sizes.ui.caption,
    color: TechTheme.textSecondary,
  },
  inputContainer: {
    marginVertical: Spacing.lg,
  },
  textInput: {
    backgroundColor: TechTheme.surface,
    borderRadius: 12,
    padding: Spacing.md,
    fontSize: Typography.sizes.ui.body,
    color: TechTheme.text,
    textAlign: 'center',
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Spacing.lg,
  },
  controlButton: {
    backgroundColor: TechTheme.secondary,
    borderRadius: 12,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
  },
  controlButtonText: {
    color: 'white',
    fontSize: Typography.sizes.ui.body,
    fontWeight: '600',
    textAlign: 'center',
  },
  gameOverTitle: {
    fontSize: Typography.sizes.ui.title,
    fontWeight: '700',
    color: TechTheme.text,
    marginBottom: Spacing.lg,
  },
  finalScoreContainer: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  finalScoreLabel: {
    fontSize: Typography.sizes.ui.body,
    color: TechTheme.textSecondary,
    marginBottom: Spacing.xs,
  },
  finalScoreValue: {
    fontSize: 48,
    fontWeight: '700',
    color: TechTheme.primary,
    marginBottom: Spacing.sm,
  },
  finalTimeText: {
    fontSize: Typography.sizes.ui.caption,
    color: TechTheme.textSecondary,
  },
  endButtonsContainer: {
    gap: Spacing.md,
  },
  restartButton: {
    backgroundColor: TechTheme.primary,
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
    backgroundColor: TechTheme.surface,
    borderRadius: 12,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
  },
  menuButtonText: {
    color: TechTheme.text,
    fontSize: Typography.sizes.ui.body,
    fontWeight: '600',
    textAlign: 'center',
  },
}); 