import { Platform } from 'react-native';
import type { ThemeColors, Season, TimeOfDay } from '@/types';

/**
 * 日式文化主題顏色系統
 * 基於真實的日本傳統色彩和現代設計原則
 */

// ============================================================================
// 傳統日本色彩
// ============================================================================

export const JapaneseColors = {
  // 基本色彩 - 基於日本傳統色名
  ai: '#1E40AF',           // 深藍 (AI/科技主題)
  sakura: '#FFB7C5',       // 櫻花粉
  matcha: '#87A96B',       // 抹茶綠
  yuhi: '#FF6B35',         // 夕陽橙
  sumi: '#1C1C1C',         // 墨色
  shiro: '#FFFFFF',        // 白
  
  // 季節色彩
  haru: {                  // 春
    primary: '#FFB7C5',    // 櫻花
    secondary: '#98FB98',  // 新綠
    tertiary: '#87CEEB',   // 春空
  },
  natsu: {                 // 夏
    primary: '#00CED1',    // 青碧
    secondary: '#98FB98',  // 翠綠
    tertiary: '#FFD700',   // 向日葵
  },
  aki: {                   // 秋
    primary: '#FF6B35',    // 紅葉
    secondary: '#DAA520',  // 銀杏
    tertiary: '#CD853F',   // 栗色
  },
  fuyu: {                  // 冬
    primary: '#B0C4DE',    // 淡雪
    secondary: '#E6E6FA',  // 薄紫
    tertiary: '#F0F8FF',   // 雪白
  }
} as const;

// ============================================================================
// 主題配色系統
// ============================================================================

export const LightTheme: ThemeColors = {
  primary: JapaneseColors.ai,
  secondary: JapaneseColors.sakura,
  background: JapaneseColors.sumi,
  surface: 'rgba(255, 255, 255, 0.1)',
  text: JapaneseColors.shiro,
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  accent: JapaneseColors.yuhi,
  success: JapaneseColors.matcha,
  warning: '#F59E0B',
  error: '#EF4444',
  overlay: 'rgba(0, 0, 0, 0.7)',
  border: 'rgba(255, 255, 255, 0.2)',
};

export const DarkTheme: ThemeColors = {
  primary: '#3B82F6',
  secondary: '#EC4899',
  background: '#0F172A',
  surface: '#1E293B',
  text: '#F1F5F9',
  textSecondary: '#94A3B8',
  accent: '#F97316',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  overlay: 'rgba(0, 0, 0, 0.7)',
  border: '#374151',
};

// ============================================================================
// 字體系統
// ============================================================================

export const Typography = {
  fonts: {
    japanese: {
      ios: 'Hiragino Sans',
      android: 'Noto Sans CJK JP',
      fallback: 'sans-serif',
    },
    ui: {
      primary: Platform.select({
        ios: 'SF Pro Display',
        android: 'Roboto',
        default: 'system',
      }),
      monospace: Platform.select({
        ios: 'SF Mono',
        android: 'Roboto Mono',
        default: 'monospace',
      }),
    },
  },
  sizes: {
    // 針對日文字符優化的大小
    bubble: {
      hiragana: 32,
      katakana: 30,
      mixed: 28,
    },
    ui: {
      hero: 36,
      title: 24,
      subtitle: 18,
      body: 16,
      caption: 14,
      micro: 12,
    },
  },
  // 日文需要更多的垂直空間
  lineHeights: {
    japanese: 1.8,
    ui: 1.5,
    dense: 1.3,
  },
  // 字符間距以提高清晰度
  letterSpacing: {
    japanese: 0.5,
    ui: 0,
    wide: 1.2,
  },
} as const;

// ============================================================================
// 間距系統 (基於8px網格)
// ============================================================================

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
} as const;

// ============================================================================
// 輔助函數
// ============================================================================

export const getCurrentSeason = (): Season => {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'autumn';
  return 'winter';
};

export const getCurrentTimeOfDay = (): TimeOfDay => {
  const hour = new Date().getHours();
  if (hour >= 6 && hour <= 10) return 'morning';
  if (hour >= 11 && hour <= 16) return 'day';
  if (hour >= 17 && hour <= 20) return 'evening';
  return 'night';
}; 