const path = require('path');

// 模擬 React Native 環境
global.__DEV__ = true;

// 模擬類型定義
const DifficultyLevel = {
  BEGINNER: 'beginner',
  NORMAL: 'normal', 
  HARD: 'hard',
  EXPERT: 'expert'
};

// 導入詞彙系統
const { 
  getWordByLevelAndLength,
  getRandomWordImproved,
  getWordByLength,
  getWordsByDifficulty,
  getWordsByType,
  BEGINNER_WORDS,
  NORMAL_WORDS,
  HARD_WORDS,
  EXPERT_WORDS,
  KANJI_WORDS,
  VOCABULARY_STATS
} = require('../src/data/vocabulary-final/index 2.ts');

console.log('=== Tetris Mode 詞彙測試 ===\n');

// 測試基本詞彙統計
console.log('📊 詞彙統計:');
console.log(`總詞彙數: ${VOCABULARY_STATS.totalWords}`);
console.log(`初級詞彙: ${VOCABULARY_STATS.beginnerWords}`);
console.log(`中級詞彙: ${VOCABULARY_STATS.normalWords}`);
console.log(`高級詞彙: ${VOCABULARY_STATS.hardWords}`);
console.log(`專家詞彙: ${VOCABULARY_STATS.expertWords}`);
console.log(`漢字詞彙: ${VOCABULARY_STATS.kanjiWords}`);
console.log(`平假名詞彙: ${VOCABULARY_STATS.hiraganaWords}\n`);

// 測試不同長度的詞彙選擇
console.log('🔍 測試不同長度的詞彙選擇:');
for (let length = 2; length <= 6; length++) {
  console.log(`\n長度 ${length} 的詞彙:`);
  
  // 測試不同等級
  for (let level = 1; level <= 10; level += 3) {
    const word = getWordByLevelAndLength(length, level, 'beginner', 'hiragana');
    console.log(`  等級 ${level}: ${word.word} (${word.kana}) - ${word.meaning}`);
  }
}

// 測試不同難度的詞彙選擇
console.log('\n🎯 測試不同難度的詞彙選擇:');
const difficulties = ['beginner', 'normal', 'hard', 'expert'];
difficulties.forEach(difficulty => {
  console.log(`\n${difficulty} 難度:`);
  for (let i = 0; i < 5; i++) {
    const word = getRandomWordImproved(difficulty, 'hiragana');
    console.log(`  ${word.word} (${word.kana}) - ${word.meaning}`);
  }
});

// 測試特定長度的詞彙池
console.log('\n📝 測試特定長度的詞彙池:');
const testLength = 4;
console.log(`\n長度為 ${testLength} 的詞彙數量:`);

difficulties.forEach(difficulty => {
  const words = getWordsByDifficulty(difficulty);
  const filteredWords = getWordsByType(words, 'hiragana');
  const matchingWords = filteredWords.filter(word => word.kana.length === testLength);
  console.log(`  ${difficulty}: ${matchingWords.length} 個`);
  
  // 顯示前5個
  console.log(`    前5個: ${matchingWords.slice(0, 5).map(w => w.word).join(', ')}`);
});

// 測試漢字詞彙
console.log('\n漢字詞彙測試:');
if (KANJI_WORDS && KANJI_WORDS.length > 0) {
  console.log(`漢字詞彙總數: ${KANJI_WORDS.length}`);
  console.log('前10個漢字詞彙:');
  KANJI_WORDS.slice(0, 10).forEach(word => {
    console.log(`  ${word.word} (${word.kana}) - ${word.meaning}`);
  });
} else {
  console.log('❌ 沒有找到漢字詞彙');
}

console.log('\n✅ 測試完成'); 