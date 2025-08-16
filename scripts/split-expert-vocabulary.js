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
    
    // Extract the array content
    const arrayStart = content.indexOf('export const expert: TetrisWord[] = [');
    if (arrayStart === -1) {
      console.error('❌ 無法找到 expert 陣列');
      return;
    }

    // Find the end of the array
    let braceCount = 0;
    let arrayEnd = arrayStart;
    let inString1 = false;
    let escapeNext1 = false;

    for (let i = arrayStart; i < content.length; i++) {
      const char = content[i];
      
      if (escapeNext1) {
        escapeNext1 = false;
        continue;
      }
      
      if (char === '\\') {
        escapeNext1 = true;
        continue;
      }
      
      if (char === '"' && !escapeNext1) {
        inString1 = !inString1;
        continue;
      }
      
      if (!inString1) {
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
    
    console.log(` 找到 ${totalWords} 個單字`);

    // Split into chunks of 2000 words each (smaller chunks for better performance)
    const chunkSize = 2000;
    const chunks = Math.ceil(totalWords / chunkSize);

    // Create the main index file that maintains the same interface
    const indexContent = `import { TetrisWord, DifficultyLevel } from '../index';

/**
 * Expert Vocabulary - 專家級詞彙庫 (分割版)
 * 
 * �� 生成時間: ${new Date().toISOString()}
 * 📊 總詞彙數量: ${totalWords} 個
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

    // Split the array content into chunks
    const arrayItems = [];
    let currentItem = '';
    let braceLevel = 0;
    let inString2 = false;
    let escapeNext2 = false;

    // Start from the first { after the opening [
    let startPos = arrayContent.indexOf('[') + 1;
    
    for (let i = startPos; i < arrayContent.length; i++) {
      const char = arrayContent[i];
      
      if (escapeNext2) {
        currentItem += char;
        escapeNext2 = false;
        continue;
      }
      
      if (char === '\\') {
        currentItem += char;
        escapeNext2 = true;
        continue;
      }
      
      if (char === '"' && !escapeNext2) {
        inString2 = !inString2;
        currentItem += char;
        continue;
      }
      
      if (!inString2) {
        if (char === '{') {
          braceLevel++;
          currentItem += char;
        } else if (char === '}') {
          braceLevel--;
          currentItem += char;
          if (braceLevel === 0) {
            // End of an object
            arrayItems.push(currentItem.trim());
            currentItem = '';
          }
        } else {
          currentItem += char;
        }
      } else {
        currentItem += char;
      }
    }

    console.log(`📝 成功解析 ${arrayItems.length} 個詞彙項目`);

    // Create individual chunk files
    for (let i = 0; i < chunks; i++) {
      const startIndex = i * chunkSize;
      const endIndex = Math.min((i + 1) * chunkSize, arrayItems.length);
      const chunkItems = arrayItems.slice(startIndex, endIndex);

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
    console.log(`   - 總單字數: ${totalWords} 個`);
    console.log(`   - 分割成 ${chunks} 個檔案`);
    console.log(`   - 每個檔案約 ${chunkSize} 個單字`);
    console.log(`   - 所有資料已保留`);

  } catch (error) {
    console.error('❌ 分割過程中發生錯誤:', error.message);
  }
}

splitExpertVocabulary();
