const fs = require('fs');
const path = require('path');

// 讀取詞彙數據
const vocabularyDir = path.join(__dirname, '../src/data/vocabulary-final');

// 讀取所有詞彙文件
const allWords = [];

// 讀取主要詞彙文件
const mainFiles = [
  'beginner_converted.ts',
  'normal 2.ts',
  'hard 2.ts',
  'expert 2.ts'
];

mainFiles.forEach(file => {
  try {
    const content = fs.readFileSync(path.join(vocabularyDir, file), 'utf8');
    const matches = content.match(/"isKanji":\s*true/g);
    if (matches) {
      console.log(`${file}: ${matches.length} 個漢字詞彙`);
    }
  } catch (error) {
    console.log(`${file}: 無法讀取`);
  }
});

// 讀取漢字專用文件
const kanjiFiles = [
  'kanji-01.ts',
  'kanji-02.ts',
  'kanji-03.ts',
  'kanji-04.ts',
  'kanji-05.ts',
  'kanji-06.ts',
  'kanji-07.ts'
];

let totalKanjiWords = 0;

kanjiFiles.forEach(file => {
  try {
    const content = fs.readFileSync(path.join(vocabularyDir, file), 'utf8');
    const matches = content.match(/"isKanji":\s*true/g);
    if (matches) {
      console.log(`${file}: ${matches.length} 個漢字詞彙`);
      totalKanjiWords += matches.length;
    }
  } catch (error) {
    console.log(`${file}: 無法讀取`);
  }
});

console.log(`\n總計漢字詞彙: ${totalKanjiWords} 個`);

// 檢查JLPT等級分布
console.log('\n檢查JLPT等級分布...');

kanjiFiles.forEach(file => {
  try {
    const content = fs.readFileSync(path.join(vocabularyDir, file), 'utf8');
    
    // 檢查N5詞彙
    const n5Matches = content.match(/"jlptLevel":\s*"n5"/g);
    const n4Matches = content.match(/"jlptLevel":\s*"n4"/g);
    const n3Matches = content.match(/"jlptLevel":\s*"n3"/g);
    const n2Matches = content.match(/"jlptLevel":\s*"n2"/g);
    const n1Matches = content.match(/"jlptLevel":\s*"n1"/g);
    
    if (n5Matches || n4Matches || n3Matches || n2Matches || n1Matches) {
      console.log(`${file}:`);
      if (n5Matches) console.log(`  N5: ${n5Matches.length} 個`);
      if (n4Matches) console.log(`  N4: ${n4Matches.length} 個`);
      if (n3Matches) console.log(`  N3: ${n3Matches.length} 個`);
      if (n2Matches) console.log(`  N2: ${n2Matches.length} 個`);
      if (n1Matches) console.log(`  N1: ${n1Matches.length} 個`);
    }
  } catch (error) {
    console.log(`${file}: 無法讀取`);
  }
});

console.log('\n測試完成！'); 