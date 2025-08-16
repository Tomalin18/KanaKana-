const fs = require('fs');
const path = require('path');

// 檢查詞彙分配情況
function checkDifficultyDistribution() {
  console.log('🔍 檢查詞彙難度分配情況...\n');

  // 讀取詞彙檔案
  const vocabularyPath = path.join(__dirname, '../src/data/vocabulary-final');
  
  try {
    // 檢查各個難度等級的詞彙檔案
    const files = [
      'beginner_converted.ts',
      'normal 2.ts', 
      'hard 2.ts',
      'expert 2.ts'
    ];

    let totalStats = {
      beginner: 0,
      normal: 0,
      hard: 0,
      expert: 0,
      jlptN3: 0,
      jlptN2: 0,
      jlptN1: 0
    };

    // 檢查JLPT詞彙
    console.log('📚 檢查JLPT詞彙分布...');
    const jlptChunks = ['chunk-1.ts', 'chunk-2.ts', 'chunk-3.ts', 'chunk-4.ts', 'chunk-5.ts', 'chunk-6.ts', 'chunk-7.ts', 'chunk-8.ts'];
    
    for (const chunk of jlptChunks) {
      const chunkPath = path.join(vocabularyPath, 'jlpt-chunks', chunk);
      if (fs.existsSync(chunkPath)) {
        const content = fs.readFileSync(chunkPath, 'utf8');
        // 使用更精確的正則表達式來匹配 jlptLevel 欄位
        const n3Matches = content.match(/"jlptLevel":\s*"n3"/g) || [];
        const n2Matches = content.match(/"jlptLevel":\s*"n2"/g) || [];
        const n1Matches = content.match(/"jlptLevel":\s*"n1"/g) || [];
        
        totalStats.jlptN3 += n3Matches.length;
        totalStats.jlptN2 += n2Matches.length;
        totalStats.jlptN1 += n1Matches.length;
        
        console.log(`   ${chunk}: N3=${n3Matches.length}, N2=${n2Matches.length}, N1=${n1Matches.length}`);
      }
    }

    console.log(`\n✅ JLPT詞彙統計:`);
    console.log(`   N3詞彙: ${totalStats.jlptN3} 個`);
    console.log(`   N2詞彙: ${totalStats.jlptN2} 個`);
    console.log(`   N1詞彙: ${totalStats.jlptN1} 個`);
    console.log(`   總計: ${totalStats.jlptN3 + totalStats.jlptN2 + totalStats.jlptN1} 個\n`);

    // 檢查各個難度等級的詞彙數量
    console.log('📊 檢查各難度等級詞彙數量...');
    for (const file of files) {
      const filePath = path.join(vocabularyPath, file);
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        // 計算物件數量（每個詞彙都是一個物件）
        const wordObjects = content.match(/\{[^}]*"word":\s*"[^"]*"[^}]*\}/g) || [];
        const wordCount = wordObjects.length;
        
        if (file.includes('beginner')) {
          totalStats.beginner = wordCount;
          console.log(`   初級詞彙: ${wordCount} 個`);
        } else if (file.includes('normal')) {
          totalStats.normal = wordCount;
          console.log(`   中級詞彙: ${wordCount} 個`);
        } else if (file.includes('hard')) {
          totalStats.hard = wordCount;
          console.log(`   高級詞彙: ${wordCount} 個`);
        } else if (file.includes('expert')) {
          totalStats.expert = wordCount;
          console.log(`   專家級詞彙: ${wordCount} 個`);
        }
      }
    }

    console.log('\n🎯 分析詞彙分配邏輯...');
    
    // 根據 getRandomWordByCombinedDifficulty 函數的邏輯分析
    const elementaryPool = totalStats.beginner;
    const intermediatePool = totalStats.beginner + totalStats.normal + totalStats.jlptN3;
    const advancedPool = totalStats.normal + totalStats.hard + totalStats.jlptN2;
    
    console.log(`\n📈 各難度等級詞彙池大小:`);
    console.log(`   初級 (elementary): ${elementaryPool} 個詞彙`);
    console.log(`   中級 (intermediate): ${intermediatePool} 個詞彙`);
    console.log(`   高級 (advanced): ${advancedPool} 個詞彙`);
    
    console.log(`\n📊 中級詞彙池組成:`);
    console.log(`   初級詞彙: ${totalStats.beginner} 個 (${((totalStats.beginner / intermediatePool) * 100).toFixed(1)}%)`);
    console.log(`   中級詞彙: ${totalStats.normal} 個 (${((totalStats.normal / intermediatePool) * 100).toFixed(1)}%)`);
    console.log(`   N3詞彙: ${totalStats.jlptN3} 個 (${((totalStats.jlptN3 / intermediatePool) * 100).toFixed(1)}%)`);
    
    console.log(`\n📊 高級詞彙池組成:`);
    console.log(`   中級詞彙: ${totalStats.normal} 個 (${((totalStats.normal / advancedPool) * 100).toFixed(1)}%)`);
    console.log(`   高級詞彙: ${totalStats.hard} 個 (${((totalStats.hard / advancedPool) * 100).toFixed(1)}%)`);
    console.log(`   N2詞彙: ${totalStats.jlptN2} 個 (${((totalStats.jlptN2 / advancedPool) * 100).toFixed(1)}%)`);

    // 檢查是否有N1詞彙
    if (totalStats.jlptN1 > 0) {
      console.log(`\n⚠️  發現問題: 有 ${totalStats.jlptN1} 個N1詞彙，但沒有在任何難度等級中使用！`);
    }

    console.log(`\n💡 建議:`);
    if (totalStats.jlptN3 / intermediatePool < 0.1) {
      console.log(`   - 中級難度中N3詞彙比例偏低 (${((totalStats.jlptN3 / intermediatePool) * 100).toFixed(1)}%)`);
    }
    if (totalStats.jlptN2 / advancedPool < 0.1) {
      console.log(`   - 高級難度中N2詞彙比例偏低 (${((totalStats.jlptN2 / advancedPool) * 100).toFixed(1)}%)`);
    }
    if (totalStats.jlptN1 > 0) {
      console.log(`   - 建議將N1詞彙加入到高級或專家級難度中`);
    }

  } catch (error) {
    console.error('❌ 檢查過程中發生錯誤:', error);
  }
}

checkDifficultyDistribution(); 