import type { DifficultyLevel } from '../../../types';

/**
 * JLPT_N3_N2_WORDS - JLPT N3和N2詞彙庫 (完整分塊版)
 * 
 * 🔄 生成時間: 2025-08-02T10:14:56.330Z
 * 📊 總詞彙數量: 3781 個
 * 📚 N3詞彙數量: 2136 個
 * 📚 N2詞彙數量: 1740 個
 * 📚 分割成 8 個檔案
 * ✨ 來源: https://github.com/jamsinclair/open-anki-jlpt-decks
 * 🔍 已過濾包含「～」的單字
 */

export interface TetrisWord {
  word: string;
  kana: string;
  meaning: string;
  chineseMeaning: string;
  difficulty: DifficultyLevel;
  category: string;
  kanji?: string;
  isKanji?: boolean;
  jlptLevel?: 'n1' | 'n2' | 'n3' | 'n4' | 'n5';
  id?: string;
}

// Import all chunks
import { JLPT_CHUNK_1 } from './chunk-1';
import { JLPT_CHUNK_2 } from './chunk-2';
import { JLPT_CHUNK_3 } from './chunk-3';
import { JLPT_CHUNK_4 } from './chunk-4';
import { JLPT_CHUNK_5 } from './chunk-5';
import { JLPT_CHUNK_6 } from './chunk-6';
import { JLPT_CHUNK_7 } from './chunk-7';
import { JLPT_CHUNK_8 } from './chunk-8';

// Combine all chunks
export const JLPT_N3_N2_WORDS: TetrisWord[] = [
  ...JLPT_CHUNK_1,
  ...JLPT_CHUNK_2,
  ...JLPT_CHUNK_3,
  ...JLPT_CHUNK_4,
  ...JLPT_CHUNK_5,
  ...JLPT_CHUNK_6,
  ...JLPT_CHUNK_7,
  ...JLPT_CHUNK_8
];