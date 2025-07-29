# KanaKana (かなカナ) 🎮

[![React Native](https://img.shields.io/badge/React%20Native-0.79.5-blue.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-53.0.20-blue.svg)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📖 專案簡介

KanaKana 是一款專為日語學習者設計的創新打字練習遊戲，結合了傳統日式美學與現代遊戲設計原理。本項目採用最新的 React Native 和 Expo 技術棧，提供流暢的跨平台體驗。

### 🎯 核心特色

- **🎮 多種遊戲模式**：假名練習、漢字讀音、俄羅斯方塊打字
- **📚 分級學習系統**：從 JLPT N5 到 N1 的完整詞彙庫
- **🎨 精美視覺設計**：深色主題配合霓虹色彩，營造科技感氛圍
- **⚡ 流暢性能**：60fps 動畫，響應式設計
- **🌍 多語言支持**：繁體中文、英文、日文界面

### 🎮 遊戲模式

1. **練習模式-假名**：基礎假名打字練習
2. **練習模式-漢字**：看漢字輸入假名讀音
3. **俄羅斯方塊**：在方塊掉落前完成打字挑戰

## 🚀 快速開始

### 環境要求

- Node.js >= 18.0.0
- npm >= 8.0.0
- Expo CLI
- iOS Simulator 或 Android Emulator

### 安裝步驟

```bash
# 克隆專案
git clone https://github.com/kanakana/kanakana.git
cd kanakana

# 安裝依賴
npm install

# 啟動開發服務器
npm start

# 在 iOS 模擬器中運行
npm run ios

# 在 Android 模擬器中運行
npm run android
```

## 📱 功能特色

### 🎯 遊戲系統
- **智能詞彙選擇**：根據難度和進度動態調整
- **連擊獎勵系統**：連續正確輸入獲得額外分數
- **生命值機制**：錯誤輸入會減少生命值
- **計時挑戰**：記錄完成時間，挑戰個人最佳

### 🎨 視覺設計
- **星空背景**：動態粒子效果營造沉浸感
- **毛玻璃效果**：現代化的 UI 設計語言
- **霓虹色彩**：科技感的視覺風格
- **流暢動畫**：60fps 的絲滑體驗

### 📊 學習統計
- **詳細記錄**：每次遊戲的完整統計
- **進度追蹤**：學習進度和能力分析
- **成就系統**：激勵持續學習的成就機制

## 🛠 技術架構

### 前端技術
- **React Native 0.79.5**：跨平台移動應用開發
- **Expo SDK 53**：快速開發和部署
- **TypeScript 5.8.3**：類型安全的 JavaScript
- **Zustand**：輕量級狀態管理

### UI 組件
- **React Navigation**：導航系統
- **Expo Blur**：毛玻璃效果
- **React Native Reanimated**：高性能動畫
- **React Native SVG**：矢量圖形支持

### 開發工具
- **ESLint**：代碼質量檢查
- **Prettier**：代碼格式化
- **Jest**：單元測試
- **TypeScript**：靜態類型檢查

## 📁 專案結構

```
KanaKana/
├── src/
│   ├── components/          # 可重用組件
│   │   ├── common/         # 通用組件
│   │   └── game/           # 遊戲相關組件
│   ├── screens/            # 頁面組件
│   │   ├── main/           # 主要頁面
│   │   ├── game-modes/     # 遊戲模式頁面
│   │   └── common/         # 通用頁面
│   ├── data/               # 數據文件
│   ├── utils/              # 工具函數
│   ├── hooks/              # 自定義 Hooks
│   ├── store/              # 狀態管理
│   ├── types/              # TypeScript 類型定義
│   └── constants/          # 常量定義
├── assets/                 # 靜態資源
├── docs/                   # 文檔
└── ios/                    # iOS 原生配置
```

## 🎮 遊戲模式詳解

### 練習模式-假名
- **目標**：提升假名輸入速度和準確性
- **玩法**：顯示日文單字，輸入對應的假名
- **特色**：分級詞彙庫，智能難度調整

### 練習模式-漢字
- **目標**：學習漢字讀音和意思
- **玩法**：顯示漢字，輸入假名讀音
- **特色**：JLPT 分級，多種讀音類型

### 俄羅斯方塊模式
- **目標**：在時間壓力下提升打字能力
- **玩法**：方塊下落時輸入單字，正確輸入消除方塊
- **特色**：動態難度，漢字方塊挑戰

## 📊 數據統計

- **詞彙總數**：7,658 個日文單字
- **漢字詞彙**：99 個常用漢字
- **遊戲模式**：3 種不同玩法
- **支持平台**：iOS、Android、Web

## 🤝 貢獻指南

我們歡迎所有形式的貢獻！請查看 [CONTRIBUTING.md](CONTRIBUTING.md) 了解詳細信息。

### 開發流程

1. Fork 本專案
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📄 授權條款

本專案採用 MIT 授權條款 - 查看 [LICENSE](LICENSE) 文件了解詳細信息。

## 📞 聯繫我們

- **專案主頁**：https://kanakana.com
- **GitHub Issues**：https://github.com/kanakana/kanakana/issues
- **團隊郵箱**：team@kanakana.com

## 🙏 致謝

感謝所有為這個專案做出貢獻的開發者和日語學習者！

---

**Made with ❤️ by KanaKana Team** 