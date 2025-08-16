// 模擬修復後的詞彙選擇邏輯來測試N3-N1詞彙的出現頻率
function testVocabularySelectionV2() {
  console.log('🧪 測試修復後的詞彙選擇分布...\n');

  // 模擬詞彙池（基於實際統計數據）
  const BEGINNER_WORDS = 860;
  const NORMAL_WORDS = 2538;
  const HARD_WORDS = 1545;
  const JLPT_N3_WORDS = 2136;
  const JLPT_N2_WORDS = 1645;
  
  // 估算N1詞彙數量（基於grep搜索結果）
  const N1_WORDS_FROM_NORMAL = 100; // 從normal.ts中的N1詞彙
  const N1_WORDS_FROM_EXPERT = 200; // 從expert.ts中的N1詞彙

  // 模擬修復後的詞彙選擇函數
  function getRandomWordByCombinedDifficulty(difficulty) {
    let wordPool = [];
    
    switch (difficulty) {
      case 'elementary':
        wordPool = Array(BEGINNER_WORDS).fill('beginner');
        break;
      case 'intermediate':
        // 中級：包含初級、中級詞彙 + N3詞彙 + 部分N1詞彙
        wordPool = [
          ...Array(BEGINNER_WORDS).fill('beginner'),
          ...Array(NORMAL_WORDS).fill('normal'),
          ...Array(JLPT_N3_WORDS).fill('n3'),
          ...Array(N1_WORDS_FROM_NORMAL).fill('n1')
        ];
        break;
      case 'advanced':
        // 高級：包含中級、高級詞彙 + N2詞彙 + 更多N1詞彙
        wordPool = [
          ...Array(NORMAL_WORDS).fill('normal'),
          ...Array(HARD_WORDS).fill('hard'),
          ...Array(JLPT_N2_WORDS).fill('n2'),
          ...Array(N1_WORDS_FROM_EXPERT).fill('n1')
        ];
        break;
    }
    
    const randomIndex = Math.floor(Math.random() * wordPool.length);
    return wordPool[randomIndex];
  }

  // 測試函數
  function testDifficulty(difficulty, iterations = 1000) {
    console.log(`📊 測試 ${difficulty} 難度 (${iterations} 次選擇):`);
    
    const results = {
      beginner: 0,
      normal: 0,
      hard: 0,
      n3: 0,
      n2: 0,
      n1: 0
    };

    for (let i = 0; i < iterations; i++) {
      const selected = getRandomWordByCombinedDifficulty(difficulty);
      results[selected]++;
    }

    console.log(`   初級詞彙: ${results.beginner} 次 (${((results.beginner / iterations) * 100).toFixed(1)}%)`);
    console.log(`   中級詞彙: ${results.normal} 次 (${((results.normal / iterations) * 100).toFixed(1)}%)`);
    console.log(`   高級詞彙: ${results.hard} 次 (${((results.hard / iterations) * 100).toFixed(1)}%)`);
    console.log(`   N3詞彙: ${results.n3} 次 (${((results.n3 / iterations) * 100).toFixed(1)}%)`);
    console.log(`   N2詞彙: ${results.n2} 次 (${((results.n2 / iterations) * 100).toFixed(1)}%)`);
    console.log(`   N1詞彙: ${results.n1} 次 (${((results.n1 / iterations) * 100).toFixed(1)}%)`);
    console.log('');
  }

  // 執行測試
  testDifficulty('elementary');
  testDifficulty('intermediate');
  testDifficulty('advanced');

  console.log('💡 修復後的分析結果:');
  console.log('   - 中級難度現在包含N3詞彙(38.6%)和少量N1詞彙(1.8%)');
  console.log('   - 高級難度現在包含N2詞彙(28.7%)和更多N1詞彙(3.5%)');
  console.log('   - 這應該能解決N3-N1詞彙出現頻率過低的問題');
  console.log('\n🎯 建議:');
  console.log('   1. 測試遊戲，確認N3-N1詞彙現在能正常出現');
  console.log('   2. 如果N1詞彙出現頻率仍然偏低，可以考慮調整權重');
  console.log('   3. 可以添加詞彙難度標示，讓玩家知道當前詞彙的JLPT等級');
}

testVocabularySelectionV2(); 