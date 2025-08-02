import type { DifficultyLevel } from '../types';

/**
 * 俄羅斯方塊模式單字數據
 * 
 * 使用從 vocabulary.csv 轉換的豐富詞彙數據
 * 總單字數: 7,658 個
 */

export interface TetrisWord {
  word: string;
  kana: string;
  meaning: string;
  difficulty: DifficultyLevel;
  category: string;
  kanji?: string; // 漢字版本（可選）
  isKanji?: boolean; // 是否為漢字方塊
}

// 導入轉換後的詞彙數據
import {
  BEGINNER_WORDS as VOCAB_BEGINNER,
  NORMAL_WORDS as VOCAB_NORMAL,
  HARD_WORDS as VOCAB_HARD,
  EXPERT_WORDS as VOCAB_EXPERT,
  KANJI_WORDS as VOCAB_KANJI,
  HIRAGANA_WORDS as VOCAB_HIRAGANA,
  getWordsByDifficulty as getVocabWordsByDifficulty,
  getRandomWordImproved as getVocabRandomWord,
  getWordByLength as getVocabWordByLength,
  getWordByLevelAndLength as getVocabWordByLevelAndLength,
  getWordsByType as getVocabWordsByType
} from './vocabulary-final/index 2';

// 為了向後兼容，保留舊的導出名稱
export const BEGINNER_WORDS = VOCAB_BEGINNER;
export const INTERMEDIATE_WORDS = VOCAB_NORMAL;
export const ADVANCED_WORDS = VOCAB_HARD;
export const KANJI_2_WORDS = VOCAB_KANJI;
export const KANJI_3_WORDS = VOCAB_KANJI;

/**
 * 根據難度獲取單字
 * 使用轉換後的豐富詞彙數據
 */
export const getWordsByDifficulty = (difficulty: DifficultyLevel): TetrisWord[] => {
  return getVocabWordsByDifficulty(difficulty);
};

/**
 * 根據單字類型過濾
 * 使用轉換後的詞彙數據功能
 */
export const getWordsByType = (words: TetrisWord[], wordType: 'hiragana' | 'katakana' | 'mixed'): TetrisWord[] => {
  return getVocabWordsByType(words, wordType);
};

// 改進的隨機選擇函數，避免重複
let recentWords: string[] = [];
const MAX_RECENT_WORDS = 20; // 記住最近20個單字，避免重複

export const getRandomWordImproved = (
  difficulty: DifficultyLevel, 
  wordType: 'hiragana' | 'katakana' | 'mixed' = 'mixed'
): TetrisWord => {
  return getVocabRandomWord(difficulty, wordType);
};

/**
 * 根據字數獲取合適的單字（用於不同方塊形狀）
 */
export const getWordByLength = (
  targetLength: number, 
  difficulty: DifficultyLevel, 
  wordType: 'hiragana' | 'katakana' | 'mixed' = 'mixed'
): TetrisWord => {
  return getVocabWordByLength(targetLength, difficulty, wordType);
};

/**
 * 獲取所有可用的單字類別
 * 使用轉換後的詞彙數據
 */
export const getAllCategories = (): string[] => {
  const allWords = getVocabWordsByDifficulty('expert'); // 獲取所有難度的單字
  const categoriesSet = new Set(allWords.map(word => word.category));
  const categories = Array.from(categoriesSet);
  return categories.sort();
};

/**
 * 根據類別獲取單字
 * 使用轉換後的詞彙數據
 */
export const getWordsByCategory = (category: string, difficulty?: DifficultyLevel): TetrisWord[] => {
  let words: TetrisWord[];
  
  if (difficulty) {
    words = getWordsByDifficulty(difficulty);
  } else {
    words = getVocabWordsByDifficulty('expert'); // 獲取所有難度的單字
  }
  
  return words.filter(word => word.category === category);
};

/**
 * 根據等級和方塊大小獲取合適的單字（改進版本，避免重複）
 */
export const getWordByLevelAndLength = (
  targetLength: number,
  level: number,
  difficulty: DifficultyLevel,
  wordType: 'hiragana' | 'katakana' | 'mixed' = 'mixed'
): TetrisWord => {
  return getVocabWordByLevelAndLength(targetLength, level, difficulty, wordType);
}; 