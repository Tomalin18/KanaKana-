const fs = require('fs');
const path = require('path');

console.log('=== 調試詞彙選擇邏輯 ===\n');

// 模擬詞彙選擇邏輯
const content = fs.readFileSync(path.join(__dirname, '../src/data/vocabulary-final/beginner_converted.ts'), 'utf8');

// 提取所有詞彙條目
const wordMatches = content.match(/"word":\s*"([^"]*)"/g);
const kanaMatches = content.match(/"kana":\s*"([^"]*)"/g);
const meaningMatches = content.match(/"meaning":\s*"([^"]*)"/g);

console.log(`總詞彙數量: ${wordMatches ? wordMatches.length : 0}`);

// 檢查4字符詞彙
const fourCharWords = [];
if (kanaMatches) {
  kanaMatches.forEach((match, index) => {
    const kana = match.match(/"kana":\s*"([^"]*)"/)[1];
    if (kana.length === 4) {
      const word = wordMatches[index] ? wordMatches[index].match(/"word":\s*"([^"]*)"/)[1] : '';
      const meaning = meaningMatches[index] ? meaningMatches[index].match(/"meaning":\s*"([^"]*)"/)[1] : '';
      fourCharWords.push({ word, kana, meaning });
    }
  });
}

console.log(`4字符詞彙數量: ${fourCharWords.length}`);
console.log('\n前20個4字符詞彙:');
fourCharWords.slice(0, 20).forEach((item, index) => {
  console.log(`${index + 1}. ${item.word} (${item.kana}) - ${item.meaning}`);
});

// 檢查「そうです」
const souDesuIndex = fourCharWords.findIndex(item => item.kana === 'そうです');
if (souDesuIndex !== -1) {
  console.log(`\n「そうです」在4字符詞彙中的位置: ${souDesuIndex + 1}`);
  console.log(`「そうです」的完整信息:`, fourCharWords[souDesuIndex]);
} else {
  console.log('\n❌ 找不到「そうです」');
}

// 模擬隨機選擇
console.log('\n=== 模擬隨機選擇 ===');
const recentWords = [];
const MAX_RECENT_WORDS = 50;

function simulateWordSelection(targetLength) {
  const matchingWords = fourCharWords.filter(word => word.kana.length === targetLength);
  
  if (matchingWords.length === 0) {
    console.log(`沒有找到長度為 ${targetLength} 的詞彙`);
    return null;
  }
  
  // 過濾掉最近使用過的詞彙
  const nonRecentWords = matchingWords.filter(word => 
    !recentWords.includes(word.word)
  );
  
  // 選擇最終詞彙池
  const finalWords = nonRecentWords.length >= 3 ? nonRecentWords : matchingWords;
  
  // 隨機選擇
  const randomIndex = Math.floor(Math.random() * finalWords.length);
  const selectedWord = finalWords[randomIndex];
  
  // 更新最近使用詞彙列表
  recentWords.push(selectedWord.word);
  if (recentWords.length > MAX_RECENT_WORDS) {
    recentWords.shift();
  }
  
  return selectedWord;
}

// 模擬多次選擇
console.log('模擬10次4字符詞彙選擇:');
for (let i = 0; i < 10; i++) {
  const word = simulateWordSelection(4);
  if (word) {
    console.log(`${i + 1}. ${word.word} (${word.kana})`);
  }
}

console.log('\n=== 調試完成 ==='); 