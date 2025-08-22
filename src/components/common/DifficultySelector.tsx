import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  ActivityIndicator,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { TechTheme, Typography, Spacing, Shadows, TechColors } from '@/constants/theme';
import type { CombinedDifficultyLevel } from '@/types';
import { getVocabularyStatistics } from '@/services/vocabularyService';

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

export const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  selectedDifficulty,
  onSelectDifficulty,
  disabled = false,
}) => {
  const { t } = useTranslation();
  const [wordCounts, setWordCounts] = useState<{
    elementary: number;
    intermediate: number;
    advanced: number;
  }>({ elementary: 0, intermediate: 0, advanced: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 載入詞彙統計數據
    const loadStatistics = async () => {
      try {
        const stats = await getVocabularyStatistics();
        setWordCounts({
          elementary: stats.elementary,
          intermediate: stats.intermediate,
          advanced: stats.advanced,
        });
      } catch (error) {
        console.error('Failed to load vocabulary statistics:', error);
        // 使用預設值作為 fallback
        setWordCounts({
          elementary: 3480,
          intermediate: 7558,
          advanced: 14112,
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadStatistics();
  }, []);

  const DIFFICULTY_OPTIONS: DifficultyOption[] = [
    {
      id: 'elementary',
      name: t('gameSettings.difficultyEasy'),
      description: t('difficulty.elementaryDescription'),
      jlptRange: 'N5-N4',
      wordCount: wordCounts.elementary,
      color: TechTheme.success,
    },
    {
      id: 'intermediate',
      name: t('gameSettings.difficultyNormal'),
      description: t('difficulty.intermediateDescription'),
      jlptRange: 'N5-N2',
      wordCount: wordCounts.intermediate,
      color: TechTheme.warning,
    },
    {
      id: 'advanced',
      name: t('gameSettings.difficultyHard'),
      description: t('difficulty.advancedDescription'),
      jlptRange: 'N5-N1',
      wordCount: wordCounts.advanced,
      color: TechTheme.error,
    },
  ];
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
            {isLoading ? (
              <ActivityIndicator size="small" color={isSelected ? TechTheme.surface : TechTheme.textSecondary} />
            ) : (
              `${option.wordCount.toLocaleString()} ${t('difficulty.words')}`
            )}
          </Text>
        </Pressable>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('difficulty.selectDifficulty')}</Text>
      <Text style={styles.subtitle}>{t('difficulty.selectSuitableLevel')}</Text>
      
      <View style={styles.optionsContainer}>
        {DIFFICULTY_OPTIONS.map(renderDifficultyOption)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Spacing.lg,
    paddingBottom: Spacing.md, // 減少底部間距
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
    marginBottom: Spacing.lg, // 減少間距
  },
  optionsContainer: {
    gap: Spacing.sm, // 減少選項之間的間距
  },
  optionContainer: {
    ...Shadows.glass.medium,
  },
  option: {
    padding: Spacing.md, // 減少內邊距
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
    marginBottom: Spacing.xs, // 減少間距
    lineHeight: 20, // 控制行高，讓文字更緊湊
  },
  wordCount: {
    fontSize: Typography.sizes.ui.caption,
    fontStyle: 'italic',
  },
}); 