import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Switch,
  Pressable,
  Alert,
} from 'react-native';
import { LightTheme, Typography, Spacing } from '@/constants/theme';
import { useAppStore } from '@/store';
import { SEASONAL_THEMES, VOCABULARY_THEMES, INPUT_VALIDATION } from '@/constants/game';

interface SettingsScreenProps {
  navigation?: {
    goBack: () => void;
  };
}

/**
 * 設置屏幕
 * 管理遊戲設定、音效、視覺效果等
 */
export const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
  const { settings, updateSettings } = useAppStore();
  const [localSettings, setLocalSettings] = useState(settings);

  // 保存設置
  const saveSettings = () => {
    updateSettings(localSettings);
    Alert.alert('設定已保存', '您的設定已成功保存');
  };

  // 重置設定
  const resetSettings = () => {
    Alert.alert(
      '重置設定',
      '確定要重置所有設定到預設值嗎？',
      [
        { text: '取消', style: 'cancel' },
        {
          text: '重置',
          style: 'destructive',
          onPress: () => {
            // 這裡應該使用預設設定
            const defaultSettings = {
              audio: {
                masterVolume: 0.8,
                sfxVolume: 0.7,
                musicVolume: 0.5,
                voiceVolume: 0.8,
                enableHaptics: true,
                enableSpeech: false,
              },
              visual: {
                theme: 'seasonal' as const,
                fontSize: 'medium' as const,
                highContrast: false,
                reducedMotion: false,
                showParticles: true,
                particleCount: 30,
              },
              gameplay: {
                defaultMode: 'infinite' as const,
                defaultDifficulty: 'normal' as const,
                adaptiveDifficulty: true,
                vocabularyThemes: ['jlpt_n5' as const],
                inputValidation: 'lenient' as const,
                showHints: true,
                pauseOnBackground: true,
              },
              accessibility: {
                voiceOver: false,
                screenReader: false,
                colorBlindSupport: false,
                motorAccessibility: false,
                cognitiveSupport: false,
                japaneseVoiceGuide: false,
                furiganaSupport: false,
              },
              language: {
                uiLanguage: 'zh_tw' as const,
                inputLanguage: 'ja' as const,
                voiceLanguage: 'ja' as const,
                showRomaji: false,
                showEnglishMeaning: true,
              },
            };
            setLocalSettings(defaultSettings);
            updateSettings(defaultSettings);
          },
        },
      ]
    );
  };

  const renderSection = (title: string, children: React.ReactNode) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );

  const renderToggle = (
    label: string,
    value: boolean,
    onValueChange: (value: boolean) => void,
    description?: string
  ) => (
    <View style={styles.settingItem}>
      <View style={styles.settingInfo}>
        <Text style={styles.settingLabel}>{label}</Text>
        {description && <Text style={styles.settingDescription}>{description}</Text>}
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#767577', true: LightTheme.primary }}
        thumbColor={value ? LightTheme.surface : '#f4f3f4'}
      />
    </View>
  );

  const renderPicker = (
    label: string,
    selectedValue: string,
    options: Array<{ label: string; value: string }>,
    onValueChange: (value: string) => void
  ) => (
    <View style={styles.settingItem}>
      <Text style={styles.settingLabel}>{label}</Text>
      <View style={styles.pickerContainer}>
        {options.map((option) => (
          <Pressable
            key={option.value}
            style={[
              styles.pickerOption,
              selectedValue === option.value && styles.pickerOptionSelected,
            ]}
            onPress={() => onValueChange(option.value)}
          >
            <Text
              style={[
                styles.pickerOptionText,
                selectedValue === option.value && styles.pickerOptionTextSelected,
              ]}
            >
              {option.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation?.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← 返回</Text>
        </Pressable>
        <Text style={styles.headerTitle}>設定</Text>
        <View style={styles.headerActions}>
          <Pressable onPress={resetSettings} style={styles.resetButton}>
            <Text style={styles.resetButtonText}>重置</Text>
          </Pressable>
          <Pressable onPress={saveSettings} style={styles.saveButton}>
            <Text style={styles.saveButtonText}>保存</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView style={styles.content}>
        {renderSection(
          '音效設定',
          <>
            {renderToggle(
              '啟用觸覺反饋',
              localSettings.audio.enableHaptics,
              (value) =>
                setLocalSettings((prev) =>
                  ({
                    ...prev,
                    audio: { ...prev.audio, enableHaptics: value },
                  })
                ),
              '打字時的震動反饋'
            )}
            {renderToggle(
              '啟用語音朗讀',
              localSettings.audio.enableSpeech,
              (value) =>
                setLocalSettings((prev) =>
                  ({
                    ...prev,
                    audio: { ...prev.audio, enableSpeech: value },
                  })
                ),
              '朗讀日文單詞發音'
            )}
          </>
        )}

        {renderSection(
          '視覺設定',
          <>
            {renderPicker(
              '主題風格',
              localSettings.visual.theme,
              [
                { label: '季節主題', value: 'seasonal' },
                { label: '淺色主題', value: 'light' },
                { label: '深色主題', value: 'dark' },
              ],
              (value) =>
                setLocalSettings((prev) =>
                  ({
                    ...prev,
                    visual: { ...prev.visual, theme: value as any },
                  })
                )
            )}
            {renderPicker(
              '字體大小',
              localSettings.visual.fontSize,
              [
                { label: '小', value: 'small' },
                { label: '中', value: 'medium' },
                { label: '大', value: 'large' },
              ],
              (value) =>
                setLocalSettings((prev) =>
                  ({
                    ...prev,
                    visual: { ...prev.visual, fontSize: value as any },
                  })
                )
            )}
            {renderToggle(
              '顯示粒子效果',
              localSettings.visual.showParticles,
              (value) =>
                setLocalSettings((prev) =>
                  ({
                    ...prev,
                    visual: { ...prev.visual, showParticles: value },
                  })
                ),
              '成功輸入時的視覺效果'
            )}
            {renderToggle(
              '高對比度',
              localSettings.visual.highContrast,
              (value) =>
                setLocalSettings((prev) =>
                  ({
                    ...prev,
                    visual: { ...prev.visual, highContrast: value },
                  })
                ),
              '提高視覺對比度'
            )}
          </>
        )}

        {renderSection(
          '遊戲設定',
          <>
            {renderToggle(
              '自適應難度',
              localSettings.gameplay.adaptiveDifficulty,
              (value) =>
                setLocalSettings((prev) =>
                  ({
                    ...prev,
                    gameplay: { ...prev.gameplay, adaptiveDifficulty: value },
                  })
                ),
              '根據表現自動調整難度'
            )}
            {renderToggle(
              '顯示提示',
              localSettings.gameplay.showHints,
              (value) =>
                setLocalSettings((prev) =>
                  ({
                    ...prev,
                    gameplay: { ...prev.gameplay, showHints: value },
                  })
                ),
              '顯示輸入提示和幫助'
            )}
            {renderPicker(
              '輸入驗證',
              localSettings.gameplay.inputValidation,
              [
                { label: '嚴格', value: 'strict' },
                { label: '寬鬆', value: 'lenient' },
                { label: '輔助', value: 'assisted' },
              ],
              (value) =>
                setLocalSettings((prev) =>
                  ({
                    ...prev,
                    gameplay: { ...prev.gameplay, inputValidation: value as any },
                  })
                )
            )}
          </>
        )}

        {renderSection(
          '語言設定',
          <>
            {renderToggle(
              '顯示羅馬字',
              localSettings.language.showRomaji,
              (value) =>
                setLocalSettings((prev) =>
                  ({ 
                    ...prev,
                    language: { ...prev.language, showRomaji: value },
                  })
                ),
              '在日文下方顯示羅馬字'
            )}
            {renderToggle(
              '顯示英文意思',
              localSettings.language.showEnglishMeaning,
              (value) =>
                setLocalSettings((prev) =>
                  ({
                    ...prev,
                    language: { ...prev.language, showEnglishMeaning: value },
                  })
                ),
              '顯示單詞的英文釋義'
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LightTheme.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: LightTheme.border,
  },
  backButton: {
    padding: Spacing.xs,
  },
  backButtonText: {
    fontSize: Typography.sizes.ui.body,
    color: LightTheme.primary,
  },
  headerTitle: {
    fontSize: Typography.sizes.ui.title,
    fontWeight: '600',
    color: LightTheme.text,
  },
  headerActions: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  resetButton: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: 6,
    backgroundColor: LightTheme.error + '20',
  },
  resetButtonText: {
    fontSize: Typography.sizes.ui.caption,
    color: LightTheme.error,
  },
  saveButton: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: 6,
    backgroundColor: LightTheme.primary,
  },
  saveButtonText: {
    fontSize: Typography.sizes.ui.caption,
    color: LightTheme.surface,
  },
  content: {
    flex: 1,
    padding: Spacing.md,
  },
  section: {
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    fontSize: Typography.sizes.ui.subtitle,
    fontWeight: '600',
    color: LightTheme.text,
    marginBottom: Spacing.md,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: LightTheme.border,
  },
  settingInfo: {
    flex: 1,
  },
  settingLabel: {
    fontSize: Typography.sizes.ui.body,
    color: LightTheme.text,
    marginBottom: Spacing.xs,
  },
  settingDescription: {
    fontSize: Typography.sizes.ui.caption,
    color: LightTheme.textSecondary,
  },
  pickerContainer: {
    flexDirection: 'row',
    gap: Spacing.xs,
  },
  pickerOption: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: LightTheme.border,
  },
  pickerOptionSelected: {
    backgroundColor: LightTheme.primary,
    borderColor: LightTheme.primary,
  },
  pickerOptionText: {
    fontSize: Typography.sizes.ui.caption,
    color: LightTheme.text,
  },
  pickerOptionTextSelected: {
    color: LightTheme.surface,
  },
}); 