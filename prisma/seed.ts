import { PrismaClient } from '@prisma/client';
// Import vocabulary from vocabulary-final directory
import { BEGINNER_WORDS } from '../src/data/vocabulary-final/beginner_converted';
import { NORMAL_WORDS } from '../src/data/vocabulary-final/normal-split';
import { HARD_WORDS } from '../src/data/vocabulary-final/hard-split';
import { expert as EXPERT_WORDS } from '../src/data/vocabulary-final/expert-split';
import { JLPT_N3_N2_WORDS } from '../src/data/vocabulary-final/jlpt-chunks';
import { KANJI_WORDS_01 } from '../src/data/vocabulary-final/kanji-01';
import { KANJI_WORDS_02 } from '../src/data/vocabulary-final/kanji-02';
import { KANJI_WORDS_03 } from '../src/data/vocabulary-final/kanji-03';
import { KANJI_WORDS_04 } from '../src/data/vocabulary-final/kanji-04';
import { KANJI_WORDS_05 } from '../src/data/vocabulary-final/kanji-05';
import { KANJI_WORDS_06 } from '../src/data/vocabulary-final/kanji-06';
import { KANJI_WORDS_07 } from '../src/data/vocabulary-final/kanji-07';
// Import long texts
import { SIMPLE_LONG_TEXTS, INTERMEDIATE_LONG_TEXTS } from '../src/data/longTexts';
// Import boss questions
import { bossQuestions } from '../src/data/bossData';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Clear existing data
  console.log('🧹 Clearing existing data...');
  await prisma.vocabulary.deleteMany();
  await prisma.longText.deleteMany();
  await prisma.bossQuestion.deleteMany();

  // Prepare vocabulary data
  const vocabularyData: any[] = [];

  // Helper function to process word arrays
  const processWords = (words: any[], defaultCategory: string = 'general') => {
    words.forEach((word: any) => {
      vocabularyData.push({
        word: word.word,
        kana: word.kana,
        meaning: word.meaning,
        chineseMeaning: word.chineseMeaning || null,
        difficulty: word.difficulty || 'normal',
        category: word.category || defaultCategory,
        jlptLevel: word.jlptLevel || null,
        kanji: word.kanji || null,
        isKanji: word.isKanji || false,
        complexity: word.complexity || null,
        alternativeReadings: word.alternativeReadings ? JSON.stringify(word.alternativeReadings) : null,
        compoundInfo: word.compoundInfo ? JSON.stringify(word.compoundInfo) : null,
        metadata: word.metadata ? JSON.stringify(word.metadata) : null,
      });
    });
  };

  // Process vocabulary from vocabulary-final
  console.log('📚 Processing Beginner vocabulary...');
  processWords(BEGINNER_WORDS, 'general');
  
  console.log('📚 Processing Normal vocabulary...');
  processWords(NORMAL_WORDS, 'general');
  
  console.log('📚 Processing Hard vocabulary...');
  processWords(HARD_WORDS, 'general');
  
  console.log('📚 Processing Expert vocabulary...');
  processWords(EXPERT_WORDS, 'general');
  
  console.log('📝 Processing JLPT N3-N2 vocabulary...');
  processWords(JLPT_N3_N2_WORDS, 'jlpt');

  // Process Kanji vocabulary
  console.log('🈷️ Processing Kanji vocabulary...');
  processWords(KANJI_WORDS_01, 'kanji');
  processWords(KANJI_WORDS_02, 'kanji');
  processWords(KANJI_WORDS_03, 'kanji');
  processWords(KANJI_WORDS_04, 'kanji');
  processWords(KANJI_WORDS_05, 'kanji');
  processWords(KANJI_WORDS_06, 'kanji');
  processWords(KANJI_WORDS_07, 'kanji');

  // Insert vocabulary data
  console.log(`💾 Inserting ${vocabularyData.length} vocabulary items...`);
  await prisma.vocabulary.createMany({
    data: vocabularyData,
    skipDuplicates: true,
  });

  // Process Long Text data
  console.log('📖 Processing Long Text content...');
  const longTextData: any[] = [];

  const processLongTexts = (texts: any[], defaultDifficulty: string = 'normal') => {
    texts.forEach((text: any) => {
      if (text.content) {
        longTextData.push({
          title: text.title,
          content: text.content,
          displayContent: text.displayContent || text.content,
          inputContent: text.inputContent || text.content,
          difficulty: text.difficulty || defaultDifficulty,
          category: text.category || 'article',
          estimatedTime: text.estimatedTime || 60,
          vocabularyList: text.vocabularyList || [],
          textMapping: text.textMapping ? JSON.stringify(text.textMapping) : null,
          characterCount: text.content.length,
          tags: text.tags || [],
        });
      }
    });
  };

  console.log('📖 Processing Simple long texts...');
  processLongTexts(SIMPLE_LONG_TEXTS, 'beginner');
  
  console.log('📖 Processing Intermediate long texts...');
  processLongTexts(INTERMEDIATE_LONG_TEXTS, 'normal');

  // Insert long text data
  if (longTextData.length > 0) {
    console.log(`💾 Inserting ${longTextData.length} long text items...`);
    await prisma.longText.createMany({
      data: longTextData,
      skipDuplicates: true,
    });
  }

  // Process Boss Questions
  console.log('👾 Processing Boss questions...');
  const bossQuestionData = bossQuestions.map((question, index) => ({
    content: question.content,
    displayContent: question.displayContent,
    inputContent: question.inputContent,
    timeLimit: question.timeLimit,
    sortOrder: index + 1,
    difficulty: 'normal', // 可以根據時間限制或字數來判斷難度
  }));

  // Insert boss questions
  if (bossQuestionData.length > 0) {
    console.log(`💾 Inserting ${bossQuestionData.length} boss questions...`);
    await prisma.bossQuestion.createMany({
      data: bossQuestionData,
      skipDuplicates: true,
    });
  }

  // Create data version record
  await prisma.dataVersion.create({
    data: {
      tableName: 'vocabulary',
      version: 1,
      description: 'Initial vocabulary data import from local files',
    },
  });

  await prisma.dataVersion.create({
    data: {
      tableName: 'long_texts',
      version: 1,
      description: 'Initial long text data import from local files',
    },
  });

  await prisma.dataVersion.create({
    data: {
      tableName: 'boss_questions',
      version: 1,
      description: 'Initial boss questions import from local files',
    },
  });

  console.log('✅ Database seed completed successfully!');
  console.log(`📊 Summary:`);
  const vocabCount = await prisma.vocabulary.count();
  const longTextCount = await prisma.longText.count();
  const bossCount = await prisma.bossQuestion.count();
  console.log(`   - Vocabulary items: ${vocabCount}`);
  console.log(`   - Long texts: ${longTextCount}`);
  console.log(`   - Boss questions: ${bossCount}`);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });