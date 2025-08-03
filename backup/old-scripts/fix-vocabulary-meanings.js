const fs = require('fs');
const path = require('path');

// 修復錯誤的解釋
const fixMeaning = (meaning) => {
  if (!meaning) return meaning;
  
  // 修復常見的錯誤模式
  let fixed = meaning;
  
  // 修復 "l和, sh或e (l和, sh或e) (l和, sh或e (land, shore))" -> "land, shore"
  if (fixed.includes('l和, sh或e') && fixed.includes('land, shore')) {
    fixed = 'land, shore';
  }
  
  // 修復 "div或ce (div或ce) (div或ce (divorce))" -> "divorce"
  if (fixed.includes('div或ce') && fixed.includes('divorce')) {
    fixed = 'divorce';
  }
  
  // 修復 "fashi在able, fad, prevailing" -> "fashionable, fad, prevailing"
  if (fixed.includes('fashi在able') && fixed.includes('fashionable')) {
    fixed = 'fashionable, fad, prevailing';
  }
  
  // 修復 "expression 的 gratitude" -> "expression of gratitude"
  if (fixed.includes('expression 的 gratitude')) {
    fixed = fixed.replace('expression 的 gratitude', 'expression of gratitude');
  }
  
  // 修復 "更換, 金錢 exchange" -> "change, money exchange"
  if (fixed.includes('更換, 金錢 exchange')) {
    fixed = fixed.replace('更換, 金錢 exchange', 'change, money exchange');
  }
  
  // 移除重複的模式 (pattern) (pattern) (pattern (correct))
  const duplicatePattern = /([^(]+) \(([^(]+)\) \(([^(]+) \(([^)]+)\)\)/;
  const match = fixed.match(duplicatePattern);
  if (match) {
    fixed = match[4]; // 取最後的正確解釋
  }
  
  return fixed;
};

// 修復檔案
const fixFile = (filePath) => {
  console.log(`修復檔案: ${filePath}`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  let fixedContent = content;
  
  // 修復 meaning 欄位
  const meaningPattern = /"meaning": "([^"]+)"/g;
  fixedContent = fixedContent.replace(meaningPattern, (match, meaning) => {
    const fixedMeaning = fixMeaning(meaning);
    if (fixedMeaning !== meaning) {
      console.log(`修復: "${meaning}" -> "${fixedMeaning}"`);
    }
    return `"meaning": "${fixedMeaning}"`;
  });
  
  // 寫回檔案
  fs.writeFileSync(filePath, fixedContent, 'utf8');
  console.log(`完成修復: ${filePath}`);
};

// 修復所有詞彙檔案
const vocabularyDir = path.join(__dirname, '../src/data/vocabulary-final');
const files = fs.readdirSync(vocabularyDir).filter(file => file.endsWith('.ts'));

files.forEach(file => {
  const filePath = path.join(vocabularyDir, file);
  fixFile(filePath);
});

console.log('所有檔案修復完成！'); 