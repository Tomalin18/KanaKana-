# KanaKana - かなカナ

The definitive Japanese typing practice game

## 🚀 快速開始

### 開發環境設置

1. **克隆項目**
   ```bash
   git clone <repository-url>
   cd KanaKana0729
   ```

2. **安裝依賴**
   ```bash
   npm install
   ```

3. **啟動開發環境**
   ```bash
   # 啟動版本檢查服務器和測試
   ./scripts/start-dev.sh
   
   # 在另一個終端啟動Expo
   npx expo start
   ```

4. **運行應用**
   - 使用Expo Go掃描QR碼
   - 或按 `i` 啟動iOS模擬器
   - 或按 `a` 啟動Android模擬器

## 🔧 強制更新功能

KanaKana已集成完整的強制更新機制，確保用戶始終使用最新版本。

### 功能特點

- ✅ **自動版本檢查**: 應用啟動時自動檢查
- ✅ **強制更新**: 阻止使用舊版本
- ✅ **跨平台支持**: iOS和Android
- ✅ **美觀界面**: 現代化的更新提示
- ✅ **錯誤處理**: 網絡錯誤時的優雅處理

### 測試強制更新

1. **啟動版本檢查服務器**
   ```bash
   cd scripts
   node version-check-server.js
   ```

2. **運行測試**
   ```bash
   node test-version-check.js
   ```

3. **在應用中測試**
   - 修改 `scripts/version-check-server.js` 中的版本配置
   - 重啟服務器
   - 重新啟動應用查看強制更新界面

### 配置說明

詳細配置和使用說明請參考：[強制更新功能說明](docs/強制更新功能說明.md)

## 📱 遊戲模式

- **平假名模式**: 練習平假名輸入
- **片假名模式**: 練習片假名輸入
- **漢字模式**: 練習漢字讀音
- **俄羅斯方塊模式**: 結合遊戲的詞彙學習
- **長文本模式**: 長篇文章練習

## 🛠 技術棧

- **React Native** + **Expo**
- **TypeScript**
- **Zustand** (狀態管理)
- **React Navigation**
- **Expo Modules** (各種原生功能)

## 📦 構建和發布

### iOS
```bash
npx expo build:ios
```

### Android
```bash
npx expo build:android
```

## 🧪 測試

```bash
npm test
npm run test:watch
npm run test:coverage
```

## 📚 文檔

- [強制更新功能說明](docs/強制更新功能說明.md)
- [專案架構與開發藍圖](docs/專案架構與開發藍圖.md)
- [俄羅斯方塊模式開發總結](docs/俄羅斯方塊模式開發總結.md)
- [漢字方塊功能完成總結](docs/漢字方塊功能完成總結.md)

## 🤝 貢獻

1. Fork 項目
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📄 許可證

MIT License - 詳見 [LICENSE](LICENSE) 文件

## 📞 聯繫

- 項目維護者: KanaKana Team
- 郵箱: team@kanakana.com
- 項目地址: https://github.com/kanakana/kanakana 