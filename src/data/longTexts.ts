import type { LongTextContent, DifficultyLevel } from '@/types';

/**
 * 長文內容資料庫
 * 包含不同難度的日文長文，內容比一般模式更長
 */

// 簡單長文 (初級)
export const SIMPLE_LONG_TEXTS: LongTextContent[] = [
  {
    id: 'simple_001',
    title: '自己紹介',
    content: 'はじめまして。私の名前は田中です。二十歳の大学生です。東京大学で経済学を勉強しています。趣味は読書と映画鑑賞です。特に推理小説が好きです。週末はよく図書館に行きます。将来は国際的な仕事をしたいと思っています。',
    difficulty: 'beginner' as DifficultyLevel,
    category: 'dialogue',
    estimatedTime: 90,
    vocabulary: ['はじめまして', '名前', '大学生', '東京大学', '経済学', '勉強', '趣味', '読書', '映画', '推理小説', '図書館', '将来', '国際的', '仕事']
  },
  {
    id: 'simple_002',
    title: '今日の一日',
    content: '今日は土曜日です。朝七時に起きました。まず顔を洗って歯を磨きました。朝ごはんはパンとコーヒーを飲みました。その後、友達と約束があったので電車で新宿に行きました。映画を見てから一緒に昼ごはんを食べました。とても楽しい時間でした。',
    difficulty: 'beginner' as DifficultyLevel,
    category: 'story',
    estimatedTime: 85,
    vocabulary: ['土曜日', '起きる', '顔', '洗う', '歯', '磨く', '朝ごはん', 'パン', 'コーヒー', '友達', '約束', '電車', '新宿', '映画', '昼ごはん', '楽しい']
  },
  {
    id: 'simple_003',
    title: '春の公園',
    content: '桜の季節になりました。近くの公園に桜を見に行きました。たくさんの人がお花見をしていました。子供たちが元気に走り回っています。おじいさんとおばあさんがベンチに座って桜を眺めています。暖かい春の風が心地よく感じられました。',
    difficulty: 'beginner' as DifficultyLevel,
    category: 'story',
    estimatedTime: 80,
    vocabulary: ['桜', '季節', '公園', 'お花見', '子供', '元気', '走る', 'おじいさん', 'おばあさん', 'ベンチ', '座る', '眺める', '暖かい', '春', '風', '心地よい']
  }
];

// 中級長文
export const INTERMEDIATE_LONG_TEXTS: LongTextContent[] = [
  {
    id: 'inter_001',
    title: '日本の四季',
    content: '日本には春、夏、秋、冬の四つの美しい季節があります。春は桜が咲いて、入学式や新しい生活が始まる季節です。夏は暑くて湿度が高いですが、お祭りや花火大会などの楽しいイベントがたくさんあります。秋は紅葉が美しく、涼しくて過ごしやすい季節です。冬は寒くて雪が降りますが、温泉やスキーを楽しむことができます。',
    difficulty: 'normal' as DifficultyLevel,
    category: 'article',
    estimatedTime: 120,
    vocabulary: ['四季', '美しい', '入学式', '生活', '暑い', '湿度', 'お祭り', '花火大会', 'イベント', '紅葉', '涼しい', '過ごしやすい', '温泉', 'スキー']
  },
  {
    id: 'inter_002',
    title: '日本料理',
    content: '日本料理は世界中で人気があります。寿司、天ぷら、ラーメンなどは外国でもよく知られています。日本料理の特徴は新鮮な食材を使うことです。また、季節に合わせた料理を作ることも大切にしています。例えば、春には山菜、夏には冷たいそうめん、秋には松茸、冬には鍋料理を楽しみます。',
    difficulty: 'normal' as DifficultyLevel,
    category: 'article',
    estimatedTime: 115,
    vocabulary: ['日本料理', '世界中', '人気', '寿司', '天ぷら', 'ラーメン', '外国', '特徴', '新鮮', '食材', '季節', '山菜', 'そうめん', '松茸', '鍋料理']
  }
];

/**
 * 根據難度獲取長文內容
 */
export const getLongTextsByDifficulty = (difficulty: DifficultyLevel): LongTextContent[] => {
  switch (difficulty) {
    case 'beginner':
      return SIMPLE_LONG_TEXTS;
    case 'normal':
      return INTERMEDIATE_LONG_TEXTS;
    case 'hard':
    case 'expert':
      // 這些將在後續版本中新增
      return [...SIMPLE_LONG_TEXTS, ...INTERMEDIATE_LONG_TEXTS];
    default:
      return SIMPLE_LONG_TEXTS;
  }
};

/**
 * 隨機獲取長文內容
 */
export const getRandomLongText = (difficulty: DifficultyLevel = 'beginner'): LongTextContent => {
  const texts = getLongTextsByDifficulty(difficulty);
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
};

/**
 * 獲取所有可用的長文內容
 */
export const getAllLongTexts = (): LongTextContent[] => {
  return [
    ...SIMPLE_LONG_TEXTS,
    ...INTERMEDIATE_LONG_TEXTS,
  ];
}; 