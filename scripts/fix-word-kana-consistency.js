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

// 修復規則：移除 kana 中的「する」
const KANA_SURU_FIXES = {
  // 常見的する動詞，移除する
  "うんどうする": "うんどう",
  "しんぱいする": "しんぱい",
  "しゅっせきする": "しゅっせき",
  "こしょうする": "こしょう",
  "じゅんびする": "じゅんび",
  "あいさつする": "あいさつ",
  "うんてんする": "うんてん",
  "あんないする": "あんない",
  "しょうたいする": "しょうたい",
  "えんりょする": "えんりょ",
  "にゅうがくする": "にゅうがく",
  "せいさんする": "せいさん",
  "けいかくする": "けいかく",
  "したくする": "したく",
  "ほうそうする": "ほうそう",
  "しょうちする": "しょうち",
  "たいいんする": "たいいん",
  "せわする": "せわ",
  "しゅっぱつする": "しゅっぱつ",
  "はいけんする": "はいけん",
  "けいけんする": "けいけん",
  "にゅういんする": "にゅういん",
  "そうだんする": "そうだん",
  "しょくじする": "しょくじ",
  "せいかつする": "せいかつ",
  "ゆしゅつする": "ゆしゅつ"
};

// 特殊情況：這些詞彙的 word 和 kana 都應該保持一致
const SPECIAL_CASES = {
  // 這些詞彙的 word 應該加上「する」
  "運動": "運動する",
  "心配": "心配する",
  "出席": "出席する",
  "故障": "故障する",
  "準備": "準備する",
  "挨拶": "挨拶する",
  "運転": "運転する",
  "案内": "案内する",
  "招待": "招待する",
  "遠慮": "遠慮する",
  "入学": "入学する",
  "生産": "生産する",
  "計画": "計画する",
  "支度": "支度する",
  "放送": "放送する",
  "承知": "承知する",
  "退院": "退院する",
  "世話": "世話する",
  "出発": "出発する",
  "拝見": "拝見する",
  "経験": "経験する",
  "入院": "入院する",
  "相談": "相談する",
  "食事": "食事する",
  "生活": "生活する",
  "輸出": "輸出する"
};

function fixWordKanaConsistency(filePath) {
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
  let currentWord = null;
  let currentKana = null;
  let wordLineIndex = -1;
  let kanaLineIndex = -1;

  for (let i = 0; i < lines.length; i++) {
    lineNumber++;
    const line = lines[i];
    
    // 檢查 word 字段
    if (line.includes('"word":') || line.includes('word:')) {
      const wordMatch = line.match(/"word":\s*"([^"]*)"/);
      if (wordMatch) {
        currentWord = wordMatch[1];
        wordLineIndex = i;
        totalWords++;
      }
    }
    
    // 檢查 kana 字段
    if (line.includes('"kana":') || line.includes('kana:')) {
      const kanaMatch = line.match(/"kana":\s*"([^"]*)"/);
      if (kanaMatch) {
        currentKana = kanaMatch[1];
        kanaLineIndex = i;
        
        // 檢查一致性問題
        if (currentWord && currentKana) {
          const wordHasSuru = currentWord.includes('する');
          const kanaHasSuru = currentKana.includes('する');
          
          if (wordHasSuru !== kanaHasSuru) {
            // 修復策略：優先修復 kana，移除する
            if (!wordHasSuru && kanaHasSuru) {
              // Word 沒有する但 kana 有する
              if (KANA_SURU_FIXES[currentKana]) {
                const fixedKana = KANA_SURU_FIXES[currentKana];
                const newLine = line.replace(`"${currentKana}"`, `"${fixedKana}"`);
                lines[i] = newLine;
                fixedCount++;
                
                console.log(`   ✅ 修復 kana: "${currentKana}" → "${fixedKana}" (第${lineNumber}行)`);
                console.log(`      對應 word: "${currentWord}"`);
              } else {
                console.log(`   ⚠️  未找到修復規則: "${currentKana}" (第${lineNumber}行)`);
              }
            } else if (wordHasSuru && !kanaHasSuru) {
              // Word 有する但 kana 沒有する - 這種情況較少，暫時記錄
              console.log(`   ⚠️  Word 有する但 kana 沒有: "${currentWord}" vs "${currentKana}" (第${lineNumber}行)`);
            }
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
  console.log('📊 Word-Kana 一致性修復報告');
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
    console.log('\n🎉 恭喜！所有 Word-Kana 一致性问题都已修復！');
  } else {
    console.log(`\n✅ 成功修復 ${totalFixed} 個 Word-Kana 一致性问题`);
  }

  return { totalFixed, totalWords, allResults };
}

function main() {
  console.log('🚀 開始修復所有詞彙文件的 Word-Kana 一致性问题...');
  
  const vocabularyDir = path.join(__dirname, '..', 'src', 'data', 'vocabulary-final');
  const allResults = [];

  for (const fileName of VOCABULARY_FILES) {
    const filePath = path.join(vocabularyDir, fileName);
    const result = fixWordKanaConsistency(filePath);
    allResults.push(result);
  }

  const report = generateReport(allResults);

  // 保存報告到文件
  const reportPath = path.join(__dirname, 'word-kana-consistency-fix-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n📄 修復報告已保存到: ${reportPath}`);

  // 驗證修復結果
  console.log('\n🔍 驗證修復結果...');
  const { execSync } = require('child_process');
  try {
    const verifyResult = execSync('node scripts/check-word-kana-consistency.js', { encoding: 'utf8' });
    console.log(verifyResult);
  } catch (error) {
    console.log('驗證過程中出現錯誤:', error.message);
  }
}

if (require.main === module) {
  main();
}

module.exports = { fixWordKanaConsistency, generateReport }; 