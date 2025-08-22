/**
 * 資料庫版本的詞彙系統
 * 提供與原本 index.ts 相同的介面，但資料來源改為 Supabase
 */

import type { CombinedDifficultyLevel, TetrisWord } from '@/types';
import * as vocabularyService from '@/services/vocabularyService';

// 從 types 重新匯出 TetrisWord
export type { TetrisWord } from '@/types';

// 匯出所有詞彙（需要先預載）
export let allVocabulary: TetrisWord[] = [];

// 初始化函數，載入所有詞彙到記憶體
export const initializeVocabulary = async () => {
  try {
    const loadedVocabulary = await vocabularyService.fetchAllVocabulary();
    if (loadedVocabulary && loadedVocabulary.length > 0) {
      allVocabulary = loadedVocabulary;
      console.log(`Vocabulary initialized with ${allVocabulary.length} items from database`);
      return true;
    } else {
      console.error('No vocabulary loaded from database');
      return false;
    }
  } catch (error) {
    console.error('Failed to initialize vocabulary:', error);
    return false;
  }
};

// 同步版本的函數（保持與原本介面相容）
export const getRandomWordByCombinedDifficulty = (difficulty: CombinedDifficultyLevel): TetrisWord => {
  if (allVocabulary.length === 0) {
    throw new Error('Vocabulary not loaded. Please ensure database is initialized.');
  }

  let wordPool: TetrisWord[] = [];
  
  // 映射 CombinedDifficultyLevel 到 DifficultyLevel
  let mappedDifficulty;
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
      wordPool = allVocabulary.filter(w => w.difficulty === 'beginner');
      break;
    case 'normal':
      wordPool = allVocabulary.filter(w => 
        w.difficulty === 'beginner' || 
        w.difficulty === 'normal' ||
        w.jlptLevel === 'n3'
      );
      break;
    case 'hard':
      const hardWords = allVocabulary.filter(w => 
        w.difficulty === 'hard' || 
        w.difficulty === 'expert' ||
        w.jlptLevel === 'n1' ||
        w.jlptLevel === 'n2'
      );
      
      const n2Words = allVocabulary.filter(w => w.jlptLevel === 'n2');
      const n1Words = allVocabulary.filter(w => w.jlptLevel === 'n1');
      
      wordPool = [
        ...hardWords,
        ...n2Words, ...n2Words,
        ...n1Words, ...n1Words, ...n1Words
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
};

// 同步版本的 JLPT 詞彙獲取
export const getVocabularyByJLPT = (jlptLevel: 'n1' | 'n2' | 'n3' | 'n4' | 'n5'): TetrisWord[] => {
  console.log(`[database.ts] getVocabularyByJLPT(${jlptLevel}): allVocabulary.length = ${allVocabulary.length}`);
  
  if (allVocabulary.length === 0) {
    console.warn(`[database.ts] getVocabularyByJLPT called but vocabulary not loaded yet!`);
    return [];
  }
  
  const filtered = allVocabulary.filter(word => word.jlptLevel === jlptLevel);
  console.log(`[database.ts] Found ${filtered.length} words for ${jlptLevel}`);
  
  // 除錯：檢查前幾個詞彙的 jlptLevel
  if (allVocabulary.length > 0) {
    const sample = allVocabulary.slice(0, 5);
    console.log(`[database.ts] Sample vocabulary jlptLevels:`, sample.map(w => ({ word: w.word, jlpt: w.jlptLevel })));
  }
  
  return filtered;
};

// 非同步版本（推薦使用）
export const getRandomWordByCombinedDifficultyAsync = vocabularyService.getRandomWordByCombinedDifficulty;
export const getVocabularyByJLPTAsync = vocabularyService.getVocabularyByJLPT;

// 工具函數
export const preloadVocabulary = vocabularyService.preloadVocabulary;
export const clearVocabularyCache = vocabularyService.clearVocabularyCache;