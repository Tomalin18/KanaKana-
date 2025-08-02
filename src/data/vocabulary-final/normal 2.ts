import type { DifficultyLevel } from '../../types';

/**
 * NORMAL_WORDS - 從 vocabulary.csv 轉換
 * 
 * 🔄 轉換時間: 2025-07-19T01:23:03.795Z
 * 📊 單字數量: 2538 個
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

export const NORMAL_WORDS: TetrisWord[] = [
  {
    "word": "作法",
    "kana": "さほう",
    "meaning": "manners, etiquette, propriety",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "作法",
    "isKanji": true
  },
  {
    "word": "様々",
    "kana": "さまざま",
    "meaning": "varied, various",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "様々",
    "isKanji": true
  },
  {
    "word": "冷ます",
    "kana": "さます",
    "meaning": "to cool, to let cool",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "冷ます",
    "isKanji": true
  },
  {
    "word": "覚ます",
    "kana": "さます",
    "meaning": "to awaken",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "覚ます",
    "isKanji": true
  },
  {
    "word": "冷める",
    "kana": "さめる",
    "meaning": "to become cool, to wear off",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "冷める",
    "isKanji": true
  },
  {
    "word": "覚める",
    "kana": "さめる",
    "meaning": "to wake, to wake up",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "覚める",
    "isKanji": true
  },
  {
    "word": "左右",
    "kana": "さゆう",
    "meaning": "left and right; influence",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "左右",
    "isKanji": true
  },
  {
    "word": "更に",
    "kana": "さらに",
    "meaning": "furthermore, moreover",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "更に",
    "isKanji": true
  },
  {
    "word": "去る",
    "kana": "さる",
    "meaning": "to leave, to go away",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "去る",
    "isKanji": true
  },
  {
    "word": "騒ぎ",
    "kana": "さわぎ",
    "meaning": "uproar, disturbance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "騒ぎ",
    "isKanji": true
  },
  {
    "word": "参加",
    "kana": "さんか",
    "meaning": "participation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "参加",
    "isKanji": true
  },
  {
    "word": "参考",
    "kana": "さんこう",
    "meaning": "reference, consultation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "参考",
    "isKanji": true
  },
  {
    "word": "賛成",
    "kana": "さんせい",
    "meaning": "approval, agreement",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "賛成",
    "isKanji": true
  },
  {
    "word": "酸性",
    "kana": "さんせい",
    "meaning": "acidity",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "酸性",
    "isKanji": true
  },
  {
    "word": "酸素",
    "kana": "さんそ",
    "meaning": "oxygen",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "酸素",
    "isKanji": true
  },
  {
    "word": "氏",
    "kana": "し",
    "meaning": "family name, lineage",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "氏",
    "isKanji": true
  },
  {
    "word": "詩",
    "kana": "し",
    "meaning": "poem; poetry",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "詩",
    "isKanji": true
  },
  {
    "word": "幸せ",
    "kana": "しあわせ",
    "meaning": "happiness, blessing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "幸せ",
    "isKanji": true
  },
  {
    "word": "ジェット機",
    "kana": "ジェットき",
    "meaning": "jet plane",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "ジェット機",
    "isKanji": true
  },
  {
    "word": "四角",
    "kana": "しかく",
    "meaning": "square",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "四角",
    "isKanji": true
  },
  {
    "word": "直に",
    "kana": "じかに",
    "meaning": "immediately, readily, directly",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "直に",
    "isKanji": true
  },
  {
    "word": "しかも",
    "kana": "しかも",
    "meaning": "moreover, furthermore, besides, plus",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "四季",
    "kana": "しき",
    "meaning": "four seasons",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "四季",
    "isKanji": true
  },
  {
    "word": "直",
    "kana": "じき",
    "meaning": "immediately, soon, shortly",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "直",
    "isKanji": true
  },
  {
    "word": "時期",
    "kana": "じき",
    "meaning": "time, season, period",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "時期",
    "isKanji": true
  },
  {
    "word": "支給",
    "kana": "しきゅう",
    "meaning": "payment, allowance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "支給",
    "isKanji": true
  },
  {
    "word": "至急",
    "kana": "しきゅう",
    "meaning": "urgent, pressing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "至急",
    "isKanji": true
  },
  {
    "word": "しきりに",
    "kana": "しきりに",
    "meaning": "frequently, repeatedly, eagerly",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "刺激",
    "kana": "しげき",
    "meaning": "stimulus, impetus, incentive",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "刺激",
    "isKanji": true
  },
  {
    "word": "資源",
    "kana": "しげん",
    "meaning": "resources",
    "difficulty": "normal",
    "category": "抽象",
    "kanji": "資源",
    "isKanji": true
  },
  {
    "word": "事件",
    "kana": "じけん",
    "meaning": "event, affair, incident",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "事件",
    "isKanji": true
  },
  {
    "word": "時刻",
    "kana": "じこく",
    "meaning": "time, hour",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "時刻",
    "isKanji": true
  },
  {
    "word": "自殺",
    "kana": "じさつ",
    "meaning": "suicide",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "自殺",
    "isKanji": true
  },
  {
    "word": "事実",
    "kana": "じじつ",
    "meaning": "fact, truth, reality",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "事実",
    "isKanji": true
  },
  {
    "word": "支出",
    "kana": "ししゅつ",
    "meaning": "expenditure, expenses",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "支出",
    "isKanji": true
  },
  {
    "word": "事情",
    "kana": "じじょう",
    "meaning": "circumstances, situation, reasons",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "事情",
    "isKanji": true
  },
  {
    "word": "詩人",
    "kana": "しじん",
    "meaning": "poet",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "詩人",
    "isKanji": true
  },
  {
    "word": "自身",
    "kana": "じしん",
    "meaning": "oneself",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "自身",
    "isKanji": true
  },
  {
    "word": "沈む",
    "kana": "しずむ",
    "meaning": "to sink; to feel depressed",
    "difficulty": "normal",
    "category": "感情",
    "kanji": "沈む",
    "isKanji": true
  },
  {
    "word": "自然",
    "kana": "しぜん",
    "meaning": "nature, spontaneous",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "自然",
    "isKanji": true
  },
  {
    "word": "思想",
    "kana": "しそう",
    "meaning": "thought, idea",
    "difficulty": "normal",
    "category": "抽象",
    "kanji": "思想",
    "isKanji": true
  },
  {
    "word": "舌",
    "kana": "した",
    "meaning": "tongue",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "舌",
    "isKanji": true
  },
  {
    "word": "次第",
    "kana": "しだい",
    "meaning": "cartoonder; circumstances; immediate(ly) (cartoonder; circumstances; immediate(ly)) (cartoonder; circumstances; immediate(ly) (order; circumstances; immediate(ly)))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "次第",
    "isKanji": true
  },
  {
    "word": "従う",
    "kana": "したがう",
    "meaning": "到 abide (by the rules",
    "difficulty": "normal",
    "category": "政治",
    "kanji": "従う",
    "isKanji": true
  },
  {
    "word": "したがって",
    "kana": "したがって",
    "meaning": "therefore, consequently",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "親しい",
    "kana": "したしい",
    "meaning": "intimate, close (e.g., friend)",
    "difficulty": "normal",
    "category": "性質",
    "kanji": "親しい",
    "isKanji": true
  },
  {
    "word": "質",
    "kana": "しつ",
    "meaning": "from person",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "質",
    "isKanji": true
  },
  {
    "word": "失業",
    "kana": "しつぎょう",
    "meaning": "unemployment",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "失業",
    "isKanji": true
  },
  {
    "word": "湿気",
    "kana": "しっけ",
    "meaning": "moisture, humidity, dampness",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "湿気",
    "isKanji": true
  },
  {
    "word": "実験",
    "kana": "じっけん",
    "meaning": "lab work; experiment",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "実験",
    "isKanji": true
  },
  {
    "word": "実現",
    "kana": "じつげん",
    "meaning": "implementation, materialization, realization",
    "difficulty": "normal",
    "category": "物質",
    "kanji": "実現",
    "isKanji": true
  },
  {
    "word": "実行",
    "kana": "じっこう",
    "meaning": "practice, executito get (e.g., program), realizatito get (practice, executito get (e.g., program), realizatito get) (practice, executito get (e.g., program), realizatito get (practice, execution (e.g., program), realization))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "実行",
    "isKanji": true
  },
  {
    "word": "実際",
    "kana": "じっさい",
    "meaning": "in fact; in actuality",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "実際",
    "isKanji": true
  },
  {
    "word": "実施",
    "kana": "じっし",
    "meaning": "enforcement, carry out, operation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "実施",
    "isKanji": true
  },
  {
    "word": "湿度",
    "kana": "しつど",
    "meaning": "humidity",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "湿度",
    "isKanji": true
  },
  {
    "word": "じっと",
    "kana": "じっと",
    "meaning": "patiently, quietly",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "実に",
    "kana": "じつに",
    "meaning": "indeed, truly, surely",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "実に",
    "isKanji": true
  },
  {
    "word": "実は",
    "kana": "じつは",
    "meaning": "actually; in fact",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "実は",
    "isKanji": true
  },
  {
    "word": "失望",
    "kana": "しつぼう",
    "meaning": "disappointment, despair",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "失望",
    "isKanji": true
  },
  {
    "word": "実力",
    "kana": "じつりょく",
    "meaning": "ability; force",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "実力",
    "isKanji": true
  },
  {
    "word": "指導",
    "kana": "しどう",
    "meaning": "leadership, guidance, coaching",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "指導",
    "isKanji": true
  },
  {
    "word": "自動",
    "kana": "じどう",
    "meaning": "automatic, self-motion",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "自動",
    "isKanji": true
  },
  {
    "word": "児童",
    "kana": "じどう",
    "meaning": "children, juvenile",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "児童",
    "isKanji": true
  },
  {
    "word": "品",
    "kana": "しな",
    "meaning": "thing, article, goods",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "品",
    "isKanji": true
  },
  {
    "word": "支配",
    "kana": "しはい",
    "meaning": "rule, control, direction",
    "difficulty": "normal",
    "category": "政治",
    "kanji": "支配",
    "isKanji": true
  },
  {
    "word": "芝居",
    "kana": "しばい",
    "meaning": "play, drama",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "芝居",
    "isKanji": true
  },
  {
    "word": "しばしば",
    "kana": "しばしば",
    "meaning": "often, again and again, frequently",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "芝生",
    "kana": "しばふ",
    "meaning": "lawn",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "芝生",
    "isKanji": true
  },
  {
    "word": "支払",
    "kana": "しはらい",
    "meaning": "payment",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "支払",
    "isKanji": true
  },
  {
    "word": "支払う",
    "kana": "しはらう",
    "meaning": "to pay",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "支払う",
    "isKanji": true
  },
  {
    "word": "死亡",
    "kana": "しぼう",
    "meaning": "death",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "死亡",
    "isKanji": true
  },
  {
    "word": "資本",
    "kana": "しほん",
    "meaning": "funds, capital",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "資本",
    "isKanji": true
  },
  {
    "word": "姉妹",
    "kana": "しまい",
    "meaning": "sisters",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "姉妹",
    "isKanji": true
  },
  {
    "word": "自慢",
    "kana": "じまん",
    "meaning": "pride, boast",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "自慢",
    "isKanji": true
  },
  {
    "word": "地味",
    "kana": "じみ",
    "meaning": "quiet, plain, conservative",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "地味",
    "isKanji": true
  },
  {
    "word": "示す",
    "kana": "しめす",
    "meaning": "to show, to indicate",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "示す",
    "isKanji": true
  },
  {
    "word": "占める",
    "kana": "しめる",
    "meaning": "to take up; to account for",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "占める",
    "isKanji": true
  },
  {
    "word": "湿る",
    "kana": "しめる",
    "meaning": "to be wet, to be damp",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "湿る",
    "isKanji": true
  },
  {
    "word": "下",
    "kana": "しも",
    "meaning": "under, below, beneath",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "下",
    "isKanji": true
  },
  {
    "word": "霜",
    "kana": "しも",
    "meaning": "frost",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "霜",
    "isKanji": true
  },
  {
    "word": "借金",
    "kana": "しゃっきん",
    "meaning": "debt, loan, liabilities",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "借金",
    "isKanji": true
  },
  {
    "word": "しゃべる",
    "kana": "しゃべる",
    "meaning": "same as 話す (はなす",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "週",
    "kana": "しゅう",
    "meaning": "week",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "週",
    "isKanji": true
  },
  {
    "word": "州",
    "kana": "しゅう",
    "meaning": "state, province",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "州",
    "isKanji": true
  },
  {
    "word": "銃",
    "kana": "じゅう",
    "meaning": "gun",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "銃",
    "isKanji": true
  },
  {
    "word": "周囲",
    "kana": "しゅうい",
    "meaning": "surroundings, circumference, environs",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "周囲",
    "isKanji": true
  },
  {
    "word": "収穫",
    "kana": "しゅうかく",
    "meaning": "harvest, crop, ingathering",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "収穫",
    "isKanji": true
  },
  {
    "word": "宗教",
    "kana": "しゅうきょう",
    "meaning": "religion",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "宗教",
    "isKanji": true
  },
  {
    "word": "重視",
    "kana": "じゅうし",
    "meaning": "importance, stress",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "重視",
    "isKanji": true
  },
  {
    "word": "就職",
    "kana": "しゅうしょく",
    "meaning": "finding employment",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "就職",
    "isKanji": true
  },
  {
    "word": "修正",
    "kana": "しゅうせい",
    "meaning": "amendment, correction",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "修正",
    "isKanji": true
  },
  {
    "word": "重体",
    "kana": "じゅうたい",
    "meaning": "seriously ill, critical state",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "重体",
    "isKanji": true
  },
  {
    "word": "渋滞",
    "kana": "じゅうたい",
    "meaning": "cto getgestito get (e.g., traffic), delay (cto getgestito get (e.g., traffic), delay) (cto getgestito get (e.g., traffic), delay (congestion (e.g., traffic), delay))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "渋滞",
    "isKanji": true
  },
  {
    "word": "重大",
    "kana": "じゅうだい",
    "meaning": "serious, important",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "重大",
    "isKanji": true
  },
  {
    "word": "住宅",
    "kana": "じゅうたく",
    "meaning": "resident, housing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "住宅",
    "isKanji": true
  },
  {
    "word": "集団",
    "kana": "しゅうだん",
    "meaning": "group, mass",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "集団",
    "isKanji": true
  },
  {
    "word": "集中",
    "kana": "しゅうちゅう",
    "meaning": "concentration, focusing the mind",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "集中",
    "isKanji": true
  },
  {
    "word": "収入",
    "kana": "しゅうにゅう",
    "meaning": "income, revenue",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "収入",
    "isKanji": true
  },
  {
    "word": "住民",
    "kana": "じゅうみん",
    "meaning": "inhabitants, residents",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "住民",
    "isKanji": true
  },
  {
    "word": "重要",
    "kana": "じゅうよう",
    "meaning": "important, essential",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "重要",
    "isKanji": true
  },
  {
    "word": "修理",
    "kana": "しゅうり",
    "meaning": "repairing, mending",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "修理",
    "isKanji": true
  },
  {
    "word": "主義",
    "kana": "しゅぎ",
    "meaning": "doctrine, cause, principle",
    "difficulty": "normal",
    "category": "抽象",
    "kanji": "主義",
    "isKanji": true
  },
  {
    "word": "宿泊",
    "kana": "しゅくはく",
    "meaning": "lodging",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "宿泊",
    "isKanji": true
  },
  {
    "word": "手術",
    "kana": "しゅじゅつ",
    "meaning": "surgical operation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "手術",
    "isKanji": true
  },
  {
    "word": "首相",
    "kana": "しゅしょう",
    "meaning": "Prime Minister",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "首相",
    "isKanji": true
  },
  {
    "word": "手段",
    "kana": "しゅだん",
    "meaning": "means, way, measure",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "手段",
    "isKanji": true
  },
  {
    "word": "主張",
    "kana": "しゅちょう",
    "meaning": "claim, insistence, assertion",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "主張",
    "isKanji": true
  },
  {
    "word": "出場",
    "kana": "しゅつじょう",
    "meaning": "participation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "出場",
    "isKanji": true
  },
  {
    "word": "出身",
    "kana": "しゅっしん",
    "meaning": "come from",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "出身",
    "isKanji": true
  },
  {
    "word": "出版",
    "kana": "しゅっぱん",
    "meaning": "publication",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "出版",
    "isKanji": true
  },
  {
    "word": "首都",
    "kana": "しゅと",
    "meaning": "capital city",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "首都",
    "isKanji": true
  },
  {
    "word": "主要",
    "kana": "しゅよう",
    "meaning": "chief, main",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "主要",
    "isKanji": true
  },
  {
    "word": "需要",
    "kana": "じゅよう",
    "meaning": "demand",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "需要",
    "isKanji": true
  },
  {
    "word": "種類",
    "kana": "しゅるい",
    "meaning": "variety, kind",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "種類",
    "isKanji": true
  },
  {
    "word": "順",
    "kana": "じゅん",
    "meaning": "order, turn",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "順",
    "isKanji": true
  },
  {
    "word": "瞬間",
    "kana": "しゅんかん",
    "meaning": "moment, second",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "瞬間",
    "isKanji": true
  },
  {
    "word": "順調",
    "kana": "じゅんちょう",
    "meaning": "doing well",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "順調",
    "isKanji": true
  },
  {
    "word": "順番",
    "kana": "じゅんばん",
    "meaning": "turn (in line), order from things (turn (in line), order from things) (turn (in line), order from things (turn (in line), order of things))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "順番",
    "isKanji": true
  },
  {
    "word": "使用",
    "kana": "しよう",
    "meaning": "same as 使うこと (つかうこと",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "使用",
    "isKanji": true
  },
  {
    "word": "小",
    "kana": "しょう",
    "meaning": "small",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "小",
    "isKanji": true
  },
  {
    "word": "章",
    "kana": "しょう",
    "meaning": "chapter, section; medal",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "章",
    "isKanji": true
  },
  {
    "word": "賞",
    "kana": "しょう",
    "meaning": "prize, award",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "賞",
    "isKanji": true
  },
  {
    "word": "上",
    "kana": "じょう",
    "meaning": "first volume; superior quality; governmental",
    "difficulty": "normal",
    "category": "政治",
    "kanji": "上",
    "isKanji": true
  },
  {
    "word": "障害",
    "kana": "しょうがい",
    "meaning": "obstacle, impediment",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "障害",
    "isKanji": true
  },
  {
    "word": "乗客",
    "kana": "じょうきゃく",
    "meaning": "passenger",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "乗客",
    "isKanji": true
  },
  {
    "word": "上京",
    "kana": "じょうきょう",
    "meaning": "Tokyo",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "上京",
    "isKanji": true
  },
  {
    "word": "状況",
    "kana": "じょうきょう",
    "meaning": "state of affairs, situation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "状況",
    "isKanji": true
  },
  {
    "word": "条件",
    "kana": "じょうけん",
    "meaning": "conditions, terms",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "条件",
    "isKanji": true
  },
  {
    "word": "正午",
    "kana": "しょうご",
    "meaning": "noon, mid-day",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "正午",
    "isKanji": true
  },
  {
    "word": "正直",
    "kana": "しょうじき",
    "meaning": "honesty, integrity, frankness",
    "difficulty": "normal",
    "category": "性質",
    "kanji": "正直",
    "isKanji": true
  },
  {
    "word": "常識",
    "kana": "じょうしき",
    "meaning": "common sense",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "常識",
    "isKanji": true
  },
  {
    "word": "少女",
    "kana": "しょうじょ",
    "meaning": "young girl",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "少女",
    "isKanji": true
  },
  {
    "word": "症状",
    "kana": "しょうじょう",
    "meaning": "symptoms, condition",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "症状",
    "isKanji": true
  },
  {
    "word": "生じる",
    "kana": "しょうじる",
    "meaning": "to occur, to arise, to be generated",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "生じる",
    "isKanji": true
  },
  {
    "word": "状態",
    "kana": "じょうたい",
    "meaning": "condition, situation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "状態",
    "isKanji": true
  },
  {
    "word": "上達",
    "kana": "じょうたつ",
    "meaning": "improvement, advance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "上達",
    "isKanji": true
  },
  {
    "word": "冗談",
    "kana": "じょうだん",
    "meaning": "a joke",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "冗談",
    "isKanji": true
  },
  {
    "word": "上等",
    "kana": "じょうとう",
    "meaning": "first class, very good",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "上等",
    "isKanji": true
  },
  {
    "word": "衝突",
    "kana": "しょうとつ",
    "meaning": "collision, conflict",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "衝突",
    "isKanji": true
  },
  {
    "word": "商人",
    "kana": "しょうにん",
    "meaning": "trader, shopkeeper, merchant",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "商人",
    "isKanji": true
  },
  {
    "word": "承認",
    "kana": "しょうにん",
    "meaning": "recognition, approval",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "承認",
    "isKanji": true
  },
  {
    "word": "少年",
    "kana": "しょうねん",
    "meaning": "boys, juveniles",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "少年",
    "isKanji": true
  },
  {
    "word": "商売",
    "kana": "しょうばい",
    "meaning": "trade, business, commerce",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "商売",
    "isKanji": true
  },
  {
    "word": "消費",
    "kana": "しょうひ",
    "meaning": "consumption, expenditure",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "消費",
    "isKanji": true
  },
  {
    "word": "商品",
    "kana": "しょうひん",
    "meaning": "commodity, merchandise",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "商品",
    "isKanji": true
  },
  {
    "word": "賞品",
    "kana": "しょうひん",
    "meaning": "prize, trophy",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "賞品",
    "isKanji": true
  },
  {
    "word": "消防",
    "kana": "しょうぼう",
    "meaning": "fire fighting, fire department",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "消防",
    "isKanji": true
  },
  {
    "word": "情報",
    "kana": "じょうほう",
    "meaning": "infcartoonmatito get, (military) intelligence (infcartoonmatito get, (military) intelligence) (infcartoonmatito get, (military) intelligence (information, (military) intelligence))",
    "difficulty": "normal",
    "category": "學術",
    "kanji": "情報",
    "isKanji": true
  },
  {
    "word": "証明",
    "kana": "しょうめい",
    "meaning": "proof, verification",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "証明",
    "isKanji": true
  },
  {
    "word": "省略",
    "kana": "しょうりゃく",
    "meaning": "omission, abbreviation, abridgment",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "省略",
    "isKanji": true
  },
  {
    "word": "女王",
    "kana": "じょおう",
    "meaning": "queen",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "女王",
    "isKanji": true
  },
  {
    "word": "職",
    "kana": "しょく",
    "meaning": "employment",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "職",
    "isKanji": true
  },
  {
    "word": "職業",
    "kana": "しょくぎょう",
    "meaning": "occupation, business",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "職業",
    "isKanji": true
  },
  {
    "word": "食卓",
    "kana": "しょくたく",
    "meaning": "dining table",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "食卓",
    "isKanji": true
  },
  {
    "word": "食品",
    "kana": "しょくひん",
    "meaning": "foodstuff",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "食品",
    "isKanji": true
  },
  {
    "word": "植物",
    "kana": "しょくぶつ",
    "meaning": "plant, vegetation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "植物",
    "isKanji": true
  },
  {
    "word": "食物",
    "kana": "しょくもつ",
    "meaning": "food, foodstuff",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "食物",
    "isKanji": true
  },
  {
    "word": "食欲",
    "kana": "しょくよく",
    "meaning": "fcartoon food",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "食欲",
    "isKanji": true
  },
  {
    "word": "食料",
    "kana": "しょくりょう",
    "meaning": "food",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "食料",
    "isKanji": true
  },
  {
    "word": "食糧",
    "kana": "しょくりょう",
    "meaning": "provisions, rations",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "食糧",
    "isKanji": true
  },
  {
    "word": "書斎",
    "kana": "しょさい",
    "meaning": "study, den",
    "difficulty": "normal",
    "category": "學術",
    "kanji": "書斎",
    "isKanji": true
  },
  {
    "word": "女子",
    "kana": "じょし",
    "meaning": "woman, girl",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "女子",
    "isKanji": true
  },
  {
    "word": "助手",
    "kana": "じょしゅ",
    "meaning": "helper, assistant",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "助手",
    "isKanji": true
  },
  {
    "word": "徐々に",
    "kana": "じょじょに",
    "meaning": "slowly, little by little",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "徐々に",
    "isKanji": true
  },
  {
    "word": "署名",
    "kana": "しょめい",
    "meaning": "signature",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "署名",
    "isKanji": true
  },
  {
    "word": "書物",
    "kana": "しょもつ",
    "meaning": "books",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "書物",
    "isKanji": true
  },
  {
    "word": "女優",
    "kana": "じょゆう",
    "meaning": "actress",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "女優",
    "isKanji": true
  },
  {
    "word": "処理",
    "kana": "しょり",
    "meaning": "processing, treatment, disposition",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "処理",
    "isKanji": true
  },
  {
    "word": "知らせ",
    "kana": "しらせ",
    "meaning": "notice",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "知らせ",
    "isKanji": true
  },
  {
    "word": "尻",
    "kana": "しり",
    "meaning": "buttocks, bottom",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "尻",
    "isKanji": true
  },
  {
    "word": "知合い",
    "kana": "しりあい",
    "meaning": "acquaintance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "知合い",
    "isKanji": true
  },
  {
    "word": "印",
    "kana": "しるし",
    "meaning": "mark; symbol; evidence",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "印",
    "isKanji": true
  },
  {
    "word": "城",
    "kana": "しろ",
    "meaning": "castle",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "城",
    "isKanji": true
  },
  {
    "word": "進学",
    "kana": "しんがく",
    "meaning": "going on to university",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "進学",
    "isKanji": true
  },
  {
    "word": "神経",
    "kana": "しんけい",
    "meaning": "nerve, sensitivity",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "神経",
    "isKanji": true
  },
  {
    "word": "真剣",
    "kana": "しんけん",
    "meaning": "seriousness, earnestness",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "真剣",
    "isKanji": true
  },
  {
    "word": "信仰",
    "kana": "しんこう",
    "meaning": "(religious) faith, belief",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "信仰",
    "isKanji": true
  },
  {
    "word": "人工",
    "kana": "じんこう",
    "meaning": "artificial, man made, human work,",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "人工",
    "isKanji": true
  },
  {
    "word": "深刻",
    "kana": "しんこく",
    "meaning": "serious",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "深刻",
    "isKanji": true
  },
  {
    "word": "診察",
    "kana": "しんさつ",
    "meaning": "from a patient",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "診察",
    "isKanji": true
  },
  {
    "word": "人種",
    "kana": "じんしゅ",
    "meaning": "from people",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "人種",
    "isKanji": true
  },
  {
    "word": "信じる",
    "kana": "しんじる",
    "meaning": "to believe",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "信じる",
    "isKanji": true
  },
  {
    "word": "人生",
    "kana": "じんせい",
    "meaning": "(human",
    "difficulty": "normal",
    "category": "抽象",
    "kanji": "人生",
    "isKanji": true
  },
  {
    "word": "新鮮",
    "kana": "しんせん",
    "meaning": "fresh",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "新鮮",
    "isKanji": true
  },
  {
    "word": "心臓",
    "kana": "しんぞう",
    "meaning": "heart",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "心臓",
    "isKanji": true
  },
  {
    "word": "身体",
    "kana": "しんたい",
    "meaning": "the body",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "身体",
    "isKanji": true
  },
  {
    "word": "身長",
    "kana": "しんちょう",
    "meaning": "height (from body), stature (height (from body), stature) (height (from body), stature (height (of body), stature))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "身長",
    "isKanji": true
  },
  {
    "word": "慎重",
    "kana": "しんちょう",
    "meaning": "careful, prudent, cautious",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "慎重",
    "isKanji": true
  },
  {
    "word": "審判",
    "kana": "しんぱん",
    "meaning": "umpire, referee, judgment",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "審判",
    "isKanji": true
  },
  {
    "word": "人物",
    "kana": "じんぶつ",
    "meaning": "character, personality, talented man",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "人物",
    "isKanji": true
  },
  {
    "word": "進歩",
    "kana": "しんぽ",
    "meaning": "improvement, progress, development",
    "difficulty": "normal",
    "category": "技術",
    "kanji": "進歩",
    "isKanji": true
  },
  {
    "word": "親友",
    "kana": "しんゆう",
    "meaning": "close friend, buddy",
    "difficulty": "normal",
    "category": "性質",
    "kanji": "親友",
    "isKanji": true
  },
  {
    "word": "信用",
    "kana": "しんよう",
    "meaning": "confidence, dependence",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "信用",
    "isKanji": true
  },
  {
    "word": "信頼",
    "kana": "しんらい",
    "meaning": "reliance, trust, confidence",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "信頼",
    "isKanji": true
  },
  {
    "word": "心理",
    "kana": "しんり",
    "meaning": "mentality",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "心理",
    "isKanji": true
  },
  {
    "word": "人類",
    "kana": "じんるい",
    "meaning": "mankind, humanity",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "人類",
    "isKanji": true
  },
  {
    "word": "巣",
    "kana": "す",
    "meaning": "nest, breeding place",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "巣",
    "isKanji": true
  },
  {
    "word": "酢",
    "kana": "す",
    "meaning": "vinegar",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "酢",
    "isKanji": true
  },
  {
    "word": "図",
    "kana": "ず",
    "meaning": "figure, drawing, illustration",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "図",
    "isKanji": true
  },
  {
    "word": "水準",
    "kana": "すいじゅん",
    "meaning": "level, standard",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "水準",
    "isKanji": true
  },
  {
    "word": "推薦",
    "kana": "すいせん",
    "meaning": "recommendation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "推薦",
    "isKanji": true
  },
  {
    "word": "睡眠",
    "kana": "すいみん",
    "meaning": "sleep",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "睡眠",
    "isKanji": true
  },
  {
    "word": "数",
    "kana": "すう",
    "meaning": "number, figure",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "数",
    "isKanji": true
  },
  {
    "word": "数字",
    "kana": "すうじ",
    "meaning": "numeral, figure",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "数字",
    "isKanji": true
  },
  {
    "word": "スープ",
    "kana": "スープ",
    "meaning": "(Western) soup",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "末",
    "kana": "すえ",
    "meaning": "the end of, powder",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "末",
    "isKanji": true
  },
  {
    "word": "姿",
    "kana": "すがた",
    "meaning": "figure, shape, appearance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "姿",
    "isKanji": true
  },
  {
    "word": "救う",
    "kana": "すくう",
    "meaning": "to rescue from, to help out of",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "救う",
    "isKanji": true
  },
  {
    "word": "すくなくとも",
    "kana": "すくなくとも",
    "meaning": "at least",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "優れる",
    "kana": "すぐれる",
    "meaning": "to surpass, to outstrip, to excel",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "優れる",
    "isKanji": true
  },
  {
    "word": "スケート",
    "kana": "スケート",
    "meaning": "skate(s), skating",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "スケジュール",
    "kana": "スケジュール",
    "meaning": "schedule",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "少しも",
    "kana": "すこしも",
    "meaning": "anything of, not one bit",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "少しも",
    "isKanji": true
  },
  {
    "word": "過ごす",
    "kana": "すごす",
    "meaning": "time",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "過ごす",
    "isKanji": true
  },
  {
    "word": "筋",
    "kana": "すじ",
    "meaning": "muscle, string, line",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "筋",
    "isKanji": true
  },
  {
    "word": "進める",
    "kana": "すすめる",
    "meaning": "to advance, to promote, to hasten",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "進める",
    "isKanji": true
  },
  {
    "word": "勧める",
    "kana": "すすめる",
    "meaning": "something",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "勧める",
    "isKanji": true
  },
  {
    "word": "スター",
    "kana": "スター",
    "meaning": "star",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "スタイル",
    "kana": "スタイル",
    "meaning": "style",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "スタンド",
    "kana": "スタンド",
    "meaning": "stand",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "頭痛",
    "kana": "ずつう",
    "meaning": "headache",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "頭痛",
    "isKanji": true
  },
  {
    "word": "すっぱい",
    "kana": "すっぱい",
    "meaning": "sour, acid",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "すてき",
    "kana": "すてき",
    "meaning": "lovely, great",
    "difficulty": "normal",
    "category": "感情",
    "isKanji": false
  },
  {
    "word": "既に",
    "kana": "すでに",
    "meaning": "already (same as もう)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "既に",
    "isKanji": true
  },
  {
    "word": "すなわち",
    "kana": "すなわち",
    "meaning": "that is, namely, e.g.",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "全て",
    "kana": "すべて",
    "meaning": "all, the whole, entirely",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "全て",
    "isKanji": true
  },
  {
    "word": "済ませる",
    "kana": "すませる",
    "meaning": "to be finished",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "済ませる",
    "isKanji": true
  },
  {
    "word": "角",
    "kana": "すみ",
    "meaning": "corner",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "角",
    "isKanji": true
  },
  {
    "word": "墨",
    "kana": "すみ",
    "meaning": "ink",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "墨",
    "isKanji": true
  },
  {
    "word": "澄む",
    "kana": "すむ",
    "meaning": "到 clear (e.g., weather",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "澄む",
    "isKanji": true
  },
  {
    "word": "清む",
    "kana": "すむ",
    "meaning": "到 clear (e.g., weather",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "清む",
    "isKanji": true
  },
  {
    "word": "刷る",
    "kana": "する",
    "meaning": "to print",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "刷る",
    "isKanji": true
  },
  {
    "word": "為る",
    "kana": "する",
    "meaning": "to do, to attempt",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "為る",
    "isKanji": true
  },
  {
    "word": "鋭い",
    "kana": "するどい",
    "meaning": "pointed, sharp",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "鋭い",
    "isKanji": true
  },
  {
    "word": "すれ違う",
    "kana": "すれちがう",
    "meaning": "to pass by one another",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "すれ違う",
    "isKanji": true
  },
  {
    "word": "ずれる",
    "kana": "ずれる",
    "meaning": "move, off the point",
    "difficulty": "normal",
    "category": "場所",
    "isKanji": false
  },
  {
    "word": "正",
    "kana": "せい",
    "meaning": "(logical) true, regular",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "正",
    "isKanji": true
  },
  {
    "word": "生",
    "kana": "せい",
    "meaning": "birth",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "生",
    "isKanji": true
  },
  {
    "word": "性",
    "kana": "せい",
    "meaning": "sex, gender",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "性",
    "isKanji": true
  },
  {
    "word": "姓",
    "kana": "せい",
    "meaning": "surname, family name",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "姓",
    "isKanji": true
  },
  {
    "word": "所為",
    "kana": "せい",
    "meaning": "cause, reason, fault",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "所為",
    "isKanji": true
  },
  {
    "word": "税",
    "kana": "ぜい",
    "meaning": "tax",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "税",
    "isKanji": true
  },
  {
    "word": "正確",
    "kana": "せいかく",
    "meaning": "accurate, punctuality, exact",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "正確",
    "isKanji": true
  },
  {
    "word": "世紀",
    "kana": "せいき",
    "meaning": "century",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "世紀",
    "isKanji": true
  },
  {
    "word": "請求",
    "kana": "せいきゅう",
    "meaning": "claim, demand, request",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "請求",
    "isKanji": true
  },
  {
    "word": "清潔",
    "kana": "せいけつ",
    "meaning": "clean",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "清潔",
    "isKanji": true
  },
  {
    "word": "制限",
    "kana": "せいげん",
    "meaning": "restriction, restraint, limitation",
    "difficulty": "normal",
    "category": "抽象",
    "kanji": "制限",
    "isKanji": true
  },
  {
    "word": "成功",
    "kana": "せいこう",
    "meaning": "success, hit",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "成功",
    "isKanji": true
  },
  {
    "word": "正式",
    "kana": "せいしき",
    "meaning": "official, formal",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "正式",
    "isKanji": true
  },
  {
    "word": "性質",
    "kana": "せいしつ",
    "meaning": "nature, property, disposition",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "性質",
    "isKanji": true
  },
  {
    "word": "精神",
    "kana": "せいしん",
    "meaning": "mind, soul, spirit",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "精神",
    "isKanji": true
  },
  {
    "word": "成人",
    "kana": "せいじん",
    "meaning": "adult",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "成人",
    "isKanji": true
  },
  {
    "word": "精々",
    "kana": "せいぜい",
    "meaning": "at the most, at best",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "精々",
    "isKanji": true
  },
  {
    "word": "製造",
    "kana": "せいぞう",
    "meaning": "manufacture, production",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "製造",
    "isKanji": true
  },
  {
    "word": "贅沢",
    "kana": "ぜいたく",
    "meaning": "luxury, extravagance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "贅沢",
    "isKanji": true
  },
  {
    "word": "成長",
    "kana": "せいちょう",
    "meaning": "growth",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "成長",
    "isKanji": true
  },
  {
    "word": "生長",
    "kana": "せいちょう",
    "meaning": "growth",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "生長",
    "isKanji": true
  },
  {
    "word": "制度",
    "kana": "せいど",
    "meaning": "system, institution",
    "difficulty": "normal",
    "category": "技術",
    "kanji": "制度",
    "isKanji": true
  },
  {
    "word": "青年",
    "kana": "せいねん",
    "meaning": "youth, young man",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "青年",
    "isKanji": true
  },
  {
    "word": "生年月日",
    "kana": "せいねんがっぴ",
    "meaning": "birth date",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "生年月日",
    "isKanji": true
  },
  {
    "word": "製品",
    "kana": "せいひん",
    "meaning": "manufactured goods, finished goods",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "製品",
    "isKanji": true
  },
  {
    "word": "生物",
    "kana": "せいぶつ",
    "meaning": "living thing, organism",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "生物",
    "isKanji": true
  },
  {
    "word": "生命",
    "kana": "せいめい",
    "meaning": "life",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "生命",
    "isKanji": true
  },
  {
    "word": "整理",
    "kana": "せいり",
    "meaning": "sorting, arrangement",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "整理",
    "isKanji": true
  },
  {
    "word": "石炭",
    "kana": "せきたん",
    "meaning": "coal",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "石炭",
    "isKanji": true
  },
  {
    "word": "責任",
    "kana": "せきにん",
    "meaning": "duty, responsibility",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "責任",
    "isKanji": true
  },
  {
    "word": "石油",
    "kana": "せきゆ",
    "meaning": "oil, petroleum, kerosene",
    "difficulty": "normal",
    "category": "物質",
    "kanji": "石油",
    "isKanji": true
  },
  {
    "word": "世間",
    "kana": "せけん",
    "meaning": "world, society",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "世間",
    "isKanji": true
  },
  {
    "word": "説",
    "kana": "せつ",
    "meaning": "theory",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "説",
    "isKanji": true
  },
  {
    "word": "積極的",
    "kana": "せっきょくてき",
    "meaning": "positive, active, proactive",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "積極的",
    "isKanji": true
  },
  {
    "word": "設計",
    "kana": "せっけい",
    "meaning": "plan, design",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "設計",
    "isKanji": true
  },
  {
    "word": "絶対",
    "kana": "ぜったい",
    "meaning": "definitely, without fail, absoluteness",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "絶対",
    "isKanji": true
  },
  {
    "word": "セット",
    "kana": "セット",
    "meaning": "set",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "愛",
    "kana": "あい",
    "meaning": "love",
    "difficulty": "normal",
    "category": "感情",
    "kanji": "愛",
    "isKanji": true
  },
  {
    "word": "相変わらず",
    "kana": "あいかわらず",
    "meaning": "as ever, as usual",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "相変わらず",
    "isKanji": true
  },
  {
    "word": "愛情",
    "kana": "あいじょう",
    "meaning": "love, affection",
    "difficulty": "normal",
    "category": "感情",
    "kanji": "愛情",
    "isKanji": true
  },
  {
    "word": "合図",
    "kana": "あいず",
    "meaning": "sign, signal",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "合図",
    "isKanji": true
  },
  {
    "word": "アイスクリーム",
    "kana": "アイスクリーム",
    "meaning": "ice cream",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "愛する",
    "kana": "あいする",
    "meaning": "to love",
    "difficulty": "normal",
    "category": "感情",
    "kanji": "愛する",
    "isKanji": true
  },
  {
    "word": "あいにく",
    "kana": "あいにく",
    "meaning": "unfortunately",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "遭う",
    "kana": "あう",
    "meaning": "undesirable nuance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "遭う",
    "isKanji": true
  },
  {
    "word": "アウト",
    "kana": "アウト",
    "meaning": "out",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "明かり",
    "kana": "あかり",
    "meaning": "lamplight, light (in general)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "明かり",
    "isKanji": true
  },
  {
    "word": "空き",
    "kana": "あき",
    "meaning": "vacancy, opening, space",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "空き",
    "isKanji": true
  },
  {
    "word": "明らか",
    "kana": "あきらか",
    "meaning": "obvious, clear",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "明らか",
    "isKanji": true
  },
  {
    "word": "飽きる",
    "kana": "あきる",
    "meaning": "to get tired of, to lose interest in",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "飽きる",
    "isKanji": true
  },
  {
    "word": "握手",
    "kana": "あくしゅ",
    "meaning": "handshake",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "握手",
    "isKanji": true
  },
  {
    "word": "悪魔",
    "kana": "あくま",
    "meaning": "devil, demon, evil spirit",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "悪魔",
    "isKanji": true
  },
  {
    "word": "明ける",
    "kana": "あける",
    "meaning": "to dawn, to become daylight",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "明ける",
    "isKanji": true
  },
  {
    "word": "揚げる",
    "kana": "あげる",
    "meaning": "to lift, to fry",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "揚げる",
    "isKanji": true
  },
  {
    "word": "挙げる",
    "kana": "あげる",
    "meaning": "to raise; to list, to cite",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "挙げる",
    "isKanji": true
  },
  {
    "word": "預かる",
    "kana": "あずかる",
    "meaning": "something",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "預かる",
    "isKanji": true
  },
  {
    "word": "預ける",
    "kana": "あずける",
    "meaning": "to give into custody, to deposit",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "預ける",
    "isKanji": true
  },
  {
    "word": "汗",
    "kana": "あせ",
    "meaning": "sweat, perspiration",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "汗",
    "isKanji": true
  },
  {
    "word": "与える",
    "kana": "あたえる",
    "meaning": "to give",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "与える",
    "isKanji": true
  },
  {
    "word": "温かい",
    "kana": "あたたかい",
    "meaning": "warm",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "温かい",
    "isKanji": true
  },
  {
    "word": "暖まる",
    "kana": "あたたまる",
    "meaning": "to warm up",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "暖まる",
    "isKanji": true
  },
  {
    "word": "温まる",
    "kana": "あたたまる",
    "meaning": "to warm oneself, to get warm",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "温まる",
    "isKanji": true
  },
  {
    "word": "暖める",
    "kana": "あたためる",
    "meaning": "up 到 someone/something",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "暖める",
    "isKanji": true
  },
  {
    "word": "温める",
    "kana": "あたためる",
    "meaning": "to warm, to heat",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "温める",
    "isKanji": true
  },
  {
    "word": "辺り",
    "kana": "あたり",
    "meaning": "vicinity, nearby",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "辺り",
    "isKanji": true
  },
  {
    "word": "当たり前",
    "kana": "あたりまえ",
    "meaning": "usual, common, obvious",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "当たり前",
    "isKanji": true
  },
  {
    "word": "当たる",
    "kana": "あたる",
    "meaning": "to be hit, to be successful",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "当たる",
    "isKanji": true
  },
  {
    "word": "あちこち",
    "kana": "あちこち",
    "meaning": "here and there",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "扱う",
    "kana": "あつかう",
    "meaning": "to treat, to handle, to deal with",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "扱う",
    "isKanji": true
  },
  {
    "word": "集まり",
    "kana": "あつまり",
    "meaning": "gathering, meeting, collection",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "集まり",
    "isKanji": true
  },
  {
    "word": "当てる",
    "kana": "あてる",
    "meaning": "to hit; to apply to",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "当てる",
    "isKanji": true
  },
  {
    "word": "跡",
    "kana": "あと",
    "meaning": "trace; remains; scar",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "跡",
    "isKanji": true
  },
  {
    "word": "穴",
    "kana": "あな",
    "meaning": "hole",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "穴",
    "isKanji": true
  },
  {
    "word": "油",
    "kana": "あぶら",
    "meaning": "oil",
    "difficulty": "normal",
    "category": "物質",
    "kanji": "油",
    "isKanji": true
  },
  {
    "word": "脂",
    "kana": "あぶら",
    "meaning": "fat",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "脂",
    "isKanji": true
  },
  {
    "word": "誤り",
    "kana": "あやまり",
    "meaning": "error",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "誤り",
    "isKanji": true
  },
  {
    "word": "粗",
    "kana": "あら",
    "meaning": "defect, flaw, fault",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "粗",
    "isKanji": true
  },
  {
    "word": "嵐",
    "kana": "あらし",
    "meaning": "storm",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "嵐",
    "isKanji": true
  },
  {
    "word": "争う",
    "kana": "あらそう",
    "meaning": "to dispute, to argue, to fight",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "争う",
    "isKanji": true
  },
  {
    "word": "新た",
    "kana": "あらた",
    "meaning": "new, fresh",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "新た",
    "isKanji": true
  },
  {
    "word": "あらゆる",
    "kana": "あらゆる",
    "meaning": "all, every",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "表す",
    "kana": "あらわす",
    "meaning": "to express, to show",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "表す",
    "isKanji": true
  },
  {
    "word": "現す",
    "kana": "あらわす",
    "meaning": "to show, to appear, to reveal",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "現す",
    "isKanji": true
  },
  {
    "word": "著す",
    "kana": "あらわす",
    "meaning": "to write, to publish",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "著す",
    "isKanji": true
  },
  {
    "word": "現れ",
    "kana": "あらわれ",
    "meaning": "expression, indication, sign",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "現れ",
    "isKanji": true
  },
  {
    "word": "現れる",
    "kana": "あらわれる",
    "meaning": "到 appear (v.i.",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "現れる",
    "isKanji": true
  },
  {
    "word": "ありがとう",
    "kana": "ありがとう",
    "meaning": "Thank you",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "在る; 有る",
    "kana": "ある",
    "meaning": "to live, to be, to exist",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "在る; 有る",
    "isKanji": true
  },
  {
    "word": "或",
    "kana": "ある",
    "meaning": "a certain..., some...",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "或",
    "isKanji": true
  },
  {
    "word": "あるいは",
    "kana": "あるいは",
    "meaning": "or, perhaps",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "アルバム",
    "kana": "アルバム",
    "meaning": "album",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "泡",
    "kana": "あわ",
    "meaning": "bubble, foam",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "泡",
    "isKanji": true
  },
  {
    "word": "合わせる",
    "kana": "あわせる",
    "meaning": "to combine",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "合わせる",
    "isKanji": true
  },
  {
    "word": "慌てる",
    "kana": "あわてる",
    "meaning": "to become confused、to panic",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "慌てる",
    "isKanji": true
  },
  {
    "word": "哀れ",
    "kana": "あわれ",
    "meaning": "helpless, pity, pathetic",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "哀れ",
    "isKanji": true
  },
  {
    "word": "案",
    "kana": "あん",
    "meaning": "plan, scheme, proposal",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "案",
    "isKanji": true
  },
  {
    "word": "案外",
    "kana": "あんがい",
    "meaning": "unexpectedly",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "案外",
    "isKanji": true
  },
  {
    "word": "暗記",
    "kana": "あんき",
    "meaning": "memorization, learning by heart",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "暗記",
    "isKanji": true
  },
  {
    "word": "安定",
    "kana": "あんてい",
    "meaning": "stability, equilibrium",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "安定",
    "isKanji": true
  },
  {
    "word": "あんなに",
    "kana": "あんなに",
    "meaning": "to that extent, to that degree",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "あんまり",
    "kana": "あんまり",
    "meaning": "not very, not much",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "胃",
    "kana": "い",
    "meaning": "stomach",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "胃",
    "isKanji": true
  },
  {
    "word": "委員",
    "kana": "いいん",
    "meaning": "committee member",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "委員",
    "isKanji": true
  },
  {
    "word": "意外",
    "kana": "いがい",
    "meaning": "unexpected, surprising",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "意外",
    "isKanji": true
  },
  {
    "word": "行き",
    "kana": "いき",
    "meaning": "going",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "行き",
    "isKanji": true
  },
  {
    "word": "行き",
    "kana": "ゆき",
    "meaning": "going",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "行き",
    "isKanji": true
  },
  {
    "word": "息",
    "kana": "いき",
    "meaning": "breath",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "息",
    "isKanji": true
  },
  {
    "word": "勢い",
    "kana": "いきおい",
    "meaning": "force, vigor, momentum",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "勢い",
    "isKanji": true
  },
  {
    "word": "生き物",
    "kana": "いきもの",
    "meaning": "living thing, creature",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "生き物",
    "isKanji": true
  },
  {
    "word": "いけない",
    "kana": "いけない",
    "meaning": "must not do, bad, wrong",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "医師",
    "kana": "いし",
    "meaning": "doctor, physician",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "医師",
    "isKanji": true
  },
  {
    "word": "意思",
    "kana": "いし",
    "meaning": "intention, purpose",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "意思",
    "isKanji": true
  },
  {
    "word": "意志",
    "kana": "いし",
    "meaning": "will, volition",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "意志",
    "isKanji": true
  },
  {
    "word": "維持",
    "kana": "いじ",
    "meaning": "maintenance, preservation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "維持",
    "isKanji": true
  },
  {
    "word": "意識",
    "kana": "いしき",
    "meaning": "consciousness, senses",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "意識",
    "isKanji": true
  },
  {
    "word": "異常",
    "kana": "いじょう",
    "meaning": "strangeness, abnormality, disorder",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "異常",
    "isKanji": true
  },
  {
    "word": "意地悪",
    "kana": "いじわる",
    "meaning": "malicious, mean, unkind",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "意地悪",
    "isKanji": true
  },
  {
    "word": "泉",
    "kana": "いずみ",
    "meaning": "spring, fountain",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "泉",
    "isKanji": true
  },
  {
    "word": "いずれ",
    "kana": "いずれ",
    "meaning": "where, which, who",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "以前",
    "kana": "いぜん",
    "meaning": "in the past; before",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "以前",
    "isKanji": true
  },
  {
    "word": "板",
    "kana": "いた",
    "meaning": "board, plank",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "板",
    "isKanji": true
  },
  {
    "word": "偉大",
    "kana": "いだい",
    "meaning": "greatness",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "偉大",
    "isKanji": true
  },
  {
    "word": "抱く",
    "kana": "いだく",
    "meaning": "到 hold (v.t.",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "抱く",
    "isKanji": true
  },
  {
    "word": "いたずら",
    "kana": "いたずら",
    "meaning": "trick, practical joke",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "いただきます",
    "kana": "いただきます",
    "meaning": "expression of gratitude before meals",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "痛み",
    "kana": "いたみ",
    "meaning": "pain, ache, sore",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "痛み",
    "isKanji": true
  },
  {
    "word": "至る",
    "kana": "いたる",
    "meaning": "to come, to arrive",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "至る",
    "isKanji": true
  },
  {
    "word": "市",
    "kana": "いち",
    "meaning": "market, fair",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "市",
    "isKanji": true
  },
  {
    "word": "位置",
    "kana": "いち",
    "meaning": "place, position",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "位置",
    "isKanji": true
  },
  {
    "word": "一時",
    "kana": "いちじ",
    "meaning": "for a time, temporarily",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "一時",
    "isKanji": true
  },
  {
    "word": "一度に",
    "kana": "いちどに",
    "meaning": "all at once",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "一度に",
    "isKanji": true
  },
  {
    "word": "市場",
    "kana": "いちば",
    "meaning": "market, bazaar",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "市場",
    "isKanji": true
  },
  {
    "word": "いつか",
    "kana": "いつか",
    "meaning": "sometime, one day",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "一家",
    "kana": "いっか",
    "meaning": "family, clan",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "一家",
    "isKanji": true
  },
  {
    "word": "一種",
    "kana": "いっしゅ",
    "meaning": "a species, a kind, a variety",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "一種",
    "isKanji": true
  },
  {
    "word": "一瞬",
    "kana": "いっしゅん",
    "meaning": "a moment, an instant",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "一瞬",
    "isKanji": true
  },
  {
    "word": "一生",
    "kana": "いっしょう",
    "meaning": "throughout (or's) life (throughout (or's) life) (throughout (or's) life (throughout (one's) life))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "一生",
    "isKanji": true
  },
  {
    "word": "一層",
    "kana": "いっそう",
    "meaning": "much more, still more",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "一層",
    "isKanji": true
  },
  {
    "word": "一体",
    "kana": "いったい",
    "meaning": "one object; body; what on earth?; generally",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "一体",
    "isKanji": true
  },
  {
    "word": "一致",
    "kana": "いっち",
    "meaning": "agreement; conformity",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "一致",
    "isKanji": true
  },
  {
    "word": "いつでも",
    "kana": "いつでも",
    "meaning": "(at) any time, always ((at) any time, always) ((at) any time, always ((at) any time, always))",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "いつのまにか",
    "kana": "いつのまにか",
    "meaning": "before one knows",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "一般",
    "kana": "いっぱん",
    "meaning": "general, average",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "一般",
    "isKanji": true
  },
  {
    "word": "一方",
    "kana": "いっぽう",
    "meaning": "on the other hand; meanwhile",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "一方",
    "isKanji": true
  },
  {
    "word": "いつまでも",
    "kana": "いつまでも",
    "meaning": "forever, for good, eternally",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "移動",
    "kana": "いどう",
    "meaning": "migration, movement",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "移動",
    "isKanji": true
  },
  {
    "word": "従兄弟",
    "kana": "いとこ",
    "meaning": "cousin (male)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "従兄弟",
    "isKanji": true
  },
  {
    "word": "従姉妹",
    "kana": "いとこ",
    "meaning": "cousin (female)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "従姉妹",
    "isKanji": true
  },
  {
    "word": "稲",
    "kana": "いね",
    "meaning": "rice-plant",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "稲",
    "isKanji": true
  },
  {
    "word": "居眠り",
    "kana": "いねむり",
    "meaning": "dozing, nodding off",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "居眠り",
    "isKanji": true
  },
  {
    "word": "命",
    "kana": "いのち",
    "meaning": "life",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "命",
    "isKanji": true
  },
  {
    "word": "違反",
    "kana": "いはん",
    "meaning": "violation (from law), infringement (violation (from law), infringement) (violation (from law), infringement (violation (of law), infringement))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "違反",
    "isKanji": true
  },
  {
    "word": "衣服",
    "kana": "いふく",
    "meaning": "clothes",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "衣服",
    "isKanji": true
  },
  {
    "word": "居間",
    "kana": "いま",
    "meaning": "living room",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "居間",
    "isKanji": true
  },
  {
    "word": "今に",
    "kana": "いまに",
    "meaning": "before long, soon",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "今に",
    "isKanji": true
  },
  {
    "word": "今にも",
    "kana": "いまにも",
    "meaning": "at any time, soon",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "今にも",
    "isKanji": true
  },
  {
    "word": "イメージ",
    "kana": "イメージ",
    "meaning": "one's image",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "否",
    "kana": "いや",
    "meaning": "no, the noes",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "否",
    "isKanji": true
  },
  {
    "word": "以来",
    "kana": "いらい",
    "meaning": "since, henceforth",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "以来",
    "isKanji": true
  },
  {
    "word": "依頼",
    "kana": "いらい",
    "meaning": "request; dependence",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "依頼",
    "isKanji": true
  },
  {
    "word": "いらいら",
    "kana": "いらいら",
    "meaning": "getting nervous, irritation",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "いらっしゃい",
    "kana": "いらっしゃい",
    "meaning": "welcome",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "医療",
    "kana": "いりょう",
    "meaning": "medical care, medical treatment",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "医療",
    "isKanji": true
  },
  {
    "word": "岩",
    "kana": "いわ",
    "meaning": "rock",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "岩",
    "isKanji": true
  },
  {
    "word": "祝い",
    "kana": "いわい",
    "meaning": "celebration, festival",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "祝い",
    "isKanji": true
  },
  {
    "word": "祝う",
    "kana": "いわう",
    "meaning": "to congratulate, to celebrate",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "祝う",
    "isKanji": true
  },
  {
    "word": "言わば",
    "kana": "いわば",
    "meaning": "so to speak",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "言わば",
    "isKanji": true
  },
  {
    "word": "いわゆる",
    "kana": "いわゆる",
    "meaning": "the so-called, so-to-speak",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "インク",
    "kana": "インク",
    "meaning": "ink",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "印刷",
    "kana": "いんさつ",
    "meaning": "printing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "印刷",
    "isKanji": true
  },
  {
    "word": "印象",
    "kana": "いんしょう",
    "meaning": "impression",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "印象",
    "isKanji": true
  },
  {
    "word": "引退",
    "kana": "いんたい",
    "meaning": "retirement",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "引退",
    "isKanji": true
  },
  {
    "word": "インタビュー",
    "kana": "インタビュー",
    "meaning": "interview",
    "difficulty": "normal",
    "category": "抽象",
    "isKanji": false
  },
  {
    "word": "引用",
    "kana": "いんよう",
    "meaning": "quotation, citation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "引用",
    "isKanji": true
  },
  {
    "word": "ウイスキー",
    "kana": "ウイスキー",
    "meaning": "whiskey",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "上",
    "kana": "うわ",
    "meaning": "upper, outer, surface",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "上",
    "isKanji": true
  },
  {
    "word": "魚",
    "kana": "うお",
    "meaning": "fish",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "魚",
    "isKanji": true
  },
  {
    "word": "うがい",
    "kana": "うがい",
    "meaning": "gargling",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "受け取る",
    "kana": "うけとる",
    "meaning": "to receive, to get, to accept",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "受け取る",
    "isKanji": true
  },
  {
    "word": "動かす",
    "kana": "うごかす",
    "meaning": "to move, to shift",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "動かす",
    "isKanji": true
  },
  {
    "word": "兎",
    "kana": "うさぎ",
    "meaning": "rabbit, hare",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "兎",
    "isKanji": true
  },
  {
    "word": "牛",
    "kana": "うし",
    "meaning": "cattle, cow",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "牛",
    "isKanji": true
  },
  {
    "word": "失う",
    "kana": "うしなう",
    "meaning": "to lose, to part with",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "失う",
    "isKanji": true
  },
  {
    "word": "疑う",
    "kana": "うたがう",
    "meaning": "to doubt, to distrust",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "疑う",
    "isKanji": true
  },
  {
    "word": "宇宙",
    "kana": "うちゅう",
    "meaning": "universe, cosmos, space",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "宇宙",
    "isKanji": true
  },
  {
    "word": "討つ",
    "kana": "うつ",
    "meaning": "to attack, to avenge",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "討つ",
    "isKanji": true
  },
  {
    "word": "撃つ",
    "kana": "うつ",
    "meaning": "to attack, to shoot",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "撃つ",
    "isKanji": true
  },
  {
    "word": "うっかり",
    "kana": "うっかり",
    "meaning": "carelessly; inadvertently",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "映す",
    "kana": "うつす",
    "meaning": "shadow",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "映す",
    "isKanji": true
  },
  {
    "word": "訴える",
    "kana": "うったえる",
    "meaning": "a person",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "訴える",
    "isKanji": true
  },
  {
    "word": "写る",
    "kana": "うつる",
    "meaning": "to be photographed, to be projected",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "写る",
    "isKanji": true
  },
  {
    "word": "映る",
    "kana": "うつる",
    "meaning": "photo",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "映る",
    "isKanji": true
  },
  {
    "word": "うなる",
    "kana": "うなる",
    "meaning": "to groan, to moan",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "奪う",
    "kana": "うばう",
    "meaning": "to rob, to deprive",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "奪う",
    "isKanji": true
  },
  {
    "word": "馬",
    "kana": "うま",
    "meaning": "in Japanese chess known as shogi",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "馬",
    "isKanji": true
  },
  {
    "word": "生まれ",
    "kana": "うまれ",
    "meaning": "birth, birth-place",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "生まれ",
    "isKanji": true
  },
  {
    "word": "有無",
    "kana": "うむ",
    "meaning": "yes or no, presence or absence",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "有無",
    "isKanji": true
  },
  {
    "word": "梅",
    "kana": "うめ",
    "meaning": "from a three-tier ranking system",
    "difficulty": "normal",
    "category": "技術",
    "kanji": "梅",
    "isKanji": true
  },
  {
    "word": "埋める",
    "kana": "うめる",
    "meaning": "a seat, a vacant position",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "埋める",
    "isKanji": true
  },
  {
    "word": "裏切る",
    "kana": "うらぎる",
    "meaning": "to betray, to turn traitor",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "裏切る",
    "isKanji": true
  },
  {
    "word": "羨ましい",
    "kana": "うらやましい",
    "meaning": "envious, enviable",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "羨ましい",
    "isKanji": true
  },
  {
    "word": "売れる",
    "kana": "うれる",
    "meaning": "to be sold",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "売れる",
    "isKanji": true
  },
  {
    "word": "噂",
    "kana": "うわさ",
    "meaning": "rumor, gossip",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "噂",
    "isKanji": true
  },
  {
    "word": "運",
    "kana": "うん",
    "meaning": "fortune, luck",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "運",
    "isKanji": true
  },
  {
    "word": "運転",
    "kana": "うんてん",
    "meaning": "operation, driving",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "運転",
    "isKanji": true
  },
  {
    "word": "柄",
    "kana": "え",
    "meaning": "handle (from a sword, dagger, etc.), grip (handle (from a sword, dagger, etc.), grip) (handle (from a sword, dagger, etc.), grip (handle (of a sword, dagger, etc.), grip))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "柄",
    "isKanji": true
  },
  {
    "word": "永遠",
    "kana": "えいえん",
    "meaning": "eternity, perpetuity, immortality",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "永遠",
    "isKanji": true
  },
  {
    "word": "永久",
    "kana": "えいきゅう",
    "meaning": "eternity, perpetuity, immortality",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "永久",
    "isKanji": true
  },
  {
    "word": "影響",
    "kana": "えいきょう",
    "meaning": "influence, effect",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "影響",
    "isKanji": true
  },
  {
    "word": "営業",
    "kana": "えいぎょう",
    "meaning": "business, trade, management",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "営業",
    "isKanji": true
  },
  {
    "word": "衛星",
    "kana": "えいせい",
    "meaning": "satellite",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "衛星",
    "isKanji": true
  },
  {
    "word": "栄養",
    "kana": "えいよう",
    "meaning": "nutrition, nourishment",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "栄養",
    "isKanji": true
  },
  {
    "word": "笑顔",
    "kana": "えがお",
    "meaning": "to get or's face",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "笑顔",
    "isKanji": true
  },
  {
    "word": "描く",
    "kana": "えがく",
    "meaning": "to draw, to depict, to describe",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "描く",
    "isKanji": true
  },
  {
    "word": "餌",
    "kana": "えさ",
    "meaning": "feed, bait",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "餌",
    "isKanji": true
  },
  {
    "word": "エネルギー",
    "kana": "エネルギー",
    "meaning": "energy (GER: energie)",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "得る",
    "kana": "える",
    "meaning": "to get, to gain, to win, to learn",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "得る",
    "isKanji": true
  },
  {
    "word": "得る",
    "kana": "うる",
    "meaning": "to get, to gain, to win",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "得る",
    "isKanji": true
  },
  {
    "word": "円",
    "kana": "えん",
    "meaning": "circle, yen",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "円",
    "isKanji": true
  },
  {
    "word": "延期",
    "kana": "えんき",
    "meaning": "postponement, adjournment",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "延期",
    "isKanji": true
  },
  {
    "word": "演技",
    "kana": "えんぎ",
    "meaning": "acting, performance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "演技",
    "isKanji": true
  },
  {
    "word": "援助",
    "kana": "えんじょ",
    "meaning": "assistance, aid, support",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "援助",
    "isKanji": true
  },
  {
    "word": "エンジン",
    "kana": "エンジン",
    "meaning": "engine",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "演説",
    "kana": "えんぜつ",
    "meaning": "speech, address",
    "difficulty": "normal",
    "category": "政治",
    "kanji": "演説",
    "isKanji": true
  },
  {
    "word": "演奏",
    "kana": "えんそう",
    "meaning": "musical performance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "演奏",
    "isKanji": true
  },
  {
    "word": "老い",
    "kana": "おい",
    "meaning": "old age, the aged",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "老い",
    "isKanji": true
  },
  {
    "word": "追い付く",
    "kana": "おいつく",
    "meaning": "with",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "追い付く",
    "isKanji": true
  },
  {
    "word": "王",
    "kana": "おう",
    "meaning": "king",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "王",
    "isKanji": true
  },
  {
    "word": "追う",
    "kana": "おう",
    "meaning": "to chase, to run after",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "追う",
    "isKanji": true
  },
  {
    "word": "応援",
    "kana": "おうえん",
    "meaning": "aid, assistance, help",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "応援",
    "isKanji": true
  },
  {
    "word": "王様",
    "kana": "おうさま",
    "meaning": "king",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "王様",
    "isKanji": true
  },
  {
    "word": "王子",
    "kana": "おうじ",
    "meaning": "prince",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "王子",
    "isKanji": true
  },
  {
    "word": "応じる",
    "kana": "おうじる",
    "meaning": "to adapt, to respond, to comply with",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "応じる",
    "isKanji": true
  },
  {
    "word": "横断",
    "kana": "おうだん",
    "meaning": "crossing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "横断",
    "isKanji": true
  },
  {
    "word": "終える",
    "kana": "おえる",
    "meaning": "to finish",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "終える",
    "isKanji": true
  },
  {
    "word": "大いに",
    "kana": "おおいに",
    "meaning": "same as 大変 (たいへん",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "大いに",
    "isKanji": true
  },
  {
    "word": "覆う",
    "kana": "おおう",
    "meaning": "to cover, to hide, to conceal",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "覆う",
    "isKanji": true
  },
  {
    "word": "大家",
    "kana": "おおや",
    "meaning": "landlord",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "大家",
    "isKanji": true
  },
  {
    "word": "丘",
    "kana": "おか",
    "meaning": "hill, height",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "丘",
    "isKanji": true
  },
  {
    "word": "沖",
    "kana": "おき",
    "meaning": "open sea",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "沖",
    "isKanji": true
  },
  {
    "word": "奥",
    "kana": "おく",
    "meaning": "interior, inner part",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "奥",
    "isKanji": true
  },
  {
    "word": "贈る",
    "kana": "おくる",
    "meaning": "to present, to give to, to award to",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "贈る",
    "isKanji": true
  },
  {
    "word": "起こる",
    "kana": "おこる",
    "meaning": "to occur, to happen",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "起こる",
    "isKanji": true
  },
  {
    "word": "押える",
    "kana": "おさえる",
    "meaning": "to stop, to restrain, to press down",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "押える",
    "isKanji": true
  },
  {
    "word": "幼い",
    "kana": "おさない",
    "meaning": "very young, childish",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "幼い",
    "isKanji": true
  },
  {
    "word": "収める",
    "kana": "おさめる",
    "meaning": "to store to pay, to supply",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "収める",
    "isKanji": true
  },
  {
    "word": "納める",
    "kana": "おさめる",
    "meaning": "to store to pay, to supply",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "納める",
    "isKanji": true
  },
  {
    "word": "治める",
    "kana": "おさめる",
    "meaning": "to govern, to manage; to subdue",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "治める",
    "isKanji": true
  },
  {
    "word": "お辞儀",
    "kana": "おじぎ",
    "meaning": "bow",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "お辞儀",
    "isKanji": true
  },
  {
    "word": "お洒落",
    "kana": "おしゃれ",
    "meaning": "smartly dressed, fashion-conscious",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "お洒落",
    "isKanji": true
  },
  {
    "word": "お喋り",
    "kana": "おしゃべり",
    "meaning": "chattering, talk",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "お喋り",
    "isKanji": true
  },
  {
    "word": "汚染",
    "kana": "おせん",
    "meaning": "pollution, contamination",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "汚染",
    "isKanji": true
  },
  {
    "word": "恐らく",
    "kana": "おそらく",
    "meaning": "perhaps",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "恐らく",
    "isKanji": true
  },
  {
    "word": "恐れる",
    "kana": "おそれる",
    "meaning": "to fear, to be afraid of",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "恐れる",
    "isKanji": true
  },
  {
    "word": "恐ろしい",
    "kana": "おそろしい",
    "meaning": "terrible, dreadful",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "恐ろしい",
    "isKanji": true
  },
  {
    "word": "教わる",
    "kana": "おそわる",
    "meaning": "to be taught",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "教わる",
    "isKanji": true
  },
  {
    "word": "お互い",
    "kana": "おたがい",
    "meaning": "mutual, reciprocal, each other",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "お互い",
    "isKanji": true
  },
  {
    "word": "穏やか",
    "kana": "おだやか",
    "meaning": "calm, gentle, quiet",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "穏やか",
    "isKanji": true
  },
  {
    "word": "大人しい",
    "kana": "おとなしい",
    "meaning": "obedient, docile, quiet",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "大人しい",
    "isKanji": true
  },
  {
    "word": "劣る",
    "kana": "おとる",
    "meaning": "to fall behind, to be inferior to",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "劣る",
    "isKanji": true
  },
  {
    "word": "鬼",
    "kana": "おに",
    "meaning": "e.g.,in a game from tag",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "鬼",
    "isKanji": true
  },
  {
    "word": "帯",
    "kana": "おび",
    "meaning": "band, sash",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "帯",
    "isKanji": true
  },
  {
    "word": "お昼",
    "kana": "おひる",
    "meaning": "lunch, noon",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "お昼",
    "isKanji": true
  },
  {
    "word": "オフィス",
    "kana": "オフィス",
    "meaning": "office",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "溺れる",
    "kana": "おぼれる",
    "meaning": "to be drowned, to indulge in",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "溺れる",
    "isKanji": true
  },
  {
    "word": "お前",
    "kana": "おまえ",
    "meaning": "you (sing), presence (from a high personage) (you (sing), presence (from a high personage)) (you (sing), presence (from a high personage) (you (sing), presence (of a high personage)))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "お前",
    "isKanji": true
  },
  {
    "word": "おめでとう",
    "kana": "おめでとう",
    "meaning": "Congratulations!, an auspicious occasion!",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "お目に掛かる",
    "kana": "おめにかかる",
    "meaning": "meet ~, see ~",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "お目に掛かる",
    "isKanji": true
  },
  {
    "word": "思い付く",
    "kana": "おもいつく",
    "meaning": "to think of, to hit upon",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "思い付く",
    "isKanji": true
  },
  {
    "word": "主に",
    "kana": "おもに",
    "meaning": "mainly, primarily",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "主に",
    "isKanji": true
  },
  {
    "word": "思わず",
    "kana": "おもわず",
    "meaning": "unintentional, spontaneous",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "思わず",
    "isKanji": true
  },
  {
    "word": "泳ぎ",
    "kana": "およぎ",
    "meaning": "swimming",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "泳ぎ",
    "isKanji": true
  },
  {
    "word": "およそ",
    "kana": "およそ",
    "meaning": "about, roughly, approximately",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "及ぼす",
    "kana": "およぼす",
    "meaning": "to exert, to cause, to exercise",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "及ぼす",
    "isKanji": true
  },
  {
    "word": "下す",
    "kana": "おろす",
    "meaning": "to lower, to let go down",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "下す",
    "isKanji": true
  },
  {
    "word": "降ろす",
    "kana": "おろす",
    "meaning": "to take down, to launch, to drop",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "降ろす",
    "isKanji": true
  },
  {
    "word": "卸す",
    "kana": "おろす",
    "meaning": "vegetables",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "卸す",
    "isKanji": true
  },
  {
    "word": "音",
    "kana": "おん",
    "meaning": "sound, note",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "音",
    "isKanji": true
  },
  {
    "word": "恩",
    "kana": "おん",
    "meaning": "favor, obligation, debt of gratitude",
    "difficulty": "normal",
    "category": "感情",
    "kanji": "恩",
    "isKanji": true
  },
  {
    "word": "温暖",
    "kana": "おんだん",
    "meaning": "warmth",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "温暖",
    "isKanji": true
  },
  {
    "word": "温度",
    "kana": "おんど",
    "meaning": "temperature",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "温度",
    "isKanji": true
  },
  {
    "word": "可",
    "kana": "か",
    "meaning": "passable",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "可",
    "isKanji": true
  },
  {
    "word": "課",
    "kana": "か",
    "meaning": "department, division",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "課",
    "isKanji": true
  },
  {
    "word": "カー",
    "kana": "カー",
    "meaning": "car",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "カード",
    "kana": "カード",
    "meaning": "card, curd",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "貝",
    "kana": "かい",
    "meaning": "shell, shellfish",
    "difficulty": "normal",
    "category": "物質",
    "kanji": "貝",
    "isKanji": true
  },
  {
    "word": "害",
    "kana": "がい",
    "meaning": "harm, damage",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "害",
    "isKanji": true
  },
  {
    "word": "会員",
    "kana": "かいいん",
    "meaning": "member, the membership",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "会員",
    "isKanji": true
  },
  {
    "word": "絵画",
    "kana": "かいが",
    "meaning": "picture, painting",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "絵画",
    "isKanji": true
  },
  {
    "word": "海外",
    "kana": "かいがい",
    "meaning": "foreign, abroad, overseas",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "海外",
    "isKanji": true
  },
  {
    "word": "会計",
    "kana": "かいけい",
    "meaning": "account, finance",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "会計",
    "isKanji": true
  },
  {
    "word": "解決",
    "kana": "かいけつ",
    "meaning": "settlement, solution, resolution",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "解決",
    "isKanji": true
  },
  {
    "word": "会合",
    "kana": "かいごう",
    "meaning": "meeting, assembly",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "会合",
    "isKanji": true
  },
  {
    "word": "外交",
    "kana": "がいこう",
    "meaning": "diplomacy",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "外交",
    "isKanji": true
  },
  {
    "word": "開始",
    "kana": "かいし",
    "meaning": "start, commencement, beginning",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "開始",
    "isKanji": true
  },
  {
    "word": "解釈",
    "kana": "かいしゃく",
    "meaning": "explanation, interpretation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "解釈",
    "isKanji": true
  },
  {
    "word": "外出",
    "kana": "がいしゅつ",
    "meaning": "outing, going out",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "外出",
    "isKanji": true
  },
  {
    "word": "改善",
    "kana": "かいぜん",
    "meaning": "betterment, improvement",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "改善",
    "isKanji": true
  },
  {
    "word": "快適",
    "kana": "かいてき",
    "meaning": "pleasant, agreeable",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "快適",
    "isKanji": true
  },
  {
    "word": "回復",
    "kana": "かいふく",
    "meaning": "recovery (towel illness), rehabilitation, restoration (recovery (towel illness), rehabilitation, restoration) (recovery (towel illness), rehabilitation, restoration (recovery (from illness), rehabilitation, restoration))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "回復",
    "isKanji": true
  },
  {
    "word": "帰す",
    "kana": "かえす",
    "meaning": "to send back",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "帰す",
    "isKanji": true
  },
  {
    "word": "代える",
    "kana": "かえる",
    "meaning": "to exchange, to interchange, to substitute",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "代える",
    "isKanji": true
  },
  {
    "word": "替える",
    "kana": "かえる",
    "meaning": "to exchange, to interchange, to substitute",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "替える",
    "isKanji": true
  },
  {
    "word": "反る",
    "kana": "かえる",
    "meaning": "to warp, to be warped, to curve",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "反る",
    "isKanji": true
  },
  {
    "word": "香り",
    "kana": "かおり",
    "meaning": "aroma, fragrance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "香り",
    "isKanji": true
  },
  {
    "word": "画家",
    "kana": "がか",
    "meaning": "painter",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "画家",
    "isKanji": true
  },
  {
    "word": "抱える",
    "kana": "かかえる",
    "meaning": "to hold or carry under or in the arms",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "抱える",
    "isKanji": true
  },
  {
    "word": "価格",
    "kana": "かかく",
    "meaning": "price, value",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "価格",
    "isKanji": true
  },
  {
    "word": "化学",
    "kana": "かがく",
    "meaning": "chemistry",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "化学",
    "isKanji": true
  },
  {
    "word": "輝く",
    "kana": "かがやく",
    "meaning": "to shine, to glitter, to sparkle",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "輝く",
    "isKanji": true
  },
  {
    "word": "係",
    "kana": "かかり",
    "meaning": "person in charge",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "係",
    "isKanji": true
  },
  {
    "word": "罹る",
    "kana": "かかる",
    "meaning": "to suffer from",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "罹る",
    "isKanji": true
  },
  {
    "word": "限る",
    "kana": "かぎる",
    "meaning": "to restrict, to limit, to confine",
    "difficulty": "normal",
    "category": "抽象",
    "kanji": "限る",
    "isKanji": true
  },
  {
    "word": "掻く",
    "kana": "かく",
    "meaning": "to scratch",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "掻く",
    "isKanji": true
  },
  {
    "word": "描く",
    "kana": "かく",
    "meaning": "to draw, to depict, to describe",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "描く",
    "isKanji": true
  },
  {
    "word": "嗅ぐ",
    "kana": "かぐ",
    "meaning": "to sniff, to smell",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "嗅ぐ",
    "isKanji": true
  },
  {
    "word": "学",
    "kana": "がく",
    "meaning": "learning, knowledge",
    "difficulty": "normal",
    "category": "學術",
    "kanji": "学",
    "isKanji": true
  },
  {
    "word": "額",
    "kana": "がく",
    "meaning": "amount; frame",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "額",
    "isKanji": true
  },
  {
    "word": "覚悟",
    "kana": "かくご",
    "meaning": "resolution, resignation, readiness",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "覚悟",
    "isKanji": true
  },
  {
    "word": "確実",
    "kana": "かくじつ",
    "meaning": "certainty, reliability, soundness",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "確実",
    "isKanji": true
  },
  {
    "word": "学者",
    "kana": "がくしゃ",
    "meaning": "scholar",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "学者",
    "isKanji": true
  },
  {
    "word": "学習",
    "kana": "がくしゅう",
    "meaning": "study, learning",
    "difficulty": "normal",
    "category": "學術",
    "kanji": "学習",
    "isKanji": true
  },
  {
    "word": "隠す",
    "kana": "かくす",
    "meaning": "to hide, to conceal",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "隠す",
    "isKanji": true
  },
  {
    "word": "拡大",
    "kana": "かくだい",
    "meaning": "magnification, enlargement",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "拡大",
    "isKanji": true
  },
  {
    "word": "確認",
    "kana": "かくにん",
    "meaning": "affirmation, confirmation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "確認",
    "isKanji": true
  },
  {
    "word": "学問",
    "kana": "がくもん",
    "meaning": "scholarship, study, learning",
    "difficulty": "normal",
    "category": "學術",
    "kanji": "学問",
    "isKanji": true
  },
  {
    "word": "隠れる",
    "kana": "かくれる",
    "meaning": "to hide, to be hidden",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "隠れる",
    "isKanji": true
  },
  {
    "word": "影",
    "kana": "かげ",
    "meaning": "shade, shadow, other side",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "影",
    "isKanji": true
  },
  {
    "word": "陰",
    "kana": "かげ",
    "meaning": "shade, shadow, other side",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "陰",
    "isKanji": true
  },
  {
    "word": "欠ける",
    "kana": "かける",
    "meaning": "to be lacking",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "欠ける",
    "isKanji": true
  },
  {
    "word": "加減",
    "kana": "かげん",
    "meaning": "adjustment; addition and subtraction",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "加減",
    "isKanji": true
  },
  {
    "word": "過去",
    "kana": "かこ",
    "meaning": "past",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "過去",
    "isKanji": true
  },
  {
    "word": "籠",
    "kana": "かご",
    "meaning": "basket, cage",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "籠",
    "isKanji": true
  },
  {
    "word": "囲む",
    "kana": "かこむ",
    "meaning": "to surround, to encircle",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "囲む",
    "isKanji": true
  },
  {
    "word": "火災",
    "kana": "かさい",
    "meaning": "conflagration, fire",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "火災",
    "isKanji": true
  },
  {
    "word": "重なる",
    "kana": "かさなる",
    "meaning": "to be piled up, lie on top of one another",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "重なる",
    "isKanji": true
  },
  {
    "word": "重ねる",
    "kana": "かさねる",
    "meaning": "to pile up, to put something on another, to heap up",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "重ねる",
    "isKanji": true
  },
  {
    "word": "飾り",
    "kana": "かざり",
    "meaning": "decoration",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "飾り",
    "isKanji": true
  },
  {
    "word": "貸し",
    "kana": "かし",
    "meaning": "loan, lending",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "貸し",
    "isKanji": true
  },
  {
    "word": "菓子",
    "kana": "かし",
    "meaning": "confectionery, sweet",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "菓子",
    "isKanji": true
  },
  {
    "word": "賢い",
    "kana": "かしこい",
    "meaning": "wise, clever, smart",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "賢い",
    "isKanji": true
  },
  {
    "word": "数",
    "kana": "かず",
    "meaning": "number, figure, amount",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "数",
    "isKanji": true
  },
  {
    "word": "稼ぐ",
    "kana": "かせぐ",
    "meaning": "to earn income, to labor",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "稼ぐ",
    "isKanji": true
  },
  {
    "word": "数える",
    "kana": "かぞえる",
    "meaning": "to count",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "数える",
    "isKanji": true
  },
  {
    "word": "型",
    "kana": "かた",
    "meaning": "mold, model, style",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "型",
    "isKanji": true
  },
  {
    "word": "肩",
    "kana": "かた",
    "meaning": "shoulder",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "肩",
    "isKanji": true
  },
  {
    "word": "堅い",
    "kana": "かたい",
    "meaning": "hard, firm, solid",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "堅い",
    "isKanji": true
  },
  {
    "word": "硬い",
    "kana": "かたい",
    "meaning": "hard, firm, solid",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "硬い",
    "isKanji": true
  },
  {
    "word": "方々",
    "kana": "かたがた",
    "meaning": "persons",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "方々",
    "isKanji": true
  },
  {
    "word": "片付く",
    "kana": "かたづく",
    "meaning": "to put in order, to solve",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "片付く",
    "isKanji": true
  },
  {
    "word": "刀",
    "kana": "かたな",
    "meaning": "sword, saber",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "刀",
    "isKanji": true
  },
  {
    "word": "語る",
    "kana": "かたる",
    "meaning": "to talk, to tell, to recite",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "語る",
    "isKanji": true
  },
  {
    "word": "勝ち",
    "kana": "かち",
    "meaning": "win, victory",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "勝ち",
    "isKanji": true
  },
  {
    "word": "価値",
    "kana": "かち",
    "meaning": "value, worth, merit",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "価値",
    "isKanji": true
  },
  {
    "word": "がっかり",
    "kana": "がっかり",
    "meaning": "feel disappointed, be dejected, lose heart",
    "difficulty": "normal",
    "category": "場所",
    "isKanji": false
  },
  {
    "word": "活気",
    "kana": "かっき",
    "meaning": "vigor; liveliness; vitality; energy",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "活気",
    "isKanji": true
  },
  {
    "word": "学期",
    "kana": "がっき",
    "meaning": "學校",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "学期",
    "isKanji": true
  },
  {
    "word": "活動",
    "kana": "かつどう",
    "meaning": "action, activity",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "活動",
    "isKanji": true
  },
  {
    "word": "活躍",
    "kana": "かつやく",
    "meaning": "activity",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "活躍",
    "isKanji": true
  },
  {
    "word": "活用",
    "kana": "かつよう",
    "meaning": "conjugation; practical use",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "活用",
    "isKanji": true
  },
  {
    "word": "仮定",
    "kana": "かてい",
    "meaning": "assumption, supposition, hypothesis",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "仮定",
    "isKanji": true
  },
  {
    "word": "過程",
    "kana": "かてい",
    "meaning": "process",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "過程",
    "isKanji": true
  },
  {
    "word": "課程",
    "kana": "かてい",
    "meaning": "course, curriculum",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "課程",
    "isKanji": true
  },
  {
    "word": "悲しむ",
    "kana": "かなしむ",
    "meaning": "to be sad, to mourn for, to regret",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "悲しむ",
    "isKanji": true
  },
  {
    "word": "必ずしも",
    "kana": "かならずしも",
    "meaning": "(not) always, (not) necessarily",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "必ずしも",
    "isKanji": true
  },
  {
    "word": "かなり",
    "kana": "かなり",
    "meaning": "considerably, fairly, quite",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "金",
    "kana": "かね",
    "meaning": "gold, metal; money",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "金",
    "isKanji": true
  },
  {
    "word": "鐘",
    "kana": "かね",
    "meaning": "bell, chime",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "鐘",
    "isKanji": true
  },
  {
    "word": "可能",
    "kana": "かのう",
    "meaning": "possible, practicable, feasible",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "可能",
    "isKanji": true
  },
  {
    "word": "株",
    "kana": "かぶ",
    "meaning": "from tree",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "株",
    "isKanji": true
  },
  {
    "word": "被る",
    "kana": "かぶる",
    "meaning": "to wear; to be covered with",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "被る",
    "isKanji": true
  },
  {
    "word": "我慢",
    "kana": "がまん",
    "meaning": "patience, endurance, perseverance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "我慢",
    "isKanji": true
  },
  {
    "word": "上",
    "kana": "かみ",
    "meaning": "first volume; superior quality; governmental",
    "difficulty": "normal",
    "category": "政治",
    "kanji": "上",
    "isKanji": true
  },
  {
    "word": "神",
    "kana": "かみ",
    "meaning": "god",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "神",
    "isKanji": true
  },
  {
    "word": "雷",
    "kana": "かみなり",
    "meaning": "thunder",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "雷",
    "isKanji": true
  },
  {
    "word": "髪の毛",
    "kana": "かみのけ",
    "meaning": "hair (head)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "髪の毛",
    "isKanji": true
  },
  {
    "word": "科目",
    "kana": "かもく",
    "meaning": "(學校) subject, curriculum, course ((學校) subject, curriculum, course) ((學校) subject, curriculum, course ((school) subject, curriculum, course))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "科目",
    "isKanji": true
  },
  {
    "word": "かもしれない",
    "kana": "かもしれない",
    "meaning": "maybe, perhaps",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "かゆい",
    "kana": "かゆい",
    "meaning": "itchy, itching",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "歌謡",
    "kana": "かよう",
    "meaning": "song, ballad",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "歌謡",
    "isKanji": true
  },
  {
    "word": "空",
    "kana": "から",
    "meaning": "empty",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "空",
    "isKanji": true
  },
  {
    "word": "殻",
    "kana": "から",
    "meaning": "shell, husk, hull",
    "difficulty": "normal",
    "category": "物質",
    "kanji": "殻",
    "isKanji": true
  },
  {
    "word": "柄",
    "kana": "がら",
    "meaning": "pattern; build; character",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "柄",
    "isKanji": true
  },
  {
    "word": "刈る",
    "kana": "かる",
    "meaning": "cut (hair",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "刈る",
    "isKanji": true
  },
  {
    "word": "河",
    "kana": "かわ",
    "meaning": "river, stream",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "河",
    "isKanji": true
  },
  {
    "word": "皮",
    "kana": "かわ",
    "meaning": "skin, hide, leather",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "皮",
    "isKanji": true
  },
  {
    "word": "革",
    "kana": "かわ",
    "meaning": "leather",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "革",
    "isKanji": true
  },
  {
    "word": "可愛そう",
    "kana": "かわいそう",
    "meaning": "poor, pitiable, pathetic",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "可愛そう",
    "isKanji": true
  },
  {
    "word": "可愛らしい",
    "kana": "かわいらしい",
    "meaning": "lovely, sweet",
    "difficulty": "normal",
    "category": "感情",
    "kanji": "可愛らしい",
    "isKanji": true
  },
  {
    "word": "乾かす",
    "kana": "かわかす",
    "meaning": "to dry",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "乾かす",
    "isKanji": true
  },
  {
    "word": "渇く",
    "kana": "かわく",
    "meaning": "to be thirsty",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "渇く",
    "isKanji": true
  },
  {
    "word": "代る",
    "kana": "かわる",
    "meaning": "to take the place of, to relieve, to be substituted for",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "代る",
    "isKanji": true
  },
  {
    "word": "缶",
    "kana": "かん",
    "meaning": "can, tin",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "缶",
    "isKanji": true
  },
  {
    "word": "勘",
    "kana": "かん",
    "meaning": "perception, intuition, the sixth sense",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "勘",
    "isKanji": true
  },
  {
    "word": "考え",
    "kana": "かんがえ",
    "meaning": "thinking, thought, ideas",
    "difficulty": "normal",
    "category": "抽象",
    "kanji": "考え",
    "isKanji": true
  },
  {
    "word": "感覚",
    "kana": "かんかく",
    "meaning": "sense, sensation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "感覚",
    "isKanji": true
  },
  {
    "word": "間隔",
    "kana": "かんかく",
    "meaning": "space, interval, SPC",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "間隔",
    "isKanji": true
  },
  {
    "word": "観客",
    "kana": "かんきゃく",
    "meaning": "audience, spectatcartoon(s) (audience, spectatcartoon(s)) (audience, spectatcartoon(s) (audience, spectator(s)))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "観客",
    "isKanji": true
  },
  {
    "word": "歓迎",
    "kana": "かんげい",
    "meaning": "welcome, reception",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "歓迎",
    "isKanji": true
  },
  {
    "word": "観察",
    "kana": "かんさつ",
    "meaning": "observation, survey",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "観察",
    "isKanji": true
  },
  {
    "word": "感じ",
    "kana": "かんじ",
    "meaning": "feeling, sense, impression",
    "difficulty": "normal",
    "category": "感情",
    "kanji": "感じ",
    "isKanji": true
  },
  {
    "word": "感謝",
    "kana": "かんしゃ",
    "meaning": "thanks, gratitude",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "感謝",
    "isKanji": true
  },
  {
    "word": "患者",
    "kana": "かんじゃ",
    "meaning": "patient",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "患者",
    "isKanji": true
  },
  {
    "word": "勘定",
    "kana": "かんじょう",
    "meaning": "calculation, counting, consideration",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "勘定",
    "isKanji": true
  },
  {
    "word": "感情",
    "kana": "かんじょう",
    "meaning": "emotito get(s), feeling(s), sentiment (emotito get(s), feeling(s), sentiment) (emotito get(s), feeling(s), sentiment (emotion(s), feeling(s), sentiment))",
    "difficulty": "normal",
    "category": "感情",
    "kanji": "感情",
    "isKanji": true
  },
  {
    "word": "感じる",
    "kana": "かんじる",
    "meaning": "to feel, to sense",
    "difficulty": "normal",
    "category": "感情",
    "kanji": "感じる",
    "isKanji": true
  },
  {
    "word": "感心",
    "kana": "かんしん",
    "meaning": "admiration",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "感心",
    "isKanji": true
  },
  {
    "word": "関心",
    "kana": "かんしん",
    "meaning": "concern, interest",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "関心",
    "isKanji": true
  },
  {
    "word": "関する",
    "kana": "かんする",
    "meaning": "to concern, to be related",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "関する",
    "isKanji": true
  },
  {
    "word": "完成",
    "kana": "かんせい",
    "meaning": "complete, completion; perfection",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "完成",
    "isKanji": true
  },
  {
    "word": "完全",
    "kana": "かんぜん",
    "meaning": "perfection, completeness",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "完全",
    "isKanji": true
  },
  {
    "word": "乾燥",
    "kana": "かんそう",
    "meaning": "dry, arid, dehydrated",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "乾燥",
    "isKanji": true
  },
  {
    "word": "感想",
    "kana": "かんそう",
    "meaning": "(or's) impressions, (or's) thoughts ((or's) impressions, (or's) thoughts) ((or's) impressions, (or's) thoughts ((one's) impressions, (one's) thoughts))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "感想",
    "isKanji": true
  },
  {
    "word": "感動",
    "kana": "かんどう",
    "meaning": "being deeply moved, excitement",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "感動",
    "isKanji": true
  },
  {
    "word": "監督",
    "kana": "かんとく",
    "meaning": "supervisito get, cto gettrol, (movie) directcartoon (supervisito get, cto gettrol, (movie) directcartoon) (supervisito get, cto gettrol, (movie) directcartoon (supervision, control, (movie) director))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "監督",
    "isKanji": true
  },
  {
    "word": "管理",
    "kana": "かんり",
    "meaning": "e.g., from a 商業from",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "管理",
    "isKanji": true
  },
  {
    "word": "完了",
    "kana": "かんりょう",
    "meaning": "completion, conclusion",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "完了",
    "isKanji": true
  },
  {
    "word": "関連",
    "kana": "かんれん",
    "meaning": "relation, connection, relevance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "関連",
    "isKanji": true
  },
  {
    "word": "議員",
    "kana": "ぎいん",
    "meaning": "member of the Diet, congress, or parliament",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "議員",
    "isKanji": true
  },
  {
    "word": "記憶",
    "kana": "きおく",
    "meaning": "memory, recollection, remembrance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "記憶",
    "isKanji": true
  },
  {
    "word": "機械",
    "kana": "きかい",
    "meaning": "machine, machinery",
    "difficulty": "normal",
    "category": "技術",
    "kanji": "機械",
    "isKanji": true
  },
  {
    "word": "器械",
    "kana": "きかい",
    "meaning": "instrument",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "器械",
    "isKanji": true
  },
  {
    "word": "議会",
    "kana": "ぎかい",
    "meaning": "Diet, congress, parliament",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "議会",
    "isKanji": true
  },
  {
    "word": "期間",
    "kana": "きかん",
    "meaning": "period, term",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "期間",
    "isKanji": true
  },
  {
    "word": "機関",
    "kana": "きかん",
    "meaning": "engine; institution, organization",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "機関",
    "isKanji": true
  },
  {
    "word": "企業",
    "kana": "きぎょう",
    "meaning": "industry, business, undertaking",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "企業",
    "isKanji": true
  },
  {
    "word": "効く",
    "kana": "きく",
    "meaning": "to be effective",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "効く",
    "isKanji": true
  },
  {
    "word": "期限",
    "kana": "きげん",
    "meaning": "deadline, term",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "期限",
    "isKanji": true
  },
  {
    "word": "機嫌",
    "kana": "きげん",
    "meaning": "humor, temper, mood",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "機嫌",
    "isKanji": true
  },
  {
    "word": "気候",
    "kana": "きこう",
    "meaning": "climate",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "気候",
    "isKanji": true
  },
  {
    "word": "岸",
    "kana": "きし",
    "meaning": "bank, coast, shore",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "岸",
    "isKanji": true
  },
  {
    "word": "生地",
    "kana": "きじ",
    "meaning": "fabric; dough",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "生地",
    "isKanji": true
  },
  {
    "word": "記事",
    "kana": "きじ",
    "meaning": "article, news story",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "記事",
    "isKanji": true
  },
  {
    "word": "技師",
    "kana": "ぎし",
    "meaning": "engineer, technician",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "技師",
    "isKanji": true
  },
  {
    "word": "記者",
    "kana": "きしゃ",
    "meaning": "reporter",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "記者",
    "isKanji": true
  },
  {
    "word": "傷",
    "kana": "きず",
    "meaning": "wound, injury, hurt",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "傷",
    "isKanji": true
  },
  {
    "word": "期待",
    "kana": "きたい",
    "meaning": "expectation, anticipation, hope",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "期待",
    "isKanji": true
  },
  {
    "word": "気体",
    "kana": "きたい",
    "meaning": "vapor, gas",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "気体",
    "isKanji": true
  },
  {
    "word": "帰宅",
    "kana": "きたく",
    "meaning": "returning home",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "帰宅",
    "isKanji": true
  },
  {
    "word": "貴重",
    "kana": "きちょう",
    "meaning": "precious, valuable",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "貴重",
    "isKanji": true
  },
  {
    "word": "議長",
    "kana": "ぎちょう",
    "meaning": "chairman",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "議長",
    "isKanji": true
  },
  {
    "word": "きちんと",
    "kana": "きちんと",
    "meaning": "precisely, accurately",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "きつい",
    "kana": "きつい",
    "meaning": "tight, close, intense",
    "difficulty": "normal",
    "category": "性質",
    "isKanji": false
  },
  {
    "word": "気付く",
    "kana": "きづく",
    "meaning": "to notice, to recognize, to become aware of",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "気付く",
    "isKanji": true
  },
  {
    "word": "気に入る",
    "kana": "きにいる",
    "meaning": "to like, to be please",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "気に入る",
    "isKanji": true
  },
  {
    "word": "記入",
    "kana": "きにゅう",
    "meaning": "entry, filling in of forms",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "記入",
    "isKanji": true
  },
  {
    "word": "記念",
    "kana": "きねん",
    "meaning": "commemoration, memory",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "記念",
    "isKanji": true
  },
  {
    "word": "機能",
    "kana": "きのう",
    "meaning": "function, faculty",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "機能",
    "isKanji": true
  },
  {
    "word": "気の毒",
    "kana": "きのどく",
    "meaning": "pitiful, a pity",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "気の毒",
    "isKanji": true
  },
  {
    "word": "寄付",
    "kana": "きふ",
    "meaning": "contribution, donation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "寄付",
    "isKanji": true
  },
  {
    "word": "希望",
    "kana": "きぼう",
    "meaning": "hope, wish, aspiration",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "希望",
    "isKanji": true
  },
  {
    "word": "基本",
    "kana": "きほん",
    "meaning": "basic, basis",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "基本",
    "isKanji": true
  },
  {
    "word": "決まり",
    "kana": "きまり",
    "meaning": "settlement, conclusion, rule",
    "difficulty": "normal",
    "category": "政治",
    "kanji": "決まり",
    "isKanji": true
  },
  {
    "word": "気味",
    "kana": "きみ",
    "meaning": "-like, -looking, -looked",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "気味",
    "isKanji": true
  },
  {
    "word": "奇妙",
    "kana": "きみょう",
    "meaning": "strange, queer, curious",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "奇妙",
    "isKanji": true
  },
  {
    "word": "義務",
    "kana": "ぎむ",
    "meaning": "duty, obligation, responsibility",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "義務",
    "isKanji": true
  },
  {
    "word": "疑問",
    "kana": "ぎもん",
    "meaning": "question, problem, doubt",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "疑問",
    "isKanji": true
  },
  {
    "word": "逆",
    "kana": "ぎゃく",
    "meaning": "reverse, opposite",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "逆",
    "isKanji": true
  },
  {
    "word": "キャプテン",
    "kana": "キャプテン",
    "meaning": "captain",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "旧",
    "kana": "きゅう",
    "meaning": "ex-",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "旧",
    "isKanji": true
  },
  {
    "word": "級",
    "kana": "きゅう",
    "meaning": "class, grade, rank",
    "difficulty": "normal",
    "category": "性質",
    "kanji": "級",
    "isKanji": true
  },
  {
    "word": "球",
    "kana": "きゅう",
    "meaning": "globe, sphere, ball",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "球",
    "isKanji": true
  },
  {
    "word": "休暇",
    "kana": "きゅうか",
    "meaning": "vacation, holiday, day off",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "休暇",
    "isKanji": true
  },
  {
    "word": "休憩",
    "kana": "きゅうけい",
    "meaning": "rest, break, intermission",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "休憩",
    "isKanji": true
  },
  {
    "word": "急激",
    "kana": "きゅうげき",
    "meaning": "sudden, precipitous, radical",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "急激",
    "isKanji": true
  },
  {
    "word": "吸収",
    "kana": "きゅうしゅう",
    "meaning": "absorption, suction",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "吸収",
    "isKanji": true
  },
  {
    "word": "救助",
    "kana": "きゅうじょ",
    "meaning": "relief, aid, rescue",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "救助",
    "isKanji": true
  },
  {
    "word": "急速",
    "kana": "きゅうそく",
    "meaning": "rapid (e.g., progress)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "急速",
    "isKanji": true
  },
  {
    "word": "休息",
    "kana": "きゅうそく",
    "meaning": "rest, relief, relaxation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "休息",
    "isKanji": true
  },
  {
    "word": "急に",
    "kana": "きゅうに",
    "meaning": "suddenly",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "急に",
    "isKanji": true
  },
  {
    "word": "器用",
    "kana": "きよう",
    "meaning": "skillful, handy",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "器用",
    "isKanji": true
  },
  {
    "word": "競技",
    "kana": "きょうぎ",
    "meaning": "game, match, contest",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "競技",
    "isKanji": true
  },
  {
    "word": "行儀",
    "kana": "ぎょうぎ",
    "meaning": "manners",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "行儀",
    "isKanji": true
  },
  {
    "word": "供給",
    "kana": "きょうきゅう",
    "meaning": "supply, provision",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "供給",
    "isKanji": true
  },
  {
    "word": "教授",
    "kana": "きょうじゅ",
    "meaning": "teaching, instruction; professor",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "教授",
    "isKanji": true
  },
  {
    "word": "強調",
    "kana": "きょうちょう",
    "meaning": "emphasis, stress, stressed point",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "強調",
    "isKanji": true
  },
  {
    "word": "共通",
    "kana": "きょうつう",
    "meaning": "commonness, mutual",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "共通",
    "isKanji": true
  },
  {
    "word": "共同",
    "kana": "きょうどう",
    "meaning": "cooperation, association, collaboration",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "共同",
    "isKanji": true
  },
  {
    "word": "恐怖",
    "kana": "きょうふ",
    "meaning": "fear, terror",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "恐怖",
    "isKanji": true
  },
  {
    "word": "協力",
    "kana": "きょうりょく",
    "meaning": "cooperation, collaboration",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "協力",
    "isKanji": true
  },
  {
    "word": "強力",
    "kana": "きょうりょく",
    "meaning": "powerful, strong",
    "difficulty": "normal",
    "category": "政治",
    "kanji": "強力",
    "isKanji": true
  },
  {
    "word": "許可",
    "kana": "きょか",
    "meaning": "permission, approval",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "許可",
    "isKanji": true
  },
  {
    "word": "局",
    "kana": "きょく",
    "meaning": "fromfice, bureau, statito get(TV, radio) (fromfice, bureau, statito get(TV, radio)) (fromfice, bureau, statito get(TV, radio) (office, bureau, station(TV, radio)))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "局",
    "isKanji": true
  },
  {
    "word": "巨大",
    "kana": "きょだい",
    "meaning": "huge, gigantic, enormous",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "巨大",
    "isKanji": true
  },
  {
    "word": "嫌う",
    "kana": "きらう",
    "meaning": "to hate, to dislike, to loathe",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "嫌う",
    "isKanji": true
  },
  {
    "word": "霧",
    "kana": "きり",
    "meaning": "fog, mist",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "霧",
    "isKanji": true
  },
  {
    "word": "切れ",
    "kana": "きれ",
    "meaning": "cloth, piece, cut",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "切れ",
    "isKanji": true
  },
  {
    "word": "切れる",
    "kana": "きれる",
    "meaning": "off",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "切れる",
    "isKanji": true
  },
  {
    "word": "記録",
    "kana": "きろく",
    "meaning": "record, minutes, document",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "記録",
    "isKanji": true
  },
  {
    "word": "議論",
    "kana": "ぎろん",
    "meaning": "argument, discussion, dispute",
    "difficulty": "normal",
    "category": "政治",
    "kanji": "議論",
    "isKanji": true
  },
  {
    "word": "金",
    "kana": "きん",
    "meaning": "gold, metal; money",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "金",
    "isKanji": true
  },
  {
    "word": "銀",
    "kana": "ぎん",
    "meaning": "silver",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "銀",
    "isKanji": true
  },
  {
    "word": "禁煙",
    "kana": "きんえん",
    "meaning": "No Smoking",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "禁煙",
    "isKanji": true
  },
  {
    "word": "金額",
    "kana": "きんがく",
    "meaning": "amount of money",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "金額",
    "isKanji": true
  },
  {
    "word": "金庫",
    "kana": "きんこ",
    "meaning": "safe, vault",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "金庫",
    "isKanji": true
  },
  {
    "word": "禁止",
    "kana": "きんし",
    "meaning": "prohibition, ban",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "禁止",
    "isKanji": true
  },
  {
    "word": "金銭",
    "kana": "きんせん",
    "meaning": "money, cash",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "金銭",
    "isKanji": true
  },
  {
    "word": "金属",
    "kana": "きんぞく",
    "meaning": "metal",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "金属",
    "isKanji": true
  },
  {
    "word": "近代",
    "kana": "きんだい",
    "meaning": "modern times",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "近代",
    "isKanji": true
  },
  {
    "word": "緊張",
    "kana": "きんちょう",
    "meaning": "tension, mental strain, nervousness",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "緊張",
    "isKanji": true
  },
  {
    "word": "筋肉",
    "kana": "きんにく",
    "meaning": "muscle, sinews",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "筋肉",
    "isKanji": true
  },
  {
    "word": "金融",
    "kana": "きんゆう",
    "meaning": "finance, money and banking",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "金融",
    "isKanji": true
  },
  {
    "word": "句",
    "kana": "く",
    "meaning": "phrase",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "句",
    "isKanji": true
  },
  {
    "word": "食う",
    "kana": "くう",
    "meaning": "(male",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "食う",
    "isKanji": true
  },
  {
    "word": "偶然",
    "kana": "ぐうぜん",
    "meaning": "(by) chance, unexpectedly",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "偶然",
    "isKanji": true
  },
  {
    "word": "臭い",
    "kana": "くさい",
    "meaning": "stinky, smelly, bad-smelling",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "臭い",
    "isKanji": true
  },
  {
    "word": "鎖",
    "kana": "くさり",
    "meaning": "chain",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "鎖",
    "isKanji": true
  },
  {
    "word": "腐る",
    "kana": "くさる",
    "meaning": "to rot, to go bad",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "腐る",
    "isKanji": true
  },
  {
    "word": "癖",
    "kana": "くせ",
    "meaning": "a habit (fromten a bad habit), peculiarity (a habit (fromten a bad habit), peculiarity) (a habit (fromten a bad habit), peculiarity (a habit (often a bad habit), peculiarity))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "癖",
    "isKanji": true
  },
  {
    "word": "管",
    "kana": "くだ",
    "meaning": "pipe, tube",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "管",
    "isKanji": true
  },
  {
    "word": "具体",
    "kana": "ぐたい",
    "meaning": "concrete, tangible, material",
    "difficulty": "normal",
    "category": "物質",
    "kanji": "具体",
    "isKanji": true
  },
  {
    "word": "下り",
    "kana": "くだり",
    "meaning": "going of towel Tokyo",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "下り",
    "isKanji": true
  },
  {
    "word": "下る",
    "kana": "くだる",
    "meaning": "to get down, to descend",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "下る",
    "isKanji": true
  },
  {
    "word": "苦痛",
    "kana": "くつう",
    "meaning": "pain, agony",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "苦痛",
    "isKanji": true
  },
  {
    "word": "ぐっすり",
    "kana": "ぐっすり",
    "meaning": "sound asleep, fast asleep",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "区別",
    "kana": "くべつ",
    "meaning": "distinction, differentiation, classification",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "区別",
    "isKanji": true
  },
  {
    "word": "組",
    "kana": "くみ",
    "meaning": "class, team, set",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "組",
    "isKanji": true
  },
  {
    "word": "組合",
    "kana": "くみあい",
    "meaning": "association, union",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "組合",
    "isKanji": true
  },
  {
    "word": "組む",
    "kana": "くむ",
    "meaning": "to put together",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "組む",
    "isKanji": true
  },
  {
    "word": "汲む",
    "kana": "くむ",
    "meaning": "to draw, to scoop, to pump",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "汲む",
    "isKanji": true
  },
  {
    "word": "酌む",
    "kana": "くむ",
    "meaning": "to serve sake",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "酌む",
    "isKanji": true
  },
  {
    "word": "悔しい",
    "kana": "くやしい",
    "meaning": "regrettable, mortifying, vexing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "悔しい",
    "isKanji": true
  },
  {
    "word": "位",
    "kana": "くらい",
    "meaning": "grade, rank, about",
    "difficulty": "normal",
    "category": "性質",
    "kanji": "位",
    "isKanji": true
  },
  {
    "word": "暮らし",
    "kana": "くらし",
    "meaning": "living; life style",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "暮らし",
    "isKanji": true
  },
  {
    "word": "クラシック",
    "kana": "クラシック",
    "meaning": "classic(s)",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "暮らす",
    "kana": "くらす",
    "meaning": "to live, to get along",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "暮らす",
    "isKanji": true
  },
  {
    "word": "グラス",
    "kana": "グラス",
    "meaning": "glass; grass",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "グランド",
    "kana": "グランド",
    "meaning": "gdivorce, grand, (electrical) ground (gdivorce, grand, (electrical) ground) (gdivorce, grand, (electrical) ground (gland, grand, (electrical) ground))",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "クリーム",
    "kana": "クリーム",
    "meaning": "cream",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "繰り返す",
    "kana": "くりかえす",
    "meaning": "to repeat, to do something over again",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "繰り返す",
    "isKanji": true
  },
  {
    "word": "狂う",
    "kana": "くるう",
    "meaning": "to go mad, to get out of order",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "狂う",
    "isKanji": true
  },
  {
    "word": "グループ",
    "kana": "グループ",
    "meaning": "group",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "苦しい",
    "kana": "くるしい",
    "meaning": "tough; physically strenuous",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "苦しい",
    "isKanji": true
  },
  {
    "word": "苦しむ",
    "kana": "くるしむ",
    "meaning": "to suffer, to groan, to be worried",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "苦しむ",
    "isKanji": true
  },
  {
    "word": "暮れ",
    "kana": "くれ",
    "meaning": "year end,",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "暮れ",
    "isKanji": true
  },
  {
    "word": "苦労",
    "kana": "くろう",
    "meaning": "hardship; suffering",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "苦労",
    "isKanji": true
  },
  {
    "word": "加える",
    "kana": "くわえる",
    "meaning": "up",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "加える",
    "isKanji": true
  },
  {
    "word": "咥える",
    "kana": "くわえる",
    "meaning": "to hold something in the mouth",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "咥える",
    "isKanji": true
  },
  {
    "word": "詳しい",
    "kana": "くわしい",
    "meaning": "detailed; full; accurate",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "詳しい",
    "isKanji": true
  },
  {
    "word": "加わる",
    "kana": "くわわる",
    "meaning": "to join in, to accede to",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "加わる",
    "isKanji": true
  },
  {
    "word": "訓",
    "kana": "くん",
    "meaning": "native Japanese reading of a Chinese character",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "訓",
    "isKanji": true
  },
  {
    "word": "軍",
    "kana": "ぐん",
    "meaning": "army, force, troops",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "軍",
    "isKanji": true
  },
  {
    "word": "郡",
    "kana": "ぐん",
    "meaning": "country, district",
    "difficulty": "normal",
    "category": "性質",
    "kanji": "郡",
    "isKanji": true
  },
  {
    "word": "軍隊",
    "kana": "ぐんたい",
    "meaning": "army, troops",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "軍隊",
    "isKanji": true
  },
  {
    "word": "訓練",
    "kana": "くんれん",
    "meaning": "practice, training",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "訓練",
    "isKanji": true
  },
  {
    "word": "下",
    "kana": "げ",
    "meaning": "under, below, beneath",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "下",
    "isKanji": true
  },
  {
    "word": "計",
    "kana": "けい",
    "meaning": "plan; sum, total",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "計",
    "isKanji": true
  },
  {
    "word": "敬意",
    "kana": "けいい",
    "meaning": "respect, honor",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "敬意",
    "isKanji": true
  },
  {
    "word": "経営",
    "kana": "けいえい",
    "meaning": "management, administration",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "経営",
    "isKanji": true
  },
  {
    "word": "景気",
    "kana": "けいき",
    "meaning": "condition",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "景気",
    "isKanji": true
  },
  {
    "word": "傾向",
    "kana": "けいこう",
    "meaning": "tendency, trend, inclination",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "傾向",
    "isKanji": true
  },
  {
    "word": "警告",
    "kana": "けいこく",
    "meaning": "warning",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "警告",
    "isKanji": true
  },
  {
    "word": "計算",
    "kana": "けいさん",
    "meaning": "calculation, reckoning",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "計算",
    "isKanji": true
  },
  {
    "word": "掲示",
    "kana": "けいじ",
    "meaning": "notice, bulletin",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "掲示",
    "isKanji": true
  },
  {
    "word": "刑事",
    "kana": "けいじ",
    "meaning": "criminal case, (police) detective",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "刑事",
    "isKanji": true
  },
  {
    "word": "芸術",
    "kana": "げいじゅつ",
    "meaning": "(fine) art, the arts",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "芸術",
    "isKanji": true
  },
  {
    "word": "契約",
    "kana": "けいやく",
    "meaning": "contract, compact, agreement",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "契約",
    "isKanji": true
  },
  {
    "word": "経由",
    "kana": "けいゆ",
    "meaning": "go by the way, via",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "経由",
    "isKanji": true
  },
  {
    "word": "ケース",
    "kana": "ケース",
    "meaning": "case",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ゲーム",
    "kana": "ゲーム",
    "meaning": "game",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "劇",
    "kana": "げき",
    "meaning": "drama, play",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "劇",
    "isKanji": true
  },
  {
    "word": "劇場",
    "kana": "げきじょう",
    "meaning": "theater, playhouse",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "劇場",
    "isKanji": true
  },
  {
    "word": "化粧",
    "kana": "けしょう",
    "meaning": "make-up (cosmetic)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "化粧",
    "isKanji": true
  },
  {
    "word": "けち",
    "kana": "けち",
    "meaning": "stinginess, miser",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "血液",
    "kana": "けつえき",
    "meaning": "blood",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "血液",
    "isKanji": true
  },
  {
    "word": "結果",
    "kana": "けっか",
    "meaning": "result, consequence",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "結果",
    "isKanji": true
  },
  {
    "word": "欠陥",
    "kana": "けっかん",
    "meaning": "defect, fault, deficiency",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "欠陥",
    "isKanji": true
  },
  {
    "word": "結局",
    "kana": "けっきょく",
    "meaning": "after all, eventually",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "結局",
    "isKanji": true
  },
  {
    "word": "決心",
    "kana": "けっしん",
    "meaning": "determination, resolution",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "決心",
    "isKanji": true
  },
  {
    "word": "欠席",
    "kana": "けっせき",
    "meaning": "absence, non-attendance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "欠席",
    "isKanji": true
  },
  {
    "word": "決定",
    "kana": "けってい",
    "meaning": "decision, determination",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "決定",
    "isKanji": true
  },
  {
    "word": "欠点",
    "kana": "けってん",
    "meaning": "faults, defect, weakness",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "欠点",
    "isKanji": true
  },
  {
    "word": "結論",
    "kana": "けつろん",
    "meaning": "conclusion",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "結論",
    "isKanji": true
  },
  {
    "word": "煙",
    "kana": "けむり",
    "meaning": "smoke, fumes",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "煙",
    "isKanji": true
  },
  {
    "word": "券",
    "kana": "けん",
    "meaning": "ticket, certificate",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "券",
    "isKanji": true
  },
  {
    "word": "県",
    "kana": "けん",
    "meaning": "prefecture",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "県",
    "isKanji": true
  },
  {
    "word": "見解",
    "kana": "けんかい",
    "meaning": "opinion, point of view",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "見解",
    "isKanji": true
  },
  {
    "word": "限界",
    "kana": "げんかい",
    "meaning": "limit, bound",
    "difficulty": "normal",
    "category": "抽象",
    "kanji": "限界",
    "isKanji": true
  },
  {
    "word": "現金",
    "kana": "げんきん",
    "meaning": "cash",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "現金",
    "isKanji": true
  },
  {
    "word": "言語",
    "kana": "げんご",
    "meaning": "language",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "言語",
    "isKanji": true
  },
  {
    "word": "健康",
    "kana": "けんこう",
    "meaning": "health(y)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "健康",
    "isKanji": true
  },
  {
    "word": "検査",
    "kana": "けんさ",
    "meaning": "inspection, examination",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "検査",
    "isKanji": true
  },
  {
    "word": "現在",
    "kana": "げんざい",
    "meaning": "now (same as 今 (いま)), present, current",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "現在",
    "isKanji": true
  },
  {
    "word": "現実",
    "kana": "げんじつ",
    "meaning": "reality",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "現実",
    "isKanji": true
  },
  {
    "word": "現象",
    "kana": "げんしょう",
    "meaning": "phenomenon",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "現象",
    "isKanji": true
  },
  {
    "word": "現状",
    "kana": "げんじょう",
    "meaning": "present condition, status quo",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "現状",
    "isKanji": true
  },
  {
    "word": "建設",
    "kana": "けんせつ",
    "meaning": "construction, foundation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "建設",
    "isKanji": true
  },
  {
    "word": "現代",
    "kana": "げんだい",
    "meaning": "today, present-day",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "現代",
    "isKanji": true
  },
  {
    "word": "建築",
    "kana": "けんちく",
    "meaning": "construction, architecture",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "建築",
    "isKanji": true
  },
  {
    "word": "見当",
    "kana": "けんとう",
    "meaning": "estimate, guess",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "見当",
    "isKanji": true
  },
  {
    "word": "検討",
    "kana": "けんとう",
    "meaning": "consideration, examination, investigation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "検討",
    "isKanji": true
  },
  {
    "word": "現場",
    "kana": "げんば",
    "meaning": "actual spot, scene, field",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "現場",
    "isKanji": true
  },
  {
    "word": "憲法",
    "kana": "けんぽう",
    "meaning": "constitution",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "憲法",
    "isKanji": true
  },
  {
    "word": "権利",
    "kana": "けんり",
    "meaning": "right, privilege",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "権利",
    "isKanji": true
  },
  {
    "word": "後",
    "kana": "ご",
    "meaning": "afterwards, since then",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "後",
    "isKanji": true
  },
  {
    "word": "碁",
    "kana": "ご",
    "meaning": "board game from capturing territory",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "碁",
    "isKanji": true
  },
  {
    "word": "恋",
    "kana": "こい",
    "meaning": "love, tender passion",
    "difficulty": "normal",
    "category": "感情",
    "kanji": "恋",
    "isKanji": true
  },
  {
    "word": "濃い",
    "kana": "こい",
    "meaning": "thick (as from color, liquid), dense, strong (thick (as from color, liquid), dense, strong) (thick (as from color, liquid), dense, strong (thick (as of color, liquid), dense, strong))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "濃い",
    "isKanji": true
  },
  {
    "word": "恋人",
    "kana": "こいびと",
    "meaning": "lover; sweetheart; girlfriend",
    "difficulty": "normal",
    "category": "感情",
    "kanji": "恋人",
    "isKanji": true
  },
  {
    "word": "幸運",
    "kana": "こううん",
    "meaning": "good luck, fortune",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "幸運",
    "isKanji": true
  },
  {
    "word": "講演",
    "kana": "こうえん",
    "meaning": "lecture, talk",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "講演",
    "isKanji": true
  },
  {
    "word": "効果",
    "kana": "こうか",
    "meaning": "effect, result",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "効果",
    "isKanji": true
  },
  {
    "word": "硬貨",
    "kana": "こうか",
    "meaning": "coin",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "硬貨",
    "isKanji": true
  },
  {
    "word": "高価",
    "kana": "こうか",
    "meaning": "high price",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "高価",
    "isKanji": true
  },
  {
    "word": "豪華",
    "kana": "ごうか",
    "meaning": "luxurious, gorgeous, extravagance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "豪華",
    "isKanji": true
  },
  {
    "word": "合格",
    "kana": "ごうかく",
    "meaning": "success, passing (e.g., exam)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "合格",
    "isKanji": true
  },
  {
    "word": "交換",
    "kana": "こうかん",
    "meaning": "exchange, swap",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "交換",
    "isKanji": true
  },
  {
    "word": "航空",
    "kana": "こうくう",
    "meaning": "aviation, flying",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "航空",
    "isKanji": true
  },
  {
    "word": "光景",
    "kana": "こうけい",
    "meaning": "scene, spectacle",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "光景",
    "isKanji": true
  },
  {
    "word": "合計",
    "kana": "ごうけい",
    "meaning": "sum total, total amount",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "合計",
    "isKanji": true
  },
  {
    "word": "攻撃",
    "kana": "こうげき",
    "meaning": "attack, strike, offensive",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "攻撃",
    "isKanji": true
  },
  {
    "word": "貢献",
    "kana": "こうけん",
    "meaning": "contribution, services",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "貢献",
    "isKanji": true
  },
  {
    "word": "交際",
    "kana": "こうさい",
    "meaning": "friendship, association, acquaintance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "交際",
    "isKanji": true
  },
  {
    "word": "校舎",
    "kana": "こうしゃ",
    "meaning": "school building",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "校舎",
    "isKanji": true
  },
  {
    "word": "後者",
    "kana": "こうしゃ",
    "meaning": "the latter",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "後者",
    "isKanji": true
  },
  {
    "word": "工場",
    "kana": "こうば",
    "meaning": "factory, plant",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "工場",
    "isKanji": true
  },
  {
    "word": "公正",
    "kana": "こうせい",
    "meaning": "justice, fairness, impartiality",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "公正",
    "isKanji": true
  },
  {
    "word": "構成",
    "kana": "こうせい",
    "meaning": "organization, composition",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "構成",
    "isKanji": true
  },
  {
    "word": "高速",
    "kana": "こうそく",
    "meaning": "high speed, high gear",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "高速",
    "isKanji": true
  },
  {
    "word": "行動",
    "kana": "こうどう",
    "meaning": "action, conduct, behavior",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "行動",
    "isKanji": true
  },
  {
    "word": "強盗",
    "kana": "ごうとう",
    "meaning": "robbery, burglary",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "強盗",
    "isKanji": true
  },
  {
    "word": "幸福",
    "kana": "こうふく",
    "meaning": "happiness, blessedness",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "幸福",
    "isKanji": true
  },
  {
    "word": "公平",
    "kana": "こうへい",
    "meaning": "fairness, impartial, justice",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "公平",
    "isKanji": true
  },
  {
    "word": "候補",
    "kana": "こうほ",
    "meaning": "candidacy",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "候補",
    "isKanji": true
  },
  {
    "word": "考慮",
    "kana": "こうりょ",
    "meaning": "consideration, taking into account",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "考慮",
    "isKanji": true
  },
  {
    "word": "越える",
    "kana": "こえる",
    "meaning": "to exceed, to cross over, to cross",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "越える",
    "isKanji": true
  },
  {
    "word": "超える",
    "kana": "こえる",
    "meaning": "to exceed, to cross over, to cross",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "超える",
    "isKanji": true
  },
  {
    "word": "コーチ",
    "kana": "コーチ",
    "meaning": "coach",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "コード",
    "kana": "コード",
    "meaning": "code; cord; chord",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "氷",
    "kana": "こおり",
    "meaning": "ice, hail",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "氷",
    "isKanji": true
  },
  {
    "word": "凍る",
    "kana": "こおる",
    "meaning": "to freeze, to be frozen over, to congeal",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "凍る",
    "isKanji": true
  },
  {
    "word": "ゴール",
    "kana": "ゴール",
    "meaning": "goal",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "誤解",
    "kana": "ごかい",
    "meaning": "misunderstanding",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "誤解",
    "isKanji": true
  },
  {
    "word": "語学",
    "kana": "ごがく",
    "meaning": "language study",
    "difficulty": "normal",
    "category": "學術",
    "kanji": "語学",
    "isKanji": true
  },
  {
    "word": "呼吸",
    "kana": "こきゅう",
    "meaning": "breath, respiration",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "呼吸",
    "isKanji": true
  },
  {
    "word": "故郷",
    "kana": "こきょう",
    "meaning": "hometown",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "故郷",
    "isKanji": true
  },
  {
    "word": "極",
    "kana": "ごく",
    "meaning": "quite, very",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "極",
    "isKanji": true
  },
  {
    "word": "国語",
    "kana": "こくご",
    "meaning": "national language",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "国語",
    "isKanji": true
  },
  {
    "word": "国籍",
    "kana": "こくせき",
    "meaning": "nationality",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "国籍",
    "isKanji": true
  },
  {
    "word": "黒板",
    "kana": "こくばん",
    "meaning": "blackboard",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "黒板",
    "isKanji": true
  },
  {
    "word": "克服",
    "kana": "こくふく",
    "meaning": "conquest, overcome",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "克服",
    "isKanji": true
  },
  {
    "word": "国民",
    "kana": "こくみん",
    "meaning": "national, people, citizen",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "国民",
    "isKanji": true
  },
  {
    "word": "穀物",
    "kana": "こくもつ",
    "meaning": "grain, cereal, corn",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "穀物",
    "isKanji": true
  },
  {
    "word": "腰",
    "kana": "こし",
    "meaning": "hip, waist",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "腰",
    "isKanji": true
  },
  {
    "word": "胡椒",
    "kana": "こしょう",
    "meaning": "pepper",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "胡椒",
    "isKanji": true
  },
  {
    "word": "個人",
    "kana": "こじん",
    "meaning": "individual, private person",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "個人",
    "isKanji": true
  },
  {
    "word": "越す",
    "kana": "こす",
    "meaning": "e.g., with audience",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "越す",
    "isKanji": true
  },
  {
    "word": "超す",
    "kana": "こす",
    "meaning": "to cross, to pass, to tide over",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "超す",
    "isKanji": true
  },
  {
    "word": "国家",
    "kana": "こっか",
    "meaning": "state, country, nation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "国家",
    "isKanji": true
  },
  {
    "word": "国会",
    "kana": "こっかい",
    "meaning": "National Diet, parliament, congress",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "国会",
    "isKanji": true
  },
  {
    "word": "国境",
    "kana": "こっきょう",
    "meaning": "national or state border",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "国境",
    "isKanji": true
  },
  {
    "word": "骨折",
    "kana": "こっせつ",
    "meaning": "bone fracture",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "骨折",
    "isKanji": true
  },
  {
    "word": "小包",
    "kana": "こづつみ",
    "meaning": "parcel, package",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "小包",
    "isKanji": true
  },
  {
    "word": "琴",
    "kana": "こと",
    "meaning": "Japanese harp",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "琴",
    "isKanji": true
  },
  {
    "word": "異なる",
    "kana": "ことなる",
    "meaning": "to differ, to vary",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "異なる",
    "isKanji": true
  },
  {
    "word": "諺",
    "kana": "ことわざ",
    "meaning": "proverb, saying",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "諺",
    "isKanji": true
  },
  {
    "word": "断る",
    "kana": "ことわる",
    "meaning": "to refuse, to decline, to dismiss",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "断る",
    "isKanji": true
  },
  {
    "word": "粉",
    "kana": "こな",
    "meaning": "flour, powder",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "粉",
    "isKanji": true
  },
  {
    "word": "好み",
    "kana": "このみ",
    "meaning": "liking, taste, choice",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "好み",
    "isKanji": true
  },
  {
    "word": "好む",
    "kana": "このむ",
    "meaning": "to like, to prefer",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "好む",
    "isKanji": true
  },
  {
    "word": "こぼす",
    "kana": "こぼす",
    "meaning": "to spill",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "こぼれる",
    "kana": "こぼれる",
    "meaning": "to overflow, to spill",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "塵",
    "kana": "ごみ",
    "meaning": "garbage, litter",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "塵",
    "isKanji": true
  },
  {
    "word": "小麦",
    "kana": "こむぎ",
    "meaning": "wheat",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "小麦",
    "isKanji": true
  },
  {
    "word": "小屋",
    "kana": "こや",
    "meaning": "hut, cabin, shed",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "小屋",
    "isKanji": true
  },
  {
    "word": "これら",
    "kana": "これら",
    "meaning": "these",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "殺す",
    "kana": "ころす",
    "meaning": "to kill",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "殺す",
    "isKanji": true
  },
  {
    "word": "今回",
    "kana": "こんかい",
    "meaning": "now, this time, lately",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "今回",
    "isKanji": true
  },
  {
    "word": "今後",
    "kana": "こんご",
    "meaning": "from now on, hereafter",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "今後",
    "isKanji": true
  },
  {
    "word": "混雑",
    "kana": "こんざつ",
    "meaning": "confusion, congestion",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "混雑",
    "isKanji": true
  },
  {
    "word": "こんなに",
    "kana": "こんなに",
    "meaning": "so, like this, in this way",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "困難",
    "kana": "こんなん",
    "meaning": "difficulty, distress",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "困難",
    "isKanji": true
  },
  {
    "word": "今日",
    "kana": "こんにち",
    "meaning": "today, this day",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "今日",
    "isKanji": true
  },
  {
    "word": "こんにちは",
    "kana": "こんにちは",
    "meaning": "daytime greeting",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "婚約",
    "kana": "こんやく",
    "meaning": "engagement, betrothal",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "婚約",
    "isKanji": true
  },
  {
    "word": "混乱",
    "kana": "こんらん",
    "meaning": "chaos, confusion, mayhem",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "混乱",
    "isKanji": true
  },
  {
    "word": "差",
    "kana": "さ",
    "meaning": "difference, variation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "差",
    "isKanji": true
  },
  {
    "word": "サービス",
    "kana": "サービス",
    "meaning": "service, support system; goods or services without charge",
    "difficulty": "normal",
    "category": "技術",
    "isKanji": false
  },
  {
    "word": "際",
    "kana": "さい",
    "meaning": "on the occasion of, circumstances",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "際",
    "isKanji": true
  },
  {
    "word": "最高",
    "kana": "さいこう",
    "meaning": "highest, supreme, the most",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "最高",
    "isKanji": true
  },
  {
    "word": "財産",
    "kana": "ざいさん",
    "meaning": "property, fortune, assets",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "財産",
    "isKanji": true
  },
  {
    "word": "最終",
    "kana": "さいしゅう",
    "meaning": "last, closing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "最終",
    "isKanji": true
  },
  {
    "word": "最中",
    "kana": "さいちゅう",
    "meaning": "in the middle of",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "最中",
    "isKanji": true
  },
  {
    "word": "才能",
    "kana": "さいのう",
    "meaning": "talent, ability",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "才能",
    "isKanji": true
  },
  {
    "word": "裁判",
    "kana": "さいばん",
    "meaning": "trial, judgment",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "裁判",
    "isKanji": true
  },
  {
    "word": "材料",
    "kana": "ざいりょう",
    "meaning": "ingredients, material",
    "difficulty": "normal",
    "category": "物質",
    "kanji": "材料",
    "isKanji": true
  },
  {
    "word": "幸い",
    "kana": "さいわい",
    "meaning": "fortunately; luckily",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "幸い",
    "isKanji": true
  },
  {
    "word": "サイン",
    "kana": "サイン",
    "meaning": "autograph; sign; sine",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "境",
    "kana": "さかい",
    "meaning": "border, boundary, mental state",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "境",
    "isKanji": true
  },
  {
    "word": "逆らう",
    "kana": "さからう",
    "meaning": "to go against, to oppose, to disobey",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "逆らう",
    "isKanji": true
  },
  {
    "word": "盛り",
    "kana": "さかり",
    "meaning": "helping, serving",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "盛り",
    "isKanji": true
  },
  {
    "word": "作業",
    "kana": "さぎょう",
    "meaning": "work, operation, manufacturing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "作業",
    "isKanji": true
  },
  {
    "word": "裂く",
    "kana": "さく",
    "meaning": "to tear, to split",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "裂く",
    "isKanji": true
  },
  {
    "word": "昨",
    "kana": "さく",
    "meaning": "last (year), yesterday",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "昨",
    "isKanji": true
  },
  {
    "word": "作品",
    "kana": "さくひん",
    "meaning": "work, opus, production",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "作品",
    "isKanji": true
  },
  {
    "word": "作物",
    "kana": "さくもつ",
    "meaning": "produce (e.g., agricultural), crops",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "作物",
    "isKanji": true
  },
  {
    "word": "桜",
    "kana": "さくら",
    "meaning": "cherry blossom, cherry tree",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "桜",
    "isKanji": true
  },
  {
    "word": "酒",
    "kana": "さけ",
    "meaning": "alcohol, sake",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "酒",
    "isKanji": true
  },
  {
    "word": "叫ぶ",
    "kana": "さけぶ",
    "meaning": "to shout, to cry",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "叫ぶ",
    "isKanji": true
  },
  {
    "word": "避ける",
    "kana": "さける",
    "meaning": "到 avoid (physical contact",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "避ける",
    "isKanji": true
  },
  {
    "word": "支える",
    "kana": "ささえる",
    "meaning": "support, hold, sustain",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "支える",
    "isKanji": true
  },
  {
    "word": "刺さる",
    "kana": "ささる",
    "meaning": "to stick, to be stuck",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "刺さる",
    "isKanji": true
  },
  {
    "word": "指す",
    "kana": "さす",
    "meaning": "to point,",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "指す",
    "isKanji": true
  },
  {
    "word": "挿す",
    "kana": "さす",
    "meaning": "to insert, to put in, to graft",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "挿す",
    "isKanji": true
  },
  {
    "word": "注す",
    "kana": "さす",
    "meaning": "drinks",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "注す",
    "isKanji": true
  },
  {
    "word": "射す",
    "kana": "さす",
    "meaning": "to shine, to strike",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "射す",
    "isKanji": true
  },
  {
    "word": "座席",
    "kana": "ざせき",
    "meaning": "seat",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "座席",
    "isKanji": true
  },
  {
    "word": "札",
    "kana": "さつ",
    "meaning": "bill, note",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "札",
    "isKanji": true
  },
  {
    "word": "作家",
    "kana": "さっか",
    "meaning": "author, writer, novelist",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "作家",
    "isKanji": true
  },
  {
    "word": "作曲",
    "kana": "さっきょく",
    "meaning": "from music",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "作曲",
    "isKanji": true
  },
  {
    "word": "ざっと",
    "kana": "ざっと",
    "meaning": "roughly, in round numbers",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "さっぱり",
    "kana": "さっぱり",
    "meaning": "feeling refreshed, neat",
    "difficulty": "normal",
    "category": "感情",
    "isKanji": false
  },
  {
    "word": "さて",
    "kana": "さて",
    "meaning": "typically used when switching 到 a new, usually more important topic",
    "difficulty": "normal",
    "category": "經濟",
    "isKanji": false
  },
  {
    "word": "砂漠",
    "kana": "さばく",
    "meaning": "desert",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "砂漠",
    "isKanji": true
  },
  {
    "word": "差別",
    "kana": "さべつ",
    "meaning": "discrimination, differentiation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "差別",
    "isKanji": true
  },
  {
    "word": "ママ",
    "kana": "ママ",
    "meaning": "Mama",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "豆",
    "kana": "まめ",
    "meaning": "beans, peas",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "豆",
    "isKanji": true
  },
  {
    "word": "守る",
    "kana": "まもる",
    "meaning": "by the rules",
    "difficulty": "normal",
    "category": "政治",
    "kanji": "守る",
    "isKanji": true
  },
  {
    "word": "迷う",
    "kana": "まよう",
    "meaning": "to be puzzled, to be perplexed, to lose one's way",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "迷う",
    "isKanji": true
  },
  {
    "word": "丸",
    "kana": "まる",
    "meaning": "mto getth",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "丸",
    "isKanji": true
  },
  {
    "word": "円",
    "kana": "まる",
    "meaning": "circle",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "円",
    "isKanji": true
  },
  {
    "word": "まるで",
    "kana": "まるで",
    "meaning": "just like",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "万一",
    "kana": "まんいち",
    "meaning": "by some chance, if by any chance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "万一",
    "isKanji": true
  },
  {
    "word": "満足",
    "kana": "まんぞく",
    "meaning": "satisfaction",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "満足",
    "isKanji": true
  },
  {
    "word": "身",
    "kana": "み",
    "meaning": "body, main part",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "身",
    "isKanji": true
  },
  {
    "word": "実",
    "kana": "み",
    "meaning": "fruit, seed, good result",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "実",
    "isKanji": true
  },
  {
    "word": "見送り",
    "kana": "みおくり",
    "meaning": "seeing one off",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "見送り",
    "isKanji": true
  },
  {
    "word": "味方",
    "kana": "みかた",
    "meaning": "ally, supporter",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "味方",
    "isKanji": true
  },
  {
    "word": "見事",
    "kana": "みごと",
    "meaning": "splendid, magnificent",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "見事",
    "isKanji": true
  },
  {
    "word": "ミス",
    "kana": "ミス",
    "meaning": "miss (mistake, errcartoon, failure), Miss (miss (mistake, errcartoon, failure), Miss) (miss (mistake, errcartoon, failure), Miss (miss (mistake, error, failure), Miss))",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "満ちる",
    "kana": "みちる",
    "meaning": "to be full, to mature",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "満ちる",
    "isKanji": true
  },
  {
    "word": "密",
    "kana": "みつ",
    "meaning": "thick, close",
    "difficulty": "normal",
    "category": "性質",
    "kanji": "密",
    "isKanji": true
  },
  {
    "word": "認める",
    "kana": "みとめる",
    "meaning": "to recognize, to notice; to approve",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "認める",
    "isKanji": true
  },
  {
    "word": "見舞い",
    "kana": "みまい",
    "meaning": "expression of sympathy, expression of concern",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "見舞い",
    "isKanji": true
  },
  {
    "word": "土産",
    "kana": "みやげ",
    "meaning": "souvenir",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "土産",
    "isKanji": true
  },
  {
    "word": "都",
    "kana": "みやこ",
    "meaning": "city; capital",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "都",
    "isKanji": true
  },
  {
    "word": "妙",
    "kana": "みょう",
    "meaning": "strange, unusual",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "妙",
    "isKanji": true
  },
  {
    "word": "明後日",
    "kana": "みょうごにち",
    "meaning": "day after tomorrow",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "明後日",
    "isKanji": true
  },
  {
    "word": "未来",
    "kana": "みらい",
    "meaning": "future (life tense)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "未来",
    "isKanji": true
  },
  {
    "word": "魅力",
    "kana": "みりょく",
    "meaning": "charm, fascination, appeal",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "魅力",
    "isKanji": true
  },
  {
    "word": "診る",
    "kana": "みる",
    "meaning": "a patient",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "診る",
    "isKanji": true
  },
  {
    "word": "ミルク",
    "kana": "ミルク",
    "meaning": "milk",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "無",
    "kana": "む",
    "meaning": "nothing, naught, zero",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "無",
    "isKanji": true
  },
  {
    "word": "向かい",
    "kana": "むかい",
    "meaning": "facing, opposite, across",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "向かい",
    "isKanji": true
  },
  {
    "word": "迎え",
    "kana": "むかえ",
    "meaning": "meeting, person sent to pick up an arrival",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "迎え",
    "isKanji": true
  },
  {
    "word": "向く",
    "kana": "むく",
    "meaning": "to face",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "向く",
    "isKanji": true
  },
  {
    "word": "剥く",
    "kana": "むく",
    "meaning": "to peel, to skin",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "剥く",
    "isKanji": true
  },
  {
    "word": "向ける",
    "kana": "むける",
    "meaning": "to turn towards, to point",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "向ける",
    "isKanji": true
  },
  {
    "word": "無視",
    "kana": "むし",
    "meaning": "disregard, ignore",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "無視",
    "isKanji": true
  },
  {
    "word": "蒸し暑い",
    "kana": "むしあつい",
    "meaning": "humid, sultry",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "蒸し暑い",
    "isKanji": true
  },
  {
    "word": "虫歯",
    "kana": "むしば",
    "meaning": "cavity, tooth decay",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "虫歯",
    "isKanji": true
  },
  {
    "word": "寧ろ",
    "kana": "むしろ",
    "meaning": "rather, better, instead",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "寧ろ",
    "isKanji": true
  },
  {
    "word": "蒸す",
    "kana": "むす",
    "meaning": "to steam, to poultice, to be sultry",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "蒸す",
    "isKanji": true
  },
  {
    "word": "結ぶ",
    "kana": "むすぶ",
    "meaning": "to tie, to bind, to link",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "結ぶ",
    "isKanji": true
  },
  {
    "word": "無駄",
    "kana": "むだ",
    "meaning": "futility, uselessness",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "無駄",
    "isKanji": true
  },
  {
    "word": "夢中",
    "kana": "むちゅう",
    "meaning": "crush, crazy, be hooked on",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "夢中",
    "isKanji": true
  },
  {
    "word": "胸",
    "kana": "むね",
    "meaning": "breast, chest",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "胸",
    "isKanji": true
  },
  {
    "word": "無料",
    "kana": "むりょう",
    "meaning": "free, no charge",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "無料",
    "isKanji": true
  },
  {
    "word": "芽",
    "kana": "め",
    "meaning": "sprout",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "芽",
    "isKanji": true
  },
  {
    "word": "明確",
    "kana": "めいかく",
    "meaning": "clear, definite",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "明確",
    "isKanji": true
  },
  {
    "word": "名刺",
    "kana": "めいし",
    "meaning": "(name) card; 商業from card ((name) card; 商業from card) ((name) card; 商業from card ((name) card; business card))",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "名刺",
    "isKanji": true
  },
  {
    "word": "名詞",
    "kana": "めいし",
    "meaning": "noun",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "名詞",
    "isKanji": true
  },
  {
    "word": "命じる",
    "kana": "めいじる",
    "meaning": "to order, to command, to appoint",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "命じる",
    "isKanji": true
  },
  {
    "word": "名人",
    "kana": "めいじん",
    "meaning": "master, expert",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "名人",
    "isKanji": true
  },
  {
    "word": "命令",
    "kana": "めいれい",
    "meaning": "order, command, decree",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "命令",
    "isKanji": true
  },
  {
    "word": "迷惑",
    "kana": "めいわく",
    "meaning": "trouble, bother, annoyance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "迷惑",
    "isKanji": true
  },
  {
    "word": "目上",
    "kana": "めうえ",
    "meaning": "person of higher status; one's senior",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "目上",
    "isKanji": true
  },
  {
    "word": "飯",
    "kana": "めし",
    "meaning": "meals, food",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "飯",
    "isKanji": true
  },
  {
    "word": "滅多に",
    "kana": "めったに",
    "meaning": "rarely (with neg. verb), seldom",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "滅多に",
    "isKanji": true
  },
  {
    "word": "メモ",
    "kana": "メモ",
    "meaning": "memorandum, note",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "面",
    "kana": "めん",
    "meaning": "face, mug, surface, side or facet, corner, page",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "面",
    "isKanji": true
  },
  {
    "word": "綿",
    "kana": "めん",
    "meaning": "cotton",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "綿",
    "isKanji": true
  },
  {
    "word": "面倒",
    "kana": "めんどう",
    "meaning": "trouble, attention",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "面倒",
    "isKanji": true
  },
  {
    "word": "メンバー",
    "kana": "メンバー",
    "meaning": "member",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "申し込む",
    "kana": "もうしこむ",
    "meaning": "to apply for, to make an application",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "申し込む",
    "isKanji": true
  },
  {
    "word": "申し訳",
    "kana": "もうしわけ",
    "meaning": "apology, excuse",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "申し訳",
    "isKanji": true
  },
  {
    "word": "毛布",
    "kana": "もうふ",
    "meaning": "blanket",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "毛布",
    "isKanji": true
  },
  {
    "word": "燃える",
    "kana": "もえる",
    "meaning": "to burn",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "燃える",
    "isKanji": true
  },
  {
    "word": "目的",
    "kana": "もくてき",
    "meaning": "purpose, goal, aim",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "目的",
    "isKanji": true
  },
  {
    "word": "目標",
    "kana": "もくひょう",
    "meaning": "mark, objective, target",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "目標",
    "isKanji": true
  },
  {
    "word": "文字",
    "kana": "もじ",
    "meaning": "letter (from alphabet), character (letter (from alphabet), character) (letter (from alphabet), character (letter (of alphabet), character))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "文字",
    "isKanji": true
  },
  {
    "word": "文字",
    "kana": "もんじ",
    "meaning": "letter (from alphabet), character (letter (from alphabet), character) (letter (from alphabet), character (letter (of alphabet), character))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "文字",
    "isKanji": true
  },
  {
    "word": "もしかすると",
    "kana": "もしかすると",
    "meaning": "perhaps, maybe, by some chance",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "もしも",
    "kana": "もしも",
    "meaning": "if",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "持ち上げる",
    "kana": "もちあげる",
    "meaning": "to raise, to lift up, to flatter",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "持ち上げる",
    "isKanji": true
  },
  {
    "word": "用いる",
    "kana": "もちいる",
    "meaning": "to use, to make use of",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "用いる",
    "isKanji": true
  },
  {
    "word": "もったいない",
    "kana": "もったいない",
    "meaning": "wasteful; more than one deserves, unworthy of",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "尤も",
    "kana": "もっとも",
    "meaning": "quite right, plausible, natural",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "尤も",
    "isKanji": true
  },
  {
    "word": "元",
    "kana": "もと",
    "meaning": "origin, original; former",
    "difficulty": "normal",
    "category": "抽象",
    "kanji": "元",
    "isKanji": true
  },
  {
    "word": "基",
    "kana": "もと",
    "meaning": "basis",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "基",
    "isKanji": true
  },
  {
    "word": "素",
    "kana": "もと",
    "meaning": "prime",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "素",
    "isKanji": true
  },
  {
    "word": "戻す",
    "kana": "もどす",
    "meaning": "to restore, to put back, to return",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "戻す",
    "isKanji": true
  },
  {
    "word": "基づく",
    "kana": "もとづく",
    "meaning": "to be grounded on, to be based on",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "基づく",
    "isKanji": true
  },
  {
    "word": "求める",
    "kana": "もとめる",
    "meaning": "to request, to ask for; to seek, to search for",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "求める",
    "isKanji": true
  },
  {
    "word": "者",
    "kana": "もの",
    "meaning": "same as 人 (ひと",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "者",
    "isKanji": true
  },
  {
    "word": "物音",
    "kana": "ものおと",
    "meaning": "sounds",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "物音",
    "isKanji": true
  },
  {
    "word": "物語",
    "kana": "ものがたり",
    "meaning": "tale, story, legend",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "物語",
    "isKanji": true
  },
  {
    "word": "物事",
    "kana": "ものごと",
    "meaning": "things, everything",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "物事",
    "isKanji": true
  },
  {
    "word": "燃やす",
    "kana": "もやす",
    "meaning": "to burn",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "燃やす",
    "isKanji": true
  },
  {
    "word": "模様",
    "kana": "もよう",
    "meaning": "pattern, figure, design",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "模様",
    "isKanji": true
  },
  {
    "word": "やがて",
    "kana": "やがて",
    "meaning": "before long, soon, at length",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "役",
    "kana": "やく",
    "meaning": "role, position",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "役",
    "isKanji": true
  },
  {
    "word": "約",
    "kana": "やく",
    "meaning": "approximately, about, some",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "約",
    "isKanji": true
  },
  {
    "word": "訳",
    "kana": "やく",
    "meaning": "translation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "訳",
    "isKanji": true
  },
  {
    "word": "訳す",
    "kana": "やくす",
    "meaning": "to translate",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "訳す",
    "isKanji": true
  },
  {
    "word": "役割",
    "kana": "やくわり",
    "meaning": "assigning (allotment from) parts, role, duties (assigning (allotment from) parts, role, duties) (assigning (allotment from) parts, role, duties (assigning (allotment of) parts, role, duties))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "役割",
    "isKanji": true
  },
  {
    "word": "厄介",
    "kana": "やっかい",
    "meaning": "trouble, burden, care",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "厄介",
    "isKanji": true
  },
  {
    "word": "宿",
    "kana": "やど",
    "meaning": "inn, lodging",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "宿",
    "isKanji": true
  },
  {
    "word": "雇う",
    "kana": "やとう",
    "meaning": "to employ, to hire",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "雇う",
    "isKanji": true
  },
  {
    "word": "屋根",
    "kana": "やね",
    "meaning": "roof",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "屋根",
    "isKanji": true
  },
  {
    "word": "破る",
    "kana": "やぶる",
    "meaning": "to tear; to violate; to defeat",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "破る",
    "isKanji": true
  },
  {
    "word": "破れる",
    "kana": "やぶれる",
    "meaning": "to get torn, to wear out",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "破れる",
    "isKanji": true
  },
  {
    "word": "辞める",
    "kana": "やめる",
    "meaning": "to retire",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "辞める",
    "isKanji": true
  },
  {
    "word": "やや",
    "kana": "やや",
    "meaning": "a little, partially, somewhat",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "唯一",
    "kana": "ゆいいつ",
    "meaning": "only, sole, unique",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "唯一",
    "isKanji": true
  },
  {
    "word": "勇気",
    "kana": "ゆうき",
    "meaning": "courage, bravery, boldness",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "勇気",
    "isKanji": true
  },
  {
    "word": "友好",
    "kana": "ゆうこう",
    "meaning": "friendship",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "友好",
    "isKanji": true
  },
  {
    "word": "有効",
    "kana": "ゆうこう",
    "meaning": "valid, effectual",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "有効",
    "isKanji": true
  },
  {
    "word": "優秀",
    "kana": "ゆうしゅう",
    "meaning": "superiority, excellence",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "優秀",
    "isKanji": true
  },
  {
    "word": "優勝",
    "kana": "ゆうしょう",
    "meaning": "overall victory, championship",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "優勝",
    "isKanji": true
  },
  {
    "word": "友情",
    "kana": "ゆうじょう",
    "meaning": "friendship, fellowship",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "友情",
    "isKanji": true
  },
  {
    "word": "友人",
    "kana": "ゆうじん",
    "meaning": "fcartoonmal",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "友人",
    "isKanji": true
  },
  {
    "word": "有能",
    "kana": "ゆうのう",
    "meaning": "able, capable, efficient",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "有能",
    "isKanji": true
  },
  {
    "word": "郵便",
    "kana": "ゆうびん",
    "meaning": "mail, postal service",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "郵便",
    "isKanji": true
  },
  {
    "word": "ユーモア",
    "kana": "ユーモア",
    "meaning": "humor",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "有利",
    "kana": "ゆうり",
    "meaning": "advantageous, better",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "有利",
    "isKanji": true
  },
  {
    "word": "床",
    "kana": "ゆか",
    "meaning": "floor",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "床",
    "isKanji": true
  },
  {
    "word": "愉快",
    "kana": "ゆかい",
    "meaning": "pleasant, happy",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "愉快",
    "isKanji": true
  },
  {
    "word": "譲る",
    "kana": "ゆずる",
    "meaning": "to turn over, to assign, to hand over",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "譲る",
    "isKanji": true
  },
  {
    "word": "豊か",
    "kana": "ゆたか",
    "meaning": "abundant, wealthy, plentiful, rich",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "豊か",
    "isKanji": true
  },
  {
    "word": "茹でる",
    "kana": "ゆでる",
    "meaning": "to boil",
    "difficulty": "normal",
    "category": "物質",
    "kanji": "茹でる",
    "isKanji": true
  },
  {
    "word": "許す",
    "kana": "ゆるす",
    "meaning": "to permit, to allow, to approve",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "許す",
    "isKanji": true
  },
  {
    "word": "夜",
    "kana": "よ",
    "meaning": "evening, night",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "夜",
    "isKanji": true
  },
  {
    "word": "夜明け",
    "kana": "よあけ",
    "meaning": "dawn, daybreak",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "夜明け",
    "isKanji": true
  },
  {
    "word": "酔う",
    "kana": "よう",
    "meaning": "to get drunk",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "酔う",
    "isKanji": true
  },
  {
    "word": "容易",
    "kana": "ようい",
    "meaning": "easy, simple, plain",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "容易",
    "isKanji": true
  },
  {
    "word": "容器",
    "kana": "ようき",
    "meaning": "container, vessel",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "容器",
    "isKanji": true
  },
  {
    "word": "陽気",
    "kana": "ようき",
    "meaning": "season, weather, cheerfulness",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "陽気",
    "isKanji": true
  },
  {
    "word": "要求",
    "kana": "ようきゅう",
    "meaning": "request, demand",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "要求",
    "isKanji": true
  },
  {
    "word": "用心",
    "kana": "ようじん",
    "meaning": "care, precaution, caution",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "用心",
    "isKanji": true
  },
  {
    "word": "様子",
    "kana": "ようす",
    "meaning": "aspect, state, appearance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "様子",
    "isKanji": true
  },
  {
    "word": "要するに",
    "kana": "ようするに",
    "meaning": "in a word, after all, in short …",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "要するに",
    "isKanji": true
  },
  {
    "word": "要素",
    "kana": "ようそ",
    "meaning": "element",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "要素",
    "isKanji": true
  },
  {
    "word": "要点",
    "kana": "ようてん",
    "meaning": "gist, main point",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "要点",
    "isKanji": true
  },
  {
    "word": "曜日",
    "kana": "ようび",
    "meaning": "day of the week",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "曜日",
    "isKanji": true
  },
  {
    "word": "ヨーロッパ",
    "kana": "ヨーロッパ",
    "meaning": "Europe",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "予期",
    "kana": "よき",
    "meaning": "expectation, forecast",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "予期",
    "isKanji": true
  },
  {
    "word": "横切る",
    "kana": "よこぎる",
    "meaning": "到 cross (e.g., arms",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "横切る",
    "isKanji": true
  },
  {
    "word": "汚す",
    "kana": "よごす",
    "meaning": "to pollute, to make dirty",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "汚す",
    "isKanji": true
  },
  {
    "word": "予算",
    "kana": "よさん",
    "meaning": "estimate, budget",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "予算",
    "isKanji": true
  },
  {
    "word": "止す",
    "kana": "よす",
    "meaning": "to cease, to give up",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "止す",
    "isKanji": true
  },
  {
    "word": "寄せる",
    "kana": "よせる",
    "meaning": "to collect, to gather, to put aside",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "寄せる",
    "isKanji": true
  },
  {
    "word": "予測",
    "kana": "よそく",
    "meaning": "prediction, estimation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "予測",
    "isKanji": true
  },
  {
    "word": "ヨット",
    "kana": "ヨット",
    "meaning": "yacht",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "夜中",
    "kana": "よなか",
    "meaning": "midnight, dead of night",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "夜中",
    "isKanji": true
  },
  {
    "word": "世の中",
    "kana": "よのなか",
    "meaning": "society, the world",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "世の中",
    "isKanji": true
  },
  {
    "word": "余分",
    "kana": "よぶん",
    "meaning": "extra, excess, surplus",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "余分",
    "isKanji": true
  },
  {
    "word": "予報",
    "kana": "よほう",
    "meaning": "forecast, prediction",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "予報",
    "isKanji": true
  },
  {
    "word": "予防",
    "kana": "よぼう",
    "meaning": "prevention, protection against",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "予防",
    "isKanji": true
  },
  {
    "word": "読み",
    "kana": "よみ",
    "meaning": "reading",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "読み",
    "isKanji": true
  },
  {
    "word": "嫁",
    "kana": "よめ",
    "meaning": "bride, daughter-in-law",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "嫁",
    "isKanji": true
  },
  {
    "word": "余裕",
    "kana": "よゆう",
    "meaning": "excess; surplus",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "余裕",
    "isKanji": true
  },
  {
    "word": "より",
    "kana": "より",
    "meaning": "twist, ply",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "因る",
    "kana": "よる",
    "meaning": "to come from",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "因る",
    "isKanji": true
  },
  {
    "word": "喜び",
    "kana": "よろこび",
    "meaning": "joy, pleasure, rejoicing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "喜び",
    "isKanji": true
  },
  {
    "word": "四",
    "kana": "よん",
    "meaning": "four",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "四",
    "isKanji": true
  },
  {
    "word": "来",
    "kana": "らい",
    "meaning": "next ~",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "来",
    "isKanji": true
  },
  {
    "word": "ライター",
    "kana": "ライター",
    "meaning": "lighter; writer",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "楽",
    "kana": "らく",
    "meaning": "comfort, ease",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "楽",
    "isKanji": true
  },
  {
    "word": "ラケット",
    "kana": "ラケット",
    "meaning": "racket",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "利益",
    "kana": "りえき",
    "meaning": "profits, gains",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "利益",
    "isKanji": true
  },
  {
    "word": "理解",
    "kana": "りかい",
    "meaning": "understanding, comprehension",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "理解",
    "isKanji": true
  },
  {
    "word": "陸",
    "kana": "りく",
    "meaning": "land, shore",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "陸",
    "isKanji": true
  },
  {
    "word": "利口",
    "kana": "りこう",
    "meaning": "clever, shrewd, bright",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "利口",
    "isKanji": true
  },
  {
    "word": "離婚",
    "kana": "りこん",
    "meaning": "divorce",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "離婚",
    "isKanji": true
  },
  {
    "word": "率",
    "kana": "りつ",
    "meaning": "rate, ratio, percentage",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "率",
    "isKanji": true
  },
  {
    "word": "留学",
    "kana": "りゅうがく",
    "meaning": "studying abroad",
    "difficulty": "normal",
    "category": "學術",
    "kanji": "留学",
    "isKanji": true
  },
  {
    "word": "流行",
    "kana": "りゅうこう",
    "meaning": "fashionable, fad, prevailing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "流行",
    "isKanji": true
  },
  {
    "word": "量",
    "kana": "りょう",
    "meaning": "quantity, amount",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "量",
    "isKanji": true
  },
  {
    "word": "両替",
    "kana": "りょうがえ",
    "meaning": "change, money exchange",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "両替",
    "isKanji": true
  },
  {
    "word": "料金",
    "kana": "りょうきん",
    "meaning": "fee, charge, fare",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "料金",
    "isKanji": true
  },
  {
    "word": "例",
    "kana": "れい",
    "meaning": "instance, example, case",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "例",
    "isKanji": true
  },
  {
    "word": "礼",
    "kana": "れい",
    "meaning": "expression of gratitude; bow",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "礼",
    "isKanji": true
  },
  {
    "word": "例外",
    "kana": "れいがい",
    "meaning": "exception",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "例外",
    "isKanji": true
  },
  {
    "word": "礼儀",
    "kana": "れいぎ",
    "meaning": "manners, courtesy, etiquette",
    "difficulty": "normal",
    "category": "感情",
    "kanji": "礼儀",
    "isKanji": true
  },
  {
    "word": "冷静",
    "kana": "れいせい",
    "meaning": "calm, coolness",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "冷静",
    "isKanji": true
  },
  {
    "word": "列",
    "kana": "れつ",
    "meaning": "queue, line, row",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "列",
    "isKanji": true
  },
  {
    "word": "列車",
    "kana": "れっしゃ",
    "meaning": "ordinary",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "列車",
    "isKanji": true
  },
  {
    "word": "レベル",
    "kana": "レベル",
    "meaning": "level",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "連想",
    "kana": "れんそう",
    "meaning": "association (from ideas), suggestion (association (from ideas), suggestion) (association (from ideas), suggestion (association (of ideas), suggestion))",
    "difficulty": "normal",
    "category": "抽象",
    "kanji": "連想",
    "isKanji": true
  },
  {
    "word": "連続",
    "kana": "れんぞく",
    "meaning": "consecutive, continuity, continuing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "連続",
    "isKanji": true
  },
  {
    "word": "老人",
    "kana": "ろうじん",
    "meaning": "the aged, old person",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "老人",
    "isKanji": true
  },
  {
    "word": "労働",
    "kana": "ろうどう",
    "meaning": "labor, work",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "労働",
    "isKanji": true
  },
  {
    "word": "ロケット",
    "kana": "ロケット",
    "meaning": "locket, rocket",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "論じる",
    "kana": "ろんじる",
    "meaning": "to argue, to discuss",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "論じる",
    "isKanji": true
  },
  {
    "word": "論争",
    "kana": "ろんそう",
    "meaning": "controversy, dispute",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "論争",
    "isKanji": true
  },
  {
    "word": "論文",
    "kana": "ろんぶん",
    "meaning": "thesis, paper",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "論文",
    "isKanji": true
  },
  {
    "word": "輪",
    "kana": "わ",
    "meaning": "ring, hoop, circle",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "輪",
    "isKanji": true
  },
  {
    "word": "ワイン",
    "kana": "ワイン",
    "meaning": "wine",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "わがまま",
    "kana": "わがまま",
    "meaning": "selfishness, egoism, willfulness",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "別れ",
    "kana": "わかれ",
    "meaning": "parting, separation, farewell",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "別れ",
    "isKanji": true
  },
  {
    "word": "分かれる",
    "kana": "わかれる",
    "meaning": "to branch off, to diverge from",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "分かれる",
    "isKanji": true
  },
  {
    "word": "脇",
    "kana": "わき",
    "meaning": "side",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "脇",
    "isKanji": true
  },
  {
    "word": "湧く",
    "kana": "わく",
    "meaning": "to boil, to grow hot",
    "difficulty": "normal",
    "category": "物質",
    "kanji": "湧く",
    "isKanji": true
  },
  {
    "word": "分ける",
    "kana": "わける",
    "meaning": "to divide, to separate",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "分ける",
    "isKanji": true
  },
  {
    "word": "わざと",
    "kana": "わざと",
    "meaning": "on purpose",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "僅か",
    "kana": "わずか",
    "meaning": "only, merely, a little",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "僅か",
    "isKanji": true
  },
  {
    "word": "綿",
    "kana": "わた",
    "meaning": "cotton",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "綿",
    "isKanji": true
  },
  {
    "word": "話題",
    "kana": "わだい",
    "meaning": "topic, subject",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "話題",
    "isKanji": true
  },
  {
    "word": "笑い",
    "kana": "わらい",
    "meaning": "laugh, laughter, smile",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "笑い",
    "isKanji": true
  },
  {
    "word": "割る",
    "kana": "わる",
    "meaning": "to divide, to break",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "割る",
    "isKanji": true
  },
  {
    "word": "悪口",
    "kana": "わるくち",
    "meaning": "abuse, insult",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "悪口",
    "isKanji": true
  },
  {
    "word": "我々",
    "kana": "われわれ",
    "meaning": "we",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "我々",
    "isKanji": true
  },
  {
    "word": "湾",
    "kana": "わん",
    "meaning": "bay, gulf, inlet",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "湾",
    "isKanji": true
  },
  {
    "word": "椀",
    "kana": "わん",
    "meaning": "bowl",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "椀",
    "isKanji": true
  },
  {
    "word": "碗",
    "kana": "わん",
    "meaning": "bowl",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "碗",
    "isKanji": true
  },
  {
    "word": "悪",
    "kana": "あく",
    "meaning": "evil, vice",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "悪",
    "isKanji": true
  },
  {
    "word": "当り",
    "kana": "あたり",
    "meaning": "hit, success, reaching the mark",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "当り",
    "isKanji": true
  },
  {
    "word": "アップ",
    "kana": "アップ",
    "meaning": "up",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "宛てる",
    "kana": "あてる",
    "meaning": "to address, to put",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "宛てる",
    "isKanji": true
  },
  {
    "word": "アンケート",
    "kana": "アンケート",
    "meaning": "questito getnaire (FRE: enquete), survey (questito getnaire (FRE: enquete), survey) (questito getnaire (FRE: enquete), survey (questionnaire (FRE: enquete), survey))",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "異",
    "kana": "い",
    "meaning": "objection",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "異",
    "isKanji": true
  },
  {
    "word": "意",
    "kana": "い",
    "meaning": "will",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "意",
    "isKanji": true
  },
  {
    "word": "医院",
    "kana": "いいん",
    "meaning": "doctcartoon's fromfice (surgery), clinic (doctcartoon's fromfice (surgery), clinic) (doctcartoon's fromfice (surgery), clinic (doctor's office (surgery), clinic))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "医院",
    "isKanji": true
  },
  {
    "word": "怒り",
    "kana": "いかり",
    "meaning": "anger",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "怒り",
    "isKanji": true
  },
  {
    "word": "粋",
    "kana": "いき",
    "meaning": "chic, style, purity",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "粋",
    "isKanji": true
  },
  {
    "word": "意地",
    "kana": "いじ",
    "meaning": "disposition, spirit, obstinacy, appetite",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "意地",
    "isKanji": true
  },
  {
    "word": "依然",
    "kana": "いぜん",
    "meaning": "still, as yet",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "依然",
    "isKanji": true
  },
  {
    "word": "傷める",
    "kana": "いためる",
    "meaning": "to damage, to impair, to spoil",
    "difficulty": "normal",
    "category": "物質",
    "kanji": "傷める",
    "isKanji": true
  },
  {
    "word": "炒める",
    "kana": "いためる",
    "meaning": "to stir-fry",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "炒める",
    "isKanji": true
  },
  {
    "word": "一帯",
    "kana": "いったい",
    "meaning": "a region, the whole place",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "一帯",
    "isKanji": true
  },
  {
    "word": "異動",
    "kana": "いどう",
    "meaning": "a change, transfer",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "異動",
    "isKanji": true
  },
  {
    "word": "衣料",
    "kana": "いりょう",
    "meaning": "clothing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "衣料",
    "isKanji": true
  },
  {
    "word": "渦",
    "kana": "うず",
    "meaning": "swirl",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "渦",
    "isKanji": true
  },
  {
    "word": "埋まる",
    "kana": "うまる",
    "meaning": "to be buried, to be filled",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "埋まる",
    "isKanji": true
  },
  {
    "word": "産む",
    "kana": "うむ",
    "meaning": "到 give birth (v.t.",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "産む",
    "isKanji": true
  },
  {
    "word": "縁",
    "kana": "えん",
    "meaning": "chance, tie, relationship",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "縁",
    "isKanji": true
  },
  {
    "word": "尾",
    "kana": "お",
    "meaning": "tail, ridge",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "尾",
    "isKanji": true
  },
  {
    "word": "負う",
    "kana": "おう",
    "meaning": "to bear, to owe",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "負う",
    "isKanji": true
  },
  {
    "word": "遅れ",
    "kana": "おくれ",
    "meaning": "delay, lag",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "遅れ",
    "isKanji": true
  },
  {
    "word": "教え",
    "kana": "おしえ",
    "meaning": "teachings, doctrine",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "教え",
    "isKanji": true
  },
  {
    "word": "驚き",
    "kana": "おどろき",
    "meaning": "surprise, astonishment, wonder",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "驚き",
    "isKanji": true
  },
  {
    "word": "織る",
    "kana": "おる",
    "meaning": "to weave",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "織る",
    "isKanji": true
  },
  {
    "word": "欠く",
    "kana": "かく",
    "meaning": "to lack, to crack",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "欠く",
    "isKanji": true
  },
  {
    "word": "角",
    "kana": "かく",
    "meaning": "angle",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "角",
    "isKanji": true
  },
  {
    "word": "核",
    "kana": "かく",
    "meaning": "nucleus, kernel",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "核",
    "isKanji": true
  },
  {
    "word": "格",
    "kana": "かく",
    "meaning": "status, character, case",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "格",
    "isKanji": true
  },
  {
    "word": "学歴",
    "kana": "がくれき",
    "meaning": "academic background",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "学歴",
    "isKanji": true
  },
  {
    "word": "駆ける",
    "kana": "かける",
    "meaning": "to run",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "駆ける",
    "isKanji": true
  },
  {
    "word": "賭ける",
    "kana": "かける",
    "meaning": "to bet, to risk, to gamble",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "賭ける",
    "isKanji": true
  },
  {
    "word": "課題",
    "kana": "かだい",
    "meaning": "subject, theme, task",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "課題",
    "isKanji": true
  },
  {
    "word": "片付け",
    "kana": "かたづけ",
    "meaning": "tidying up, finishing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "片付け",
    "isKanji": true
  },
  {
    "word": "加味",
    "kana": "かみ",
    "meaning": "seasoning, flavoring",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "加味",
    "isKanji": true
  },
  {
    "word": "借り",
    "kana": "かり",
    "meaning": "borrowing, debt, loan",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "借り",
    "isKanji": true
  },
  {
    "word": "狩り",
    "kana": "かり",
    "meaning": "hunting",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "狩り",
    "isKanji": true
  },
  {
    "word": "管",
    "kana": "かん",
    "meaning": "pipe, tube",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "管",
    "isKanji": true
  },
  {
    "word": "癌",
    "kana": "がん",
    "meaning": "cancer",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "癌",
    "isKanji": true
  },
  {
    "word": "刊行",
    "kana": "かんこう",
    "meaning": "publication, issue",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "刊行",
    "isKanji": true
  },
  {
    "word": "慣行",
    "kana": "かんこう",
    "meaning": "customary practice, habit, traditional event",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "慣行",
    "isKanji": true
  },
  {
    "word": "歓声",
    "kana": "かんせい",
    "meaning": "cheer, shout of joy",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "歓声",
    "isKanji": true
  },
  {
    "word": "官僚",
    "kana": "かんりょう",
    "meaning": "bureaucrat, bureaucracy",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "官僚",
    "isKanji": true
  },
  {
    "word": "器官",
    "kana": "きかん",
    "meaning": "from body, instrument",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "器官",
    "isKanji": true
  },
  {
    "word": "季刊",
    "kana": "きかん",
    "meaning": "quarterly (e.g., magazine)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "季刊",
    "isKanji": true
  },
  {
    "word": "起源",
    "kana": "きげん",
    "meaning": "origin, beginning, rise",
    "difficulty": "normal",
    "category": "抽象",
    "kanji": "起源",
    "isKanji": true
  },
  {
    "word": "機構",
    "kana": "きこう",
    "meaning": "mechanism, organization",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "機構",
    "isKanji": true
  },
  {
    "word": "築く",
    "kana": "きずく",
    "meaning": "to build, to establish",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "築く",
    "isKanji": true
  },
  {
    "word": "規制",
    "kana": "きせい",
    "meaning": "regulation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "規制",
    "isKanji": true
  },
  {
    "word": "丘陵",
    "kana": "きゅうりょう",
    "meaning": "hill",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "丘陵",
    "isKanji": true
  },
  {
    "word": "協議",
    "kana": "きょうぎ",
    "meaning": "conference, discussion, negotiation",
    "difficulty": "normal",
    "category": "政治",
    "kanji": "協議",
    "isKanji": true
  },
  {
    "word": "享受",
    "kana": "きょうじゅ",
    "meaning": "enjoyment, being given",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "享受",
    "isKanji": true
  },
  {
    "word": "協調",
    "kana": "きょうちょう",
    "meaning": "co-operation, conciliation, harmony",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "協調",
    "isKanji": true
  },
  {
    "word": "切り",
    "kana": "きり",
    "meaning": "limits, place to leave off",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "切り",
    "isKanji": true
  },
  {
    "word": "菌",
    "kana": "きん",
    "meaning": "germ, bacterium",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "菌",
    "isKanji": true
  },
  {
    "word": "近視",
    "kana": "きんし",
    "meaning": "nearsightedness",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "近視",
    "isKanji": true
  },
  {
    "word": "苦",
    "kana": "く",
    "meaning": "trouble, worry, difficulty",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "苦",
    "isKanji": true
  },
  {
    "word": "群",
    "kana": "ぐん",
    "meaning": "group",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "群",
    "isKanji": true
  },
  {
    "word": "刑",
    "kana": "けい",
    "meaning": "penalty, sentence, punishment",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "刑",
    "isKanji": true
  },
  {
    "word": "経緯",
    "kana": "けいい",
    "meaning": "sequence of events, course",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "経緯",
    "isKanji": true
  },
  {
    "word": "計器",
    "kana": "けいき",
    "meaning": "meter, gauge",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "計器",
    "isKanji": true
  },
  {
    "word": "契機",
    "kana": "けいき",
    "meaning": "opportunity, chance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "契機",
    "isKanji": true
  },
  {
    "word": "携帯",
    "kana": "けいたい",
    "meaning": "carrying something; mobile telephone",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "携帯",
    "isKanji": true
  },
  {
    "word": "形態",
    "kana": "けいたい",
    "meaning": "form, shape, figure",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "形態",
    "isKanji": true
  },
  {
    "word": "血管",
    "kana": "けっかん",
    "meaning": "blood vessel",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "血管",
    "isKanji": true
  },
  {
    "word": "決行",
    "kana": "けっこう",
    "meaning": "doing (with resolve), carrying out (e.g., a plan)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "決行",
    "isKanji": true
  },
  {
    "word": "件",
    "kana": "けん",
    "meaning": "matter, case, item",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "件",
    "isKanji": true
  },
  {
    "word": "減少",
    "kana": "げんしょう",
    "meaning": "decrease, reduction, decline",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "減少",
    "isKanji": true
  },
  {
    "word": "公演",
    "kana": "こうえん",
    "meaning": "public performance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "公演",
    "isKanji": true
  },
  {
    "word": "後悔",
    "kana": "こうかい",
    "meaning": "regret, repentance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "後悔",
    "isKanji": true
  },
  {
    "word": "航海",
    "kana": "こうかい",
    "meaning": "sail, voyage",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "航海",
    "isKanji": true
  },
  {
    "word": "拘束",
    "kana": "こうそく",
    "meaning": "restriction, restraint",
    "difficulty": "normal",
    "category": "抽象",
    "kanji": "拘束",
    "isKanji": true
  },
  {
    "word": "荒廃",
    "kana": "こうはい",
    "meaning": "ruin",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "荒廃",
    "isKanji": true
  },
  {
    "word": "降伏",
    "kana": "こうふく",
    "meaning": "capitulation, surrender, submission",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "降伏",
    "isKanji": true
  },
  {
    "word": "興奮",
    "kana": "こうふん",
    "meaning": "excitement, stimulation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "興奮",
    "isKanji": true
  },
  {
    "word": "語句",
    "kana": "ごく",
    "meaning": "words, phrases",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "語句",
    "isKanji": true
  },
  {
    "word": "個々",
    "kana": "ここ",
    "meaning": "individual, one by one",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "個々",
    "isKanji": true
  },
  {
    "word": "故人",
    "kana": "こじん",
    "meaning": "the deceased",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "故人",
    "isKanji": true
  },
  {
    "word": "小銭",
    "kana": "こぜに",
    "meaning": "coins, small change",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "小銭",
    "isKanji": true
  },
  {
    "word": "ことによると",
    "kana": "ことによると",
    "meaning": "(depending to get the circumstances) ((depending to get the circumstances)) ((depending to get the circumstances) ((depending on the circumstances)))",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "コンテスト",
    "kana": "コンテスト",
    "meaning": "contest",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "採集",
    "kana": "さいしゅう",
    "meaning": "collecting, gathering",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "採集",
    "isKanji": true
  },
  {
    "word": "作",
    "kana": "さく",
    "meaning": "a work, a harvest",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "作",
    "isKanji": true
  },
  {
    "word": "策",
    "kana": "さく",
    "meaning": "plan, policy",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "策",
    "isKanji": true
  },
  {
    "word": "設備",
    "kana": "せつび",
    "meaning": "equipment, device, facilities",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "設備",
    "isKanji": true
  },
  {
    "word": "絶滅",
    "kana": "ぜつめつ",
    "meaning": "destruction, extinction",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "絶滅",
    "isKanji": true
  },
  {
    "word": "節約",
    "kana": "せつやく",
    "meaning": "economizing, saving",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "節約",
    "isKanji": true
  },
  {
    "word": "攻める",
    "kana": "せめる",
    "meaning": "to attack, to assault",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "攻める",
    "isKanji": true
  },
  {
    "word": "責める",
    "kana": "せめる",
    "meaning": "to condemn, to blame, to criticize",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "責める",
    "isKanji": true
  },
  {
    "word": "善",
    "kana": "ぜん",
    "meaning": "good, virtue",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "善",
    "isKanji": true
  },
  {
    "word": "全",
    "kana": "ぜん",
    "meaning": "all, whole, entire",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "全",
    "isKanji": true
  },
  {
    "word": "全員",
    "kana": "ぜんいん",
    "meaning": "all members",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "全員",
    "isKanji": true
  },
  {
    "word": "専攻",
    "kana": "せんこう",
    "meaning": "major subject, special study",
    "difficulty": "normal",
    "category": "學術",
    "kanji": "専攻",
    "isKanji": true
  },
  {
    "word": "全国",
    "kana": "ぜんこく",
    "meaning": "the entire nation, country-wide, nation-wide",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "全国",
    "isKanji": true
  },
  {
    "word": "洗剤",
    "kana": "せんざい",
    "meaning": "detergent",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "洗剤",
    "isKanji": true
  },
  {
    "word": "先日",
    "kana": "せんじつ",
    "meaning": "the other day, a few days ago",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "先日",
    "isKanji": true
  },
  {
    "word": "前者",
    "kana": "ぜんしゃ",
    "meaning": "the former",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "前者",
    "isKanji": true
  },
  {
    "word": "選手",
    "kana": "せんしゅ",
    "meaning": "usually athletic",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "選手",
    "isKanji": true
  },
  {
    "word": "全身",
    "kana": "ぜんしん",
    "meaning": "pcartoontrait",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "全身",
    "isKanji": true
  },
  {
    "word": "前進",
    "kana": "ぜんしん",
    "meaning": "advance, drive, progress",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "前進",
    "isKanji": true
  },
  {
    "word": "センター",
    "kana": "センター",
    "meaning": "center",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "全体",
    "kana": "ぜんたい",
    "meaning": "whole, entirety, whatever (is the matter)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "全体",
    "isKanji": true
  },
  {
    "word": "選択",
    "kana": "せんたく",
    "meaning": "selection, choice",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "選択",
    "isKanji": true
  },
  {
    "word": "宣伝",
    "kana": "せんでん",
    "meaning": "advertisement, publicity",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "宣伝",
    "isKanji": true
  },
  {
    "word": "騒音",
    "kana": "そうおん",
    "meaning": "noise",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "騒音",
    "isKanji": true
  },
  {
    "word": "増加",
    "kana": "ぞうか",
    "meaning": "increase, addition",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "増加",
    "isKanji": true
  },
  {
    "word": "操作",
    "kana": "そうさ",
    "meaning": "operation, management, processing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "操作",
    "isKanji": true
  },
  {
    "word": "想像",
    "kana": "そうぞう",
    "meaning": "imagination, guess",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "想像",
    "isKanji": true
  },
  {
    "word": "相続",
    "kana": "そうぞく",
    "meaning": "succession, inheritance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "相続",
    "isKanji": true
  },
  {
    "word": "装置",
    "kana": "そうち",
    "meaning": "equipment, installation, apparatus",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "装置",
    "isKanji": true
  },
  {
    "word": "相当",
    "kana": "そうとう",
    "meaning": "considerably, fairly; worth ~",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "相当",
    "isKanji": true
  },
  {
    "word": "速度",
    "kana": "そくど",
    "meaning": "speed, velocity, rate",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "速度",
    "isKanji": true
  },
  {
    "word": "底",
    "kana": "そこ",
    "meaning": "bottom, sole",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "底",
    "isKanji": true
  },
  {
    "word": "そこで",
    "kana": "そこで",
    "meaning": "so (cto getj.), acccartoondingly (so (cto getj.), acccartoondingly) (so (cto getj.), acccartoondingly (so (conj.), accordingly))",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "組織",
    "kana": "そしき",
    "meaning": "organization; structure; tissue",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "組織",
    "isKanji": true
  },
  {
    "word": "注ぐ",
    "kana": "そそぐ",
    "meaning": "into",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "注ぐ",
    "isKanji": true
  },
  {
    "word": "育つ",
    "kana": "そだつ",
    "meaning": "up",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "育つ",
    "isKanji": true
  },
  {
    "word": "そっくり",
    "kana": "そっくり",
    "meaning": "the splitting image of; entirely",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "そっと",
    "kana": "そっと",
    "meaning": "softly, gently",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "袖",
    "kana": "そで",
    "meaning": "sleeve",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "袖",
    "isKanji": true
  },
  {
    "word": "備える",
    "kana": "そなえる",
    "meaning": "to prepare, to furnish, to store",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "備える",
    "isKanji": true
  },
  {
    "word": "具える",
    "kana": "そなえる",
    "meaning": "to be furnished with",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "具える",
    "isKanji": true
  },
  {
    "word": "そのうえ",
    "kana": "そのうえ",
    "meaning": "in addition, furthermore",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "そのうち",
    "kana": "そのうち",
    "meaning": "before long, eventually, sooner or later",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "そのまま",
    "kana": "そのまま",
    "meaning": "e.g., now",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "蕎麦",
    "kana": "そば",
    "meaning": "soba (buckwheat noodles)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "蕎麦",
    "isKanji": true
  },
  {
    "word": "ソファー",
    "kana": "ソファー",
    "meaning": "sofa, couch",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "粗末",
    "kana": "そまつ",
    "meaning": "humble, miserable, crude",
    "difficulty": "normal",
    "category": "物質",
    "kanji": "粗末",
    "isKanji": true
  },
  {
    "word": "それぞれ",
    "kana": "それぞれ",
    "meaning": "each, every, respectively",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "それでも",
    "kana": "それでも",
    "meaning": "but (still), 和 yet, nevertheless (but (still), 和 yet, nevertheless) (but (still), 和 yet, nevertheless (but (still), and yet, nevertheless))",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "それと",
    "kana": "それと",
    "meaning": "and",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "それとも",
    "kana": "それとも",
    "meaning": "or, or else",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "揃う",
    "kana": "そろう",
    "meaning": "to become complete, to be equal",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "揃う",
    "isKanji": true
  },
  {
    "word": "揃える",
    "kana": "そろえる",
    "meaning": "to put things in order, to arrange",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "揃える",
    "isKanji": true
  },
  {
    "word": "損",
    "kana": "そん",
    "meaning": "loss, disadvantage",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "損",
    "isKanji": true
  },
  {
    "word": "損害",
    "kana": "そんがい",
    "meaning": "damage, loss",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "損害",
    "isKanji": true
  },
  {
    "word": "尊敬",
    "kana": "そんけい",
    "meaning": "respect, reverence, honor",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "尊敬",
    "isKanji": true
  },
  {
    "word": "存在",
    "kana": "そんざい",
    "meaning": "existence, being",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "存在",
    "isKanji": true
  },
  {
    "word": "尊重",
    "kana": "そんちょう",
    "meaning": "respect, esteem, regard",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "尊重",
    "isKanji": true
  },
  {
    "word": "田",
    "kana": "た",
    "meaning": "rice field",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "田",
    "isKanji": true
  },
  {
    "word": "他",
    "kana": "た",
    "meaning": "esp. places 和 things",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "他",
    "isKanji": true
  },
  {
    "word": "対",
    "kana": "たい",
    "meaning": "pair, couple, set",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "対",
    "isKanji": true
  },
  {
    "word": "大",
    "kana": "だい",
    "meaning": "big, great",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "大",
    "isKanji": true
  },
  {
    "word": "題",
    "kana": "だい",
    "meaning": "title, subject, theme",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "題",
    "isKanji": true
  },
  {
    "word": "体育",
    "kana": "たいいく",
    "meaning": "physical education, gymnastics, athletics",
    "difficulty": "normal",
    "category": "學術",
    "kanji": "体育",
    "isKanji": true
  },
  {
    "word": "体温",
    "kana": "たいおん",
    "meaning": "temperature (body)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "体温",
    "isKanji": true
  },
  {
    "word": "大会",
    "kana": "たいかい",
    "meaning": "cto getventito get, (big) tournament, mass meeting (cto getventito get, (big) tournament, mass meeting) (cto getventito get, (big) tournament, mass meeting (convention, (big) tournament, mass meeting))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "大会",
    "isKanji": true
  },
  {
    "word": "大気",
    "kana": "たいき",
    "meaning": "atmosphere",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "大気",
    "isKanji": true
  },
  {
    "word": "代金",
    "kana": "だいきん",
    "meaning": "price, cost",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "代金",
    "isKanji": true
  },
  {
    "word": "退屈",
    "kana": "たいくつ",
    "meaning": "tedium, boring",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "退屈",
    "isKanji": true
  },
  {
    "word": "滞在",
    "kana": "たいざい",
    "meaning": "stay, sojourn",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "滞在",
    "isKanji": true
  },
  {
    "word": "大使",
    "kana": "たいし",
    "meaning": "ambassador",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "大使",
    "isKanji": true
  },
  {
    "word": "大した",
    "kana": "たいした",
    "meaning": "significant, great, considerable",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "大した",
    "isKanji": true
  },
  {
    "word": "体重",
    "kana": "たいじゅう",
    "meaning": "(body) weight",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "体重",
    "isKanji": true
  },
  {
    "word": "対象",
    "kana": "たいしょう",
    "meaning": "target; object (from worship, study, etc.); subject (i.e., from taxation) (target; object (from worship, study, etc.); subject (i.e., from taxation)) (target; object (from worship, study, etc.); subject (i.e., from taxation) (target; object (of worship, study, etc.); subject (i.e., of taxation)))",
    "difficulty": "normal",
    "category": "學術",
    "kanji": "対象",
    "isKanji": true
  },
  {
    "word": "対照",
    "kana": "たいしょう",
    "meaning": "contrast, antithesis, comparison",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "対照",
    "isKanji": true
  },
  {
    "word": "大臣",
    "kana": "だいじん",
    "meaning": "cabinet minister",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "大臣",
    "isKanji": true
  },
  {
    "word": "対する",
    "kana": "たいする",
    "meaning": "to face, to confront, to oppose",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "対する",
    "isKanji": true
  },
  {
    "word": "大戦",
    "kana": "たいせん",
    "meaning": "great war, great battle",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "大戦",
    "isKanji": true
  },
  {
    "word": "態度",
    "kana": "たいど",
    "meaning": "attitude, manner",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "態度",
    "isKanji": true
  },
  {
    "word": "大統領",
    "kana": "だいとうりょう",
    "meaning": "president",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "大統領",
    "isKanji": true
  },
  {
    "word": "大半",
    "kana": "たいはん",
    "meaning": "most of, majority, mostly",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "大半",
    "isKanji": true
  },
  {
    "word": "代表",
    "kana": "だいひょう",
    "meaning": "representative, delegation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "代表",
    "isKanji": true
  },
  {
    "word": "大部分",
    "kana": "だいぶぶん",
    "meaning": "most part, majority",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "大部分",
    "isKanji": true
  },
  {
    "word": "タイプライター",
    "kana": "タイプライター",
    "meaning": "typewriter",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "逮捕",
    "kana": "たいほ",
    "meaning": "arrest, apprehension, capture",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "逮捕",
    "isKanji": true
  },
  {
    "word": "題名",
    "kana": "だいめい",
    "meaning": "title",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "題名",
    "isKanji": true
  },
  {
    "word": "ダイヤ",
    "kana": "ダイヤ",
    "meaning": "(railway) schedule; diamto getd ((railway) schedule; diamto getd) ((railway) schedule; diamto getd ((railway) schedule; diamond))",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "太陽",
    "kana": "たいよう",
    "meaning": "sun",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "太陽",
    "isKanji": true
  },
  {
    "word": "平ら",
    "kana": "たいら",
    "meaning": "flatness, level, smooth",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "平ら",
    "isKanji": true
  },
  {
    "word": "代理",
    "kana": "だいり",
    "meaning": "representation, proxy, deputy",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "代理",
    "isKanji": true
  },
  {
    "word": "大陸",
    "kana": "たいりく",
    "meaning": "continent",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "大陸",
    "isKanji": true
  },
  {
    "word": "倒す",
    "kana": "たおす",
    "meaning": "to throw down, to beat",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "倒す",
    "isKanji": true
  },
  {
    "word": "だが",
    "kana": "だが",
    "meaning": "but, however",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "互い",
    "kana": "たがい",
    "meaning": "mutual, each other",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "互い",
    "isKanji": true
  },
  {
    "word": "高める",
    "kana": "たかめる",
    "meaning": "to raise, to lift, to boost",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "高める",
    "isKanji": true
  },
  {
    "word": "宝",
    "kana": "たから",
    "meaning": "treasure",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "宝",
    "isKanji": true
  },
  {
    "word": "宅",
    "kana": "たく",
    "meaning": "house, home",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "宅",
    "isKanji": true
  },
  {
    "word": "炊く",
    "kana": "たく",
    "meaning": "to boil, to cook",
    "difficulty": "normal",
    "category": "物質",
    "kanji": "炊く",
    "isKanji": true
  },
  {
    "word": "焚く",
    "kana": "たく",
    "meaning": "to burn, to kindle, to build a fire",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "焚く",
    "isKanji": true
  },
  {
    "word": "抱く",
    "kana": "だく",
    "meaning": "to embrace, to hug",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "抱く",
    "isKanji": true
  },
  {
    "word": "だけど",
    "kana": "だけど",
    "meaning": "however",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "たしか",
    "kana": "たしか",
    "meaning": "certain, sure, if I remember correctly",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "確かめる",
    "kana": "たしかめる",
    "meaning": "to ascertain, to make sure",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "確かめる",
    "isKanji": true
  },
  {
    "word": "多少",
    "kana": "たしょう",
    "meaning": "a little (same as 少し (すこし))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "多少",
    "isKanji": true
  },
  {
    "word": "只",
    "kana": "ただ",
    "meaning": "free of charge, mere, only",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "只",
    "isKanji": true
  },
  {
    "word": "唯",
    "kana": "ただ",
    "meaning": "mere, sole, plain",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "唯",
    "isKanji": true
  },
  {
    "word": "戦い",
    "kana": "たたかい",
    "meaning": "battle, fight",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "戦い",
    "isKanji": true
  },
  {
    "word": "戦う",
    "kana": "たたかう",
    "meaning": "to fight, to compete, to battle",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "戦う",
    "isKanji": true
  },
  {
    "word": "叩く",
    "kana": "たたく",
    "meaning": "to strike, to beat",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "叩く",
    "isKanji": true
  },
  {
    "word": "直ちに",
    "kana": "ただちに",
    "meaning": "at once, immediately",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "直ちに",
    "isKanji": true
  },
  {
    "word": "畳む",
    "kana": "たたむ",
    "meaning": "atom",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "畳む",
    "isKanji": true
  },
  {
    "word": "立ち上がる",
    "kana": "たちあがる",
    "meaning": "to stand up",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "立ち上がる",
    "isKanji": true
  },
  {
    "word": "立場",
    "kana": "たちば",
    "meaning": "standpoint, position, situation",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "立場",
    "isKanji": true
  },
  {
    "word": "建つ",
    "kana": "たつ",
    "meaning": "到 stand; 到 be built (v.i.",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "建つ",
    "isKanji": true
  },
  {
    "word": "経つ",
    "kana": "たつ",
    "meaning": "(time) passes ((time) passes) ((time) passes ((time) passes))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "経つ",
    "isKanji": true
  },
  {
    "word": "達する",
    "kana": "たっする",
    "meaning": "to reach, to get to",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "達する",
    "isKanji": true
  },
  {
    "word": "唯",
    "kana": "たった",
    "meaning": "only, just",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "唯",
    "isKanji": true
  },
  {
    "word": "だって",
    "kana": "だって",
    "meaning": "but, because, even",
    "difficulty": "normal",
    "category": "經濟",
    "isKanji": false
  },
  {
    "word": "たっぷり",
    "kana": "たっぷり",
    "meaning": "full, in plenty, ample",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "たとえ",
    "kana": "たとえ",
    "meaning": "even if, no matter, though",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "谷",
    "kana": "たに",
    "meaning": "valley",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "谷",
    "isKanji": true
  },
  {
    "word": "他人",
    "kana": "たにん",
    "meaning": "unrelated person, stranger",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "他人",
    "isKanji": true
  },
  {
    "word": "種",
    "kana": "たね",
    "meaning": "seed; material; cause",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "種",
    "isKanji": true
  },
  {
    "word": "束",
    "kana": "たば",
    "meaning": "bunch, bundle",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "束",
    "isKanji": true
  },
  {
    "word": "足袋",
    "kana": "たび",
    "meaning": "with split 到e",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "足袋",
    "isKanji": true
  },
  {
    "word": "度",
    "kana": "たび",
    "meaning": "counter for occurrences",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "度",
    "isKanji": true
  },
  {
    "word": "旅",
    "kana": "たび",
    "meaning": "travel, trip, journey",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "旅",
    "isKanji": true
  },
  {
    "word": "たびたび",
    "kana": "たびたび",
    "meaning": "often, repeatedly, frequently",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "玉",
    "kana": "たま",
    "meaning": "ball, sphere, coin",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "玉",
    "isKanji": true
  },
  {
    "word": "球",
    "kana": "たま",
    "meaning": "globe, sphere, ball",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "球",
    "isKanji": true
  },
  {
    "word": "弾",
    "kana": "たま",
    "meaning": "bullet, shot",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "弾",
    "isKanji": true
  },
  {
    "word": "偶",
    "kana": "たま",
    "meaning": "even number, couple, friend",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "偶",
    "isKanji": true
  },
  {
    "word": "騙す",
    "kana": "だます",
    "meaning": "to trick, to cheat, to deceive",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "騙す",
    "isKanji": true
  },
  {
    "word": "偶々",
    "kana": "たまたま",
    "meaning": "unexpectedly, accidentally, by chance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "偶々",
    "isKanji": true
  },
  {
    "word": "たまらない",
    "kana": "たまらない",
    "meaning": "intolerable, unbearable, unendurable",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "溜まる",
    "kana": "たまる",
    "meaning": "to collect, to gather, to accumulate",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "溜まる",
    "isKanji": true
  },
  {
    "word": "黙る",
    "kana": "だまる",
    "meaning": "to be silent",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "黙る",
    "isKanji": true
  },
  {
    "word": "試し",
    "kana": "ためし",
    "meaning": "trial, test",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "試し",
    "isKanji": true
  },
  {
    "word": "試す",
    "kana": "ためす",
    "meaning": "to attempt, to test",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "試す",
    "isKanji": true
  },
  {
    "word": "溜める",
    "kana": "ためる",
    "meaning": "to accumulate, to collect",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "溜める",
    "isKanji": true
  },
  {
    "word": "便り",
    "kana": "たより",
    "meaning": "news, correspondence, letter",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "便り",
    "isKanji": true
  },
  {
    "word": "頼る",
    "kana": "たよる",
    "meaning": "to rely on, to have recourse to, to depend on",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "頼る",
    "isKanji": true
  },
  {
    "word": "段",
    "kana": "だん",
    "meaning": "step, stair, grade",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "段",
    "isKanji": true
  },
  {
    "word": "単位",
    "kana": "たんい",
    "meaning": "credit (for a course in 學校); unit, denomination (credit (for a course in 學校); unit, denomination) (credit (for a course in 學校); unit, denomination (credit (for a course in school); unit, denomination))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "単位",
    "isKanji": true
  },
  {
    "word": "男子",
    "kana": "だんし",
    "meaning": "young man",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "男子",
    "isKanji": true
  },
  {
    "word": "単純",
    "kana": "たんじゅん",
    "meaning": "simplicity",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "単純",
    "isKanji": true
  },
  {
    "word": "誕生",
    "kana": "たんじょう",
    "meaning": "birth",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "誕生",
    "isKanji": true
  },
  {
    "word": "ダンス",
    "kana": "ダンス",
    "meaning": "dance",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "団体",
    "kana": "だんたい",
    "meaning": "organization, association",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "団体",
    "isKanji": true
  },
  {
    "word": "担当",
    "kana": "たんとう",
    "meaning": "(in) charge",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "担当",
    "isKanji": true
  },
  {
    "word": "単なる",
    "kana": "たんなる",
    "meaning": "mere, simple, sheer",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "単なる",
    "isKanji": true
  },
  {
    "word": "単に",
    "kana": "たんに",
    "meaning": "simply, merely",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "単に",
    "isKanji": true
  },
  {
    "word": "地",
    "kana": "ち",
    "meaning": "earth",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "地",
    "isKanji": true
  },
  {
    "word": "地位",
    "kana": "ちい",
    "meaning": "(social) positito get, status ((social) positito get, status) ((social) positito get, status ((social) position, status))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "地位",
    "isKanji": true
  },
  {
    "word": "地域",
    "kana": "ちいき",
    "meaning": "area, region",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "地域",
    "isKanji": true
  },
  {
    "word": "チーズ",
    "kana": "チーズ",
    "meaning": "cheese",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "チーム",
    "kana": "チーム",
    "meaning": "team",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "知恵",
    "kana": "ちえ",
    "meaning": "wisdom, wit, intelligence",
    "difficulty": "normal",
    "category": "學術",
    "kanji": "知恵",
    "isKanji": true
  },
  {
    "word": "地下",
    "kana": "ちか",
    "meaning": "basement, underground",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "地下",
    "isKanji": true
  },
  {
    "word": "違いない",
    "kana": "ちがいない",
    "meaning": "(phrase) sure, no mistaking it, fcartoon certain ((phrase) sure, no mistaking it, fcartoon certain) ((phrase) sure, no mistaking it, fcartoon certain ((phrase) sure, no mistaking it, for certain))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "違いない",
    "isKanji": true
  },
  {
    "word": "近頃",
    "kana": "ちかごろ",
    "meaning": "lately, recently, nowadays",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "近頃",
    "isKanji": true
  },
  {
    "word": "地球",
    "kana": "ちきゅう",
    "meaning": "the earth",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "地球",
    "isKanji": true
  },
  {
    "word": "地区",
    "kana": "ちく",
    "meaning": "district, section",
    "difficulty": "normal",
    "category": "性質",
    "kanji": "地区",
    "isKanji": true
  },
  {
    "word": "遅刻",
    "kana": "ちこく",
    "meaning": "lateness, late coming",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "遅刻",
    "isKanji": true
  },
  {
    "word": "知事",
    "kana": "ちじ",
    "meaning": "prefectural governor",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "知事",
    "isKanji": true
  },
  {
    "word": "知識",
    "kana": "ちしき",
    "meaning": "knowledge, information",
    "difficulty": "normal",
    "category": "學術",
    "kanji": "知識",
    "isKanji": true
  },
  {
    "word": "父親",
    "kana": "ちちおや",
    "meaning": "father",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "父親",
    "isKanji": true
  },
  {
    "word": "知能",
    "kana": "ちのう",
    "meaning": "intelligence, brains",
    "difficulty": "normal",
    "category": "學術",
    "kanji": "知能",
    "isKanji": true
  },
  {
    "word": "地平線",
    "kana": "ちへいせん",
    "meaning": "horizon",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "地平線",
    "isKanji": true
  },
  {
    "word": "地方",
    "kana": "ちほう",
    "meaning": "area, locality, region",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "地方",
    "isKanji": true
  },
  {
    "word": "茶",
    "kana": "ちゃ",
    "meaning": "tea",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "茶",
    "isKanji": true
  },
  {
    "word": "チャンス",
    "kana": "チャンス",
    "meaning": "chance, opportunity",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ちゃんと",
    "kana": "ちゃんと",
    "meaning": "perfectly, properly, exactly",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "中",
    "kana": "ちゅう",
    "meaning": "inside, middle, among",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "中",
    "isKanji": true
  },
  {
    "word": "注",
    "kana": "ちゅう",
    "meaning": "annotation, explanatory note",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "注",
    "isKanji": true
  },
  {
    "word": "中央",
    "kana": "ちゅうおう",
    "meaning": "central, center, middle",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "中央",
    "isKanji": true
  },
  {
    "word": "中学",
    "kana": "ちゅうがく",
    "meaning": "middle school, junior high school",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "中学",
    "isKanji": true
  },
  {
    "word": "中古",
    "kana": "ちゅうこ",
    "meaning": "used, second-hand",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "中古",
    "isKanji": true
  },
  {
    "word": "中止",
    "kana": "ちゅうし",
    "meaning": "suspension, stoppage, discontinuance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "中止",
    "isKanji": true
  },
  {
    "word": "駐車",
    "kana": "ちゅうしゃ",
    "meaning": "parking (e.g., car)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "駐車",
    "isKanji": true
  },
  {
    "word": "昼食",
    "kana": "ちゅうしょく",
    "meaning": "lunch (same as 昼ご飯 (ひるごはん))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "昼食",
    "isKanji": true
  },
  {
    "word": "中心",
    "kana": "ちゅうしん",
    "meaning": "center, core",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "中心",
    "isKanji": true
  },
  {
    "word": "注目",
    "kana": "ちゅうもく",
    "meaning": "notice, attention, observation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "注目",
    "isKanji": true
  },
  {
    "word": "注文",
    "kana": "ちゅうもん",
    "meaning": "order, request",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "注文",
    "isKanji": true
  },
  {
    "word": "長期",
    "kana": "ちょうき",
    "meaning": "long time period",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "長期",
    "isKanji": true
  },
  {
    "word": "調査",
    "kana": "ちょうさ",
    "meaning": "survey; investigation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "調査",
    "isKanji": true
  },
  {
    "word": "調子",
    "kana": "ちょうし",
    "meaning": "condition, state, tune, tone",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "調子",
    "isKanji": true
  },
  {
    "word": "頂上",
    "kana": "ちょうじょう",
    "meaning": "top, summit, peak",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "頂上",
    "isKanji": true
  },
  {
    "word": "ちょうだい",
    "kana": "ちょうだい",
    "meaning": "-- colloquial form of ください; typically used by children or women --",
    "difficulty": "normal",
    "category": "經濟",
    "isKanji": false
  },
  {
    "word": "貯金",
    "kana": "ちょきん",
    "meaning": "(bank) savings",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "貯金",
    "isKanji": true
  },
  {
    "word": "直接",
    "kana": "ちょくせつ",
    "meaning": "direct, immediate, firsthand",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "直接",
    "isKanji": true
  },
  {
    "word": "著者",
    "kana": "ちょしゃ",
    "meaning": "author, writer",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "著者",
    "isKanji": true
  },
  {
    "word": "散らす",
    "kana": "ちらす",
    "meaning": "to scatter, to disperse, to distribute",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "散らす",
    "isKanji": true
  },
  {
    "word": "散る",
    "kana": "ちる",
    "meaning": "e.g., blossoms",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "散る",
    "isKanji": true
  },
  {
    "word": "遂に",
    "kana": "ついに",
    "meaning": "finally, at last",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "遂に",
    "isKanji": true
  },
  {
    "word": "通過",
    "kana": "つうか",
    "meaning": "passage through, passing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "通過",
    "isKanji": true
  },
  {
    "word": "通貨",
    "kana": "つうか",
    "meaning": "currency",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "通貨",
    "isKanji": true
  },
  {
    "word": "通学",
    "kana": "つうがく",
    "meaning": "commuting to school",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "通学",
    "isKanji": true
  },
  {
    "word": "通勤",
    "kana": "つうきん",
    "meaning": "commuting to work",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "通勤",
    "isKanji": true
  },
  {
    "word": "通行",
    "kana": "つうこう",
    "meaning": "passage, passing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "通行",
    "isKanji": true
  },
  {
    "word": "通じる",
    "kana": "つうじる",
    "meaning": "to run to, to lead to, to communicate",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "通じる",
    "isKanji": true
  },
  {
    "word": "通信",
    "kana": "つうしん",
    "meaning": "correspondence, communications",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "通信",
    "isKanji": true
  },
  {
    "word": "通訳",
    "kana": "つうやく",
    "meaning": "interpretation; interpreter",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "通訳",
    "isKanji": true
  },
  {
    "word": "掴む",
    "kana": "つかむ",
    "meaning": "to seize, to catch, to grasp",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "掴む",
    "isKanji": true
  },
  {
    "word": "疲れ",
    "kana": "つかれ",
    "meaning": "tiredness, fatigue",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "疲れ",
    "isKanji": true
  },
  {
    "word": "付き合い",
    "kana": "つきあい",
    "meaning": "socialization; friendship; association",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "付き合い",
    "isKanji": true
  },
  {
    "word": "付合う",
    "kana": "つきあう",
    "meaning": "to associate with, to keep company with, to get on with",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "付合う",
    "isKanji": true
  },
  {
    "word": "次々",
    "kana": "つぎつぎ",
    "meaning": "in succession, one by one",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "次々",
    "isKanji": true
  },
  {
    "word": "付く",
    "kana": "つく",
    "meaning": "to adjoin, to be attached, to adhere",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "付く",
    "isKanji": true
  },
  {
    "word": "就く",
    "kana": "つく",
    "meaning": "seat position",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "就く",
    "isKanji": true
  },
  {
    "word": "突く",
    "kana": "つく",
    "meaning": "to thrust, to strike; to poke",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "突く",
    "isKanji": true
  },
  {
    "word": "次ぐ",
    "kana": "つぐ",
    "meaning": "to rank next to, to come after",
    "difficulty": "normal",
    "category": "性質",
    "kanji": "次ぐ",
    "isKanji": true
  },
  {
    "word": "注ぐ",
    "kana": "つぐ",
    "meaning": "into",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "注ぐ",
    "isKanji": true
  },
  {
    "word": "付ける",
    "kana": "つける",
    "meaning": "to attach, to join, to add",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "付ける",
    "isKanji": true
  },
  {
    "word": "着ける",
    "kana": "つける",
    "meaning": "to put on, to wear; to draw up",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "着ける",
    "isKanji": true
  },
  {
    "word": "伝わる",
    "kana": "つたわる",
    "meaning": "to be handed down, to be transmitted",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "伝わる",
    "isKanji": true
  },
  {
    "word": "土",
    "kana": "つち",
    "meaning": "earth, soil",
    "difficulty": "normal",
    "category": "物質",
    "kanji": "土",
    "isKanji": true
  },
  {
    "word": "続き",
    "kana": "つづき",
    "meaning": "sequel, continuation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "続き",
    "isKanji": true
  },
  {
    "word": "包み",
    "kana": "つつみ",
    "meaning": "bundle, package",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "包み",
    "isKanji": true
  },
  {
    "word": "勤め",
    "kana": "つとめ",
    "meaning": "work, employment",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "勤め",
    "isKanji": true
  },
  {
    "word": "務め",
    "kana": "つとめ",
    "meaning": "duty",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "務め",
    "isKanji": true
  },
  {
    "word": "繋がる",
    "kana": "つながる",
    "meaning": "to be connected to, to be related to",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "繋がる",
    "isKanji": true
  },
  {
    "word": "繋ぐ",
    "kana": "つなぐ",
    "meaning": "to tie, to fasten, to connect",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "繋ぐ",
    "isKanji": true
  },
  {
    "word": "繋げる",
    "kana": "つなげる",
    "meaning": "to connect",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "繋げる",
    "isKanji": true
  },
  {
    "word": "常に",
    "kana": "つねに",
    "meaning": "always (same as いつも (always (same as いつも (written expression)))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "常に",
    "isKanji": true
  },
  {
    "word": "翼",
    "kana": "つばさ",
    "meaning": "wings",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "翼",
    "isKanji": true
  },
  {
    "word": "つまり",
    "kana": "つまり",
    "meaning": "namely; in other words; in short",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "罪",
    "kana": "つみ",
    "meaning": "crime, fault, indiscretion",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "罪",
    "isKanji": true
  },
  {
    "word": "積む",
    "kana": "つむ",
    "meaning": "to pile up, to stack",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "積む",
    "isKanji": true
  },
  {
    "word": "詰める",
    "kana": "つめる",
    "meaning": "details",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "詰める",
    "isKanji": true
  },
  {
    "word": "積もる",
    "kana": "つもる",
    "meaning": "to pile up",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "積もる",
    "isKanji": true
  },
  {
    "word": "梅雨",
    "kana": "つゆ",
    "meaning": "rainy season",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "梅雨",
    "isKanji": true
  },
  {
    "word": "辛い",
    "kana": "つらい",
    "meaning": "painful, heart-breaking",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "辛い",
    "isKanji": true
  },
  {
    "word": "釣",
    "kana": "つり",
    "meaning": "fishing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "釣",
    "isKanji": true
  },
  {
    "word": "連れ",
    "kana": "つれ",
    "meaning": "companion, company",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "連れ",
    "isKanji": true
  },
  {
    "word": "出",
    "kana": "で",
    "meaning": "outflow, coming (going) out, graduate (from) (outflow, coming (going) out, graduate (from)) (outflow, coming (going) out, graduate (from) (outflow, coming (going) out, graduate (of)))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "出",
    "isKanji": true
  },
  {
    "word": "出会い",
    "kana": "であい",
    "meaning": "meeting, rendezvous, encounter",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "出会い",
    "isKanji": true
  },
  {
    "word": "出合い",
    "kana": "であい",
    "meaning": "an encounter",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "出合い",
    "isKanji": true
  },
  {
    "word": "出会う",
    "kana": "であう",
    "meaning": "to meet by chance, to come across, to happen to encounter",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "出会う",
    "isKanji": true
  },
  {
    "word": "提案",
    "kana": "ていあん",
    "meaning": "proposal, proposition, suggestion",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "提案",
    "isKanji": true
  },
  {
    "word": "定期",
    "kana": "ていき",
    "meaning": "fixed term",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "定期",
    "isKanji": true
  },
  {
    "word": "抵抗",
    "kana": "ていこう",
    "meaning": "resistance, opposition",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "抵抗",
    "isKanji": true
  },
  {
    "word": "提出",
    "kana": "ていしゅつ",
    "meaning": "presentation, submission, filing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "提出",
    "isKanji": true
  },
  {
    "word": "停電",
    "kana": "ていでん",
    "meaning": "failure of electricity",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "停電",
    "isKanji": true
  },
  {
    "word": "程度",
    "kana": "ていど",
    "meaning": "degree, amount, level",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "程度",
    "isKanji": true
  },
  {
    "word": "停留所",
    "kana": "ていりゅうじょ",
    "meaning": "bus or tram stop",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "停留所",
    "isKanji": true
  },
  {
    "word": "敵",
    "kana": "てき",
    "meaning": "enemy, rival",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "敵",
    "isKanji": true
  },
  {
    "word": "出来事",
    "kana": "できごと",
    "meaning": "incident happening, event",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "出来事",
    "isKanji": true
  },
  {
    "word": "適する",
    "kana": "てきする",
    "meaning": "to fit, to suit",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "適する",
    "isKanji": true
  },
  {
    "word": "適切",
    "kana": "てきせつ",
    "meaning": "appropriate, adequate, relevance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "適切",
    "isKanji": true
  },
  {
    "word": "適度",
    "kana": "てきど",
    "meaning": "moderate",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "適度",
    "isKanji": true
  },
  {
    "word": "適用",
    "kana": "てきよう",
    "meaning": "applying",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "適用",
    "isKanji": true
  },
  {
    "word": "できれば",
    "kana": "できれば",
    "meaning": "if possible…",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "手品",
    "kana": "てじな",
    "meaning": "conjuring trick, magic",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "手品",
    "isKanji": true
  },
  {
    "word": "ですから",
    "kana": "ですから",
    "meaning": "therefore",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "鉄",
    "kana": "てつ",
    "meaning": "iron",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "鉄",
    "isKanji": true
  },
  {
    "word": "哲学",
    "kana": "てつがく",
    "meaning": "philosophy",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "哲学",
    "isKanji": true
  },
  {
    "word": "手伝い",
    "kana": "てつだい",
    "meaning": "help, helper, assistant",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "手伝い",
    "isKanji": true
  },
  {
    "word": "徹底",
    "kana": "てってい",
    "meaning": "thoroughness, completeness",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "徹底",
    "isKanji": true
  },
  {
    "word": "鉄道",
    "kana": "てつどう",
    "meaning": "railway; railroad",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "鉄道",
    "isKanji": true
  },
  {
    "word": "徹夜",
    "kana": "てつや",
    "meaning": "staying up all night, sleepless night",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "徹夜",
    "isKanji": true
  },
  {
    "word": "手間",
    "kana": "てま",
    "meaning": "time, labor",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "手間",
    "isKanji": true
  },
  {
    "word": "デモ",
    "kana": "デモ",
    "meaning": "demo, demonstration",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "典型",
    "kana": "てんけい",
    "meaning": "type, pattern, archetypal",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "典型",
    "isKanji": true
  },
  {
    "word": "天候",
    "kana": "てんこう",
    "meaning": "weather",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "天候",
    "isKanji": true
  },
  {
    "word": "電子",
    "kana": "でんし",
    "meaning": "electron; electronic",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "電子",
    "isKanji": true
  },
  {
    "word": "テント",
    "kana": "テント",
    "meaning": "tent",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "伝統",
    "kana": "でんとう",
    "meaning": "tradition, convention",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "伝統",
    "isKanji": true
  },
  {
    "word": "天然",
    "kana": "てんねん",
    "meaning": "nature, spontaneity",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "天然",
    "isKanji": true
  },
  {
    "word": "問い",
    "kana": "とい",
    "meaning": "question, query",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "問い",
    "isKanji": true
  },
  {
    "word": "党",
    "kana": "とう",
    "meaning": "party (political)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "党",
    "isKanji": true
  },
  {
    "word": "塔",
    "kana": "とう",
    "meaning": "tower, pagoda",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "塔",
    "isKanji": true
  },
  {
    "word": "答案",
    "kana": "とうあん",
    "meaning": "examination paper, examination script",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "答案",
    "isKanji": true
  },
  {
    "word": "同一",
    "kana": "どういつ",
    "meaning": "identity, sameness, similarity",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "同一",
    "isKanji": true
  },
  {
    "word": "銅貨",
    "kana": "どうか",
    "meaning": "copper coin",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "銅貨",
    "isKanji": true
  },
  {
    "word": "当時",
    "kana": "とうじ",
    "meaning": "same as そのころ",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "当時",
    "isKanji": true
  },
  {
    "word": "動詞",
    "kana": "どうし",
    "meaning": "verb",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "動詞",
    "isKanji": true
  },
  {
    "word": "同時",
    "kana": "どうじ",
    "meaning": "simultaneous(ly), same time (simultaneous(ly), same time) (simultaneous(ly), same time (simultaneous(ly), same time))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "同時",
    "isKanji": true
  },
  {
    "word": "どうしても",
    "kana": "どうしても",
    "meaning": "at any cost, no matter what, no matter how hard one tries",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "どうぞよろしく",
    "kana": "どうぞよろしく",
    "meaning": "pleased to meet you",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "到着",
    "kana": "とうちゃく",
    "meaning": "arrival",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "到着",
    "isKanji": true
  },
  {
    "word": "道徳",
    "kana": "どうとく",
    "meaning": "morals",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "道徳",
    "isKanji": true
  },
  {
    "word": "投票",
    "kana": "とうひょう",
    "meaning": "voting, poll",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "投票",
    "isKanji": true
  },
  {
    "word": "東洋",
    "kana": "とうよう",
    "meaning": "Orient",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "東洋",
    "isKanji": true
  },
  {
    "word": "同様",
    "kana": "どうよう",
    "meaning": "identical, same (kind), like",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "同様",
    "isKanji": true
  },
  {
    "word": "童謡",
    "kana": "どうよう",
    "meaning": "children's song, nursery rhyme",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "童謡",
    "isKanji": true
  },
  {
    "word": "道路",
    "kana": "どうろ",
    "meaning": "road",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "道路",
    "isKanji": true
  },
  {
    "word": "通す",
    "kana": "とおす",
    "meaning": "to let pass, to overlook, to continue",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "通す",
    "isKanji": true
  },
  {
    "word": "通り過ぎる",
    "kana": "とおりすぎる",
    "meaning": "to pass, to pass through",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "通り過ぎる",
    "isKanji": true
  },
  {
    "word": "都会",
    "kana": "とかい",
    "meaning": "city",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "都会",
    "isKanji": true
  },
  {
    "word": "溶く",
    "kana": "とく",
    "meaning": "paint",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "溶く",
    "isKanji": true
  },
  {
    "word": "解く",
    "kana": "とく",
    "meaning": "to unfasten; answer, solve",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "解く",
    "isKanji": true
  },
  {
    "word": "退く",
    "kana": "どく",
    "meaning": "to retreat, to recede, to withdraw",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "退く",
    "isKanji": true
  },
  {
    "word": "毒",
    "kana": "どく",
    "meaning": "poison, toxicant",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "毒",
    "isKanji": true
  },
  {
    "word": "得意",
    "kana": "とくい",
    "meaning": "pride, triumph, prosperity",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "得意",
    "isKanji": true
  },
  {
    "word": "読書",
    "kana": "どくしょ",
    "meaning": "reading",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "読書",
    "isKanji": true
  },
  {
    "word": "独身",
    "kana": "どくしん",
    "meaning": "single, unmarried",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "独身",
    "isKanji": true
  },
  {
    "word": "特徴",
    "kana": "とくちょう",
    "meaning": "characteristic(s); feature(s); trait(s)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "特徴",
    "isKanji": true
  },
  {
    "word": "特長",
    "kana": "とくちょう",
    "meaning": "forte, merit",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "特長",
    "isKanji": true
  },
  {
    "word": "独特",
    "kana": "どくとく",
    "meaning": "peculiarity, uniqueness, characteristic",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "独特",
    "isKanji": true
  },
  {
    "word": "独立",
    "kana": "どくりつ",
    "meaning": "independence (e.g., Ind. Day), self-suppcartoont (independence (e.g., Ind. Day), self-suppcartoont) (independence (e.g., Ind. Day), self-suppcartoont (independence (e.g., Ind. Day), self-support))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "独立",
    "isKanji": true
  },
  {
    "word": "溶ける",
    "kana": "とける",
    "meaning": "to melt, to thaw, to dissolve",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "溶ける",
    "isKanji": true
  },
  {
    "word": "解ける",
    "kana": "とける",
    "meaning": "to come untied, to come apart",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "解ける",
    "isKanji": true
  },
  {
    "word": "どこか",
    "kana": "どこか",
    "meaning": "somewhere, anywhere",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ところが",
    "kana": "ところが",
    "meaning": "however, while, even if",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ところで",
    "kana": "ところで",
    "meaning": "by the way; even if",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "登山",
    "kana": "とざん",
    "meaning": "mountain-climbing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "登山",
    "isKanji": true
  },
  {
    "word": "都市",
    "kana": "とし",
    "meaning": "town, city, urban",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "都市",
    "isKanji": true
  },
  {
    "word": "年月",
    "kana": "としつき",
    "meaning": "months and years",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "年月",
    "isKanji": true
  },
  {
    "word": "図書",
    "kana": "としょ",
    "meaning": "books",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "図書",
    "isKanji": true
  },
  {
    "word": "年寄",
    "kana": "としより",
    "meaning": "old people, the aged",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "年寄",
    "isKanji": true
  },
  {
    "word": "閉じる",
    "kana": "とじる",
    "meaning": "到 close (e.g., book, eyes",
    "difficulty": "normal",
    "category": "性質",
    "kanji": "閉じる",
    "isKanji": true
  },
  {
    "word": "途端",
    "kana": "とたん",
    "meaning": "just (now, at the moment, etc.)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "途端",
    "isKanji": true
  },
  {
    "word": "土地",
    "kana": "とち",
    "meaning": "plot of land, lot, soil",
    "difficulty": "normal",
    "category": "物質",
    "kanji": "土地",
    "isKanji": true
  },
  {
    "word": "突然",
    "kana": "とつぜん",
    "meaning": "abruptly, suddenly, unexpectedly",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "突然",
    "isKanji": true
  },
  {
    "word": "トップ",
    "kana": "トップ",
    "meaning": "top",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "届く",
    "kana": "とどく",
    "meaning": "to reach",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "届く",
    "isKanji": true
  },
  {
    "word": "飛ばす",
    "kana": "とばす",
    "meaning": "to skip over, to omit",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "飛ばす",
    "isKanji": true
  },
  {
    "word": "飛び出す",
    "kana": "とびだす",
    "meaning": "to jump out, to rush out, to fly out",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "飛び出す",
    "isKanji": true
  },
  {
    "word": "留める",
    "kana": "とめる",
    "meaning": "to fasten, to turn off, to detain",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "留める",
    "isKanji": true
  },
  {
    "word": "泊める",
    "kana": "とめる",
    "meaning": "over night",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "泊める",
    "isKanji": true
  },
  {
    "word": "友",
    "kana": "とも",
    "meaning": "friend, companion, pal",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "友",
    "isKanji": true
  },
  {
    "word": "共に",
    "kana": "ともに",
    "meaning": "sharing with, participate in",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "共に",
    "isKanji": true
  },
  {
    "word": "虎",
    "kana": "とら",
    "meaning": "tiger",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "虎",
    "isKanji": true
  },
  {
    "word": "トラック",
    "kana": "トラック",
    "meaning": "truck; (running) track",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ドラマ",
    "kana": "ドラマ",
    "meaning": "drama",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "トランプ",
    "kana": "トランプ",
    "meaning": "playing cards (lit: trump)",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "取り上げる",
    "kana": "とりあげる",
    "meaning": "to take up, to pick up; to confiscate",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "取り上げる",
    "isKanji": true
  },
  {
    "word": "努力",
    "kana": "どりょく",
    "meaning": "great effort, exertion, endeavor",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "努力",
    "isKanji": true
  },
  {
    "word": "トレーニング",
    "kana": "トレーニング",
    "meaning": "training",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ドレス",
    "kana": "ドレス",
    "meaning": "dress",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "取れる",
    "kana": "とれる",
    "meaning": "to come off, to be taken off",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "取れる",
    "isKanji": true
  },
  {
    "word": "泥",
    "kana": "どろ",
    "meaning": "mud",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "泥",
    "isKanji": true
  },
  {
    "word": "トン",
    "kana": "トン",
    "meaning": "1000 lbs.",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "とんでもない",
    "kana": "とんでもない",
    "meaning": "outrageous, No way!",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "どんなに",
    "kana": "どんなに",
    "meaning": "how, how much",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "トンネル",
    "kana": "トンネル",
    "meaning": "tunnel",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "名",
    "kana": "な",
    "meaning": "name, reputation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "名",
    "isKanji": true
  },
  {
    "word": "内容",
    "kana": "ないよう",
    "meaning": "subject, contents, detail",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "内容",
    "isKanji": true
  },
  {
    "word": "なお",
    "kana": "なお",
    "meaning": "still, yet",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "仲",
    "kana": "なか",
    "meaning": "relation, relationship",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "仲",
    "isKanji": true
  },
  {
    "word": "流す",
    "kana": "ながす",
    "meaning": "e.g., blood, tears",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "流す",
    "isKanji": true
  },
  {
    "word": "半ば",
    "kana": "なかば",
    "meaning": "middle, halfway",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "半ば",
    "isKanji": true
  },
  {
    "word": "仲間",
    "kana": "なかま",
    "meaning": "company, fellow, colleague, associate",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "仲間",
    "isKanji": true
  },
  {
    "word": "中身",
    "kana": "なかみ",
    "meaning": "cto gettent(s); substance (cto gettent(s); substance) (cto gettent(s); substance (content(s); substance))",
    "difficulty": "normal",
    "category": "物質",
    "kanji": "中身",
    "isKanji": true
  },
  {
    "word": "中味",
    "kana": "なかみ",
    "meaning": "contents, interior, filling",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "中味",
    "isKanji": true
  },
  {
    "word": "眺め",
    "kana": "ながめ",
    "meaning": "scene; view; prospect; outlook",
    "difficulty": "normal",
    "category": "抽象",
    "kanji": "眺め",
    "isKanji": true
  },
  {
    "word": "眺める",
    "kana": "ながめる",
    "meaning": "to view, to gaze at",
    "difficulty": "normal",
    "category": "抽象",
    "kanji": "眺める",
    "isKanji": true
  },
  {
    "word": "流れ",
    "kana": "ながれ",
    "meaning": "stream, current",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "流れ",
    "isKanji": true
  },
  {
    "word": "流れる",
    "kana": "ながれる",
    "meaning": "to flow, to be washed away",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "流れる",
    "isKanji": true
  },
  {
    "word": "亡くす",
    "kana": "なくす",
    "meaning": "to lose someone",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "亡くす",
    "isKanji": true
  },
  {
    "word": "無し",
    "kana": "なし",
    "meaning": "without",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "無し",
    "isKanji": true
  },
  {
    "word": "なぜなら",
    "kana": "なぜなら",
    "meaning": "because",
    "difficulty": "normal",
    "category": "經濟",
    "isKanji": false
  },
  {
    "word": "謎",
    "kana": "なぞ",
    "meaning": "riddle, puzzle, enigma",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "謎",
    "isKanji": true
  },
  {
    "word": "納得",
    "kana": "なっとく",
    "meaning": "consent, assent, understanding",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "納得",
    "isKanji": true
  },
  {
    "word": "なにも",
    "kana": "なにも",
    "meaning": "nothing",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "鍋",
    "kana": "なべ",
    "meaning": "saucepan, pot",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "鍋",
    "isKanji": true
  },
  {
    "word": "生",
    "kana": "なま",
    "meaning": "raw, unprocessed",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "生",
    "isKanji": true
  },
  {
    "word": "怠ける",
    "kana": "なまける",
    "meaning": "to be idle, to neglect",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "怠ける",
    "isKanji": true
  },
  {
    "word": "波",
    "kana": "なみ",
    "meaning": "wave",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "波",
    "isKanji": true
  },
  {
    "word": "涙",
    "kana": "なみだ",
    "meaning": "tear",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "涙",
    "isKanji": true
  },
  {
    "word": "悩む",
    "kana": "なやむ",
    "meaning": "to agonize, to be troubled",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "悩む",
    "isKanji": true
  },
  {
    "word": "鳴らす",
    "kana": "ならす",
    "meaning": "to ring, to sound",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "鳴らす",
    "isKanji": true
  },
  {
    "word": "為る",
    "kana": "なる",
    "meaning": "to change, to be of use, to reach to",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "為る",
    "isKanji": true
  },
  {
    "word": "生る",
    "kana": "なる",
    "meaning": "to bear fruit",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "生る",
    "isKanji": true
  },
  {
    "word": "馴れる",
    "kana": "なれる",
    "meaning": "to become domesticated, to become tame",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "馴れる",
    "isKanji": true
  },
  {
    "word": "縄",
    "kana": "なわ",
    "meaning": "rope",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "縄",
    "isKanji": true
  },
  {
    "word": "何で",
    "kana": "なんで",
    "meaning": "Why, What for",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "何で",
    "isKanji": true
  },
  {
    "word": "何でも",
    "kana": "なんでも",
    "meaning": "by all means, everything",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "何でも",
    "isKanji": true
  },
  {
    "word": "何とか",
    "kana": "なんとか",
    "meaning": "somehow, anyhow, one way or another",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "何とか",
    "isKanji": true
  },
  {
    "word": "似合う",
    "kana": "にあう",
    "meaning": "clothing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "似合う",
    "isKanji": true
  },
  {
    "word": "煮える",
    "kana": "にえる",
    "meaning": "to boil, to cook, to be cooked",
    "difficulty": "normal",
    "category": "物質",
    "kanji": "煮える",
    "isKanji": true
  },
  {
    "word": "苦手",
    "kana": "にがて",
    "meaning": "poor (at), weak (in), dislike (from) (poor (at), weak (in), dislike (from)) (poor (at), weak (in), dislike (from) (poor (at), weak (in), dislike (of)))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "苦手",
    "isKanji": true
  },
  {
    "word": "握る",
    "kana": "にぎる",
    "meaning": "to grasp, to seize, to mold sushi",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "握る",
    "isKanji": true
  },
  {
    "word": "日",
    "kana": "にち",
    "meaning": "day",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "日",
    "isKanji": true
  },
  {
    "word": "日常",
    "kana": "にちじょう",
    "meaning": "ordinary, regular, everyday",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "日常",
    "isKanji": true
  },
  {
    "word": "日光",
    "kana": "にっこう",
    "meaning": "sunlight",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "日光",
    "isKanji": true
  },
  {
    "word": "日中",
    "kana": "にっちゅう",
    "meaning": "daytime, broad daylight",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "日中",
    "isKanji": true
  },
  {
    "word": "にっこり",
    "kana": "にっこり",
    "meaning": "smile sweetly, smile, grin",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "日本",
    "kana": "にっぽん",
    "meaning": "Japan",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "日本",
    "isKanji": true
  },
  {
    "word": "入場",
    "kana": "にゅうじょう",
    "meaning": "entrance, admission, entering",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "入場",
    "isKanji": true
  },
  {
    "word": "煮る",
    "kana": "にる",
    "meaning": "to boil, to cook",
    "difficulty": "normal",
    "category": "物質",
    "kanji": "煮る",
    "isKanji": true
  },
  {
    "word": "人気",
    "kana": "にんき",
    "meaning": "popularity",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "人気",
    "isKanji": true
  },
  {
    "word": "人間",
    "kana": "にんげん",
    "meaning": "human being, person",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "人間",
    "isKanji": true
  },
  {
    "word": "抜く",
    "kana": "ぬく",
    "meaning": "to extract, to omit, to unplug",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "抜く",
    "isKanji": true
  },
  {
    "word": "抜ける",
    "kana": "ぬける",
    "meaning": "to come out, to fall out, to be omitted",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "抜ける",
    "isKanji": true
  },
  {
    "word": "布",
    "kana": "ぬの",
    "meaning": "cloth",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "布",
    "isKanji": true
  },
  {
    "word": "濡らす",
    "kana": "ぬらす",
    "meaning": "to wet, to soak",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "濡らす",
    "isKanji": true
  },
  {
    "word": "根",
    "kana": "ね",
    "meaning": "root",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "根",
    "isKanji": true
  },
  {
    "word": "値",
    "kana": "ね",
    "meaning": "value, price, cost",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "値",
    "isKanji": true
  },
  {
    "word": "願い",
    "kana": "ねがい",
    "meaning": "desire, wish, request",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "願い",
    "isKanji": true
  },
  {
    "word": "願う",
    "kana": "ねがう",
    "meaning": "to desire, to wish, to request",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "願う",
    "isKanji": true
  },
  {
    "word": "鼠",
    "kana": "ねずみ",
    "meaning": "mouse, rat",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "鼠",
    "isKanji": true
  },
  {
    "word": "熱帯",
    "kana": "ねったい",
    "meaning": "tropics",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "熱帯",
    "isKanji": true
  },
  {
    "word": "熱中",
    "kana": "ねっちゅう",
    "meaning": "enthusiasm, zeal, mania",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "熱中",
    "isKanji": true
  },
  {
    "word": "年間",
    "kana": "ねんかん",
    "meaning": "year",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "年間",
    "isKanji": true
  },
  {
    "word": "年月",
    "kana": "ねんげつ",
    "meaning": "months and years",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "年月",
    "isKanji": true
  },
  {
    "word": "年中",
    "kana": "ねんじゅう",
    "meaning": "whole year, always, everyday",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "年中",
    "isKanji": true
  },
  {
    "word": "年代",
    "kana": "ねんだい",
    "meaning": "age, era, period",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "年代",
    "isKanji": true
  },
  {
    "word": "年齢",
    "kana": "ねんれい",
    "meaning": "age, years",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "年齢",
    "isKanji": true
  },
  {
    "word": "野",
    "kana": "の",
    "meaning": "field",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "野",
    "isKanji": true
  },
  {
    "word": "能",
    "kana": "のう",
    "meaning": "being skilled in, nicely, properly",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "能",
    "isKanji": true
  },
  {
    "word": "農家",
    "kana": "のうか",
    "meaning": "farmer, farm family",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "農家",
    "isKanji": true
  },
  {
    "word": "農業",
    "kana": "のうぎょう",
    "meaning": "agriculture",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "農業",
    "isKanji": true
  },
  {
    "word": "農民",
    "kana": "のうみん",
    "meaning": "farmers, peasants",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "農民",
    "isKanji": true
  },
  {
    "word": "能力",
    "kana": "のうりょく",
    "meaning": "ability, faculty",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "能力",
    "isKanji": true
  },
  {
    "word": "ノー",
    "kana": "ノー",
    "meaning": "no",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "軒",
    "kana": "のき",
    "meaning": "eaves",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "軒",
    "isKanji": true
  },
  {
    "word": "残す",
    "kana": "のこす",
    "meaning": "到 leave (behind, over",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "残す",
    "isKanji": true
  },
  {
    "word": "残り",
    "kana": "のこり",
    "meaning": "remaining, left-over",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "残り",
    "isKanji": true
  },
  {
    "word": "乗せる",
    "kana": "のせる",
    "meaning": "到 place to get (something",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "乗せる",
    "isKanji": true
  },
  {
    "word": "載せる",
    "kana": "のせる",
    "meaning": "到 place to get (something",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "載せる",
    "isKanji": true
  },
  {
    "word": "覗く",
    "kana": "のぞく",
    "meaning": "to peek in, to look in",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "覗く",
    "isKanji": true
  },
  {
    "word": "除く",
    "kana": "のぞく",
    "meaning": "to remove, to exclude, to except",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "除く",
    "isKanji": true
  },
  {
    "word": "望み",
    "kana": "のぞみ",
    "meaning": "wish, desire, (a) hope",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "望み",
    "isKanji": true
  },
  {
    "word": "望む",
    "kana": "のぞむ",
    "meaning": "to desire, to wish for; to view",
    "difficulty": "normal",
    "category": "抽象",
    "kanji": "望む",
    "isKanji": true
  },
  {
    "word": "後",
    "kana": "のち",
    "meaning": "afterwards, since then",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "後",
    "isKanji": true
  },
  {
    "word": "ノック",
    "kana": "ノック",
    "meaning": "knock; fungo (baseball)",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "伸ばす",
    "kana": "のばす",
    "meaning": "to extend, to stretch, to reach out",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "伸ばす",
    "isKanji": true
  },
  {
    "word": "延ばす",
    "kana": "のばす",
    "meaning": "to extend, to stretch, to reach out",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "延ばす",
    "isKanji": true
  },
  {
    "word": "伸びる",
    "kana": "のびる",
    "meaning": "to extend, to make progress, to grow",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "伸びる",
    "isKanji": true
  },
  {
    "word": "延びる",
    "kana": "のびる",
    "meaning": "to be prolonged",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "延びる",
    "isKanji": true
  },
  {
    "word": "述べる",
    "kana": "のべる",
    "meaning": "to state, to express, to mention",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "述べる",
    "isKanji": true
  },
  {
    "word": "上る",
    "kana": "のぼる",
    "meaning": "to ascend, to go up, to climb",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "上る",
    "isKanji": true
  },
  {
    "word": "昇る",
    "kana": "のぼる",
    "meaning": "to arise, to ascend, to go up",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "昇る",
    "isKanji": true
  },
  {
    "word": "載る",
    "kana": "のる",
    "meaning": "到 appear (in print",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "載る",
    "isKanji": true
  },
  {
    "word": "場",
    "kana": "ば",
    "meaning": "place, field (physics)",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "場",
    "isKanji": true
  },
  {
    "word": "パーセント",
    "kana": "パーセント",
    "meaning": "percent",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "灰",
    "kana": "はい",
    "meaning": "ash",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "灰",
    "isKanji": true
  },
  {
    "word": "梅雨",
    "kana": "ばいう",
    "meaning": "rainy season",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "梅雨",
    "isKanji": true
  },
  {
    "word": "ハイキング",
    "kana": "ハイキング",
    "meaning": "hiking",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "配達",
    "kana": "はいたつ",
    "meaning": "delivery, distribution",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "配達",
    "isKanji": true
  },
  {
    "word": "パイプ",
    "kana": "パイプ",
    "meaning": "pipe; channels official or otherwise",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "俳優",
    "kana": "はいゆう",
    "meaning": "actor, actress, performer",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "俳優",
    "isKanji": true
  },
  {
    "word": "パイロット",
    "kana": "パイロット",
    "meaning": "pilot",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "生える",
    "kana": "はえる",
    "meaning": "teeth",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "生える",
    "isKanji": true
  },
  {
    "word": "墓",
    "kana": "はか",
    "meaning": "grave, tomb",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "墓",
    "isKanji": true
  },
  {
    "word": "馬鹿",
    "kana": "ばか",
    "meaning": "fool, idiot",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "馬鹿",
    "isKanji": true
  },
  {
    "word": "博士",
    "kana": "はかせ",
    "meaning": "doctorate, PhD., doctor",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "博士",
    "isKanji": true
  },
  {
    "word": "計る",
    "kana": "はかる",
    "meaning": "to measure, to weigh, to survey",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "計る",
    "isKanji": true
  },
  {
    "word": "量る",
    "kana": "はかる",
    "meaning": "to measure, to weigh, to survey",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "量る",
    "isKanji": true
  },
  {
    "word": "測る",
    "kana": "はかる",
    "meaning": "to measure, to weigh, to survey",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "測る",
    "isKanji": true
  },
  {
    "word": "掃く",
    "kana": "はく",
    "meaning": "to sweep, to brush, to gather up",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "掃く",
    "isKanji": true
  },
  {
    "word": "吐く",
    "kana": "はく",
    "meaning": "to throw up, to vomit",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "吐く",
    "isKanji": true
  },
  {
    "word": "拍手",
    "kana": "はくしゅ",
    "meaning": "clapping hands, applause",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "拍手",
    "isKanji": true
  },
  {
    "word": "莫大",
    "kana": "ばくだい",
    "meaning": "enormous, vast",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "莫大",
    "isKanji": true
  },
  {
    "word": "爆発",
    "kana": "ばくはつ",
    "meaning": "explosion, detonation, eruption",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "爆発",
    "isKanji": true
  },
  {
    "word": "博物館",
    "kana": "はくぶつかん",
    "meaning": "museum",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "博物館",
    "isKanji": true
  },
  {
    "word": "激しい",
    "kana": "はげしい",
    "meaning": "violent, vehement, intense",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "激しい",
    "isKanji": true
  },
  {
    "word": "はさみ",
    "kana": "はさみ",
    "meaning": "scissors",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "破産",
    "kana": "はさん",
    "meaning": "(persto getal) bankruptcy ((persto getal) bankruptcy) ((persto getal) bankruptcy ((personal) bankruptcy))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "破産",
    "isKanji": true
  },
  {
    "word": "端",
    "kana": "はし",
    "meaning": "end (e.g., from street), edge, margin (end (e.g., from street), edge, margin) (end (e.g., from street), edge, margin (end (e.g., of street), edge, margin))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "端",
    "isKanji": true
  },
  {
    "word": "始まり",
    "kana": "はじまり",
    "meaning": "origin, beginning",
    "difficulty": "normal",
    "category": "抽象",
    "kanji": "始まり",
    "isKanji": true
  },
  {
    "word": "パス",
    "kana": "パス",
    "meaning": "path, pass (in games)",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "外す",
    "kana": "はずす",
    "meaning": "to unfasten, to remove",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "外す",
    "isKanji": true
  },
  {
    "word": "パスポート",
    "kana": "パスポート",
    "meaning": "passport",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "外れる",
    "kana": "はずれる",
    "meaning": "e.g., from gear",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "外れる",
    "isKanji": true
  },
  {
    "word": "旗",
    "kana": "はた",
    "meaning": "flag",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "旗",
    "isKanji": true
  },
  {
    "word": "肌",
    "kana": "はだ",
    "meaning": "skin",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "肌",
    "isKanji": true
  },
  {
    "word": "裸",
    "kana": "はだか",
    "meaning": "naked, nude",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "裸",
    "isKanji": true
  },
  {
    "word": "畑",
    "kana": "はたけ",
    "meaning": "field, patch",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "畑",
    "isKanji": true
  },
  {
    "word": "働き",
    "kana": "はたらき",
    "meaning": "work, labor",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "働き",
    "isKanji": true
  },
  {
    "word": "バッグ",
    "kana": "バッグ",
    "meaning": "bag",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "発見",
    "kana": "はっけん",
    "meaning": "discovery, detection, finding",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "発見",
    "isKanji": true
  },
  {
    "word": "発行",
    "kana": "はっこう",
    "meaning": "publicatito gets",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "発行",
    "isKanji": true
  },
  {
    "word": "発車",
    "kana": "はっしゃ",
    "meaning": "departure of a vehicle",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "発車",
    "isKanji": true
  },
  {
    "word": "発射",
    "kana": "はっしゃ",
    "meaning": "firing, shooting, discharge",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "発射",
    "isKanji": true
  },
  {
    "word": "罰する",
    "kana": "ばっする",
    "meaning": "to punish, to penalize",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "罰する",
    "isKanji": true
  },
  {
    "word": "発達",
    "kana": "はったつ",
    "meaning": "development, growth",
    "difficulty": "normal",
    "category": "技術",
    "kanji": "発達",
    "isKanji": true
  },
  {
    "word": "ばったり",
    "kana": "ばったり",
    "meaning": "(to meet",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "発展",
    "kana": "はってん",
    "meaning": "development, growth, progress",
    "difficulty": "normal",
    "category": "技術",
    "kanji": "発展",
    "isKanji": true
  },
  {
    "word": "発明",
    "kana": "はつめい",
    "meaning": "invention",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "発明",
    "isKanji": true
  },
  {
    "word": "派手",
    "kana": "はで",
    "meaning": "showy, flashy, gaudy",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "派手",
    "isKanji": true
  },
  {
    "word": "話し合う",
    "kana": "はなしあう",
    "meaning": "to discuss, to talk together",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "話し合う",
    "isKanji": true
  },
  {
    "word": "離す",
    "kana": "はなす",
    "meaning": "to part, to separate",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "離す",
    "isKanji": true
  },
  {
    "word": "放す",
    "kana": "はなす",
    "meaning": "to separate, to set free",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "放す",
    "isKanji": true
  },
  {
    "word": "放れる",
    "kana": "はなれる",
    "meaning": "to leave, to get free, to cut oneself off",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "放れる",
    "isKanji": true
  },
  {
    "word": "羽",
    "kana": "はね",
    "meaning": "wing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "羽",
    "isKanji": true
  },
  {
    "word": "羽根",
    "kana": "はね",
    "meaning": "feather",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "羽根",
    "isKanji": true
  },
  {
    "word": "幅",
    "kana": "はば",
    "meaning": "width, breadth",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "幅",
    "isKanji": true
  },
  {
    "word": "母親",
    "kana": "ははおや",
    "meaning": "mother",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "母親",
    "isKanji": true
  },
  {
    "word": "省く",
    "kana": "はぶく",
    "meaning": "to omit, to eliminate",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "省く",
    "isKanji": true
  },
  {
    "word": "場面",
    "kana": "ばめん",
    "meaning": "e.g., from novel",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "場面",
    "isKanji": true
  },
  {
    "word": "流行る",
    "kana": "はやる",
    "meaning": "to be popular, to come into fashion",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "流行る",
    "isKanji": true
  },
  {
    "word": "腹",
    "kana": "はら",
    "meaning": "abdomen, belly, stomach",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "腹",
    "isKanji": true
  },
  {
    "word": "原",
    "kana": "はら",
    "meaning": "field, plain",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "原",
    "isKanji": true
  },
  {
    "word": "バランス",
    "kana": "バランス",
    "meaning": "balance",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "針",
    "kana": "はり",
    "meaning": "e.g., clock",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "針",
    "isKanji": true
  },
  {
    "word": "範囲",
    "kana": "はんい",
    "meaning": "extent, scope, range",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "範囲",
    "isKanji": true
  },
  {
    "word": "反抗",
    "kana": "はんこう",
    "meaning": "opposition, resistance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "反抗",
    "isKanji": true
  },
  {
    "word": "犯罪",
    "kana": "はんざい",
    "meaning": "crime",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "犯罪",
    "isKanji": true
  },
  {
    "word": "ハンサム",
    "kana": "ハンサム",
    "meaning": "handsome",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "反省",
    "kana": "はんせい",
    "meaning": "reflection, reconsideration, regret",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "反省",
    "isKanji": true
  },
  {
    "word": "判断",
    "kana": "はんだん",
    "meaning": "judgment, decision",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "判断",
    "isKanji": true
  },
  {
    "word": "販売",
    "kana": "はんばい",
    "meaning": "sale, selling, marketing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "販売",
    "isKanji": true
  },
  {
    "word": "灯",
    "kana": "ひ",
    "meaning": "light",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "灯",
    "isKanji": true
  },
  {
    "word": "被害",
    "kana": "ひがい",
    "meaning": "damage",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "被害",
    "isKanji": true
  },
  {
    "word": "比較",
    "kana": "ひかく",
    "meaning": "comparison",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "比較",
    "isKanji": true
  },
  {
    "word": "ピクニック",
    "kana": "ピクニック",
    "meaning": "picnic",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "悲劇",
    "kana": "ひげき",
    "meaning": "tragedy",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "悲劇",
    "isKanji": true
  },
  {
    "word": "飛行",
    "kana": "ひこう",
    "meaning": "aviation, flight",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "飛行",
    "isKanji": true
  },
  {
    "word": "膝",
    "kana": "ひざ",
    "meaning": "knee, lap",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "膝",
    "isKanji": true
  },
  {
    "word": "非常",
    "kana": "ひじょう",
    "meaning": "emergency, extraordinary, unusual",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "非常",
    "isKanji": true
  },
  {
    "word": "美人",
    "kana": "びじん",
    "meaning": "女性",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "美人",
    "isKanji": true
  },
  {
    "word": "額",
    "kana": "ひたい",
    "meaning": "forehead, brow",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "額",
    "isKanji": true
  },
  {
    "word": "日付",
    "kana": "ひづけ",
    "meaning": "date, dating",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "日付",
    "isKanji": true
  },
  {
    "word": "引越し",
    "kana": "ひっこし",
    "meaning": "moving, changing residence",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "引越し",
    "isKanji": true
  },
  {
    "word": "必死",
    "kana": "ひっし",
    "meaning": "desperation, frantic, inevitable result",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "必死",
    "isKanji": true
  },
  {
    "word": "ぴったり",
    "kana": "ぴったり",
    "meaning": "exactly, neatly, sharp",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "引っ張る",
    "kana": "ひっぱる",
    "meaning": "to pull, to stretch, to drag",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "引っ張る",
    "isKanji": true
  },
  {
    "word": "否定",
    "kana": "ひてい",
    "meaning": "negation, denial",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "否定",
    "isKanji": true
  },
  {
    "word": "一言",
    "kana": "ひとこと",
    "meaning": "one word",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "一言",
    "isKanji": true
  },
  {
    "word": "人込み",
    "kana": "ひとごみ",
    "meaning": "crowd of people",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "人込み",
    "isKanji": true
  },
  {
    "word": "等しい",
    "kana": "ひとしい",
    "meaning": "equal",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "等しい",
    "isKanji": true
  },
  {
    "word": "独り",
    "kana": "ひとり",
    "meaning": "alone, unmarried",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "独り",
    "isKanji": true
  },
  {
    "word": "一人一人",
    "kana": "ひとりひとり",
    "meaning": "one by one, each",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "一人一人",
    "isKanji": true
  },
  {
    "word": "批判",
    "kana": "ひはん",
    "meaning": "criticism",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "批判",
    "isKanji": true
  },
  {
    "word": "批評",
    "kana": "ひひょう",
    "meaning": "criticism, review, commentary",
    "difficulty": "normal",
    "category": "抽象",
    "kanji": "批評",
    "isKanji": true
  },
  {
    "word": "微妙",
    "kana": "びみょう",
    "meaning": "delicate, subtle",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "微妙",
    "isKanji": true
  },
  {
    "word": "紐",
    "kana": "ひも",
    "meaning": "string, cord",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "紐",
    "isKanji": true
  },
  {
    "word": "冷やす",
    "kana": "ひやす",
    "meaning": "to cool, to refrigerate",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "冷やす",
    "isKanji": true
  },
  {
    "word": "費用",
    "kana": "ひよう",
    "meaning": "cost, expense",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "費用",
    "isKanji": true
  },
  {
    "word": "表",
    "kana": "ひょう",
    "meaning": "table (e.g., Tab 1), chart, list",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "表",
    "isKanji": true
  },
  {
    "word": "秒",
    "kana": "びょう",
    "meaning": "60th min",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "秒",
    "isKanji": true
  },
  {
    "word": "評価",
    "kana": "ひょうか",
    "meaning": "assessment, evaluation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "評価",
    "isKanji": true
  },
  {
    "word": "表現",
    "kana": "ひょうげん",
    "meaning": "expression, presentation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "表現",
    "isKanji": true
  },
  {
    "word": "表情",
    "kana": "ひょうじょう",
    "meaning": "facial expression",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "表情",
    "isKanji": true
  },
  {
    "word": "平等",
    "kana": "びょうどう",
    "meaning": "equality, impartiality, evenness",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "平等",
    "isKanji": true
  },
  {
    "word": "評判",
    "kana": "ひょうばん",
    "meaning": "fame, reputation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "評判",
    "isKanji": true
  },
  {
    "word": "表面",
    "kana": "ひょうめん",
    "meaning": "surface, outside, face",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "表面",
    "isKanji": true
  },
  {
    "word": "広がる",
    "kana": "ひろがる",
    "meaning": "到 spread (out",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "広がる",
    "isKanji": true
  },
  {
    "word": "広げる",
    "kana": "ひろげる",
    "meaning": "to spread, to extend, to expand, to enlarge",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "広げる",
    "isKanji": true
  },
  {
    "word": "広める",
    "kana": "ひろめる",
    "meaning": "to broaden, to propagate",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "広める",
    "isKanji": true
  },
  {
    "word": "品",
    "kana": "ひん",
    "meaning": "goods; taste, elegance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "品",
    "isKanji": true
  },
  {
    "word": "瓶",
    "kana": "びん",
    "meaning": "bottle",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "瓶",
    "isKanji": true
  },
  {
    "word": "ピン",
    "kana": "ピン",
    "meaning": "pin",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "不",
    "kana": "ふ",
    "meaning": "un(~), nto get(~), negative prefix (un(~), nto get(~), negative prefix) (un(~), nto get(~), negative prefix (un(~), non(~), negative prefix))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "不",
    "isKanji": true
  },
  {
    "word": "不",
    "kana": "ぶ",
    "meaning": "un(~), nto get(~), negative prefix (un(~), nto get(~), negative prefix) (un(~), nto get(~), negative prefix (un(~), non(~), negative prefix))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "不",
    "isKanji": true
  },
  {
    "word": "無",
    "kana": "ぶ",
    "meaning": "nothing, naught, nil, zero",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "無",
    "isKanji": true
  },
  {
    "word": "分",
    "kana": "ぶ",
    "meaning": "dividing, part",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "分",
    "isKanji": true
  },
  {
    "word": "不安",
    "kana": "ふあん",
    "meaning": "anxiety, uneasiness",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "不安",
    "isKanji": true
  },
  {
    "word": "風景",
    "kana": "ふうけい",
    "meaning": "scenery",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "風景",
    "isKanji": true
  },
  {
    "word": "笛",
    "kana": "ふえ",
    "meaning": "flute, whistle",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "笛",
    "isKanji": true
  },
  {
    "word": "不可",
    "kana": "ふか",
    "meaning": "wrong, bad, impossible",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "不可",
    "isKanji": true
  },
  {
    "word": "深まる",
    "kana": "ふかまる",
    "meaning": "to deepen",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "深まる",
    "isKanji": true
  },
  {
    "word": "武器",
    "kana": "ぶき",
    "meaning": "weapon, arms",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "武器",
    "isKanji": true
  },
  {
    "word": "拭く",
    "kana": "ふく",
    "meaning": "to wipe, to dry",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "拭く",
    "isKanji": true
  },
  {
    "word": "服装",
    "kana": "ふくそう",
    "meaning": "clothes, attire",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "服装",
    "isKanji": true
  },
  {
    "word": "含む",
    "kana": "ふくむ",
    "meaning": "to contain, to include",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "含む",
    "isKanji": true
  },
  {
    "word": "含める",
    "kana": "ふくめる",
    "meaning": "to include",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "含める",
    "isKanji": true
  },
  {
    "word": "袋",
    "kana": "ふくろ",
    "meaning": "bag, sack",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "袋",
    "isKanji": true
  },
  {
    "word": "不幸",
    "kana": "ふこう",
    "meaning": "unhappiness, sorrow, misfortune",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "不幸",
    "isKanji": true
  },
  {
    "word": "節",
    "kana": "ふし",
    "meaning": "tune, tone, knob",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "節",
    "isKanji": true
  },
  {
    "word": "無事",
    "kana": "ぶじ",
    "meaning": "safety, peace",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "無事",
    "isKanji": true
  },
  {
    "word": "不思議",
    "kana": "ふしぎ",
    "meaning": "mystery, curiosity",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "不思議",
    "isKanji": true
  },
  {
    "word": "不自由",
    "kana": "ふじゆう",
    "meaning": "discomfort, disability, inconvenience",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "不自由",
    "isKanji": true
  },
  {
    "word": "夫人",
    "kana": "ふじん",
    "meaning": "wife, Mrs, madam",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "夫人",
    "isKanji": true
  },
  {
    "word": "婦人",
    "kana": "ふじん",
    "meaning": "女性 (same as 女性 (じょせい)、女の人 (おんなのひと)) (女性 (same as 女性 (じょせい)、女の人 (おんなのひと))) (女性 (same as 女性 (じょせい)、女の人 (おんなのひと)) (woman (same as 女性 (じょせい)、女の人 (おんなのひと))))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "婦人",
    "isKanji": true
  },
  {
    "word": "不正",
    "kana": "ふせい",
    "meaning": "injustice, unfairness",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "不正",
    "isKanji": true
  },
  {
    "word": "防ぐ",
    "kana": "ふせぐ",
    "meaning": "到 defend (against",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "防ぐ",
    "isKanji": true
  },
  {
    "word": "不足",
    "kana": "ふそく",
    "meaning": "insufficiency, shortage",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "不足",
    "isKanji": true
  },
  {
    "word": "舞台",
    "kana": "ぶたい",
    "meaning": "stage (theater)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "舞台",
    "isKanji": true
  },
  {
    "word": "双子",
    "kana": "ふたご",
    "meaning": "twins, a twin",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "双子",
    "isKanji": true
  },
  {
    "word": "再び",
    "kana": "ふたたび",
    "meaning": "again, once more, a second time",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "再び",
    "isKanji": true
  },
  {
    "word": "普段",
    "kana": "ふだん",
    "meaning": "in everyday situations, usually, ordinarily",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "普段",
    "isKanji": true
  },
  {
    "word": "縁",
    "kana": "ふち",
    "meaning": "edge, rim",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "縁",
    "isKanji": true
  },
  {
    "word": "打つ",
    "kana": "ぶつ",
    "meaning": "to hit, to strike",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "打つ",
    "isKanji": true
  },
  {
    "word": "不通",
    "kana": "ふつう",
    "meaning": "blockade, interruption, stoppage",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "不通",
    "isKanji": true
  },
  {
    "word": "ぶつかる",
    "kana": "ぶつかる",
    "meaning": "to strike, to collide with",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ぶつける",
    "kana": "ぶつける",
    "meaning": "to knock, to strike hard, to hit and attack",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "物質",
    "kana": "ぶっしつ",
    "meaning": "material, substance",
    "difficulty": "normal",
    "category": "物質",
    "kanji": "物質",
    "isKanji": true
  },
  {
    "word": "物理",
    "kana": "ぶつり",
    "meaning": "physics",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "物理",
    "isKanji": true
  },
  {
    "word": "筆",
    "kana": "ふで",
    "meaning": "writing brush",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "筆",
    "isKanji": true
  },
  {
    "word": "ふと",
    "kana": "ふと",
    "meaning": "suddenly, accidentally, incidentally",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "部分",
    "kana": "ぶぶん",
    "meaning": "portion, section, part",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "部分",
    "isKanji": true
  },
  {
    "word": "不平",
    "kana": "ふへい",
    "meaning": "complaint, discontent, dissatisfaction",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "不平",
    "isKanji": true
  },
  {
    "word": "不満",
    "kana": "ふまん",
    "meaning": "dissatisfaction, discontent, complaints",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "不満",
    "isKanji": true
  },
  {
    "word": "増やす",
    "kana": "ふやす",
    "meaning": "到 increase (v.t.",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "増やす",
    "isKanji": true
  },
  {
    "word": "殖やす",
    "kana": "ふやす",
    "meaning": "to increase, to add to",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "殖やす",
    "isKanji": true
  },
  {
    "word": "プラス",
    "kana": "プラス",
    "meaning": "plus",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "プラスチック",
    "kana": "プラスチック",
    "meaning": "plastic",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "プラン",
    "kana": "プラン",
    "meaning": "plan",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "不利",
    "kana": "ふり",
    "meaning": "disadvantage, drawback",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "不利",
    "isKanji": true
  },
  {
    "word": "振る",
    "kana": "ふる",
    "meaning": "actor",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "振る",
    "isKanji": true
  },
  {
    "word": "震える",
    "kana": "ふるえる",
    "meaning": "to shiver, to shake, to quake",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "震える",
    "isKanji": true
  },
  {
    "word": "ブレーキ",
    "kana": "ブレーキ",
    "meaning": "a brake",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "触れる",
    "kana": "ふれる",
    "meaning": "to touch, to feel, to violate",
    "difficulty": "normal",
    "category": "感情",
    "kanji": "触れる",
    "isKanji": true
  },
  {
    "word": "プロ",
    "kana": "プロ",
    "meaning": "professional",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "分",
    "kana": "ぶん",
    "meaning": "dividing, part, segment",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "分",
    "isKanji": true
  },
  {
    "word": "文",
    "kana": "ぶん",
    "meaning": "sentence",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "文",
    "isKanji": true
  },
  {
    "word": "雰囲気",
    "kana": "ふんいき",
    "meaning": "atmosphere (e.g., musical), mood, ambiance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "雰囲気",
    "isKanji": true
  },
  {
    "word": "分析",
    "kana": "ぶんせき",
    "meaning": "analysis",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "分析",
    "isKanji": true
  },
  {
    "word": "文明",
    "kana": "ぶんめい",
    "meaning": "civilization",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "文明",
    "isKanji": true
  },
  {
    "word": "分野",
    "kana": "ぶんや",
    "meaning": "field, sphere",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "分野",
    "isKanji": true
  },
  {
    "word": "塀",
    "kana": "へい",
    "meaning": "wall, fence",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "塀",
    "isKanji": true
  },
  {
    "word": "平均",
    "kana": "へいきん",
    "meaning": "equilibrium, balance, average",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "平均",
    "isKanji": true
  },
  {
    "word": "平和",
    "kana": "へいわ",
    "meaning": "peace",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "平和",
    "isKanji": true
  },
  {
    "word": "別に",
    "kana": "べつに",
    "meaning": "(not) particularly, nothing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "別に",
    "isKanji": true
  },
  {
    "word": "減らす",
    "kana": "へらす",
    "meaning": "to decrease, to diminish",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "減らす",
    "isKanji": true
  },
  {
    "word": "減る",
    "kana": "へる",
    "meaning": "到 decrease (in size cartoon number",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "減る",
    "isKanji": true
  },
  {
    "word": "ベルト",
    "kana": "ベルト",
    "meaning": "Belt for western clothes",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "変化",
    "kana": "へんか",
    "meaning": "change, variation, shift",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "変化",
    "isKanji": true
  },
  {
    "word": "ペンキ",
    "kana": "ペンキ",
    "meaning": "paint",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "変更",
    "kana": "へんこう",
    "meaning": "change, modification, alteration",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "変更",
    "isKanji": true
  },
  {
    "word": "ベンチ",
    "kana": "ベンチ",
    "meaning": "bench",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "弁当",
    "kana": "べんとう",
    "meaning": "box lunch",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "弁当",
    "isKanji": true
  },
  {
    "word": "方",
    "kana": "ほう",
    "meaning": "side",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "方",
    "isKanji": true
  },
  {
    "word": "法",
    "kana": "ほう",
    "meaning": "Act (law: the X Act)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "法",
    "isKanji": true
  },
  {
    "word": "棒",
    "kana": "ぼう",
    "meaning": "pole, rod, stick",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "棒",
    "isKanji": true
  },
  {
    "word": "冒険",
    "kana": "ぼうけん",
    "meaning": "risk, venture, adventure",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "冒険",
    "isKanji": true
  },
  {
    "word": "方向",
    "kana": "ほうこう",
    "meaning": "direction, course, way",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "方向",
    "isKanji": true
  },
  {
    "word": "報告",
    "kana": "ほうこく",
    "meaning": "report, information",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "報告",
    "isKanji": true
  },
  {
    "word": "宝石",
    "kana": "ほうせき",
    "meaning": "gem, jewel",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "宝石",
    "isKanji": true
  },
  {
    "word": "包装",
    "kana": "ほうそう",
    "meaning": "packing, wrapping",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "包装",
    "isKanji": true
  },
  {
    "word": "豊富",
    "kana": "ほうふ",
    "meaning": "abundance, plenty",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "豊富",
    "isKanji": true
  },
  {
    "word": "方法",
    "kana": "ほうほう",
    "meaning": "method, means, technique",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "方法",
    "isKanji": true
  },
  {
    "word": "方々",
    "kana": "ほうぼう",
    "meaning": "here and there, everywhere",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "方々",
    "isKanji": true
  },
  {
    "word": "訪問",
    "kana": "ほうもん",
    "meaning": "call, visit",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "訪問",
    "isKanji": true
  },
  {
    "word": "吠える",
    "kana": "ほえる",
    "meaning": "to bark, to howl",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "吠える",
    "isKanji": true
  },
  {
    "word": "ボーイ",
    "kana": "ボーイ",
    "meaning": "porter; boy",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ボート",
    "kana": "ボート",
    "meaning": "rowing boat",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ホーム",
    "kana": "ホーム",
    "meaning": "platform; home",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "他",
    "kana": "ほか",
    "meaning": "esp. places 和 things",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "他",
    "isKanji": true
  },
  {
    "word": "誇り",
    "kana": "ほこり",
    "meaning": "pride",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "誇り",
    "isKanji": true
  },
  {
    "word": "埃",
    "kana": "ほこり",
    "meaning": "dust",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "埃",
    "isKanji": true
  },
  {
    "word": "保証",
    "kana": "ほしょう",
    "meaning": "guarantee, assurance, warranty",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "保証",
    "isKanji": true
  },
  {
    "word": "保存",
    "kana": "ほぞん",
    "meaning": "preservation, conservation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "保存",
    "isKanji": true
  },
  {
    "word": "歩道",
    "kana": "ほどう",
    "meaning": "walkway",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "歩道",
    "isKanji": true
  },
  {
    "word": "仏",
    "kana": "ほとけ",
    "meaning": "Buddha",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "仏",
    "isKanji": true
  },
  {
    "word": "骨",
    "kana": "ほね",
    "meaning": "bone",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "骨",
    "isKanji": true
  },
  {
    "word": "炎",
    "kana": "ほのお",
    "meaning": "flame",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "炎",
    "isKanji": true
  },
  {
    "word": "頬",
    "kana": "ほほ",
    "meaning": "from face",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "頬",
    "isKanji": true
  },
  {
    "word": "頬",
    "kana": "ほお",
    "meaning": "from face",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "頬",
    "isKanji": true
  },
  {
    "word": "ほぼ",
    "kana": "ほぼ",
    "meaning": "almost, roughly",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "微笑む",
    "kana": "ほほえむ",
    "meaning": "to smile",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "微笑む",
    "isKanji": true
  },
  {
    "word": "堀",
    "kana": "ほり",
    "meaning": "moat, canal",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "堀",
    "isKanji": true
  },
  {
    "word": "濠",
    "kana": "ほり",
    "meaning": "moat",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "濠",
    "isKanji": true
  },
  {
    "word": "本当",
    "kana": "ほんと",
    "meaning": "truth, reality",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "本当",
    "isKanji": true
  },
  {
    "word": "本人",
    "kana": "ほんにん",
    "meaning": "the person himself",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "本人",
    "isKanji": true
  },
  {
    "word": "本物",
    "kana": "ほんもの",
    "meaning": "genuine article",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "本物",
    "isKanji": true
  },
  {
    "word": "ぼんやり",
    "kana": "ぼんやり",
    "meaning": "dim, faint, vague",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "間",
    "kana": "ま",
    "meaning": "space, room, pause",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "間",
    "isKanji": true
  },
  {
    "word": "まあ",
    "kana": "まあ",
    "meaning": "used when making a modest cartoon hesitant statement",
    "difficulty": "normal",
    "category": "經濟",
    "isKanji": false
  },
  {
    "word": "マーケット",
    "kana": "マーケット",
    "meaning": "market",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "マイク",
    "kana": "マイク",
    "meaning": "mic",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "迷子",
    "kana": "まいご",
    "meaning": "lost (stray) child",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "迷子",
    "isKanji": true
  },
  {
    "word": "マイナス",
    "kana": "マイナス",
    "meaning": "minus",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "任せる",
    "kana": "まかせる",
    "meaning": "to entrust to another, to leave to",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "任せる",
    "isKanji": true
  },
  {
    "word": "巻く",
    "kana": "まく",
    "meaning": "to wind, to coil, to roll",
    "difficulty": "normal",
    "category": "物質",
    "kanji": "巻く",
    "isKanji": true
  },
  {
    "word": "蒔く",
    "kana": "まく",
    "meaning": "seeds",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "蒔く",
    "isKanji": true
  },
  {
    "word": "撒く",
    "kana": "まく",
    "meaning": "to scatter, to sprinkle, to sow",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "撒く",
    "isKanji": true
  },
  {
    "word": "幕",
    "kana": "まく",
    "meaning": "curtain, act (in play)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "幕",
    "isKanji": true
  },
  {
    "word": "負け",
    "kana": "まけ",
    "meaning": "defeat, loss",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "負け",
    "isKanji": true
  },
  {
    "word": "孫",
    "kana": "まご",
    "meaning": "grandchild",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "孫",
    "isKanji": true
  },
  {
    "word": "まさか",
    "kana": "まさか",
    "meaning": "by no means",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "まさに",
    "kana": "まさに",
    "meaning": "correctly, surely",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "混ざる",
    "kana": "まざる",
    "meaning": "to be mixed, to mingle with",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "混ざる",
    "isKanji": true
  },
  {
    "word": "交ざる",
    "kana": "まざる",
    "meaning": "to be mixed, to mingle with",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "交ざる",
    "isKanji": true
  },
  {
    "word": "混じる",
    "kana": "まじる",
    "meaning": "to be mixed, to mingle with",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "混じる",
    "isKanji": true
  },
  {
    "word": "交じる",
    "kana": "まじる",
    "meaning": "to be mixed, to mingle with",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "交じる",
    "isKanji": true
  },
  {
    "word": "増す",
    "kana": "ます",
    "meaning": "to increase, to gain",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "増す",
    "isKanji": true
  },
  {
    "word": "貧しい",
    "kana": "まずしい",
    "meaning": "poor, needy",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "貧しい",
    "isKanji": true
  },
  {
    "word": "マスター",
    "kana": "マスター",
    "meaning": "bar owner, master (e.g., arts, science)",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ますます",
    "kana": "ますます",
    "meaning": "increasingly (same as もっと), more 和 more (increasingly (same as もっと), more 和 more) (increasingly (same as もっと), more 和 more (increasingly (same as もっと), more and more))",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "混ぜる",
    "kana": "まぜる",
    "meaning": "to mix, to stir",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "混ぜる",
    "isKanji": true
  },
  {
    "word": "交ぜる",
    "kana": "まぜる",
    "meaning": "to be mixed, to be blended with",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "交ぜる",
    "isKanji": true
  },
  {
    "word": "街",
    "kana": "まち",
    "meaning": "town; street, road",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "街",
    "isKanji": true
  },
  {
    "word": "松",
    "kana": "まつ",
    "meaning": "pine tree",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "松",
    "isKanji": true
  },
  {
    "word": "真っ赤",
    "kana": "まっか",
    "meaning": "from face",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "真っ赤",
    "isKanji": true
  },
  {
    "word": "全く",
    "kana": "まったく",
    "meaning": "really, completely",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "全く",
    "isKanji": true
  },
  {
    "word": "祭",
    "kana": "まつり",
    "meaning": "festival, feast",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "祭",
    "isKanji": true
  },
  {
    "word": "まとまる",
    "kana": "まとまる",
    "meaning": "to be collected, to be settled, to be in order",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "まとめる",
    "kana": "まとめる",
    "meaning": "to put in order, to collect, to bring to a conclusion",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "学ぶ",
    "kana": "まなぶ",
    "meaning": "to learn; to study",
    "difficulty": "normal",
    "category": "學術",
    "kanji": "学ぶ",
    "isKanji": true
  },
  {
    "word": "真似",
    "kana": "まね",
    "meaning": "mimicry, imitation, behavior",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "真似",
    "isKanji": true
  },
  {
    "word": "招く",
    "kana": "まねく",
    "meaning": "to invite",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "招く",
    "isKanji": true
  },
  {
    "word": "まぶしい",
    "kana": "まぶしい",
    "meaning": "dazzling, radiant",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "柵",
    "kana": "さく",
    "meaning": "fence, paling",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "柵",
    "isKanji": true
  },
  {
    "word": "裂ける",
    "kana": "さける",
    "meaning": "to split, to tear, to burst",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "裂ける",
    "isKanji": true
  },
  {
    "word": "裁く",
    "kana": "さばく",
    "meaning": "to judge",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "裁く",
    "isKanji": true
  },
  {
    "word": "酸化",
    "kana": "さんか",
    "meaning": "oxidation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "酸化",
    "isKanji": true
  },
  {
    "word": "死",
    "kana": "し",
    "meaning": "death, decease",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "死",
    "isKanji": true
  },
  {
    "word": "資格",
    "kana": "しかく",
    "meaning": "qualifications, requirements, capabilities",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "資格",
    "isKanji": true
  },
  {
    "word": "視覚",
    "kana": "しかく",
    "meaning": "sense of sight, vision",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "視覚",
    "isKanji": true
  },
  {
    "word": "指揮",
    "kana": "しき",
    "meaning": "command, direction",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "指揮",
    "isKanji": true
  },
  {
    "word": "磁気",
    "kana": "じき",
    "meaning": "magnetism",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "磁気",
    "isKanji": true
  },
  {
    "word": "磁器",
    "kana": "じき",
    "meaning": "porcelain, china",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "磁器",
    "isKanji": true
  },
  {
    "word": "自己",
    "kana": "じこ",
    "meaning": "self, oneself",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "自己",
    "isKanji": true
  },
  {
    "word": "字体",
    "kana": "じたい",
    "meaning": "font, lettering",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "字体",
    "isKanji": true
  },
  {
    "word": "辞退",
    "kana": "じたい",
    "meaning": "refusal",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "辞退",
    "isKanji": true
  },
  {
    "word": "視点",
    "kana": "してん",
    "meaning": "opinion, point of view, visual point",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "視点",
    "isKanji": true
  },
  {
    "word": "脂肪",
    "kana": "しぼう",
    "meaning": "fat, grease",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "脂肪",
    "isKanji": true
  },
  {
    "word": "志望",
    "kana": "しぼう",
    "meaning": "wish, desire, ambition",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "志望",
    "isKanji": true
  },
  {
    "word": "衆",
    "kana": "しゅう",
    "meaning": "masses, people",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "衆",
    "isKanji": true
  },
  {
    "word": "住",
    "kana": "じゅう",
    "meaning": "dwelling, living",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "住",
    "isKanji": true
  },
  {
    "word": "修飾",
    "kana": "しゅうしょく",
    "meaning": "gram",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "修飾",
    "isKanji": true
  },
  {
    "word": "私用",
    "kana": "しよう",
    "meaning": "personal use, private business",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "私用",
    "isKanji": true
  },
  {
    "word": "仕様",
    "kana": "しよう",
    "meaning": "way, method, specification",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "仕様",
    "isKanji": true
  },
  {
    "word": "情",
    "kana": "じょう",
    "meaning": "feelings, emotion, passion",
    "difficulty": "normal",
    "category": "感情",
    "kanji": "情",
    "isKanji": true
  },
  {
    "word": "生涯",
    "kana": "しょうがい",
    "meaning": "one's lifetime",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "生涯",
    "isKanji": true
  },
  {
    "word": "上司",
    "kana": "じょうし",
    "meaning": "one's superior",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "上司",
    "isKanji": true
  },
  {
    "word": "正体",
    "kana": "しょうたい",
    "meaning": "natural shape, one's true colors, true character",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "正体",
    "isKanji": true
  },
  {
    "word": "照明",
    "kana": "しょうめい",
    "meaning": "illumination",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "照明",
    "isKanji": true
  },
  {
    "word": "女史",
    "kana": "じょし",
    "meaning": "Ms.",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "女史",
    "isKanji": true
  },
  {
    "word": "助詞",
    "kana": "じょし",
    "meaning": "(gram) particle(s), postpositito get ((gram) particle(s), postpositito get) ((gram) particle(s), postpositito get ((gram) particle(s), postposition))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "助詞",
    "isKanji": true
  },
  {
    "word": "ショック",
    "kana": "ショック",
    "meaning": "shock",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "進行",
    "kana": "しんこう",
    "meaning": "advance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "進行",
    "isKanji": true
  },
  {
    "word": "新興",
    "kana": "しんこう",
    "meaning": "rising, developing, emergent",
    "difficulty": "normal",
    "category": "技術",
    "kanji": "新興",
    "isKanji": true
  },
  {
    "word": "振興",
    "kana": "しんこう",
    "meaning": "promotion, encouragement",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "振興",
    "isKanji": true
  },
  {
    "word": "申告",
    "kana": "しんこく",
    "meaning": "report, statement",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "申告",
    "isKanji": true
  },
  {
    "word": "真理",
    "kana": "しんり",
    "meaning": "truth",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "真理",
    "isKanji": true
  },
  {
    "word": "水洗",
    "kana": "すいせん",
    "meaning": "flushing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "水洗",
    "isKanji": true
  },
  {
    "word": "ストレス",
    "kana": "ストレス",
    "meaning": "stress",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "擦る",
    "kana": "する",
    "meaning": "to rub, to chafe",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "擦る",
    "isKanji": true
  },
  {
    "word": "正規",
    "kana": "せいき",
    "meaning": "regular, legitimate",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "正規",
    "isKanji": true
  },
  {
    "word": "精巧",
    "kana": "せいこう",
    "meaning": "elaborate, delicate, exquisite",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "精巧",
    "isKanji": true
  },
  {
    "word": "精算",
    "kana": "せいさん",
    "meaning": "exact calculation, adjustment",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "精算",
    "isKanji": true
  },
  {
    "word": "成年",
    "kana": "せいねん",
    "meaning": "majority, adult age",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "成年",
    "isKanji": true
  },
  {
    "word": "声明",
    "kana": "せいめい",
    "meaning": "declaration, statement, proclamation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "声明",
    "isKanji": true
  },
  {
    "word": "姓名",
    "kana": "せいめい",
    "meaning": "full name",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "姓名",
    "isKanji": true
  },
  {
    "word": "生理",
    "kana": "せいり",
    "meaning": "physiology, menses",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "生理",
    "isKanji": true
  },
  {
    "word": "節",
    "kana": "せつ",
    "meaning": "when, if; section; clause",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "節",
    "isKanji": true
  },
  {
    "word": "膳",
    "kana": "ぜん",
    "meaning": "(small) table, tray, meal",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "膳",
    "isKanji": true
  },
  {
    "word": "禅",
    "kana": "ぜん",
    "meaning": "Zen (Buddhism)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "禅",
    "isKanji": true
  },
  {
    "word": "先行",
    "kana": "せんこう",
    "meaning": "preceding, going first",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "先行",
    "isKanji": true
  },
  {
    "word": "選考",
    "kana": "せんこう",
    "meaning": "selection, screening",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "選考",
    "isKanji": true
  },
  {
    "word": "相",
    "kana": "そう",
    "meaning": "aspect, phase, countenance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "相",
    "isKanji": true
  },
  {
    "word": "沿う",
    "kana": "そう",
    "meaning": "to run along, to follow",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "沿う",
    "isKanji": true
  },
  {
    "word": "添う",
    "kana": "そう",
    "meaning": "to accompany, to comply with",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "添う",
    "isKanji": true
  },
  {
    "word": "僧",
    "kana": "そう",
    "meaning": "monk, priest",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "僧",
    "isKanji": true
  },
  {
    "word": "像",
    "kana": "ぞう",
    "meaning": "statue, image",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "像",
    "isKanji": true
  },
  {
    "word": "捜査",
    "kana": "そうさ",
    "meaning": "esp. in criminal investigatito gets, investigatito get",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "捜査",
    "isKanji": true
  },
  {
    "word": "操縦",
    "kana": "そうじゅう",
    "meaning": "management, control, manipulation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "操縦",
    "isKanji": true
  },
  {
    "word": "創造",
    "kana": "そうぞう",
    "meaning": "creation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "創造",
    "isKanji": true
  },
  {
    "word": "隊",
    "kana": "たい",
    "meaning": "party, troops",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "隊",
    "isKanji": true
  },
  {
    "word": "退学",
    "kana": "たいがく",
    "meaning": "dropping out of school",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "退学",
    "isKanji": true
  },
  {
    "word": "タイトル",
    "kana": "タイトル",
    "meaning": "title",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ダウン",
    "kana": "ダウン",
    "meaning": "down",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "高まる",
    "kana": "たかまる",
    "meaning": "v.i.",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "高まる",
    "isKanji": true
  },
  {
    "word": "断つ",
    "kana": "たつ",
    "meaning": "to sever, to cut off",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "断つ",
    "isKanji": true
  },
  {
    "word": "盾",
    "kana": "たて",
    "meaning": "shield",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "盾",
    "isKanji": true
  },
  {
    "word": "例え",
    "kana": "たとえ",
    "meaning": "example; even though",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "例え",
    "isKanji": true
  },
  {
    "word": "チャイム",
    "kana": "チャイム",
    "meaning": "chime",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "挑戦",
    "kana": "ちょうせん",
    "meaning": "challenge, defiance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "挑戦",
    "isKanji": true
  },
  {
    "word": "治療",
    "kana": "ちりょう",
    "meaning": "medical treatment",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "治療",
    "isKanji": true
  },
  {
    "word": "対",
    "kana": "つい",
    "meaning": "pair, couple, set",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "対",
    "isKanji": true
  },
  {
    "word": "接ぐ",
    "kana": "つぐ",
    "meaning": "trees",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "接ぐ",
    "isKanji": true
  },
  {
    "word": "継ぐ",
    "kana": "つぐ",
    "meaning": "someone in a 商業from cartoon inheritance (to succeed (someone in a business or inheritance",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "継ぐ",
    "isKanji": true
  },
  {
    "word": "摘む",
    "kana": "つむ",
    "meaning": "to pluck, to pick, to trim",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "摘む",
    "isKanji": true
  },
  {
    "word": "露",
    "kana": "つゆ",
    "meaning": "dew",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "露",
    "isKanji": true
  },
  {
    "word": "強まる",
    "kana": "つよまる",
    "meaning": "to get strong, to gain strength",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "強まる",
    "isKanji": true
  },
  {
    "word": "強める",
    "kana": "つよめる",
    "meaning": "to strengthen, to emphasize",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "強める",
    "isKanji": true
  },
  {
    "word": "データ",
    "kana": "データ",
    "meaning": "data",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "デザイン",
    "kana": "デザイン",
    "meaning": "design",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "デザート",
    "kana": "デザート",
    "meaning": "dessert",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "転校",
    "kana": "てんこう",
    "meaning": "change schools",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "転校",
    "isKanji": true
  },
  {
    "word": "伝言",
    "kana": "でんごん",
    "meaning": "verbal message",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "伝言",
    "isKanji": true
  },
  {
    "word": "と",
    "kana": "と",
    "meaning": "and",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "問う",
    "kana": "とう",
    "meaning": "to ask, to question",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "問う",
    "isKanji": true
  },
  {
    "word": "棟",
    "kana": "とう",
    "meaning": "from roof (ridge (of roof",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "棟",
    "isKanji": true
  },
  {
    "word": "倒産",
    "kana": "とうさん",
    "meaning": "(ccartoonpcartoonate) bankruptcy, insolvency ((ccartoonpcartoonate) bankruptcy, insolvency) ((ccartoonpcartoonate) bankruptcy, insolvency ((corporate) bankruptcy, insolvency))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "倒産",
    "isKanji": true
  },
  {
    "word": "同士",
    "kana": "どうし",
    "meaning": "one another, companion, comrade",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "同士",
    "isKanji": true
  },
  {
    "word": "同志",
    "kana": "どうし",
    "meaning": "same mind, comrade, kindred soul",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "同志",
    "isKanji": true
  },
  {
    "word": "当然",
    "kana": "とうぜん",
    "meaning": "obvious; natural",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "当然",
    "isKanji": true
  },
  {
    "word": "動揺",
    "kana": "どうよう",
    "meaning": "disturbance, flutter shock",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "動揺",
    "isKanji": true
  },
  {
    "word": "説く",
    "kana": "とく",
    "meaning": "to explain, to advocate",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "説く",
    "isKanji": true
  },
  {
    "word": "綴じる",
    "kana": "とじる",
    "meaning": "to bind, to file",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "綴じる",
    "isKanji": true
  },
  {
    "word": "供",
    "kana": "とも",
    "meaning": "accompanying, attendant, companion, retinue",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "供",
    "isKanji": true
  },
  {
    "word": "並",
    "kana": "なみ",
    "meaning": "medium (e.g., food serving size, quality, price, etc.), cartoondinary (medium (e.g., food serving size, quality, price, etc.), cartoondinary) (medium (e.g., food serving size, quality, price, etc.), cartoondinary (medium (e.g., food serving size, quality, price, etc.), ordinary))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "並",
    "isKanji": true
  },
  {
    "word": "慣らす",
    "kana": "ならす",
    "meaning": "to accustom",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "慣らす",
    "isKanji": true
  },
  {
    "word": "馴らす",
    "kana": "ならす",
    "meaning": "to domesticate, to tame",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "馴らす",
    "isKanji": true
  },
  {
    "word": "難",
    "kana": "なん",
    "meaning": "difficulty, hardships, defect",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "難",
    "isKanji": true
  },
  {
    "word": "音",
    "kana": "ね",
    "meaning": "sound, note",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "音",
    "isKanji": true
  },
  {
    "word": "年鑑",
    "kana": "ねんかん",
    "meaning": "yearbook",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "年鑑",
    "isKanji": true
  },
  {
    "word": "脳",
    "kana": "のう",
    "meaning": "brain, memory",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "脳",
    "isKanji": true
  },
  {
    "word": "臨む",
    "kana": "のぞむ",
    "meaning": "function",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "臨む",
    "isKanji": true
  },
  {
    "word": "肺",
    "kana": "はい",
    "meaning": "lung",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "肺",
    "isKanji": true
  },
  {
    "word": "映える",
    "kana": "はえる",
    "meaning": "to shine, to look attractive, to look pretty",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "映える",
    "isKanji": true
  },
  {
    "word": "諮る",
    "kana": "はかる",
    "meaning": "to consult with, to confer",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "諮る",
    "isKanji": true
  },
  {
    "word": "図る",
    "kana": "はかる",
    "meaning": "to plot, to attempt, to devise, to design, to refer A to B",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "図る",
    "isKanji": true
  },
  {
    "word": "生やす",
    "kana": "はやす",
    "meaning": "to grow, to cultivate, to wear beard",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "生やす",
    "isKanji": true
  },
  {
    "word": "班",
    "kana": "はん",
    "meaning": "mil",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "班",
    "isKanji": true
  },
  {
    "word": "判",
    "kana": "はん",
    "meaning": "from paper cartoon books",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "判",
    "isKanji": true
  },
  {
    "word": "版",
    "kana": "はん",
    "meaning": "edition",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "版",
    "isKanji": true
  },
  {
    "word": "碑",
    "kana": "ひ",
    "meaning": "stone monument bearing an inscription",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "碑",
    "isKanji": true
  },
  {
    "word": "非行",
    "kana": "ひこう",
    "meaning": "delinquency, misconduct",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "非行",
    "isKanji": true
  },
  {
    "word": "票",
    "kana": "ひょう",
    "meaning": "label, ballot, sign",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "票",
    "isKanji": true
  },
  {
    "word": "広まる",
    "kana": "ひろまる",
    "meaning": "to spread, to be propagated",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "広まる",
    "isKanji": true
  },
  {
    "word": "深める",
    "kana": "ふかめる",
    "meaning": "to deepen, to heighten, to intensify",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "深める",
    "isKanji": true
  },
  {
    "word": "福",
    "kana": "ふく",
    "meaning": "good fortune",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "福",
    "isKanji": true
  },
  {
    "word": "振り",
    "kana": "ふり",
    "meaning": "style, manner",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "振り",
    "isKanji": true
  },
  {
    "word": "経る",
    "kana": "へる",
    "meaning": "to pass, to elapse, to experience",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "経る",
    "isKanji": true
  },
  {
    "word": "保護",
    "kana": "ほご",
    "meaning": "care, protection, shelter",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "保護",
    "isKanji": true
  },
  {
    "word": "保障",
    "kana": "ほしょう",
    "meaning": "guarantee, security, warranty",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "保障",
    "isKanji": true
  },
  {
    "word": "補償",
    "kana": "ほしょう",
    "meaning": "compensation, reparation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "補償",
    "isKanji": true
  },
  {
    "word": "ほっと",
    "kana": "ほっと",
    "meaning": "feel relieved",
    "difficulty": "normal",
    "category": "感情",
    "isKanji": false
  },
  {
    "word": "前もって",
    "kana": "まえもって",
    "meaning": "in advance, beforehand, previously",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "前もって",
    "isKanji": true
  },
  {
    "word": "膜",
    "kana": "まく",
    "meaning": "membrane, film",
    "difficulty": "normal",
    "category": "技術",
    "kanji": "膜",
    "isKanji": true
  },
  {
    "word": "マスコミ",
    "kana": "マスコミ",
    "meaning": "mass communication",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "股",
    "kana": "また",
    "meaning": "thigh, crotch",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "股",
    "isKanji": true
  },
  {
    "word": "末",
    "kana": "まつ",
    "meaning": "the end of",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "末",
    "isKanji": true
  },
  {
    "word": "マッサージ",
    "kana": "マッサージ",
    "meaning": "massage",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "見掛ける",
    "kana": "みかける",
    "meaning": "到 (happen 到 see",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "見掛ける",
    "isKanji": true
  },
  {
    "word": "捲る",
    "kana": "めくる",
    "meaning": "to turn over, to turn pages of a book",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "捲る",
    "isKanji": true
  },
  {
    "word": "メッセージ",
    "kana": "メッセージ",
    "meaning": "message",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "野党",
    "kana": "やとう",
    "meaning": "opposition party",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "野党",
    "isKanji": true
  },
  {
    "word": "優",
    "kana": "ゆう",
    "meaning": "superiority, high grade",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "優",
    "isKanji": true
  },
  {
    "word": "有機",
    "kana": "ゆうき",
    "meaning": "organic",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "有機",
    "isKanji": true
  },
  {
    "word": "世",
    "kana": "よ",
    "meaning": "world, society, generation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "世",
    "isKanji": true
  },
  {
    "word": "良い",
    "kana": "よい",
    "meaning": "good, nice",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "良い",
    "isKanji": true
  },
  {
    "word": "予想",
    "kana": "よそう",
    "meaning": "expectation, anticipation, prediction",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "予想",
    "isKanji": true
  },
  {
    "word": "弱まる",
    "kana": "よわまる",
    "meaning": "to weaken, to be emaciated, to be dejected",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "弱まる",
    "isKanji": true
  },
  {
    "word": "弱める",
    "kana": "よわめる",
    "meaning": "to weaken",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "弱める",
    "isKanji": true
  },
  {
    "word": "ラベル",
    "kana": "ラベル",
    "meaning": "label",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ルール",
    "kana": "ルール",
    "meaning": "rule",
    "difficulty": "normal",
    "category": "政治",
    "isKanji": false
  },
  {
    "word": "枠",
    "kana": "わく",
    "meaning": "frame, slide",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "枠",
    "isKanji": true
  },
  {
    "word": "踏む",
    "kana": "ふむ",
    "meaning": "to step on, to tread on",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "踏む",
    "isKanji": true
  },
  {
    "word": "すっと",
    "kana": "すっと",
    "meaning": "straight, quickly",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "とうとう",
    "kana": "とうとう",
    "meaning": "finally, at last",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "鳴る",
    "kana": "なる",
    "meaning": "v.i.",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "鳴る",
    "isKanji": true
  },
  {
    "word": "しっかり",
    "kana": "しっかり",
    "meaning": "firmly, steady",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "生きる",
    "kana": "いきる",
    "meaning": "to live",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "生きる",
    "isKanji": true
  },
  {
    "word": "苦い",
    "kana": "にがい",
    "meaning": "bitter",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "苦い",
    "isKanji": true
  },
  {
    "word": "沸く",
    "kana": "わく",
    "meaning": "to boil, to grow hot",
    "difficulty": "normal",
    "category": "物質",
    "kanji": "沸く",
    "isKanji": true
  },
  {
    "word": "意見",
    "kana": "いけん",
    "meaning": "opinion, view, idea",
    "difficulty": "normal",
    "category": "抽象",
    "kanji": "意見",
    "isKanji": true
  },
  {
    "word": "やはり; やっぱり",
    "kana": "やはり",
    "meaning": "as I thought, absolutely",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ステレオ",
    "kana": "ステレオ",
    "meaning": "stereo",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "医学",
    "kana": "いがく",
    "meaning": "medical science",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "医学",
    "isKanji": true
  },
  {
    "word": "テキスト",
    "kana": "テキスト",
    "meaning": "text; text book",
    "difficulty": "normal",
    "category": "文獻",
    "isKanji": false
  },
  {
    "word": "折る",
    "kana": "おる",
    "meaning": "to snap, to break; to bend",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "折る",
    "isKanji": true
  },
  {
    "word": "うかがう",
    "kana": "うかがう",
    "meaning": "to ask",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "聞こえる",
    "kana": "きこえる",
    "meaning": "to be heard, to be audible",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "聞こえる",
    "isKanji": true
  },
  {
    "word": "必ず",
    "kana": "かならず",
    "meaning": "surely, certainly",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "必ず",
    "isKanji": true
  },
  {
    "word": "壊す",
    "kana": "こわす",
    "meaning": "to break, to break down",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "壊す",
    "isKanji": true
  },
  {
    "word": "オートバイ",
    "kana": "オートバイ",
    "meaning": "motcartooncycle (lit: au到-bi(ke)) (motcartooncycle (lit: au到-bi(ke))) (motcartooncycle (lit: au到-bi(ke)) (motorcycle (lit: auto-bi(ke))))",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "運動",
    "kana": "うんどうする",
    "meaning": "exercise",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "運動",
    "isKanji": true
  },
  {
    "word": "止む",
    "kana": "やむ",
    "meaning": "to cease, to stop",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "止む",
    "isKanji": true
  },
  {
    "word": "もし",
    "kana": "もし",
    "meaning": "if",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "表",
    "kana": "おもて",
    "meaning": "surface; front; outside",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "表",
    "isKanji": true
  },
  {
    "word": "運転手",
    "kana": "うんてんしゅ",
    "meaning": "by occupatito get",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "運転手",
    "isKanji": true
  },
  {
    "word": "心配",
    "kana": "しんぱいする",
    "meaning": "worry, concern",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "心配",
    "isKanji": true
  },
  {
    "word": "別",
    "kana": "べつ",
    "meaning": "distinction, different",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "別",
    "isKanji": true
  },
  {
    "word": "非常に",
    "kana": "ひじょうに",
    "meaning": "extremely; very",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "非常に",
    "isKanji": true
  },
  {
    "word": "柔らかい",
    "kana": "やわらかい",
    "meaning": "soft (in reference to texture",
    "difficulty": "normal",
    "category": "文獻",
    "kanji": "柔らかい",
    "isKanji": true
  },
  {
    "word": "気",
    "kana": "き",
    "meaning": "spirit, mood",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "気",
    "isKanji": true
  },
  {
    "word": "比べる",
    "kana": "くらべる",
    "meaning": "to compare",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "比べる",
    "isKanji": true
  },
  {
    "word": "ほとんど",
    "kana": "ほとんど",
    "meaning": "mostly, almost",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "つもり",
    "kana": "つもり",
    "meaning": "intention, plan",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "郊外",
    "kana": "こうがい",
    "meaning": "suburb, outskirts",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "郊外",
    "isKanji": true
  },
  {
    "word": "だめ",
    "kana": "だめ",
    "meaning": "useless, no good, hopeless",
    "difficulty": "normal",
    "category": "經濟",
    "isKanji": false
  },
  {
    "word": "売り場",
    "kana": "うりば",
    "meaning": "place where things are sold",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "売り場",
    "isKanji": true
  },
  {
    "word": "正月",
    "kana": "しょうがつ",
    "meaning": "New Year, New Year's Day",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "正月",
    "isKanji": true
  },
  {
    "word": "規則",
    "kana": "きそく",
    "meaning": "rule, regulation",
    "difficulty": "normal",
    "category": "政治",
    "kanji": "規則",
    "isKanji": true
  },
  {
    "word": "発音",
    "kana": "はつおん",
    "meaning": "pronunciation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "発音",
    "isKanji": true
  },
  {
    "word": "屋上",
    "kana": "おくじょう",
    "meaning": "rooftop",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "屋上",
    "isKanji": true
  },
  {
    "word": "失礼",
    "kana": "しつれい",
    "meaning": "discourtesy, impoliteness; Excuse me",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "失礼",
    "isKanji": true
  },
  {
    "word": "アフリカ",
    "kana": "アフリカ",
    "meaning": "Africa",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "点",
    "kana": "てん",
    "meaning": "mark, score, grade; point, dot",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "点",
    "isKanji": true
  },
  {
    "word": "一生懸命",
    "kana": "いっしょうけんめい",
    "meaning": "very hard (as in \"到 work hard\"), with utmost effort (非常 hard (as in \"到 work hard\"), with utmost effort) (非常 hard (as in \"到 work hard\"), with utmost effort (very hard (as in \"to work hard\"), with utmost effort))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "一生懸命",
    "isKanji": true
  },
  {
    "word": "機会",
    "kana": "きかい",
    "meaning": "chance, opportunity",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "機会",
    "isKanji": true
  },
  {
    "word": "建てる",
    "kana": "たてる",
    "meaning": "to build",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "建てる",
    "isKanji": true
  },
  {
    "word": "複雑",
    "kana": "ふくざつ",
    "meaning": "complexity, complication",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "複雑",
    "isKanji": true
  },
  {
    "word": "布団",
    "kana": "ふとん",
    "meaning": "futon",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "布団",
    "isKanji": true
  },
  {
    "word": "大事",
    "kana": "だいじ",
    "meaning": "important, valuable, serious matter",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "大事",
    "isKanji": true
  },
  {
    "word": "贈り物",
    "kana": "おくりもの",
    "meaning": "a gift; a present",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "贈り物",
    "isKanji": true
  },
  {
    "word": "注意",
    "kana": "ちゅうい",
    "meaning": "caution, attention",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "注意",
    "isKanji": true
  },
  {
    "word": "そう",
    "kana": "そう",
    "meaning": "真from, (is that) so; yes, right (真from, (is that) so; yes, right) (真from, (is that) so; yes, right (really, (is that) so; yes, right))",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "通る",
    "kana": "とおる",
    "meaning": "到 pass (by",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "通る",
    "isKanji": true
  },
  {
    "word": "過ぎる",
    "kana": "すぎる",
    "meaning": "to exceed, to go beyond",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "過ぎる",
    "isKanji": true
  },
  {
    "word": "レポート; リポート",
    "kana": "レポート",
    "meaning": "report",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "葉",
    "kana": "は",
    "meaning": "leaf",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "葉",
    "isKanji": true
  },
  {
    "word": "必要",
    "kana": "ひつよう",
    "meaning": "necessary",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "必要",
    "isKanji": true
  },
  {
    "word": "課長",
    "kana": "かちょう",
    "meaning": "section manager",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "課長",
    "isKanji": true
  },
  {
    "word": "すると",
    "kana": "すると",
    "meaning": "and, then",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "止める",
    "kana": "やめる",
    "meaning": "to end, to stop",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "止める",
    "isKanji": true
  },
  {
    "word": "ガラス",
    "kana": "ガラス",
    "meaning": "glass, pane",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "エスカレーター",
    "kana": "エスカレーター",
    "meaning": "escalator",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "人口",
    "kana": "じんこう",
    "meaning": "population",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "人口",
    "isKanji": true
  },
  {
    "word": "絹",
    "kana": "きぬ",
    "meaning": "silk",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "絹",
    "isKanji": true
  },
  {
    "word": "ちっとも",
    "kana": "ちっとも",
    "meaning": "not at all (neg. verb)",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "深い",
    "kana": "ふかい",
    "meaning": "deep, profound",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "深い",
    "isKanji": true
  },
  {
    "word": "壊れる",
    "kana": "こわれる",
    "meaning": "to be broken, to break",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "壊れる",
    "isKanji": true
  },
  {
    "word": "揺れる",
    "kana": "ゆれる",
    "meaning": "to shake, to sway",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "揺れる",
    "isKanji": true
  },
  {
    "word": "落る",
    "kana": "おちる",
    "meaning": "to fall, to drop",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "落る",
    "isKanji": true
  },
  {
    "word": "できるだけ",
    "kana": "できるだけ",
    "meaning": "if at all possible, as much as possible",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "中学校",
    "kana": "ちゅうがっこう",
    "meaning": "junior high school pupil",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "中学校",
    "isKanji": true
  },
  {
    "word": "ガス",
    "kana": "ガス",
    "meaning": "gas",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "祈る",
    "kana": "いのる",
    "meaning": "to pray; to wish",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "祈る",
    "isKanji": true
  },
  {
    "word": "盛ん",
    "kana": "さかん",
    "meaning": "prosperous, active, thriving",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "盛ん",
    "isKanji": true
  },
  {
    "word": "噛む",
    "kana": "かむ",
    "meaning": "to bite, to chew",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "噛む",
    "isKanji": true
  },
  {
    "word": "浅い",
    "kana": "あさい",
    "meaning": "shallow, superficial",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "浅い",
    "isKanji": true
  },
  {
    "word": "嘘",
    "kana": "うそ",
    "meaning": "lie",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "それに",
    "kana": "それに",
    "meaning": "moreover; besides",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "西洋",
    "kana": "せいよう",
    "meaning": "the West, Western countries",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "西洋",
    "isKanji": true
  },
  {
    "word": "時代",
    "kana": "じだい",
    "meaning": "age, period, epoch, era",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "時代",
    "isKanji": true
  },
  {
    "word": "申し上げる",
    "kana": "もうしあげる",
    "meaning": "(humble",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "申し上げる",
    "isKanji": true
  },
  {
    "word": "出席",
    "kana": "しゅっせきする",
    "meaning": "attendance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "出席",
    "isKanji": true
  },
  {
    "word": "迎える",
    "kana": "むかえる",
    "meaning": "to welcome; to meet; to greet",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "迎える",
    "isKanji": true
  },
  {
    "word": "触る",
    "kana": "さわる",
    "meaning": "to touch, to feel",
    "difficulty": "normal",
    "category": "感情",
    "kanji": "触る",
    "isKanji": true
  },
  {
    "word": "建て",
    "kana": "だて",
    "meaning": "~ storied, separate housing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "建て",
    "isKanji": true
  },
  {
    "word": "動物園",
    "kana": "どうぶつえん",
    "meaning": "zoo",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "動物園",
    "isKanji": true
  },
  {
    "word": "捕まえる",
    "kana": "つかまえる",
    "meaning": "to catch, to arrest",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "捕まえる",
    "isKanji": true
  },
  {
    "word": "決まる",
    "kana": "きまる",
    "meaning": "v.i.",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "決まる",
    "isKanji": true
  },
  {
    "word": "開く",
    "kana": "ひらく",
    "meaning": "an event",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "開く",
    "isKanji": true
  },
  {
    "word": "逃げる",
    "kana": "にげる",
    "meaning": "to escape, to run away",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "逃げる",
    "isKanji": true
  },
  {
    "word": "残念",
    "kana": "ざんねん",
    "meaning": "regret; regrettable",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "残念",
    "isKanji": true
  },
  {
    "word": "畳",
    "kana": "たたみ",
    "meaning": "tatami mat (Japanese straw mat)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "畳",
    "isKanji": true
  },
  {
    "word": "丁寧",
    "kana": "ていねい",
    "meaning": "polite, courteous, careful",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "丁寧",
    "isKanji": true
  },
  {
    "word": "地理",
    "kana": "ちり",
    "meaning": "geography",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "地理",
    "isKanji": true
  },
  {
    "word": "なるべく",
    "kana": "なるべく",
    "meaning": "if possible, as much as possible",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "無理",
    "kana": "むり",
    "meaning": "unreasonable, impossible",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "無理",
    "isKanji": true
  },
  {
    "word": "サンドイッチ",
    "kana": "サンドイッチ",
    "meaning": "sandwich",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "会議室",
    "kana": "かいぎしつ",
    "meaning": "conference room",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "会議室",
    "isKanji": true
  },
  {
    "word": "品物",
    "kana": "しなもの",
    "meaning": "goods",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "品物",
    "isKanji": true
  },
  {
    "word": "人形",
    "kana": "にんぎょう",
    "meaning": "doll, figure",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "人形",
    "isKanji": true
  },
  {
    "word": "利用",
    "kana": "りよう",
    "meaning": "use, utilization",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "利用",
    "isKanji": true
  },
  {
    "word": "飾る",
    "kana": "かざる",
    "meaning": "to decorate, to adorn",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "飾る",
    "isKanji": true
  },
  {
    "word": "止める",
    "kana": "とめる",
    "meaning": "something",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "止める",
    "isKanji": true
  },
  {
    "word": "ビル",
    "kana": "ビル",
    "meaning": "(abbr.) building",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "けんかする",
    "kana": "けんかする",
    "meaning": "quarrel",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "投げる",
    "kana": "なげる",
    "meaning": "to pitch, to cast away",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "投げる",
    "isKanji": true
  },
  {
    "word": "故障",
    "kana": "こしょうする",
    "meaning": "breakdown",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "故障",
    "isKanji": true
  },
  {
    "word": "力",
    "kana": "ちから",
    "meaning": "strength, power",
    "difficulty": "normal",
    "category": "政治",
    "kanji": "力",
    "isKanji": true
  },
  {
    "word": "受ける",
    "kana": "うける",
    "meaning": "到 take (an examination, interview, etc.",
    "difficulty": "normal",
    "category": "抽象",
    "kanji": "受ける",
    "isKanji": true
  },
  {
    "word": "気分",
    "kana": "きぶん",
    "meaning": "feeling, mood",
    "difficulty": "normal",
    "category": "感情",
    "kanji": "気分",
    "isKanji": true
  },
  {
    "word": "そんな",
    "kana": "そんな",
    "meaning": "such, like that, that sort of",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "星",
    "kana": "ほし",
    "meaning": "star",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "星",
    "isKanji": true
  },
  {
    "word": "場合",
    "kana": "ばあい",
    "meaning": "case, situation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "場合",
    "isKanji": true
  },
  {
    "word": "やっと",
    "kana": "やっと",
    "meaning": "at last, finally",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "行う",
    "kana": "おこなう",
    "meaning": "typically used in written 語言",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "行う",
    "isKanji": true
  },
  {
    "word": "ぶどう",
    "kana": "ぶどう",
    "meaning": "grapes",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "無くなる",
    "kana": "なくなる",
    "meaning": "to disappear, to get lost",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "無くなる",
    "isKanji": true
  },
  {
    "word": "準備",
    "kana": "じゅんびする",
    "meaning": "prepare",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "準備",
    "isKanji": true
  },
  {
    "word": "住所",
    "kana": "じゅうしょ",
    "meaning": "address; place of residence",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "住所",
    "isKanji": true
  },
  {
    "word": "再来月",
    "kana": "さらいげつ",
    "meaning": "the month after next",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "再来月",
    "isKanji": true
  },
  {
    "word": "林",
    "kana": "はやし",
    "meaning": "woods, forest",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "林",
    "isKanji": true
  },
  {
    "word": "倍",
    "kana": "ばい",
    "meaning": "double",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "倍",
    "isKanji": true
  },
  {
    "word": "線",
    "kana": "せん",
    "meaning": "line, wire",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "線",
    "isKanji": true
  },
  {
    "word": "戦争",
    "kana": "せんそう",
    "meaning": "war",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "戦争",
    "isKanji": true
  },
  {
    "word": "調べる",
    "kana": "しらべる",
    "meaning": "to check; to look up; to inquire; to search",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "調べる",
    "isKanji": true
  },
  {
    "word": "寝坊",
    "kana": "ねぼう",
    "meaning": "sleeping in late",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "寝坊",
    "isKanji": true
  },
  {
    "word": "パパ",
    "kana": "パパ",
    "meaning": "papa, daddy",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "光る",
    "kana": "ひかる",
    "meaning": "to shine, to glitter",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "光る",
    "isKanji": true
  },
  {
    "word": "夫",
    "kana": "おっと",
    "meaning": "husband",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "夫",
    "isKanji": true
  },
  {
    "word": "雲",
    "kana": "くも",
    "meaning": "cloud",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "雲",
    "isKanji": true
  },
  {
    "word": "坂",
    "kana": "さか",
    "meaning": "slope, hill",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "坂",
    "isKanji": true
  },
  {
    "word": "飛行場",
    "kana": "ひこうじょう",
    "meaning": "airport",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "飛行場",
    "isKanji": true
  },
  {
    "word": "柔道",
    "kana": "じゅうどう",
    "meaning": "judo",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "柔道",
    "isKanji": true
  },
  {
    "word": "決して",
    "kana": "けっして",
    "meaning": "never",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "決して",
    "isKanji": true
  },
  {
    "word": "事務所",
    "kana": "じむしょ",
    "meaning": "office",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "事務所",
    "isKanji": true
  },
  {
    "word": "連絡",
    "kana": "れんらく",
    "meaning": "communication, contact, connection",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "連絡",
    "isKanji": true
  },
  {
    "word": "客",
    "kana": "きゃく",
    "meaning": "guest, customer",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "客",
    "isKanji": true
  },
  {
    "word": "美しい",
    "kana": "うつくしい",
    "meaning": "beautiful, lovely",
    "difficulty": "normal",
    "category": "感情",
    "kanji": "美しい",
    "isKanji": true
  },
  {
    "word": "どんどん",
    "kana": "どんどん",
    "meaning": "quickly and steadily; at a rapid pace",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "適当",
    "kana": "てきとう",
    "meaning": "fitness, suitability",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "適当",
    "isKanji": true
  },
  {
    "word": "素晴らしい",
    "kana": "すばらしい",
    "meaning": "wonderful; terrific",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "素晴らしい",
    "isKanji": true
  },
  {
    "word": "終わり",
    "kana": "おわり",
    "meaning": "end",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "終わり",
    "isKanji": true
  },
  {
    "word": "壁",
    "kana": "かべ",
    "meaning": "wall",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "壁",
    "isKanji": true
  },
  {
    "word": "一度",
    "kana": "いちど",
    "meaning": "once, one time",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "一度",
    "isKanji": true
  },
  {
    "word": "親切",
    "kana": "しんせつ",
    "meaning": "kindness",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "親切",
    "isKanji": true
  },
  {
    "word": "知らせる",
    "kana": "しらせる",
    "meaning": "to notify",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "知らせる",
    "isKanji": true
  },
  {
    "word": "歯医者",
    "kana": "はいしゃ",
    "meaning": "dentist",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "歯医者",
    "isKanji": true
  },
  {
    "word": "熱心",
    "kana": "ねっしん",
    "meaning": "enthusiasm",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "熱心",
    "isKanji": true
  },
  {
    "word": "もらう",
    "kana": "もらう",
    "meaning": "to receive",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "治る",
    "kana": "なおる",
    "meaning": "v.i.",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "治る",
    "isKanji": true
  },
  {
    "word": "熱",
    "kana": "ねつ",
    "meaning": "fever, temperature",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "熱",
    "isKanji": true
  },
  {
    "word": "お祭り",
    "kana": "おまつり",
    "meaning": "festival",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "お祭り",
    "isKanji": true
  },
  {
    "word": "水道",
    "kana": "すいどう",
    "meaning": "water service, water line",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "水道",
    "isKanji": true
  },
  {
    "word": "匂い",
    "kana": "におい",
    "meaning": "odor, smell",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "匂い",
    "isKanji": true
  },
  {
    "word": "ベル",
    "kana": "ベル",
    "meaning": "bell",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "赤ん坊",
    "kana": "あかんぼう",
    "meaning": "baby",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "赤ん坊",
    "isKanji": true
  },
  {
    "word": "おかしい",
    "kana": "おかしい",
    "meaning": "strange; odd; funny",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "事故",
    "kana": "じこ",
    "meaning": "accident",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "事故",
    "isKanji": true
  },
  {
    "word": "変",
    "kana": "へん",
    "meaning": "strange, odd",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "変",
    "isKanji": true
  },
  {
    "word": "辞典",
    "kana": "じてん",
    "meaning": "encyclopedia, reference book",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "辞典",
    "isKanji": true
  },
  {
    "word": "残る",
    "kana": "のこる",
    "meaning": "到 remain (v.i.",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "残る",
    "isKanji": true
  },
  {
    "word": "立てる",
    "kana": "たてる",
    "meaning": "something",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "立てる",
    "isKanji": true
  },
  {
    "word": "くれる",
    "kana": "くれる",
    "meaning": "to give, to do for",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "原因",
    "kana": "げんいん",
    "meaning": "cause, origin, source",
    "difficulty": "normal",
    "category": "抽象",
    "kanji": "原因",
    "isKanji": true
  },
  {
    "word": "驚く",
    "kana": "おどろく",
    "meaning": "to be surprised, to be astonished",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "驚く",
    "isKanji": true
  },
  {
    "word": "祖母",
    "kana": "そぼ",
    "meaning": "grandmother",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "祖母",
    "isKanji": true
  },
  {
    "word": "答",
    "kana": "こたえ",
    "meaning": "answer, response",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "答",
    "isKanji": true
  },
  {
    "word": "漬ける",
    "kana": "つける",
    "meaning": "to soak, to moisten, to pickle",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "漬ける",
    "isKanji": true
  },
  {
    "word": "内",
    "kana": "うち",
    "meaning": "within, inside",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "内",
    "isKanji": true
  },
  {
    "word": "スクリーン",
    "kana": "スクリーン",
    "meaning": "screen",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "増える",
    "kana": "ふえる",
    "meaning": "to increase, to multiply",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "増える",
    "isKanji": true
  },
  {
    "word": "または",
    "kana": "または",
    "meaning": "or, otherwise",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "けがする",
    "kana": "けがする",
    "meaning": "injury (to animate object",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "以下",
    "kana": "いか",
    "meaning": "less than, below",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "以下",
    "isKanji": true
  },
  {
    "word": "心",
    "kana": "こころ",
    "meaning": "heart, mind",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "心",
    "isKanji": true
  },
  {
    "word": "サラダ",
    "kana": "サラダ",
    "meaning": "salad",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "届ける",
    "kana": "とどける",
    "meaning": "v.t.",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "届ける",
    "isKanji": true
  },
  {
    "word": "挨拶",
    "kana": "あいさつ",
    "meaning": "greet(ing)",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "景色",
    "kana": "けしき",
    "meaning": "scenery, landscape",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "景色",
    "isKanji": true
  },
  {
    "word": "確か",
    "kana": "たしか",
    "meaning": "if I remember correctly; certain, definite",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "確か",
    "isKanji": true
  },
  {
    "word": "ステーキ",
    "kana": "ステーキ",
    "meaning": "steak",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "食料品",
    "kana": "しょくりょうひん",
    "meaning": "foodstuff, groceries",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "食料品",
    "isKanji": true
  },
  {
    "word": "森",
    "kana": "もり",
    "meaning": "forest",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "森",
    "isKanji": true
  },
  {
    "word": "以内",
    "kana": "いない",
    "meaning": "within, less (no mcartoone) than (within, less (no mcartoone) than) (within, less (no mcartoone) than (within, less (no more) than))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "以内",
    "isKanji": true
  },
  {
    "word": "オーバー",
    "kana": "オーバー",
    "meaning": "overcoat; over, exceeding, exaggeration",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "乾く",
    "kana": "かわく",
    "meaning": "to get dry",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "乾く",
    "isKanji": true
  },
  {
    "word": "石",
    "kana": "いし",
    "meaning": "stone",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "石",
    "isKanji": true
  },
  {
    "word": "思い出す",
    "kana": "おもいだす",
    "meaning": "to recall, to remember",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "思い出す",
    "isKanji": true
  },
  {
    "word": "細かい",
    "kana": "こまかい",
    "meaning": "small; fine, minute",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "細かい",
    "isKanji": true
  },
  {
    "word": "塗る",
    "kana": "ぬる",
    "meaning": "to paint, to plaster",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "塗る",
    "isKanji": true
  },
  {
    "word": "珍しい",
    "kana": "めずらしい",
    "meaning": "unusual, rare",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "珍しい",
    "isKanji": true
  },
  {
    "word": "用",
    "kana": "よう",
    "meaning": "到 take care from",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "用",
    "isKanji": true
  },
  {
    "word": "公務員",
    "kana": "こうむいん",
    "meaning": "government worker, public servant",
    "difficulty": "normal",
    "category": "政治",
    "kanji": "公務員",
    "isKanji": true
  },
  {
    "word": "用意",
    "kana": "ようい",
    "meaning": "preparation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "用意",
    "isKanji": true
  },
  {
    "word": "形",
    "kana": "かたち",
    "meaning": "shape",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "形",
    "isKanji": true
  },
  {
    "word": "運転",
    "kana": "うんてんする",
    "meaning": "driving",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "運転",
    "isKanji": true
  },
  {
    "word": "すっかり",
    "kana": "すっかり",
    "meaning": "all, completely",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "アナウンサー",
    "kana": "アナウンサー",
    "meaning": "announcer",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "消しゴム",
    "kana": "けしゴム",
    "meaning": "eraser",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "消しゴム",
    "isKanji": true
  },
  {
    "word": "海岸",
    "kana": "かいがん",
    "meaning": "coast, seashore",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "海岸",
    "isKanji": true
  },
  {
    "word": "火",
    "kana": "ひ",
    "meaning": "fire",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "火",
    "isKanji": true
  },
  {
    "word": "味噌",
    "kana": "みそ",
    "meaning": "miso, bean paste",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "味噌",
    "isKanji": true
  },
  {
    "word": "お祝い",
    "kana": "おいわい",
    "meaning": "congratulation, celebration",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "お祝い",
    "isKanji": true
  },
  {
    "word": "乗り物",
    "kana": "のりもの",
    "meaning": "vehicle",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "乗り物",
    "isKanji": true
  },
  {
    "word": "案内",
    "kana": "あんないする",
    "meaning": "information, guidance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "案内",
    "isKanji": true
  },
  {
    "word": "通う",
    "kana": "かよう",
    "meaning": "to go back and forth; to commute",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "通う",
    "isKanji": true
  },
  {
    "word": "連れる",
    "kana": "つれる",
    "meaning": "a person",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "連れる",
    "isKanji": true
  },
  {
    "word": "技術",
    "kana": "ぎじゅつ",
    "meaning": "technique, technology, skill",
    "difficulty": "normal",
    "category": "技術",
    "kanji": "技術",
    "isKanji": true
  },
  {
    "word": "小鳥",
    "kana": "ことり",
    "meaning": "small bird",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "小鳥",
    "isKanji": true
  },
  {
    "word": "下宿",
    "kana": "げしゅく",
    "meaning": "lodging, boarding house",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "下宿",
    "isKanji": true
  },
  {
    "word": "ジャム",
    "kana": "ジャム",
    "meaning": "jam",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "招待",
    "kana": "しょうたいする",
    "meaning": "invitation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "招待",
    "isKanji": true
  },
  {
    "word": "鏡",
    "kana": "かがみ",
    "meaning": "mirror",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "鏡",
    "isKanji": true
  },
  {
    "word": "はず",
    "kana": "はず",
    "meaning": "it should be so",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "法律",
    "kana": "ほうりつ",
    "meaning": "law",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "法律",
    "isKanji": true
  },
  {
    "word": "進む",
    "kana": "すすむ",
    "meaning": "to advance, to proceed",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "進む",
    "isKanji": true
  },
  {
    "word": "楽む",
    "kana": "たのしむ",
    "meaning": "to enjoy",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "楽む",
    "isKanji": true
  },
  {
    "word": "貿易",
    "kana": "ぼうえき",
    "meaning": "trade",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "貿易",
    "isKanji": true
  },
  {
    "word": "反対",
    "kana": "はんたい",
    "meaning": "oppose, opposition, resistance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "反対",
    "isKanji": true
  },
  {
    "word": "真面目",
    "kana": "まじめ",
    "meaning": "diligent, serious",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "真面目",
    "isKanji": true
  },
  {
    "word": "店員",
    "kana": "てんいん",
    "meaning": "clerk; shop-employee",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "店員",
    "isKanji": true
  },
  {
    "word": "泊まる",
    "kana": "とまる",
    "meaning": "over night",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "泊まる",
    "isKanji": true
  },
  {
    "word": "よろしい",
    "kana": "よろしい",
    "meaning": "(hto get.) good, OK, all right ((hto get.) good, OK, all right) ((hto get.) good, OK, all right ((hon.) good, OK, all right))",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "今夜",
    "kana": "こんや",
    "meaning": "this evening, tonight",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "今夜",
    "isKanji": true
  },
  {
    "word": "おつり",
    "kana": "おつり",
    "meaning": "change; balance of money returned to the purchaser",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "チェックする",
    "kana": "チェックする",
    "meaning": "check",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "会話",
    "kana": "かいわ",
    "meaning": "conversation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "会話",
    "isKanji": true
  },
  {
    "word": "交通",
    "kana": "こうつう",
    "meaning": "traffic, transportation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "交通",
    "isKanji": true
  },
  {
    "word": "ワープロ",
    "kana": "ワープロ",
    "meaning": "word processor",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "喜ぶ",
    "kana": "よろこぶ",
    "meaning": "to rejoice, to be delighted, to be glad",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "喜ぶ",
    "isKanji": true
  },
  {
    "word": "急行",
    "kana": "きゅうこう",
    "meaning": "express train or bus",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "急行",
    "isKanji": true
  },
  {
    "word": "皆",
    "kana": "みな",
    "meaning": "everyone",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "皆",
    "isKanji": true
  },
  {
    "word": "味",
    "kana": "あじ",
    "meaning": "flavor, taste",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "味",
    "isKanji": true
  },
  {
    "word": "校長",
    "kana": "こうちょう",
    "meaning": "principal, headmaster",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "校長",
    "isKanji": true
  },
  {
    "word": "ごちそう",
    "kana": "ごちそう",
    "meaning": "someto gete",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "踊り",
    "kana": "おどり",
    "meaning": "dance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "踊り",
    "isKanji": true
  },
  {
    "word": "興味",
    "kana": "きょうみ",
    "meaning": "interest (in something)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "興味",
    "isKanji": true
  },
  {
    "word": "引っ越す",
    "kana": "ひっこす",
    "meaning": "to move to a new place of residence",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "引っ越す",
    "isKanji": true
  },
  {
    "word": "冷房",
    "kana": "れいぼう",
    "meaning": "cooling, air conditioning",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "冷房",
    "isKanji": true
  },
  {
    "word": "都合",
    "kana": "つごう",
    "meaning": "circumstances, convenience",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "都合",
    "isKanji": true
  },
  {
    "word": "遠慮",
    "kana": "えんりょする",
    "meaning": "restraint, reserve, hesitate",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "遠慮",
    "isKanji": true
  },
  {
    "word": "亡くなる",
    "kana": "なくなる",
    "meaning": "to pass away",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "亡くなる",
    "isKanji": true
  },
  {
    "word": "はっきり",
    "kana": "はっきり",
    "meaning": "clearly, distinctly",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "気持ち",
    "kana": "きもち",
    "meaning": "feeling, sensation, mood",
    "difficulty": "normal",
    "category": "感情",
    "kanji": "気持ち",
    "isKanji": true
  },
  {
    "word": "祖父",
    "kana": "そふ",
    "meaning": "grandfather",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "祖父",
    "isKanji": true
  },
  {
    "word": "港",
    "kana": "みなと",
    "meaning": "harbor, port",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "港",
    "isKanji": true
  },
  {
    "word": "凄い",
    "kana": "すごい",
    "meaning": "terrific, great",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "凄い",
    "isKanji": true
  },
  {
    "word": "入学",
    "kana": "にゅうがくする",
    "meaning": "entry to school or university",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "入学",
    "isKanji": true
  },
  {
    "word": "片付ける",
    "kana": "かたづける",
    "meaning": "到 (clean",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "片付ける",
    "isKanji": true
  },
  {
    "word": "写す",
    "kana": "うつす",
    "meaning": "到 copy (v.t.",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "写す",
    "isKanji": true
  },
  {
    "word": "パソコン",
    "kana": "パソコン",
    "meaning": "(persto getal) computer ((persto getal) computer) ((persto getal) computer ((personal) computer))",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "火事",
    "kana": "かじ",
    "meaning": "fire",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "火事",
    "isKanji": true
  },
  {
    "word": "足す",
    "kana": "たす",
    "meaning": "numbers",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "足す",
    "isKanji": true
  },
  {
    "word": "教会",
    "kana": "きょうかい",
    "meaning": "church",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "教会",
    "isKanji": true
  },
  {
    "word": "彼ら",
    "kana": "かれら",
    "meaning": "they (usually male)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "彼ら",
    "isKanji": true
  },
  {
    "word": "一杯",
    "kana": "いっぱい",
    "meaning": "full, to the utmost",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "男性",
    "kana": "だんせい",
    "meaning": "man; male",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "男性",
    "isKanji": true
  },
  {
    "word": "理由",
    "kana": "りゆう",
    "meaning": "reason",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "理由",
    "isKanji": true
  },
  {
    "word": "生産",
    "kana": "せいさんする",
    "meaning": "production; to produce",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "生産",
    "isKanji": true
  },
  {
    "word": "暮れる",
    "kana": "くれる",
    "meaning": "to get dark, to come to an end",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "暮れる",
    "isKanji": true
  },
  {
    "word": "釣る",
    "kana": "つる",
    "meaning": "to fish",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "釣る",
    "isKanji": true
  },
  {
    "word": "打つ",
    "kana": "うつ",
    "meaning": "to hit, to strike",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "打つ",
    "isKanji": true
  },
  {
    "word": "あんな",
    "kana": "あんな",
    "meaning": "such, like that",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "謝る",
    "kana": "あやまる",
    "meaning": "to apologize",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "謝る",
    "isKanji": true
  },
  {
    "word": "昼間",
    "kana": "ひるま",
    "meaning": "daytime, during the day",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "昼間",
    "isKanji": true
  },
  {
    "word": "教育",
    "kana": "きょういく",
    "meaning": "education",
    "difficulty": "normal",
    "category": "學術",
    "kanji": "教育",
    "isKanji": true
  },
  {
    "word": "女性",
    "kana": "じょせい",
    "meaning": "woman",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "女性",
    "isKanji": true
  },
  {
    "word": "米",
    "kana": "こめ",
    "meaning": "uncooked rice",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "米",
    "isKanji": true
  },
  {
    "word": "邪魔",
    "kana": "じゃま",
    "meaning": "hindrance, intrusion",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "邪魔",
    "isKanji": true
  },
  {
    "word": "国際",
    "kana": "こくさい",
    "meaning": "international",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "国際",
    "isKanji": true
  },
  {
    "word": "隅",
    "kana": "すみ",
    "meaning": "corner",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "隅",
    "isKanji": true
  },
  {
    "word": "伺う",
    "kana": "うかがう",
    "meaning": "humble form from 行く (いく), 聞く (きく) 和 来る (くる) (humble form from 行く (いく), 聞く (きく) 和 来る (くる)) (humble form from 行く (いく), 聞く (きく) 和 来る (くる) (humble form of 行く (いく), 聞く (きく) and 来る (くる)))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "伺う",
    "isKanji": true
  },
  {
    "word": "再来週",
    "kana": "さらいしゅう",
    "meaning": "the week after next",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "再来週",
    "isKanji": true
  },
  {
    "word": "喉",
    "kana": "のど",
    "meaning": "throat",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "喉",
    "isKanji": true
  },
  {
    "word": "周り",
    "kana": "まわり",
    "meaning": "surroundings",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "周り",
    "isKanji": true
  },
  {
    "word": "不便",
    "kana": "ふべん",
    "meaning": "inconvenience",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "不便",
    "isKanji": true
  },
  {
    "word": "血",
    "kana": "ち",
    "meaning": "blood",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "血",
    "isKanji": true
  },
  {
    "word": "毛",
    "kana": "け",
    "meaning": "hair, fur",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "毛",
    "isKanji": true
  },
  {
    "word": "中々",
    "kana": "なかなか",
    "meaning": "very, considerably, quite",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "中々",
    "isKanji": true
  },
  {
    "word": "随分",
    "kana": "ずいぶん",
    "meaning": "extremely",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "随分",
    "isKanji": true
  },
  {
    "word": "押し入れ",
    "kana": "おしいれ",
    "meaning": "closet",
    "difficulty": "normal",
    "category": "性質",
    "kanji": "押し入れ",
    "isKanji": true
  },
  {
    "word": "電灯",
    "kana": "でんとう",
    "meaning": "electric light",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "電灯",
    "isKanji": true
  },
  {
    "word": "叱る",
    "kana": "しかる",
    "meaning": "to scold",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "叱る",
    "isKanji": true
  },
  {
    "word": "サンダル",
    "kana": "サンダル",
    "meaning": "sandal",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "うまい",
    "kana": "うまい",
    "meaning": "delicious; skillful; fortunate",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "変える",
    "kana": "かえる",
    "meaning": "to change, to alter, to vary",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "変える",
    "isKanji": true
  },
  {
    "word": "講堂",
    "kana": "こうどう",
    "meaning": "auditorium",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "講堂",
    "isKanji": true
  },
  {
    "word": "子",
    "kana": "こ",
    "meaning": "child",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "子",
    "isKanji": true
  },
  {
    "word": "沸かす",
    "kana": "わかす",
    "meaning": "to boil",
    "difficulty": "normal",
    "category": "物質",
    "kanji": "沸かす",
    "isKanji": true
  },
  {
    "word": "レジ",
    "kana": "レジ",
    "meaning": "register",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "しばらく",
    "kana": "しばらく",
    "meaning": "little while",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "特に",
    "kana": "とくに",
    "meaning": "particularly",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "特に",
    "isKanji": true
  },
  {
    "word": "空く",
    "kana": "あく",
    "meaning": "vacant",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "空く",
    "isKanji": true
  },
  {
    "word": "計画",
    "kana": "けいかくする",
    "meaning": "plan, project, schedule",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "計画",
    "isKanji": true
  },
  {
    "word": "通り",
    "kana": "とおり",
    "meaning": "~ Street, ~ Avenue",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "通り",
    "isKanji": true
  },
  {
    "word": "下着",
    "kana": "したぎ",
    "meaning": "underwear",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "下着",
    "isKanji": true
  },
  {
    "word": "経済",
    "kana": "けいざい",
    "meaning": "economics, finance, economy",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "経済",
    "isKanji": true
  },
  {
    "word": "こう",
    "kana": "こう",
    "meaning": "like this, this way",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "裏",
    "kana": "うら",
    "meaning": "reverse side, back",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "裏",
    "isKanji": true
  },
  {
    "word": "為",
    "kana": "ため",
    "meaning": "good, advantage, in order to",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "為",
    "isKanji": true
  },
  {
    "word": "おいでになる",
    "kana": "おいでになる",
    "meaning": "(hon.",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "変わる",
    "kana": "かわる",
    "meaning": "到 change (v.i.",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "変わる",
    "isKanji": true
  },
  {
    "word": "以外",
    "kana": "いがい",
    "meaning": "other than, with the exception of, excepting",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "以外",
    "isKanji": true
  },
  {
    "word": "済む",
    "kana": "すむ",
    "meaning": "to finish, to end",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "済む",
    "isKanji": true
  },
  {
    "word": "ハンバーグ",
    "kana": "ハンバーグ",
    "meaning": "hamburger steak",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "市",
    "kana": "し",
    "meaning": "city",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "市",
    "isKanji": true
  },
  {
    "word": "引き出し",
    "kana": "ひきだし",
    "meaning": "drawer",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "引き出し",
    "isKanji": true
  },
  {
    "word": "遊び",
    "kana": "あそび",
    "meaning": "play",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "遊び",
    "isKanji": true
  },
  {
    "word": "支度",
    "kana": "したくする",
    "meaning": "preparation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "支度",
    "isKanji": true
  },
  {
    "word": "十分",
    "kana": "じゅうぶん",
    "meaning": "enough",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "十分",
    "isKanji": true
  },
  {
    "word": "きっと",
    "kana": "きっと",
    "meaning": "surely, definitely, undoubtedly, certainly",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "遠く",
    "kana": "とおく",
    "meaning": "far away, distant",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "遠く",
    "isKanji": true
  },
  {
    "word": "大体",
    "kana": "だいたい",
    "meaning": "same as もともと",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "大体",
    "isKanji": true
  },
  {
    "word": "折れる",
    "kana": "おれる",
    "meaning": "a corner",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "折れる",
    "isKanji": true
  },
  {
    "word": "正しい",
    "kana": "ただしい",
    "meaning": "correct",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "正しい",
    "isKanji": true
  },
  {
    "word": "輸入",
    "kana": "ゆにゅう",
    "meaning": "import",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "輸入",
    "isKanji": true
  },
  {
    "word": "返事",
    "kana": "へんじ",
    "meaning": "reply, answer",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "返事",
    "isKanji": true
  },
  {
    "word": "都",
    "kana": "と",
    "meaning": "metropolitan",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "都",
    "isKanji": true
  },
  {
    "word": "産業",
    "kana": "さんぎょう",
    "meaning": "industry",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "産業",
    "isKanji": true
  },
  {
    "word": "お金持ち",
    "kana": "かねもち",
    "meaning": "rich person",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "お金持ち",
    "isKanji": true
  },
  {
    "word": "説明",
    "kana": "せつめい",
    "meaning": "explanation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "説明",
    "isKanji": true
  },
  {
    "word": "島",
    "kana": "しま",
    "meaning": "island",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "島",
    "isKanji": true
  },
  {
    "word": "道具",
    "kana": "どうぐ",
    "meaning": "tool",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "道具",
    "isKanji": true
  },
  {
    "word": "滑る",
    "kana": "すべる",
    "meaning": "to slide, to slip",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "滑る",
    "isKanji": true
  },
  {
    "word": "それほど",
    "kana": "それほど",
    "meaning": "to that degree; extent",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "以上",
    "kana": "いじょう",
    "meaning": "more than; this is all",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "以上",
    "isKanji": true
  },
  {
    "word": "特急",
    "kana": "とっきゅう",
    "meaning": "money faster than an express",
    "difficulty": "normal",
    "category": "抽象",
    "kanji": "特急",
    "isKanji": true
  },
  {
    "word": "妻",
    "kana": "つま",
    "meaning": "wife (humble)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "妻",
    "isKanji": true
  },
  {
    "word": "帰り",
    "kana": "かえり",
    "meaning": "return, coming back",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "帰り",
    "isKanji": true
  },
  {
    "word": "具合",
    "kana": "ぐあい",
    "meaning": "condition, state, health",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "具合",
    "isKanji": true
  },
  {
    "word": "堅; 硬; 固い",
    "kana": "かたい",
    "meaning": "solid, hard, firm",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "堅; 硬; 固い",
    "isKanji": true
  },
  {
    "word": "駐車場",
    "kana": "ちゅうしゃじょう",
    "meaning": "parking lot",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "駐車場",
    "isKanji": true
  },
  {
    "word": "スーツ",
    "kana": "スーツ",
    "meaning": "suit",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "危険",
    "kana": "きけん",
    "meaning": "danger, risk, hazard",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "危険",
    "isKanji": true
  },
  {
    "word": "間",
    "kana": "あいだ",
    "meaning": "space, interval",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "間",
    "isKanji": true
  },
  {
    "word": "卒業",
    "kana": "そつぎょう",
    "meaning": "graduation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "卒業",
    "isKanji": true
  },
  {
    "word": "それで",
    "kana": "それで",
    "meaning": "和 (conj.), thereupon, because from that (和 (conj.), thereupon, because from that) (和 (conj.), thereupon, because from that (and (conj.), thereupon, because of that))",
    "difficulty": "normal",
    "category": "經濟",
    "isKanji": false
  },
  {
    "word": "枝",
    "kana": "えだ",
    "meaning": "branch, twig",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "枝",
    "isKanji": true
  },
  {
    "word": "そろそろ",
    "kana": "そろそろ",
    "meaning": "gradually, soon",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "あげる",
    "kana": "あげる",
    "meaning": "to give",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "騒ぐ",
    "kana": "さわぐ",
    "meaning": "to make noise, to clamor",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "騒ぐ",
    "isKanji": true
  },
  {
    "word": "尋ねる",
    "kana": "たずねる",
    "meaning": "same as 質問する",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "尋ねる",
    "isKanji": true
  },
  {
    "word": "放送",
    "kana": "ほうそうする",
    "meaning": "broadcasting",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "放送",
    "isKanji": true
  },
  {
    "word": "市民",
    "kana": "しみん",
    "meaning": "citizen",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "市民",
    "isKanji": true
  },
  {
    "word": "ファックス",
    "kana": "ファックス",
    "meaning": "fax",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "負ける",
    "kana": "まける",
    "meaning": "到 lose (a game",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "負ける",
    "isKanji": true
  },
  {
    "word": "田舎",
    "kana": "いなか",
    "meaning": "rural, countryside",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "田舎",
    "isKanji": true
  },
  {
    "word": "講義",
    "kana": "こうぎ",
    "meaning": "a lecture",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "講義",
    "isKanji": true
  },
  {
    "word": "そんなに",
    "kana": "そんなに",
    "meaning": "so much, like that",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "昼休み",
    "kana": "ひるやすみ",
    "meaning": "lunch break, noon recess",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "昼休み",
    "isKanji": true
  },
  {
    "word": "忘れ物",
    "kana": "わすれもの",
    "meaning": "lost article, something forgotten",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "忘れ物",
    "isKanji": true
  },
  {
    "word": "下りる",
    "kana": "おりる",
    "meaning": "to get down, to go; come down",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "下りる",
    "isKanji": true
  },
  {
    "word": "腕",
    "kana": "うで",
    "meaning": "in reference 到 body",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "腕",
    "isKanji": true
  },
  {
    "word": "訳",
    "kana": "わけ",
    "meaning": "reason; explanation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "訳",
    "isKanji": true
  },
  {
    "word": "承知",
    "kana": "しょうちする",
    "meaning": "consent, acceptance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "承知",
    "isKanji": true
  },
  {
    "word": "高校; 高等学校",
    "kana": "こうこう",
    "meaning": "high school; senior high school",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "高校; 高等学校",
    "isKanji": true
  },
  {
    "word": "似る",
    "kana": "にる",
    "meaning": "to resemble, to be similar",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "似る",
    "isKanji": true
  },
  {
    "word": "暖房",
    "kana": "だんぼう",
    "meaning": "heating",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "暖房",
    "isKanji": true
  },
  {
    "word": "割合",
    "kana": "わりあい",
    "meaning": "rate, ratio, percentage",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "割合",
    "isKanji": true
  },
  {
    "word": "寺",
    "kana": "てら",
    "meaning": "Buddhist temple",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "寺",
    "isKanji": true
  },
  {
    "word": "慣れる",
    "kana": "なれる",
    "meaning": "to grow accustomed to",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "慣れる",
    "isKanji": true
  },
  {
    "word": "普通",
    "kana": "ふつう",
    "meaning": "common; usual",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "普通",
    "isKanji": true
  },
  {
    "word": "手伝う",
    "kana": "てつだう",
    "meaning": "to help",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "手伝う",
    "isKanji": true
  },
  {
    "word": "なるほど",
    "kana": "なるほど",
    "meaning": "I see; I now understand",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "くださる",
    "kana": "くださる",
    "meaning": "(hon.",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "息子",
    "kana": "むすこ",
    "meaning": "(humble) sto get ((humble) sto get) ((humble) sto get ((humble) son))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "息子",
    "isKanji": true
  },
  {
    "word": "会場",
    "kana": "かいじょう",
    "meaning": "venue, meeting place",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "会場",
    "isKanji": true
  },
  {
    "word": "笑う",
    "kana": "わらう",
    "meaning": "to laugh, to smile",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "笑う",
    "isKanji": true
  },
  {
    "word": "光",
    "kana": "ひかり",
    "meaning": "light",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "光",
    "isKanji": true
  },
  {
    "word": "お見舞い",
    "kana": "おみまい",
    "meaning": "calling on someone who is ill, visit",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "お見舞い",
    "isKanji": true
  },
  {
    "word": "席",
    "kana": "せき",
    "meaning": "a seat",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "席",
    "isKanji": true
  },
  {
    "word": "ご存じ",
    "kana": "ごぞんじ",
    "meaning": "knowing, acquaintance",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "ご存じ",
    "isKanji": true
  },
  {
    "word": "下る",
    "kana": "さがる",
    "meaning": "to descend, to drop, to fall",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "下る",
    "isKanji": true
  },
  {
    "word": "アジア",
    "kana": "アジア",
    "meaning": "Asia",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "空く",
    "kana": "すく",
    "meaning": "到 be empty (in reference 到 people",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "空く",
    "isKanji": true
  },
  {
    "word": "あ",
    "kana": "あ",
    "meaning": "Ah",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "最も",
    "kana": "もっとも",
    "meaning": "most",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "最も",
    "isKanji": true
  },
  {
    "word": "合う",
    "kana": "あう",
    "meaning": "to fit, to match",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "合う",
    "isKanji": true
  },
  {
    "word": "最後",
    "kana": "さいご",
    "meaning": "last, end",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "最後",
    "isKanji": true
  },
  {
    "word": "値段",
    "kana": "ねだん",
    "meaning": "price",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "値段",
    "isKanji": true
  },
  {
    "word": "退院",
    "kana": "たいいんする",
    "meaning": "leaving hospital",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "退院",
    "isKanji": true
  },
  {
    "word": "展覧会",
    "kana": "てんらんかい",
    "meaning": "exhibition",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "展覧会",
    "isKanji": true
  },
  {
    "word": "汽車",
    "kana": "きしゃ",
    "meaning": "steam",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "汽車",
    "isKanji": true
  },
  {
    "word": "見つかる",
    "kana": "みつかる",
    "meaning": "到 be found (v.i.",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "見つかる",
    "isKanji": true
  },
  {
    "word": "注射",
    "kana": "ちゅうしゃ",
    "meaning": "injection",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "注射",
    "isKanji": true
  },
  {
    "word": "様",
    "kana": "よう",
    "meaning": "way, manner, kind",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "様",
    "isKanji": true
  },
  {
    "word": "最初",
    "kana": "さいしょ",
    "meaning": "beginning, first",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "最初",
    "isKanji": true
  },
  {
    "word": "安心",
    "kana": "あんしん",
    "meaning": "peace of mind, relief",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "安心",
    "isKanji": true
  },
  {
    "word": "直る",
    "kana": "なおる",
    "meaning": "to be fixed",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "直る",
    "isKanji": true
  },
  {
    "word": "続く",
    "kana": "つづく",
    "meaning": "to be continued",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "続く",
    "isKanji": true
  },
  {
    "word": "世話",
    "kana": "せわする",
    "meaning": "looking after; to look after",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "世話",
    "isKanji": true
  },
  {
    "word": "近所",
    "kana": "きんじょ",
    "meaning": "neighborhood",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "近所",
    "isKanji": true
  },
  {
    "word": "億",
    "kana": "おく",
    "meaning": "hundred million",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "億",
    "isKanji": true
  },
  {
    "word": "数学",
    "kana": "すうがく",
    "meaning": "mathematics",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "数学",
    "isKanji": true
  },
  {
    "word": "習慣",
    "kana": "しゅうかん",
    "meaning": "in reference 到 culture",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "習慣",
    "isKanji": true
  },
  {
    "word": "焼ける",
    "kana": "やける",
    "meaning": "to burn, to be roasted",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "焼ける",
    "isKanji": true
  },
  {
    "word": "君",
    "kana": "きみ",
    "meaning": "infcartoonmal fcartoon men",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "君",
    "isKanji": true
  },
  {
    "word": "冷える",
    "kana": "ひえる",
    "meaning": "to grow cold, to cool down",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "冷える",
    "isKanji": true
  },
  {
    "word": "点く",
    "kana": "つく",
    "meaning": "to be started, to be switched on",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "点く",
    "isKanji": true
  },
  {
    "word": "格好",
    "kana": "かっこう",
    "meaning": "appearance, manner, shape, form, posture",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "落す",
    "kana": "おとす",
    "meaning": "to drop, to lose",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "落す",
    "isKanji": true
  },
  {
    "word": "明日",
    "kana": "あす",
    "meaning": "tomorrow",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "明日",
    "isKanji": true
  },
  {
    "word": "出発",
    "kana": "しゅっぱつする",
    "meaning": "departure",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "出発",
    "isKanji": true
  },
  {
    "word": "拝見",
    "kana": "はいけんする",
    "meaning": "(humble) (有禮貌from) seeing, look at ((humble) (有禮貌from) seeing, look at) ((humble) (有禮貌from) seeing, look at ((humble) (polite) seeing, look at))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "拝見",
    "isKanji": true
  },
  {
    "word": "割れる",
    "kana": "われる",
    "meaning": "to break",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "割れる",
    "isKanji": true
  },
  {
    "word": "背中",
    "kana": "せなか",
    "meaning": "from body",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "背中",
    "isKanji": true
  },
  {
    "word": "新聞社",
    "kana": "しんぶんしゃ",
    "meaning": "newspaper company",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "新聞社",
    "isKanji": true
  },
  {
    "word": "回る、回す",
    "kana": "まわる、まわす",
    "meaning": "to go around, to revolve",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "回る、回す",
    "isKanji": true
  },
  {
    "word": "濡れる",
    "kana": "ぬれる",
    "meaning": "to get wet",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "濡れる",
    "isKanji": true
  },
  {
    "word": "倒れる",
    "kana": "たおれる",
    "meaning": "to collapse, to break down",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "倒れる",
    "isKanji": true
  },
  {
    "word": "アクセサリー",
    "kana": "アクセサリー",
    "meaning": "accessory",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "向かう",
    "kana": "むかう",
    "meaning": "to face, to go towards",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "向かう",
    "isKanji": true
  },
  {
    "word": "仕方",
    "kana": "しかた",
    "meaning": "from doing something",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "仕方",
    "isKanji": true
  },
  {
    "word": "首",
    "kana": "くび",
    "meaning": "neck",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "首",
    "isKanji": true
  },
  {
    "word": "程",
    "kana": "ほど",
    "meaning": "degree, extent",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "程",
    "isKanji": true
  },
  {
    "word": "代わり",
    "kana": "かわり",
    "meaning": "substitute, replacement",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "代わり",
    "isKanji": true
  },
  {
    "word": "失敗",
    "kana": "しっぱい",
    "meaning": "failure, mistake",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "失敗",
    "isKanji": true
  },
  {
    "word": "工業",
    "kana": "こうぎょう",
    "meaning": "(manufacturing) industry",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "工業",
    "isKanji": true
  },
  {
    "word": "移る",
    "kana": "うつる",
    "meaning": "towel a department",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "移る",
    "isKanji": true
  },
  {
    "word": "スーツケース",
    "kana": "スーツケース",
    "meaning": "suitcase",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "研究室",
    "kana": "けんきゅうしつ",
    "meaning": "the professor's office; laboratory",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "研究室",
    "isKanji": true
  },
  {
    "word": "紹介",
    "kana": "しょうかい",
    "meaning": "an introduction",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "紹介",
    "isKanji": true
  },
  {
    "word": "けれど; けれども",
    "kana": "けれど",
    "meaning": "but, although",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "舟",
    "kana": "ふね",
    "meaning": "ship, boat",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "舟",
    "isKanji": true
  },
  {
    "word": "動く",
    "kana": "うごく",
    "meaning": "to move",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "動く",
    "isKanji": true
  },
  {
    "word": "虫",
    "kana": "むし",
    "meaning": "insect",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "虫",
    "isKanji": true
  },
  {
    "word": "コンピュータ; コンピューター",
    "kana": "コンピューター",
    "meaning": "computer",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "植える",
    "kana": "うえる",
    "meaning": "to plant",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "植える",
    "isKanji": true
  },
  {
    "word": "両方",
    "kana": "りょうほう",
    "meaning": "both sides, both parties",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "両方",
    "isKanji": true
  },
  {
    "word": "汚れる",
    "kana": "よごれる",
    "meaning": "to become dirty",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "汚れる",
    "isKanji": true
  },
  {
    "word": "水泳",
    "kana": "すいえい",
    "meaning": "swimming",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "水泳",
    "isKanji": true
  },
  {
    "word": "経験",
    "kana": "けいけんする",
    "meaning": "experience",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "経験",
    "isKanji": true
  },
  {
    "word": "勝つ",
    "kana": "かつ",
    "meaning": "to win",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "勝つ",
    "isKanji": true
  },
  {
    "word": "砂",
    "kana": "すな",
    "meaning": "sand",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "砂",
    "isKanji": true
  },
  {
    "word": "取り替える",
    "kana": "とりかえる",
    "meaning": "to exchange, to replace",
    "difficulty": "normal",
    "category": "場所",
    "kanji": "取り替える",
    "isKanji": true
  },
  {
    "word": "簡単",
    "kana": "かんたん",
    "meaning": "simple",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "簡単",
    "isKanji": true
  },
  {
    "word": "全然",
    "kana": "ぜんぜん",
    "meaning": "not at all; wholly, entirely",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "全然",
    "isKanji": true
  },
  {
    "word": "特別",
    "kana": "とくべつ",
    "meaning": "special",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "特別",
    "isKanji": true
  },
  {
    "word": "復習",
    "kana": "ふくしゅう",
    "meaning": "review (from lessons), revision (review (from lessons), revision) (review (from lessons), revision (review (of lessons), revision))",
    "difficulty": "normal",
    "category": "抽象",
    "kanji": "復習",
    "isKanji": true
  },
  {
    "word": "間に合う",
    "kana": "まにあう",
    "meaning": "to be in time for",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "間に合う",
    "isKanji": true
  },
  {
    "word": "役に立つ",
    "kana": "やくにたつ",
    "meaning": "to be helpful, to be useful",
    "difficulty": "normal",
    "category": "經濟",
    "kanji": "役に立つ",
    "isKanji": true
  },
  {
    "word": "真中",
    "kana": "まんなか",
    "meaning": "middle, center",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "真中",
    "isKanji": true
  },
  {
    "word": "研究",
    "kana": "けんきゅう",
    "meaning": "study, research, investigation",
    "difficulty": "normal",
    "category": "學術",
    "kanji": "研究",
    "isKanji": true
  },
  {
    "word": "草",
    "kana": "くさ",
    "meaning": "grass",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "草",
    "isKanji": true
  },
  {
    "word": "込む",
    "kana": "こむ",
    "meaning": "to be crowded",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "込む",
    "isKanji": true
  },
  {
    "word": "訪ねる",
    "kana": "たずねる",
    "meaning": "to visit",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "訪ねる",
    "isKanji": true
  },
  {
    "word": "下げる",
    "kana": "さげる",
    "meaning": "到 lower (v.t.",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "下げる",
    "isKanji": true
  },
  {
    "word": "花見",
    "kana": "はなみ",
    "meaning": "cherry-blossom viewing",
    "difficulty": "normal",
    "category": "抽象",
    "kanji": "花見",
    "isKanji": true
  },
  {
    "word": "途中",
    "kana": "とちゅう",
    "meaning": "on the way, midway",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "途中",
    "isKanji": true
  },
  {
    "word": "入院",
    "kana": "にゅういんする",
    "meaning": "hospitalization",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "入院",
    "isKanji": true
  },
  {
    "word": "乗り換える",
    "kana": "のりかえる",
    "meaning": "bus, money, etc.",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "乗り換える",
    "isKanji": true
  },
  {
    "word": "別れる",
    "kana": "わかれる",
    "meaning": "to part from, to separate",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "別れる",
    "isKanji": true
  },
  {
    "word": "安全",
    "kana": "あんぜん",
    "meaning": "safety, security",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "安全",
    "isKanji": true
  },
  {
    "word": "看護婦",
    "kana": "かんごふ",
    "meaning": "(female) nurse",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "看護婦",
    "isKanji": true
  },
  {
    "word": "見物",
    "kana": "けんぶつ",
    "meaning": "sightseeing",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "見物",
    "isKanji": true
  },
  {
    "word": "相談",
    "kana": "そうだんする",
    "meaning": "consultation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "相談",
    "isKanji": true
  },
  {
    "word": "ガソリンスタンド",
    "kana": "ガソリンスタンド",
    "meaning": "gas station, service station",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "眠る",
    "kana": "ねむる",
    "meaning": "to sleep",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "眠る",
    "isKanji": true
  },
  {
    "word": "上がる",
    "kana": "あがる",
    "meaning": "to rise, to go up",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "上がる",
    "isKanji": true
  },
  {
    "word": "翻訳",
    "kana": "ほんやく",
    "meaning": "translation",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "翻訳",
    "isKanji": true
  },
  {
    "word": "食事",
    "kana": "しょくじする",
    "meaning": "meal",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "食事",
    "isKanji": true
  },
  {
    "word": "お陰",
    "kana": "おかげ",
    "meaning": "thanks or owing to",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "娘",
    "kana": "むすめ",
    "meaning": "daughter (humble)",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "娘",
    "isKanji": true
  },
  {
    "word": "湯",
    "kana": "ゆ",
    "meaning": "hot water",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "湯",
    "isKanji": true
  },
  {
    "word": "競争",
    "kana": "きょうそう",
    "meaning": "competition, contest",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "競争",
    "isKanji": true
  },
  {
    "word": "集まる",
    "kana": "あつまる",
    "meaning": "到 gather (v.i.",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "集まる",
    "isKanji": true
  },
  {
    "word": "生活",
    "kana": "せいかつする",
    "meaning": "living, life; to live",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "生活",
    "isKanji": true
  },
  {
    "word": "糸",
    "kana": "いと",
    "meaning": "thread",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "糸",
    "isKanji": true
  },
  {
    "word": "関係",
    "kana": "かんけい",
    "meaning": "relatito get(ship), cto getnectito get (relatito get(ship), cto getnectito get) (relatito get(ship), cto getnectito get (relation(ship), connection))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "関係",
    "isKanji": true
  },
  {
    "word": "急",
    "kana": "きゅう",
    "meaning": "urgent, sudden; steep",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "急",
    "isKanji": true
  },
  {
    "word": "棚",
    "kana": "たな",
    "meaning": "shelves, rack",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "棚",
    "isKanji": true
  },
  {
    "word": "木綿",
    "kana": "もめん",
    "meaning": "cotton",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "木綿",
    "isKanji": true
  },
  {
    "word": "輸出",
    "kana": "ゆしゅつする",
    "meaning": "export",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "輸出",
    "isKanji": true
  },
  {
    "word": "タイプ",
    "kana": "タイプ",
    "meaning": "type, style",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "すり",
    "kana": "すり",
    "meaning": "pickpocket",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "アルコール",
    "kana": "アルコール",
    "meaning": "alcohol",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ソフト",
    "kana": "ソフト",
    "meaning": "soft; soft hat; software",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "神社",
    "kana": "じんじゃ",
    "meaning": "Shinto shrine",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "神社",
    "isKanji": true
  },
  {
    "word": "大分",
    "kana": "だいぶ",
    "meaning": "fairly well, to a large extent, considerably, pretty much",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "大分",
    "isKanji": true
  },
  {
    "word": "楽しみ",
    "kana": "たのしみ",
    "meaning": "pleasure, joy",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "楽しみ",
    "isKanji": true
  },
  {
    "word": "電報",
    "kana": "でんぽう",
    "meaning": "telegram",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "電報",
    "isKanji": true
  },
  {
    "word": "家内",
    "kana": "かない",
    "meaning": "(or's own) wife ((or's own) wife) ((or's own) wife ((one's own) wife))",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "家内",
    "isKanji": true
  },
  {
    "word": "指",
    "kana": "ゆび",
    "meaning": "finger",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "指",
    "isKanji": true
  },
  {
    "word": "これから",
    "kana": "これから",
    "meaning": "from now on, after this",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "たまに",
    "kana": "たまに",
    "meaning": "occasionally",
    "difficulty": "normal",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "社会",
    "kana": "しゃかい",
    "meaning": "society",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "社会",
    "isKanji": true
  },
  {
    "word": "暖かい",
    "kana": "あたたかい",
    "meaning": "warm",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "暖かい",
    "isKanji": true
  },
  {
    "word": "お風呂",
    "kana": "おふろ",
    "meaning": "a bath",
    "difficulty": "normal",
    "category": "一般",
    "kanji": "お風呂",
    "isKanji": true
  }
];
