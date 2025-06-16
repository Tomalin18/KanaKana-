/**
 * 日文多讀音支援系統
 * 處理同一個詞彙有多種讀音的情況
 */

/**
 * 多讀音詞彙映射表
 * 鍵：漢字詞彙，值：可能的讀音陣列
 */
export const MULTIPLE_READINGS_MAP: Record<string, string[]> = {
  // 數字相關
  '一': ['いち', 'ひと'],
  '二': ['に', 'ふた'],
  '三': ['さん', 'みっ'],
  '四': ['よん', 'し'],
  '五': ['ご', 'いつ'],
  '六': ['ろく', 'むっ'],
  '七': ['なな', 'しち'],
  '八': ['はち', 'やっ'],
  '九': ['きゅう', 'く'],
  '十': ['じゅう', 'とお'],
  
  // 年齡相關
  '二十歳': ['にじゅうさい', 'はたち'],
  '二十才': ['にじゅうさい', 'はたち'],
  
  // 時間相關
  '一時': ['いちじ', 'ひとじ'],
  '二時': ['にじ', 'ふたじ'],
  '三時': ['さんじ', 'みじ'],
  '四時': ['よじ', 'しじ'],
  '五時': ['ごじ', 'いつじ'],
  '六時': ['ろくじ', 'むじ'],
  '七時': ['しちじ', 'ななじ'],
  '八時': ['はちじ', 'やじ'],
  '九時': ['くじ', 'きゅうじ'],
  '十時': ['じゅうじ', 'とおじ'],
  
  // 日期相關
  '一日': ['いちにち', 'ついたち'],
  '二日': ['ふつか', 'ににち'],
  '三日': ['みっか', 'さんにち'],
  '四日': ['よっか', 'よんにち'],
  '五日': ['いつか', 'ごにち'],
  '六日': ['むいか', 'ろくにち'],
  '七日': ['なのか', 'しちにち'],
  '八日': ['ようか', 'はちにち'],
  '九日': ['ここのか', 'くにち'],
  '十日': ['とおか', 'じゅうにち'],
  
  // 月份相關
  '一月': ['いちがつ', 'ひとつき'],
  '二月': ['にがつ', 'ふたつき'],
  '三月': ['さんがつ', 'みつき'],
  '四月': ['しがつ', 'よんがつ'],
  '五月': ['ごがつ', 'いつつき'],
  '六月': ['ろくがつ', 'むつき'],
  '七月': ['しちがつ', 'ななつき'],
  '八月': ['はちがつ', 'やつき'],
  '九月': ['くがつ', 'きゅうがつ'],
  '十月': ['じゅうがつ', 'とつき'],
  '十一月': ['じゅういちがつ'],
  '十二月': ['じゅうにがつ'],
  
  // 常用詞彙
  '今日': ['きょう', 'こんにち'],
  '明日': ['あした', 'あす', 'みょうにち'],
  '昨日': ['きのう', 'さくじつ'],
  '今年': ['ことし', 'こんねん'],
  '去年': ['きょねん', 'こぞ'],
  '来年': ['らいねん', 'きたるとし'],
  
  // 人称相關
  '私': ['わたし', 'わたくし'],
  '僕': ['ぼく'],
  '君': ['きみ', 'くん'],
  '彼': ['かれ'],
  '彼女': ['かのじょ'],
  
  // 家族相關
  '父': ['ちち', 'とう'],
  '母': ['はは', 'かあ'],
  '兄': ['あに', 'にい'],
  '姉': ['あね', 'ねえ'],
  '弟': ['おとうと'],
  '妹': ['いもうと'],
  
  // 方向相關
  '東': ['ひがし', 'とう'],
  '西': ['にし', 'せい'],
  '南': ['みなみ', 'なん'],
  '北': ['きた', 'ほく'],
  
  // 色彩相關
  '白': ['しろ', 'はく'],
  '黒': ['くろ', 'こく'],
  '赤': ['あか', 'せき'],
  '青': ['あお', 'せい'],
  '黄': ['き', 'おう'],
  '緑': ['みどり', 'りょく'],
  
  // 動詞相關
  '行く': ['いく', 'ゆく'],
  '来る': ['くる', 'きたる'],
  '見る': ['みる', 'けんする'],
  '聞く': ['きく', 'ぶんする'],
  '読む': ['よむ', 'どくする'],
  '書く': ['かく', 'しょする'],
  
  // 學校相關
  '学校': ['がっこう'],
  '大学': ['だいがく'],
  '中学': ['ちゅうがく'],
  '小学': ['しょうがく'],
  '高校': ['こうこう'],
  
  // 其他常用詞
  '会社': ['かいしゃ'],
  '仕事': ['しごと'],
  '友達': ['ともだち'],
  '家族': ['かぞく'],
  '電車': ['でんしゃ'],
  '新宿': ['しんじゅく'],
  '映画': ['えいが'],
  '音楽': ['おんがく'],
  '料理': ['りょうり'],
  '勉強': ['べんきょう'],
  '運動': ['うんどう'],
  '買い物': ['かいもの'],
  '散歩': ['さんぽ'],
  '旅行': ['りょこう'],
};

/**
 * 檢查給定的漢字詞彙是否有多種讀音
 */
export const hasMultipleReadings = (kanji: string): boolean => {
  return kanji in MULTIPLE_READINGS_MAP;
};

/**
 * 獲取給定漢字詞彙的所有可能讀音
 */
export const getPossibleReadings = (kanji: string): string[] => {
  return MULTIPLE_READINGS_MAP[kanji] || [];
};

/**
 * 檢查給定的讀音是否為漢字詞彙的有效讀音之一
 */
export const isValidReading = (kanji: string, reading: string): boolean => {
  const possibleReadings = getPossibleReadings(kanji);
  return possibleReadings.includes(reading);
};

/**
 * 從文本中提取可能有多種讀音的詞彙
 */
export const extractMultipleReadingWords = (text: string): string[] => {
  const words: string[] = [];
  
  // 檢查所有已知的多讀音詞彙
  Object.keys(MULTIPLE_READINGS_MAP).forEach(kanji => {
    if (text.includes(kanji)) {
      words.push(kanji);
    }
  });
  
  return words;
};

/**
 * 為包含多讀音詞彙的文本生成所有可能的讀音組合
 */
export const generateReadingVariations = (displayText: string, baseReading: string): string[] => {
  const variations = new Set<string>();
  variations.add(baseReading); // 添加基本讀音
  
  // 找出文本中所有有多種讀音的詞彙
  const multiReadingWords = extractMultipleReadingWords(displayText);
  
  if (multiReadingWords.length === 0) {
    return [baseReading];
  }
  
  // 為每個多讀音詞彙生成變體
  let currentVariations = [baseReading];
  
  multiReadingWords.forEach(kanjiWord => {
    const possibleReadings = getPossibleReadings(kanjiWord);
    const newVariations: string[] = [];
    
    currentVariations.forEach(variation => {
      possibleReadings.forEach(reading => {
        // 嘗試替換當前變體中的讀音
        const newVariation = replaceReadingInText(variation, kanjiWord, reading, displayText);
        if (newVariation !== variation) {
          newVariations.push(newVariation);
        }
      });
    });
    
    currentVariations = [...currentVariations, ...newVariations];
  });
  
  return Array.from(new Set(currentVariations));
};

/**
 * 在文本中替換特定詞彙的讀音
 */
function replaceReadingInText(
  readingText: string, 
  kanjiWord: string, 
  newReading: string, 
  originalDisplayText: string
): string {
  // 這是一個簡化的實現，實際情況可能需要更複雜的邏輯
  // 找到漢字詞彙在原文中的位置，然後在讀音文本中找到對應位置進行替換
  
  const possibleReadings = getPossibleReadings(kanjiWord);
  let result = readingText;
  
  possibleReadings.forEach(oldReading => {
    if (result.includes(oldReading)) {
      result = result.replace(oldReading, newReading);
    }
  });
  
  return result;
}

/**
 * 檢查用戶輸入是否匹配任何可能的讀音變體
 */
export const matchesAnyReadingVariation = (
  userInput: string,
  displayText: string,
  baseReading: string,
  position: number
): boolean => {
  const variations = generateReadingVariations(displayText, baseReading);
  
  return variations.some(variation => {
    const targetChar = variation[position];
    return targetChar && userInput === targetChar;
  });
}; 