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
  chineseMeaning?: string;
  difficulty: DifficultyLevel;
  category: string;
  kanji?: string;
  isKanji?: boolean;
}

// 導入基本檔案
import { BEGINNER_WORDS } from './beginner_converted';
import { NORMAL_WORDS } from './normal 2';
import { HARD_WORDS } from './hard 2';
import { EXPERT_WORDS } from './expert 2';
import { HIRAGANA_WORDS } from './hiragana';
import { JLPT_N3_N2_WORDS } from './jlpt-chunks';

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

// 重新導出所有數據
export {
  BEGINNER_WORDS,
  NORMAL_WORDS,
  HARD_WORDS,
  EXPERT_WORDS,
  HIRAGANA_WORDS,
  KANJI_WORDS,
  JLPT_N3_N2_WORDS
};

/**
 * 根據難度獲取單字
 */
export const getWordsByDifficulty = (difficulty: DifficultyLevel): TetrisWord[] => {
  // 根據難度等級選擇詞彙池，並包含相應的JLPT詞彙
  switch (difficulty) {
    case 'beginner':
      // 初級：只包含初級詞彙
      return BEGINNER_WORDS;
    case 'normal':
      // 中級：包含初級、中級詞彙 + N3詞彙
      const n3Words = JLPT_N3_N2_WORDS.filter(word => word.jlptLevel === 'n3');
      return [...BEGINNER_WORDS, ...NORMAL_WORDS, ...n3Words];
    case 'hard':
      // 高級：包含中級、高級詞彙 + N2詞彙
      const n2Words = JLPT_N3_N2_WORDS.filter(word => word.jlptLevel === 'n2');
      return [...NORMAL_WORDS, ...HARD_WORDS, ...n2Words];
    case 'expert':
      // 專家級：包含所有詞彙
      return [...BEGINNER_WORDS, ...NORMAL_WORDS, ...HARD_WORDS, ...EXPERT_WORDS, ...JLPT_N3_N2_WORDS];
    default:
      return BEGINNER_WORDS.length > 0 ? BEGINNER_WORDS : EXPERT_WORDS;
  }
};

/**
 * 根據單字類型過濾
 */
export const getWordsByType = (words: TetrisWord[], wordType: 'hiragana' | 'katakana' | 'mixed'): TetrisWord[] => {
  // 檢查 words 是否為 undefined 或 null
  if (!words || !Array.isArray(words)) {
    console.warn('getWordsByType: words is undefined or not an array, returning empty array');
    return [];
  }
  
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
  
  // 調試信息
  console.log(`🔍 getWordByLevelAndLength 調用:`);
  console.log(`  目標長度: ${targetLength}`);
  console.log(`  等級: ${level}`);
  console.log(`  難度: ${difficulty}`);
  console.log(`  詞彙類型: ${wordType}`);
  
  // 根據等級添加漢字詞彙
  if (level >= 5) {
    const levelKanjiWords = KANJI_WORDS.filter(word => 
      word.kana.length === targetLength
    );
    availableWords = [...availableWords, ...levelKanjiWords];
    console.log(`  漢字詞彙數量: ${levelKanjiWords.length}`);
  }
  
  // 獲取常規詞彙
  const regularWords = getWordsByDifficulty(difficulty);
  const filteredRegularWords = getWordsByType(regularWords, wordType)
    .filter(word => word.kana.length === targetLength && !word.isKanji);
  availableWords = [...availableWords, ...filteredRegularWords];
  
  console.log(`  常規詞彙數量: ${filteredRegularWords.length}`);
  console.log(`  總可用詞彙數量: ${availableWords.length}`);
  
  // 如果沒有找到匹配長度的詞彙，嘗試使用相近長度的詞彙
  if (availableWords.length === 0) {
    console.log(`  ⚠️ 沒有找到長度為 ${targetLength} 的詞彙，嘗試相近長度`);
    
    // 嘗試相近長度 (±1)
    for (let offset = 1; offset <= 2; offset++) {
      const nearbyLengths = [targetLength - offset, targetLength + offset];
      
      for (const nearbyLength of nearbyLengths) {
        if (nearbyLength > 0) {
          const nearbyKanjiWords = level >= 5 ? KANJI_WORDS.filter(word => 
            word.kana.length === nearbyLength
          ) : [];
          
          const nearbyRegularWords = getWordsByType(regularWords, wordType)
            .filter(word => word.kana.length === nearbyLength && !word.isKanji);
          
          availableWords = [...availableWords, ...nearbyKanjiWords, ...nearbyRegularWords];
          
          if (availableWords.length > 0) {
            console.log(`  ✅ 找到長度為 ${nearbyLength} 的詞彙 ${availableWords.length} 個`);
            break;
          }
        }
      }
      
      if (availableWords.length > 0) break;
    }
  }
  
  // 如果仍然沒有詞彙，使用隨機詞彙
  if (availableWords.length === 0) {
    console.log(`  ⚠️ 仍然沒有找到合適的詞彙，使用隨機詞彙`);
    return getRandomWordImproved(difficulty, wordType);
  }
  
  // 過濾掉最近使用過的詞彙
  const nonRecentWords = availableWords.filter(word => 
    !recentWords.includes(word.word)
  );
  
  console.log(`  非最近使用詞彙數量: ${nonRecentWords.length}`);
  
  // 選擇最終詞彙池
  const finalWords = nonRecentWords.length >= 3 ? nonRecentWords : availableWords;
  
  // 隨機選擇
  const randomIndex = Math.floor(Math.random() * finalWords.length);
  const selectedWord = finalWords[randomIndex];
  
  console.log(`  選擇詞彙: ${selectedWord.word} (${selectedWord.kana}) - ${selectedWord.meaning}`);
  
  // 更新最近使用詞彙列表
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
