#!/usr/bin/env node

/**
 * KanaKana HTML 轉圖片腳本
 * 使用 Puppeteer 將 HTML 模板轉換為 PNG 圖片
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// 檢查是否安裝了 Puppeteer
try {
  require('puppeteer');
} catch (error) {
  console.log('📦 正在安裝 Puppeteer...');
  const { execSync } = require('child_process');
  execSync('npm install puppeteer', { stdio: 'inherit' });
}

const assetsDir = path.join(__dirname, '../src/assets/images/store');
const outputDir = path.join(assetsDir, 'generated');

// 確保輸出目錄存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 轉換配置
const conversions = [
  {
    input: 'feature-graphic-template.html',
    output: 'feature-graphic.png',
    width: 1024,
    height: 500
  },
  {
    input: 'screenshot-main-menu-template.html',
    output: 'screenshot-main-menu.png',
    width: 1080,
    height: 1920
  },
  {
    input: 'screenshot-hiragana-mode-template.html',
    output: 'screenshot-hiragana-mode.png',
    width: 1080,
    height: 1920
  },
  {
    input: 'screenshot-kanji-mode-template.html',
    output: 'screenshot-kanji-mode.png',
    width: 1080,
    height: 1920
  },
  {
    input: 'screenshot-tetris-mode-template.html',
    output: 'screenshot-tetris-mode.png',
    width: 1080,
    height: 1920
  }
];

async function convertHtmlToImage() {
  console.log('🎨 開始轉換 HTML 模板為 PNG 圖片...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    for (const conversion of conversions) {
      const inputPath = path.join(assetsDir, conversion.input);
      const outputPath = path.join(outputDir, conversion.output);
      
      if (!fs.existsSync(inputPath)) {
        console.log(`⚠️  跳過 ${conversion.input} - 檔案不存在`);
        continue;
      }

      console.log(`🔄 正在轉換 ${conversion.input}...`);
      
      const page = await browser.newPage();
      await page.setViewport({
        width: conversion.width,
        height: conversion.height,
        deviceScaleFactor: 2 // 高解析度
      });

      // 載入 HTML 檔案
      const htmlContent = fs.readFileSync(inputPath, 'utf8');
      await page.setContent(htmlContent, {
        waitUntil: 'networkidle0'
      });

      // 等待一下確保所有樣式都載入完成
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 截圖
      await page.screenshot({
        path: outputPath,
        type: 'png',
        fullPage: false
      });

      await page.close();
      console.log(`✅ 已生成: ${conversion.output}`);
    }

    console.log('\n🎉 所有圖片轉換完成！');
    console.log(`📁 輸出目錄: ${outputDir}`);
    
    // 列出生成的檔案
    const files = fs.readdirSync(outputDir);
    console.log('\n📋 生成的檔案:');
    files.forEach(file => {
      const filePath = path.join(outputDir, file);
      const stats = fs.statSync(filePath);
      const sizeInKB = Math.round(stats.size / 1024);
      console.log(`  - ${file} (${sizeInKB} KB)`);
    });

  } catch (error) {
    console.error('❌ 轉換過程中發生錯誤:', error);
  } finally {
    await browser.close();
  }
}

// 執行轉換
convertHtmlToImage().catch(console.error); 