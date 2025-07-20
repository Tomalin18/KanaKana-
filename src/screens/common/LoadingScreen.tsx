import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { TechTheme, Typography, Spacing, Shadows, TechColors } from '@/constants/theme';

/**
 * 加載屏幕組件
 * 在應用初始化期間顯示，體現日式簡約美學
 */
export const LoadingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>かなタワー</Text>
        <Text style={styles.subtitle}>KanaKana</Text>
        
        <ActivityIndicator 
          size="large" 
          color={TechTheme.primary} 
          style={styles.spinner}
        />
        
        <Text style={styles.loadingText}>正在載入...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: TechTheme.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: Typography.sizes.ui.hero,
    fontWeight: '700',
    color: TechTheme.primary,
    marginBottom: Spacing.xs,
    fontFamily: Typography.fonts.japanese.fallback,
  },
  subtitle: {
    fontSize: Typography.sizes.ui.subtitle,
    color: TechTheme.textSecondary,
    marginBottom: Spacing.xxl,
    fontWeight: '300',
  },
  spinner: {
    marginVertical: Spacing.lg,
  },
  loadingText: {
    fontSize: Typography.sizes.ui.body,
    color: TechTheme.textSecondary,
    marginTop: Spacing.md,
  },
}); 