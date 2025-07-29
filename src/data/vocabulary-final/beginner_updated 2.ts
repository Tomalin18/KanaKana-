import type { DifficultyLevel } from '../../types';

/**
 * BEGINNER_WORDS - 從 vocabulary.csv 轉換
 * 
 * 🔄 轉換時間: 2025-07-19T13:30:00.000Z
 * 📊 單字數量: 942 個
 * ✨ 新增中文翻譯分離
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
}

export const BEGINNER_WORDS: TetrisWord[] = [
  {
    "word": "サボる",
    "kana": "サボる",
    "meaning": "to cut (skip) classes; to loaf on the job; to idle away one's time",
    "chineseMeaning": "翹課; 工作偷懶; 虛度光陰",
    "difficulty": "beginner",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "悩み",
    "kana": "なやみ",
    "meaning": "trouble(s), worry, distress",
    "chineseMeaning": "麻煩, 擔心, 苦惱",
    "difficulty": "beginner",
    "category": "一般",
    "kanji": "悩み",
    "isKanji": true
  },
  {
    "word": "落ち込む",
    "kana": "おちこむ",
    "meaning": "to get depressed",
    "chineseMeaning": "感到沮喪",
    "difficulty": "beginner",
    "category": "一般",
    "kanji": "落ち込む",
    "isKanji": true
  },
  {
    "word": "塾",
    "kana": "じゅく",
    "meaning": "after-school (cram) school",
    "chineseMeaning": "補習班",
    "difficulty": "beginner",
    "category": "一般",
    "kanji": "塾",
    "isKanji": true
  },
  {
    "word": "ファイル",
    "kana": "ファイル",
    "meaning": "file; portfolio",
    "chineseMeaning": "檔案; 作品集",
    "difficulty": "beginner",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "部下",
    "kana": "ぶか",
    "meaning": "one's subordinate",
    "chineseMeaning": "下屬",
    "difficulty": "beginner",
    "category": "一般",
    "kanji": "部下",
    "isKanji": true
  },
  {
    "word": "誠に",
    "kana": "まことに",
    "meaning": "indeed, really (very polite), absolutely",
    "chineseMeaning": "確實、真的（非常禮貌）、絕對",
    "difficulty": "beginner",
    "category": "一般",
    "kanji": "誠に",
    "isKanji": true
  },
  {
    "word": "無駄遣い",
    "kana": "むだづかい",
    "meaning": "waste money on, squander money on",
    "chineseMeaning": "浪費金錢在, 揮霍金錢在",
    "difficulty": "beginner",
    "category": "一般",
    "kanji": "無駄遣い",
    "isKanji": true
  },
  {
    "word": "ビジネス",
    "kana": "ビジネス",
    "meaning": "business",
    "chineseMeaning": "商業的",
    "difficulty": "beginner",
    "category": "經濟",
    "isKanji": false
  },
  {
    "word": "出張",
    "kana": "しゅっちょう",
    "meaning": "official tour, business trip",
    "chineseMeaning": "正式出差、商務旅行",
    "difficulty": "beginner",
    "category": "經濟",
    "kanji": "出張",
    "isKanji": true
  }
];
