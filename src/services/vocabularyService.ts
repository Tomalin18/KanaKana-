import { supabase } from '@/lib/supabase';
import type { TetrisWord, DifficultyLevel, CombinedDifficultyLevel } from '@/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 快取鍵
const CACHE_KEY = 'vocabulary_cache';
const CACHE_EXPIRY_KEY = 'vocabulary_cache_expiry';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 小時

// 本地快取
let memoryCache: TetrisWord[] | null = null;

/**
 * 從 Supabase 獲取所有詞彙
 * Supabase client 會自動處理 REST API 請求
 */
export const fetchAllVocabulary = async (): Promise<TetrisWord[]> => {
  try {
    // 先檢查記憶體快取
    if (memoryCache) {
      return memoryCache;
    }

    // 檢查 AsyncStorage 快取
    try {
      const cachedData = await AsyncStorage.getItem(CACHE_KEY);
      const cacheExpiry = await AsyncStorage.getItem(CACHE_EXPIRY_KEY);
      
      if (cachedData && cacheExpiry) {
        const expiryTime = parseInt(cacheExpiry, 10);
        if (Date.now() < expiryTime) {
          const vocabulary = JSON.parse(cachedData);
          memoryCache = vocabulary;
          return vocabulary;
        }
      }
    } catch (cacheError) {
      console.log('Cache read error, will fetch from server:', cacheError);
    }

    // 從 Supabase 獲取資料 (使用 PostgREST API)
    // 注意：Supabase 預設限制為 1000 筆，需要分批載入
    console.log('Fetching vocabulary from Supabase...');
    
    // 先獲取總數
    const { count } = await supabase
      .from('vocabulary')
      .select('*', { count: 'exact', head: true });
    
    console.log(`Total vocabulary in database: ${count}`);
    
    // 分批載入所有資料
    const batchSize = 1000;
    const allData: any[] = [];
    
    for (let offset = 0; offset < (count || 0); offset += batchSize) {
      const { data: batch, error: batchError } = await supabase
        .from('vocabulary')
        .select('*')
        .order('id', { ascending: true })
        .range(offset, offset + batchSize - 1);
      
      if (batchError) {
        console.error(`Error fetching batch at offset ${offset}:`, batchError);
        break;
      }
      
      if (batch) {
        allData.push(...batch);
        console.log(`Loaded ${allData.length}/${count} vocabulary items...`);
      }
    }
    
    const data = allData;
    const error = allData.length === 0 ? new Error('No data loaded') : null;

    if (error) {
      console.error('Error fetching vocabulary:', error);
      // 如果有錯誤但有快取，返回快取
      const cachedData = await AsyncStorage.getItem(CACHE_KEY);
      if (cachedData) {
        return JSON.parse(cachedData);
      }
      throw error;
    }

    // 轉換資料格式 (從 snake_case 轉為 camelCase)
    const vocabulary: TetrisWord[] = data.map(item => ({
      id: item.id,
      word: item.word,
      kana: item.kana,
      meaning: item.meaning,
      chineseMeaning: item.chinese_meaning || undefined,
      difficulty: item.difficulty as DifficultyLevel,
      category: item.category,
      jlptLevel: item.jlpt_level as TetrisWord['jlptLevel'],
      kanji: item.kanji || undefined,
      isKanji: item.is_kanji || false,
      complexity: item.complexity || undefined,
    }));

    // 存入快取
    memoryCache = vocabulary;
    await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(vocabulary));
    await AsyncStorage.setItem(CACHE_EXPIRY_KEY, (Date.now() + CACHE_DURATION).toString());

    console.log(`Loaded ${vocabulary.length} vocabulary items from Supabase (Total in DB: ${count})`);
    return vocabulary;
  } catch (error) {
    console.error('Failed to fetch vocabulary:', error);
    // 返回空陣列作為 fallback
    return [];
  }
};

/**
 * 根據合併難度獲取隨機詞彙
 */
export const getRandomWordByCombinedDifficulty = async (difficulty: CombinedDifficultyLevel): Promise<TetrisWord | null> => {
  try {
    const allVocabulary = await fetchAllVocabulary();
    
    if (allVocabulary.length === 0) {
      return null;
    }

    let wordPool: TetrisWord[] = [];
    
    // 映射 CombinedDifficultyLevel 到 DifficultyLevel
    let mappedDifficulty: DifficultyLevel;
    switch (difficulty) {
      case 'elementary':
        mappedDifficulty = 'beginner';
        break;
      case 'intermediate':
        mappedDifficulty = 'normal';
        break;
      case 'advanced':
        mappedDifficulty = 'hard';
        break;
      default:
        mappedDifficulty = 'normal';
    }
    
    // 根據難度等級選擇詞彙池
    switch (mappedDifficulty) {
      case 'beginner':
        // 初級：只包含初級詞彙
        wordPool = allVocabulary.filter(w => w.difficulty === 'beginner');
        break;
      case 'normal':
        // 中級：包含初級、中級詞彙 + N3詞彙
        wordPool = allVocabulary.filter(w => 
          w.difficulty === 'beginner' || 
          w.difficulty === 'normal' ||
          w.jlptLevel === 'n3'
        );
        break;
      case 'hard':
        // 高級：增加N1和N2詞彙的比例
        const hardWords = allVocabulary.filter(w => 
          w.difficulty === 'hard' || 
          w.difficulty === 'expert' ||
          w.jlptLevel === 'n1' ||
          w.jlptLevel === 'n2'
        );
        
        // 為了增加N1和N2詞彙的權重
        const n2Words = allVocabulary.filter(w => w.jlptLevel === 'n2');
        const n1Words = allVocabulary.filter(w => w.jlptLevel === 'n1');
        
        wordPool = [
          ...hardWords,
          ...n2Words, ...n2Words, // N2詞彙 2倍權重
          ...n1Words, ...n1Words, ...n1Words // N1詞彙 3倍權重
        ];
        break;
      default:
        wordPool = allVocabulary;
    }
    
    if (wordPool.length === 0) {
      wordPool = allVocabulary;
    }
    
    const randomIndex = Math.floor(Math.random() * wordPool.length);
    return wordPool[randomIndex];
  } catch (error) {
    console.error('Error getting random word:', error);
    return null;
  }
};

/**
 * 根據 JLPT 等級獲取詞彙
 */
export const getVocabularyByJLPT = async (jlptLevel: 'n1' | 'n2' | 'n3' | 'n4' | 'n5'): Promise<TetrisWord[]> => {
  try {
    const allVocabulary = await fetchAllVocabulary();
    return allVocabulary.filter(word => word.jlptLevel === jlptLevel);
  } catch (error) {
    console.error('Error getting vocabulary by JLPT:', error);
    return [];
  }
};

/**
 * 清除快取
 */
export const clearVocabularyCache = async () => {
  try {
    memoryCache = null;
    await AsyncStorage.removeItem(CACHE_KEY);
    await AsyncStorage.removeItem(CACHE_EXPIRY_KEY);
    console.log('Vocabulary cache cleared');
  } catch (error) {
    console.error('Error clearing cache:', error);
  }
};

/**
 * 預載詞彙資料
 */
export const preloadVocabulary = async () => {
  try {
    await fetchAllVocabulary();
    console.log('Vocabulary preloaded');
  } catch (error) {
    console.error('Error preloading vocabulary:', error);
  }
};

/**
 * 獲取所有詞彙（同步版本，需要先預載）
 */
export const getAllVocabulary = (): TetrisWord[] => {
  if (!memoryCache) {
    console.warn('Vocabulary not loaded, returning empty array');
    return [];
  }
  return memoryCache;
};

/**
 * 獲取詞彙統計數據
 * 返回各難度等級的詞彙數量
 */
export const getVocabularyStatistics = async (): Promise<{
  elementary: number;
  intermediate: number;
  advanced: number;
  byDifficulty: {
    beginner: number;
    normal: number;
    hard: number;
    expert: number;
    kanji: number;
  };
  byJlpt: {
    n5: number;
    n4: number;
    n3: number;
    n2: number;
    n1: number;
  };
  total: number;
}> => {
  try {
    const allVocabulary = await fetchAllVocabulary();
    
    // 按 difficulty 統計
    const byDifficulty = {
      beginner: 0,
      normal: 0,
      hard: 0,
      expert: 0,
      kanji: 0,
    };
    
    // 按 JLPT 統計
    const byJlpt = {
      n5: 0,
      n4: 0,
      n3: 0,
      n2: 0,
      n1: 0,
    };
    
    // 統計各項數據
    allVocabulary.forEach(word => {
      // 統計 difficulty
      if (word.difficulty in byDifficulty) {
        byDifficulty[word.difficulty as keyof typeof byDifficulty]++;
      }
      
      // 統計 JLPT
      if (word.jlptLevel && word.jlptLevel in byJlpt) {
        byJlpt[word.jlptLevel as keyof typeof byJlpt]++;
      }
    });
    
    // 計算組合難度的詞彙數量
    // elementary: 初級（beginner）
    const elementary = byDifficulty.beginner;
    
    // intermediate: 初級 + 中級 + N3
    const intermediate = byDifficulty.beginner + byDifficulty.normal + byJlpt.n3;
    
    // advanced: 所有詞彙
    const advanced = allVocabulary.length;
    
    return {
      elementary,
      intermediate,
      advanced,
      byDifficulty,
      byJlpt,
      total: allVocabulary.length,
    };
  } catch (error) {
    console.error('Error getting vocabulary statistics:', error);
    // 返回預設值
    return {
      elementary: 0,
      intermediate: 0,
      advanced: 0,
      byDifficulty: {
        beginner: 0,
        normal: 0,
        hard: 0,
        expert: 0,
        kanji: 0,
      },
      byJlpt: {
        n5: 0,
        n4: 0,
        n3: 0,
        n2: 0,
        n1: 0,
      },
      total: 0,
    };
  }
};