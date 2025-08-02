const fs = require('fs');
const path = require('path');

// 讀取 CSV 檔案
const readCSV = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n').filter(line => line.trim());
  const headers = lines[0].split(',');
  
  const data = [];
  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length >= 4) {
      data.push({
        expression: values[0],
        reading: values[1],
        meaning: values[2],
        chineseMeaning: values[3],
        tags: values[4] || ''
      });
    }
  }
  
  return data;
};

// 解析 CSV 行，處理引號內的逗號
const parseCSVLine = (line) => {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result;
};

// 根據詞彙複雜程度分類
const categorizeByComplexity = (data) => {
  const categories = {
    beginner: [],
    normal: [],
    hard: [],
    expert: []
  };
  
  data.forEach(item => {
    const complexity = calculateComplexity(item);
    
    if (complexity <= 2) {
      categories.beginner.push(item);
    } else if (complexity <= 4) {
      categories.normal.push(item);
    } else if (complexity <= 6) {
      categories.hard.push(item);
    } else {
      categories.expert.push(item);
    }
  });
  
  return categories;
};

// 計算詞彙複雜度
const calculateComplexity = (item) => {
  let complexity = 0;
  
  // 根據字數計算
  complexity += item.expression.length * 0.5;
  
  // 根據漢字數量計算
  const kanjiCount = (item.expression.match(/[\u4e00-\u9faf]/g) || []).length;
  complexity += kanjiCount * 1.5;
  
  // 根據讀音長度計算
  complexity += item.reading.length * 0.3;
  
  // 根據英文解釋長度計算
  complexity += item.meaning.length * 0.1;
  
  // 特殊詞彙加分
  if (item.expression.includes('する')) complexity += 1;
  if (item.expression.includes('的')) complexity += 1;
  if (item.expression.includes('化')) complexity += 1;
  if (item.expression.includes('性')) complexity += 1;
  if (item.expression.includes('者')) complexity += 1;
  if (item.expression.includes('家')) complexity += 1;
  if (item.expression.includes('員')) complexity += 1;
  if (item.expression.includes('社')) complexity += 1;
  if (item.expression.includes('会')) complexity += 1;
  if (item.expression.includes('所')) complexity += 1;
  
  return Math.round(complexity);
};

// 生成 TypeScript 檔案內容
const generateTSContent = (data, filename) => {
  const items = data.map((item, index) => {
    const jlptLevel = getJLPTLevel(item.tags);
    const complexity = calculateComplexity(item);
    const difficulty = getDifficultyLevelByComplexity(complexity);
    return `  {
    id: "${filename}_${index + 1}",
    word: "${item.expression}",
    kana: "${item.reading}",
    meaning: "${item.meaning.replace(/"/g, '\\"')}",
    chineseMeaning: "${item.chineseMeaning.replace(/"/g, '\\"')}",
    difficulty: "${difficulty}",
    category: "${getCategory(item.tags)}",
    jlptLevel: "${jlptLevel}",
    kanji: "${item.expression}",
    isKanji: ${isKanji(item.expression)},
    complexity: ${complexity}
  }`;
  }).join(',\n');
  
  return `import { TetrisWord, DifficultyLevel } from './index';

export const ${filename}: TetrisWord[] = [
${items}
];
`;
};

// 獲取 JLPT 等級
const getJLPTLevel = (tags) => {
  const tagsLower = tags.toLowerCase();
  if (tagsLower.includes('jlpt_5') || tagsLower.includes('n5')) return 'n5';
  if (tagsLower.includes('jlpt_4') || tagsLower.includes('n4')) return 'n4';
  if (tagsLower.includes('jlpt_3') || tagsLower.includes('n3')) return 'n3';
  if (tagsLower.includes('jlpt_2') || tagsLower.includes('n2')) return 'n2';
  if (tagsLower.includes('jlpt_1') || tagsLower.includes('n1')) return 'n1';
  return 'n1'; // 預設為 n1
};

// 根據複雜度獲取難度等級
const getDifficultyLevelByComplexity = (complexity) => {
  if (complexity <= 2) return 'beginner';
  if (complexity <= 4) return 'normal';
  if (complexity <= 6) return 'hard';
  return 'expert';
};

// 獲取類別
const getCategory = (tags) => {
  if (tags.includes('Intermediate_Japanese')) return 'intermediate';
  if (tags.includes('JLPT')) return 'jlpt';
  return 'general';
};

// 判斷是否為漢字
const isKanji = (expression) => {
  return /[\u4e00-\u9faf]/.test(expression);
};

// 主函數
const main = () => {
  console.log('開始從 CSV 重建詞彙資料...');
  
  // 讀取 CSV 檔案
  const csvPath = path.join(__dirname, '../vocabulary.csv');
  const data = readCSV(csvPath);
  
  console.log(`讀取到 ${data.length} 個詞彙項目`);
  
  // 分類資料
  const categories = categorizeByComplexity(data);
  
  console.log('分類結果:');
  console.log(`Beginner: ${categories.beginner.length} 個`);
  console.log(`Normal: ${categories.normal.length} 個`);
  console.log(`Hard: ${categories.hard.length} 個`);
  console.log(`Expert: ${categories.expert.length} 個`);
  
  // 生成檔案
  const outputDir = path.join(__dirname, '../src/data/vocabulary-final');
  
  // 生成各等級檔案
  const files = [
    { name: 'beginner', data: categories.beginner },
    { name: 'normal', data: categories.normal },
    { name: 'hard', data: categories.hard },
    { name: 'expert', data: categories.expert },
    { name: 'all', data: data }
  ];
  
  files.forEach(({ name, data }) => {
    if (data.length > 0) {
      const content = generateTSContent(data, name);
      const filePath = path.join(outputDir, `${name}.ts`);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ 生成檔案: ${name}.ts (${data.length} 個項目)`);
    }
  });
  
  // 更新 index.ts
  const indexContent = `import { TetrisWord, DifficultyLevel } from '../tetrisData';

export interface TetrisWord {
  id: string;
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

export { DifficultyLevel } from '../tetrisData';

import { beginner } from './beginner';
import { normal } from './normal';
import { hard } from './hard';
import { expert } from './expert';

export const allVocabulary: TetrisWord[] = [
  ...beginner,
  ...normal,
  ...hard,
  ...expert
];

export const getRandomWordByCombinedDifficulty = (difficulty: DifficultyLevel): TetrisWord => {
  let wordPool: TetrisWord[] = [];
  
  switch (difficulty) {
    case 'beginner':
      wordPool = beginner;
      break;
    case 'normal':
      wordPool = [...beginner, ...normal];
      break;
    case 'hard':
      wordPool = [...normal, ...hard];
      break;
    case 'expert':
      wordPool = [...hard, ...expert];
      break;
    default:
      wordPool = allVocabulary;
  }
  
  if (wordPool.length === 0) {
    wordPool = allVocabulary;
  }
  
  const randomIndex = Math.floor(Math.random() * wordPool.length);
  return wordPool[randomIndex];
};

export const getVocabularyByJLPT = (jlptLevel: 'n1' | 'n2' | 'n3' | 'n4' | 'n5'): TetrisWord[] => {
  return allVocabulary.filter(word => word.jlptLevel === jlptLevel);
};
`;

  const indexPath = path.join(outputDir, 'index.ts');
  fs.writeFileSync(indexPath, indexContent, 'utf8');
  console.log('✅ 更新 index.ts');
  
  console.log('\n🎉 詞彙資料重建完成！');
  console.log(`總共處理了 ${data.length} 個詞彙項目`);
};

// 執行主函數
main(); 