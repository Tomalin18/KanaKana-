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

// 正常的讀音映射，這些不是問題
const NORMAL_READINGS = {
  // 擦る的各種讀音
  "擦る": ["する", "こする", "かする"],
  // 刷る的讀音
  "刷る": ["する"],
  // 為る的讀音
  "為る": ["する"],
  // 鋭い的讀音
  "鋭い": ["するどい"]
};

function checkWordKanaConsistency(filePath) {
  console.log(`\n🔍 檢查文件: ${path.basename(filePath)}`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ 文件不存在: ${filePath}`);
    return { file: path.basename(filePath), issues: [], totalWords: 0 };
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  const issues = [];
  let totalWords = 0;
  let lineNumber = 0;
  let currentWord = null;
  let currentKana = null;

  for (const line of lines) {
    lineNumber++;
    
    // 檢查 word 字段
    if (line.includes('"word":') || line.includes('word:')) {
      const wordMatch = line.match(/"word":\s*"([^"]*)"/);
      if (wordMatch) {
        currentWord = wordMatch[1];
        totalWords++;
      }
    }
    
    // 檢查 kana 字段
    if (line.includes('"kana":') || line.includes('kana:')) {
      const kanaMatch = line.match(/"kana":\s*"([^"]*)"/);
      if (kanaMatch) {
        currentKana = kanaMatch[1];
        
        // 檢查一致性問題
        if (currentWord && currentKana) {
          // 檢查する的不一致性
          const wordHasSuru = currentWord.includes('する');
          const kanaHasSuru = currentKana.includes('する');
          
          if (wordHasSuru !== kanaHasSuru) {
            // 檢查是否為正常的讀音
            const normalReadings = NORMAL_READINGS[currentWord];
            const isNormalReading = normalReadings && normalReadings.includes(currentKana);
            
            if (!isNormalReading) {
              issues.push({
                type: 'suru_inconsistency',
                line: lineNumber,
                word: currentWord,
                kana: currentKana,
                description: wordHasSuru ? 
                  `Word has "する" but kana doesn't` : 
                  `Word doesn't have "する" but kana does`,
                fullLine: line.trim()
              });
            }
          }
          
          // 檢查其他可能的不一致性
          if (currentWord.length > 0 && currentKana.length > 0) {
            // 檢查括號內容的不一致性
            const wordHasParentheses = /[()（）]/.test(currentWord);
            const kanaHasParentheses = /[()（）]/.test(currentKana);
            
            if (wordHasParentheses !== kanaHasParentheses) {
              issues.push({
                type: 'parentheses_inconsistency',
                line: lineNumber,
                word: currentWord,
                kana: currentKana,
                description: wordHasParentheses ? 
                  `Word has parentheses but kana doesn't` : 
                  `Word doesn't have parentheses but kana does`,
                fullLine: line.trim()
              });
            }
          }
        }
      }
    }
  }

  return { file: path.basename(filePath), issues, totalWords };
}

function generateReport(allResults) {
  console.log('\n' + '='.repeat(80));
  console.log('📊 Word-Kana 一致性檢查報告');
  console.log('='.repeat(80));

  let totalIssues = 0;
  let totalWords = 0;
  const issueSummary = {};

  // 統計問題
  for (const result of allResults) {
    totalWords += result.totalWords;
    console.log(`\n📁 ${result.file}: ${result.totalWords} 個詞彙`);
    
    if (result.issues.length === 0) {
      console.log('✅ 無問題');
    } else {
      console.log(`❌ 發現 ${result.issues.length} 個問題:`);
      
      for (const issue of result.issues) {
        totalIssues++;
        const issueType = issue.type;
        if (!issueSummary[issueType]) {
          issueSummary[issueType] = 0;
        }
        issueSummary[issueType]++;
        
        console.log(`   ${issueType}: 第${issue.line}行`);
        console.log(`      Word: "${issue.word}"`);
        console.log(`      Kana: "${issue.kana}"`);
        console.log(`      問題: ${issue.description}`);
      }
    }
  }

  // 總結報告
  console.log('\n' + '='.repeat(80));
  console.log('📈 總結報告');
  console.log('='.repeat(80));
  console.log(`總詞彙數: ${totalWords}`);
  console.log(`總問題數: ${totalIssues}`);
  console.log(`問題率: ${((totalIssues / totalWords) * 100).toFixed(2)}%`);

  if (Object.keys(issueSummary).length > 0) {
    console.log('\n問題類型分布:');
    for (const [type, count] of Object.entries(issueSummary)) {
      console.log(`  ${type}: ${count} 個`);
    }
  }

  // 詳細問題列表
  if (totalIssues > 0) {
    console.log('\n' + '='.repeat(80));
    console.log('🔍 詳細問題列表');
    console.log('='.repeat(80));
    
    for (const result of allResults) {
      if (result.issues.length > 0) {
        console.log(`\n📁 ${result.file}:`);
        for (const issue of result.issues) {
          console.log(`  行 ${issue.line}: ${issue.type}`);
          console.log(`    Word: "${issue.word}"`);
          console.log(`    Kana: "${issue.kana}"`);
          console.log(`    問題: ${issue.description}`);
        }
      }
    }
  }

  return { totalIssues, totalWords, issueSummary, allResults };
}

function main() {
  console.log('🚀 開始檢查所有詞彙文件的 Word-Kana 一致性...');
  
  const vocabularyDir = path.join(__dirname, '..', 'src', 'data', 'vocabulary-final');
  const allResults = [];

  for (const fileName of VOCABULARY_FILES) {
    const filePath = path.join(vocabularyDir, fileName);
    const result = checkWordKanaConsistency(filePath);
    allResults.push(result);
  }

  const report = generateReport(allResults);

  // 保存報告到文件
  const reportPath = path.join(__dirname, 'word-kana-consistency-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n📄 詳細報告已保存到: ${reportPath}`);

  if (report.totalIssues === 0) {
    console.log('\n🎉 恭喜！所有詞彙文件的 Word-Kana 一致性都沒有問題！');
  } else {
    console.log(`\n⚠️  發現 ${report.totalIssues} 個 Word-Kana 一致性问题需要修復`);
  }
}

if (require.main === module) {
  main();
}

module.exports = { checkWordKanaConsistency, generateReport }; 