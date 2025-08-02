const fs = require('fs');
const path = require('path');

console.log('📚 轉換 JLPT N5-N4 CSV 檔案...\n');

// 讀取 N5 CSV 檔案
const n5Content = fs.readFileSync('n5.csv', 'utf8');
const n4Content = fs.readFileSync('n4.csv', 'utf8');

// 解析 CSV 函數
function parseCSV(csvContent) {
  const lines = csvContent.split('\n').filter(line => line.trim());
  const headers = lines[0].split(',');
  const data = [];
  
  for (let i = 1; i < lines.length; i++) {
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
      row[header] = values[index] || '';
    });
    data.push(row);
  }
  
  return data;
}

// 轉換為應用程式格式
function convertToAppFormat(csvData, level) {
  return csvData.map((row, index) => {
    const expression = row.expression || row.expression;
    const reading = row.reading || '';
    const meaning = row.meaning || '';
    
    // 檢查是否包含漢字
    const hasKanji = /[\u4e00-\u9faf]/.test(expression);
    
    return {
      word: expression,
      kana: reading,
      meaning: meaning,
      chineseMeaning: meaning, // 暫時使用英文翻譯，之後可以添加中文翻譯
      difficulty: "beginner",
      category: "JLPT_" + level,
      kanji: hasKanji ? expression : undefined,
      isKanji: hasKanji,
      id: `jlpt_${level}_${index + 1}`
    };
  });
}

// 解析 CSV 檔案
const n5Data = parseCSV(n5Content);
const n4Data = parseCSV(n4Content);

console.log(`📊 N5 詞彙數量: ${n5Data.length} 個`);
console.log(`📊 N4 詞彙數量: ${n4Data.length} 個`);

// 轉換格式
const n5Words = convertToAppFormat(n5Data, 'N5');
const n4Words = convertToAppFormat(n4Data, 'N4');

// 合併所有初級詞彙
const allBeginnerWords = [...n5Words, ...n4Words];

// 生成 TypeScript 檔案內容
const tsContent = `import type { DifficultyLevel } from '../../types';

/**
 * BEGINNER_WORDS - JLPT N5-N4 初級詞彙
 * 
 * 🔄 轉換時間: ${new Date().toISOString()}
 * 📊 總詞彙數量: ${allBeginnerWords.length} 個
 * 📚 N5 詞彙: ${n5Words.length} 個
 * 📚 N4 詞彙: ${n4Words.length} 個
 * ✨ 來源: https://github.com/jamsinclair/open-anki-jlpt-decks
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
  id?: string;
}

export const BEGINNER_WORDS: TetrisWord[] = ${JSON.stringify(allBeginnerWords, null, 2)};
`;

// 寫入檔案
const outputPath = path.join(__dirname, '../src/data/vocabulary-final/beginner_converted.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log(`✅ 已轉換 JLPT N5-N4 詞彙檔案`);
console.log(`📊 總詞彙數量: ${allBeginnerWords.length} 個`);
console.log(`📚 N5 詞彙: ${n5Words.length} 個`);
console.log(`📚 N4 詞彙: ${n4Words.length} 個`);
console.log(`📁 檔案位置: ${outputPath}`);

// 顯示一些範例
console.log('\n📝 詞彙範例:');
console.log('N5 範例:');
n5Words.slice(0, 5).forEach(word => {
  console.log(`  ${word.word} (${word.kana}) - ${word.meaning}`);
});

console.log('\nN4 範例:');
n4Words.slice(0, 5).forEach(word => {
  console.log(`  ${word.word} (${word.kana}) - ${word.meaning}`);
});

console.log('\n🎉 JLPT N5-N4 詞彙轉換完成！');
console.log('現在初級模式有完整的 JLPT 詞彙供學習了！'); 