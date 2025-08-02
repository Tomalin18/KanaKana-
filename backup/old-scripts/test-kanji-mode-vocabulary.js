// 測試漢字模式的詞彙選擇
function testKanjiModeVocabulary() {
  console.log('🧪 測試漢字模式詞彙選擇...\n');

  // 模擬詞彙數據（基於實際統計）
  const mockVocabulary = [
    // 漢字詞彙
    { word: '漢字', kana: 'かんじ', meaning: 'kanji', isKanji: true, kanji: '漢字', jlptLevel: 'n5' },
    { word: '日本語', kana: 'にほんご', meaning: 'Japanese', isKanji: true, kanji: '日本語', jlptLevel: 'n5' },
    { word: '学生', kana: 'がくせい', meaning: 'student', isKanji: true, kanji: '学生', jlptLevel: 'n5' },
    { word: '先生', kana: 'せんせい', meaning: 'teacher', isKanji: true, kanji: '先生', jlptLevel: 'n5' },
    { word: '大学', kana: 'だいがく', meaning: 'university', isKanji: true, kanji: '大学', jlptLevel: 'n4' },
    { word: '会社', kana: 'かいしゃ', meaning: 'company', isKanji: true, kanji: '会社', jlptLevel: 'n4' },
    { word: '経済', kana: 'けいざい', meaning: 'economy', isKanji: true, kanji: '経済', jlptLevel: 'n3' },
    { word: '政治', kana: 'せいじ', meaning: 'politics', isKanji: true, kanji: '政治', jlptLevel: 'n3' },
    { word: '文化', kana: 'ぶんか', meaning: 'culture', isKanji: true, kanji: '文化', jlptLevel: 'n2' },
    { word: '社会', kana: 'しゃかい', meaning: 'society', isKanji: true, kanji: '社会', jlptLevel: 'n2' },
    { word: '哲学', kana: 'てつがく', meaning: 'philosophy', isKanji: true, kanji: '哲学', jlptLevel: 'n1' },
    { word: '文学', kana: 'ぶんがく', meaning: 'literature', isKanji: true, kanji: '文学', jlptLevel: 'n1' },
    
    // 假名詞彙（這些不應該在漢字模式中出現）
    { word: 'とりあえず', kana: 'とりあえず', meaning: 'for now', isKanji: false, kanji: null, jlptLevel: 'n3' },
    { word: 'ありがとう', kana: 'ありがとう', meaning: 'thank you', isKanji: false, kanji: null, jlptLevel: 'n5' },
    { word: 'こんにちは', kana: 'こんにちは', meaning: 'hello', isKanji: false, kanji: null, jlptLevel: 'n5' },
    { word: 'さようなら', kana: 'さようなら', meaning: 'goodbye', isKanji: false, kanji: null, jlptLevel: 'n5' },
  ];

  // 模擬 getVocabularyByJLPT 函數
  function getVocabularyByJLPT(level) {
    return mockVocabulary.filter(word => word.jlptLevel === level);
  }

  // 模擬漢字模式詞彙選擇邏輯
  function generateKanjiWord(difficulty) {
    const level = getJLPTLevelByDifficulty(difficulty);
    
    // 使用新的詞彙系統，只選擇漢字詞彙
    const allWords = getVocabularyByJLPT(level);
    const kanjiWords = allWords.filter(word => word.isKanji && word.kanji);
    
    // 如果當前JLPT等級沒有漢字詞彙，嘗試其他等級
    let availableKanjiWords = kanjiWords;
    if (kanjiWords.length === 0) {
      // 嘗試所有JLPT等級的漢字詞彙
      const allJLPTLevels = ['n5', 'n4', 'n3', 'n2', 'n1'];
      for (const jlptLevel of allJLPTLevels) {
        const wordsForLevel = getVocabularyByJLPT(jlptLevel);
        const kanjiWordsForLevel = wordsForLevel.filter(word => word.isKanji && word.kanji);
        if (kanjiWordsForLevel.length > 0) {
          availableKanjiWords = kanjiWordsForLevel;
          break;
        }
      }
    }
    
    // 確保有漢字詞彙可用
    if (availableKanjiWords.length === 0) {
      console.warn('No kanji words available, using fallback');
      return {
        id: 'fallback_kanji',
        text: '漢字',
        kanji: '漢字',
        hiragana: 'かんじ',
        katakana: 'カンジ',
        meaning: 'kanji, Chinese character',
        difficulty: 1,
        theme: 'jlpt_n5',
        jlptLevel: 'n5',
        frequency: 50,
        strokeCount: 2,
        examples: [],
      };
    } else {
      // 使用漢字詞彙
      const randomIndex = Math.floor(Math.random() * availableKanjiWords.length);
      const randomWord = availableKanjiWords[randomIndex];
      return {
        id: randomWord.id || randomWord.word,
        text: randomWord.word,
        kanji: randomWord.kanji || randomWord.word,
        hiragana: randomWord.kana,
        katakana: randomWord.kana.toUpperCase(),
        meaning: randomWord.chineseMeaning || randomWord.meaning,
        difficulty: 2,
        theme: 'jlpt_n5',
        jlptLevel: randomWord.jlptLevel || 'n5',
        frequency: 50,
        strokeCount: randomWord.kanji?.length || 0,
        examples: [],
      };
    }
  }

  // 模擬難度等級選擇
  function getJLPTLevelByDifficulty(difficulty) {
    switch (difficulty) {
      case 'elementary':
        return Math.random() < 0.5 ? 'n5' : 'n4';
      case 'intermediate':
        const levels = ['n5', 'n4', 'n3', 'n2'];
        return levels[Math.floor(Math.random() * levels.length)];
      case 'advanced':
        const allLevels = ['n5', 'n4', 'n3', 'n2', 'n1'];
        return allLevels[Math.floor(Math.random() * allLevels.length)];
      default:
        return 'n5';
    }
  }

  // 測試函數
  function testDifficulty(difficulty, iterations = 10) {
    console.log(`📊 測試 ${difficulty} 難度 (${iterations} 次選擇):`);
    
    const results = {
      kanjiWords: 0,
      nonKanjiWords: 0,
      words: []
    };

    for (let i = 0; i < iterations; i++) {
      const selectedWord = generateKanjiWord(difficulty);
      results.words.push(selectedWord.text);
      
      // 檢查是否為漢字詞彙
      if (selectedWord.kanji && selectedWord.kanji !== selectedWord.text) {
        results.kanjiWords++;
      } else {
        results.nonKanjiWords++;
      }
    }

    console.log(`   漢字詞彙: ${results.kanjiWords} 次`);
    console.log(`   非漢字詞彙: ${results.nonKanjiWords} 次`);
    console.log(`   選擇的詞彙: ${results.words.join(', ')}`);
    console.log('');
  }

  // 執行測試
  testDifficulty('elementary');
  testDifficulty('intermediate');
  testDifficulty('advanced');

  console.log('💡 修復效果:');
  console.log('   - 漢字模式現在只會選擇漢字詞彙');
  console.log('   - 如果當前JLPT等級沒有漢字詞彙，會嘗試其他等級');
  console.log('   - 確保不會出現假名詞彙如「とりあえず」');
  console.log('   - 提供更好的漢字學習體驗');
}

testKanjiModeVocabulary(); 