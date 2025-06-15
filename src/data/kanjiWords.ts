import type { KanjiWord, VocabularyTheme } from '@/types';

/**
 * 漢字詞彙資料庫
 * 包含JLPT N5-N1的常用漢字詞彙
 */

// JLPT N5 漢字詞彙
export const JLPT_N5_KANJI: KanjiWord[] = [
  {
    id: 'n5_001',
    text: '学校',
    kanji: '学校',
    hiragana: 'がっこう',
    katakana: 'ガッコウ',
    meaning: '學校',
    difficulty: 1,
    theme: 'jlpt_n5' as VocabularyTheme,
    jlptLevel: 'n5',
    frequency: 95,
    strokeCount: 18,
    examples: ['学校に行く', '新しい学校']
  },
  {
    id: 'n5_002',
    text: '先生',
    kanji: '先生',
    hiragana: 'せんせい',
    katakana: 'センセイ',
    meaning: '老師',
    difficulty: 1,
    theme: 'jlpt_n5' as VocabularyTheme,
    jlptLevel: 'n5',
    frequency: 90,
    strokeCount: 11,
    examples: ['日本語の先生', '先生、おはようございます']
  },
  {
    id: 'n5_003',
    text: '友達',
    kanji: '友達',
    hiragana: 'ともだち',
    katakana: 'トモダチ',
    meaning: '朋友',
    difficulty: 1,
    theme: 'jlpt_n5' as VocabularyTheme,
    jlptLevel: 'n5',
    frequency: 88,
    strokeCount: 17,
    examples: ['友達と遊ぶ', '新しい友達']
  },
  {
    id: 'n5_004',
    text: '日本',
    kanji: '日本',
    hiragana: 'にほん',
    katakana: 'ニホン',
    meaning: '日本',
    difficulty: 1,
    theme: 'jlpt_n5' as VocabularyTheme,
    jlptLevel: 'n5',
    frequency: 98,
    strokeCount: 9,
    examples: ['日本人', '日本語を勉強する']
  },
  {
    id: 'n5_005',
    text: '時間',
    kanji: '時間',
    hiragana: 'じかん',
    katakana: 'ジカン',
    meaning: '時間',
    difficulty: 2,
    theme: 'jlpt_n5' as VocabularyTheme,
    jlptLevel: 'n5',
    frequency: 85,
    strokeCount: 22,
    examples: ['時間がない', '授業時間']
  },
  {
    id: 'n5_006',
    text: '今日',
    kanji: '今日',
    hiragana: 'きょう',
    katakana: 'キョウ',
    meaning: '今天',
    difficulty: 1,
    theme: 'jlpt_n5' as VocabularyTheme,
    jlptLevel: 'n5',
    frequency: 92,
    strokeCount: 8,
    examples: ['今日は暑い', '今日の天気']
  },
  {
    id: 'n5_007',
    text: '明日',
    kanji: '明日',
    hiragana: 'あした',
    katakana: 'アシタ',
    meaning: '明天',
    difficulty: 1,
    theme: 'jlpt_n5' as VocabularyTheme,
    jlptLevel: 'n5',
    frequency: 87,
    strokeCount: 12,
    examples: ['明日会いましょう', '明日の予定']
  },
  {
    id: 'n5_008',
    text: '家族',
    kanji: '家族',
    hiragana: 'かぞく',
    katakana: 'カゾク',
    meaning: '家人',
    difficulty: 2,
    theme: 'jlpt_n5' as VocabularyTheme,
    jlptLevel: 'n5',
    frequency: 83,
    strokeCount: 21,
    examples: ['家族と一緒に', '大きな家族']
  },
  {
    id: 'n5_009',
    text: '会社',
    kanji: '会社',
    hiragana: 'かいしゃ',
    katakana: 'カイシャ',
    meaning: '公司',
    difficulty: 2,
    theme: 'jlpt_n5' as VocabularyTheme,
    jlptLevel: 'n5',
    frequency: 89,
    strokeCount: 15,
    examples: ['会社で働く', '大きな会社']
  },
  {
    id: 'n5_010',
    text: '電話',
    kanji: '電話',
    hiragana: 'でんわ',
    katakana: 'デンワ',
    meaning: '電話',
    difficulty: 2,
    theme: 'jlpt_n5' as VocabularyTheme,
    jlptLevel: 'n5',
    frequency: 86,
    strokeCount: 27,
    examples: ['電話をかける', '携帯電話']
  }
];

// JLPT N4 漢字詞彙（簡化版）
export const JLPT_N4_KANJI: KanjiWord[] = [
  {
    id: 'n4_001',
    text: '経験',
    kanji: '経験',
    hiragana: 'けいけん',
    katakana: 'ケイケン',
    meaning: '經驗',
    difficulty: 3,
    theme: 'jlpt_n4' as VocabularyTheme,
    jlptLevel: 'n4',
    frequency: 75,
    strokeCount: 30,
    examples: ['仕事の経験', '経験を積む']
  },
  {
    id: 'n4_002',
    text: '文化',
    kanji: '文化',
    hiragana: 'ぶんか',
    katakana: 'ブンカ',
    meaning: '文化',
    difficulty: 3,
    theme: 'jlpt_n4' as VocabularyTheme,
    jlptLevel: 'n4',
    frequency: 78,
    strokeCount: 12,
    examples: ['日本の文化', '文化交流']
  },
  {
    id: 'n4_003',
    text: '自然',
    kanji: '自然',
    hiragana: 'しぜん',
    katakana: 'シゼン',
    meaning: '自然',
    difficulty: 3,
    theme: 'jlpt_n4' as VocabularyTheme,
    jlptLevel: 'n4',
    frequency: 80,
    strokeCount: 17,
    examples: ['自然が美しい', '自然保護']
  }
];

/**
 * 根據 JLPT 等級獲取漢字詞彙
 */
export const getKanjiWordsByLevel = (level: 'n5' | 'n4' | 'n3' | 'n2' | 'n1'): KanjiWord[] => {
  switch (level) {
    case 'n5':
      return JLPT_N5_KANJI;
    case 'n4':
      return JLPT_N4_KANJI;
    case 'n3':
    case 'n2':
    case 'n1':
      // 這些將在後續版本中新增
      return [];
    default:
      return JLPT_N5_KANJI;
  }
};

/**
 * 隨機獲取漢字詞彙
 */
export const getRandomKanjiWord = (level: 'n5' | 'n4' | 'n3' | 'n2' | 'n1' = 'n5'): KanjiWord => {
  const words = getKanjiWordsByLevel(level);
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};

/**
 * 獲取所有可用的漢字詞彙
 */
export const getAllKanjiWords = (): KanjiWord[] => {
  return [
    ...JLPT_N5_KANJI,
    ...JLPT_N4_KANJI,
  ];
}; 