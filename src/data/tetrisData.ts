import type { DifficultyLevel } from '../types';

/**
 * 俄羅斯方塊模式單字數據
 * 
 * 使用完整的詞彙系統
 * 總單字數: 7,658 個
 */

export interface TetrisWord {
  word: string;
  kana: string;
  meaning: string;
  chineseMeaning?: string;
  difficulty: DifficultyLevel;
  category: string;
  kanji?: string;
  isKanji?: boolean;
}

// 導入完整的詞彙系統
import {
  getWordsByDifficulty,
  getRandomWordImproved,
  getWordByLength,
  getWordByLevelAndLength,
  getWordsByType,
  getAllCategories,
  getWordsByCategory,
  BEGINNER_WORDS,
  NORMAL_WORDS,
  HARD_WORDS,
  EXPERT_WORDS,
  HIRAGANA_WORDS,
  KANJI_WORDS
} from './vocabulary-final/index 2';

// 為了向後兼容，保留舊的導出名稱
export { BEGINNER_WORDS, NORMAL_WORDS as INTERMEDIATE_WORDS, HARD_WORDS as ADVANCED_WORDS, KANJI_WORDS as KANJI_2_WORDS, KANJI_WORDS as KANJI_3_WORDS };

// 重新導出所有函數
export {
  getWordsByDifficulty,
  getRandomWordImproved,
  getWordByLength,
  getWordByLevelAndLength,
  getWordsByType,
  getAllCategories,
  getWordsByCategory
};
