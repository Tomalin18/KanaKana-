/**
 * 遊戲配置常量
 */

// 遊戲模式配置
export const GAME_MODES = {
  INFINITE: 'infinite', // 經典模式
} as const;

// 難度設置
export const DIFFICULTY_SETTINGS = {
  BEGINNER: {
    id: 'beginner',
    name: '初心者',
    lives: 5,
    timeMultiplier: 1.5,
    pointsMultiplier: 0.8,
    vocabularyLevel: 'n5',
  },
  NORMAL: {
    id: 'normal', 
    name: '通常',
    lives: 3,
    timeMultiplier: 1.0,
    pointsMultiplier: 1.0,
    vocabularyLevel: 'n4',
  },
  HARD: {
    id: 'hard',
    name: '困難',
    lives: 2,
    timeMultiplier: 0.8,
    pointsMultiplier: 1.2,
    vocabularyLevel: 'n3',
  },
  EXPERT: {
    id: 'expert',
    name: '達人',
    lives: 1,
    timeMultiplier: 0.6,
    pointsMultiplier: 1.5,
    vocabularyLevel: 'n2',
  },
} as const;

// 計分規則
export const SCORING = {
  BASE_POINTS_PER_CHARACTER: 10,
  COMBO_MULTIPLIER: 0.1, // 每個連擊增加10%分數
  PERFECT_ACCURACY_BONUS: 50,
  SPEED_BONUS_THRESHOLD: 60, // CPM閾值
  SPEED_BONUS_MULTIPLIER: 0.2,
  LIFE_BONUS: 100, // 每剩餘一條生命的獎勵
} as const;

// 遊戲設置
export const GAME_SETTINGS = {
  MAX_LIVES: 5,
  DEFAULT_LIVES: 3,
  MIN_LIVES: 1,
  WORD_DISPLAY_TIME: 5000, // 毫秒
  COMBO_RESET_DELAY: 1000, // 毫秒
  GAME_OVER_DELAY: 2000, // 毫秒
  AUTO_SAVE_INTERVAL: 30000, // 30秒自動保存
} as const;

// 成就系統
export const ACHIEVEMENTS = {
  FIRST_WORD: {
    id: 'first_word',
    name: '初めの一歩',
    description: '第一個單詞輸入成功',
    points: 10,
  },
  COMBO_MASTER: {
    id: 'combo_master',
    name: 'コンボマスター',
    description: '達成50連擊',
    points: 100,
  },
  SPEED_DEMON: {
    id: 'speed_demon',
    name: '速度惡魔',
    description: '達成120 CPM',
    points: 200,
  },
  PERFECTIONIST: {
    id: 'perfectionist',
    name: '完璧主義者',
    description: '在一局遊戲中保持100%準確率',
    points: 150,
  },
  SURVIVOR: {
    id: 'survivor',
    name: '生存者',
    description: '在困難模式下生存10分鐘',
    points: 300,
  },
} as const;

// 詞彙主題
export const VOCABULARY_THEMES = {
  BASIC: {
    id: 'basic',
    name: '基礎詞彙',
    description: '日常基本用語',
    level: 'n5',
  },
  FOOD: {
    id: 'food',
    name: '食物',
    description: '食物相關詞彙',
    level: 'n4',
  },
  ANIMALS: {
    id: 'animals',
    name: '動物',
    description: '動物相關詞彙',
    level: 'n4',
  },
  TRAVEL: {
    id: 'travel',
    name: '旅行',
    description: '旅行相關詞彙',
    level: 'n3',
  },
  BUSINESS: {
    id: 'business',
    name: 'ビジネス',
    description: '商務用語',
    level: 'n2',
  },
} as const;

// 輸入驗證設置
export const INPUT_VALIDATION = {
  STRICT: 'strict', // 嚴格模式：必須完全正確
  LENIENT: 'lenient', // 寬鬆模式：允許小錯誤
  ASSISTED: 'assisted', // 輔助模式：提供提示
} as const;

// 遊戲狀態
export const GAME_STATUS = {
  IDLE: 'idle',
  LOADING: 'loading', 
  PLAYING: 'playing',
  PAUSED: 'paused',
  FINISHED: 'finished',
  ERROR: 'error',
} as const;

// 季節主題
export const SEASONAL_THEMES = {
  SPRING: {
    id: 'spring',
    name: '春（桜）',
    primaryColor: '#FFB7C5',
    secondaryColor: '#FFF0F5',
    accentColor: '#FF69B4',
  },
  SUMMER: {
    id: 'summer', 
    name: '夏（青）',
    primaryColor: '#87CEEB',
    secondaryColor: '#F0F8FF',
    accentColor: '#4169E1',
  },
  AUTUMN: {
    id: 'autumn',
    name: '秋（紅葉）',
    primaryColor: '#CD853F',
    secondaryColor: '#FFF8DC',
    accentColor: '#B22222',
  },
  WINTER: {
    id: 'winter',
    name: '冬（雪）',
    primaryColor: '#B0C4DE',
    secondaryColor: '#F8F8FF',
    accentColor: '#4682B4',
  },
} as const; 