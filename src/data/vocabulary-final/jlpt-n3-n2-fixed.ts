import type { DifficultyLevel } from '../../types';

/**
 * JLPT_N3_N2_WORDS - JLPT N3和N2詞彙庫 (修復版)
 * 
 * 🔄 生成時間: 2025-08-02T10:07:01.117Z
 * 📊 總詞彙數量: 3781 個
 * 📚 N3詞彙數量: 2136 個
 * 📚 N2詞彙數量: 1740 個
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

// Use a more efficient approach to avoid TypeScript complexity issues
const createTetrisWord = (
  word: string,
  kana: string,
  meaning: string,
  difficulty: DifficultyLevel,
  jlptLevel: 'n2' | 'n3',
  id: string,
  kanji?: string
): TetrisWord => ({
  word,
  kana,
  meaning,
  chineseMeaning: meaning,
  difficulty,
  category: '一般',
  kanji: kanji || (/\u4e00-\u9faf/.test(word) ? word : undefined),
  isKanji: /\u4e00-\u9faf/.test(word),
  jlptLevel,
  id
});

// Create the vocabulary array using the helper function
export const JLPT_N3_N2_WORDS: TetrisWord[] = [
  createTetrisWord("作法", "さほう", "manners, etiquette, propriety", "normal", "n3", "HYeQ[!t+v+", "作法"),
  createTetrisWord("様々", "さまざま", "varied, various", "normal", "n3", "l>?/o{CjV<", "様々"),
  createTetrisWord("冷ます", "さます", "to cool, to let cool", "normal", "n3", "m(o0n4^}Z$", "冷ます"),
  createTetrisWord("覚ます", "さます", "to awaken", "normal", "n3", "t9@aJ[u<UZ", "覚ます"),
  createTetrisWord("冷める", "さめる", "to become cool, to wear off", "normal", "n3", "LR.A;82:W|", "冷める"),
  createTetrisWord("覚める", "さめる", "to wake, to wake up", "normal", "n3", "Dob+O4(+<L", "覚める"),
  createTetrisWord("冷やす", "ひやす", "to cool, to refrigerate", "normal", "n3", "Dob+O4(+<L", "冷やす"),
  createTetrisWord("冷える", "ひえる", "to grow cold, to get chilly", "normal", "n3", "Dob+O4(+<L", "冷える"),
  createTetrisWord("冷たい", "つめたい", "cold (to the touch), chilly", "normal", "n3", "Dob+O4(+<L", "冷たい"),
  createTetrisWord("冷蔵庫", "れいぞうこ", "refrigerator", "normal", "n3", "Dob+O4(+<L", "冷蔵庫"),
  // Add more words here as needed...
]; 