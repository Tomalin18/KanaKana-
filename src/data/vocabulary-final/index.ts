import type { DifficultyLevel, CombinedDifficultyLevel } from '../../types';

export interface TetrisWord {
  id?: string;
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

// 使用完整的詞彙系統（使用最佳品質的檔案）
import { BEGINNER_WORDS } from './beginner_converted';
import { NORMAL_WORDS } from './normal 2';
import { HARD_WORDS } from './hard 2';
import { EXPERT_WORDS } from './expert 2';
import { JLPT_N3_N2_WORDS } from './jlpt-chunks';

export const allVocabulary: TetrisWord[] = [
  ...BEGINNER_WORDS,
  ...NORMAL_WORDS,
  ...HARD_WORDS,
  ...EXPERT_WORDS,
  ...JLPT_N3_N2_WORDS
];

export const getRandomWordByCombinedDifficulty = (difficulty: CombinedDifficultyLevel): TetrisWord => {
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
  
  // 根據難度等級選擇詞彙池，並包含相應的JLPT詞彙
  switch (mappedDifficulty) {
    case 'beginner':
      // 初級：只包含初級詞彙
      wordPool = BEGINNER_WORDS;
      break;
    case 'normal':
      // 中級：包含初級、中級詞彙 + N3詞彙
      const n3Words = JLPT_N3_N2_WORDS.filter(word => word.jlptLevel === 'n3');
      wordPool = [...BEGINNER_WORDS, ...NORMAL_WORDS, ...n3Words];
      break;
    case 'hard':
      // 高級：包含中級、高級詞彙 + N2詞彙
      const n2Words = JLPT_N3_N2_WORDS.filter(word => word.jlptLevel === 'n2');
      wordPool = [...NORMAL_WORDS, ...HARD_WORDS, ...n2Words];
      break;
    default:
      // 預設：包含所有詞彙
      wordPool = allVocabulary;
  }
  
  if (wordPool.length === 0) {
    wordPool = allVocabulary;
  }
  
  const randomIndex = Math.floor(Math.random() * wordPool.length);
  return wordPool[randomIndex];
};

export const getVocabularyByJLPT = (jlptLevel: 'n1' | 'n2' | 'n3' | 'n4' | 'n5'): TetrisWord[] => {
  return allVocabulary.filter(word => word.jlptLevel === jlptLevel);
};
