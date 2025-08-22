import type { DifficultyLevel, CombinedDifficultyLevel, TetrisWord } from '../types';

/**
 * 俄羅斯方塊模式單字數據
 * 
 * 重新設計：直接從完整題庫中隨機取得題目
 * 總單字數: 15,234 個
 */

// 從 types 重新匯出 TetrisWord
export type { TetrisWord } from '../types';

// 導入完整的詞彙系統（從資料庫版本）
import { allVocabulary } from './vocabulary-final/database';

// 避免重複的隨機選擇
let recentWords: string[] = [];
const MAX_RECENT_WORDS = 50;

/**
 * 從完整題庫中隨機取得題目
 * 這是 Tetris mode 的主要詞彙選擇函數
 */
export const getRandomWordFromAllVocabulary = (
  wordType: 'hiragana' | 'katakana' | 'mixed' = 'mixed'
): TetrisWord => {
  // 根據詞彙類型過濾
  let availableWords = allVocabulary;
  
  if (wordType === 'hiragana') {
    // 只包含平假名詞彙（非漢字）
    availableWords = allVocabulary.filter(word => word.isKanji !== true);
  } else if (wordType === 'katakana') {
    // 包含片假名詞彙
    availableWords = allVocabulary.filter(word => {
      for (let i = 0; i < word.kana.length; i++) {
        const char = word.kana.charCodeAt(i);
        if (char >= 0x30A1 && char <= 0x30F6) {
          return true;
        }
      }
      return false;
    });
  }
  
  // 過濾掉最近使用過的詞彙
  const nonRecentWords = availableWords.filter(word => 
    !recentWords.includes(word.word)
  );
  
  // 如果可用詞彙不足，重置最近使用列表
  if (nonRecentWords.length < 10) {
    recentWords = [];
    console.log('🔄 重置 recentWords 列表，可用詞彙不足');
  }
  
  // 選擇詞彙池
  const wordsToChoose = nonRecentWords.length > 0 ? nonRecentWords : availableWords;
  const randomIndex = Math.floor(Math.random() * wordsToChoose.length);
  const selectedWord = wordsToChoose[randomIndex];
  
  // 更新最近使用詞彙列表
  recentWords.push(selectedWord.word);
  if (recentWords.length > MAX_RECENT_WORDS) {
    recentWords.shift();
  }
  
  console.log(`🎲 從完整題庫選擇: ${selectedWord.word} (${selectedWord.kana}) - ${selectedWord.meaning}`);
  
  return selectedWord;
};

/**
 * 根據字數從完整題庫中取得題目
 * 用於不同方塊形狀
 */
export const getWordByLength = (
  targetLength: number, 
  difficulty: DifficultyLevel | CombinedDifficultyLevel, 
  wordType: 'hiragana' | 'katakana' | 'mixed' = 'mixed'
): TetrisWord => {
  // 從完整題庫中過濾符合長度的詞彙
  let availableWords = allVocabulary.filter(word => word.kana.length === targetLength);
  
  // 根據詞彙類型過濾
  if (wordType === 'hiragana') {
    availableWords = availableWords.filter(word => word.isKanji !== true);
  } else if (wordType === 'katakana') {
    availableWords = availableWords.filter(word => {
      for (let i = 0; i < word.kana.length; i++) {
        const char = word.kana.charCodeAt(i);
        if (char >= 0x30A1 && char <= 0x30F6) {
          return true;
        }
      }
      return false;
    });
  }
  
  if (availableWords.length > 0) {
    // 過濾掉最近使用過的詞彙
    const nonRecentWords = availableWords.filter(word => 
      !recentWords.includes(word.word)
    );
    
    // 如果可用詞彙不足，重置最近使用列表
    if (nonRecentWords.length < 3) {
      recentWords = [];
      console.log('🔄 重置 recentWords 列表，可用詞彙不足');
    }
    
    // 選擇詞彙池
    const wordsToChoose = nonRecentWords.length > 0 ? nonRecentWords : availableWords;
    const randomIndex = Math.floor(Math.random() * wordsToChoose.length);
    const selectedWord = wordsToChoose[randomIndex];
    
    // 更新最近使用詞彙列表
    recentWords.push(selectedWord.word);
    if (recentWords.length > MAX_RECENT_WORDS) {
      recentWords.shift();
    }
    
    console.log(`📝 長度 ${targetLength} 選擇: ${selectedWord.word} (${selectedWord.kana}) - ${selectedWord.meaning}`);
    
    return selectedWord;
  }
  
  // 如果沒有找到符合長度的詞彙，使用隨機詞彙
  console.log(`⚠️ 沒有找到長度 ${targetLength} 的詞彙，使用隨機詞彙`);
  return getRandomWordFromAllVocabulary(wordType);
};

/**
 * 根據等級和方塊大小取得題目
 * 用於不同遊戲等級
 */
export const getWordByLevelAndLength = (
  targetLength: number,
  level: number,
  difficulty: DifficultyLevel | CombinedDifficultyLevel,
  wordType: 'hiragana' | 'katakana' | 'mixed' = 'mixed'
): TetrisWord => {
  // 從完整題庫中過濾符合長度的詞彙
  let availableWords = allVocabulary.filter(word => word.kana.length === targetLength);
  
  // 根據等級決定是否包含漢字詞彙
  if (level >= 5) {
    // 等級5以上時，增加漢字詞彙的比例
    const kanjiWords = allVocabulary.filter(word => 
      word.isKanji && word.kana.length === targetLength
    );
    availableWords = [...availableWords, ...kanjiWords];
  }
  
  // 根據詞彙類型過濾
  if (wordType === 'hiragana') {
    availableWords = availableWords.filter(word => word.isKanji !== true);
  } else if (wordType === 'katakana') {
    availableWords = availableWords.filter(word => {
      for (let i = 0; i < word.kana.length; i++) {
        const char = word.kana.charCodeAt(i);
        if (char >= 0x30A1 && char <= 0x30F6) {
          return true;
        }
      }
      return false;
    });
  }
  
  if (availableWords.length > 0) {
    // 過濾掉最近使用過的詞彙
    const nonRecentWords = availableWords.filter(word => 
      !recentWords.includes(word.word)
    );
    
    // 如果可用詞彙不足，重置最近使用列表
    if (nonRecentWords.length < 3) {
      recentWords = [];
      console.log('🔄 重置 recentWords 列表，可用詞彙不足');
    }
    
    // 選擇詞彙池
    const wordsToChoose = nonRecentWords.length > 0 ? nonRecentWords : availableWords;
    const randomIndex = Math.floor(Math.random() * wordsToChoose.length);
    const selectedWord = wordsToChoose[randomIndex];
    
    // 更新最近使用詞彙列表
    recentWords.push(selectedWord.word);
    if (recentWords.length > MAX_RECENT_WORDS) {
      recentWords.shift();
    }
    
    console.log(`🎮 等級 ${level} 長度 ${targetLength} 選擇: ${selectedWord.word} (${selectedWord.kana}) - ${selectedWord.meaning}`);
    
    return selectedWord;
  }
  
  // 如果沒有找到符合條件的詞彙，使用隨機詞彙
  console.log(`⚠️ 沒有找到等級 ${level} 長度 ${targetLength} 的詞彙，使用隨機詞彙`);
  return getRandomWordFromAllVocabulary(wordType);
};

/**
 * 改進的隨機選擇函數（向後兼容）
 */
export const getRandomWordImproved = (
  difficulty: DifficultyLevel | CombinedDifficultyLevel, 
  wordType: 'hiragana' | 'katakana' | 'mixed' = 'mixed'
): TetrisWord => {
  return getRandomWordFromAllVocabulary(wordType);
};

/**
 * 根據難度獲取單字（向後兼容）
 */
export const getWordsByDifficulty = (difficulty: DifficultyLevel | CombinedDifficultyLevel): TetrisWord[] => {
  // 直接返回完整題庫，讓調用方自己過濾
  return allVocabulary;
};

/**
 * 根據單字類型過濾（向後兼容）
 */
export const getWordsByType = (words: TetrisWord[], wordType: 'hiragana' | 'katakana' | 'mixed'): TetrisWord[] => {
  if (!words || !Array.isArray(words)) {
    return [];
  }
  
  switch (wordType) {
    case 'hiragana':
      return words.filter(word => word.isKanji !== true);
    case 'katakana':
      return words.filter(word => {
        for (let i = 0; i < word.kana.length; i++) {
          const char = word.kana.charCodeAt(i);
          if (char >= 0x30A1 && char <= 0x30F6) {
            return true;
          }
        }
        return false;
      });
    case 'mixed':
    default:
      return words;
  }
};

/**
 * 獲取所有可用的單字類別（向後兼容）
 */
export const getAllCategories = (): string[] => {
  const categoriesSet = new Set(
    allVocabulary
      .map(word => word.category)
      .filter((category): category is string => category !== undefined)
  );
  const categories = Array.from(categoriesSet);
  return categories.sort();
};

/**
 * 根據類別獲取單字（向後兼容）
 */
export const getWordsByCategory = (category: string, difficulty?: DifficultyLevel | CombinedDifficultyLevel): TetrisWord[] => {
  return allVocabulary.filter(word => word.category === category);
};

// 為了向後兼容，保留舊的導出名稱
export const BEGINNER_WORDS = allVocabulary.filter(word => word.difficulty === 'beginner');
export const INTERMEDIATE_WORDS = allVocabulary.filter(word => word.difficulty === 'normal');
export const ADVANCED_WORDS = allVocabulary.filter(word => word.difficulty === 'hard');
export const KANJI_2_WORDS = allVocabulary.filter(word => word.isKanji);
export const KANJI_3_WORDS = allVocabulary.filter(word => word.isKanji); 