const fs = require('fs');
const path = require('path');

function countWordsInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // 計算 "word": 的出現次數來估算單字數量
    const wordMatches = content.match(/"word":/g);
    const count = wordMatches ? wordMatches.length : 0;
    
    return count;
  } catch (e) {
    console.error(`讀取檔案失敗 ${filePath}:`, e.message);
    return 0;
  }
}

function simpleStats() {
  console.log('📊 詞彙庫簡單統計');
  console.log('=' .repeat(40));
  
  const vocabularyDir = path.join(__dirname, '../src/data/vocabulary-final');
  
    const files = [
    'beginner_converted.ts',
    'normal 2.ts',
    'hard 2.ts',
    'expert 2.ts',
    'jlpt-chunks/index.ts'
  ];
  
  let totalWords = 0;
  
  files.forEach(fileName => {
    const filePath = path.join(vocabularyDir, fileName);
    if (fs.existsSync(filePath)) {
      const count = countWordsInFile(filePath);
      totalWords += count;
      console.log(`📁 ${fileName}: ${count} 個單字`);
    } else {
      console.log(`❌ ${fileName}: 檔案不存在`);
    }
  });
  
  console.log('\n📈 總計統計');
  console.log('=' .repeat(20));
  console.log(`🎯 總單字數: ${totalWords} 個`);
  
                // 檢查JLPT檔案的特殊統計
              const jlptDir = path.join(vocabularyDir, 'jlpt-chunks');
              if (fs.existsSync(jlptDir)) {
                const files = fs.readdirSync(jlptDir).filter(file => file.startsWith('chunk-'));
                let totalN3 = 0;
                let totalN2 = 0;

                files.forEach(file => {
                  const filePath = path.join(jlptDir, file);
                  const content = fs.readFileSync(filePath, 'utf8');
                  
                  const n3Matches = content.match(/"jlptLevel": "n3"/g);
                  const n2Matches = content.match(/"jlptLevel": "n2"/g);
                  
                  totalN3 += n3Matches ? n3Matches.length : 0;
                  totalN2 += n2Matches ? n2Matches.length : 0;
                });

                console.log('\n📚 JLPT等級分布:');
                console.log(`   N3: ${totalN3} 個單字`);
                console.log(`   N2: ${totalN2} 個單字`);
                console.log(`   JLPT總計: ${totalN3 + totalN2} 個單字`);
              }
}

simpleStats(); 