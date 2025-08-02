const fs = require('fs');
const path = require('path');

// 詞彙文件目錄
const vocabularyDir = path.join(__dirname, '../src/data/vocabulary-final');

// 要修復的文件列表
const filesToFix = [
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
  'kanji-07.ts'
];

console.log('🔧 開始修復 kana 標點符號問題...\n');

let totalFixed = 0;
const fixedWords = [];

filesToFix.forEach(file => {
  try {
    const filePath = path.join(vocabularyDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let fileFixed = 0;
    
    console.log(`📝 處理文件: ${file}`);
    
    // 修復分號問題
    const semicolonPattern = /"kana":\s*"([^"]*;+[^"]*)"/g;
    content = content.replace(semicolonPattern, (match, kana) => {
      const parts = kana.split(';').map(part => part.trim()).filter(part => part);
      if (parts.length > 1) {
        // 選擇第一個作為主要讀音，或者根據語境選擇
        let fixedKana = parts[0];
        
        // 特殊處理一些常見情況
        if (kana.includes('いい; よい')) {
          fixedKana = 'いい'; // 選擇更常用的讀音
        } else if (kana.includes('いく; ゆく')) {
          fixedKana = 'いく'; // 選擇更常用的讀音
        } else if (kana.includes('まいげつ; まいつき')) {
          fixedKana = 'まいげつ'; // 選擇更常用的讀音
        } else if (kana.includes('まいねん; まいとし')) {
          fixedKana = 'まいねん'; // 選擇更常用的讀音
        } else if (kana.includes('なん; なに')) {
          fixedKana = 'なん'; // 選擇更常用的讀音
        } else if (kana.includes('かねもち; おかねもち')) {
          fixedKana = 'かねもち'; // 選擇更簡潔的讀音
        } else if (kana.includes('こうこう; こうとうがっこう')) {
          fixedKana = 'こうこう'; // 選擇更簡潔的讀音
        } else if (kana.includes('けれど; けれども')) {
          fixedKana = 'けれど'; // 選擇更簡潔的讀音
        } else if (kana.includes('やはり; やっぱり')) {
          fixedKana = 'やはり'; // 選擇更正式的讀音
        } else if (kana.includes('そうして; そして')) {
          fixedKana = 'そして'; // 選擇更常用的讀音
        } else if (kana.includes('そう; そうです')) {
          fixedKana = 'そうです'; // 選擇更完整的讀音
        } else if (kana.includes('キロ; キログラム')) {
          fixedKana = 'キロ'; // 選擇更簡潔的讀音
        } else if (kana.includes('レポート; リポート')) {
          fixedKana = 'レポート'; // 選擇更常用的讀音
        } else if (kana.includes('コンピュータ; コンピューター')) {
          fixedKana = 'コンピューター'; // 選擇更完整的讀音
        } else if (kana.includes('アイデア; アイディア')) {
          fixedKana = 'アイデア'; // 選擇更常用的讀音
        }
        
        fixedWords.push({
          file,
          original: kana,
          fixed: fixedKana,
          type: 'semicolon'
        });
        
        fileFixed++;
        return `"kana": "${fixedKana}"`;
      }
      return match;
    });
    
    // 修復括號問題
    const bracketPattern = /"kana":\s*"([^"]*\([^)]*\)[^"]*)"/g;
    content = content.replace(bracketPattern, (match, kana) => {
      // 移除括號及其內容
      const fixedKana = kana.replace(/\s*\([^)]*\)/g, '').trim();
      
      if (fixedKana !== kana) {
        fixedWords.push({
          file,
          original: kana,
          fixed: fixedKana,
          type: 'bracket'
        });
        
        fileFixed++;
        return `"kana": "${fixedKana}"`;
      }
      return match;
    });
    
    // 修復波浪號問題
    const tildePattern = /"kana":\s*"([^"]*～[^"]*)"/g;
    content = content.replace(tildePattern, (match, kana) => {
      let fixedKana = kana;
      
      // 特殊處理波浪號
      if (kana === '～だて') {
        fixedKana = 'だて'; // 簡化為核心讀音
      } else if (kana === 'らい～') {
        fixedKana = 'らい'; // 簡化為核心讀音
      } else if (kana === 'が～') {
        fixedKana = 'が'; // 簡化為核心讀音
      } else if (kana.includes('～')) {
        fixedKana = kana.replace(/～/g, ''); // 移除波浪號
      }
      
      if (fixedKana !== kana) {
        fixedWords.push({
          file,
          original: kana,
          fixed: fixedKana,
          type: 'tilde'
        });
        
        fileFixed++;
        return `"kana": "${fixedKana}"`;
      }
      return match;
    });
    
    // 寫回文件
    if (fileFixed > 0) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ ${file}: 修復了 ${fileFixed} 個詞彙`);
      totalFixed += fileFixed;
    } else {
      console.log(`ℹ️  ${file}: 無需修復`);
    }
    
  } catch (error) {
    console.log(`❌ 處理文件 ${file} 時出錯: ${error.message}`);
  }
});

console.log('\n' + '='.repeat(60));
console.log(`📈 修復完成！總計修復了 ${totalFixed} 個詞彙`);
console.log('='.repeat(60));

// 按類型統計修復結果
const typeStats = {};
fixedWords.forEach(item => {
  if (!typeStats[item.type]) {
    typeStats[item.type] = 0;
  }
  typeStats[item.type]++;
});

console.log('\n📊 修復統計:');
Object.entries(typeStats).forEach(([type, count]) => {
  const typeName = {
    'semicolon': '分號',
    'bracket': '括號',
    'tilde': '波浪號'
  }[type];
  console.log(`  ${typeName}: ${count} 個`);
});

console.log('\n📝 詳細修復記錄:');
fixedWords.forEach((item, index) => {
  const typeName = {
    'semicolon': '分號',
    'bracket': '括號',
    'tilde': '波浪號'
  }[item.type];
  console.log(`${index + 1}. ${item.file}: "${item.original}" → "${item.fixed}" (${typeName})`);
});

console.log('\n🔧 修復完成！'); 