const fs = require('fs');
const path = require('path');

// 詞彙文件列表
const VOCABULARY_FILES = [
  'beginner_converted.ts',
  'normal 2.ts',
  'hard 2.ts',
  'expert 2.ts',
  'kanji-01.ts',
  'kanji-02.ts',
  'kanji-03.ts',
  'kanji-04.ts',
  'kanji-05.ts',
  'kanji-06.ts',
  'kanji-07.ts',
  'jlpt-n3-n2-fixed.ts'
];

// 分號修復規則
const SEMICOLON_FIXES = {
  "足; 脚": "足",
  "いい; よい": "いい",
  "伯父; 叔父さん": "伯父",
  "伯母さん; 叔母さん": "伯母さん",
  "川; 河": "川",
  "キロ; キログラム": "キロ",
  "そう; そうです": "そうです",
  "そうして; そして": "そして",
  "初め; 始め": "初め",
  "丸い; 円い": "丸い",
  "やはり; やっぱり": "やはり",
  "堅; 硬; 固い": "固い",
  "高校; 高等学校": "高校",
  "けれど; けれども": "けれど",
  "在る; 有る": "ある",
  "レポート; リポート": "レポート",
  "コンピュータ; コンピューター": "コンピューター",
  "アイデア; アイディア": "アイデア"
};

function fixSemicolonIssues(filePath) {
  console.log(`\n🔧 修復文件: ${path.basename(filePath)}`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ 文件不存在: ${filePath}`);
    return { file: path.basename(filePath), fixed: 0, totalWords: 0 };
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  let fixedCount = 0;
  let totalWords = 0;
  let lineNumber = 0;

  for (let i = 0; i < lines.length; i++) {
    lineNumber++;
    const line = lines[i];
    
    // 檢查 word 字段
    if (line.includes('"word":') || line.includes('word:')) {
      totalWords++;
      
      // 檢查是否包含分號
      if (line.includes(';')) {
        // 提取 word 值
        const wordMatch = line.match(/"word":\s*"([^"]*)"/);
        if (wordMatch) {
          const originalWord = wordMatch[1];
          
          // 查找修復規則
          if (SEMICOLON_FIXES[originalWord]) {
            const fixedWord = SEMICOLON_FIXES[originalWord];
            const newLine = line.replace(`"${originalWord}"`, `"${fixedWord}"`);
            lines[i] = newLine;
            fixedCount++;
            
            console.log(`   ✅ 修復: "${originalWord}" → "${fixedWord}" (第${lineNumber}行)`);
          } else {
            console.log(`   ⚠️  未找到修復規則: "${originalWord}" (第${lineNumber}行)`);
          }
        }
      }
    }
  }

  // 寫回文件
  if (fixedCount > 0) {
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    console.log(`   📝 已修復 ${fixedCount} 個問題`);
  } else {
    console.log(`   ✅ 無需修復`);
  }

  return { file: path.basename(filePath), fixed: fixedCount, totalWords };
}

function generateReport(allResults) {
  console.log('\n' + '='.repeat(80));
  console.log('📊 Word 分號修復報告');
  console.log('='.repeat(80));

  let totalFixed = 0;
  let totalWords = 0;

  // 統計修復結果
  for (const result of allResults) {
    totalWords += result.totalWords;
    console.log(`\n📁 ${result.file}: ${result.totalWords} 個詞彙`);
    
    if (result.fixed === 0) {
      console.log('✅ 無需修復');
    } else {
      console.log(`🔧 修復了 ${result.fixed} 個問題`);
      totalFixed += result.fixed;
    }
  }

  // 總結報告
  console.log('\n' + '='.repeat(80));
  console.log('📈 總結報告');
  console.log('='.repeat(80));
  console.log(`總詞彙數: ${totalWords}`);
  console.log(`總修復數: ${totalFixed}`);
  console.log(`修復率: ${((totalFixed / totalWords) * 100).toFixed(2)}%`);

  if (totalFixed === 0) {
    console.log('\n🎉 恭喜！所有 word 分號問題都已修復！');
  } else {
    console.log(`\n✅ 成功修復 ${totalFixed} 個 word 分號問題`);
  }

  return { totalFixed, totalWords, allResults };
}

function main() {
  console.log('🚀 開始修復所有詞彙文件的 word 分號問題...');
  
  const vocabularyDir = path.join(__dirname, '..', 'src', 'data', 'vocabulary-final');
  const allResults = [];

  for (const fileName of VOCABULARY_FILES) {
    const filePath = path.join(vocabularyDir, fileName);
    const result = fixSemicolonIssues(filePath);
    allResults.push(result);
  }

  const report = generateReport(allResults);

  // 保存報告到文件
  const reportPath = path.join(__dirname, 'word-semicolon-fix-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n📄 修復報告已保存到: ${reportPath}`);

  // 驗證修復結果
  console.log('\n🔍 驗證修復結果...');
  const { execSync } = require('child_process');
  try {
    const verifyResult = execSync('node scripts/check-vocabulary-word-issues.js', { encoding: 'utf8' });
    console.log(verifyResult);
  } catch (error) {
    console.log('驗證過程中出現錯誤:', error.message);
  }
}

if (require.main === module) {
  main();
}

module.exports = { fixSemicolonIssues, generateReport }; 