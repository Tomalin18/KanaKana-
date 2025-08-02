const fs = require('fs');
const path = require('path');

function testJLPTIntegration() {
  console.log('🧪 測試JLPT詞彙整合到遊戲中...');
  console.log('=' .repeat(50));

  // 測試1: 檢查詞彙庫總數
  console.log('\n📊 測試1: 詞彙庫統計');
  console.log('-'.repeat(30));

  const vocabularyDir = path.join(__dirname, '../src/data/vocabulary-final');
  const files = [
    'beginner_converted.ts',
    'normal 2.ts',
    'hard 2.ts',
    'expert 2.ts'
  ];

  let totalWords = 0;
  files.forEach(fileName => {
    const filePath = path.join(vocabularyDir, fileName);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      const wordMatches = content.match(/"word":/g);
      const count = wordMatches ? wordMatches.length : 0;
      totalWords += count;
      console.log(`   ${fileName}: ${count} 個單字`);
    }
  });

  // 檢查JLPT詞彙
  const jlptDir = path.join(vocabularyDir, 'jlpt-chunks');
  if (fs.existsSync(jlptDir)) {
    const chunkFiles = fs.readdirSync(jlptDir).filter(file => file.startsWith('chunk-'));
    let jlptTotal = 0;
    let n3Count = 0;
    let n2Count = 0;

    chunkFiles.forEach(file => {
      const filePath = path.join(jlptDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      const wordMatches = content.match(/"word":/g);
      const n3Matches = content.match(/"jlptLevel": "n3"/g);
      const n2Matches = content.match(/"jlptLevel": "n2"/g);
      
      const count = wordMatches ? wordMatches.length : 0;
      jlptTotal += count;
      n3Count += n3Matches ? n3Matches.length : 0;
      n2Count += n2Matches ? n2Matches.length : 0;
    });

    console.log(`   jlpt-chunks/: ${jlptTotal} 個單字 (N3: ${n3Count}, N2: ${n2Count})`);
    totalWords += jlptTotal;
  }

  console.log(`   總計: ${totalWords} 個單字`);

  // 測試2: 檢查遊戲模式詞彙載入
  console.log('\n🎮 測試2: 遊戲模式詞彙載入');
  console.log('-'.repeat(30));

  // 檢查經典模式
  const gameScreenPath = path.join(__dirname, '../src/screens/main/GameScreen.tsx');
  if (fs.existsSync(gameScreenPath)) {
    const content = fs.readFileSync(gameScreenPath, 'utf8');
    if (content.includes('getRandomWordByCombinedDifficulty')) {
      console.log('   ✅ 經典模式: 正確導入詞彙函數');
    } else {
      console.log('   ❌ 經典模式: 未找到詞彙函數');
    }
  }

  // 檢查俄羅斯方塊模式
  const tetrisScreenPath = path.join(__dirname, '../src/screens/game-modes/TetrisModeScreen.tsx');
  if (fs.existsSync(tetrisScreenPath)) {
    const content = fs.readFileSync(tetrisScreenPath, 'utf8');
    if (content.includes('getRandomWordImproved')) {
      console.log('   ✅ 俄羅斯方塊模式: 正確導入詞彙函數');
    } else {
      console.log('   ❌ 俄羅斯方塊模式: 未找到詞彙函數');
    }
  }

  // 檢查漢字模式
  const kanjiScreenPath = path.join(__dirname, '../src/screens/game-modes/KanjiModeScreen.tsx');
  if (fs.existsSync(kanjiScreenPath)) {
    const content = fs.readFileSync(kanjiScreenPath, 'utf8');
    if (content.includes('getRandomKanjiWord')) {
      console.log('   ✅ 漢字模式: 正確導入詞彙函數');
    } else {
      console.log('   ❌ 漢字模式: 未找到詞彙函數');
    }
  }

  // 測試3: 檢查詞彙函數是否包含JLPT詞彙
  console.log('\n🔍 測試3: 詞彙函數JLPT整合');
  console.log('-'.repeat(30));

  // 檢查主索引檔案
  const mainIndexPath = path.join(__dirname, '../src/data/vocabulary-final/index.ts');
  if (fs.existsSync(mainIndexPath)) {
    const content = fs.readFileSync(mainIndexPath, 'utf8');
    
    if (content.includes('JLPT_N3_N2_WORDS')) {
      console.log('   ✅ 主索引檔案: 包含JLPT詞彙');
    } else {
      console.log('   ❌ 主索引檔案: 未包含JLPT詞彙');
    }

    if (content.includes('jlptLevel === \'n3\'')) {
      console.log('   ✅ 主索引檔案: 正確過濾N3詞彙');
    } else {
      console.log('   ❌ 主索引檔案: 未正確過濾N3詞彙');
    }

    if (content.includes('jlptLevel === \'n2\'')) {
      console.log('   ✅ 主索引檔案: 正確過濾N2詞彙');
    } else {
      console.log('   ❌ 主索引檔案: 未正確過濾N2詞彙');
    }
  }

  // 檢查俄羅斯方塊詞彙檔案
  const tetrisIndexPath = path.join(__dirname, '../src/data/vocabulary-final/index 2.ts');
  if (fs.existsSync(tetrisIndexPath)) {
    const content = fs.readFileSync(tetrisIndexPath, 'utf8');
    
    if (content.includes('JLPT_N3_N2_WORDS')) {
      console.log('   ✅ 俄羅斯方塊詞彙檔案: 包含JLPT詞彙');
    } else {
      console.log('   ❌ 俄羅斯方塊詞彙檔案: 未包含JLPT詞彙');
    }

    if (content.includes('jlptLevel === \'n3\'')) {
      console.log('   ✅ 俄羅斯方塊詞彙檔案: 正確過濾N3詞彙');
    } else {
      console.log('   ❌ 俄羅斯方塊詞彙檔案: 未正確過濾N3詞彙');
    }

    if (content.includes('jlptLevel === \'n2\'')) {
      console.log('   ✅ 俄羅斯方塊詞彙檔案: 正確過濾N2詞彙');
    } else {
      console.log('   ❌ 俄羅斯方塊詞彙檔案: 未正確過濾N2詞彙');
    }
  }

  // 測試4: 檢查TypeScript編譯
  console.log('\n🔧 測試4: TypeScript編譯檢查');
  console.log('-'.repeat(30));

  const { execSync } = require('child_process');
  try {
    execSync('npx tsc --noEmit --skipLibCheck', { 
      cwd: path.join(__dirname, '..'),
      stdio: 'pipe'
    });
    console.log('   ✅ TypeScript編譯: 無錯誤');
  } catch (error) {
    console.log('   ❌ TypeScript編譯: 有錯誤');
    console.log(`   錯誤信息: ${error.message}`);
  }

  // 測試5: 檢查JLPT詞彙範例
  console.log('\n📝 測試5: JLPT詞彙範例檢查');
  console.log('-'.repeat(30));

  const jlptIndexPath = path.join(__dirname, '../src/data/vocabulary-final/jlpt-chunks/index.ts');
  if (fs.existsSync(jlptIndexPath)) {
    const content = fs.readFileSync(jlptIndexPath, 'utf8');
    
    // 檢查是否包含範例單字
    if (content.includes('作法')) {
      console.log('   ✅ 包含N3範例單字: 作法 (さほう)');
    }
    
    if (content.includes('割引')) {
      console.log('   ✅ 包含N2範例單字: 割引 (わりびき)');
    }

    // 檢查統計信息
    const statsMatch = content.match(/總詞彙數量: (\d+) 個/);
    if (statsMatch) {
      console.log(`   📊 JLPT詞彙總數: ${statsMatch[1]} 個`);
    }
  }

  console.log('\n🎉 測試完成！');
  console.log('=' .repeat(50));
  
  if (totalWords >= 11000) {
    console.log('✅ JLPT詞彙已成功整合到遊戲中！');
    console.log(`📈 詞彙庫已從7,576個擴充到${totalWords}個單字`);
  } else {
    console.log('⚠️  詞彙庫數量可能未達到預期');
  }
}

testJLPTIntegration(); 