import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { TechTheme, Typography, Spacing, Shadows, TechColors } from '@/constants/theme';
import { GlassNavBar, GlassContainer, LanguageSelector } from '@/components/common';
import { getCurrentLanguage, getSupportedLanguages } from '@/i18n';

interface SettingsScreenProps {
  navigation?: {
    goBack: () => void;
  };
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const [languageSelectorVisible, setLanguageSelectorVisible] = useState(false);
  
  const handleBack = () => {
    navigation?.goBack();
  };

  const handleLanguagePress = () => {
    console.log('Language button pressed, setting visible to true');
    setLanguageSelectorVisible(true);
  };

  const getCurrentLanguageName = () => {
    const currentLang = getCurrentLanguage();
    const supportedLanguages = getSupportedLanguages();
    return supportedLanguages.find(lang => lang.code === currentLang)?.nativeName || '繁體中文';
  };

  return (
    <View style={styles.container}>
      {/* 星空背景 */}
      <StarfieldBackground />
      
      {/* 統一導航欄 */}
      <GlassNavBar
        title={t('settings.title')}
        leftButton={{
          text: `← ${t('common.back')}`,
          onPress: handleBack,
          style: 'secondary',
        }}
      />
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* 遊戲設定 */}
        <GlassContainer
          variant="primary"
          glowEffect={true}
          style={styles.sectionContainer}
        >
          <Text style={styles.sectionTitle}>🎮 {t('gameSettings.title')}</Text>
          
          <SettingItem
            title={t('audio.title')}
            subtitle={t('audio.masterVolume')}
            value="開啟"
            onPress={() => {}}
          />
          
          <SettingItem
            title={t('audio.enableHaptics')}
            subtitle={t('audio.enableHaptics')}
            value="開啟"
            onPress={() => {}}
          />
          
          <SettingItem
            title={t('gameSettings.difficulty')}
            subtitle={t('gameSettings.difficultyNormal')}
            value={t('gameSettings.difficultyNormal')}
            onPress={() => {}}
          />
        </GlassContainer>
        
        {/* 顯示設定 */}
        <GlassContainer
          variant="secondary"
          glowEffect={true}
          style={styles.sectionContainer}
        >
          <Text style={styles.sectionTitle}>🎨 {t('visual.title')}</Text>
          
          <SettingItem
            title={t('visual.theme')}
            subtitle={t('visual.themeAuto')}
            value={t('visual.themeAuto')}
            onPress={() => {}}
          />
          
          <SettingItem
            title={t('visual.fontSize')}
            subtitle={t('visual.fontSizeMedium')}
            value={t('visual.fontSizeMedium')}
            onPress={() => {}}
          />
          
          <SettingItem
            title={t('visual.reducedMotion')}
            subtitle={t('visual.reducedMotion')}
            value="開啟"
            onPress={() => {}}
          />
        </GlassContainer>
        
        {/* 學習設定 */}
        <GlassContainer
          variant="accent"
          glowEffect={true}
          neonBorder={true}
          style={styles.sectionContainer}
        >
          <Text style={styles.sectionTitle}>📚 {t('gameSettings.vocabularyLevel')}</Text>
          
          <SettingItem
            title={t('gameSettings.vocabularyLevel')}
            subtitle="JLPT N5"
            value="JLPT N5"
            onPress={() => {}}
          />
          
          <SettingItem
            title={t('gameSettings.readingType')}
            subtitle={t('gameSettings.readingTypeMixed')}
            value={t('gameSettings.readingTypeMixed')}
            onPress={() => {}}
          />
          
          <SettingItem
            title={t('gameSettings.showHints')}
            subtitle={t('gameSettings.showHints')}
            value="開啟"
            onPress={() => {}}
          />
        </GlassContainer>

        {/* 語言設定 */}
        <GlassContainer
          variant="surface"
          glowEffect={true}
          style={styles.sectionContainer}
        >
          <Text style={styles.sectionTitle}>🌐 {t('language.title')}</Text>
          
          <SettingItem
            title={t('language.uiLanguage')}
            subtitle={t('language.selectLanguage')}
            value={getCurrentLanguageName()}
            onPress={handleLanguagePress}
          />
        </GlassContainer>
        
        {/* 關於 */}
        <GlassContainer
          variant="surface"
          glowEffect={false}
          style={styles.aboutContainer}
        >
          <Text style={styles.aboutTitle}>🌟 KanaKana</Text>
          <Text style={styles.aboutVersion}>{t('about.version')} 1.0.1</Text>
          <Text style={styles.aboutDescription}>
            {t('about.description')}
          </Text>
          <Text style={styles.aboutCopyright}>
            © 2024 Neural Learning Systems
          </Text>
        </GlassContainer>
      </ScrollView>

      {/* 語言選擇器 */}
      <LanguageSelector
        visible={languageSelectorVisible}
        onClose={() => {
          console.log('LanguageSelector onClose called');
          setLanguageSelectorVisible(false);
        }}
      />
    </View>
  );
};

/**
 * 星空背景組件
 */
const StarfieldBackground: React.FC = () => {
  const stars = Array.from({ length: 40 }, (_, i) => ({
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
 * 設定項目組件
 */
interface SettingItemProps {
  title: string;
  subtitle: string;
  value: string;
  onPress: () => void;
}

const SettingItem: React.FC<SettingItemProps> = ({
  title,
  subtitle,
  value,
  onPress,
}) => (
  <Pressable
    style={({ pressed }) => [
      styles.settingItem,
      pressed && styles.settingItemPressed,
    ]}
    onPress={onPress}
  >
    <View style={styles.settingInfo}>
      <Text style={styles.settingTitle}>{title}</Text>
      <Text style={styles.settingSubtitle}>{subtitle}</Text>
    </View>
    <View style={styles.settingValue}>
      <Text style={styles.settingValueText}>{value}</Text>
      <Text style={styles.settingArrow}>›</Text>
    </View>
  </Pressable>
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
  
  scrollView: {
    flex: 1,
  },
  
  scrollContent: {
    padding: Spacing.md,
    gap: Spacing.lg,
  },
  
  // 區塊容器
  sectionContainer: {
    gap: Spacing.sm,
  },
  
  sectionTitle: {
    fontSize: Typography.sizes.ui.subtitle,
    fontWeight: Typography.weights.bold,
    color: TechTheme.text,
    marginBottom: Spacing.md,
    textShadowColor: TechColors.neonBlue,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  
  // 設定項目
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.sm,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  
  settingItemPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  
  settingInfo: {
    flex: 1,
  },
  
  settingTitle: {
    fontSize: Typography.sizes.ui.body,
    fontWeight: Typography.weights.semibold,
    color: TechTheme.text,
    marginBottom: Spacing.xs,
  },
  
  settingSubtitle: {
    fontSize: Typography.sizes.ui.caption,
    color: TechTheme.textSecondary,
    lineHeight: Typography.lineHeights.ui,
  },
  
  settingValue: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  
  settingValueText: {
    fontSize: Typography.sizes.ui.caption,
    color: TechColors.neonGreen,
    fontWeight: Typography.weights.medium,
  },
  
  settingArrow: {
    fontSize: 18,
    color: TechTheme.textSecondary,
  },
  
  // 關於區塊
  aboutContainer: {
    alignItems: 'center',
    marginTop: Spacing.lg,
  },
  
  aboutTitle: {
    fontSize: Typography.sizes.ui.title,
    fontWeight: Typography.weights.bold,
    color: TechTheme.text,
    marginBottom: Spacing.xs,
    textShadowColor: TechColors.neonPurple,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  
  aboutVersion: {
    fontSize: Typography.sizes.ui.body,
    color: TechColors.neonBlue,
    marginBottom: Spacing.md,
    fontWeight: Typography.weights.medium,
  },
  
  aboutDescription: {
    fontSize: Typography.sizes.ui.caption,
    color: TechTheme.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.md,
    lineHeight: Typography.lineHeights.ui,
  },
  
  aboutCopyright: {
    fontSize: Typography.sizes.ui.caption,
    color: TechTheme.textSecondary,
    opacity: 0.7,
  },
}); 