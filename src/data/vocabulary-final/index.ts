import type { DifficultyLevel } from '../../types';

/**
 * 詞彙數據主索引檔案 - 最終版本
 * 
 * 🔄 轉換時間: 2025-07-19T01:23:03.806Z
 * 📊 總單字數: 7658
 * 📝 分割檔案: 12 個
 */

export interface TetrisWord {
  word: string;
  kana: string;
  meaning: string;
  difficulty: DifficultyLevel;
  category: string;
  kanji?: string;
  isKanji?: boolean;
}

// 導入基本檔案
import { BEGINNER_WORDS } from './beginner';
import { NORMAL_WORDS } from './normal';
import { HARD_WORDS } from './hard';
import { EXPERT_WORDS } from './expert';
import { HIRAGANA_WORDS } from './hiragana';

// 導入漢字檔案
import { KANJI_WORDS_01 } from './kanji-01';
import { KANJI_WORDS_02 } from './kanji-02';
import { KANJI_WORDS_03 } from './kanji-03';
import { KANJI_WORDS_04 } from './kanji-04';
import { KANJI_WORDS_05 } from './kanji-05';
import { KANJI_WORDS_06 } from './kanji-06';
import { KANJI_WORDS_07 } from './kanji-07';

// 合併所有漢字
const KANJI_WORDS = [
  KANJI_WORDS_01, KANJI_WORDS_02, KANJI_WORDS_03, KANJI_WORDS_04, KANJI_WORDS_05, KANJI_WORDS_06, KANJI_WORDS_07
].flat();

// 合併所有詞彙為完整題庫
export const allVocabulary: TetrisWord[] = [
  ...BEGINNER_WORDS,
  ...NORMAL_WORDS,
  ...HARD_WORDS,
  ...EXPERT_WORDS,
  ...HIRAGANA_WORDS,
  ...KANJI_WORDS
];

// 重新導出所有數據
export {
  BEGINNER_WORDS,
  NORMAL_WORDS,
  HARD_WORDS,
  EXPERT_WORDS,
  HIRAGANA_WORDS,
  KANJI_WORDS
};

/**
 * 根據難度獲取單字
 */
export const getWordsByDifficulty = (difficulty: DifficultyLevel): TetrisWord[] => {
  switch (difficulty) {
    case 'beginner':
      return BEGINNER_WORDS;
    case 'normal':
      return [...BEGINNER_WORDS, ...NORMAL_WORDS];
    case 'hard':
      return [...BEGINNER_WORDS, ...NORMAL_WORDS, ...HARD_WORDS];
    case 'expert':
      return [...BEGINNER_WORDS, ...NORMAL_WORDS, ...HARD_WORDS, ...EXPERT_WORDS];
    default:
      return BEGINNER_WORDS.length > 0 ? BEGINNER_WORDS : EXPERT_WORDS;
  }
};

/**
 * 根據單字類型過濾
 */
export const getWordsByType = (words: TetrisWord[], wordType: 'hiragana' | 'katakana' | 'mixed'): TetrisWord[] => {
  switch (wordType) {
    case 'hiragana':
      return words.filter(word => !word.isKanji);
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

// 避免重複的隨機選擇
let recentWords: string[] = [];
const MAX_RECENT_WORDS = 50;

export const getRandomWordImproved = (
  difficulty: DifficultyLevel, 
  wordType: 'hiragana' | 'katakana' | 'mixed' = 'mixed'
): TetrisWord => {
  const allWords = getWordsByDifficulty(difficulty);
  const filteredWords = getWordsByType(allWords, wordType);
  
  if (filteredWords.length === 0) {
    return EXPERT_WORDS[0] || {
      word: 'あ', kana: 'あ', meaning: '預設', 
      difficulty: 'beginner', category: '一般'
    };
  }
  
  const availableWords = filteredWords.filter(word => 
    !recentWords.includes(word.word)
  );
  
  if (availableWords.length < 3) {
    recentWords = [];
  }
  
  const wordsToChoose = availableWords.length > 0 ? availableWords : filteredWords;
  const randomIndex = Math.floor(Math.random() * wordsToChoose.length);
  const selectedWord = wordsToChoose[randomIndex];
  
  recentWords.push(selectedWord.word);
  if (recentWords.length > MAX_RECENT_WORDS) {
    recentWords.shift();
  }
  
  return selectedWord;
};

export const getWordByLength = (
  targetLength: number, 
  difficulty: DifficultyLevel, 
  wordType: 'hiragana' | 'katakana' | 'mixed' = 'mixed'
): TetrisWord => {
  const words = getWordsByDifficulty(difficulty);
  const filteredWords = getWordsByType(words, wordType);
  const matchingWords = filteredWords.filter(word => word.kana.length === targetLength);
  
  if (matchingWords.length > 0) {
    const randomIndex = Math.floor(Math.random() * matchingWords.length);
    return matchingWords[randomIndex];
  }
  
  return getRandomWordImproved(difficulty, wordType);
};

export const getAllCategories = (): string[] => {
  const allWords = [...BEGINNER_WORDS, ...NORMAL_WORDS, ...HARD_WORDS, ...EXPERT_WORDS];
  const categories = new Set<string>();
  allWords.forEach(w => categories.add(w.category));
  return Array.from(categories).sort();
};

export const getWordsByCategory = (category: string, difficulty?: DifficultyLevel): TetrisWord[] => {
  let words: TetrisWord[];
  
  if (difficulty) {
    words = getWordsByDifficulty(difficulty);
  } else {
    words = [...BEGINNER_WORDS, ...NORMAL_WORDS, ...HARD_WORDS, ...EXPERT_WORDS];
  }
  
  return words.filter(word => word.category === category);
};

export const getWordByLevelAndLength = (
  targetLength: number,
  level: number,
  difficulty: DifficultyLevel,
  wordType: 'hiragana' | 'katakana' | 'mixed' = 'mixed'
): TetrisWord => {
  let availableWords: TetrisWord[] = [];
  
  if (level >= 5) {
    const levelKanjiWords = KANJI_WORDS.filter(word => 
      word.kana.length === targetLength
    );
    availableWords = [...availableWords, ...levelKanjiWords];
  }
  
  const regularWords = getWordsByDifficulty(difficulty);
  const filteredRegularWords = getWordsByType(regularWords, wordType)
    .filter(word => word.kana.length === targetLength && !word.isKanji);
  availableWords = [...availableWords, ...filteredRegularWords];
  
  const nonRecentWords = availableWords.filter(word => 
    !recentWords.includes(word.word)
  );
  
  const finalWords = nonRecentWords.length >= 3 ? nonRecentWords : availableWords;
  
  if (finalWords.length === 0) {
    return getRandomWordImproved(difficulty, wordType);
  }
  
  const randomIndex = Math.floor(Math.random() * finalWords.length);
  const selectedWord = finalWords[randomIndex];
  
  recentWords.push(selectedWord.word);
  if (recentWords.length > MAX_RECENT_WORDS) {
    recentWords.shift();
  }
  
  return selectedWord;
};

// 統計資訊
export const VOCABULARY_STATS = {
  totalWords: 7658,
  beginnerWords: 942,
  normalWords: 2538,
  hardWords: 1545,
  expertWords: 2633,
  kanjiWords: 6554,
  hiraganaWords: 1104,
  conversionDate: '2025-07-19T01:23:03.806Z'
};
