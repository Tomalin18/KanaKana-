import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Pressable, 
  SafeAreaView,
  ScrollView,
  StatusBar,
  ImageBackground 
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/AppNavigator';
import type { GameMode } from '@/types';
import { LightTheme, Typography, Spacing, JapaneseColors, Shadows, getSeasonalTheme } from '@/constants/theme';
import { isFeatureEnabled } from '@/utils/featureFlags';

type Props = NativeStackScreenProps<RootStackParamList, 'MainMenu'>;

/**
 * 主選單屏幕
 * 提供遊戲模式選擇和日式美學界面
 */
export const MainMenuScreen: React.FC<Props> = ({ navigation }) => {
  const seasonalTheme = getSeasonalTheme();
  
  const handleGameModePress = (mode: GameMode) => {
    navigation.navigate('Game', { mode });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={JapaneseColors.ai} />
      
      {/* 日式背景漸變 */}
      <View style={styles.backgroundGradient} />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* 應用標題 - 日式設計 */}
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleJapanese}>かなタワー</Text>
            <View style={styles.titleUnderline} />
          </View>
          <Text style={styles.titleEnglish}>KANA TOWER</Text>
          <Text style={styles.subtitle}>日本語タイピング練習</Text>
          
          {/* 日式裝飾元素 */}
          <View style={styles.decorativeElements}>
            <Text style={styles.sakuraEmoji}>🌸</Text>
            <Text style={styles.sakuraEmoji}>🌸</Text>
            <Text style={styles.sakuraEmoji}>🌸</Text>
          </View>
        </View>

        {/* 遊戲模式選擇 - 日式卡片設計 */}
        <View style={styles.modesContainer}>
          <GameModeButton
            title="経典模式"
            subtitle="Classic Mode"
            description="挑戰你的極限，看看能打多少字！"
            emoji="⛩️"
            onPress={() => handleGameModePress('classic')}
            isPrimary
          />

          {/* 新遊戲模式（需要功能開關） */}
          {isFeatureEnabled('KANJI_MODE') && (
            <GameModeButton
              title="漢字模式"
              subtitle="Kanji Mode"
              description="看漢字輸入假名，提升漢字讀音能力！"
              emoji="🈴"
              onPress={() => handleGameModePress('kanji_to_kana')}
              isNew
            />
          )}

          {isFeatureEnabled('LONG_TEXT_MODE') && (
            <GameModeButton
              title="長文模式"
              subtitle="Long Text Mode"
              description="挑戰長篇文章，練習流暢輸入！"
              emoji="📜"
              onPress={() => handleGameModePress('long_text')}
              isNew
            />
          )}

          {isFeatureEnabled('TETRIS_MODE') && (
            <GameModeButton
              title="俄羅斯方塊"
              subtitle="Tetris Typing"
              description="在方塊掉落前輸入完成，刺激有趣！"
              emoji="🧩"
              onPress={() => handleGameModePress('tetris_typing')}
              isNew
            />
          )}
        </View>

        {/* 底部信息 - 日式格言 */}
        <View style={styles.footer}>
          <Text style={styles.footerQuote}>
            "千里の道も一歩から"
          </Text>
          <Text style={styles.footerTranslation}>
            千里之行，始於足下
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

/**
 * 遊戲模式按鈕組件 - 日式設計
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
        isPrimary && styles.modeButtonPrimary,
        isNew && styles.modeButtonNew,
        pressed && styles.modeButtonPressed
      ]}
      onPress={onPress}
    >
      {/* 日式邊框裝飾 */}
      <View style={styles.modeButtonBorder} />
      
      <Text style={[styles.modeEmoji, isPrimary && styles.modeEmojiPrimary]}>{emoji}</Text>
      <View style={styles.modeTextContainer}>
        <View style={styles.modeTitleContainer}>
          <Text style={[styles.modeTitle, isPrimary && styles.modeTitlePrimary]}>{title}</Text>
          {isNew && <Text style={styles.newBadge}>新</Text>}
        </View>
        <Text style={[styles.modeSubtitle, isPrimary && styles.modeSubtitlePrimary]}>{subtitle}</Text>
        <Text style={[styles.modeDescription, isPrimary && styles.modeDescriptionPrimary]}>{description}</Text>
      </View>
      
      {/* 日式角落裝飾 */}
      {isPrimary && (
        <View style={styles.cornerDecoration}>
          <Text style={styles.cornerText}>主</Text>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LightTheme.background,
  },
  scrollContent: {
    flexGrow: 1,
    padding: Spacing.lg,
  },
  header: {
    alignItems: 'center',
    marginVertical: Spacing.xxl,
    paddingHorizontal: Spacing.md,
  },
  titleJapanese: {
    fontSize: Typography.sizes.japanese.large,
    fontWeight: Typography.weights.heavy,
    color: JapaneseColors.ai,
    marginBottom: Spacing.sm,
    textAlign: 'center',
    letterSpacing: Typography.letterSpacing.japanese,
  },
  titleEnglish: {
    fontSize: Typography.sizes.ui.title,
    fontWeight: '300',
    color: LightTheme.textSecondary,
    letterSpacing: 2,
    marginBottom: Spacing.sm,
  },
  subtitle: {
    fontSize: Typography.sizes.ui.body,
    color: LightTheme.textSecondary,
    textAlign: 'center',
  },
  modesContainer: {
    flex: 1,
    gap: Spacing.md,
  },
  modeButton: {
    backgroundColor: LightTheme.surface,
    borderRadius: 20,
    padding: Spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Spacing.xs,
    ...Shadows.medium,
    borderWidth: 1,
    borderColor: LightTheme.border,
  },
  modeButtonPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.8,
  },
  modeEmoji: {
    fontSize: 32,
    marginRight: Spacing.md,
  },
  modeTextContainer: {
    flex: 1,
  },
  modeTitle: {
    fontSize: Typography.sizes.ui.subtitle,
    fontWeight: '600',
    color: LightTheme.text,
    marginBottom: Spacing.xs,
  },
  modeSubtitle: {
    fontSize: Typography.sizes.ui.caption,
    color: LightTheme.textSecondary,
    marginBottom: Spacing.xs,
    fontWeight: '500',
  },
  modeDescription: {
    fontSize: Typography.sizes.ui.caption,
    color: LightTheme.textSecondary,
    lineHeight: Typography.lineHeights.ui,
  },
  footer: {
    alignItems: 'center',
    marginTop: Spacing.xl,
    paddingVertical: Spacing.lg,
  },
  footerQuote: {
    fontSize: Typography.sizes.ui.body,
    color: LightTheme.textSecondary,
    textAlign: 'center',
  },
  footerTranslation: {
    fontSize: Typography.sizes.ui.body,
    color: LightTheme.textSecondary,
    textAlign: 'center',
  },
  modeButtonNew: {
    borderColor: LightTheme.accent,
    borderWidth: 2,
  },
  modeButtonPrimary: {
    backgroundColor: LightTheme.accent,
  },
  modeTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  newBadge: {
    backgroundColor: LightTheme.accent,
    color: 'white',
    fontSize: 10,
    fontWeight: '700',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    overflow: 'hidden',
  },
  modeButtonBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 2,
    borderColor: LightTheme.accent,
    borderRadius: 16,
  },
  modeEmojiPrimary: {
    color: 'white',
  },
  modeTitlePrimary: {
    color: 'white',
  },
  modeSubtitlePrimary: {
    color: 'white',
  },
  modeDescriptionPrimary: {
    color: 'white',
  },
  cornerDecoration: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: Spacing.sm,
    borderRadius: 8,
    backgroundColor: LightTheme.accent,
  },
  cornerText: {
    fontSize: Typography.sizes.ui.caption,
    color: 'white',
    fontWeight: '700',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleUnderline: {
    flex: 1,
    height: 2,
    backgroundColor: LightTheme.accent,
    marginHorizontal: Spacing.sm,
  },
  decorativeElements: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.sm,
  },
  sakuraEmoji: {
    fontSize: 24,
    marginHorizontal: Spacing.sm,
  },
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: JapaneseColors.ai,
  },
}); 