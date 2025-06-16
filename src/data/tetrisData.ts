import type { DifficultyLevel } from '@/types';

/**
 * 俄羅斯方塊模式單字數據
 */

export interface TetrisWord {
  word: string;
  kana: string;
  meaning: string;
  difficulty: DifficultyLevel;
  category: string;
}

// 初級單字（3-4字）
export const BEGINNER_WORDS: TetrisWord[] = [
  // 日常用語
  { word: 'ともだち', kana: 'ともだち', meaning: '朋友', difficulty: 'beginner', category: '人物' },
  { word: 'がっこう', kana: 'がっこう', meaning: '學校', difficulty: 'beginner', category: '場所' },
  { word: 'せんせい', kana: 'せんせい', meaning: '老師', difficulty: 'beginner', category: '人物' },
  { word: 'でんしゃ', kana: 'でんしゃ', meaning: '電車', difficulty: 'beginner', category: '交通' },
  { word: 'やすみ', kana: 'やすみ', meaning: '休息', difficulty: 'beginner', category: '動作' },
  { word: 'べんきょう', kana: 'べんきょう', meaning: '學習', difficulty: 'beginner', category: '動作' },
  { word: 'りょうり', kana: 'りょうり', meaning: '料理', difficulty: 'beginner', category: '食物' },
  { word: 'しごと', kana: 'しごと', meaning: '工作', difficulty: 'beginner', category: '動作' },
  
  // 食物
  { word: 'あさごはん', kana: 'あさごはん', meaning: '早餐', difficulty: 'beginner', category: '食物' },
  { word: 'ひるごはん', kana: 'ひるごはん', meaning: '午餐', difficulty: 'beginner', category: '食物' },
  { word: 'ばんごはん', kana: 'ばんごはん', meaning: '晚餐', difficulty: 'beginner', category: '食物' },
  { word: 'みず', kana: 'みず', meaning: '水', difficulty: 'beginner', category: '食物' },
  { word: 'おちゃ', kana: 'おちゃ', meaning: '茶', difficulty: 'beginner', category: '食物' },
  { word: 'ぱん', kana: 'ぱん', meaning: '麵包', difficulty: 'beginner', category: '食物' },
  
  // 家族
  { word: 'おとうさん', kana: 'おとうさん', meaning: '爸爸', difficulty: 'beginner', category: '家族' },
  { word: 'おかあさん', kana: 'おかあさん', meaning: '媽媽', difficulty: 'beginner', category: '家族' },
  { word: 'おにいさん', kana: 'おにいさん', meaning: '哥哥', difficulty: 'beginner', category: '家族' },
  { word: 'おねえさん', kana: 'おねえさん', meaning: '姐姐', difficulty: 'beginner', category: '家族' },
  
  // 時間
  { word: 'あさ', kana: 'あさ', meaning: '早上', difficulty: 'beginner', category: '時間' },
  { word: 'ひる', kana: 'ひる', meaning: '中午', difficulty: 'beginner', category: '時間' },
  { word: 'ばん', kana: 'ばん', meaning: '晚上', difficulty: 'beginner', category: '時間' },
  { word: 'きょう', kana: 'きょう', meaning: '今天', difficulty: 'beginner', category: '時間' },
  { word: 'あした', kana: 'あした', meaning: '明天', difficulty: 'beginner', category: '時間' },
  { word: 'きのう', kana: 'きのう', meaning: '昨天', difficulty: 'beginner', category: '時間' },
];

// 中級單字（4-5字）
export const INTERMEDIATE_WORDS: TetrisWord[] = [
  // 學校相關
  { word: 'きょうしつ', kana: 'きょうしつ', meaning: '教室', difficulty: 'normal', category: '學校' },
  { word: 'しゅくだい', kana: 'しゅくだい', meaning: '作業', difficulty: 'normal', category: '學校' },
  { word: 'じゅぎょう', kana: 'じゅぎょう', meaning: '上課', difficulty: 'normal', category: '學校' },
  { word: 'せいと', kana: 'せいと', meaning: '學生', difficulty: 'normal', category: '學校' },
  { word: 'としょかん', kana: 'としょかん', meaning: '圖書館', difficulty: 'normal', category: '學校' },
  
  // 職業
  { word: 'いしゃ', kana: 'いしゃ', meaning: '醫生', difficulty: 'normal', category: '職業' },
  { word: 'かんごし', kana: 'かんごし', meaning: '護士', difficulty: 'normal', category: '職業' },
  { word: 'けいさつかん', kana: 'けいさつかん', meaning: '警察', difficulty: 'normal', category: '職業' },
  { word: 'しょうぼうし', kana: 'しょうぼうし', meaning: '消防員', difficulty: 'normal', category: '職業' },
  
  // 趣味活動
  { word: 'どくしょ', kana: 'どくしょ', meaning: '讀書', difficulty: 'normal', category: '趣味' },
  { word: 'おんがく', kana: 'おんがく', meaning: '音樂', difficulty: 'normal', category: '趣味' },
  { word: 'えいが', kana: 'えいが', meaning: '電影', difficulty: 'normal', category: '趣味' },
  { word: 'スポーツ', kana: 'すぽーつ', meaning: '運動', difficulty: 'normal', category: '趣味' },
  { word: 'りょこう', kana: 'りょこう', meaning: '旅行', difficulty: 'normal', category: '趣味' },
  
  // 場所
  { word: 'びょういん', kana: 'びょういん', meaning: '醫院', difficulty: 'normal', category: '場所' },
  { word: 'ぎんこう', kana: 'ぎんこう', meaning: '銀行', difficulty: 'normal', category: '場所' },
  { word: 'ゆうびんきょく', kana: 'ゆうびんきょく', meaning: '郵局', difficulty: 'normal', category: '場所' },
  { word: 'こうえん', kana: 'こうえん', meaning: '公園', difficulty: 'normal', category: '場所' },
  { word: 'デパート', kana: 'でぱーと', meaning: '百貨公司', difficulty: 'normal', category: '場所' },
];

// 高級單字（5-6字）
export const ADVANCED_WORDS: TetrisWord[] = [
  // 抽象概念
  { word: 'けいけん', kana: 'けいけん', meaning: '經驗', difficulty: 'hard', category: '抽象' },
  { word: 'きかい', kana: 'きかい', meaning: '機會', difficulty: 'hard', category: '抽象' },
  { word: 'もんだい', kana: 'もんだい', meaning: '問題', difficulty: 'hard', category: '抽象' },
  { word: 'かいけつ', kana: 'かいけつ', meaning: '解決', difficulty: 'hard', category: '抽象' },
  { word: 'しんぱい', kana: 'しんぱい', meaning: '擔心', difficulty: 'hard', category: '感情' },
  
  // 複雜動作
  { word: 'じゅんび', kana: 'じゅんび', meaning: '準備', difficulty: 'hard', category: '動作' },
  { word: 'せつめい', kana: 'せつめい', meaning: '說明', difficulty: 'hard', category: '動作' },
  { word: 'そうだん', kana: 'そうだん', meaning: '商量', difficulty: 'hard', category: '動作' },
  { word: 'けんきゅう', kana: 'けんきゅう', meaning: '研究', difficulty: 'hard', category: '動作' },
  
  // 社會概念
  { word: 'しゃかい', kana: 'しゃかい', meaning: '社會', difficulty: 'hard', category: '社會' },
  { word: 'せいじ', kana: 'せいじ', meaning: '政治', difficulty: 'hard', category: '社會' },
  { word: 'けいざい', kana: 'けいざい', meaning: '經濟', difficulty: 'hard', category: '社會' },
  { word: 'ぶんか', kana: 'ぶんか', meaning: '文化', difficulty: 'hard', category: '社會' },
];

/**
 * 根據難度獲取單字
 */
export const getWordsByDifficulty = (difficulty: DifficultyLevel): TetrisWord[] => {
  switch (difficulty) {
    case 'beginner':
      return BEGINNER_WORDS;
    case 'normal':
      return [...BEGINNER_WORDS, ...INTERMEDIATE_WORDS];
    case 'hard':
    case 'expert':
      return [...BEGINNER_WORDS, ...INTERMEDIATE_WORDS, ...ADVANCED_WORDS];
    default:
      return BEGINNER_WORDS;
  }
};

/**
 * 根據單字類型過濾
 */
export const getWordsByType = (words: TetrisWord[], wordType: 'hiragana' | 'katakana' | 'mixed'): TetrisWord[] => {
  switch (wordType) {
    case 'hiragana':
      // 只返回平假名單字
      return words.filter(word => /^[ひ-ゖ]+$/.test(word.kana));
    case 'katakana':
      // 只返回包含片假名的單字
      return words.filter(word => /[ア-ヶ]/.test(word.kana));
    case 'mixed':
    default:
      return words;
  }
};

/**
 * 隨機獲取單字
 */
export const getRandomWord = (difficulty: DifficultyLevel, wordType: 'hiragana' | 'katakana' | 'mixed' = 'mixed'): TetrisWord => {
  const words = getWordsByDifficulty(difficulty);
  const filteredWords = getWordsByType(words, wordType);
  
  // 確保有可用的單字
  if (filteredWords.length === 0) {
    // 如果過濾後沒有單字，使用所有單字
    const allWords = getWordsByDifficulty(difficulty);
    if (allWords.length === 0) {
      // 如果還是沒有，使用初級單字
      return BEGINNER_WORDS[0];
    }
    const randomIndex = Math.floor(Math.random() * allWords.length);
    return allWords[randomIndex];
  }
  
  const randomIndex = Math.floor(Math.random() * filteredWords.length);
  return filteredWords[randomIndex];
};

/**
 * 根據字數獲取合適的單字（用於不同方塊形狀）
 */
export const getWordByLength = (
  targetLength: number, 
  difficulty: DifficultyLevel, 
  wordType: 'hiragana' | 'katakana' | 'mixed' = 'mixed'
): TetrisWord => {
  const words = getWordsByDifficulty(difficulty);
  const filteredWords = getWordsByType(words, wordType);
  
  // 確保有可用的單字
  if (filteredWords.length === 0) {
    // 如果過濾後沒有單字，使用所有單字
    const allWords = getWordsByDifficulty(difficulty);
    if (allWords.length === 0) {
      // 如果還是沒有，使用初級單字
      return BEGINNER_WORDS[0];
    }
    const randomIndex = Math.floor(Math.random() * allWords.length);
    return allWords[randomIndex];
  }
  
  // 找到符合長度的單字
  const matchingWords = filteredWords.filter(word => word.kana.length === targetLength);
  
  if (matchingWords.length > 0) {
    const randomIndex = Math.floor(Math.random() * matchingWords.length);
    return matchingWords[randomIndex];
  }
  
  // 如果沒有符合長度的單字，返回隨機單字
  const randomIndex = Math.floor(Math.random() * filteredWords.length);
  return filteredWords[randomIndex];
};

/**
 * 獲取所有可用的單字類別
 */
export const getAllCategories = (): string[] => {
  const allWords = [...BEGINNER_WORDS, ...INTERMEDIATE_WORDS, ...ADVANCED_WORDS];
  const categories = [...new Set(allWords.map(word => word.category))];
  return categories.sort();
};

/**
 * 根據類別獲取單字
 */
export const getWordsByCategory = (category: string, difficulty?: DifficultyLevel): TetrisWord[] => {
  let words: TetrisWord[];
  
  if (difficulty) {
    words = getWordsByDifficulty(difficulty);
  } else {
    words = [...BEGINNER_WORDS, ...INTERMEDIATE_WORDS, ...ADVANCED_WORDS];
  }
  
  return words.filter(word => word.category === category);
}; 