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

console.log('🔍 檢查詞彙文件中的標點符號...\n');

let totalPunctuationWords = 0;
const allPunctuationWords = [];

filesToCheck.forEach(file => {
  try {
    const filePath = path.join(vocabularyDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // 提取所有詞彙對象
    const wordMatches = content.match(/\{[^}]+\}/g);
    let filePunctuationWords = 0;
    
    if (wordMatches) {
      wordMatches.forEach(wordMatch => {
        // 檢查是否包含 word 和 kana 字段
        const wordMatchResult = wordMatch.match(/"word":\s*"([^"]+)"/);
        const kanaMatchResult = wordMatch.match(/"kana":\s*"([^"]+)"/);
        
        if (wordMatchResult && kanaMatchResult) {
          const word = wordMatchResult[1];
          const kana = kanaMatchResult[1];
          
          // 檢查是否包含標點符號
          let hasPunctuation = false;
          let punctuationFound = [];
          
          // 檢查分號
          if (word.includes(';') || kana.includes(';')) {
            hasPunctuation = true;
            if (!punctuationFound.includes(';')) {
              punctuationFound.push(';');
            }
          }
          
          // 檢查括號
          if (word.includes('(') || word.includes(')') || kana.includes('(') || kana.includes(')')) {
            hasPunctuation = true;
            if (!punctuationFound.includes('()')) {
              punctuationFound.push('()');
            }
          }
          
          // 檢查波浪號
          if (word.includes('～') || kana.includes('～')) {
            hasPunctuation = true;
            if (!punctuationFound.includes('～')) {
              punctuationFound.push('～');
            }
          }
          
          // 檢查其他標點符號
          const otherPunctuation = /[,，.。!！?？:：\[\]【】\{\}｛｝\/／\\＼\|｜\-－\_＿\`｀\@＠\#＃\$＄\%％\^＾\&＆\*＊\+＋\=＝]/g;
          
          if (otherPunctuation.test(word) || otherPunctuation.test(kana)) {
            hasPunctuation = true;
            const matches = [...word.matchAll(otherPunctuation), ...kana.matchAll(otherPunctuation)];
            matches.forEach(match => {
              if (!punctuationFound.includes(match[0])) {
                punctuationFound.push(match[0]);
              }
            });
          }
          
          if (hasPunctuation) {
            filePunctuationWords++;
            totalPunctuationWords++;
            
            const punctuationWord = {
              file,
              word,
              kana,
              punctuation: punctuationFound.join(', '),
              fullMatch: wordMatch
            };
            
            allPunctuationWords.push(punctuationWord);
            
            console.log(`📝 ${file}:`);
            console.log(`   Word: "${word}"`);
            console.log(`   Kana: "${kana}"`);
            console.log(`   標點符號: ${punctuationFound.join(', ')}`);
            console.log('');
          }
        }
      });
    }
    
    if (filePunctuationWords > 0) {
      console.log(`📊 ${file}: 發現 ${filePunctuationWords} 個包含標點符號的詞彙\n`);
    }
    
  } catch (error) {
    console.log(`❌ 無法讀取文件 ${file}: ${error.message}`);
  }
});

console.log('='.repeat(50));
console.log(`📈 總計發現 ${totalPunctuationWords} 個包含標點符號的詞彙`);
console.log('='.repeat(50));

// 按標點符號類型分類統計
const punctuationStats = {};
allPunctuationWords.forEach(item => {
  item.punctuation.split(', ').forEach(punct => {
    if (!punctuationStats[punct]) {
      punctuationStats[punct] = 0;
    }
    punctuationStats[punct]++;
  });
});

console.log('\n📊 標點符號統計:');
Object.entries(punctuationStats)
  .sort(([,a], [,b]) => b - a)
  .forEach(([punct, count]) => {
    console.log(`  ${punct}: ${count} 次`);
  });

console.log('\n🔍 檢查完成！'); 