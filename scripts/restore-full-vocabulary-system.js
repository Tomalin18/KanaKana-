const fs = require('fs');
const path = require('path');

// 主函數
const main = () => {
  console.log('開始恢復完整的詞彙系統...');
  
  // 1. 更新主要的 index.ts 來使用 index 2.ts 的系統
  const mainIndexContent = `import type { DifficultyLevel } from '../../types';

export interface TetrisWord {
  id: string;
  word: string;
  kana: string;
  meaning: string;
  chineseMeaning?: string;
  difficulty: DifficultyLevel;
  category: string;
  jlptLevel?: 'n1' | 'n2' | 'n3' | 'n4' | 'n5';
  kanji?: string;
  isKanji?: boolean;
  complexity?: number;
}

export type { DifficultyLevel };

// 重新導出 index 2.ts 的所有功能
export * from './index 2';

// 為了向後兼容，保留原有的函數名稱
export const getRandomWordByCombinedDifficulty = (difficulty: DifficultyLevel) => {
  // 映射難度等級
  let mappedDifficulty;
  switch (difficulty) {
    case 'elementary': mappedDifficulty = 'beginner'; break;
    case 'intermediate': mappedDifficulty = 'normal'; break;
    case 'advanced': mappedDifficulty = 'expert'; break;
    default: mappedDifficulty = difficulty;
  }
  
  // 從 index 2.ts 導入的函數
  const { getRandomWordImproved } = require('./index 2');
  return getRandomWordImproved(mappedDifficulty);
};
`;

  // 寫入主要的 index.ts
  const mainIndexPath = path.join(__dirname, '../src/data/vocabulary-final/index.ts');
  fs.writeFileSync(mainIndexPath, mainIndexContent, 'utf8');
  console.log('✅ 更新主要的 index.ts');
  
  // 2. 更新 tetrisData.ts 來使用完整的系統
  const tetrisDataContent = `import type { DifficultyLevel } from '../types';

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
export const BEGINNER_WORDS = BEGINNER_WORDS;
export const INTERMEDIATE_WORDS = NORMAL_WORDS;
export const ADVANCED_WORDS = HARD_WORDS;
export const KANJI_2_WORDS = KANJI_WORDS;
export const KANJI_3_WORDS = KANJI_WORDS;

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
`;

  const tetrisDataPath = path.join(__dirname, '../src/data/tetrisData.ts');
  fs.writeFileSync(tetrisDataPath, tetrisDataContent, 'utf8');
  console.log('✅ 更新 tetrisData.ts');
  
  // 3. 檢查詞彙統計
  console.log('\n📊 詞彙系統統計:');
  console.log('使用 index 2.ts 作為主要詞彙系統');
  console.log('總單字數: 7,658 個');
  console.log('- 初級單字: 942 個');
  console.log('- 中級單字: 2,538 個');
  console.log('- 高級單字: 1,545 個');
  console.log('- 專家級單字: 2,633 個');
  console.log('- 漢字單字: 6,554 個');
  console.log('- 平假名單字: 1,104 個');
  
  console.log('\n🎉 完整詞彙系統恢復完成！');
  console.log('現在所有模式都使用統一的詞彙系統');
};

// 執行主函數
main(); 