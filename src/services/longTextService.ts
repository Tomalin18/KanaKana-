import { supabase } from '@/lib/supabase';
import type { LongTextContent, DifficultyLevel } from '@/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 快取鍵
const CACHE_KEY = 'long_text_cache';
const CACHE_EXPIRY_KEY = 'long_text_cache_expiry';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 小時

// 本地快取
let memoryCache: LongTextContent[] | null = null;

/**
 * 從 Supabase 獲取所有長文
 */
export const fetchAllLongTexts = async (): Promise<LongTextContent[]> => {
  try {
    // 先檢查記憶體快取
    if (memoryCache) {
      return memoryCache;
    }

    // 檢查 AsyncStorage 快取
    const cachedData = await AsyncStorage.getItem(CACHE_KEY);
    const cacheExpiry = await AsyncStorage.getItem(CACHE_EXPIRY_KEY);
    
    if (cachedData && cacheExpiry) {
      const expiryTime = parseInt(cacheExpiry, 10);
      if (Date.now() < expiryTime) {
        const longTexts = JSON.parse(cachedData);
        memoryCache = longTexts;
        return longTexts;
      }
    }

    // 從 Supabase 獲取資料
    console.log('Fetching long texts from Supabase...');
    const { data, error } = await supabase
      .from('long_texts')
      .select('*')
      .order('difficulty', { ascending: true });

    if (error) {
      console.error('Error fetching long texts:', error);
      // 如果有錯誤但有快取，返回快取
      if (cachedData) {
        return JSON.parse(cachedData);
      }
      throw error;
    }

    // 轉換資料格式
    const longTexts: LongTextContent[] = data.map(item => ({
      id: item.id,
      title: item.title,
      content: item.content,
      displayContent: item.display_content || item.content,
      inputContent: item.input_content || item.content,
      difficulty: item.difficulty as DifficultyLevel,
      category: item.category as LongTextContent['category'],
      estimatedTime: item.estimated_time,
      vocabulary: item.vocabulary_list || [],
    }));

    // 存入快取
    memoryCache = longTexts;
    await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(longTexts));
    await AsyncStorage.setItem(CACHE_EXPIRY_KEY, (Date.now() + CACHE_DURATION).toString());

    console.log(`Loaded ${longTexts.length} long texts from Supabase`);
    return longTexts;
  } catch (error) {
    console.error('Failed to fetch long texts:', error);
    return [];
  }
};

/**
 * 根據難度獲取長文
 */
export const getLongTextsByDifficulty = async (difficulty: DifficultyLevel): Promise<LongTextContent[]> => {
  try {
    const allTexts = await fetchAllLongTexts();
    return allTexts.filter(text => text.difficulty === difficulty);
  } catch (error) {
    console.error('Error getting long texts by difficulty:', error);
    return [];
  }
};

/**
 * 獲取隨機長文
 */
export const getRandomLongText = async (difficulty?: DifficultyLevel): Promise<LongTextContent | null> => {
  try {
    const allTexts = await fetchAllLongTexts();
    const filteredTexts = difficulty 
      ? allTexts.filter(text => text.difficulty === difficulty)
      : allTexts;
    
    if (filteredTexts.length === 0) {
      return null;
    }
    
    const randomIndex = Math.floor(Math.random() * filteredTexts.length);
    return filteredTexts[randomIndex];
  } catch (error) {
    console.error('Error getting random long text:', error);
    return null;
  }
};

/**
 * 清除快取
 */
export const clearLongTextCache = async () => {
  try {
    memoryCache = null;
    await AsyncStorage.removeItem(CACHE_KEY);
    await AsyncStorage.removeItem(CACHE_EXPIRY_KEY);
    console.log('Long text cache cleared');
  } catch (error) {
    console.error('Error clearing cache:', error);
  }
};

/**
 * 預載長文資料
 */
export const preloadLongTexts = async () => {
  try {
    await fetchAllLongTexts();
    console.log('Long texts preloaded');
  } catch (error) {
    console.error('Error preloading long texts:', error);
  }
};

/**
 * 獲取所有長文（同步版本，需要先預載）
 */
export const getAllLongTexts = (): LongTextContent[] => {
  if (!memoryCache) {
    console.warn('Long texts not loaded, returning empty array');
    return [];
  }
  return memoryCache;
};