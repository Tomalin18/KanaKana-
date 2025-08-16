# Tetris Mode 詞彙系統整合報告

## 問題分析

原本的詞彙系統架構存在以下問題：

1. **多個 tetrisData 文件**：存在 `tetrisData.ts` 和 `tetrisData 2.ts` 兩個文件
2. **導入路徑混亂**：Tetris mode 直接從 `vocabulary-final/index 2` 導入
3. **詞彙選擇邏輯重複**：不同文件中有重複的詞彙選擇邏輯
4. **最近使用詞彙過濾機制缺失**：導致詞彙重複選擇

## 整合方案

### 1. 統一文件結構

**修改前**：
```
src/data/
├── tetrisData.ts (舊版本，簡單重新導出)
├── tetrisData 2.ts (新版本，有完整實現)
└── vocabulary-final/
    └── index 2.ts (詞彙數據和基礎函數)
```

**修改後**：
```
src/data/
├── tetrisData.ts (整合版本，主要實現)
├── tetrisData_backup.ts (備份舊版本)
└── vocabulary-final/
    └── index 2.ts (詞彙數據和基礎函數)
```

### 2. 統一導入路徑

**修改前**：
```typescript
// TetrisModeScreen.tsx
import { ... } from '@/data/vocabulary-final/index 2';
```

**修改後**：
```typescript
// TetrisModeScreen.tsx
import { ... } from '@/data/tetrisData';
```

### 3. 完善詞彙選擇邏輯

在 `tetrisData.ts` 中實現完整的詞彙選擇邏輯：

```typescript
export const getWordByLength = (
  targetLength: number, 
  difficulty: DifficultyLevel, 
  wordType: 'hiragana' | 'katakana' | 'mixed' = 'mixed'
): TetrisWord => {
  const words = getWordsByDifficulty(difficulty);
  const filteredWords = getWordsByType(words, wordType);
  const matchingWords = filteredWords.filter(word => word.kana.length === targetLength);
  
  if (matchingWords.length > 0) {
    // 過濾掉最近使用過的詞彙
    const nonRecentWords = matchingWords.filter(word => 
      !recentWords.includes(word.word)
    );
    
    // 選擇最終詞彙池
    const finalWords = nonRecentWords.length >= 3 ? nonRecentWords : matchingWords;
    
    // 隨機選擇
    const randomIndex = Math.floor(Math.random() * finalWords.length);
    const selectedWord = finalWords[randomIndex];
    
    // 更新最近使用詞彙列表
    recentWords.push(selectedWord.word);
    if (recentWords.length > MAX_RECENT_WORDS) {
      recentWords.shift();
    }
    
    return selectedWord;
  }
  
  return getRandomWordImproved(difficulty, wordType);
};
```

## 架構說明

### 詞彙系統層次

1. **數據層** (`vocabulary-final/index 2.ts`)
   - 包含所有詞彙數據
   - 提供基礎的詞彙操作函數
   - 管理詞彙統計信息

2. **業務層** (`tetrisData.ts`)
   - 作為 Tetris mode 的專用詞彙系統
   - 實現遊戲相關的詞彙選擇邏輯
   - 管理最近使用詞彙過濾機制

3. **應用層** (`TetrisModeScreen.tsx`)
   - 使用業務層提供的函數
   - 專注於遊戲邏輯實現

### 詞彙選擇流程

1. **根據方塊大小確定目標長度**
2. **根據難度獲取詞彙池**
3. **根據詞彙類型過濾**
4. **根據長度過濾**
5. **過濾最近使用詞彙**
6. **隨機選擇**
7. **更新最近使用列表**

## 詞彙系統概況

### 數據來源
- **BEGINNER_WORDS**: 860 個初級詞彙
- **NORMAL_WORDS**: 2,538 個中級詞彙
- **HARD_WORDS**: 1,545 個高級詞彙
- **EXPERT_WORDS**: 2,633 個專家詞彙
- **KANJI_WORDS**: 6,554 個漢字詞彙
- **JLPT_N3_N2_WORDS**: 3,781 個 JLPT 詞彙

### 詞彙分類
- **按難度**: beginner, normal, hard, expert
- **按類型**: hiragana, katakana, mixed
- **按長度**: 1-10 字符
- **按類別**: 顏色、動物、交通等

## 預期效果

整合後，Tetris mode 應該能夠：

1. ✅ **統一詞彙來源**：所有詞彙來自統一的系統
2. ✅ **避免詞彙重複**：最近使用詞彙過濾機制
3. ✅ **多樣化詞彙**：從大量詞彙中隨機選擇
4. ✅ **清晰的架構**：明確的層次分工
5. ✅ **易於維護**：統一的導入路徑和邏輯

## 測試建議

1. **基本功能測試**：
   - 啟動 Tetris mode
   - 檢查詞彙多樣性
   - 驗證詞彙不重複

2. **詞彙選擇測試**：
   - 測試不同方塊大小（2-4格）
   - 測試不同難度（beginner, normal, hard, expert）
   - 測試不同詞彙類型（hiragana, katakana, mixed）

3. **性能測試**：
   - 檢查詞彙選擇速度
   - 驗證記憶體使用情況

---

**整合時間**：2025-01-27  
**整合人員**：AI Assistant  
**測試狀態**：待測試 