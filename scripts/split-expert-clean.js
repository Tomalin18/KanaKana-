const fs = require('fs');
const path = require('path');

function splitExpertVocabulary() {
  console.log('🔄 開始分割 expert 詞彙檔案，保留所有資料...');

  const inputFile = path.join(__dirname, '../src/data/vocabulary-final/expert.ts');
  const outputDir = path.join(__dirname, '../src/data/vocabulary-final/expert-chunks');

  try {
    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Read the original file
    const content = fs.readFileSync(inputFile, 'utf8');
    
    // Split the content into chunks by lines
    const lines = content.split('\n');
    const arrayStartIndex = lines.findIndex(line => line.includes('export const expert: TetrisWord[] = ['));
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
          if (itemContent && itemContent.includes('"word":')) {
            items.push(itemContent);
          }
          currentItem = [];
        }
      } else if (braceCount > 0) {
        currentItem.push(line);
      }
    }

    // Filter out any empty or invalid items
    const validItems = items.filter(item => item && item.trim() && item.includes('"word":'));

    console.log(`�� 成功解析 ${validItems.length} 個詞彙項目`);

    // Split into chunks of 2000 words each
    const chunkSize = 2000;
    const chunks = Math.ceil(validItems.length / chunkSize);

    console.log(`📊 將分割成 ${chunks} 個檔案`);

    // Create the main index file that maintains the same interface
    const indexContent = `import { TetrisWord, DifficultyLevel } from '../index';

/**
 * Expert Vocabulary - 專家級詞彙庫 (分割版)
 * 
 * 🔄 生成時間: ${new Date().toISOString()}
 * 📊 總詞彙數量: ${validItems.length} 個
 * 分割成 ${chunks} 個檔案
 * ✨ 保持與原始 expert.ts 完全相同的介面
 * 💾 保留所有原始資料
 */

// Import all chunks
${Array.from({ length: chunks }, (_, i) => `import { EXPERT_CHUNK_${i + 1} } from './expert-chunk-${i + 1}';`).join('\n')}

// Combine all chunks to maintain the same interface
export const expert: TetrisWord[] = [
${Array.from({ length: chunks }, (_, i) => `  ...EXPERT_CHUNK_${i + 1}`).join(',\n')}
];`;

    fs.writeFileSync(path.join(outputDir, 'index.ts'), indexContent, 'utf8');

    // Create individual chunk files
    for (let i = 0; i < chunks; i++) {
      const startIndex = i * chunkSize;
      const endIndex = Math.min((i + 1) * chunkSize, validItems.length);
      const chunkItems = validItems.slice(startIndex, endIndex);

      const chunkContent = `import { TetrisWord } from '../index';

// Expert Chunk ${i + 1} - Words ${startIndex + 1} to ${endIndex}
export const EXPERT_CHUNK_${i + 1}: TetrisWord[] = [
${chunkItems.join(',\n')}
];`;

      fs.writeFileSync(path.join(outputDir, `expert-chunk-${i + 1}.ts`), chunkContent, 'utf8');
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

splitExpertVocabulary();
