const fs = require('fs');
const path = require('path');

function splitHardVocabulary() {
  console.log('🔄 開始分割 hard 2.ts 詞彙檔案，參考之前的分割格式...');

  const inputFile = path.join(__dirname, '../src/data/vocabulary-final/hard 2.ts');
  const outputDir = path.join(__dirname, '../src/data/vocabulary-final/hard-split');

  try {
    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Read the original file
    const content = fs.readFileSync(inputFile, 'utf8');
    
    // Split the content into chunks by lines
    const lines = content.split('\n');
    const arrayStartIndex = lines.findIndex(line => line.includes('export const HARD_WORDS: TetrisWord[] = ['));
    const arrayEndIndex = lines.findIndex((line, index) => index > arrayStartIndex && line.trim() === '];');
    
    if (arrayStartIndex === -1 || arrayEndIndex === -1) {
      console.error('❌ 無法找到陣列的開始或結束');
      return;
    }

    const arrayLines = lines.slice(arrayStartIndex + 1, arrayEndIndex);
    const items = [];
    let currentItem = [];
    let braceCount = 0;

    for (const line of arrayLines) {
      if (line.trim().startsWith('{')) {
        braceCount = 1;
        currentItem = [line];
      } else if (line.trim().startsWith('}')) {
        braceCount--;
        currentItem.push(line);
        if (braceCount === 0) {
          const itemContent = currentItem.join('\n').trim();
          if (itemContent && (itemContent.includes('word:') || itemContent.includes('"word":'))) {
            // Remove trailing comma if present
            const cleanItem = itemContent.replace(/,\s*$/, '');
            items.push(cleanItem);
          }
          currentItem = [];
        }
      } else if (braceCount > 0) {
        currentItem.push(line);
      }
    }

    // Filter out any empty or invalid items
    const validItems = items.filter(item => item && item.trim() && (item.includes('word:') || item.includes('"word":')));

    console.log(`📝 成功解析 ${validItems.length} 個詞彙項目`);

    // Split into chunks of 1000 words each
    const chunkSize = 1000;
    const chunks = Math.ceil(validItems.length / chunkSize);

    console.log(`📚 將分割成 ${chunks} 個檔案`);

    // Create the main index file that maintains the same interface
    const indexContent = `import { TetrisWord, DifficultyLevel } from '../index';

/**
 * Hard Vocabulary - 高級詞彙庫 (分割版)
 * 
 * 🔄 生成時間: ${new Date().toISOString()}
 * 📊 總詞彙數量: ${validItems.length} 個
 * 分割成 ${chunks} 個檔案
 * ✨ 保持與原始 hard 2.ts 完全相同的介面
 * 💾 保留所有原始資料
 */

// Import all chunks
${Array.from({ length: chunks }, (_, i) => `import { HARD_CHUNK_${i + 1} } from './hard-chunk-${i + 1}';`).join('\n')}

// Combine all chunks to maintain the same interface
export const HARD_WORDS: TetrisWord[] = [
${Array.from({ length: chunks }, (_, i) => `  ...HARD_CHUNK_${i + 1}`).join(',\n')}
];`;

    fs.writeFileSync(path.join(outputDir, 'index.ts'), indexContent, 'utf8');

    // Create individual chunk files
    for (let i = 0; i < chunks; i++) {
      const startIndex = i * chunkSize;
      const endIndex = Math.min((i + 1) * chunkSize, validItems.length);
      const chunkItems = validItems.slice(startIndex, endIndex);

      const chunkContent = `import type { DifficultyLevel } from '../../../types';

/**
 * HARD_CHUNK_${i + 1} - Hard Vocabulary Chunk ${i + 1}
 * 
 * 🔄 生成時間: ${new Date().toISOString()}
 * 📊 單字數量: ${chunkItems.length} 個
 * 📈 範圍: ${startIndex + 1} - ${endIndex}
 */

export interface TetrisWord {
  id?: string;
  word: string;
  kana: string;
  meaning: string;
  chineseMeaning?: string;
  difficulty: DifficultyLevel;
  category: string;
  jlptLevel?: 'n1' | 'n2' | 'n3' | 'n4' | 'n5';
  kanji?: string;
  isKanji?: boolean;
  complexity?: number;
}

export const HARD_CHUNK_${i + 1}: TetrisWord[] = [
${chunkItems.map((item, index) => {
  // Add comma to all items except the last one
  if (index === chunkItems.length - 1) {
    return item;
  }
  return item + ',';
}).join('\n')}
];`;

      fs.writeFileSync(path.join(outputDir, `hard-chunk-${i + 1}.ts`), chunkContent, 'utf8');
      console.log(`✅ 創建 chunk ${i + 1}: ${chunkItems.length} 個詞彙`);
    }

    console.log(`✅ 分割完成！檔案已保存至: ${outputDir}`);
    console.log(`📊 統計資訊:`);
    console.log(`   - 總單字數: ${validItems.length} 個`);
    console.log(`   - 分割成 ${chunks} 個檔案`);
    console.log(`   - 每個檔案約 ${chunkSize} 個單字`);
    console.log(`   - 所有資料已保留`);

  } catch (error) {
    console.error('❌ 分割過程中發生錯誤:', error.message);
  }
}

splitHardVocabulary(); 