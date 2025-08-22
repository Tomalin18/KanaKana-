import { supabase } from '@/lib/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface BossQuestion {
  content: string;           // 題目原文/說明
  displayContent: string;    // 顯示在卡片上的內容（漢字混假名）
  inputContent: string;      // 用戶要輸入的正確答案（純假名）
  timeLimit: number;         // 秒數
}

// 快取鍵
const CACHE_KEY = 'boss_questions_cache';
const CACHE_EXPIRY_KEY = 'boss_questions_cache_expiry';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 小時

// 本地快取
let memoryCache: BossQuestion[] | null = null;

/**
 * 從 Supabase 獲取所有 Boss 題目
 */
export const fetchAllBossQuestions = async (): Promise<BossQuestion[]> => {
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
        const questions = JSON.parse(cachedData);
        memoryCache = questions;
        return questions;
      }
    }

    // 從 Supabase 獲取資料
    console.log('Fetching boss questions from Supabase...');
    const { data, error } = await supabase
      .from('boss_questions')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error) {
      console.error('Error fetching boss questions:', error);
      // 如果有錯誤但有快取，返回快取
      if (cachedData) {
        return JSON.parse(cachedData);
      }
      throw error;
    }

    // 轉換資料格式
    const questions: BossQuestion[] = data.map(item => ({
      content: item.content,
      displayContent: item.display_content,
      inputContent: item.input_content,
      timeLimit: item.time_limit,
    }));

    // 存入快取
    memoryCache = questions;
    await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(questions));
    await AsyncStorage.setItem(CACHE_EXPIRY_KEY, (Date.now() + CACHE_DURATION).toString());

    console.log(`Loaded ${questions.length} boss questions from Supabase`);
    return questions;
  } catch (error) {
    console.error('Failed to fetch boss questions:', error);
    return [];
  }
};

/**
 * 獲取隨機 Boss 題目
 */
export const getRandomBossQuestion = async (): Promise<BossQuestion | null> => {
  try {
    const allQuestions = await fetchAllBossQuestions();
    
    if (allQuestions.length === 0) {
      return null;
    }
    
    const randomIndex = Math.floor(Math.random() * allQuestions.length);
    return allQuestions[randomIndex];
  } catch (error) {
    console.error('Error getting random boss question:', error);
    return null;
  }
};

/**
 * 清除快取
 */
export const clearBossQuestionCache = async () => {
  try {
    memoryCache = null;
    await AsyncStorage.removeItem(CACHE_KEY);
    await AsyncStorage.removeItem(CACHE_EXPIRY_KEY);
    console.log('Boss question cache cleared');
  } catch (error) {
    console.error('Error clearing cache:', error);
  }
};

/**
 * 預載 Boss 題目資料
 */
export const preloadBossQuestions = async () => {
  try {
    await fetchAllBossQuestions();
    console.log('Boss questions preloaded');
  } catch (error) {
    console.error('Error preloading boss questions:', error);
  }
};

/**
 * 獲取所有 Boss 題目（同步版本，需要先預載）
 */
export const getAllBossQuestions = (): BossQuestion[] => {
  if (!memoryCache) {
    console.warn('Boss questions not loaded, returning empty array');
    return [];
  }
  return memoryCache;
};