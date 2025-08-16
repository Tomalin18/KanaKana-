import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Pressable, 
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useRatingPrompt } from '@/hooks/useRatingPrompt';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/AppNavigator';
import type { GameMode, ClassicModeSettings, KanjiModeSettings } from '@/types';
import { TechTheme, Typography, Spacing, Shadows, TechColors } from '@/constants/theme';
import { GlassContainer, GameSettingsModal } from '@/components/common';
import { isFeatureEnabled } from '@/utils/featureFlags';

type Props = NativeStackScreenProps<RootStackParamList, 'MainMenu'>;

/**
 * 主選單屏幕 - 科技感毛玻璃風格
 * 提供遊戲模式選擇和現代科技美學界面
 */
export const MainMenuScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);
  const [selectedMode, setSelectedMode] = useState<'classic' | 'kanji' | null>(null);

  // 評分提示 Hook
  const { recordSession, triggerOnSessionCount } = useRatingPrompt();

  // 預設設定
  const defaultClassicSettings: ClassicModeSettings = {
    difficulty: 'normal',
    showHints: true,
    vocabularyLevel: 'n5',
  };

  const defaultKanjiSettings: KanjiModeSettings = {
    difficulty: 'normal',
    showMeaning: true,
    difficultyLevel: 'jlpt_n5',
    readingType: 'hiragana',
    hintDelay: 3,
    showStrokeCount: false,
  };

  const handleGameModePress = (mode: GameMode) => {
    if (mode === 'classic' || mode === 'kanji_to_kana') {
      setSelectedMode(mode === 'classic' ? 'classic' : 'kanji');
      setSettingsModalVisible(true);
    } else {
      // 其他模式直接導航
      navigation.navigate('Game', { mode });
    }
  };

  const handleSettingsStart = (settings: ClassicModeSettings | KanjiModeSettings) => {
    console.log('MainMenuScreen: handleSettingsStart called with mode:', selectedMode, 'settings:', settings);
    setSettingsModalVisible(false);
    
    if (selectedMode === 'classic') {
      console.log('MainMenuScreen: Navigating to classic mode');
      navigation.navigate('Game', { 
        mode: 'classic',
        settings: settings as ClassicModeSettings,
      });
    } else if (selectedMode === 'kanji') {
      console.log('MainMenuScreen: Navigating to kanji mode');
      navigation.navigate('Game', { 
        mode: 'kanji_to_kana',
        settings: settings as KanjiModeSettings,
      });
    }
    
    setSelectedMode(null);
  };

  const handleSettingsClose = () => {
    setSettingsModalVisible(false);
    setSelectedMode(null);
  };

  // 記錄會話並檢查是否需要觸發評分提示
  useEffect(() => {
    const checkAndRecordSession = async () => {
      await recordSession();
      
      // 為了測試，我們在每次進入主選單時都檢查
      setTimeout(async () => {
        // 模擬會話數量檢查 - 生產環境條件
        const sessionCount = Math.floor(Math.random() * 20) + 1; // 1-20 的隨機數
        if (sessionCount % 10 === 0) { // 每10次觸發一次
          console.log('🔄 主選單觸發會話數量評分提示:', sessionCount);
          await triggerOnSessionCount(sessionCount);
        }
      }, 2000); // 延遲2秒，讓用戶先看到主選單
    };

    checkAndRecordSession();
  }, [recordSession, triggerOnSessionCount]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={TechTheme.background} />
      
      {/* 星空背景 */}
      <StarfieldBackground />
      
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* 應用標題 - 科技風格 */}
          <View style={styles.header}>
            <GlassContainer
              variant="accent"
              glowEffect={true}
              neonBorder={true}
              style={styles.titleContainer}
            >
              <Text style={styles.titleJapanese}>かなカナ</Text>
              <Text style={styles.titleEnglish}>KANAKANA</Text>
              {/* <Text style={styles.subtitle}>NEURAL TYPING SYSTEM</Text> */}
              {/* 科技裝飾元素 */}
              <View style={styles.techElements}>
                <Text style={styles.techSymbol}>⚡</Text>
                <Text style={styles.techSymbol}>🔮</Text>
                <Text style={styles.techSymbol}>⚡</Text>
              </View>
            </GlassContainer>
          </View>

          {/* 遊戲模式選擇 - 科技卡片設計 */}
          <View style={styles.modesContainer}>
            {/* 經典模式按鈕 */}
            <GameModeButton
              title={t('mainMenu.practiceKana')}
              subtitle={t('mainMenu.practiceKanaSubtitle')}
              description={t('mainMenu.practiceKanaDescription')}
              emoji="🎯"
              onPress={() => handleGameModePress('classic')}
              isPrimary
            />

            {/* 新遊戲模式 */}
            {isFeatureEnabled('KANJI_MODE') && (
              <GameModeButton
                title={t('mainMenu.practiceKanji')}
                subtitle={t('mainMenu.practiceKanjiSubtitle')}
                description={t('mainMenu.practiceKanjiDescription')}
                emoji="🈯"
                onPress={() => handleGameModePress('kanji_to_kana')}
                isNew
              />
            )}

            {isFeatureEnabled('LONG_TEXT_MODE') && (
              <GameModeButton
                title={t('mainMenu.longTextMode')}
                subtitle={t('mainMenu.longTextModeSubtitle')}
                description={t('mainMenu.longTextModeDescription')}
                emoji="📜"
                onPress={() => handleGameModePress('long_text')}
                isNew
              />
            )}

            {isFeatureEnabled('TETRIS_MODE') && (
              <GameModeButton
                title={t('mainMenu.tetrisMode')}
                subtitle={t('mainMenu.tetrisModeSubtitle')}
                description={t('mainMenu.tetrisModeDescription')}
                emoji="🧩"
                onPress={() => handleGameModePress('tetris_typing')}
                isNew
              />
            )}
          </View>

          {/* 底部信息 - 改為贊助按鈕 */}
        </ScrollView>
      </SafeAreaView>

      {/* 設定模態框 */}
      {selectedMode && (
        <GameSettingsModal
          visible={settingsModalVisible}
          mode={selectedMode}
          settings={selectedMode === 'classic' ? defaultClassicSettings : defaultKanjiSettings}
          onClose={handleSettingsClose}
          onStart={handleSettingsStart}
        />
      )}


    </View>
  );
};

/**
 * 星空背景組件
 */
const StarfieldBackground: React.FC = () => {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.8 + 0.2,
    size: Math.random() * 3 + 1,
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
 * 遊戲模式按鈕組件 - 科技風格
 */
interface GameModeButtonProps {
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  onPress: () => void;
  isNew?: boolean;
  isPrimary?: boolean;
}

const GameModeButton: React.FC<GameModeButtonProps> = ({
  title,
  subtitle,
  description,
  emoji,
  onPress,
  isNew = false,
  isPrimary = false,
}) => {
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.modeButton,
        pressed && styles.modeButtonPressed
      ]}
      onPress={onPress}
    >
      <GlassContainer
        variant={isPrimary ? "accent" : "primary"}
        glowEffect={true}
        neonBorder={isPrimary}
        style={styles.modeButtonContent}
      >
        {/* 模式圖標 */}
        <View style={styles.modeIconContainer}>
          <Text style={[
            styles.modeEmoji,
            isPrimary && styles.modeEmojiPrimary
          ]}>
            {emoji}
          </Text>
          {isNew && (
            <View style={styles.newBadge}>
              <Text style={styles.newBadgeText}>NEW</Text>
            </View>
          )}
        </View>
        
        {/* 模式信息 */}
        <View style={styles.modeTextContainer}>
          <Text style={[
            styles.modeTitle,
            isPrimary && styles.modeTitlePrimary
          ]}>
            {title}
          </Text>
          <Text style={[
            styles.modeSubtitle,
            isPrimary && styles.modeSubtitlePrimary
          ]}>
            {subtitle}
          </Text>
          <Text style={[
            styles.modeDescription,
            isPrimary && styles.modeDescriptionPrimary
          ]}>
            {description}
          </Text>
        </View>
        
        {/* 科技裝飾 */}
        {isPrimary && (
          <View style={styles.primaryIndicator}>
            <Text style={styles.primaryIndicatorText}>◆</Text>
          </View>
        )}
      </GlassContainer>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: TechTheme.background,
  },
  
  safeArea: {
    flex: 1,
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
  
  scrollContent: {
    flexGrow: 1,
    padding: Spacing.lg,
  },
  
  // 標題區域
  header: {
    alignItems: 'center',
    marginVertical: Spacing.xxl,
  },
  
  titleContainer: {
    alignItems: 'center',
    minWidth: '90%',
  },
  
  titleJapanese: {
    fontSize: Typography.sizes.ui.hero,
    fontWeight: Typography.weights.bold,
    color: TechTheme.text,
    marginBottom: Spacing.sm,
    textAlign: 'center',
    letterSpacing: Typography.letterSpacing.ui,
    textShadowColor: TechColors.neonBlue,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
  
  titleEnglish: {
    fontSize: Typography.sizes.ui.title,
    fontWeight: Typography.weights.light,
    color: TechTheme.textSecondary,
    letterSpacing: 3,
    marginBottom: Spacing.sm,
  },
  
  subtitle: {
    fontSize: Typography.sizes.ui.caption,
    color: TechTheme.textSecondary,
    letterSpacing: 2,
    marginBottom: Spacing.md,
  },
  
  techElements: {
    flexDirection: 'row',
    gap: Spacing.lg,
    marginTop: Spacing.sm,
  },
  
  techSymbol: {
    fontSize: 20,
    color: TechColors.neonGreen,
  },
  
  // 模式選擇區域
  modesContainer: {
    gap: Spacing.lg,
    marginBottom: Spacing.xxl,
  },
  
  modeButton: {
    marginBottom: Spacing.sm,
  },
  
  modeButtonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  
  modeButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 100,
  },
  
  modeIconContainer: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  
  modeEmoji: {
    fontSize: 32,
  },
  
  modeEmojiPrimary: {
    textShadowColor: TechColors.neonBlue,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  
  newBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: TechColors.neonPink,
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    ...Shadows.neon.green,
  },
  
  newBadgeText: {
    fontSize: 10,
    fontWeight: Typography.weights.bold,
    color: TechTheme.background,
    letterSpacing: 0.5,
  },
  
  modeTextContainer: {
    flex: 1,
    paddingLeft: Spacing.md,
  },
  
  modeTitle: {
    fontSize: Typography.sizes.ui.subtitle,
    fontWeight: Typography.weights.bold,
    color: TechTheme.text,
    marginBottom: Spacing.xs,
    letterSpacing: Typography.letterSpacing.ui,
  },
  
  modeTitlePrimary: {
    color: TechColors.neonBlue,
    textShadowColor: TechColors.neonBlue,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  
  modeSubtitle: {
    fontSize: Typography.sizes.ui.caption,
    color: TechTheme.textSecondary,
    marginBottom: Spacing.xs,
    letterSpacing: 1,
  },
  
  modeSubtitlePrimary: {
    color: TechColors.neonGreen,
  },
  
  modeDescription: {
    fontSize: Typography.sizes.ui.caption,
    color: TechTheme.textSecondary,
    lineHeight: Typography.lineHeights.ui,
  },
  
  modeDescriptionPrimary: {
    color: TechTheme.text,
  },
  
  primaryIndicator: {
    position: 'absolute',
    top: Spacing.sm,
    right: Spacing.sm,
  },
  
  primaryIndicatorText: {
    fontSize: 16,
    color: TechColors.neonBlue,
    textShadowColor: TechColors.neonBlue,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  
  // 底部區域
  footer: {
    alignItems: 'center',
    marginTop: Spacing.xl,
  },
  
  footerContainer: {
    alignItems: 'center',
    minWidth: '90%',
  },
  
  footerQuote: {
    fontSize: Typography.sizes.ui.caption,
    color: TechTheme.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.xs,
    letterSpacing: 1,
    fontStyle: 'italic',
  },
  
  footerTranslation: {
    fontSize: Typography.sizes.ui.caption,
    color: TechTheme.textSecondary,
    textAlign: 'center',
    opacity: 0.7,
  },

  sponsorButton: {
    backgroundColor: TechColors.neonPink,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '90%',
    ...Shadows.neon.purple,
  },

  sponsorButtonPressed: {
    opacity: 0.9,
  },

  sponsorButtonText: {
    fontSize: Typography.sizes.ui.caption,
    color: TechTheme.background,
    textAlign: 'center',
    fontWeight: Typography.weights.bold,
    letterSpacing: 1,
  },
}); 