import { Platform } from 'react-native';
import type { ThemeColors, Season, TimeOfDay } from '@/types';

/**
 * 科技感毛玻璃風格主題系統
 * 結合現代科技美學與日式簡約設計
 */

// ============================================================================
// 科技感配色系統
// ============================================================================

export const TechColors = {
  // 主要科技色彩
  neonBlue: '#00D4FF',        // 霓虹藍
  neonPurple: '#8B5CF6',      // 霓虹紫
  neonGreen: '#00FF88',       // 霓虹綠
  neonPink: '#FF006E',        // 霓虹粉
  neonOrange: '#FF8500',      // 霓虹橙
  
  // 深色背景系統
  darkSpace: '#0A0A0F',       // 深空色
  darkMatter: '#1A1A2E',      // 暗物質
  darkNebula: '#16213E',      // 星雲色
  darkVoid: '#0F0F23',        // 虛空色
  
  // 毛玻璃效果色彩
  glassDark: 'rgba(26, 26, 46, 0.8)',      // 深色毛玻璃
  glassLight: 'rgba(255, 255, 255, 0.1)',  // 淺色毛玻璃
  glassMedium: 'rgba(255, 255, 255, 0.05)', // 中等毛玻璃
  glassAccent: 'rgba(0, 212, 255, 0.1)',   // 強調毛玻璃
  
  // 漸變系統
  gradients: {
    primary: ['#00D4FF', '#8B5CF6'],        // 主要漸變
    secondary: ['#FF006E', '#FF8500'],      // 次要漸變
    background: ['#0A0A0F', '#1A1A2E'],     // 背景漸變
    glass: ['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.05)'], // 毛玻璃漸變
    neon: ['#00D4FF', '#00FF88', '#FF006E'], // 霓虹漸變
  }
} as const;

// ============================================================================
// 毛玻璃效果系統
// ============================================================================

export const GlassEffects = {
  // 模糊強度
  blur: {
    light: 10,
    medium: 20,
    strong: 30,
    ultra: 50,
  },
  
  // 毛玻璃背景
  backgrounds: {
    primary: {
      backgroundColor: TechColors.glassDark,
      backdropFilter: 'blur(20px)',
    },
    secondary: {
      backgroundColor: TechColors.glassLight,
      backdropFilter: 'blur(15px)',
    },
    accent: {
      backgroundColor: TechColors.glassAccent,
      backdropFilter: 'blur(25px)',
    },
  },
  
  // 邊框效果
  borders: {
    neon: {
      borderWidth: 1,
      borderColor: TechColors.neonBlue,
      shadowColor: TechColors.neonBlue,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 10,
      elevation: 10,
    },
    glass: {
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 12,
      elevation: 8,
    },
  }
} as const;

// ============================================================================
// 科技感主題配色
// ============================================================================

export const TechTheme: ThemeColors = {
  primary: TechColors.neonBlue,
  secondary: TechColors.neonPurple,
  background: TechColors.darkSpace,
  surface: TechColors.glassDark,
  text: '#FFFFFF',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  accent: TechColors.neonGreen,
  success: TechColors.neonGreen,
  warning: TechColors.neonOrange,
  error: TechColors.neonPink,
  overlay: 'rgba(10, 10, 15, 0.9)',
  border: 'rgba(255, 255, 255, 0.2)',
};

// 傳統日本色彩（保留原有的）
export const JapaneseColors = {
  ai: '#1E40AF',
  sakura: '#FFB7C5',
  matcha: '#87A96B',
  yuhi: '#FF6B35',
  sumi: '#1C1C1C',
  shiro: '#FFFFFF',
  beni: '#D2001F',
  kon: '#223A70',
  yamabuki: '#F8B500',
  mizu: '#86C8BC',
  murasaki: '#884898',
  kinari: '#FFEAA7',
  
  haru: {
    primary: '#FFB7C5',
    secondary: '#98FB98',
    tertiary: '#87CEEB',
    accent: '#F8B500',
  },
  natsu: {
    primary: '#00CED1',
    secondary: '#98FB98',
    tertiary: '#FFD700',
    accent: '#FF6B35',
  },
  aki: {
    primary: '#FF6B35',
    secondary: '#DAA520',
    tertiary: '#CD853F',
    accent: '#D2001F',
  },
  fuyu: {
    primary: '#B0C4DE',
    secondary: '#E6E6FA',
    tertiary: '#F0F8FF',
    accent: '#223A70',
  },
  
  gradients: {
    sakura: ['#FFB7C5', '#FFF0F5'],
    sunset: ['#FF6B35', '#F8B500'],
    ocean: ['#00CED1', '#86C8BC'],
    forest: ['#87A96B', '#98FB98'],
    winter: ['#B0C4DE', '#F0F8FF'],
  }
} as const;

// 使用科技主題作為默認主題
export const LightTheme: ThemeColors = TechTheme;

export const DarkTheme: ThemeColors = {
  ...TechTheme,
  background: TechColors.darkVoid,
  surface: TechColors.darkMatter,
};

// 季節性主題（科技風格）
export const SeasonalThemes = {
  spring: {
    ...TechTheme,
    accent: TechColors.neonGreen,
    secondary: TechColors.neonPink,
  },
  summer: {
    ...TechTheme,
    accent: TechColors.neonBlue,
    secondary: TechColors.neonGreen,
  },
  autumn: {
    ...TechTheme,
    accent: TechColors.neonOrange,
    secondary: TechColors.neonPink,
  },
  winter: {
    ...TechTheme,
    accent: TechColors.neonPurple,
    secondary: TechColors.neonBlue,
  },
} as const;

// ============================================================================
// 字體系統 - 科技感優化
// ============================================================================

export const Typography = {
  fonts: {
    japanese: {
      primary: 'NotoSansJP-Regular',
      fallback: 'System',
    },
    system: {
      primary: 'SF Pro Display',
      fallback: 'System',
    },
  },
  sizes: {
    ui: {
      hero: 48,
      title: 32,
      subtitle: 24,
      body: 16,
      caption: 12,
    },
    bubble: {
      hiragana: 36,
      katakana: 32,
      kanji: 40,
      romaji: 28,
    },
    game: {
      score: 20,
      timer: 18,
      combo: 16,
    },
  },
  weights: {
    light: '300' as const,
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
  lineHeights: {
    ui: 24,
    bubble: 44,
    game: 28,
  },
  letterSpacing: {
    ui: 0.5,
    bubble: 1,
    game: 0.25,
  },
};

// ============================================================================
// 間距系統 - 科技感優化
// ============================================================================

export const Spacing = {
  // 基礎間距 (8px 網格)
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  
  // 日式概念間距
  tatami: 12,  // 榻榻米間距
  ma: 20,      // 間 (日式空間概念)
  
  // 科技感間距
  nano: 2,
  micro: 6,
  circuit: 10,  // 電路板間距
  matrix: 14,   // 矩陣間距
} as const;

// ============================================================================
// 陰影系統 - 科技感
// ============================================================================

export const Shadows = {
  // 霓虹發光效果
  neon: {
    blue: {
      shadowColor: TechColors.neonBlue,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 15,
      elevation: 15,
    },
    purple: {
      shadowColor: TechColors.neonPurple,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 15,
      elevation: 15,
    },
    green: {
      shadowColor: TechColors.neonGreen,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 15,
      elevation: 15,
    },
  },
  
  // 毛玻璃陰影
  glass: {
    soft: {
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 12,
      elevation: 8,
    },
    medium: {
      shadowColor: 'rgba(0, 0, 0, 0.4)',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.4,
      shadowRadius: 20,
      elevation: 12,
    },
    strong: {
      shadowColor: 'rgba(0, 0, 0, 0.5)',
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.5,
      shadowRadius: 30,
      elevation: 16,
    },
  },
} as const;

// ============================================================================
// 動畫系統
// ============================================================================

export const Animations = {
  // 持續時間
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
    ultra: 800,
  },
  
  // 緩動函數
  easing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  
  // 霓虹閃爍動畫
  neonPulse: {
    duration: 2000,
    iterations: -1, // 無限循環
  },
  
  // 毛玻璃浮動動畫
  glassFloat: {
    duration: 3000,
    iterations: -1,
  },
} as const;

// ============================================================================
// 工具函數
// ============================================================================

export const getCurrentSeason = (): Season => {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return 'spring';
  if (month >= 6 && month <= 8) return 'summer';
  if (month >= 9 && month <= 11) return 'autumn';
  return 'winter';
};

export const getCurrentTimeOfDay = (): TimeOfDay => {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 18) return 'day';
  if (hour >= 18 && hour < 22) return 'evening';
  return 'night';
};

export const getSeasonalTheme = (season?: Season): ThemeColors => {
  const currentSeason = season || getCurrentSeason();
  return SeasonalThemes[currentSeason];
}; 