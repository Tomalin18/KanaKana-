const fs = require('fs');
const path = require('path');

function convertJLPTFormat() {
  console.log('🔄 開始轉換JLPT格式以解決TypeScript複雜度問題...');

  const inputFile = path.join(__dirname, '../src/data/vocabulary-final/jlpt-n3-n2-updated.ts');
  const outputFile = path.join(__dirname, '../src/data/vocabulary-final/jlpt-n3-n2-fixed.ts');

  try {
    // Read the original file
    const content = fs.readFileSync(inputFile, 'utf8');
    
    // Extract the array content
    const arrayMatch = content.match(/export const JLPT_N3_N2_WORDS: TetrisWord\[\] = (\[[\s\S]*?\]);/);
    
    if (!arrayMatch) {
      console.error('❌ 無法找到JLPT_N3_N2_WORDS陣列');
      return;
    }

    // Parse the array as JSON
    let arrayContent = arrayMatch[1];
    
    // Clean up the array content for JSON parsing
    arrayContent = arrayContent
      .replace(/\/\/.*$/gm, '') // Remove single line comments
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments
      .replace(/\s+/g, ' ') // Normalize whitespace
      .replace(/,(\s*})/g, '$1') // Remove trailing commas
      .replace(/,(\s*\])/g, '$1'); // Remove trailing commas

    let words;
    try {
      words = JSON.parse(arrayContent);
    } catch (e) {
      console.error('❌ JSON解析失敗:', e.message);
      return;
    }

    console.log(`📊 找到 ${words.length} 個單字`);

    // Create the new format
    const createTetrisWordFunction = `const createTetrisWord = (
  word: string,
  kana: string,
  meaning: string,
  difficulty: DifficultyLevel,
  jlptLevel: 'n2' | 'n3',
  id: string,
  kanji?: string
): TetrisWord => ({
  word,
  kana,
  meaning,
  chineseMeaning: meaning,
  difficulty,
  category: '一般',
  kanji: kanji || (/\\u4e00-\\u9faf/.test(word) ? word : undefined),
  isKanji: /\\u4e00-\\u9faf/.test(word),
  jlptLevel,
  id
});`;

    // Convert words to the new format
    const wordEntries = words.map(word => {
      const kanji = word.kanji || (/\u4e00-\u9faf/.test(word.word) ? word.word : undefined);
      return `  createTetrisWord("${word.word}", "${word.kana}", "${word.meaning}", "${word.difficulty}", "${word.jlptLevel}", "${word.id}", ${kanji ? `"${kanji}"` : 'undefined'})`;
    });

    // Create the new file content
    const newContent = `import type { DifficultyLevel } from '../../types';

/**
 * JLPT_N3_N2_WORDS - JLPT N3和N2詞彙庫 (修復版)
 * 
 * 🔄 生成時間: ${new Date().toISOString()}
 * 📊 總詞彙數量: ${words.length} 個
 * 📚 N3詞彙數量: ${words.filter(w => w.jlptLevel === 'n3').length} 個
 * 📚 N2詞彙數量: ${words.filter(w => w.jlptLevel === 'n2').length} 個
 * ✨ 來源: https://github.com/jamsinclair/open-anki-jlpt-decks
 * 🔍 已過濾包含「～」的單字
 */

export interface TetrisWord {
  word: string;
  kana: string;
  meaning: string;
  chineseMeaning: string;
  difficulty: DifficultyLevel;
  category: string;
  kanji?: string;
  isKanji?: boolean;
  jlptLevel?: 'n1' | 'n2' | 'n3' | 'n4' | 'n5';
  id?: string;
}

// Use a more efficient approach to avoid TypeScript complexity issues
${createTetrisWordFunction}

// Create the vocabulary array using the helper function
export const JLPT_N3_N2_WORDS: TetrisWord[] = [
${wordEntries.join(',\n')}
];`;

    // Write the new file
    fs.writeFileSync(outputFile, newContent, 'utf8');

    console.log(`✅ 轉換完成！新檔案已保存至: ${outputFile}`);
    console.log(`📊 統計資訊:`);
    console.log(`   - 總單字數: ${words.length} 個`);
    console.log(`   - N3單字: ${words.filter(w => w.jlptLevel === 'n3').length} 個`);
    console.log(`   - N2單字: ${words.filter(w => w.jlptLevel === 'n2').length} 個`);

  } catch (error) {
    console.error('❌ 轉換過程中發生錯誤:', error.message);
  }
}

convertJLPTFormat(); 