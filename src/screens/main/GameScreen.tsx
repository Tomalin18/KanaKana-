import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import { TechTheme, Typography, Spacing, Shadows, TechColors } from '@/constants/theme';
import { validateJapaneseInput } from '@/utils/japaneseInput';
import { getRandomWord } from '@/store/gameStore';
import { GlassNavBar } from '@/components/common/GlassNavBar';
import { GlassContainer } from '@/components/common/GlassContainer';
import { PauseOverlay } from '@/components/common/PauseOverlay';
import { KanjiModeScreen } from '@/screens/game-modes/KanjiModeScreen';
import { LongTextModeScreen } from '@/screens/game-modes/LongTextModeScreen';
import { TetrisModeScreen } from '@/screens/game-modes/TetrisModeScreen';

interface GameScreenProps {
  route?: {
    params: {
      mode: 'classic' | 'kanji_to_kana' | 'long_text' | 'tetris_typing';
      settings?: any;
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
  const mode = route?.params?.mode || 'classic';
  const settings = route?.params?.settings;
  
  // 如果是漢字模式，使用專用的漢字模式畫面
  if (mode === 'kanji_to_kana') {
    return <KanjiModeScreen navigation={navigation} route={{ params: { settings } }} />;
  }
  
  // 如果是長文模式，使用專用的長文模式畫面
  if (mode === 'long_text') {
    return <LongTextModeScreen navigation={navigation} />;
  }
  
  // 如果是俄羅斯方塊模式，使用專用的俄羅斯方塊模式畫面
  if (mode === 'tetris_typing') {
    return <TetrisModeScreen navigation={navigation} />;
  }
  
  // 經典模式設定
  const classicSettings = settings as any || {
    difficulty: 'normal',
    showHints: true,
    vocabularyLevel: 'n5',
  };

  // 根據難度設定初始生命值
  const getInitialLives = () => {
    switch (classicSettings.difficulty) {
      case 'easy': return 5;
      case 'normal': return 3;
      case 'hard': return 1;
      default: return 3;
    }
  };

  // 遊戲狀態
  const [gameState, setGameState] = useState<'start' | 'playing' | 'paused' | 'ended'>('start');
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [lives, setLives] = useState(getInitialLives());
  const [currentWord, setCurrentWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [gameTime, setGameTime] = useState(0);
  
  const gameTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 遊戲計時器
  useEffect(() => {
    if (gameState === 'playing') {
      gameTimerRef.current = setInterval(() => {
        setGameTime(prev => prev + 1);
      }, 1000);
    } else {
      if (gameTimerRef.current) {
        clearInterval(gameTimerRef.current);
        gameTimerRef.current = null;
      }
    }

    return () => {
      if (gameTimerRef.current) {
        clearInterval(gameTimerRef.current);
      }
    };
  }, [gameState]);

  // 開始遊戲
  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setCombo(0);
    setLives(getInitialLives());
    setUserInput('');
    setGameTime(0);
    setCurrentWord(getRandomWord());
  };

  // 暫停/繼續遊戲
  const togglePause = () => {
    setGameState(prev => prev === 'paused' ? 'playing' : 'paused');
  };

  // 處理輸入變化
  const handleInputChange = (text: string) => {
    if (gameState !== 'playing') return;
    
    setUserInput(text);
    
    // 檢查是否完成當前單詞
    const validation = validateJapaneseInput(text, currentWord);
    if (validation.isComplete) {
      // 正確完成
      const points = 100 + (combo * 10);
      setScore(prev => prev + points);
      setCombo(prev => prev + 1);
      
      // 生成新單詞
      setCurrentWord(getRandomWord());
      setUserInput('');
    } else if (!validation.canContinue && text.length > 0) {
      // 輸入錯誤
      setCombo(0);
      setLives(prev => {
        const newLives = prev - 1;
        if (newLives <= 0) {
          setGameState('ended');
        }
        return newLives;
      });
      setUserInput('');
    }
  };

  // 重新開始遊戲
  const restartGame = () => {
    startGame();
  };

  // 返回主選單
  const backToMenu = () => {
    navigation?.goBack();
  };

  // 渲染遊戲界面
  const renderGameContent = () => {
    switch (gameState) {
      case 'start':
        return <GameStartScreen onStart={startGame} mode={mode} settings={classicSettings} />;
      case 'playing':
      case 'paused':
        return (
          <>
            <GamePlayScreen
              currentWord={currentWord}
              userInput={userInput}
              onInputChange={handleInputChange}
              score={score}
              combo={combo}
              lives={lives}
              gameTime={gameTime}
            />
            <PauseOverlay
              visible={gameState === 'paused'}
              onResume={togglePause}
              onRestart={restartGame}
              onMainMenu={backToMenu}
            />
          </>
        );
      case 'ended':
        return (
          <GameEndScreen
            score={score}
            gameTime={gameTime}
            onRestart={restartGame}
            onBackToMenu={backToMenu}
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
        title={mode === 'classic' ? '練習模式-假名' : '其他模式'}
        leftButton={{
          text: '← 返回',
          onPress: backToMenu,
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
    return Typography.sizes.bubble.hiragana; // 36
  } else if (length <= 3) {
    return Typography.sizes.bubble.katakana; // 32
  } else if (length <= 4) {
    return Typography.sizes.bubble.romaji; // 28
  } else {
    return 24; // 長文字使用更小字體
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

// 遊戲開始屏幕
interface GameStartScreenProps {
  onStart: () => void;
  mode: string;
  settings?: any;
}

const GameStartScreen: React.FC<GameStartScreenProps> = ({ onStart, mode, settings }) => {
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

  const difficultyInfo = getDifficultyInfo(settings?.difficulty || 'normal');

  return (
    <View style={styles.centerContainer}>
      <GlassContainer
        variant="accent"
        glowEffect={true}
        neonBorder={true}
        style={styles.startContainer}
      >
        <Text style={styles.gameModeTitle}>
          {mode === 'classic' ? '🎯 練習模式-假名' : '其他模式'}
        </Text>
        <Text style={styles.instructions}>
          輸入日文假名來完成單詞！{'\n'}
          正確輸入可獲得分數和連擊獎勵。
        </Text>
        
        {/* 難度信息 */}
        {settings && (
          <View style={styles.settingsInfo}>
            <Text style={[styles.settingText, { color: difficultyInfo.color }]}>
              難度：{difficultyInfo.name} (❤️ {difficultyInfo.lives} 生命)
            </Text>
            <Text style={styles.settingText}>
              提示：{settings.showHints ? '開啟' : '關閉'}
            </Text>
            <Text style={styles.settingText}>
              詞彙等級：{settings.vocabularyLevel?.toUpperCase() || 'N5'}
            </Text>
          </View>
        )}
        
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
};

// 遊戲進行屏幕
interface GamePlayScreenProps {
  currentWord: string;
  userInput: string;
  onInputChange: (text: string) => void;
  score: number;
  combo: number;
  lives: number;
  gameTime: number;
}

const GamePlayScreen: React.FC<GamePlayScreenProps> = ({
  currentWord,
  userInput,
  onInputChange,
  score,
  combo,
  lives,
  gameTime,
}) => (
  <View style={styles.gameContainer}>
    {/* 遊戲頭部信息 */}
    <GlassContainer
      variant="secondary"
      glowEffect={false}
      style={styles.gameHeader}
    >
      <Text style={styles.scoreText}>分數: {score}</Text>
      <Text style={styles.comboText}>連擊: {combo}</Text>
      <Text style={styles.livesText}>生命: {'❤️'.repeat(lives)}</Text>
      <Text style={styles.timeText}>時間: {Math.floor(gameTime / 60)}:{(gameTime % 60).toString().padStart(2, '0')}</Text>
    </GlassContainer>

    {/* 上方遊戲區域 - 題目泡泡和輸入欄 */}
    <View style={styles.topGameArea}>
      {/* 題目泡泡 - 飄動效果 */}
      <View style={styles.bubbleContainer}>
        <FloatingBubble style={styles.wordBubble} bubbleSize={calculateBubbleSize(currentWord)}>
          <GlassContainer
            variant="accent"
            glowEffect={true}
            neonBorder={true}
            borderRadius={60}
            style={styles.bubbleContent}
          >
            <Text 
              style={[styles.currentWordText, { fontSize: calculateFontSize(currentWord) }]}
              numberOfLines={1}
              adjustsFontSizeToFit={true}
              minimumFontScale={0.7}
            >
              {currentWord}
            </Text>
          </GlassContainer>
        </FloatingBubble>
      </View>
      
      {/* 用戶輸入區域 */}
      <GlassContainer
        variant="primary"
        glowEffect={true}
        style={styles.inputDisplayContainer}
      >
        <Text style={styles.inputDisplayLabel}>你的輸入:</Text>
        <TextInput
          style={styles.inputDisplayBox}
          value={userInput}
          onChangeText={onInputChange}
          placeholder="開始輸入..."
          placeholderTextColor={TechTheme.textSecondary}
          autoFocus
        />
        
        {/* 輸入提示區域 */}
        <View style={styles.inputHintContainer}>
          <InputHints userInput={userInput} targetWord={currentWord} />
        </View>
      </GlassContainer>
    </View>

    {/* 下方裝飾區域 */}
    <View style={styles.bottomDecorationArea}>
      <FloatingParticles />
    </View>
  </View>
);

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

// 輸入提示組件
interface InputHintsProps {
  userInput: string;
  targetWord: string;
}

const InputHints: React.FC<InputHintsProps> = ({ userInput, targetWord }) => {
  const validation = validateJapaneseInput(userInput, targetWord);
  
  if (!userInput) {
    return (
      <Text style={styles.inputHint}>
        💡 輸入日文假名來完成單詞「{targetWord}」
      </Text>
    );
  }
  
  return (
    <View style={styles.inputHintsContainer}>
      {validation.hint && (
        <Text style={[
          styles.inputHint,
          validation.isPartialMatch ? styles.inputHintCorrect : styles.inputHintError
        ]}>
          💡 {validation.hint}
        </Text>
      )}
      {validation.canContinue && validation.nextPossibleChars && validation.nextPossibleChars.length > 0 && (
        <Text style={styles.inputHint}>
          下一個字符: {validation.nextPossibleChars.join(' 或 ')}
        </Text>
      )}
      {!validation.canContinue && !validation.isComplete && userInput.length > 0 && (
        <Text style={styles.inputHintError}>
          ❌ 輸入錯誤，請重新輸入
        </Text>
      )}
      {validation.isComplete && (
        <Text style={styles.inputHintCorrect}>
          ✅ 完成！
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
    <GlassContainer
      variant="surface"
      glowEffect={true}
      neonBorder={true}
      style={styles.endGameContainer}
    >
      <Text style={styles.gameOverText}>🎮 遊戲結束！</Text>
      <Text style={styles.finalScoreText}>最終分數: {score}</Text>
      <Text style={styles.gameTimeText}>
        遊戲時間: {Math.floor(gameTime / 60)}:{(gameTime % 60).toString().padStart(2, '0')}
      </Text>
      
      <View style={styles.endGameButtons}>
        <Pressable
          style={({ pressed }) => [
            styles.restartButton,
            pressed && styles.buttonPressed,
            Shadows.neon.blue,
          ]}
          onPress={onRestart}
        >
          <Text style={styles.restartButtonText}>🔄 再試一次</Text>
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
  
  // 通用容器樣式
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.lg,
  },
  
  gameContainer: {
    flex: 1,
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.xs,
  },
  
  // 遊戲開始屏幕樣式
  startContainer: {
    alignItems: 'center',
    minWidth: '90%',
  },
  
  gameModeTitle: {
    fontSize: Typography.sizes.ui.title,
    fontWeight: Typography.weights.bold,
    color: TechTheme.text,
    marginBottom: Spacing.lg,
    textAlign: 'center',
    textShadowColor: TechColors.neonBlue,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  
  instructions: {
    fontSize: Typography.sizes.ui.body,
    color: TechTheme.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.xl,
    lineHeight: Typography.lineHeights.ui,
  },
  
  settingsInfo: {
    marginBottom: Spacing.xl,
    alignItems: 'center',
  },
  
  settingText: {
    fontSize: Typography.sizes.ui.caption,
    color: TechTheme.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.xs,
    fontWeight: '500',
  },
  
  startButton: {
    backgroundColor: TechTheme.primary,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: TechTheme.primary,
  },
  
  startButtonText: {
    color: TechTheme.background,
    fontSize: Typography.sizes.ui.body,
    fontWeight: Typography.weights.semibold,
    letterSpacing: Typography.letterSpacing.ui,
  },
  
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.95 }],
  },
  
  // 遊戲進行屏幕樣式
  gameHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.sm,
  },
  
  scoreText: {
    fontSize: Typography.sizes.ui.caption,
    fontWeight: Typography.weights.semibold,
    color: TechTheme.text,
  },
  
  comboText: {
    fontSize: Typography.sizes.ui.caption,
    fontWeight: Typography.weights.semibold,
    color: TechColors.neonGreen,
  },
  
  livesText: {
    fontSize: Typography.sizes.ui.caption,
  },
  
  timeText: {
    fontSize: Typography.sizes.ui.caption,
    color: TechTheme.textSecondary,
  },
  
  // 上方遊戲區域
  topGameArea: {
    flex: 0.5,
    justifyContent: 'space-between',
    paddingVertical: Spacing.sm,
  },
  
  // 泡泡容器
  bubbleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.55,
  },
  
  wordBubble: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  bubbleContent: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  currentWordText: {
    color: TechTheme.text,
    fontWeight: Typography.weights.semibold,
    textAlign: 'center',
    textShadowColor: TechColors.neonBlue,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
    maxWidth: '90%',
  },
  
  // 輸入顯示區域
  inputDisplayContainer: {
    flex: 0.45,
    justifyContent: 'flex-start',
    paddingTop: Spacing.xs,
  },
  
  inputDisplayLabel: {
    fontSize: Typography.sizes.ui.caption,
    color: TechTheme.textSecondary,
    marginBottom: Spacing.xs,
    textAlign: 'center',
  },
  
  inputDisplayBox: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: TechTheme.primary,
    borderRadius: 12,
    padding: Spacing.md,
    fontSize: Typography.sizes.ui.body,
    color: TechTheme.text,
    minHeight: 48,
    textAlign: 'center',
    width: '100%',
  },
  
  inputHintContainer: {
    marginTop: Spacing.sm,
    alignItems: 'center',
  },
  
  inputHintsContainer: {
    alignItems: 'center',
    gap: Spacing.xs,
  },
  
  inputHint: {
    fontSize: Typography.sizes.ui.caption,
    color: TechTheme.textSecondary,
    textAlign: 'center',
  },
  
  inputHintCorrect: {
    color: TechColors.neonGreen,
  },
  
  inputHintError: {
    color: TechColors.neonPink,
  },
  
  // 下方裝飾區域
  bottomDecorationArea: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  
  // 粒子效果
  particlesContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
  },
  
  particle: {
    position: 'absolute',
    bottom: 0,
    width: 6,
    height: 6,
    backgroundColor: TechColors.neonBlue,
    borderRadius: 3,
  },
  
  // 遊戲結束屏幕樣式
  endGameContainer: {
    alignItems: 'center',
    minWidth: '90%',
  },
  
  gameOverText: {
    fontSize: Typography.sizes.ui.title,
    fontWeight: Typography.weights.bold,
    color: TechColors.neonPink,
    marginBottom: Spacing.lg,
    textAlign: 'center',
    textShadowColor: TechColors.neonPink,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  
  finalScoreText: {
    fontSize: Typography.sizes.ui.subtitle,
    fontWeight: Typography.weights.semibold,
    color: TechTheme.text,
    marginBottom: Spacing.md,
    textAlign: 'center',
  },
  
  gameTimeText: {
    fontSize: Typography.sizes.ui.body,
    color: TechTheme.textSecondary,
    marginBottom: Spacing.xl,
    textAlign: 'center',
  },
  
  endGameButtons: {
    gap: Spacing.md,
    alignItems: 'center',
    width: '100%',
  },
  
  restartButton: {
    backgroundColor: TechTheme.primary,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: TechTheme.primary,
    width: '100%',
    alignItems: 'center',
  },
  
  restartButtonText: {
    color: TechTheme.background,
    fontSize: Typography.sizes.ui.body,
    fontWeight: Typography.weights.semibold,
    letterSpacing: Typography.letterSpacing.ui,
  },
  
  menuButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: TechTheme.border,
    width: '100%',
    alignItems: 'center',
  },
  
  menuButtonText: {
    color: TechTheme.text,
    fontSize: Typography.sizes.ui.body,
    fontWeight: Typography.weights.semibold,
    letterSpacing: Typography.letterSpacing.ui,
  },
}); 