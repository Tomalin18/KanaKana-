const fs = require('fs');
const path = require('path');

// Parse CSV function
function parseCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const headers = lines[0].split(',');
  const data = [];

  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '') continue;

    // Handle CSV parsing with quoted fields
    const values = [];
    let current = '';
    let inQuotes = false;

    for (let j = 0; j < lines[i].length; j++) {
      const char = lines[i][j];

      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());

    const row = {};
    headers.forEach((header, index) => {
      row[header.trim()] = values[index] || '';
    });

    data.push(row);
  }

  return data;
}

// Filter words containing ～
function filterWords(data) {
  return data.filter(row => {
    const expression = row.expression || '';
    const reading = row.reading || '';
    const meaning = row.meaning || '';

    return !expression.includes('～') &&
           !reading.includes('～') &&
           !meaning.includes('～');
  });
}

// Convert to TetrisWord format
function convertToTetrisWord(row, jlptLevel) {
  const expression = row.expression || '';
  const reading = row.reading || '';
  const meaning = row.meaning || '';
  const guid = row.guid || '';

  const isKanji = /[\u4e00-\u9faf]/.test(expression);
  const difficulty = jlptLevel === 'n2' ? 'hard' : 'normal';

  return {
    word: expression,
    kana: reading,
    meaning: meaning,
    chineseMeaning: meaning,
    difficulty: difficulty,
    category: '一般',
    kanji: isKanji ? expression : undefined,
    isKanji: isKanji,
    jlptLevel: jlptLevel,
    id: guid
  };
}

function createFullJLPTChunks() {
  console.log('🔄 開始創建完整的JLPT分塊檔案...');

  const outputDir = path.join(__dirname, '../src/data/vocabulary-final/jlpt-chunks');
  
  try {
    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Check if we have the CSV files
    const n3File = path.join(__dirname, 'n3.csv');
    const n2File = path.join(__dirname, 'n2.csv');

    if (!fs.existsSync(n3File) || !fs.existsSync(n2File)) {
      console.log('📥 下載JLPT CSV檔案...');
      
      // Download the files
      const https = require('https');
      
      function downloadFile(url, filename) {
        return new Promise((resolve, reject) => {
          const file = fs.createWriteStream(filename);
          https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
              file.close();
              resolve();
            });
          }).on('error', reject);
        });
      }

      Promise.all([
        downloadFile('https://raw.githubusercontent.com/jamsinclair/open-anki-jlpt-decks/main/src/n3.csv', n3File),
        downloadFile('https://raw.githubusercontent.com/jamsinclair/open-anki-jlpt-decks/main/src/n2.csv', n2File)
      ]).then(() => {
        console.log('✅ CSV檔案下載完成');
        processData();
      }).catch(error => {
        console.error('❌ 下載失敗:', error.message);
        // Use sample data instead
        createSampleChunks();
      });
    } else {
      processData();
    }

    function processData() {
      console.log('📊 處理JLPT資料...');

      // Read and process N3 data
      const n3Data = parseCSV(n3File);
      const filteredN3 = filterWords(n3Data);
      const n3Words = filteredN3.map(row => convertToTetrisWord(row, 'n3'));

      // Read and process N2 data
      const n2Data = parseCSV(n2File);
      const filteredN2 = filterWords(n2Data);
      const n2Words = filteredN2.map(row => convertToTetrisWord(row, 'n2'));

      // Combine and deduplicate
      const allWords = [...n3Words, ...n2Words];
      const uniqueWords = [];
      const seen = new Set();

      allWords.forEach(word => {
        const key = `${word.word}-${word.kana}`;
        if (!seen.has(key)) {
          seen.add(key);
          uniqueWords.push(word);
        }
      });

      console.log(`📊 處理完成: ${uniqueWords.length} 個單字`);

      // Split into chunks of 500 words each
      const chunkSize = 500;
      const chunks = [];
      
      for (let i = 0; i < uniqueWords.length; i += chunkSize) {
        chunks.push(uniqueWords.slice(i, i + chunkSize));
      }

      // Create individual chunk files
      chunks.forEach((chunk, index) => {
        const chunkNumber = index + 1;
        const chunkContent = `import type { DifficultyLevel } from '../../../types';

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

// JLPT Chunk ${chunkNumber} - Words ${index * chunkSize + 1} to ${index * chunkSize + chunk.length}
export const JLPT_CHUNK_${chunkNumber}: TetrisWord[] = ${JSON.stringify(chunk, null, 2)};`;

        fs.writeFileSync(path.join(outputDir, `chunk-${chunkNumber}.ts`), chunkContent, 'utf8');
      });

      // Create the main index file
      const indexContent = `import type { DifficultyLevel } from '../../../types';

/**
 * JLPT_N3_N2_WORDS - JLPT N3和N2詞彙庫 (完整分塊版)
 * 
 * 🔄 生成時間: ${new Date().toISOString()}
 * 📊 總詞彙數量: ${uniqueWords.length} 個
 * 📚 N3詞彙數量: ${n3Words.length} 個
 * 📚 N2詞彙數量: ${n2Words.length} 個
 * 📚 分割成 ${chunks.length} 個檔案
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

// Import all chunks
${chunks.map((_, i) => `import { JLPT_CHUNK_${i + 1} } from './chunk-${i + 1}';`).join('\n')}

// Combine all chunks
export const JLPT_N3_N2_WORDS: TetrisWord[] = [
${chunks.map((_, i) => `  ...JLPT_CHUNK_${i + 1}`).join(',\n')}
];`;

      fs.writeFileSync(path.join(outputDir, 'index.ts'), indexContent, 'utf8');

      console.log(`✅ 完整分塊完成！檔案已保存至: ${outputDir}`);
      console.log(`📊 統計資訊:`);
      console.log(`   - 總單字數: ${uniqueWords.length} 個`);
      console.log(`   - N3單字: ${n3Words.length} 個`);
      console.log(`   - N2單字: ${n2Words.length} 個`);
      console.log(`   - 分割成 ${chunks.length} 個檔案`);
      console.log(`   - 每個檔案約 ${chunkSize} 個單字`);

      // Clean up CSV files
      if (fs.existsSync(n3File)) fs.unlinkSync(n3File);
      if (fs.existsSync(n2File)) fs.unlinkSync(n2File);
    }

    function createSampleChunks() {
      console.log('📝 使用示例資料創建分塊檔案...');
      
      // Use the sample data we already have
      const sampleWords = [
        {
          word: "作法",
          kana: "さほう",
          meaning: "manners, etiquette, propriety",
          chineseMeaning: "manners, etiquette, propriety",
          difficulty: "normal",
          category: "一般",
          kanji: "作法",
          isKanji: true,
          jlptLevel: "n3",
          id: "HYeQ[!t+v+"
        },
        {
          word: "様々",
          kana: "さまざま",
          meaning: "varied, various",
          chineseMeaning: "varied, various",
          difficulty: "normal",
          category: "一般",
          kanji: "様々",
          isKanji: true,
          jlptLevel: "n3",
          id: "l>?/o{CjV<"
        },
        {
          word: "冷ます",
          kana: "さます",
          meaning: "to cool, to let cool",
          chineseMeaning: "to cool, to let cool",
          difficulty: "normal",
          category: "一般",
          kanji: "冷ます",
          isKanji: true,
          jlptLevel: "n3",
          id: "m(o0n4^}Z$"
        },
        {
          word: "割引",
          kana: "わりびき",
          meaning: "discount",
          chineseMeaning: "discount",
          difficulty: "hard",
          category: "一般",
          kanji: "割引",
          isKanji: true,
          jlptLevel: "n2",
          id: "G*#PQ&xZe;"
        }
      ];

      // Create chunk file
      const chunkContent = `import type { DifficultyLevel } from '../../../types';

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

// JLPT Chunk 1 - Sample Words
export const JLPT_CHUNK_1: TetrisWord[] = ${JSON.stringify(sampleWords, null, 2)};`;

      fs.writeFileSync(path.join(outputDir, 'chunk-1.ts'), chunkContent, 'utf8');

      // Create index file
      const indexContent = `import type { DifficultyLevel } from '../../../types';

/**
 * JLPT_N3_N2_WORDS - JLPT N3和N2詞彙庫 (示例分塊版)
 * 
 * 🔄 生成時間: ${new Date().toISOString()}
 * 📊 總詞彙數量: ${sampleWords.length} 個 (示例)
 * 📚 分割成 1 個檔案
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

// Import all chunks
import { JLPT_CHUNK_1 } from './chunk-1';

// Combine all chunks
export const JLPT_N3_N2_WORDS: TetrisWord[] = [
  ...JLPT_CHUNK_1
];`;

      fs.writeFileSync(path.join(outputDir, 'index.ts'), indexContent, 'utf8');

      console.log(`✅ 示例分塊完成！檔案已保存至: ${outputDir}`);
      console.log(`📊 統計資訊:`);
      console.log(`   - 總單字數: ${sampleWords.length} 個 (示例)`);
      console.log(`   - 分割成 1 個檔案`);
    }

  } catch (error) {
    console.error('❌ 創建分塊檔案過程中發生錯誤:', error.message);
  }
}

createFullJLPTChunks(); 