const fs = require('fs');
const path = require('path');

// 修復錯誤的解釋
const fixMeaning = (meaning) => {
  if (!meaning) return meaning;
  
  let fixed = meaning;
  
  // 修復重複的模式，提取括號內的正確英文
  const patterns = [
    // 修復 "到 desire, 到 wish, 到 request (to desire, to wish, to request)" -> "to desire, to wish, to request"
    /到 [^(]+ \(([^)]+)\)/g,
    // 修復 "l和, sh或e (l和, sh或e) (l和, sh或e (land, shore))" -> "land, shore"
    /[^a-zA-Z\s,]+ \([^)]+\) \([^)]+ \(([^)]+)\)\)/g,
    // 修復 "div或ce (div或ce) (div或ce (divorce))" -> "divorce"
    /[^a-zA-Z\s]+ \([^)]+\) \([^)]+ \(([^)]+)\)\)/g,
    // 修復 "fashi在able, fad, prevailing" -> "fashionable, fad, prevailing"
    /fashi在able/g,
    // 修復 "expression 的 gratitude" -> "expression of gratitude"
    /expression 的 gratitude/g,
    // 修復 "l和" -> "land"
    /l和/g,
    // 修復 "sh或e" -> "shore"
    /sh或e/g,
    // 修復 "div或ce" -> "divorce"
    /div或ce/g,
    // 修復 "h和" -> "hand"
    /h和/g,
    // 修復 "到wel" -> "towel"
    /到wel/g,
    // 修復 "car到在" -> "cartoon"
    /car到在/g,
    // 修復 "變得" -> "to get"
    /變得/g,
    // 修復 "從" -> "from"
    /從/g,
    // 修復 "或" -> "or"
    /或/g,
    // 修復 "在" -> "in"
    /在/g,
    // 修復 "的" -> "of"
    /的/g,
    // 修復 "一個" -> "one"
    /一個/g,
    // 修復 "金錢" -> "money"
    /金錢/g,
    // 修復 "離開" -> "away"
    /離開/g,
    // 修復 "擔心" -> "worry"
    /擔心/g,
    // 修復 "火車" -> "train"
    /火車/g,
    // 修復 "lives到ck" -> "livestock"
    /lives到ck/g,
    // 修復 "檔案" -> "file"
    /檔案/g,
    // 修復 "到uches" -> "touches"
    /到uches/g,
    // 修復 "a到mic" -> "atomic"
    /a到mic/g,
    // 修復 "tree到p" -> "treetop"
    /tree到p/g,
    // 修復 "s到ckpile" -> "stockpile"
    /s到ckpile/g,
    // 修復 "s到ck" -> "stock"
    /s到ck/g,
    // 修復 "pro到type" -> "prototype"
    /pro到type/g,
    // 修復 "a到m" -> "atom"
    /a到m/g,
    // 修復 "s到lidity" -> "stolidity"
    /s到lidity/g,
    // 修復 "up-火車" -> "up-train"
    /up-火車/g,
    // 修復 "衣服" -> "clothes"
    /衣服/g,
  ];
  
  // 應用修復模式
  patterns.forEach((pattern, index) => {
    if (index < 3) {
      // 對於前3個模式，提取括號內的正確內容
      const match = fixed.match(pattern);
      if (match && match[1]) {
        fixed = match[1];
      }
    } else {
      // 對於其他模式，直接替換
      const replacements = [
        'to desire, to wish, to request',
        'land, shore',
        'divorce',
        'fashionable, fad, prevailing',
        'expression of gratitude',
        'land',
        'shore',
        'divorce',
        'hand',
        'towel',
        'cartoon',
        'to get',
        'from',
        'or',
        'in',
        'of',
        'one',
        'money',
        'away',
        'worry',
        'train',
        'livestock',
        'file',
        'touches',
        'atomic',
        'treetop',
        'stockpile',
        'stock',
        'prototype',
        'atom',
        'stolidity',
        'up-train',
        'clothes',
      ];
      fixed = fixed.replace(pattern, replacements[index - 3]);
    }
  });
  
  // 清理多餘的空格和標點
  fixed = fixed.replace(/\s+/g, ' ').trim();
  
  return fixed;
};

// 處理單個檔案
const processFile = (filePath) => {
  try {
    console.log(`處理檔案: ${filePath}`);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // 使用正則表達式找到所有 meaning 欄位並修復
    const fixedContent = content.replace(
      /"meaning":\s*"([^"]+)"/g,
      (match, meaning) => {
        const fixedMeaning = fixMeaning(meaning);
        if (fixedMeaning !== meaning) {
          console.log(`修復: "${meaning}" -> "${fixedMeaning}"`);
        }
        return `"meaning": "${fixedMeaning}"`;
      }
    );
    
    // 寫回檔案
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    console.log(`✅ 完成: ${filePath}`);
    
  } catch (error) {
    console.error(`❌ 錯誤處理檔案 ${filePath}:`, error.message);
  }
};

// 主函數
const main = () => {
  const vocabularyDir = path.join(__dirname, '../src/data/vocabulary-final');
  
  // 獲取所有 .ts 檔案
  const files = fs.readdirSync(vocabularyDir)
    .filter(file => file.endsWith('.ts'))
    .map(file => path.join(vocabularyDir, file));
  
  console.log(`找到 ${files.length} 個檔案需要處理`);
  
  // 處理每個檔案
  files.forEach(processFile);
  
  console.log('\n🎉 所有檔案處理完成！');
};

// 執行主函數
main(); 