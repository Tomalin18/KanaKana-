import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Animated,
} from 'react-native';
import { TechTheme, Spacing, Typography, Shadows } from '@/constants/theme';
import { GlassContainer } from './GlassContainer';

interface PauseOverlayProps {
  visible: boolean;
  onResume: () => void;
  onRestart?: () => void;
  onMainMenu?: () => void;
  title?: string;
  subtitle?: string;
  showRestart?: boolean;
  showMainMenu?: boolean;
}

export const PauseOverlay: React.FC<PauseOverlayProps> = ({
  visible,
  onResume,
  onRestart,
  onMainMenu,
  title = '⏸️ 遊戲暫停',
  subtitle = '點擊繼續按鈕恢復遊戲',
  showRestart = true,
  showMainMenu = true,
}) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <GlassContainer
        variant="surface"
        glowEffect={true}
        neonBorder={true}
        style={styles.container}
      >
        {/* 標題 */}
        <Text style={styles.title}>{title}</Text>
        
        {/* 副標題 */}
        <Text style={styles.subtitle}>{subtitle}</Text>
        
        {/* 按鈕組 */}
        <View style={styles.buttonGroup}>
          {/* 繼續按鈕 */}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              styles.primaryButton,
              pressed && styles.buttonPressed,
              Shadows.neon.blue,
            ]}
            onPress={onResume}
          >
            <Text style={styles.primaryButtonText}>▶️ 繼續遊戲</Text>
          </Pressable>
          
          {/* 重新開始按鈕 */}
          {showRestart && onRestart && (
            <Pressable
              style={({ pressed }) => [
                styles.button,
                styles.secondaryButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={onRestart}
            >
              <Text style={styles.secondaryButtonText}>🔄 重新開始</Text>
            </Pressable>
          )}
          
          {/* 主選單按鈕 */}
          {showMainMenu && onMainMenu && (
            <Pressable
              style={({ pressed }) => [
                styles.button,
                styles.dangerButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={onMainMenu}
            >
              <Text style={styles.dangerButtonText}>🏠 主選單</Text>
            </Pressable>
          )}
        </View>
      </GlassContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(10, 10, 15, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  
  container: {
    minWidth: 300,
    maxWidth: '90%',
    alignItems: 'center',
  },
  
  title: {
    fontSize: Typography.sizes.ui.title,
    fontWeight: Typography.weights.bold,
    color: TechTheme.text,
    textAlign: 'center',
    marginBottom: Spacing.md,
    textShadowColor: TechTheme.primary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  
  subtitle: {
    fontSize: Typography.sizes.ui.body,
    color: TechTheme.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.xl,
    lineHeight: Typography.lineHeights.ui,
  },
  
  buttonGroup: {
    width: '100%',
    gap: Spacing.md,
  },
  
  button: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderRadius: 12,
    alignItems: 'center',
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
    backgroundColor: 'transparent',
    borderColor: TechTheme.error,
  },
  
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.95 }],
  },
  
  primaryButtonText: {
    color: TechTheme.background,
    fontSize: Typography.sizes.ui.body,
    fontWeight: Typography.weights.semibold,
    letterSpacing: Typography.letterSpacing.ui,
  },
  
  secondaryButtonText: {
    color: TechTheme.text,
    fontSize: Typography.sizes.ui.body,
    fontWeight: Typography.weights.semibold,
    letterSpacing: Typography.letterSpacing.ui,
  },
  
  dangerButtonText: {
    color: TechTheme.error,
    fontSize: Typography.sizes.ui.body,
    fontWeight: Typography.weights.semibold,
    letterSpacing: Typography.letterSpacing.ui,
  },
}); 