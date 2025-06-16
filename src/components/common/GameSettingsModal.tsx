import React from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { TechTheme, Typography, Spacing, Shadows, TechColors } from '@/constants/theme';
import { GlassContainer } from './GlassContainer';
import type { ClassicModeSettings, KanjiModeSettings } from '@/types';

interface GameSettingsModalProps {
  visible: boolean;
  mode: 'classic' | 'kanji';
  settings: ClassicModeSettings | KanjiModeSettings;
  onClose: () => void;
  onStart: (settings: ClassicModeSettings | KanjiModeSettings) => void;
}

export const GameSettingsModal: React.FC<GameSettingsModalProps> = ({
  visible,
  mode,
  settings,
  onClose,
  onStart,
}) => {
  const [currentSettings, setCurrentSettings] = React.useState(settings);

  const handleDifficultyChange = (difficulty: 'easy' | 'normal' | 'hard') => {
    setCurrentSettings(prev => ({ ...prev, difficulty }));
  };

  const handleStart = () => {
    console.log('GameSettingsModal: handleStart called with settings:', currentSettings);
    onStart(currentSettings);
  };

  const getDifficultyInfo = (difficulty: 'easy' | 'normal' | 'hard') => {
    switch (difficulty) {
      case 'easy':
        return {
          name: '簡單',
          description: '更多生命值，較慢節奏',
          lives: 5,
          timeBonus: '+50%',
          color: TechColors.neonGreen,
        };
      case 'normal':
        return {
          name: '普通',
          description: '標準遊戲體驗',
          lives: 3,
          timeBonus: '標準',
          color: TechColors.neonBlue,
        };
      case 'hard':
        return {
          name: '困難',
          description: '挑戰你的極限',
          lives: 1,
          timeBonus: '-25%',
          color: TechColors.neonPink,
        };
    }
  };

  const handleKanjiSettingChange = (key: keyof KanjiModeSettings, value: any) => {
    if (mode === 'kanji') {
      setCurrentSettings(prev => ({ ...prev, [key]: value }));
    }
  };

  const handleClassicSettingChange = (key: keyof ClassicModeSettings, value: any) => {
    if (mode === 'classic') {
      setCurrentSettings(prev => ({ ...prev, [key]: value }));
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <GlassContainer
          variant="surface"
          glowEffect={true}
          neonBorder={true}
          style={styles.modalContainer}
        >
          <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.modalTitle}>
              {mode === 'classic' ? '🎯 經典模式設定' : '🈯 漢字模式設定'}
            </Text>

            {/* 難度選擇 */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>難度選擇</Text>
              <View style={styles.difficultyContainer}>
                {(['easy', 'normal', 'hard'] as const).map((difficulty) => {
                  const info = getDifficultyInfo(difficulty);
                  const isSelected = currentSettings.difficulty === difficulty;
                  
                  return (
                    <Pressable
                      key={difficulty}
                      style={({ pressed }) => [
                        styles.difficultyButton,
                        isSelected && styles.difficultyButtonSelected,
                        pressed && styles.buttonPressed,
                        { borderColor: info.color },
                        isSelected && { backgroundColor: info.color + '20' },
                      ]}
                      onPress={() => handleDifficultyChange(difficulty)}
                    >
                      <Text style={[
                        styles.difficultyName,
                        { color: info.color },
                        isSelected && styles.difficultyNameSelected,
                      ]}>
                        {info.name}
                      </Text>
                      <Text style={[
                        styles.difficultyDescription,
                        isSelected && styles.difficultyDescriptionSelected,
                      ]}>
                        {info.description}
                      </Text>
                      <View style={styles.difficultyStats}>
                        <Text style={styles.difficultyStatText}>
                          ❤️ {info.lives} 生命
                        </Text>
                        <Text style={styles.difficultyStatText}>
                          ⏱️ {info.timeBonus}
                        </Text>
                      </View>
                    </Pressable>
                  );
                })}
              </View>
            </View>

            {/* 模式特定設定 */}
            {mode === 'kanji' && (
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>漢字模式設定</Text>
                
                <View style={styles.settingRow}>
                  <Text style={styles.settingLabel}>顯示意思</Text>
                  <Pressable
                    style={[
                      styles.toggleButton,
                      (currentSettings as KanjiModeSettings).showMeaning && styles.toggleButtonActive,
                    ]}
                    onPress={() => handleKanjiSettingChange('showMeaning', !(currentSettings as KanjiModeSettings).showMeaning)}
                  >
                    <Text style={[
                      styles.toggleButtonText,
                      (currentSettings as KanjiModeSettings).showMeaning && styles.toggleButtonTextActive,
                    ]}>
                      {(currentSettings as KanjiModeSettings).showMeaning ? '開啟' : '關閉'}
                    </Text>
                  </Pressable>
                </View>

                <View style={styles.settingRow}>
                  <Text style={styles.settingLabel}>讀音類型</Text>
                  <View style={styles.segmentedControl}>
                    {(['hiragana', 'katakana', 'both'] as const).map((type) => {
                      const isSelected = (currentSettings as KanjiModeSettings).readingType === type;
                      const labels = { hiragana: '平假名', katakana: '片假名', both: '混合' };
                      
                      return (
                        <Pressable
                          key={type}
                          style={[
                            styles.segmentButton,
                            isSelected && styles.segmentButtonActive,
                          ]}
                          onPress={() => handleKanjiSettingChange('readingType', type)}
                        >
                          <Text style={[
                            styles.segmentButtonText,
                            isSelected && styles.segmentButtonTextActive,
                          ]}>
                            {labels[type]}
                          </Text>
                        </Pressable>
                      );
                    })}
                  </View>
                </View>
              </View>
            )}

            {mode === 'classic' && (
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>經典模式設定</Text>
                
                <View style={styles.settingRow}>
                  <Text style={styles.settingLabel}>顯示提示</Text>
                  <Pressable
                    style={[
                      styles.toggleButton,
                      (currentSettings as ClassicModeSettings).showHints && styles.toggleButtonActive,
                    ]}
                    onPress={() => handleClassicSettingChange('showHints', !(currentSettings as ClassicModeSettings).showHints)}
                  >
                    <Text style={[
                      styles.toggleButtonText,
                      (currentSettings as ClassicModeSettings).showHints && styles.toggleButtonTextActive,
                    ]}>
                      {(currentSettings as ClassicModeSettings).showHints ? '開啟' : '關閉'}
                    </Text>
                  </Pressable>
                </View>

                <View style={styles.settingRow}>
                  <Text style={styles.settingLabel}>詞彙等級</Text>
                  <View style={styles.segmentedControl}>
                    {(['n5', 'n4', 'n3'] as const).map((level) => {
                      const isSelected = (currentSettings as ClassicModeSettings).vocabularyLevel === level;
                      
                      return (
                        <Pressable
                          key={level}
                          style={[
                            styles.segmentButton,
                            isSelected && styles.segmentButtonActive,
                          ]}
                          onPress={() => handleClassicSettingChange('vocabularyLevel', level)}
                        >
                          <Text style={[
                            styles.segmentButtonText,
                            isSelected && styles.segmentButtonTextActive,
                          ]}>
                            {level.toUpperCase()}
                          </Text>
                        </Pressable>
                      );
                    })}
                  </View>
                </View>
              </View>
            )}
          </ScrollView>

          {/* 按鈕區域 - 固定在底部 */}
          <View style={styles.buttonContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.cancelButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={onClose}
            >
              <Text style={styles.cancelButtonText}>取消</Text>
            </Pressable>
            
            <Pressable
              style={({ pressed }) => [
                styles.startButton,
                pressed && styles.buttonPressed,
                Shadows.neon.blue,
              ]}
              onPress={handleStart}
            >
              <Text style={styles.startButtonText}>🚀 開始遊戲</Text>
            </Pressable>
          </View>
        </GlassContainer>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.lg,
    zIndex: 1000,
  },
  
  modalContainer: {
    width: '100%',
    maxWidth: 400,
    maxHeight: '90%',
    paddingBottom: Spacing.lg,
  },
  
  scrollView: {
    flex: 1,
  },
  
  scrollContent: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.xl,
    flexGrow: 1,
  },
  
  modalTitle: {
    fontSize: Typography.sizes.ui.title,
    fontWeight: '700',
    color: TechColors.neonBlue,
    textAlign: 'center',
    marginBottom: Spacing.xl,
    textShadowColor: TechColors.neonBlue,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  
  sectionContainer: {
    marginBottom: Spacing.xl,
  },
  
  sectionTitle: {
    fontSize: Typography.sizes.ui.subtitle,
    fontWeight: '600',
    color: TechColors.neonPurple,
    marginBottom: Spacing.md,
  },
  
  difficultyContainer: {
    gap: Spacing.md,
  },
  
  difficultyButton: {
    borderWidth: 2,
    borderRadius: 12,
    padding: Spacing.md,
    borderColor: TechColors.darkMatter,
  },
  
  difficultyButtonSelected: {
    borderWidth: 2,
  },
  
  difficultyName: {
    fontSize: Typography.sizes.ui.body,
    fontWeight: '700',
    marginBottom: Spacing.xs,
  },
  
  difficultyNameSelected: {
    textShadowColor: 'currentColor',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
  
  difficultyDescription: {
    fontSize: Typography.sizes.ui.caption,
    color: TechTheme.textSecondary,
    marginBottom: Spacing.sm,
  },
  
  difficultyDescriptionSelected: {
    color: TechTheme.text,
  },
  
  difficultyStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  difficultyStatText: {
    fontSize: Typography.sizes.ui.caption,
    color: TechColors.neonGreen,
    fontWeight: '500',
  },
  
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  
  settingLabel: {
    fontSize: Typography.sizes.ui.body,
    color: TechTheme.text,
    fontWeight: '500',
  },
  
  toggleButton: {
    backgroundColor: TechColors.darkMatter,
    borderRadius: 8,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderWidth: 1,
    borderColor: TechColors.darkSpace,
  },
  
  toggleButtonActive: {
    backgroundColor: TechColors.neonBlue + '20',
    borderColor: TechColors.neonBlue,
  },
  
  toggleButtonText: {
    fontSize: Typography.sizes.ui.caption,
    color: TechTheme.textSecondary,
    fontWeight: '500',
  },
  
  toggleButtonTextActive: {
    color: TechColors.neonBlue,
    fontWeight: '600',
  },
  
  segmentedControl: {
    flexDirection: 'row',
    backgroundColor: TechColors.darkMatter,
    borderRadius: 8,
    padding: 2,
  },
  
  segmentButton: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: 6,
    minWidth: 60,
  },
  
  segmentButtonActive: {
    backgroundColor: TechColors.neonBlue,
  },
  
  segmentButtonText: {
    fontSize: Typography.sizes.ui.caption,
    color: TechTheme.textSecondary,
    textAlign: 'center',
    fontWeight: '500',
  },
  
  segmentButtonTextActive: {
    color: TechColors.darkSpace,
    fontWeight: '600',
  },
  
  buttonContainer: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginTop: Spacing.lg,
    paddingTop: Spacing.md,
    borderTopWidth: 1,
    borderTopColor: TechColors.darkMatter,
    backgroundColor: 'transparent',
    zIndex: 10,
  },
  
  cancelButton: {
    flex: 1,
    backgroundColor: TechColors.darkMatter,
    borderRadius: 12,
    paddingVertical: Spacing.lg,
    borderWidth: 1,
    borderColor: TechColors.darkSpace,
    minHeight: 48,
  },
  
  cancelButtonText: {
    color: TechColors.neonBlue,
    fontSize: Typography.sizes.ui.body,
    fontWeight: '600',
    textAlign: 'center',
  },
  
  startButton: {
    flex: 2,
    backgroundColor: TechColors.neonBlue,
    borderRadius: 12,
    paddingVertical: Spacing.lg,
    minHeight: 48,
  },
  
  startButtonText: {
    color: '#FFFFFF',
    fontSize: Typography.sizes.ui.body,
    fontWeight: '700',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
}); 