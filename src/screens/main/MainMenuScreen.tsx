import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Pressable, 
  SafeAreaView,
  ScrollView,
  StatusBar,
  ImageBackground,
  Dimensions 
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/AppNavigator';
import type { GameMode } from '@/types';
import { LightTheme, Typography, Spacing, JapaneseColors } from '@/constants/theme';
import { isFeatureEnabled } from '@/utils/featureFlags';

type Props = NativeStackScreenProps<RootStackParamList, 'MainMenu'>;

/**
 * 主選單屏幕 - 日本風格設計
 * 提供簡化的遊戲模式選擇和傳統日式美學界面
 */
export const MainMenuScreen: React.FC<Props> = ({ navigation }) => {
  const handleGameModePress = (mode: GameMode) => {
    navigation.navigate('Game', { mode });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={JapaneseColors.sumi} />
      
      {/* 日式背景漸變 */}
      <View style={styles.backgroundGradient} />
      
      {/* 傳統日式圖案背景 */}
      <View style={styles.patternOverlay} />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* 應用標題 - 日式書法風格 */}
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleJapanese}>かなタワー</Text>
            <View style={styles.titleUnderline} />
          </View>
          <Text style={styles.titleEnglish}>KANA TOWER</Text>
          <Text style={styles.subtitle}>日本語タイピング道場</Text>
          
          {/* 傳統印章風格裝飾 */}
          <View style={styles.sealContainer}>
            <Text style={styles.sealText}>練</Text>
          </View>
        </View>

        {/* 遊戲模式選擇 - 日式卡片設計 */}
        <View style={styles.modesContainer}>
          <GameModeCard
            title="経典模式"
            titleJapanese="けいてん"
            subtitle="Classic Mode"
            description="傳統的日文打字練習，挑戰你的極限"
            emoji="🏮"
            gradient={['#FF6B35', '#FF8E53']}
            onPress={() => handleGameModePress('infinite')}
            isPrimary
          />

          {/* 新遊戲模式 */}
          {isFeatureEnabled('KANJI_MODE') && (
            <GameModeCard
              title="漢字道場"
              titleJapanese="かんじどうじょう"
              subtitle="Kanji Dojo"
              description="看漢字輸入假名，提升漢字讀音能力"
              emoji="🈴"
              gradient={['#1E40AF', '#3B82F6']}
              onPress={() => handleGameModePress('kanji_to_kana')}
              isNew
            />
          )}

          {isFeatureEnabled('LONG_TEXT_MODE') && (
            <GameModeCard
              title="長文修行"
              titleJapanese="ちょうぶんしゅぎょう"
              subtitle="Long Text Training"
              description="挑戰長篇文章，練習流暢輸入技巧"
              emoji="📜"
              gradient={['#87A96B', '#A4C3A2']}
              onPress={() => handleGameModePress('long_text')}
              isNew
            />
          )}

          {isFeatureEnabled('TETRIS_MODE') && (
            <GameModeCard
              title="方塊道"
              titleJapanese="ほうかくどう"
              subtitle="Block Typing Way"
              description="在方塊掉落前完成輸入，刺激有趣"
              emoji="🧩"
              gradient={['#EC4899', '#F472B6']}
              onPress={() => handleGameModePress('tetris_typing')}
              isNew
            />
          )}
        </View>

        {/* 底部信息 - 日式格言 */}
        <View style={styles.footer}>
          <Text style={styles.footerQuote}>
            "千里之行，始於足下"
          </Text>
          <Text style={styles.footerSubtext}>
            開始你的日文修行之旅
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

/**
 * 日式遊戲模式卡片組件
 */
interface GameModeCardProps {
  title: string;
  titleJapanese: string;
  subtitle: string;
  description: string;
  emoji: string;
  gradient: [string, string];
  onPress: () => void;
  isNew?: boolean;
  isPrimary?: boolean;
}

const GameModeCard: React.FC<GameModeCardProps> = ({
  title,
  titleJapanese,
  subtitle,
  description,
  emoji,
  gradient,
  onPress,
  isNew = false,
  isPrimary = false,
}) => {
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.modeCard,
        isPrimary && styles.modeCardPrimary,
        isNew && styles.modeCardNew,
        pressed && styles.modeCardPressed
      ]}
      onPress={onPress}
    >
      {/* 漸變背景 */}
      <View style={[styles.cardGradient, { backgroundColor: gradient[0] }]} />
      
      {/* 內容 */}
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardEmoji}>{emoji}</Text>
          {isNew && (
            <View style={styles.newBadge}>
              <Text style={styles.newBadgeText}>新</Text>
            </View>
          )}
        </View>
        
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardTitleJapanese}>{titleJapanese}</Text>
          <Text style={styles.cardSubtitle}>{subtitle}</Text>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
        
        {/* 日式裝飾線 */}
        <View style={styles.cardDecorationLine} />
      </View>
    </Pressable>
  );
};

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: JapaneseColors.sumi,
  },
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'linear-gradient(135deg, #1C1C1C 0%, #2D2D2D 50%, #1A1A1A 100%)',
  },
  patternOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.05,
    backgroundColor: 'transparent',
  },
  scrollContent: {
    flexGrow: 1,
    padding: Spacing.lg,
  },
  header: {
    alignItems: 'center',
    marginVertical: Spacing.xxl,
    paddingVertical: Spacing.xl,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  titleJapanese: {
    fontSize: 48,
    fontWeight: '700',
    color: JapaneseColors.shiro,
    textAlign: 'center',
    letterSpacing: 2,
    textShadowColor: 'rgba(255, 255, 255, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  titleUnderline: {
    width: 120,
    height: 3,
    backgroundColor: JapaneseColors.yuhi,
    marginTop: Spacing.xs,
    borderRadius: 2,
  },
  titleEnglish: {
    fontSize: Typography.sizes.ui.title,
    fontWeight: '300',
    color: '#B0B0B0',
    letterSpacing: 4,
    marginBottom: Spacing.sm,
  },
  subtitle: {
    fontSize: Typography.sizes.ui.body,
    color: '#888888',
    textAlign: 'center',
    marginBottom: Spacing.lg,
  },
  sealContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: JapaneseColors.yuhi,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: JapaneseColors.shiro,
    shadowColor: JapaneseColors.yuhi,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  sealText: {
    fontSize: 24,
    fontWeight: '900',
    color: JapaneseColors.shiro,
  },
  modesContainer: {
    flex: 1,
    gap: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  modeCard: {
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 12,
    marginHorizontal: 4,
  },
  modeCardPrimary: {
    transform: [{ scale: 1.02 }],
    shadowOpacity: 0.4,
    shadowRadius: 20,
  },
  modeCardNew: {
    borderWidth: 2,
    borderColor: JapaneseColors.sakura,
  },
  modeCardPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  cardGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.9,
  },
  cardContent: {
    padding: Spacing.lg,
    minHeight: 140,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.md,
  },
  cardEmoji: {
    fontSize: 36,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  newBadge: {
    backgroundColor: JapaneseColors.sakura,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: JapaneseColors.shiro,
  },
  newBadgeText: {
    color: JapaneseColors.shiro,
    fontSize: 12,
    fontWeight: '700',
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: Typography.sizes.ui.subtitle,
    fontWeight: '700',
    color: JapaneseColors.shiro,
    marginBottom: Spacing.xs,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  cardTitleJapanese: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: Spacing.xs,
    fontStyle: 'italic',
  },
  cardSubtitle: {
    fontSize: Typography.sizes.ui.caption,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: Spacing.sm,
    fontWeight: '500',
  },
  cardDescription: {
    fontSize: Typography.sizes.ui.caption,
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: Typography.lineHeights.ui,
  },
  cardDecorationLine: {
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginTop: Spacing.md,
    borderRadius: 1,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: Spacing.xl,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  footerQuote: {
    fontSize: Typography.sizes.ui.body,
    color: JapaneseColors.sakura,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: Spacing.sm,
  },
  footerSubtext: {
    fontSize: Typography.sizes.ui.caption,
    color: '#888888',
    textAlign: 'center',
  },
}); 