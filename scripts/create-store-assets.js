#!/usr/bin/env node

/**
 * KanaKana 商店素材生成腳本
 * 使用 Canvas API 生成 Google Play Store 所需的素材
 */

const fs = require('fs');
const path = require('path');

// 確保 assets 目錄存在
const assetsDir = path.join(__dirname, '../src/assets/images/store');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// 功能宣傳圖模板 (1024x500)
const featureGraphicTemplate = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>KanaKana Feature Graphic</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 50%, #60A5FA 100%);
            font-family: 'Arial', sans-serif;
            overflow: hidden;
        }
        .container {
            width: 1024px;
            height: 500px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 40px;
            box-sizing: border-box;
        }
        .left-content {
            color: white;
            flex: 1;
            z-index: 2;
        }
        .title {
            font-size: 48px;
            font-weight: bold;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .subtitle {
            font-size: 24px;
            margin-bottom: 30px;
            opacity: 0.9;
        }
        .features {
            font-size: 18px;
            line-height: 1.6;
        }
        .feature {
            margin-bottom: 10px;
            display: flex;
            align-items: center;
        }
        .feature::before {
            content: "🎮";
            margin-right: 10px;
            font-size: 20px;
        }
        .right-content {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2;
        }
        .app-icon {
            width: 200px;
            height: 200px;
            background: rgba(255,255,255,0.1);
            border-radius: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 80px;
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255,255,255,0.2);
        }
        .background-pattern {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%);
            z-index: 1;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="background-pattern"></div>
        <div class="left-content">
            <div class="title">KanaKana</div>
            <div class="subtitle">終極日語打字練習遊戲</div>
            <div class="features">
                <div class="feature">多種遊戲模式</div>
                <div class="feature">分級學習系統</div>
                <div class="feature">精美視覺設計</div>
                <div class="feature">流暢性能體驗</div>
            </div>
        </div>
        <div class="right-content">
            <div class="app-icon">🎮</div>
        </div>
    </div>
</body>
</html>
`;

// 螢幕截圖模板
const screenshotTemplate = (title, description, color = "#1E40AF") => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>KanaKana Screenshot - ${title}</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background: ${color};
            font-family: 'Arial', sans-serif;
            overflow: hidden;
        }
        .screenshot {
            width: 1080px;
            height: 1920px;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
            padding: 40px;
            box-sizing: border-box;
        }
        .app-header {
            position: absolute;
            top: 60px;
            left: 0;
            right: 0;
            text-align: center;
            z-index: 2;
        }
        .app-title {
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .app-subtitle {
            font-size: 18px;
            opacity: 0.8;
        }
        .content {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 2;
        }
        .feature-icon {
            font-size: 120px;
            margin-bottom: 40px;
        }
        .feature-title {
            font-size: 48px;
            font-weight: bold;
            margin-bottom: 30px;
        }
        .feature-description {
            font-size: 24px;
            line-height: 1.5;
            max-width: 600px;
        }
        .background-pattern {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 50%);
            z-index: 1;
        }
    </style>
</head>
<body>
    <div class="screenshot">
        <div class="background-pattern"></div>
        <div class="app-header">
            <div class="app-title">KanaKana</div>
            <div class="app-subtitle">日語打字練習遊戲</div>
        </div>
        <div class="content">
            <div class="feature-icon">🎯</div>
            <div class="feature-title">${title}</div>
            <div class="feature-description">${description}</div>
        </div>
    </div>
</body>
</html>
`;

// 生成素材
const screenshots = [
  {
    name: "main-menu",
    title: "主選單",
    description: "選擇您喜歡的遊戲模式，開始您的日語學習之旅",
    color: "#1E40AF"
  },
  {
    name: "hiragana-mode",
    title: "假名練習",
    description: "基礎假名打字練習，適合初學者",
    color: "#059669"
  },
  {
    name: "kanji-mode",
    title: "漢字讀音",
    description: "看漢字輸入假名讀音，提升識字能力",
    color: "#DC2626"
  },
  {
    name: "tetris-mode",
    title: "俄羅斯方塊",
    description: "在方塊掉落前完成打字挑戰",
    color: "#7C3AED"
  }
];

console.log('🎨 開始生成 KanaKana 商店素材...');

// 生成功能宣傳圖 HTML
const featureGraphicPath = path.join(assetsDir, 'feature-graphic-template.html');
fs.writeFileSync(featureGraphicPath, featureGraphicTemplate);
console.log('✅ 功能宣傳圖模板已生成:', featureGraphicPath);

// 生成螢幕截圖 HTML
screenshots.forEach((screenshot, index) => {
  const html = screenshotTemplate(screenshot.title, screenshot.description, screenshot.color);
  const filePath = path.join(assetsDir, `screenshot-${screenshot.name}-template.html`);
  fs.writeFileSync(filePath, html);
  console.log(`✅ 螢幕截圖 ${index + 1} 模板已生成:`, filePath);
});

// 生成說明文件
const readmeContent = `# KanaKana 商店素材生成說明

## 📋 生成的檔案

### 功能宣傳圖
- **檔案**: feature-graphic-template.html
- **尺寸**: 1024x500 像素
- **用途**: Google Play Store 商店頁面頂部顯示

### 螢幕截圖
- **檔案**: screenshot-*-template.html (共 4 個)
- **尺寸**: 1080x1920 像素 (9:16 比例)
- **用途**: Google Play Store 商店頁面展示

## 🎨 如何轉換為圖片

### 方法一：使用瀏覽器
1. 在瀏覽器中開啟 HTML 檔案
2. 按 F12 開啟開發者工具
3. 調整瀏覽器視窗大小至目標尺寸
4. 使用截圖工具或瀏覽器擴充功能截圖

### 方法二：使用 Puppeteer (推薦)
\`\`\`bash
npm install puppeteer
node scripts/convert-html-to-images.js
\`\`\`

### 方法三：使用線上工具
- 使用 [HTML to Image](https://html-to-image.com/) 等線上工具
- 上傳 HTML 檔案並設定尺寸
- 下載 PNG 圖片

## 📱 上傳到 Google Play Console

1. 登入 [Google Play Console](https://play.google.com/apps/publish/)
2. 選擇您的應用程式
3. 前往「商店設定」>「主要商店資訊」
4. 在「圖像」區塊上傳：
   - 功能宣傳圖 (1024x500)
   - 螢幕截圖 (至少 2 張)

## 🎯 注意事項

- 所有圖片必須為 PNG 或 JPEG 格式
- 功能宣傳圖不能包含透明度
- 螢幕截圖長寬比不能超過 2:1
- 圖片檔案大小建議不超過 8MB
`;

const readmePath = path.join(assetsDir, 'README.md');
fs.writeFileSync(readmePath, readmeContent);
console.log('✅ 說明文件已生成:', readmePath);

console.log('\n🎉 所有商店素材模板已生成完成！');
console.log('📁 檔案位置:', assetsDir);
console.log('\n📋 下一步：');
console.log('1. 將 HTML 檔案轉換為 PNG 圖片');
console.log('2. 上傳到 Google Play Console');
console.log('3. 執行 EAS 建置流程'); 