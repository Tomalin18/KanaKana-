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
import { expert as EXPERT_WORDS } from './expert-split';
import { JLPT_N3_N2_WORDS } from './jlpt-chunks';

// 導入包含N1詞彙的原始檔案
import { NORMAL_WORDS as NORMAL_WORDS_WITH_N1 } from './normal 2';
import { expert as EXPERT_WORDS_WITH_N1 } from './expert-split';

// 導入漢字專用詞彙
import { KANJI_WORDS_01 } from './kanji-01';
import { KANJI_WORDS_02 } from './kanji-02';
import { KANJI_WORDS_03 } from './kanji-03';
import { KANJI_WORDS_04 } from './kanji-04';
import { KANJI_WORDS_05 } from './kanji-05';
import { KANJI_WORDS_06 } from './kanji-06';
import { KANJI_WORDS_07 } from './kanji-07';

export const allVocabulary: TetrisWord[] = [
  ...BEGINNER_WORDS,
  ...NORMAL_WORDS,
  ...HARD_WORDS,
  ...EXPERT_WORDS,
  ...JLPT_N3_N2_WORDS,
  // 添加漢字專用詞彙
  ...KANJI_WORDS_01,
  ...KANJI_WORDS_02,
  ...KANJI_WORDS_03,
  ...KANJI_WORDS_04,
  ...KANJI_WORDS_05,
  ...KANJI_WORDS_06,
  ...KANJI_WORDS_07
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
      // 中級：包含初級、中級詞彙 + N3詞彙 + 部分N1詞彙
      const n3Words = JLPT_N3_N2_WORDS.filter(word => word.jlptLevel === 'n3');
      const n1WordsFromNormal = NORMAL_WORDS_WITH_N1.filter((word: TetrisWord) => word.jlptLevel === 'n1');
      wordPool = [...BEGINNER_WORDS, ...NORMAL_WORDS, ...n3Words, ...n1WordsFromNormal];
      break;
    case 'hard':
      // 高級：大幅增加N1和N2詞彙的比例，減少中級詞彙
      const n2Words = JLPT_N3_N2_WORDS.filter(word => word.jlptLevel === 'n2');
      const n1WordsFromExpert = EXPERT_WORDS_WITH_N1.filter((word: TetrisWord) => word.jlptLevel === 'n1');
      
      // 為了增加N1和N2詞彙的權重，我們重複添加這些詞彙
      const weightedN2Words = [...n2Words, ...n2Words, ...n2Words]; // 3倍權重
      const weightedN1Words = [...n1WordsFromExpert, ...n1WordsFromExpert, ...n1WordsFromExpert, ...n1WordsFromExpert]; // 4倍權重
      
      wordPool = [
        ...NORMAL_WORDS, // 中級詞彙（基礎）
        ...HARD_WORDS,   // 高級詞彙
        ...weightedN2Words, // N2詞彙（3倍權重）
        ...weightedN1Words  // N1詞彙（4倍權重）
      ];
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
