const fs = require('fs');
const path = require('path');

// 讀取CSV檔案並解析
function parseCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const headers = lines[0].split(',');
  const data = [];
  
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '') continue;
    
    // 處理CSV行，考慮引號內的逗號
    const values = [];
    let current = '';
    let inQuotes = false;
    
    for (let j = 0; j < lines[i].length; j++) {
      const char = lines[i][j];
      
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());
    
    const row = {};
    headers.forEach((header, index) => {
      row[header.trim()] = values[index] || '';
    });
    
    data.push(row);
  }
  
  return data;
}

// 過濾掉包含「～」的單字
function filterWords(data) {
  return data.filter(row => {
    const expression = row.expression || '';
    const reading = row.reading || '';
    const meaning = row.meaning || '';
    
    // 檢查是否包含「～」
    return !expression.includes('～') && 
           !reading.includes('～') && 
           !meaning.includes('～');
  });
}

// 轉換為TetrisWord格式
function convertToTetrisWord(row, jlptLevel) {
  const expression = row.expression || '';
  const reading = row.reading || '';
  const meaning = row.meaning || '';
  const guid = row.guid || '';
  
  // 判斷是否為漢字
  const isKanji = /[\u4e00-\u9faf]/.test(expression);
  
  // 判斷難度等級
  let difficulty = 'normal';
  if (jlptLevel === 'n2') {
    difficulty = 'hard';
  } else if (jlptLevel === 'n3') {
    difficulty = 'normal';
  }
  
  return {
    word: expression,
    kana: reading,
    meaning: meaning,
    chineseMeaning: meaning, // 暫時使用英文意思作為中文意思
    difficulty: difficulty,
    category: '一般',
    kanji: isKanji ? expression : undefined,
    isKanji: isKanji,
    jlptLevel: jlptLevel,
    id: guid
  };
}

// 生成ID
function generateId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  let result = '';
  for (let i = 0; i < 10; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// 主處理函數
function processJLPTData() {
  console.log('開始處理JLPT N3和N2資料...');
  
  // 讀取N3資料
  const n3Data = parseCSV('n3.csv');
  console.log(`N3原始資料: ${n3Data.length} 個單字`);
  
  // 讀取N2資料
  const n2Data = parseCSV('n2.csv');
  console.log(`N2原始資料: ${n2Data.length} 個單字`);
  
  // 過濾資料
  const filteredN3 = filterWords(n3Data);
  const filteredN2 = filterWords(n2Data);
  
  console.log(`N3過濾後: ${filteredN3.length} 個單字`);
  console.log(`N2過濾後: ${filteredN2.length} 個單字`);
  
  // 轉換為TetrisWord格式
  const n3Words = filteredN3.map(row => convertToTetrisWord(row, 'n3'));
  const n2Words = filteredN2.map(row => convertToTetrisWord(row, 'n2'));
  
  // 合併所有單字
  const allWords = [...n3Words, ...n2Words];
  
  // 去重（基於word和kana）
  const uniqueWords = [];
  const seen = new Set();
  
  allWords.forEach(word => {
    const key = `${word.word}-${word.kana}`;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueWords.push(word);
    }
  });
  
  console.log(`去重後總計: ${uniqueWords.length} 個單字`);
  
  // 生成TypeScript檔案內容
  const tsContent = `import type { DifficultyLevel } from '../../types';

/**
 * JLPT_N3_N2_WORDS - JLPT N3和N2詞彙庫 (更新版)
 * 
 * 🔄 生成時間: ${new Date().toISOString()}
 * 📊 總詞彙數量: ${uniqueWords.length} 個
 * 📚 N3詞彙數量: ${n3Words.length} 個
 * 📚 N2詞彙數量: ${n2Words.length} 個
 * ✨ 來源: https://github.com/jamsinclair/open-anki-jlpt-decks
 * 🔍 已過濾包含「～」的單字
 */

export interface TetrisWord {
  word: string;
  kana: string;
  meaning: string;
  chineseMeaning: string;
  difficulty: DifficultyLevel;
  category: string;
  kanji?: string;
  isKanji?: boolean;
  jlptLevel?: 'n1' | 'n2' | 'n3' | 'n4' | 'n5';
  id?: string;
}

export const JLPT_N3_N2_WORDS: TetrisWord[] = ${JSON.stringify(uniqueWords, null, 2)};
`;

  // 寫入檔案
  const outputPath = path.join(__dirname, '../src/data/vocabulary-final/jlpt-n3-n2-updated.ts');
  fs.writeFileSync(outputPath, tsContent, 'utf8');
  
  console.log(`✅ 處理完成！檔案已保存至: ${outputPath}`);
  console.log(`📊 統計資訊:`);
  console.log(`   - N3單字: ${n3Words.length} 個`);
  console.log(`   - N2單字: ${n2Words.length} 個`);
  console.log(`   - 總計: ${uniqueWords.length} 個`);
  
  // 顯示一些範例
  console.log(`\n📝 範例單字:`);
  uniqueWords.slice(0, 5).forEach(word => {
    console.log(`   - ${word.word} (${word.kana}): ${word.meaning}`);
  });
}

// 執行處理
processJLPTData(); 