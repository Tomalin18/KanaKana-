const fs = require('fs');
const path = require('path');

// 檢查的標點符號和問題模式
const PROBLEM_PATTERNS = {
  semicolon: /;/g,
  parentheses: /[()]/g,
  tilde: /[～~]/g,
  brackets: /[\[\]]/g,
  braces: /[{}]/g,
  quotes: /[""]/g,
  apostrophe: /['']/g,
  dash: /[—–-]/g,
  ellipsis: /\.{3,}/g,
  multipleSpaces: /\s{2,}/g,
  leadingTrailingSpaces: /^\s+|\s+$/g,
  emptyKana: /"kana":\s*""/g,
  emptyWord: /"word":\s*""/g,
  emptyMeaning: /"meaning":\s*""/g
};

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

function checkFile(filePath) {
  console.log(`\n🔍 檢查文件: ${path.basename(filePath)}`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ 文件不存在: ${filePath}`);
    return { file: path.basename(filePath), issues: [], totalWords: 0 };
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  const issues = [];
  let totalWords = 0;
  let currentWord = null;
  let lineNumber = 0;

  for (const line of lines) {
    lineNumber++;
    
    // 檢查是否為詞彙條目
    if (line.includes('"word":') || line.includes('word:')) {
      totalWords++;
      currentWord = { line: lineNumber, word: line.trim() };
    }

    // 檢查各種問題模式
    for (const [patternName, pattern] of Object.entries(PROBLEM_PATTERNS)) {
      if (pattern.test(line)) {
        const matches = line.match(pattern);
        if (matches) {
          issues.push({
            type: patternName,
            line: lineNumber,
            content: line.trim(),
            matches: matches.length,
            word: currentWord?.word || 'unknown'
          });
        }
      }
    }
  }

  return { file: path.basename(filePath), issues, totalWords };
}

function generateReport(allResults) {
  console.log('\n' + '='.repeat(80));
  console.log('📊 詞彙問題檢查報告');
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
        
        console.log(`   ${issueType}: 第${issue.line}行 - ${issue.content.substring(0, 50)}...`);
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
          console.log(`  行 ${issue.line}: ${issue.type} - ${issue.content}`);
        }
      }
    }
  }

  return { totalIssues, totalWords, issueSummary };
}

function main() {
  console.log('🚀 開始檢查所有詞彙文件...');
  
  const vocabularyDir = path.join(__dirname, '..', 'src', 'data', 'vocabulary-final');
  const allResults = [];

  for (const fileName of VOCABULARY_FILES) {
    const filePath = path.join(vocabularyDir, fileName);
    const result = checkFile(filePath);
    allResults.push(result);
  }

  const report = generateReport(allResults);

  // 保存報告到文件
  const reportPath = path.join(__dirname, 'vocabulary-issues-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n📄 詳細報告已保存到: ${reportPath}`);

  if (report.totalIssues === 0) {
    console.log('\n🎉 恭喜！所有詞彙文件都沒有發現問題！');
  } else {
    console.log(`\n⚠️  發現 ${report.totalIssues} 個問題需要修復`);
  }
}

if (require.main === module) {
  main();
}

module.exports = { checkFile, generateReport }; 