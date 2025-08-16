// 測試高級難度新的詞彙權重分配
function testAdvancedVocabularyWeight() {
  console.log('🧪 測試高級難度新的詞彙權重分配...\n');

  // 模擬詞彙池（基於實際統計數據）
  const NORMAL_WORDS = 2538;
  const HARD_WORDS = 1545;
  const JLPT_N2_WORDS = 1645;
  const N1_WORDS_FROM_EXPERT = 200; // 估算值

  // 模擬新的高級難度詞彙選擇函數
  function getRandomWordAdvanced() {
    // 為了增加N1和N2詞彙的權重，我們重複添加這些詞彙
    const weightedN2Words = Array(JLPT_N2_WORDS * 3).fill('n2'); // 3倍權重
    const weightedN1Words = Array(N1_WORDS_FROM_EXPERT * 4).fill('n1'); // 4倍權重
    
    const wordPool = [
      ...Array(NORMAL_WORDS).fill('normal'),
      ...Array(HARD_WORDS).fill('hard'),
      ...weightedN2Words,
      ...weightedN1Words
    ];
    
    const randomIndex = Math.floor(Math.random() * wordPool.length);
    return wordPool[randomIndex];
  }

  // 測試函數
  function testAdvancedDifficulty(iterations = 1000) {
    console.log(`📊 測試高級難度 (${iterations} 次選擇):`);
    
    const results = {
      normal: 0,
      hard: 0,
      n2: 0,
      n1: 0
    };

    for (let i = 0; i < iterations; i++) {
      const selected = getRandomWordAdvanced();
      results[selected]++;
    }

    const total = iterations;
    console.log(`   中級詞彙: ${results.normal} 次 (${((results.normal / total) * 100).toFixed(1)}%)`);
    console.log(`   高級詞彙: ${results.hard} 次 (${((results.hard / total) * 100).toFixed(1)}%)`);
    console.log(`   N2詞彙: ${results.n2} 次 (${((results.n2 / total) * 100).toFixed(1)}%)`);
    console.log(`   N1詞彙: ${results.n1} 次 (${((results.n1 / total) * 100).toFixed(1)}%)`);
    console.log('');

    // 計算N1+N2的總比例
    const n1n2Total = results.n2 + results.n1;
    const n1n2Percentage = ((n1n2Total / total) * 100).toFixed(1);
    console.log(`🎯 N1+N2詞彙總比例: ${n1n2Percentage}%`);
    console.log(`📈 相比修復前，N1+N2詞彙比例提升了約 ${(parseFloat(n1n2Percentage) - 31.2).toFixed(1)}%`);
  }

  // 執行測試
  testAdvancedDifficulty();

  console.log('💡 新的高級難度設計理念:');
  console.log('   - 大幅增加N1和N2詞彙的權重');
  console.log('   - N2詞彙: 3倍權重');
  console.log('   - N1詞彙: 4倍權重');
  console.log('   - 符合高級玩家想要練習難詞彙的需求');
  console.log('\n🎯 預期效果:');
  console.log('   - N1+N2詞彙總比例約60-70%');
  console.log('   - 高級玩家能更頻繁地遇到N1-N2詞彙');
  console.log('   - 提供更具挑戰性的學習體驗');
}

testAdvancedVocabularyWeight(); 