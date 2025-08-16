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

function checkDataQuality(filePath) {
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

  for (const line of lines) {
    lineNumber++;
    
    // 檢查 word 字段
    if (line.includes('"word":') || line.includes('word:')) {
      totalWords++;
      const wordMatch = line.match(/"word":\s*"([^"]*)"/);
      if (wordMatch) {
        currentWord = wordMatch[1];
        
        // 檢查空值
        if (!currentWord || currentWord.trim() === '') {
          issues.push({
            type: 'empty_word',
            line: lineNumber,
            field: 'word',
            value: currentWord,
            fullLine: line.trim()
          });
        }
        
        // 檢查過長的值
        if (currentWord.length > 50) {
          issues.push({
            type: 'word_too_long',
            line: lineNumber,
            field: 'word',
            value: currentWord,
            length: currentWord.length,
            fullLine: line.trim()
          });
        }
      }
    }
    
    // 檢查 kana 字段
    if (line.includes('"kana":') || line.includes('kana:')) {
      const kanaMatch = line.match(/"kana":\s*"([^"]*)"/);
      if (kanaMatch) {
        const kanaValue = kanaMatch[1];
        
        // 檢查空值
        if (!kanaValue || kanaValue.trim() === '') {
          issues.push({
            type: 'empty_kana',
            line: lineNumber,
            field: 'kana',
            value: kanaValue,
            fullLine: line.trim()
          });
        }
        
        // 檢查過長的值
        if (kanaValue.length > 50) {
          issues.push({
            type: 'kana_too_long',
            line: lineNumber,
            field: 'kana',
            value: kanaValue,
            length: kanaValue.length,
            fullLine: line.trim()
          });
        }
        
        // 檢查是否包含非假名字符（修正版）
        // 正確的假名範圍：平假名(あ-ん)、片假名(ア-ン)、長音符(ー)、濁點(゛)、半濁點(゜)
        const validKanaPattern = /^[あ-んア-ンー゛゜、。]*$/;
        if (!validKanaPattern.test(kanaValue)) {
          // 檢查是否包含明顯的非假名字符
          const nonKanaPattern = /[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
          if (nonKanaPattern.test(kanaValue)) {
            issues.push({
              type: 'non_kana_characters',
              line: lineNumber,
              field: 'kana',
              value: kanaValue,
              fullLine: line.trim()
            });
          }
        }
      }
    }
    
    // 檢查 meaning 字段
    if (line.includes('"meaning":') || line.includes('meaning:')) {
      const meaningMatch = line.match(/"meaning":\s*"([^"]*)"/);
      if (meaningMatch) {
        const meaningValue = meaningMatch[1];
        
        // 檢查空值
        if (!meaningValue || meaningValue.trim() === '') {
          issues.push({
            type: 'empty_meaning',
            line: lineNumber,
            field: 'meaning',
            value: meaningValue,
            fullLine: line.trim()
          });
        }
        
        // 檢查過長的值
        if (meaningValue.length > 200) {
          issues.push({
            type: 'meaning_too_long',
            line: lineNumber,
            field: 'meaning',
            value: meaningValue,
            length: meaningValue.length,
            fullLine: line.trim()
          });
        }
      }
    }
    
    // 檢查 difficulty 字段
    if (line.includes('"difficulty":') || line.includes('difficulty:')) {
      const difficultyMatch = line.match(/"difficulty":\s*"([^"]*)"/);
      if (difficultyMatch) {
        const difficultyValue = difficultyMatch[1];
        const validDifficulties = ['beginner', 'normal', 'hard', 'expert'];
        
        if (!validDifficulties.includes(difficultyValue)) {
          issues.push({
            type: 'invalid_difficulty',
            line: lineNumber,
            field: 'difficulty',
            value: difficultyValue,
            validValues: validDifficulties,
            fullLine: line.trim()
          });
        }
      }
    }
  }

  return { file: path.basename(filePath), issues, totalWords };
}

function generateReport(allResults) {
  console.log('\n' + '='.repeat(80));
  console.log('📊 詞彙數據質量檢查報告');
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
        
        console.log(`   ${issueType}: 第${issue.line}行 - ${issue.field}: "${issue.value}"`);
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
          console.log(`  行 ${issue.line}: ${issue.type} - ${issue.field}: "${issue.value}"`);
        }
      }
    }
  }

  return { totalIssues, totalWords, issueSummary, allResults };
}

function main() {
  console.log('🚀 開始檢查所有詞彙文件的數據質量...');
  
  const vocabularyDir = path.join(__dirname, '..', 'src', 'data', 'vocabulary-final');
  const allResults = [];

  for (const fileName of VOCABULARY_FILES) {
    const filePath = path.join(vocabularyDir, fileName);
    const result = checkDataQuality(filePath);
    allResults.push(result);
  }

  const report = generateReport(allResults);

  // 保存報告到文件
  const reportPath = path.join(__dirname, 'vocabulary-quality-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n📄 詳細報告已保存到: ${reportPath}`);

  if (report.totalIssues === 0) {
    console.log('\n🎉 恭喜！所有詞彙文件都沒有數據質量問題！');
  } else {
    console.log(`\n⚠️  發現 ${report.totalIssues} 個數據質量問題需要修復`);
  }
}

if (require.main === module) {
  main();
}

module.exports = { checkDataQuality, generateReport }; 