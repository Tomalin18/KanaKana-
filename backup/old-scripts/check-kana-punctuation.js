const fs = require('fs');
const path = require('path');

// 詞彙文件目錄
const vocabularyDir = path.join(__dirname, '../src/data/vocabulary-final');

// 要檢查的文件列表
const filesToCheck = [
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
  'jlpt-chunks/index.ts'
];

console.log('🔍 專門檢查 kana 參數中的標點符號...\n');

let totalKanaPunctuationWords = 0;
const allKanaPunctuationWords = [];

filesToCheck.forEach(file => {
  try {
    const filePath = path.join(vocabularyDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // 提取所有詞彙對象
    const wordMatches = content.match(/\{[^}]+\}/g);
    let fileKanaPunctuationWords = 0;
    
    if (wordMatches) {
      wordMatches.forEach(wordMatch => {
        // 檢查是否包含 word 和 kana 字段
        const wordMatchResult = wordMatch.match(/"word":\s*"([^"]+)"/);
        const kanaMatchResult = wordMatch.match(/"kana":\s*"([^"]+)"/);
        
        if (wordMatchResult && kanaMatchResult) {
          const word = wordMatchResult[1];
          const kana = kanaMatchResult[1];
          
          // 專門檢查 kana 中的標點符號
          let hasKanaPunctuation = false;
          let kanaPunctuationFound = [];
          
          // 檢查分號
          if (kana.includes(';')) {
            hasKanaPunctuation = true;
            if (!kanaPunctuationFound.includes(';')) {
              kanaPunctuationFound.push(';');
            }
          }
          
          // 檢查括號
          if (kana.includes('(') || kana.includes(')')) {
            hasKanaPunctuation = true;
            if (!kanaPunctuationFound.includes('()')) {
              kanaPunctuationFound.push('()');
            }
          }
          
          // 檢查波浪號
          if (kana.includes('～')) {
            hasKanaPunctuation = true;
            if (!kanaPunctuationFound.includes('～')) {
              kanaPunctuationFound.push('～');
            }
          }
          
          // 檢查其他標點符號
          const otherPunctuation = /[,，.。!！?？:：\[\]【】\{\}｛｝\/／\\＼\|｜\-－\_＿\`｀\@＠\#＃\$＄\%％\^＾\&＆\*＊\+＋\=＝]/g;
          
          if (otherPunctuation.test(kana)) {
            hasKanaPunctuation = true;
            const matches = [...kana.matchAll(otherPunctuation)];
            matches.forEach(match => {
              if (!kanaPunctuationFound.includes(match[0])) {
                kanaPunctuationFound.push(match[0]);
              }
            });
          }
          
          if (hasKanaPunctuation) {
            fileKanaPunctuationWords++;
            totalKanaPunctuationWords++;
            
            const kanaPunctuationWord = {
              file,
              word,
              kana,
              punctuation: kanaPunctuationFound.join(', '),
              fullMatch: wordMatch
            };
            
            allKanaPunctuationWords.push(kanaPunctuationWord);
            
            console.log(`📝 ${file}:`);
            console.log(`   Word: "${word}"`);
            console.log(`   Kana: "${kana}" ⚠️ 包含標點符號`);
            console.log(`   標點符號: ${kanaPunctuationFound.join(', ')}`);
            console.log('');
          }
        }
      });
    }
    
    if (fileKanaPunctuationWords > 0) {
      console.log(`📊 ${file}: 發現 ${fileKanaPunctuationWords} 個 kana 包含標點符號的詞彙\n`);
    }
    
  } catch (error) {
    console.log(`❌ 無法讀取文件 ${file}: ${error.message}`);
  }
});

console.log('='.repeat(60));
console.log(`📈 總計發現 ${totalKanaPunctuationWords} 個 kana 包含標點符號的詞彙`);
console.log('='.repeat(60));

// 按標點符號類型分類統計
const kanaPunctuationStats = {};
allKanaPunctuationWords.forEach(item => {
  item.punctuation.split(', ').forEach(punct => {
    if (!kanaPunctuationStats[punct]) {
      kanaPunctuationStats[punct] = 0;
    }
    kanaPunctuationStats[punct]++;
  });
});

console.log('\n📊 kana 標點符號統計:');
Object.entries(kanaPunctuationStats)
  .sort(([,a], [,b]) => b - a)
  .forEach(([punct, count]) => {
    console.log(`  ${punct}: ${count} 次`);
  });

// 按文件統計
console.log('\n📊 按文件統計 kana 標點符號問題:');
const fileStats = {};
allKanaPunctuationWords.forEach(item => {
  if (!fileStats[item.file]) {
    fileStats[item.file] = 0;
  }
  fileStats[item.file]++;
});

Object.entries(fileStats)
  .sort(([,a], [,b]) => b - a)
  .forEach(([file, count]) => {
    console.log(`  ${file}: ${count} 個`);
  });

console.log('\n🔍 kana 標點符號檢查完成！');
console.log('\n⚠️  這些詞彙會影響遊戲體驗，因為用戶無法輸入標點符號！'); 