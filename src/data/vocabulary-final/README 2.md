# 詞彙數據使用說明

## 概述

這個目錄包含了從 `vocabulary.csv` 轉換而來的日語詞彙數據，專門用於俄羅斯方塊模式。

## 檔案結構

```
vocabulary-final/
├── index.ts          # 主索引檔案，包含所有工具函數
├── beginner.ts       # 初級單字 (942個)
├── normal.ts         # 中級單字 (2538個)
├── hard.ts           # 高級單字 (1545個)
├── expert.ts         # 專家級單字 (2633個)
├── hiragana.ts       # 平假名單字 (1104個)
├── kanji-01.ts       # 漢字檔案 1 (1000個)
├── kanji-02.ts       # 漢字檔案 2 (1000個)
├── kanji-03.ts       # 漢字檔案 3 (1000個)
├── kanji-04.ts       # 漢字檔案 4 (1000個)
├── kanji-05.ts       # 漢字檔案 5 (1000個)
├── kanji-06.ts       # 漢字檔案 6 (1000個)
└── kanji-07.ts       # 漢字檔案 7 (554個)
```

## 統計資訊

- **總單字數**: 7,658 個
- **初級單字**: 942 個
- **中級單字**: 2,538 個
- **高級單字**: 1,545 個
- **專家級單字**: 2,633 個
- **漢字單字**: 6,554 個
- **平假名單字**: 1,104 個

## 使用方法

### 基本導入

```typescript
import { 
  getWordsByDifficulty, 
  getRandomWordImproved,
  getWordByLength,
  getAllCategories 
} from './vocabulary-final';
```

### 根據難度獲取單字

```typescript
// 獲取初級單字
const beginnerWords = getWordsByDifficulty('beginner');

// 獲取中級單字（包含初級）
const normalWords = getWordsByDifficulty('normal');

// 獲取高級單字（包含初級和中級）
const hardWords = getWordsByDifficulty('hard');

// 獲取專家級單字（包含所有難度）
const expertWords = getWordsByDifficulty('expert');
```

### 隨機獲取單字

```typescript
// 隨機獲取初級單字
const randomBeginner = getRandomWordImproved('beginner');

// 隨機獲取平假名單字
const randomHiragana = getRandomWordImproved('beginner', 'hiragana');

// 隨機獲取片假名單字
const randomKatakana = getRandomWordImproved('normal', 'katakana');

// 隨機獲取混合類型單字
const randomMixed = getRandomWordImproved('expert', 'mixed');
```

### 根據長度獲取單字

```typescript
// 獲取3字元的初級單字
const threeCharWord = getWordByLength(3, 'beginner');

// 獲取5字元的中級平假名單字
const fiveCharHiragana = getWordByLength(5, 'normal', 'hiragana');
```

### 根據關卡和長度獲取單字

```typescript
// 第5關以上會包含漢字
const level5Word = getWordByLevelAndLength(4, 5, 'normal');

// 第1-4關只會出現平假名
const level2Word = getWordByLevelAndLength(3, 2, 'beginner');
```

### 獲取類別資訊

```typescript
// 獲取所有類別
const categories = getAllCategories();
// 返回: ['一般', '場所', '學術', '性質', '感情', '技術', '抽象', '政治', '文獻', '物質', '經濟']

// 根據類別獲取單字
const politicalWords = getWordsByCategory('政治', 'expert');
```

### 單字類型過濾

```typescript
import { getWordsByType } from './vocabulary-final';

const allWords = getWordsByDifficulty('normal');

// 過濾出平假名單字
const hiraganaWords = getWordsByType(allWords, 'hiragana');

// 過濾出片假名單字
const katakanaWords = getWordsByType(allWords, 'katakana');

// 獲取混合類型單字
const mixedWords = getWordsByType(allWords, 'mixed');
```

## 單字結構

每個單字物件包含以下屬性：

```typescript
interface TetrisWord {
  word: string;        // 顯示的單字（漢字或假名）
  kana: string;        // 假名讀音
  meaning: string;     // 英文意思
  difficulty: DifficultyLevel;  // 難度等級
  category: string;    // 類別
  kanji?: string;      // 漢字版本（可選）
  isKanji?: boolean;   // 是否為漢字單字
}
```

## 使用範例

```typescript
// 在遊戲中使用
import { getRandomWordImproved } from './vocabulary-final';

function getNextWord(level: number, difficulty: DifficultyLevel) {
  if (level >= 5) {
    // 第5關以上可以出現漢字
    return getRandomWordImproved(difficulty, 'mixed');
  } else {
    // 第1-4關只出現平假名
    return getRandomWordImproved(difficulty, 'hiragana');
  }
}

// 根據玩家等級調整難度
function getAdaptiveWord(playerLevel: number) {
  if (playerLevel <= 10) {
    return getRandomWordImproved('beginner', 'hiragana');
  } else if (playerLevel <= 20) {
    return getRandomWordImproved('normal', 'mixed');
  } else if (playerLevel <= 30) {
    return getRandomWordImproved('hard', 'mixed');
  } else {
    return getRandomWordImproved('expert', 'mixed');
  }
}
```

## 注意事項

1. **檔案大小**: 由於包含大量詞彙，檔案較大，建議按需導入
2. **記憶體使用**: 所有單字會載入到記憶體中，請注意記憶體使用量
3. **TypeScript 支援**: 所有函數都有完整的 TypeScript 類型定義
4. **隨機性**: 使用 `getRandomWordImproved` 可以避免重複選擇相同的單字

## 轉換資訊

- **轉換時間**: 2025-07-19T01:23:03.806Z
- **原始檔案**: vocabulary.csv
- **轉換工具**: Node.js + PapaParse
- **總處理時間**: 約 30 秒 