const fs = require('fs');
const path = require('path');

// 讀取TypeScript檔案並解析
function parseTSFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // 尋找export const的陣列
    const match = content.match(/export const \w+: TetrisWord\[\] = (\[[\s\S]*?\]);/);
    if (match) {
      // 移除註解和格式化，然後解析JSON
      let jsonStr = match[1];
      
      // 移除單行註解
      jsonStr = jsonStr.replace(/\/\/.*$/gm, '');
      
      // 移除多行註解
      jsonStr = jsonStr.replace(/\/\*[\s\S]*?\*\//g, '');
      
      // 移除多餘的空白
      jsonStr = jsonStr.replace(/\s+/g, ' ');
      
      try {
        return JSON.parse(jsonStr);
      } catch (e) {
        console.error('解析JSON失敗:', e.message);
        return [];
      }
    }
    return [];
  } catch (e) {
    console.error(`讀取檔案失敗 ${filePath}:`, e.message);
    return [];
  }
}

function analyzeVocabulary() {
  console.log('📊 詞彙庫統計分析');
  console.log('=' .repeat(50));
  
  const vocabularyDir = path.join(__dirname, '../src/data/vocabulary-final');
  
  // 讀取各個詞彙檔案
  const files = [
    { name: 'beginner_converted.ts', key: 'BEGINNER_WORDS' },
    { name: 'normal 2.ts', key: 'NORMAL_WORDS' },
    { name: 'hard 2.ts', key: 'HARD_WORDS' },
    { name: 'expert 2.ts', key: 'EXPERT_WORDS' },
    { name: 'jlpt-n3-n2-updated.ts', key: 'JLPT_N3_N2_WORDS' }
  ];
  
  let totalWords = 0;
  const stats = {};
  
  files.forEach(file => {
    const filePath = path.join(vocabularyDir, file.name);
    if (fs.existsSync(filePath)) {
      const words = parseTSFile(filePath);
      const count = words.length;
      totalWords += count;
      
      stats[file.name] = {
        count,
        words: words.slice(0, 5) // 只取前5個作為範例
      };
      
      console.log(`📁 ${file.name}: ${count} 個單字`);
    } else {
      console.log(`❌ ${file.name}: 檔案不存在`);
    }
  });
  
  console.log('\n📈 總計統計');
  console.log('=' .repeat(30));
  console.log(`🎯 總單字數: ${totalWords} 個`);
  
  // 分析JLPT等級分布
  const jlptStats = {};
  const jlptFile = path.join(vocabularyDir, 'jlpt-n3-n2-updated.ts');
  if (fs.existsSync(jlptFile)) {
    const jlptWords = parseTSFile(jlptFile);
    
    jlptWords.forEach(word => {
      const level = word.jlptLevel || 'unknown';
      jlptStats[level] = (jlptStats[level] || 0) + 1;
    });
    
    console.log('\n📚 JLPT等級分布:');
    Object.entries(jlptStats).forEach(([level, count]) => {
      console.log(`   ${level.toUpperCase()}: ${count} 個單字`);
    });
  }
  
  // 分析難度等級分布
  const difficultyStats = {};
  files.forEach(file => {
    const filePath = path.join(vocabularyDir, file.name);
    if (fs.existsSync(filePath)) {
      const words = parseTSFile(filePath);
      words.forEach(word => {
        const difficulty = word.difficulty || 'unknown';
        difficultyStats[difficulty] = (difficultyStats[difficulty] || 0) + 1;
      });
    }
  });
  
  console.log('\n🎮 難度等級分布:');
  Object.entries(difficultyStats).forEach(([difficulty, count]) => {
    console.log(`   ${difficulty}: ${count} 個單字`);
  });
  
  // 顯示範例單字
  console.log('\n📝 各檔案範例單字:');
  Object.entries(stats).forEach(([fileName, data]) => {
    if (data.count > 0) {
      console.log(`\n${fileName}:`);
      data.words.forEach(word => {
        console.log(`   - ${word.word} (${word.kana}): ${word.meaning}`);
      });
    }
  });
}

analyzeVocabulary(); 