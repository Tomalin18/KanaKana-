// 簡單的詞彙測試腳本
console.log('=== 詞彙系統測試 ===\n');

// 檢查 BEGINNER_WORDS 是否正常
try {
  const { BEGINNER_WORDS } = require('../src/data/vocabulary-final/beginner_converted.ts');
  console.log(`✅ BEGINNER_WORDS 載入成功，數量: ${BEGINNER_WORDS.length}`);
  
  // 顯示前5個詞彙
  console.log('前5個詞彙:');
  BEGINNER_WORDS.slice(0, 5).forEach((word, index) => {
    console.log(`  ${index + 1}. ${word.word} (${word.kana}) - ${word.meaning}`);
  });
  
  // 檢查是否有「そう」相關的詞彙
  const souWords = BEGINNER_WORDS.filter(word => word.word.includes('そう'));
  console.log(`\n包含「そう」的詞彙數量: ${souWords.length}`);
  souWords.forEach(word => {
    console.log(`  ${word.word} (${word.kana}) - ${word.meaning}`);
  });
  
} catch (error) {
  console.error('❌ BEGINNER_WORDS 載入失敗:', error.message);
}

console.log('\n=== 測試完成 ==='); 