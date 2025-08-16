import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  StatusBar,
  Animated,
  Easing,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { TechTheme, Typography, Spacing, Shadows, TechColors } from '@/constants/theme';
import { getRandomWordByCombinedDifficulty, getVocabularyByJLPT } from '@/data/vocabulary-final';
import { useTypingDetection } from '@/hooks/useTypingDetection';
import { DifficultySelector } from '@/components/common/DifficultySelector';
import type { CombinedDifficultyLevel } from '@/types';
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
  const { t } = useTranslation();
  const settings: KanjiModeSettings = route?.params?.settings || {
    difficulty: 'normal',
    showMeaning: true,
    difficultyLevel: 'jlpt_n5',
    readingType: 'hiragana',
    hintDelay: 5,
    showStrokeCount: false,
  };

  // 新增難度選擇狀態
  const [selectedDifficulty, setSelectedDifficulty] = useState<CombinedDifficultyLevel>('elementary');
  const [showDifficultySelector, setShowDifficultySelector] = useState(true);

  // 遊戲狀態
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'paused' | 'finished'>('idle');
  const [currentWord, setCurrentWord] = useState<KanjiWord | null>(null);
  const [gameTime, setGameTime] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // 使用統一的打字偵測 hook
  const {
    userInput,
    combo,
    score,
    isTyping,
    handleInputChange: typingHandleInputChange,
    resetState,
    setScore
  } = useTypingDetection(currentWord?.hiragana || '', {
    onCorrect: (word, points) => {
      // 生成新漢字詞彙
      generateNewWord();
    },
    onError: () => {
      // 錯誤處理（只重置連擊，不扣生命）
    },
    baseScoreMultiplier: 15,
    comboMultiplier: 1,
  });

  // 生成新漢字詞彙
  const generateNewWord = useCallback(() => {
    // 根據選擇的難度過濾詞彙
    const level = getJLPTLevelByDifficulty(selectedDifficulty);
    
    // 使用新的詞彙系統，只選擇漢字詞彙
    const allWords = getVocabularyByJLPT(level);
    const kanjiWords = allWords.filter(word => word.isKanji && word.kanji);
    
    // 如果當前JLPT等級沒有漢字詞彙，嘗試其他等級
    let availableKanjiWords = kanjiWords;
    if (kanjiWords.length === 0) {
      // 嘗試所有JLPT等級的漢字詞彙
      const allJLPTLevels = ['n5', 'n4', 'n3', 'n2', 'n1'];
      for (const jlptLevel of allJLPTLevels) {
        const wordsForLevel = getVocabularyByJLPT(jlptLevel as any);
        const kanjiWordsForLevel = wordsForLevel.filter(word => word.isKanji && word.kanji);
        if (kanjiWordsForLevel.length > 0) {
          availableKanjiWords = kanjiWordsForLevel;
          break;
        }
      }
    }
    
    // 確保有漢字詞彙可用
    if (availableKanjiWords.length === 0) {
      console.warn('No kanji words available, using fallback');
      // 如果還是沒有漢字詞彙，使用一個預設的漢字詞彙
      const fallbackKanjiWord: KanjiWord = {
        id: 'fallback_kanji',
        text: '漢字',
        kanji: '漢字',
        hiragana: 'かんじ',
        katakana: 'カンジ',
        meaning: 'kanji, Chinese character',
        difficulty: 1,
        theme: 'jlpt_n5' as any,
        jlptLevel: 'n5',
        frequency: 50,
        strokeCount: 2,
        examples: [],
      };
      setCurrentWord(fallbackKanjiWord);
    } else {
      // 使用漢字詞彙
      const randomIndex = Math.floor(Math.random() * availableKanjiWords.length);
      const randomWord = availableKanjiWords[randomIndex];
      const kanjiWord: KanjiWord = {
        id: randomWord.id || randomWord.word,
        text: randomWord.word,
        kanji: randomWord.kanji || randomWord.word,
        hiragana: randomWord.kana, // 使用 kana 作為 hiragana
        katakana: randomWord.kana.toUpperCase(),
        meaning: randomWord.chineseMeaning || randomWord.meaning,
        difficulty: randomWord.difficulty === 'beginner' ? 1 : 
                   randomWord.difficulty === 'normal' ? 2 : 
                   randomWord.difficulty === 'hard' ? 3 : 4,
        theme: 'jlpt_n5' as any,
        jlptLevel: randomWord.jlptLevel || 'n5',
        frequency: 50,
        strokeCount: randomWord.kanji?.length || 0,
        examples: [],
      };
      setCurrentWord(kanjiWord);
    }
    
    setShowHint(false);
  }, [selectedDifficulty]);

  // 根據組合難度獲取JLPT等級
  const getJLPTLevelByDifficulty = (difficulty: CombinedDifficultyLevel): 'n5' | 'n4' | 'n3' | 'n2' | 'n1' => {
    switch (difficulty) {
      case 'elementary':
        return Math.random() < 0.5 ? 'n5' : 'n4';
      case 'intermediate':
        const levels = ['n5', 'n4', 'n3', 'n2'];
        return levels[Math.floor(Math.random() * levels.length)] as 'n5' | 'n4' | 'n3' | 'n2';
      case 'advanced':
        const allLevels = ['n5', 'n4', 'n3', 'n2', 'n1'];
        return allLevels[Math.floor(Math.random() * allLevels.length)] as 'n5' | 'n4' | 'n3' | 'n2' | 'n1';
      default:
        return 'n5';
    }
  };

  // 遊戲開始
  const startGame = useCallback(() => {
    setGameState('playing');
    resetState();
    setGameTime(0);
    generateNewWord();
    setShowDifficultySelector(false);
  }, [generateNewWord, resetState]);

  // 處理輸入
  const handleInputChange = useCallback((text: string) => {
    if (gameState !== 'playing') return;
    typingHandleInputChange(text);
  }, [gameState, typingHandleInputChange]);

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
    // 顯示難度選擇器
    if (showDifficultySelector) {
      return (
        <View style={styles.container}>
          <DifficultySelector
            selectedDifficulty={selectedDifficulty}
            onSelectDifficulty={setSelectedDifficulty}
          />
          <Pressable
            style={styles.startButton}
            onPress={startGame}
          >
            <Text style={styles.startButtonText}>{t('gameSettings.startGame')}</Text>
          </Pressable>
        </View>
      );
    }

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
        title={t('mainMenu.practiceKanji')}
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

const KanjiGameStartScreen: React.FC<KanjiGameStartScreenProps> = ({ onStart, settings }) => {
  const getDifficultyInfo = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return { name: '簡單', color: TechColors.neonGreen, lives: 5 };
      case 'normal':
        return { name: '普通', color: TechColors.neonBlue, lives: 3 };
      case 'hard':
        return { name: '困難', color: TechColors.neonPink, lives: 1 };
      default:
        return { name: '普通', color: TechColors.neonBlue, lives: 3 };
    }
  };

  const difficultyInfo = getDifficultyInfo(settings.difficulty);

  return (
    <View style={styles.centerContainer}>
      <GlassContainer
        variant="accent"
        glowEffect={true}
        neonBorder={true}
        style={styles.startContainer}
      >
        <Text style={styles.gameModeTitle}>🈯 {t('mainMenu.practiceKanji')}</Text>
        <Text style={styles.instructions}>
          看漢字，輸入對應的{settings.readingType === 'hiragana' ? '平假名' : 
                            settings.readingType === 'katakana' ? '片假名' : '假名'}讀音！
        </Text>
        <View style={styles.settingsInfo}>
          <Text style={[styles.settingText, { color: difficultyInfo.color }]}>
            難度：{difficultyInfo.name} (❤️ {difficultyInfo.lives} 生命)
          </Text>
          <Text style={styles.settingText}>
            JLPT等級：{settings.difficultyLevel.toUpperCase()}
          </Text>
          <Text style={styles.settingText}>
            顯示意思：{settings.showMeaning ? '是' : '否'}
          </Text>
          <Text style={styles.settingText}>
            讀音類型：{settings.readingType === 'hiragana' ? '平假名' : 
                      settings.readingType === 'katakana' ? '片假名' : '混合'}
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
          <Text style={styles.startButtonText}>🚀 {t('gameSettings.startGame')}</Text>
        </Pressable>
      </GlassContainer>
    </View>
  );
};

// 遊戲進行畫面
interface KanjiGamePlayScreenProps {
  currentWord: KanjiWord | null;
  userInput: string;
  onInputChange: (text: string) => void;
  onShowHint: () => void;
  isPaused: boolean;
  score: number;
  combo: number;
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
  gameTime,
  showMeaning,
  showHint,
  settings,
}) => (
  <View style={styles.gameContainer}>
    {/* 統計資訊（最上方，經典模式風格） */}
    <View style={styles.gameInfo}>
      <View style={styles.infoItem}>
        <Text style={styles.infoText}>🏆 分數: {score}</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoText}>🔥 連擊: {combo}</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoText}>⏰ 時間: {Math.floor(gameTime / 60)}:{(gameTime % 60).toString().padStart(2, '0')}</Text>
      </View>
    </View>
    {/* 提示按鈕（統計資訊下方靠右，避免被鍵盤擋住） */}
    <View style={styles.hintButtonRow}>
      <View style={{flex:1}} />
      <Pressable 
        style={({ pressed }) => [
          styles.hintButton,
          pressed && styles.buttonPressed,
        ]} 
        onPress={onShowHint}
      >
        <Text style={styles.hintButtonText}>💡 提示</Text>
      </Pressable>
    </View>
    {/* 題目泡泡（中間） */}
    <View style={styles.bubbleContainer}>
      <FloatingBubble 
        bubbleSize={calculateBubbleSize(currentWord?.kanji || '')}
        style={styles.questionBubble}
      >
        <View style={[
          styles.bubble,
          { 
            width: calculateBubbleSize(currentWord?.kanji || ''),
            height: calculateBubbleSize(currentWord?.kanji || ''),
          }
        ]}>
          <Text style={[
            styles.bubbleText,
            { fontSize: calculateFontSize(currentWord?.kanji || '') }
          ]}>
            {currentWord?.kanji}
          </Text>
          {showHint && (
            <Text style={styles.bubbleMeaning}>{currentWord?.meaning}</Text>
          )}
          {showHint && (
            <Text style={styles.bubbleHint}>
              {settings.readingType === 'hiragana' ? currentWord?.hiragana : 
               settings.readingType === 'katakana' && currentWord?.katakana ? currentWord.katakana :
               `${currentWord?.hiragana} / ${currentWord?.katakana || ''}`}
            </Text>
          )}
        </View>
      </FloatingBubble>
    </View>
    {/* 輸入區（題目下方，經典模式風格） */}
    <TextInput
      style={styles.input}
      value={userInput}
      onChangeText={onInputChange}
      placeholder={t('gamePlay.inputKanaReading')}
      placeholderTextColor={TechColors.neonBlue + '60'}
      autoFocus
      editable={!isPaused}
      textAlign="center"
      numberOfLines={1}
    />
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
  // 粒子效果
  particlesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  
  particle: {
    position: 'absolute',
    width: 4,
    height: 4,
    backgroundColor: TechColors.neonBlue,
    borderRadius: 2,
    shadowColor: TechColors.neonBlue,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },

  // 遊戲佈局
  topSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Spacing.xl,
  },
  
  bottomSection: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xl,
  },
  
  // 泡泡相關
  bubbleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.xl,
  },
  
  questionBubble: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  bubble: {
    backgroundColor: TechColors.darkSpace + 'E6',
    borderRadius: 1000,
    borderWidth: 2,
    borderColor: TechColors.neonBlue,
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadows.neon.blue,
  },
  
  bubbleText: {
    color: TechColors.neonBlue,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: TechColors.neonBlue,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  
  bubbleMeaning: {
    color: TechColors.neonPurple,
    fontSize: Typography.sizes.ui.body,
    textAlign: 'center',
    marginTop: Spacing.xs,
    fontWeight: '500',
  },
  
  bubbleHint: {
    color: TechColors.neonGreen,
    fontSize: Typography.sizes.ui.caption,
    textAlign: 'center',
    marginTop: Spacing.xs,
    fontWeight: '400',
  },
  
  // 輸入區域
  inputSection: {
    width: '100%',
    paddingHorizontal: Spacing.lg,
  },
  
  // 保留新版 input 樣式（經典模式風格）
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    paddingHorizontal: 25,
    paddingVertical: 18,
    fontSize: 20,
    marginTop: 18,
    width: '85%',
    alignSelf: 'center',
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
  
  // 統計區域
  statsContainer: {
    marginBottom: Spacing.lg,
  },
  
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  
  statLabel: {
    fontSize: Typography.sizes.ui.caption,
    color: TechColors.neonPurple,
    marginBottom: Spacing.xs,
    fontWeight: '500',
  },
  
  statValue: {
    fontSize: Typography.sizes.ui.body,
    color: TechColors.neonBlue,
    fontWeight: 'bold',
    textShadowColor: TechColors.neonBlue,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
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
    alignItems: 'center',
    marginTop: Spacing.xl,
    ...Shadows.neon.blue,
  },
  startButtonText: {
    color: TechTheme.surface,
    fontSize: Typography.sizes.ui.subtitle,
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
  gameInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    backgroundColor: 'rgba(0, 255, 255, 0.1)',
    padding: 12,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(0, 255, 255, 0.3)',
    // flexWrap: 'wrap', // 移除換行
  },
  infoItem: {
    flex: 1,
    minWidth: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 2,
  },
  infoText: {
    color: '#00ffff',
    fontSize: 13,
    fontWeight: '700',
    textShadowColor: '#00ffff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
    marginLeft: 4,
  },
  hintButtonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    marginBottom: 8,
  },
  hintButton: {
    backgroundColor: 'rgba(0, 255, 255, 0.15)',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#00ffff',
    shadowColor: '#00ffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  hintButtonText: {
    color: '#00ffff',
    fontSize: 15,
    fontWeight: '700',
    textShadowColor: '#00ffff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
});

/**
 * 根據文字長度計算泡泡尺寸
 */
const calculateBubbleSize = (text: string) => {
  const length = text.length;
  
  // 基礎尺寸
  const baseSize = 100;
  
  // 根據字數計算額外尺寸
  let extraSize = 0;
  if (length <= 2) {
    extraSize = 20; // 1-2字：120px
  } else if (length <= 3) {
    extraSize = 35; // 3字：135px
  } else if (length <= 4) {
    extraSize = 50; // 4字：150px
  } else if (length <= 5) {
    extraSize = 65; // 5字：165px
  } else {
    extraSize = 80; // 6字以上：180px
  }
  
  return baseSize + extraSize;
};

/**
 * 根據文字長度計算字體大小
 */
const calculateFontSize = (text: string) => {
  const length = text.length;
  
  if (length <= 2) {
    return Typography.sizes.bubble.kanji; // 40
  } else if (length <= 3) {
    return Typography.sizes.bubble.hiragana; // 36
  } else if (length <= 4) {
    return Typography.sizes.bubble.katakana; // 32
  } else {
    return Typography.sizes.bubble.romaji; // 28
  }
};

/**
 * 飄動泡泡組件 - 輕微的飄動和呼吸效果
 */
interface FloatingBubbleProps {
  children: React.ReactNode;
  style?: any;
  bubbleSize: number;
}

const FloatingBubble: React.FC<FloatingBubbleProps> = ({ children, style, bubbleSize }) => {
  const floatAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // 輕微飄動動畫
    const floatAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: 1,
          duration: 4000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 4000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    );

    // 輕微呼吸動畫
    const scaleAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.02,
          duration: 3000,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.98,
          duration: 3000,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    );

    floatAnimation.start();
    scaleAnimation.start();

    return () => {
      floatAnimation.stop();
      scaleAnimation.stop();
    };
  }, []);

  const translateY = floatAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-3, 3],
  });

  const translateX = floatAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1.5, 0],
  });

  return (
    <Animated.View
      style={[
        style,
        {
          width: bubbleSize,
          height: bubbleSize,
          transform: [
            { translateY },
            { translateX },
            { scale: scaleAnim },
          ],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

/**
 * 飄動粒子效果組件
 */
const FloatingParticles: React.FC = () => {
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: Math.random() * 80 + 10,
    delay: Math.random() * 2000,
    duration: 3000 + Math.random() * 2000,
  }));

  return (
    <View style={styles.particlesContainer}>
      {particles.map((particle) => (
        <FloatingParticle
          key={particle.id}
          left={particle.left}
          delay={particle.delay}
          duration={particle.duration}
        />
      ))}
    </View>
  );
};

interface FloatingParticleProps {
  left: number;
  delay: number;
  duration: number;
}

const FloatingParticle: React.FC<FloatingParticleProps> = ({ left, delay, duration }) => {
  const animValue = useRef(new Animated.Value(0)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.parallel([
          Animated.timing(animValue, {
            toValue: 1,
            duration,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
          Animated.sequence([
            Animated.timing(opacityValue, {
              toValue: 0.6,
              duration: duration * 0.3,
              useNativeDriver: true,
            }),
            Animated.timing(opacityValue, {
              toValue: 0,
              duration: duration * 0.7,
              useNativeDriver: true,
            }),
          ]),
        ]),
        Animated.timing(animValue, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => animation.stop();
  }, []);

  const translateY = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -200],
  });

  const scale = animValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.5, 1, 0.3],
  });

  return (
    <Animated.View
      style={[
        styles.particle,
        {
          left: `${left}%`,
          opacity: opacityValue,
          transform: [{ translateY }, { scale }],
        },
      ]}
    />
  );
}; 