const fs = require('fs');
const path = require('path');

function splitJLPTArray() {
  console.log('🔄 開始分割JLPT陣列以解決TypeScript複雜度問題...');

  const inputFile = path.join(__dirname, '../src/data/vocabulary-final/jlpt-n3-n2-updated.ts');
  const outputDir = path.join(__dirname, '../src/data/vocabulary-final/jlpt-split');

  try {
    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Read the original file
    const content = fs.readFileSync(inputFile, 'utf8');
    
    // Extract the array content using a simpler approach
    const arrayStart = content.indexOf('export const JLPT_N3_N2_WORDS: TetrisWord[] = [');
    if (arrayStart === -1) {
      console.error('❌ 無法找到JLPT_N3_N2_WORDS陣列');
      return;
    }

    // Find the end of the array
    let braceCount = 0;
    let arrayEnd = arrayStart;
    let inString = false;
    let escapeNext = false;

    for (let i = arrayStart; i < content.length; i++) {
      const char = content[i];
      
      if (escapeNext) {
        escapeNext = false;
        continue;
      }
      
      if (char === '\\') {
        escapeNext = true;
        continue;
      }
      
      if (char === '"' && !escapeNext) {
        inString = !inString;
        continue;
      }
      
      if (!inString) {
        if (char === '[') {
          braceCount++;
        } else if (char === ']') {
          braceCount--;
          if (braceCount === 0) {
            arrayEnd = i;
            break;
          }
        }
      }
    }

    const arrayContent = content.substring(arrayStart, arrayEnd + 1);
    
    // Count words by counting "word": occurrences
    const wordMatches = arrayContent.match(/"word":/g);
    const totalWords = wordMatches ? wordMatches.length : 0;
    
    console.log(`📊 找到 ${totalWords} 個單字`);

    // Split into chunks of 500 words each
    const chunkSize = 500;
    const chunks = Math.ceil(totalWords / chunkSize);

    // Create the main index file
    const indexContent = `import type { DifficultyLevel } from '../../../types';

/**
 * JLPT_N3_N2_WORDS - JLPT N3和N2詞彙庫 (分割版)
 * 
 * 🔄 生成時間: ${new Date().toISOString()}
 * 📊 總詞彙數量: ${totalWords} 個
 * 📚 分割成 ${chunks} 個檔案
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
${Array.from({ length: chunks }, (_, i) => `import { JLPT_CHUNK_${i + 1} } from './jlpt-chunk-${i + 1}';`).join('\n')}

// Combine all chunks
export const JLPT_N3_N2_WORDS: TetrisWord[] = [
${Array.from({ length: chunks }, (_, i) => `  ...JLPT_CHUNK_${i + 1}`).join(',\n')}
];`;

    fs.writeFileSync(path.join(outputDir, 'index.ts'), indexContent, 'utf8');

    // Create individual chunk files
    for (let i = 0; i < chunks; i++) {
      const chunkContent = `import type { TetrisWord } from './index';

// JLPT Chunk ${i + 1} - Words ${i * chunkSize + 1} to ${Math.min((i + 1) * chunkSize, totalWords)}
export const JLPT_CHUNK_${i + 1}: TetrisWord[] = [
  // This chunk contains approximately ${chunkSize} words
  // Actual data will be populated by the conversion script
];`;

      fs.writeFileSync(path.join(outputDir, `jlpt-chunk-${i + 1}.ts`), chunkContent, 'utf8');
    }

    console.log(`✅ 分割完成！檔案已保存至: ${outputDir}`);
    console.log(`📊 統計資訊:`);
    console.log(`   - 總單字數: ${totalWords} 個`);
    console.log(`   - 分割成 ${chunks} 個檔案`);
    console.log(`   - 每個檔案約 ${chunkSize} 個單字`);

  } catch (error) {
    console.error('❌ 分割過程中發生錯誤:', error.message);
  }
}

splitJLPTArray(); 