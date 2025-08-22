import { supabase } from '@/lib/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 快取鍵
const CACHE_KEY_PREFIX = 'config_cache_';
const CACHE_EXPIRY_PREFIX = 'config_expiry_';
const CACHE_DURATION = 60 * 60 * 1000; // 1 小時

// 本地快取
const memoryCache = new Map<string, any>();

/**
 * 系統配置服務
 * 用於管理遊戲設定、功能開關等配置
 */

// 配置類型定義
export interface DifficultySettings {
  id: string;
  name: string;
  lives: number;
  timeMultiplier: number;
  pointsMultiplier: number;
  vocabularyLevel: string;
}

export interface ScoringRules {
  BASE_POINTS_PER_CHARACTER: number;
  COMBO_MULTIPLIER: number;
  PERFECT_ACCURACY_BONUS: number;
  SPEED_BONUS_THRESHOLD: number;
  SPEED_BONUS_MULTIPLIER: number;
  LIFE_BONUS: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  points: number;
}

export interface GameSettings {
  MAX_LIVES: number;
  DEFAULT_LIVES: number;
  MIN_LIVES: number;
  WORD_DISPLAY_TIME: number;
  COMBO_RESET_DELAY: number;
  GAME_OVER_DELAY: number;
  AUTO_SAVE_INTERVAL: number;
}

export interface FeatureFlags {
  KANJI_MODE: boolean;
  LONG_TEXT_MODE: boolean;
  TETRIS_MODE: boolean;
  BETA_FEATURES: boolean;
  ADVANCED_ANALYTICS: boolean;
  MULTIPLAYER: boolean;
}

/**
 * 從 Supabase 獲取配置
 */
export const fetchConfig = async <T>(key: string): Promise<T | null> => {
  try {
    // 先檢查記憶體快取
    if (memoryCache.has(key)) {
      return memoryCache.get(key) as T;
    }

    // 檢查 AsyncStorage 快取
    const cacheKey = CACHE_KEY_PREFIX + key;
    const expiryKey = CACHE_EXPIRY_PREFIX + key;
    
    try {
      const cachedData = await AsyncStorage.getItem(cacheKey);
      const cacheExpiry = await AsyncStorage.getItem(expiryKey);
      
      if (cachedData && cacheExpiry) {
        const expiryTime = parseInt(cacheExpiry, 10);
        if (Date.now() < expiryTime) {
          const config = JSON.parse(cachedData);
          memoryCache.set(key, config);
          return config as T;
        }
      }
    } catch (cacheError) {
      console.log('Cache read error, will fetch from server:', cacheError);
    }

    // 從 Supabase 獲取資料
    console.log(`Fetching config ${key} from Supabase...`);
    
    const { data, error } = await supabase
      .from('system_configs')
      .select('value')
      .eq('key', key)
      .single();

    if (error) {
      console.error(`Error fetching config ${key}:`, error);
      // 如果有錯誤但有快取，返回快取
      const cachedData = await AsyncStorage.getItem(cacheKey);
      if (cachedData) {
        return JSON.parse(cachedData) as T;
      }
      return null;
    }

    const config = data?.value as T;

    // 存入快取
    if (config) {
      memoryCache.set(key, config);
      await AsyncStorage.setItem(cacheKey, JSON.stringify(config));
      await AsyncStorage.setItem(expiryKey, (Date.now() + CACHE_DURATION).toString());
    }

    return config;
  } catch (error) {
    console.error(`Failed to fetch config ${key}:`, error);
    return null;
  }
};

/**
 * 獲取難度設定
 */
export const getDifficultySettings = async (): Promise<Record<string, DifficultySettings>> => {
  try {
    // 先檢查記憶體快取
    const cacheKey = 'difficulty_levels_all';
    if (memoryCache.has(cacheKey)) {
      return memoryCache.get(cacheKey) as Record<string, DifficultySettings>;
    }

    // 從 Supabase 獲取難度設定
    console.log('Fetching difficulty levels from Supabase...');
    
    const { data, error } = await supabase
      .from('difficulty_levels')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error) {
      console.error('Error fetching difficulty levels:', error);
      throw error;
    }

    // 轉換為物件格式
    const settings: Record<string, DifficultySettings> = {};
    
    if (data && data.length > 0) {
      data.forEach(level => {
        settings[level.id.toUpperCase()] = {
          id: level.id,
          name: level.name,
          lives: level.lives,
          timeMultiplier: level.time_multiplier,
          pointsMultiplier: level.points_multiplier,
          vocabularyLevel: level.vocabulary_level,
        };
      });
    } else {
      // 如果沒有資料，返回預設值
      return {
        BEGINNER: {
          id: 'beginner',
          name: '初心者',
          lives: 5,
          timeMultiplier: 1.5,
          pointsMultiplier: 0.8,
          vocabularyLevel: 'n5',
        },
        NORMAL: {
          id: 'normal',
          name: '通常',
          lives: 3,
          timeMultiplier: 1.0,
          pointsMultiplier: 1.0,
          vocabularyLevel: 'n4',
        },
        HARD: {
          id: 'hard',
          name: '困難',
          lives: 2,
          timeMultiplier: 0.8,
          pointsMultiplier: 1.2,
          vocabularyLevel: 'n3',
        },
        EXPERT: {
          id: 'expert',
          name: '達人',
          lives: 1,
          timeMultiplier: 0.6,
          pointsMultiplier: 1.5,
          vocabularyLevel: 'n2',
        },
      };
    }

    // 存入快取
    memoryCache.set(cacheKey, settings);
    
    return settings;
  } catch (error) {
    console.error('Failed to fetch difficulty settings:', error);
    // 返回預設值
    return {
      BEGINNER: {
        id: 'beginner',
        name: '初心者',
        lives: 5,
        timeMultiplier: 1.5,
        pointsMultiplier: 0.8,
        vocabularyLevel: 'n5',
      },
      NORMAL: {
        id: 'normal',
        name: '通常',
        lives: 3,
        timeMultiplier: 1.0,
        pointsMultiplier: 1.0,
        vocabularyLevel: 'n4',
      },
      HARD: {
        id: 'hard',
        name: '困難',
        lives: 2,
        timeMultiplier: 0.8,
        pointsMultiplier: 1.2,
        vocabularyLevel: 'n3',
      },
      EXPERT: {
        id: 'expert',
        name: '達人',
        lives: 1,
        timeMultiplier: 0.6,
        pointsMultiplier: 1.5,
        vocabularyLevel: 'n2',
      },
    };
  }
};

/**
 * 獲取計分規則
 */
export const getScoringRules = async (): Promise<ScoringRules> => {
  try {
    // 先檢查記憶體快取
    const cacheKey = 'scoring_rules_all';
    if (memoryCache.has(cacheKey)) {
      return memoryCache.get(cacheKey) as ScoringRules;
    }

    // 從 Supabase 獲取計分規則
    console.log('Fetching scoring rules from Supabase...');
    
    const { data, error } = await supabase
      .from('scoring_rules')
      .select('key, value');

    if (error) {
      console.error('Error fetching scoring rules:', error);
      throw error;
    }

    // 轉換為物件格式
    const rules: ScoringRules = {
      BASE_POINTS_PER_CHARACTER: 10,
      COMBO_MULTIPLIER: 0.1,
      PERFECT_ACCURACY_BONUS: 50,
      SPEED_BONUS_THRESHOLD: 60,
      SPEED_BONUS_MULTIPLIER: 0.2,
      LIFE_BONUS: 100,
    };

    if (data) {
      data.forEach(rule => {
        if (rule.key in rules) {
          (rules as any)[rule.key] = rule.value;
        }
      });
    }

    // 存入快取
    memoryCache.set(cacheKey, rules);
    
    return rules;
  } catch (error) {
    console.error('Failed to fetch scoring rules:', error);
    // 返回預設值
    return {
      BASE_POINTS_PER_CHARACTER: 10,
      COMBO_MULTIPLIER: 0.1,
      PERFECT_ACCURACY_BONUS: 50,
      SPEED_BONUS_THRESHOLD: 60,
      SPEED_BONUS_MULTIPLIER: 0.2,
      LIFE_BONUS: 100,
    };
  }
};

/**
 * 獲取成就列表
 */
export const getAchievements = async (): Promise<Record<string, Achievement>> => {
  try {
    // 先檢查記憶體快取
    const cacheKey = 'achievements_all';
    if (memoryCache.has(cacheKey)) {
      return memoryCache.get(cacheKey) as Record<string, Achievement>;
    }

    // 從 Supabase 獲取成就列表
    console.log('Fetching achievements from Supabase...');
    
    const { data, error } = await supabase
      .from('achievements')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error) {
      console.error('Error fetching achievements:', error);
      throw error;
    }

    // 轉換為物件格式
    const achievements: Record<string, Achievement> = {};
    
    if (data && data.length > 0) {
      data.forEach(achievement => {
        achievements[achievement.id.toUpperCase()] = {
          id: achievement.id,
          name: achievement.name,
          description: achievement.description,
          points: achievement.points,
        };
      });
    } else {
      // 如果沒有資料，返回預設值
      return {
        FIRST_WORD: {
          id: 'first_word',
          name: '初めの一歩',
          description: '第一個單詞輸入成功',
          points: 10,
        },
        COMBO_MASTER: {
          id: 'combo_master',
          name: 'コンボマスター',
          description: '達成50連擊',
          points: 100,
        },
        SPEED_DEMON: {
          id: 'speed_demon',
          name: '速度惡魔',
          description: '達成120 CPM',
          points: 200,
        },
        PERFECTIONIST: {
          id: 'perfectionist',
          name: '完璧主義者',
          description: '在一局遊戲中保持100%準確率',
          points: 150,
        },
        SURVIVOR: {
          id: 'survivor',
          name: '生存者',
          description: '在困難模式下生存10分鐘',
          points: 300,
        },
      };
    }

    // 存入快取
    memoryCache.set(cacheKey, achievements);
    
    return achievements;
  } catch (error) {
    console.error('Failed to fetch achievements:', error);
    // 返回預設值
    return {
      FIRST_WORD: {
        id: 'first_word',
        name: '初めの一歩',
        description: '第一個單詞輸入成功',
        points: 10,
      },
      COMBO_MASTER: {
        id: 'combo_master',
        name: 'コンボマスター',
        description: '達成50連擊',
        points: 100,
      },
      SPEED_DEMON: {
        id: 'speed_demon',
        name: '速度惡魔',
        description: '達成120 CPM',
        points: 200,
      },
      PERFECTIONIST: {
        id: 'perfectionist',
        name: '完璧主義者',
        description: '在一局遊戲中保持100%準確率',
        points: 150,
      },
      SURVIVOR: {
        id: 'survivor',
        name: '生存者',
        description: '在困難模式下生存10分鐘',
        points: 300,
      },
    };
  }
};

/**
 * 獲取遊戲設定
 */
export const getGameSettings = async (): Promise<GameSettings> => {
  const settings = await fetchConfig<GameSettings>('game_settings');
  
  if (!settings) {
    return {
      MAX_LIVES: 5,
      DEFAULT_LIVES: 3,
      MIN_LIVES: 1,
      WORD_DISPLAY_TIME: 5000,
      COMBO_RESET_DELAY: 1000,
      GAME_OVER_DELAY: 2000,
      AUTO_SAVE_INTERVAL: 30000,
    };
  }
  
  return settings;
};

/**
 * 獲取功能開關
 */
export const getFeatureFlags = async (): Promise<FeatureFlags> => {
  try {
    // 先檢查記憶體快取
    const cacheKey = 'feature_flags_all';
    if (memoryCache.has(cacheKey)) {
      return memoryCache.get(cacheKey) as FeatureFlags;
    }

    // 從 Supabase 獲取所有功能開關
    console.log('Fetching feature flags from Supabase...');
    
    const { data, error } = await supabase
      .from('feature_flags')
      .select('key, enabled');

    if (error) {
      console.error('Error fetching feature flags:', error);
      // 返回預設值
      return {
        KANJI_MODE: true,
        LONG_TEXT_MODE: false,
        TETRIS_MODE: true,
        BETA_FEATURES: false,
        ADVANCED_ANALYTICS: false,
        MULTIPLAYER: false,
      };
    }

    // 轉換為物件格式
    const flags: FeatureFlags = {
      KANJI_MODE: true,
      LONG_TEXT_MODE: false,
      TETRIS_MODE: true,
      BETA_FEATURES: false,
      ADVANCED_ANALYTICS: false,
      MULTIPLAYER: false,
    };

    if (data) {
      data.forEach(flag => {
        if (flag.key in flags) {
          (flags as any)[flag.key] = flag.enabled;
        }
      });
    }

    // 存入快取
    memoryCache.set(cacheKey, flags);
    
    return flags;
  } catch (error) {
    console.error('Failed to fetch feature flags:', error);
    // 返回預設值
    return {
      KANJI_MODE: true,
      LONG_TEXT_MODE: false,
      TETRIS_MODE: true,
      BETA_FEATURES: false,
      ADVANCED_ANALYTICS: false,
      MULTIPLAYER: false,
    };
  }
};

/**
 * 檢查功能是否啟用
 */
export const isFeatureEnabled = async (feature: keyof FeatureFlags): Promise<boolean> => {
  const flags = await getFeatureFlags();
  return flags[feature] ?? false;
};

/**
 * 清除配置快取
 */
export const clearConfigCache = async () => {
  try {
    memoryCache.clear();
    
    // 清除所有配置相關的 AsyncStorage 快取
    const keys = await AsyncStorage.getAllKeys();
    const configKeys = keys.filter(key => 
      key.startsWith(CACHE_KEY_PREFIX) || key.startsWith(CACHE_EXPIRY_PREFIX)
    );
    
    if (configKeys.length > 0) {
      await AsyncStorage.multiRemove(configKeys);
    }
    
    console.log('Config cache cleared');
  } catch (error) {
    console.error('Error clearing config cache:', error);
  }
};

/**
 * 預載所有配置
 */
export const preloadConfigs = async () => {
  try {
    await Promise.all([
      getDifficultySettings(),
      getScoringRules(),
      getAchievements(),
      getGameSettings(),
      getFeatureFlags(),
    ]);
    console.log('All configs preloaded');
  } catch (error) {
    console.error('Error preloading configs:', error);
  }
};