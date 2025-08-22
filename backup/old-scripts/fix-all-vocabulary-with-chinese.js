const fs = require('fs');
const path = require('path');

// 讀取 CSV 檔案作為中文解釋的來源
const readCSV = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n').filter(line => line.trim());
  
  const data = {};
  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length >= 4) {
      const expression = values[0];
      const chineseMeaning = values[3];
      data[expression] = chineseMeaning;
    }
  }
  
  return data;
};

// 解析 CSV 行，處理引號內的逗號
const parseCSVLine = (line) => {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result;
};

// 修復單個檔案
const fixFile = (filePath, chineseData) => {
  console.log(`修復檔案: ${path.basename(filePath)}`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // 檢查是否已經有 chineseMeaning
  if (content.includes('chineseMeaning')) {
    console.log(`  ✅ 檔案已經包含 chineseMeaning，跳過`);
    return;
  }
  
  // 修復 TetrisWord 介面
  let fixedContent = content.replace(
    /export interface TetrisWord \{[\s\S]*?\}/,
    `export interface TetrisWord {
  word: string;
  kana: string;
  meaning: string;
  chineseMeaning?: string;
  difficulty: DifficultyLevel;
  category: string;
  kanji?: string;
  isKanji?: boolean;
}`
  );
  
  // 修復每個單字項目，添加 chineseMeaning
  fixedContent = fixedContent.replace(
    /(\s*\{\s*word:\s*"([^"]+)",\s*kana:\s*"([^"]+)",\s*meaning:\s*"([^"]+)",\s*difficulty:\s*([^,]+),)/g,
    (match, p1, word, kana, meaning, difficulty) => {
      const chineseMeaning = chineseData[word] || '';
      return `${p1}\n    chineseMeaning: "${chineseMeaning.replace(/"/g, '\\"')}",`;
    }
  );
  
  // 寫回檔案
  fs.writeFileSync(filePath, fixedContent, 'utf8');
  console.log(`  ✅ 修復完成`);
};

// 主函數
const main = () => {
  console.log('開始修復所有詞彙檔案，添加中文解釋...');
  
  // 讀取 CSV 檔案
  const csvPath = path.join(__dirname, '../vocabulary.csv');
  const chineseData = readCSV(csvPath);
  
  console.log(`從 CSV 讀取到 ${Object.keys(chineseData).length} 個中文解釋`);
  
  // 要修復的檔案列表
  const filesToFix = [
    'src/data/vocabulary-final/beginner.ts',
    'src/data/vocabulary-final/normal.ts',
    'src/data/vocabulary-final/hard.ts',
    'src/data/vocabulary-final/expert.ts',
    'src/data/vocabulary-final/hiragana.ts',
    'src/data/vocabulary-final/kanji-01.ts',
    'src/data/vocabulary-final/kanji-02.ts',
    'src/data/vocabulary-final/kanji-03.ts',
    'src/data/vocabulary-final/kanji-04.ts',
    'src/data/vocabulary-final/kanji-05.ts',
    'src/data/vocabulary-final/kanji-06.ts',
    'src/data/vocabulary-final/kanji-07.ts',
    'src/data/vocabulary-final/beginner 2.ts',
    'src/data/vocabulary-final/normal 2.ts',
    'src/data/vocabulary-final/hard 2.ts',
    'src/data/vocabulary-final/expert 2.ts',
    'src/data/vocabulary-final/hiragana 2.ts',
    'src/data/vocabulary-final/kanji-01 2.ts',
    'src/data/vocabulary-final/kanji-02 2.ts',
    'src/data/vocabulary-final/kanji-03 2.ts',
    'src/data/vocabulary-final/kanji-04 2.ts',
    'src/data/vocabulary-final/kanji-05 2.ts',
    'src/data/vocabulary-final/kanji-06 2.ts',
    'src/data/vocabulary-final/kanji-07 2.ts',
  ];
  
  // 修復每個檔案
  filesToFix.forEach(filePath => {
    const fullPath = path.join(__dirname, '..', filePath);
    if (fs.existsSync(fullPath)) {
      fixFile(fullPath, chineseData);
    } else {
      console.log(`❌ 檔案不存在: ${filePath}`);
    }
  });
  
  // 更新 index 2.ts
  const index2Path = path.join(__dirname, '../src/data/vocabulary-final/index 2.ts');
  if (fs.existsSync(index2Path)) {
    console.log('更新 index 2.ts...');
    const content = fs.readFileSync(index2Path, 'utf8');
    
    // 修復 TetrisWord 介面
    const fixedContent = content.replace(
      /export interface TetrisWord \{[\s\S]*?\}/,
      `export interface TetrisWord {
  word: string;
  kana: string;
  meaning: string;
  chineseMeaning?: string;
  difficulty: DifficultyLevel;
  category: string;
  kanji?: string;
  isKanji?: boolean;
}`
    );
    
    fs.writeFileSync(index2Path, fixedContent, 'utf8');
    console.log('  ✅ index 2.ts 更新完成');
  }
  
  console.log('\n🎉 所有詞彙檔案修復完成！');
  console.log(`總共處理了 ${filesToFix.length} 個檔案`);
};

// 執行主函數
main(); 