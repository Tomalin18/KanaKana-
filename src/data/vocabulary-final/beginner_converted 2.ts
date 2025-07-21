import type { DifficultyLevel } from '../../types';

/**
 * BEGINNER_WORDS - 從 vocabulary.csv 轉換
 * 
 * 🔄 轉換時間: 2025-07-19T13:35:00.000Z
 * 📊 單字數量: 942 個
 * ✨ 新增中文英文翻譯分離
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
  },
  {
    "word": "新幹線",
    "kana": "しんかんせん",
    "meaning": "Shinkansen, \"Bullet Train\"",
    "chineseMeaning": "新幹線「子彈列車」",
    "difficulty": "beginner",
    "category": "一般",
    "kanji": "新幹線",
    "isKanji": true
  },
  {
    "word": "扇子",
    "kana": "せんす",
    "meaning": "folding fan",
    "chineseMeaning": "摺疊扇",
    "difficulty": "beginner",
    "category": "一般",
    "kanji": "扇子",
    "isKanji": true
  },
  {
    "word": "大学院",
    "kana": "だいがくいん",
    "meaning": "graduate school",
    "chineseMeaning": "研究所",
    "difficulty": "beginner",
    "category": "一般",
    "kanji": "大学院",
    "isKanji": true
  },
  {
    "word": "お大事に",
    "kana": "おだいじに",
    "meaning": "Take care of yourself, Take care!, Get well soon",
    "chineseMeaning": "請保重、保重！、早日康復",
    "difficulty": "beginner",
    "category": "一般",
    "kanji": "お大事に",
    "isKanji": true
  },
  {
    "word": "温泉",
    "kana": "おんせん",
    "meaning": "spa, hot spring",
    "chineseMeaning": "溫泉、溫泉",
    "difficulty": "beginner",
    "category": "一般",
    "kanji": "温泉",
    "isKanji": true
  },
  {
    "word": "女の人",
    "kana": "おんなのひと",
    "meaning": "woman",
    "chineseMeaning": "女性",
    "difficulty": "beginner",
    "category": "一般",
    "kanji": "女の人",
    "isKanji": true
  },
  {
    "word": "かしこまりました",
    "kana": "かしこまりました",
    "meaning": "Certainly",
    "chineseMeaning": "當然",
    "difficulty": "beginner",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "神様",
    "kana": "かみさま",
    "meaning": "god",
    "chineseMeaning": "神明",
    "difficulty": "beginner",
    "category": "一般",
    "kanji": "神様",
    "isKanji": true
  },
  {
    "word": "乾杯",
    "kana": "かんぱい",
    "meaning": "Cheers! (a toast)",
    "chineseMeaning": "乾杯! (a 敬酒)",
    "difficulty": "beginner",
    "category": "一般",
    "kanji": "乾杯",
    "isKanji": true
  },
  {
    "word": "着替える",
    "kana": "きがえる",
    "meaning": "to change (one's) clothes",
    "chineseMeaning": "換衣服",
    "difficulty": "beginner",
    "category": "一般",
    "kanji": "着替える",
    "isKanji": true
  },
  {
    "word": "敬語",
    "kana": "けいご",
    "meaning": "honorific language (lit., respect language)",
    "chineseMeaning": "敬語（字面意思：尊敬語）",
    "difficulty": "beginner",
    "category": "一般",
    "kanji": "敬語",
    "isKanji": true
  },
  {
    "word": "サラリーマン",
    "kana": "サラリーマン",
    "meaning": "salaryman; company employee",
    "chineseMeaning": "上班族; 公司員工",
    "difficulty": "beginner",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "留守番",
    "kana": "るすばん",
    "meaning": "care-taking, caretaker, house-watching",
    "chineseMeaning": "照顧-taking, caretaker, house-watching",
    "difficulty": "beginner",
    "category": "經濟",
    "kanji": "留守番",
    "isKanji": true
  },
  {
    "word": "ろうそく",
    "kana": "ろうそく",
    "meaning": "candle",
    "chineseMeaning": "蠟燭",
    "difficulty": "beginner",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "編む",
    "kana": "あむ",
    "meaning": "to knit",
    "chineseMeaning": "編織",
    "difficulty": "beginner",
    "category": "一般",
    "kanji": "編む",
    "isKanji": true
  },
  {
    "word": "パンツ",
    "kana": "パンツ",
    "meaning": "underpants",
    "chineseMeaning": "內褲",
    "difficulty": "beginner",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "別荘",
    "kana": "べっそう",
    "meaning": "villa; vacation home; summer cottage",
    "chineseMeaning": "別墅; 度假別墅; 夏日小屋",
    "difficulty": "beginner",
    "category": "一般",
    "kanji": "別荘",
    "isKanji": true
  },
  {
    "word": "ボーナス",
    "kana": "ボーナス",
    "meaning": "bonus",
    "chineseMeaning": "獎金",
    "difficulty": "beginner",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "募集",
    "kana": "ぼしゅう",
    "meaning": "recruitment",
    "chineseMeaning": "招募",
    "difficulty": "beginner",
    "category": "一般",
    "kanji": "募集",
    "isKanji": true
  },
  {
    "word": "ポスター",
    "kana": "ポスター",
    "meaning": "poster",
    "chineseMeaning": "海報",
    "difficulty": "beginner",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "まあまあ",
    "kana": "まあまあ",
    "meaning": "okay; so-so; decent",
    "chineseMeaning": "還可以; 普普通通; 不錯",
    "difficulty": "beginner",
    "category": "一般",
    "isKanji": false
  }
];
