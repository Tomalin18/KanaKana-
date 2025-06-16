import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { TechTheme, Spacing, Shadows, GlassEffects } from '@/constants/theme';

interface GlassContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'primary' | 'secondary' | 'accent' | 'surface';
  glowEffect?: boolean;
  neonBorder?: boolean;
  borderRadius?: number;
  padding?: number;
}

export const GlassContainer: React.FC<GlassContainerProps> = ({
  children,
  style,
  variant = 'primary',
  glowEffect = true,
  neonBorder = false,
  borderRadius = 16,
  padding = Spacing.md,
}) => {
  const getContainerStyle = () => {
    const baseStyle = [
      styles.container,
      { borderRadius, padding },
      style,
    ];

    // 添加毛玻璃效果
    switch (variant) {
      case 'primary':
        baseStyle.push(styles.primaryGlass);
        break;
      case 'secondary':
        baseStyle.push(styles.secondaryGlass);
        break;
      case 'accent':
        baseStyle.push(styles.accentGlass);
        break;
      case 'surface':
        baseStyle.push(styles.surfaceGlass);
        break;
    }

    // 添加發光效果
    if (glowEffect) {
      baseStyle.push(Shadows.glass.soft);
    }

    // 添加霓虹邊框
    if (neonBorder) {
      baseStyle.push(styles.neonBorder);
      baseStyle.push(Shadows.neon.blue);
    }

    return baseStyle;
  };

  return (
    <View style={getContainerStyle()}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    overflow: 'hidden',
  },
  
  primaryGlass: {
    backgroundColor: TechTheme.surface,
    borderColor: TechTheme.border,
  },
  
  secondaryGlass: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  
  accentGlass: {
    backgroundColor: 'rgba(0, 212, 255, 0.1)',
    borderColor: 'rgba(0, 212, 255, 0.3)',
  },
  
  surfaceGlass: {
    backgroundColor: 'rgba(26, 26, 46, 0.6)',
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  
  neonBorder: {
    borderColor: TechTheme.primary,
    borderWidth: 2,
  },
}); 