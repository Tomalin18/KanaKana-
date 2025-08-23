import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse/sync';

const prisma = new PrismaClient();

interface VocabularyRow {
  word: string;
  kana: string;
  meaning: string;
  chinese_meaning: string;
  difficulty: string;
  category: string;
  jlpt_level: string;
  kanji: string;
  is_kanji: string;
}

async function seedVocabulary() {
  console.log('🌱 Starting vocabulary seed...');

  // 讀取 CSV 檔案
  const csvPath = process.argv[2] || '/Users/hcy/Downloads/單字庫 - 7333words2.csv';
  
  if (!fs.existsSync(csvPath)) {
    console.error(`❌ CSV file not found: ${csvPath}`);
    process.exit(1);
  }

  console.log(`📂 Reading CSV from: ${csvPath}`);
  const csvContent = fs.readFileSync(csvPath, 'utf-8');

  // 解析 CSV
  const records: VocabularyRow[] = parse(csvContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  });

  console.log(`📊 Found ${records.length} vocabulary items`);

  // 批次處理設定
  const BATCH_SIZE = 100;
  const batches = [];
  
  for (let i = 0; i < records.length; i += BATCH_SIZE) {
    batches.push(records.slice(i, i + BATCH_SIZE));
  }

  console.log(`📦 Processing in ${batches.length} batches of ${BATCH_SIZE}...`);

  // 處理每個批次
  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    const progress = Math.round((i + 1) / batches.length * 100);
    
    try {
      const data = batch.map(row => ({
        word: row.word,
        kana: row.kana,
        meaning: row.meaning,
        chineseMeaning: row.chinese_meaning || null,
        difficulty: row.difficulty,
        category: row.category,
        jlptLevel: row.jlpt_level || null,
        kanji: row.kanji || null,
        isKanji: row.is_kanji === 'TRUE' || row.is_kanji === 'true',
      }));

      // 使用 createMany 批次插入
      await prisma.vocabulary.createMany({
        data,
        skipDuplicates: true, // 跳過重複的資料
      });

      console.log(`✅ Batch ${i + 1}/${batches.length} completed (${progress}%)`);
    } catch (error) {
      console.error(`❌ Error in batch ${i + 1}:`, error);
      // 如果批次失敗，嘗試單筆插入
      console.log(`🔄 Attempting individual inserts for batch ${i + 1}...`);
      
      for (const row of batch) {
        try {
          await prisma.vocabulary.create({
            data: {
              word: row.word,
              kana: row.kana,
              meaning: row.meaning,
              chineseMeaning: row.chinese_meaning || null,
              difficulty: row.difficulty,
              category: row.category,
              jlptLevel: row.jlpt_level || null,
              kanji: row.kanji || null,
              isKanji: row.is_kanji === 'TRUE' || row.is_kanji === 'true',
            },
          });
        } catch (individualError) {
          console.error(`⚠️ Failed to insert word: ${row.word}`, individualError);
        }
      }
    }

    // 避免過載，每個批次之間稍微延遲
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  // 檢查結果
  const count = await prisma.vocabulary.count();
  console.log(`\n✨ Seed completed! Total vocabulary items in database: ${count}`);
}

// 執行 seed
seedVocabulary()
  .catch((error) => {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });