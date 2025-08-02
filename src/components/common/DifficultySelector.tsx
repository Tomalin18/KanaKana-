import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
} from 'react-native';
import { TechTheme, Typography, Spacing, Shadows, TechColors } from '@/constants/theme';
import type { CombinedDifficultyLevel } from '@/types';

export interface DifficultyOption {
  id: CombinedDifficultyLevel;
  name: string;
  description: string;
  jlptRange: string;
  wordCount: number;
  color: string;
}

interface DifficultySelectorProps {
  selectedDifficulty: CombinedDifficultyLevel;
  onSelectDifficulty: (difficulty: CombinedDifficultyLevel) => void;
  disabled?: boolean;
}

const DIFFICULTY_OPTIONS: DifficultyOption[] = [
  {
    id: 'elementary',
    name: '初級',
    description: '適合初學者',
    jlptRange: 'N5-N4',
    wordCount: 3480, // BEGINNER_WORDS + NORMAL_WORDS
    color: TechTheme.success,
  },
  {
    id: 'intermediate',
    name: '中級',
    description: '適合有一定基礎的學習者',
    jlptRange: 'N5-N2',
    wordCount: 7558, // BEGINNER_WORDS + NORMAL_WORDS + HARD_WORDS + EXPERT_WORDS
    color: TechTheme.warning,
  },
  {
    id: 'advanced',
    name: '高級',
    description: '適合進階學習者',
    jlptRange: 'N5-N1',
    wordCount: 14112, // 所有詞彙
    color: TechTheme.error,
  },
];

export const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  selectedDifficulty,
  onSelectDifficulty,
  disabled = false,
}) => {
  const renderDifficultyOption = (option: DifficultyOption) => {
    const isSelected = selectedDifficulty === option.id;
    const scaleAnim = React.useRef(new Animated.Value(isSelected ? 1.05 : 1)).current;

    React.useEffect(() => {
      Animated.spring(scaleAnim, {
        toValue: isSelected ? 1.05 : 1,
        useNativeDriver: true,
        tension: 100,
        friction: 8,
      }).start();
    }, [isSelected]);

    return (
      <Animated.View
        key={option.id}
        style={[
          styles.optionContainer,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Pressable
          style={[
            styles.option,
            {
              backgroundColor: isSelected ? option.color : TechTheme.surface,
              borderColor: isSelected ? option.color : TechTheme.border,
              opacity: disabled ? 0.6 : 1,
            },
          ]}
          onPress={() => !disabled && onSelectDifficulty(option.id)}
          disabled={disabled}
        >
          <View style={styles.optionHeader}>
            <Text
              style={[
                styles.optionName,
                {
                  color: isSelected ? TechTheme.surface : TechTheme.text,
                },
              ]}
            >
              {option.name}
            </Text>
            <View
              style={[
                styles.levelBadge,
                {
                  backgroundColor: isSelected ? TechTheme.surface : option.color,
                },
              ]}
            >
              <Text
                style={[
                  styles.levelText,
                  {
                    color: isSelected ? option.color : TechTheme.surface,
                  },
                ]}
              >
                {option.jlptRange}
              </Text>
            </View>
          </View>
          
          <Text
            style={[
              styles.optionDescription,
              {
                color: isSelected ? TechTheme.surface : TechTheme.textSecondary,
              },
            ]}
          >
            {option.description}
          </Text>
          
          <Text
            style={[
              styles.wordCount,
              {
                color: isSelected ? TechTheme.surface : TechTheme.textSecondary,
              },
            ]}
          >
            {option.wordCount.toLocaleString()} 個單字
          </Text>
        </Pressable>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>選擇難度</Text>
      <Text style={styles.subtitle}>選擇適合你的學習等級</Text>
      
      <View style={styles.optionsContainer}>
        {DIFFICULTY_OPTIONS.map(renderDifficultyOption)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Spacing.lg,
  },
  title: {
    fontSize: Typography.sizes.ui.title,
    color: TechTheme.text,
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  subtitle: {
    fontSize: Typography.sizes.ui.body,
    color: TechTheme.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.xl,
  },
  optionsContainer: {
    gap: Spacing.md,
  },
  optionContainer: {
    ...Shadows.glass.medium,
  },
  option: {
    padding: Spacing.lg,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: TechTheme.border,
  },
  optionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  optionName: {
    fontSize: Typography.sizes.ui.subtitle,
    fontWeight: 'bold',
  },
  levelBadge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: 8,
  },
  levelText: {
    fontSize: Typography.sizes.ui.caption,
    fontWeight: 'bold',
  },
  optionDescription: {
    fontSize: Typography.sizes.ui.body,
    marginBottom: Spacing.sm,
  },
  wordCount: {
    fontSize: Typography.sizes.ui.caption,
    fontStyle: 'italic',
  },
}); 