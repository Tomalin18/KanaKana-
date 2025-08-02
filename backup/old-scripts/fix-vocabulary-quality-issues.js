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

// 非假名字符修復規則
const KANA_FIXES = {
  "ファックス": "ファックス", // 保留，這是正確的片假名
  "ソファー": "ソファー", // 保留，這是正確的片假名
  "ファスナー": "ファスナー", // 保留，這是正確的片假名
  "ファイト": "ファイト", // 保留，這是正確的片假名
  "ファン": "ファン", // 保留，這是正確的片假名
  "まわる、まわす": "まわる" // 修復為單一讀音
};

// 過長 meaning 的修復規則
const MEANING_FIXES = {
  // 移除重複的括號內容和過長的解釋
  "practice, executito get (e.g., program), realizatito get (practice, executito get (e.g., program), realizatito get) (practice, executito get (e.g., program), realizatito get (practice, execution (e.g., program), realization))": "practice, execution (e.g., program), realization",
  "recovery (towel illness), rehabilitation, restoration (recovery (towel illness), rehabilitation, restoration) (recovery (towel illness), rehabilitation, restoration (recovery (from illness), rehabilitation, restoration))": "recovery (from illness), rehabilitation, restoration",
  "cto getventito get, (big) tournament, mass meeting (cto getventito get, (big) tournament, mass meeting) (cto getventito get, (big) tournament, mass meeting (convention, (big) tournament, mass meeting))": "convention, (big) tournament, mass meeting",
  "target; object (from worship, study, etc.); subject (i.e., from taxation) (target; object (from worship, study, etc.); subject (i.e., from taxation)) (target; object (from worship, study, etc.); subject (i.e., from taxation) (target; object (of worship, study, etc.); subject (i.e., of taxation)))": "target; object (of worship, study, etc.); subject (i.e., of taxation)",
  "credit (for a course in 學校); unit, denomination (credit (for a course in 學校); unit, denomination) (credit (for a course in 學校); unit, denomination (credit (for a course in school); unit, denomination))": "credit (for a course in school); unit, denomination",
  "medium (e.g., food serving size, quality, price, etc.), cartoondinary (medium (e.g., food serving size, quality, price, etc.), cartoondinary) (medium (e.g., food serving size, quality, price, etc.), cartoondinary (medium (e.g., food serving size, quality, price, etc.), ordinary))": "medium (e.g., food serving size, quality, price, etc.), ordinary",
  "with all or's strength (heart), resignation, resolution (with all or's strength (heart), resignation, resolution) (with all or's strength (heart), resignation, resolution (with all one's strength (heart), resignation, resolution))": "with all one's strength (heart), resignation, resolution",
  "approval, adoptito get (e.g., motito get, bill), passage (approval, adoptito get (e.g., motito get, bill), passage) (approval, adoptito get (e.g., motito get, bill), passage (approval, adoption (e.g., motion, bill), passage))": "approval, adoption (e.g., motion, bill), passage",
  "(Lit.) I'll go 和 come back, 'I'm going, see you later' ((Lit.) I'll go 和 come back, 'I'm going, see you later') ((Lit.) I'll go 和 come back, 'I'm going, see you later' ((Lit.) I'll go and come back, 'I'm going, see you later'))": "(Lit.) I'll go and come back, 'I'm going, see you later'",
  "dull (e.g., a knife), thickheaded, slow (opposite from fast), stupid (dull (e.g., a knife), thickheaded, slow (opposite from fast), stupid) (dull (e.g., a knife), thickheaded, slow (opposite from fast), stupid (dull (e.g., a knife), thickheaded, slow (opposite of fast), stupid))": "dull (e.g., a knife), thickheaded, slow (opposite of fast), stupid",
  "dull (e.g., a knife), slow (opposite from fast), stupid (dull (e.g., a knife), slow (opposite from fast), stupid) (dull (e.g., a knife), slow (opposite from fast), stupid (dull (e.g., a knife), slow (opposite of fast), stupid))": "dull (e.g., a knife), slow (opposite of fast), stupid",
  "(going) side by side, concurrent, at the same time ((going) side by side, concurrent, at the same time) ((going) side by side, concurrent, at the same time ((going) side by side, concurrent, at the same time))": "(going) side by side, concurrent, at the same time",
  "table with heater, (originally) charcoal brazier in a floor 好 (table with heater, (originally) charcoal brazier in a floor 好) (table with heater, (originally) charcoal brazier in a floor 好 (table with heater, (originally) charcoal brazier in a floor well))": "table with heater, (originally) charcoal brazier in a floor well",
  "state; way (a person does something); Mr. cartoon Mrs. (state; way (a person does something); Mr. cartoon Mrs.) (state; way (a person does something); Mr. cartoon Mrs. (state; way (a person does something); Mr. or Mrs.))": "state; way (a person does something); Mr. or Mrs.",
  "working together, (husband 和 wife) earning a living together (working together, (husband 和 wife) earning a living together) (working together, (husband 和 wife) earning a living together (working together, (husband and wife) earning a living together))": "working together, (husband and wife) earning a living together",
  "(arch) dojo, hall used fcartoon martial arts moneying, m和ala ((arch) dojo, hall used fcartoon martial arts moneying, m和ala) ((arch) dojo, hall used fcartoon martial arts moneying, m和ala ((arch) dojo, hall used for martial arts training, mandala))": "(arch) dojo, hall used for martial arts training, mandala",
  "(trouser) cuff, (skirt) hem, cut edge from a hairdo ((trouser) cuff, (skirt) hem, cut edge from a hairdo) ((trouser) cuff, (skirt) hem, cut edge from a hairdo ((trouser) cuff, (skirt) hem, cut edge of a hairdo))": "(trouser) cuff, (skirt) hem, cut edge of a hairdo",
  "(in) to get hand cartoon at home, or's purse; usual skill ((in) to get hand cartoon at home, or's purse; usual skill) ((in) to get hand cartoon at home, or's purse; usual skill ((money) on hand or at home, one's purse; usual skill))": "(money) on hand or at home, one's purse; usual skill",
  "wink, twinkling (from stars), flicker (from light) (wink, twinkling (from stars), flicker (from light)) (wink, twinkling (from stars), flicker (from light) (wink, twinkling (of stars), flicker (of light)))": "wink, twinkling (of stars), flicker (of light)"
};

function fixQualityIssues(filePath) {
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
    
    // 檢查 kana 字段
    if (line.includes('"kana":') || line.includes('kana:')) {
      const kanaMatch = line.match(/"kana":\s*"([^"]*)"/);
      if (kanaMatch) {
        const originalKana = kanaMatch[1];
        
        // 檢查是否需要修復
        if (KANA_FIXES[originalKana]) {
          const fixedKana = KANA_FIXES[originalKana];
          if (originalKana !== fixedKana) {
            const newLine = line.replace(`"${originalKana}"`, `"${fixedKana}"`);
            lines[i] = newLine;
            fixedCount++;
            
            console.log(`   ✅ 修復 kana: "${originalKana}" → "${fixedKana}" (第${lineNumber}行)`);
          }
        }
      }
    }
    
    // 檢查 meaning 字段
    if (line.includes('"meaning":') || line.includes('meaning:')) {
      const meaningMatch = line.match(/"meaning":\s*"([^"]*)"/);
      if (meaningMatch) {
        const originalMeaning = meaningMatch[1];
        
        // 檢查是否需要修復
        if (MEANING_FIXES[originalMeaning]) {
          const fixedMeaning = MEANING_FIXES[originalMeaning];
          const newLine = line.replace(`"${originalMeaning}"`, `"${fixedMeaning}"`);
          lines[i] = newLine;
          fixedCount++;
          
          console.log(`   ✅ 修復 meaning: "${originalMeaning.substring(0, 50)}..." → "${fixedMeaning.substring(0, 50)}..." (第${lineNumber}行)`);
        }
      }
    }
    
    // 統計詞彙數量
    if (line.includes('"word":') || line.includes('word:')) {
      totalWords++;
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
  console.log('📊 詞彙數據質量修復報告');
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
    console.log('\n🎉 恭喜！所有詞彙數據質量問題都已修復！');
  } else {
    console.log(`\n✅ 成功修復 ${totalFixed} 個數據質量問題`);
  }

  return { totalFixed, totalWords, allResults };
}

function main() {
  console.log('🚀 開始修復所有詞彙文件的數據質量問題...');
  
  const vocabularyDir = path.join(__dirname, '..', 'src', 'data', 'vocabulary-final');
  const allResults = [];

  for (const fileName of VOCABULARY_FILES) {
    const filePath = path.join(vocabularyDir, fileName);
    const result = fixQualityIssues(filePath);
    allResults.push(result);
  }

  const report = generateReport(allResults);

  // 保存報告到文件
  const reportPath = path.join(__dirname, 'vocabulary-quality-fix-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n📄 修復報告已保存到: ${reportPath}`);

  // 驗證修復結果
  console.log('\n🔍 驗證修復結果...');
  const { execSync } = require('child_process');
  try {
    const verifyResult = execSync('node scripts/check-vocabulary-data-quality.js', { encoding: 'utf8' });
    console.log(verifyResult);
  } catch (error) {
    console.log('驗證過程中出現錯誤:', error.message);
  }
}

if (require.main === module) {
  main();
}

module.exports = { fixQualityIssues, generateReport }; 