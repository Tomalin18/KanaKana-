// 模擬詞彙選擇邏輯來測試N3-N2詞彙的出現頻率
function testVocabularySelection() {
  console.log('🧪 測試詞彙選擇分布...\n');

  // 模擬詞彙池（基於實際統計數據）
  const BEGINNER_WORDS = 860;
  const NORMAL_WORDS = 2538;
  const HARD_WORDS = 1545;
  const JLPT_N3_WORDS = 2136;
  const JLPT_N2_WORDS = 1645;

  // 模擬詞彙選擇函數
  function getRandomWordByCombinedDifficulty(difficulty) {
    let wordPool = [];
    
    switch (difficulty) {
      case 'elementary':
        wordPool = Array(BEGINNER_WORDS).fill('beginner');
        break;
      case 'intermediate':
        // 中級：包含初級、中級詞彙 + N3詞彙
        wordPool = [
          ...Array(BEGINNER_WORDS).fill('beginner'),
          ...Array(NORMAL_WORDS).fill('normal'),
          ...Array(JLPT_N3_WORDS).fill('n3')
        ];
        break;
      case 'advanced':
        // 高級：包含中級、高級詞彙 + N2詞彙
        wordPool = [
          ...Array(NORMAL_WORDS).fill('normal'),
          ...Array(HARD_WORDS).fill('hard'),
          ...Array(JLPT_N2_WORDS).fill('n2')
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
      n2: 0
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
    console.log('');
  }

  // 執行測試
  testDifficulty('elementary');
  testDifficulty('intermediate');
  testDifficulty('advanced');

  console.log('💡 分析結果:');
  console.log('   - 中級難度中N3詞彙應該出現約38.6%的時間');
  console.log('   - 高級難度中N2詞彙應該出現約28.7%的時間');
  console.log('   - 如果你感覺很少看到N3-N2詞彙，可能是因為:');
  console.log('     1. 遊戲時間不夠長，沒有足夠的樣本');
  console.log('     2. 隨機數生成器的偏差');
  console.log('     3. 詞彙選擇邏輯有問題');
  console.log('     4. 詞彙池中N3-N2詞彙的實際數量與預期不符');
}

testVocabularySelection(); 