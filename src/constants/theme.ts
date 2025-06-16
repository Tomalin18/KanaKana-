import { Platform } from 'react-native';
import type { ThemeColors, Season, TimeOfDay } from '@/types';

/**
 * 日式文化主題顏色系統
 * 基於真實的日本傳統色彩和現代設計原則
 */

// ============================================================================
// 傳統日本色彩 - 擴展版
// ============================================================================

export const JapaneseColors = {
  // 基本色彩 - 基於日本傳統色名
  ai: '#1E40AF',           // 深藍 (AI/科技主題)
  sakura: '#FFB7C5',       // 櫻花粉
  matcha: '#87A96B',       // 抹茶綠
  yuhi: '#FF6B35',         // 夕陽橙
  sumi: '#1C1C1C',         // 墨色
  shiro: '#FFFFFF',        // 白
  
  // 傳統色彩擴展
  beni: '#D2001F',         // 紅 (深紅)
  kon: '#223A70',          // 紺 (深藍)
  yamabuki: '#F8B500',     // 山吹色 (金黃)
  mizu: '#86C8BC',         // 水色 (淺藍綠)
  murasaki: '#884898',     // 紫
  kinari: '#FFEAA7',       // 生成色 (米色)
  
  // 季節色彩
  haru: {                  // 春
    primary: '#FFB7C5',    // 櫻花
    secondary: '#98FB98',  // 新綠
    tertiary: '#87CEEB',   // 春空
    accent: '#F8B500',     // 菜花色
  },
  natsu: {                 // 夏
    primary: '#00CED1',    // 青碧
    secondary: '#98FB98',  // 翠綠
    tertiary: '#FFD700',   // 向日葵
    accent: '#FF6B35',     // 夏橙
  },
  aki: {                   // 秋
    primary: '#FF6B35',    // 紅葉
    secondary: '#DAA520',  // 銀杏
    tertiary: '#CD853F',   // 栗色
    accent: '#D2001F',     // 深紅
  },
  fuyu: {                  // 冬
    primary: '#B0C4DE',    // 淡雪
    secondary: '#E6E6FA',  // 薄紫
    tertiary: '#F0F8FF',   // 雪白
    accent: '#223A70',     // 冬空
  },
  
  // 和風漸變
  gradients: {
    sakura: ['#FFB7C5', '#FFF0F5'],      // 櫻花漸變
    sunset: ['#FF6B35', '#F8B500'],      // 夕陽漸變
    ocean: ['#00CED1', '#86C8BC'],       // 海洋漸變
    forest: ['#87A96B', '#98FB98'],      // 森林漸變
    winter: ['#B0C4DE', '#F0F8FF'],      // 冬雪漸變
  }
} as const;

// ============================================================================
// 主題配色系統 - 日式優化
// ============================================================================

export const LightTheme: ThemeColors = {
  primary: JapaneseColors.ai,
  secondary: JapaneseColors.sakura,
  background: '#FAFAFA',              // 更溫暖的背景
  surface: '#FFFFFF',
  text: '#2D3748',                    // 更柔和的文字色
  textSecondary: '#718096',
  accent: JapaneseColors.yuhi,
  success: JapaneseColors.matcha,
  warning: JapaneseColors.yamabuki,
  error: JapaneseColors.beni,
  overlay: 'rgba(0, 0, 0, 0.5)',
  border: '#E2E8F0',
};

export const DarkTheme: ThemeColors = {
  primary: '#4299E1',
  secondary: '#ED64A6',
  background: '#1A202C',
  surface: '#2D3748',
  text: '#F7FAFC',
  textSecondary: '#A0AEC0',
  accent: '#F56500',
  success: '#68D391',
  warning: '#F6E05E',
  error: '#FC8181',
  overlay: 'rgba(0, 0, 0, 0.7)',
  border: '#4A5568',
};

// 季節性主題
export const SeasonalThemes = {
  spring: {
    ...LightTheme,
    primary: JapaneseColors.haru.primary,
    accent: JapaneseColors.haru.accent,
    background: '#FFF8F0',
  },
  summer: {
    ...LightTheme,
    primary: JapaneseColors.natsu.primary,
    accent: JapaneseColors.natsu.accent,
    background: '#F0FFFF',
  },
  autumn: {
    ...LightTheme,
    primary: JapaneseColors.aki.primary,
    accent: JapaneseColors.aki.accent,
    background: '#FFF8DC',
  },
  winter: {
    ...LightTheme,
    primary: JapaneseColors.fuyu.primary,
    accent: JapaneseColors.fuyu.accent,
    background: '#F8F8FF',
  },
} as const;

// ============================================================================
// 字體系統 - 日式優化
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
      hero: 42,                         // 增大標題
      title: 28,                        // 增大標題
      subtitle: 20,                     // 增大副標題
      body: 16,
      caption: 14,
      micro: 12,
    },
    japanese: {
      large: 36,                        // 大型日文
      medium: 24,                       // 中型日文
      small: 18,                        // 小型日文
    },
  },
  // 日文需要更多的垂直空間
  lineHeights: {
    japanese: 1.8,
    ui: 1.6,                           // 增加行高
    dense: 1.4,
  },
  // 字符間距以提高清晰度
  letterSpacing: {
    japanese: 0.5,
    ui: 0.3,                           // 增加字母間距
    wide: 1.5,
  },
  // 字重
  weights: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    heavy: '800',
  },
} as const;

// ============================================================================
// 間距系統 (基於8px網格) - 日式優化
// ============================================================================

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
  
  // 日式特殊間距
  tatami: 12,                          // 榻榻米比例間距
  ma: 20,                              // 間 (日式空間概念)
} as const;

// ============================================================================
// 陰影系統 - 日式柔和陰影
// ============================================================================

export const Shadows = {
  soft: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },
  strong: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
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

export const getSeasonalTheme = (season?: Season): ThemeColors => {
  const currentSeason = season || getCurrentSeason();
  return SeasonalThemes[currentSeason];
}; 