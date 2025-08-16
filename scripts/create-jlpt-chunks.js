const fs = require('fs');
const path = require('path');

function createJLPTChunks() {
  console.log('🔄 開始創建JLPT分塊檔案以解決TypeScript複雜度問題...');

  const outputDir = path.join(__dirname, '../src/data/vocabulary-final/jlpt-chunks');
  
  try {
    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Generate sample data for demonstration
    // In a real scenario, this would be the full 3781 words
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
        word: "覚ます",
        kana: "さます",
        meaning: "to awaken",
        chineseMeaning: "to awaken",
        difficulty: "normal",
        category: "一般",
        kanji: "覚ます",
        isKanji: true,
        jlptLevel: "n3",
        id: "t9@aJ[u<UZ"
      },
      {
        word: "冷める",
        kana: "さめる",
        meaning: "to become cool, to wear off",
        chineseMeaning: "to become cool, to wear off",
        difficulty: "normal",
        category: "一般",
        kanji: "冷める",
        isKanji: true,
        jlptLevel: "n3",
        id: "LR.A;82:W|"
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
      },
      {
        word: "ワンピース",
        kana: "ワンピース",
        meaning: "one-piece dress",
        chineseMeaning: "one-piece dress",
        difficulty: "hard",
        category: "一般",
        kanji: undefined,
        isKanji: false,
        jlptLevel: "n2",
        id: "GmGAkPKtVr"
      }
    ];

    // Split into chunks of 100 words each
    const chunkSize = 100;
    const chunks = [];
    
    for (let i = 0; i < sampleWords.length; i += chunkSize) {
      chunks.push(sampleWords.slice(i, i + chunkSize));
    }

    // Create individual chunk files
    chunks.forEach((chunk, index) => {
      const chunkNumber = index + 1;
      const chunkContent = `import type { TetrisWord } from '../types';

// JLPT Chunk ${chunkNumber} - Words ${index * chunkSize + 1} to ${index * chunkSize + chunk.length}
export const JLPT_CHUNK_${chunkNumber}: TetrisWord[] = ${JSON.stringify(chunk, null, 2)};`;

      fs.writeFileSync(path.join(outputDir, `chunk-${chunkNumber}.ts`), chunkContent, 'utf8');
    });

    // Create the main index file
    const indexContent = `import type { DifficultyLevel } from '../../../types';

/**
 * JLPT_N3_N2_WORDS - JLPT N3和N2詞彙庫 (分塊版)
 * 
 * 🔄 生成時間: ${new Date().toISOString()}
 * 📊 總詞彙數量: ${sampleWords.length} 個 (示例)
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

    console.log(`✅ 分塊完成！檔案已保存至: ${outputDir}`);
    console.log(`📊 統計資訊:`);
    console.log(`   - 總單字數: ${sampleWords.length} 個 (示例)`);
    console.log(`   - 分割成 ${chunks.length} 個檔案`);
    console.log(`   - 每個檔案約 ${chunkSize} 個單字`);

  } catch (error) {
    console.error('❌ 創建分塊檔案過程中發生錯誤:', error.message);
  }
}

createJLPTChunks(); 