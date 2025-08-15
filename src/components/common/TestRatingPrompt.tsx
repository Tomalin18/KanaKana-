import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRatingPrompt } from '@/hooks/useRatingPrompt';
import { testRatingPrompt } from '@/utils/ratingPrompt';
import { TechTheme, Typography, Spacing, TechColors } from '@/constants/theme';
import { GlassContainer } from './GlassContainer';

export const TestRatingPrompt: React.FC = () => {
  const {
    triggerOnAchievement,
    triggerOnGameCompleted,
    triggerOnStreakMilestone,
    triggerOnFeatureExplored,
    triggerOnSessionCount,
  } = useRatingPrompt();

  const testTriggers = [
    {
      title: '🧪 直接測試評分提示',
      onPress: () => testRatingPrompt(),
    },
    {
      title: '🎉 測試成就解鎖 (Epic)',
      onPress: () => triggerOnAchievement('epic', '速度大師'),
    },
    {
      title: '🎯 測試遊戲完成 (高分)',
      onPress: () => triggerOnGameCompleted(1500, 0.95, 'classic'),
    },
    {
      title: '🔥 測試連續使用 (10天)',
      onPress: () => triggerOnStreakMilestone(10),
    },
    {
      title: '🌟 測試功能探索 (5個)',
      onPress: () => triggerOnFeatureExplored(5),
    },
    {
      title: '📚 測試會話數量 (10次)',
      onPress: () => triggerOnSessionCount(10),
    },
    {
      title: '🎯 測試遊戲完成 (低分但高準確)',
      onPress: () => triggerOnGameCompleted(800, 0.95, 'classic'),
    },
    {
      title: '🔥 測試連續使用 (7天)',
      onPress: () => triggerOnStreakMilestone(7),
    },
  ];

  return (
    <View style={styles.container}>
      <GlassContainer
        variant="surface"
        glowEffect={true}
        neonBorder={true}
        style={styles.modalContainer}
      >
        <Text style={styles.title}>🧪 評分提示測試</Text>
        <Text style={styles.subtitle}>點擊下方按鈕測試不同的觸發條件</Text>
        
        <View style={styles.buttonContainer}>
          {testTriggers.map((trigger, index) => (
            <Pressable
              key={index}
              style={({ pressed }) => [
                styles.testButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={trigger.onPress}
            >
              <Text style={styles.buttonText}>{trigger.title}</Text>
            </Pressable>
          ))}
        </View>
      </GlassContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.lg,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  
  modalContainer: {
    width: '100%',
    maxWidth: 400,
    padding: Spacing.lg,
  },
  
  title: {
    fontSize: Typography.sizes.ui.title,
    fontWeight: '700',
    color: TechColors.neonBlue,
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  
  subtitle: {
    fontSize: Typography.sizes.ui.body,
    color: TechTheme.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.xl,
  },
  
  buttonContainer: {
    gap: Spacing.md,
  },
  
  testButton: {
    backgroundColor: TechColors.darkMatter,
    borderWidth: 2,
    borderColor: TechColors.neonPurple,
    borderRadius: 12,
    padding: Spacing.md,
    alignItems: 'center',
  },
  
  buttonPressed: {
    backgroundColor: TechColors.neonPurple,
    opacity: 0.8,
  },
  
  buttonText: {
    fontSize: Typography.sizes.ui.body,
    fontWeight: '600',
    color: TechTheme.text,
  },
});
