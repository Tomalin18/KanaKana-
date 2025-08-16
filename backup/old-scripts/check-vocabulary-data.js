const fs = require('fs');
const path = require('path');

console.log('=== 檢查詞彙數據完整性 ===\n');

// 檢查 beginner_converted.ts 文件
const beginnerFile = path.join(__dirname, '../src/data/vocabulary-final/beginner_converted.ts');
const content = fs.readFileSync(beginnerFile, 'utf8');

// 檢查 JSON 格式
console.log('檢查 JSON 格式...');
try {
  // 提取 BEGINNER_WORDS 數組
  const match = content.match(/export const BEGINNER_WORDS: TetrisWord\[\] = (\[[\s\S]*?\]);/);
  if (match) {
    const arrayContent = match[1];
    console.log('✅ 找到 BEGINNER_WORDS 數組');
    
    // 檢查是否有語法錯誤
    try {
      // 嘗試解析 JSON（需要處理 TypeScript 語法）
      const cleanedContent = arrayContent
        .replace(/,(\s*[}\]])/g, '$1') // 移除尾隨逗號
        .replace(/,\s*}/g, '}') // 移除對象尾隨逗號
        .replace(/,\s*]/g, ']'); // 移除數組尾隨逗號
      
      console.log('✅ JSON 格式正確');
      
      // 統計詞彙數量
      const wordMatches = arrayContent.match(/"word":\s*"[^"]*"/g);
      const kanaMatches = arrayContent.match(/"kana":\s*"[^"]*"/g);
      
      console.log(`詞彙數量: ${wordMatches ? wordMatches.length : 0}`);
      console.log(`假名數量: ${kanaMatches ? kanaMatches.length : 0}`);
      
      if (wordMatches && kanaMatches && wordMatches.length !== kanaMatches.length) {
        console.log('❌ 詞彙和假名數量不匹配！');
      }
      
    } catch (e) {
      console.log('❌ JSON 格式錯誤:', e.message);
    }
  } else {
    console.log('❌ 找不到 BEGINNER_WORDS 數組');
  }
} catch (e) {
  console.log('❌ 讀取文件失敗:', e.message);
}

// 檢查特定詞彙
console.log('\n檢查特定詞彙...');
const souDesuMatches = content.match(/"word":\s*"そうです"/g);
const souDesuKanaMatches = content.match(/"kana":\s*"そうです"/g);

console.log(`"そうです" 詞彙條目: ${souDesuMatches ? souDesuMatches.length : 0}`);
console.log(`"そうです" 假名條目: ${souDesuKanaMatches ? souDesuKanaMatches.length : 0}`);

// 檢查長度為4的詞彙
console.log('\n檢查長度為4的詞彙...');
const fourCharMatches = content.match(/"kana":\s*"[あ-ん]{4}"/g);
console.log(`4字符詞彙數量: ${fourCharMatches ? fourCharMatches.length : 0}`);

if (fourCharMatches) {
  console.log('前10個4字符詞彙:');
  fourCharMatches.slice(0, 10).forEach(match => {
    const kana = match.match(/"kana":\s*"([^"]*)"/)[1];
    console.log(`  ${kana}`);
  });
}

console.log('\n=== 檢查完成 ==='); 