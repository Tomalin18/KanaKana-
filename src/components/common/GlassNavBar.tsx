import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  SafeAreaView,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { TechTheme, Spacing, Typography, Shadows, GlassEffects } from '@/constants/theme';

interface GlassNavBarProps {
  title: string;
  leftButton?: {
    text: string;
    onPress: () => void;
    style?: 'primary' | 'secondary' | 'danger';
  };
  rightButton?: {
    text: string;
    onPress: () => void;
    style?: 'primary' | 'secondary' | 'danger';
  };
  centerContent?: React.ReactNode;
  style?: ViewStyle;
  glowEffect?: boolean;
}

export const GlassNavBar: React.FC<GlassNavBarProps> = ({
  title,
  leftButton,
  rightButton,
  centerContent,
  style,
  glowEffect = true,
}) => {
  const getButtonStyle = (buttonStyle: 'primary' | 'secondary' | 'danger' = 'primary') => {
    const baseStyle = [styles.navButton];
    
    switch (buttonStyle) {
      case 'primary':
        return [...baseStyle, styles.primaryButton, glowEffect && Shadows.neon.blue];
      case 'secondary':
        return [...baseStyle, styles.secondaryButton];
      case 'danger':
        return [...baseStyle, styles.dangerButton, glowEffect && Shadows.neon.green];
      default:
        return baseStyle;
    }
  };

  const getButtonTextStyle = (buttonStyle: 'primary' | 'secondary' | 'danger' = 'primary') => {
    switch (buttonStyle) {
      case 'primary':
        return styles.primaryButtonText;
      case 'secondary':
        return styles.secondaryButtonText;
      case 'danger':
        return styles.dangerButtonText;
      default:
        return styles.primaryButtonText;
    }
  };

  return (
    <SafeAreaView style={[styles.container, style]}>
      <View style={[styles.navBar, glowEffect && Shadows.glass.soft]}>
        {/* 左側按鈕 */}
        <View style={styles.leftSection}>
          {leftButton ? (
            <Pressable
              style={({ pressed }) => [
                ...getButtonStyle(leftButton.style),
                pressed && styles.buttonPressed,
              ]}
              onPress={leftButton.onPress}
            >
              <Text style={getButtonTextStyle(leftButton.style)}>
                {leftButton.text}
              </Text>
            </Pressable>
          ) : (
            <View style={styles.navButton} />
          )}
        </View>

        {/* 中央內容 */}
        <View style={styles.centerSection}>
          {centerContent || (
            <Text style={[styles.title, glowEffect && styles.titleGlow]}>
              {title}
            </Text>
          )}
        </View>

        {/* 右側按鈕 */}
        <View style={styles.rightSection}>
          {rightButton ? (
            <Pressable
              style={({ pressed }) => [
                ...getButtonStyle(rightButton.style),
                pressed && styles.buttonPressed,
              ]}
              onPress={rightButton.onPress}
            >
              <Text style={getButtonTextStyle(rightButton.style)}>
                {rightButton.text}
              </Text>
            </Pressable>
          ) : (
            <View style={styles.navButton} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: TechTheme.surface,
    borderBottomWidth: 1,
    borderBottomColor: TechTheme.border,
  },
  
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    height: 64,
    backgroundColor: TechTheme.surface,
  },
  
  leftSection: {
    flex: 1,
    alignItems: 'flex-start',
  },
  
  centerSection: {
    flex: 2,
    alignItems: 'center',
  },
  
  rightSection: {
    flex: 1,
    alignItems: 'flex-end',
  },
  
  title: {
    fontSize: Typography.sizes.ui.subtitle,
    fontWeight: Typography.weights.bold,
    color: TechTheme.text,
    textAlign: 'center',
    letterSpacing: Typography.letterSpacing.ui,
  },
  
  titleGlow: {
    textShadowColor: TechTheme.primary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  
  navButton: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: 12,
    minWidth: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  
  primaryButton: {
    backgroundColor: TechTheme.primary,
    borderColor: TechTheme.primary,
  },
  
  secondaryButton: {
    backgroundColor: 'transparent',
    borderColor: TechTheme.border,
  },
  
  dangerButton: {
    backgroundColor: TechTheme.error,
    borderColor: TechTheme.error,
  },
  
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.95 }],
  },
  
  primaryButtonText: {
    color: TechTheme.background,
    fontSize: Typography.sizes.ui.caption,
    fontWeight: Typography.weights.semibold,
    letterSpacing: Typography.letterSpacing.ui,
  },
  
  secondaryButtonText: {
    color: TechTheme.text,
    fontSize: Typography.sizes.ui.caption,
    fontWeight: Typography.weights.semibold,
    letterSpacing: Typography.letterSpacing.ui,
  },
  
  dangerButtonText: {
    color: TechTheme.background,
    fontSize: Typography.sizes.ui.caption,
    fontWeight: Typography.weights.semibold,
    letterSpacing: Typography.letterSpacing.ui,
  },
}); 