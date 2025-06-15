import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Pressable, 
  SafeAreaView,
  ScrollView,
  StatusBar 
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/AppNavigator';
import type { GameMode } from '@/types';
import { LightTheme, Typography, Spacing } from '@/constants/theme';
import { isFeatureEnabled } from '@/utils/featureFlags';

type Props = NativeStackScreenProps<RootStackParamList, 'MainMenu'>;

/**
 * 主選單屏幕
 * 提供遊戲模式選擇和日式美學界面
 */
export const MainMenuScreen: React.FC<Props> = ({ navigation }) => {
  const handleGameModePress = (mode: GameMode) => {
    navigation.navigate('Game', { mode });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={LightTheme.primary} />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* 應用標題 */}
        <View style={styles.header}>
          <Text style={styles.titleJapanese}>かなタワー</Text>
          <Text style={styles.titleEnglish}>KANA TOWER</Text>
          <Text style={styles.subtitle}>日本語タイピング練習</Text>
        </View>

        {/* 遊戲模式選擇 */}
        <View style={styles.modesContainer}>
          <GameModeButton
            title="無限模式"
            subtitle="Infinite Mode"
            description="挑戰你的極限，看看能打多少字！"
            emoji="♾️"
            onPress={() => handleGameModePress('infinite')}
          />

          <GameModeButton
            title="練習模式"
            subtitle="Practice Mode"
            description="輕鬆練習，掌握假名輸入技巧"
            emoji="📚"
            onPress={() => handleGameModePress('practice')}
          />

          <GameModeButton
            title="每日挑戰"
            subtitle="Daily Challenge"
            description="每天一個新挑戰，持續進步！"
            emoji="🗓️"
            onPress={() => handleGameModePress('daily_challenge')}
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
              emoji="📄"
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

        {/* 底部信息 */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            開始你的日文打字之旅
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

/**
 * 遊戲模式按鈕組件
 */
interface GameModeButtonProps {
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  onPress: () => void;
  isNew?: boolean;
}

const GameModeButton: React.FC<GameModeButtonProps> = ({
  title,
  subtitle,
  description,
  emoji,
  onPress,
  isNew = false,
}) => {
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.modeButton,
        isNew && styles.modeButtonNew,
        pressed && styles.modeButtonPressed
      ]}
      onPress={onPress}
    >
      <Text style={styles.modeEmoji}>{emoji}</Text>
      <View style={styles.modeTextContainer}>
        <View style={styles.modeTitleContainer}>
          <Text style={styles.modeTitle}>{title}</Text>
          {isNew && <Text style={styles.newBadge}>NEW</Text>}
        </View>
        <Text style={styles.modeSubtitle}>{subtitle}</Text>
        <Text style={styles.modeDescription}>{description}</Text>
      </View>
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
  },
  titleJapanese: {
    fontSize: 42,
    fontWeight: '700',
    color: LightTheme.primary,
    marginBottom: Spacing.xs,
    textAlign: 'center',
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
    borderRadius: 16,
    padding: Spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
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
  footerText: {
    fontSize: Typography.sizes.ui.body,
    color: LightTheme.textSecondary,
    textAlign: 'center',
  },
  modeButtonNew: {
    borderColor: LightTheme.accent,
    borderWidth: 2,
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
}); 