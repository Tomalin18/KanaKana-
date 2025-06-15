# Kana Tower (かなタワー) 🗼

> **世界級日語打字練習遊戲** - 為全球290萬日語學習者量身打造的高品質移動應用

[![Expo SDK](https://img.shields.io/badge/Expo%20SDK-53.0.0-blue.svg)](https://expo.dev/)
[![React Native](https://img.shields.io/badge/React%20Native-0.79.3-green.svg)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 📖 項目概述

Kana Tower 是一款專為日語學習者設計的創新打字練習遊戲，結合了傳統日式美學與現代遊戲設計原理。本項目採用最新的 React Native 和 Expo 技術棧，提供流暢的跨平台體驗。

### 🎯 核心特色

- **🗾 正宗日式設計**：採用傳統日本色彩（櫻花🌸、抹茶🍵、夕陽🌅）和設計原則
- **⌨️ 原生日文輸入**：完整支援日文 IME 和多種輸入法
- **🤖 AI 智能學習**：自適應難度調整和個性化學習建議
- **🎮 三種遊戲模式**：無限模式、練習模式、每日挑戰
- **🌸 季節主題系統**：隨季節變化的視覺主題
- **♿ 完全無障礙**：WCAG 2.1 AA 標準合規
- **📊 詳細分析**：全面的進度追蹤和表現分析

## 🚀 技術架構

### 核心技術棧
- **前端框架**：React Native 0.79.3 + Expo SDK 53.0.0
- **程式語言**：TypeScript 5.3.3（嚴格模式）
- **狀態管理**：Zustand + Immer
- **導航系統**：React Navigation 6.x
- **動畫引擎**：React Native Reanimated 3.x
- **UI組件**：React Native Elements + 自定義組件

### 功能模塊

#### 🎮 遊戲系統
```typescript
// 三種核心遊戲模式
const GAME_MODES = {
  INFINITE: 'infinite',     // 無限挑戰模式
  PRACTICE: 'practice',     // 專項練習模式  
  DAILY_CHALLENGE: 'daily_challenge' // 每日挑戰模式
}

// 自適應難度系統
const DIFFICULTY_LEVELS = {
  BEGINNER: { lives: 5, timeMultiplier: 1.5, vocabularyLevel: 'n5' },
  NORMAL: { lives: 3, timeMultiplier: 1.0, vocabularyLevel: 'n4' },
  HARD: { lives: 2, timeMultiplier: 0.8, vocabularyLevel: 'n3' },
  EXPERT: { lives: 1, timeMultiplier: 0.6, vocabularyLevel: 'n2' }
}
```

#### 🎨 設計系統
```typescript
// 日式傳統色彩
const JapaneseColors = {
  sakura: '#FFB7C5',    // 櫻花粉
  matcha: '#87A96B',    // 抹茶綠
  yuhi: '#FF6B35',      // 夕陽橙
  ai: '#1E40AF'         // 藍（AI主題）
}

// 季節主題切換
const SEASONAL_THEMES = {
  SPRING: { primaryColor: '#FFB7C5', name: '春（桜）' },
  SUMMER: { primaryColor: '#87CEEB', name: '夏（青）' },
  AUTUMN: { primaryColor: '#CD853F', name: '秋（紅葉）' },
  WINTER: { primaryColor: '#B0C4DE', name: '冬（雪）' }
}
```

#### 📚 詞彙系統
```typescript
// 多主題詞彙庫
const VOCABULARY_THEMES = {
  BASIC: { name: '基礎詞彙', level: 'n5' },
  FOOD: { name: '食物', level: 'n4' },
  TRAVEL: { name: '旅行', level: 'n3' },
  BUSINESS: { name: 'ビジネス', level: 'n2' }
}

// 詞彙難度分級
interface Word {
  kana: string;           // 假名讀音
  kanji?: string;         // 漢字寫法
  romaji: string;         // 羅馬字
  meaning: string;        // 中文釋義
  jlptLevel: 'n1'|'n2'|'n3'|'n4'|'n5';
  frequency: 'very_high'|'high'|'medium'|'low';
}
```

## 🎯 已完成功能

### ✅ 核心遊戲功能
- [x] 完整的遊戲流程（開始→進行→暫停→結束）
- [x] 日文單詞輸入驗證和處理
- [x] 實時分數計算和連擊系統
- [x] 生命值管理和遊戲結束邏輯
- [x] 遊戲計時和統計系統

### ✅ 用戶介面
- [x] 主選單設計（遊戲模式選擇）
- [x] 遊戲主界面（完整遊戲邏輯）
- [x] 設置頁面（音效、視覺、遊戲設定）
- [x] 載入畫面和錯誤處理
- [x] 響應式設計和無障礙支援

### ✅ 技術架構
- [x] TypeScript 嚴格模式配置
- [x] Zustand + Immer 狀態管理
- [x] React Navigation 導航系統
- [x] 錯誤邊界和異常處理
- [x] 完整的類型定義系統

### ✅ 日文處理
- [x] 平假名、片假名、漢字識別
- [x] 日文輸入驗證工具
- [x] 詞彙準確度計算
- [x] 多主題詞彙資料庫
- [x] JLPT 等級分類

### ✅ 設計系統
- [x] 日式傳統色彩主題
- [x] 季節性視覺主題
- [x] 日文字符優化字體
- [x] 文化設計原則應用
- [x] 完整的設計代幣系統

## 📱 快速開始

### 環境要求
```bash
Node.js >= 18.0.0
npm >= 8.0.0
Expo CLI >= 6.0.0
```

### 安裝步驟
```bash
# 1. 克隆項目
git clone https://github.com/kanatower/kana-tower.git
cd kana-tower

# 2. 安裝依賴項
npm install

# 3. 啟動開發服務器
npx expo start

# 4. 在移動設備上運行
# iOS: 掃描 QR 碼或使用 iOS 模擬器
# Android: 掃描 QR 碼或使用 Android 模擬器
```

### 開發命令
```bash
npm run start          # 啟動 Expo 開發服務器
npm run android        # 在 Android 設備上運行
npm run ios           # 在 iOS 設備上運行
npm run web           # 在瀏覽器中運行
npm run type-check    # TypeScript 類型檢查
npm run lint          # ESLint 代碼檢查
npm run lint:fix      # 自動修復 ESLint 錯誤
```

## 🎨 設計理念

### 日式美學原則
- **間（Ma）**：合理運用留白空間
- **侘寂（Wabi-Sabi）**：接受不完美的美學
- **簡素（Kanso）**：簡潔而不簡單的設計

### 色彩心理學
- **櫻花粉**：溫暖、友好、鼓勵學習
- **抹茶綠**：平靜、專注、自然成長  
- **夕陽橙**：活力、創新、成就感
- **深藍**：信任、專業、科技感

## 📊 性能優化

### 渲染優化
- React.memo 和 useMemo 防止不必要的重新渲染
- FlatList 虛擬化處理大量詞彙數據
- 圖片懶加載和緩存策略

### 狀態管理優化
- Zustand 輕量級狀態管理
- Immer 不可變數據更新
- 選擇性訂閱減少組件更新

### 記憶體管理
- 及時清理定時器和事件監聽器
- 合理使用 useCallback 和 useMemo
- 避免記憶體洩漏的最佳實踐

## 🌐 國際化支持

### 語言設定
```typescript
const SUPPORTED_LANGUAGES = {
  UI_LANGUAGES: ['zh_tw', 'en', 'ja', 'ko'],
  INPUT_LANGUAGES: ['ja'],
  VOICE_LANGUAGES: ['ja', 'en']
}
```

### 文化適應
- 右到左（RTL）語言支援預備
- 本地化日期和時間格式
- 文化敏感的顏色選擇

## 🧪 測試策略

### 測試覆蓋範圍
```bash
npm run test           # 運行單元測試
npm run test:watch     # 監視模式測試
npm run test:coverage  # 生成覆蓋率報告
```

### 測試類型
- **單元測試**：組件邏輯和工具函數
- **集成測試**：狀態管理和 API 交互
- **端對端測試**：完整用戶流程測試

## 📈 未來發展

### 短期計劃（1-3個月）
- [ ] 多人對戰模式
- [ ] 語音識別練習
- [ ] 進階詞彙主題
- [ ] 社交分享功能

### 中期計劃（3-6個月）
- [ ] AI 個性化學習路徑
- [ ] 語音朗讀功能
- [ ] 離線模式支援
- [ ] 成就系統擴展

### 長期計劃（6-12個月）
- [ ] VR/AR 沉浸式學習
- [ ] 教師管理後台
- [ ] 學習分析儀表板
- [ ] 跨平台同步

## 🤝 貢獻指南

我們歡迎所有形式的貢獻！請參考 [CONTRIBUTING.md](CONTRIBUTING.md) 了解詳細指南。

### 貢獻方式
- 🐛 報告 Bug
- 💡 提出新功能建議
- 📝 改進文檔
- 🔧 提交代碼修復
- 🌐 翻譯支援

## 📞 支援與聯繫

- **官方網站**：https://kanatower.com
- **問題回報**：https://github.com/kanatower/issues
- **討論區**：https://github.com/kanatower/discussions
- **電子郵件**：team@kanatower.com

## 📄 許可證

本項目採用 MIT 許可證。詳見 [LICENSE](LICENSE) 文件。

---

<div align="center">
  <p>
    <strong>🌸 一起學習日語，一起成長！ 🌸</strong><br>
    Made with ❤️ for Japanese language learners worldwide
  </p>
  
  <img src="https://img.shields.io/badge/Made%20with-❤️-red.svg" alt="Made with love">
  <img src="https://img.shields.io/badge/日本語-学習-blue.svg" alt="Japanese Learning">
  <img src="https://img.shields.io/badge/React%20Native-💙-blue.svg" alt="React Native">
</div> 