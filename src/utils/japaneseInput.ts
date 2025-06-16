/**
 * 日文輸入驗證和處理工具 - 完整版
 * 支持所有日文輸入規則：平假名↔片假名、濁音、半濁音、拗音、促音、長音、小字等
 */

// 平假名範圍：U+3040–U+309F
const HIRAGANA_REGEX = /[\u3040-\u309F]/;
// 片假名範圍：U+30A0–U+30FF
const KATAKANA_REGEX = /[\u30A0-\u30FF]/;
// 漢字範圍（簡化）：U+4E00–U+9FAF
const KANJI_REGEX = /[\u4E00-\u9FAF]/;

/**
 * 平假名↔片假名對應映射
 */
const HIRAGANA_KATAKANA_MAP: Record<string, string> = {
  // 平假名 → 片假名
  'あ': 'ア', 'い': 'イ', 'う': 'ウ', 'え': 'エ', 'お': 'オ',
  'か': 'カ', 'き': 'キ', 'く': 'ク', 'け': 'ケ', 'こ': 'コ',
  'が': 'ガ', 'ぎ': 'ギ', 'ぐ': 'グ', 'げ': 'ゲ', 'ご': 'ゴ',
  'さ': 'サ', 'し': 'シ', 'す': 'ス', 'せ': 'セ', 'そ': 'ソ',
  'ざ': 'ザ', 'じ': 'ジ', 'ず': 'ズ', 'ぜ': 'ゼ', 'ぞ': 'ゾ',
  'た': 'タ', 'ち': 'チ', 'つ': 'ツ', 'て': 'テ', 'と': 'ト',
  'だ': 'ダ', 'ぢ': 'ヂ', 'づ': 'ヅ', 'で': 'デ', 'ど': 'ド',
  'な': 'ナ', 'に': 'ニ', 'ぬ': 'ヌ', 'ね': 'ネ', 'の': 'ノ',
  'は': 'ハ', 'ひ': 'ヒ', 'ふ': 'フ', 'へ': 'ヘ', 'ほ': 'ホ',
  'ば': 'バ', 'び': 'ビ', 'ぶ': 'ブ', 'べ': 'ベ', 'ぼ': 'ボ',
  'ぱ': 'パ', 'ぴ': 'ピ', 'ぷ': 'プ', 'ぺ': 'ペ', 'ぽ': 'ポ',
  'ま': 'マ', 'み': 'ミ', 'む': 'ム', 'め': 'メ', 'も': 'モ',
  'や': 'ヤ', 'ゆ': 'ユ', 'よ': 'ヨ',
  'ら': 'ラ', 'り': 'リ', 'る': 'ル', 'れ': 'レ', 'ろ': 'ロ',
  'わ': 'ワ', 'ゐ': 'ヰ', 'ゑ': 'ヱ', 'を': 'ヲ', 'ん': 'ン',
  // 小字
  'ゃ': 'ャ', 'ゅ': 'ュ', 'ょ': 'ョ', 'っ': 'ッ',
  'ぁ': 'ァ', 'ぃ': 'ィ', 'ぅ': 'ゥ', 'ぇ': 'ェ', 'ぉ': 'ォ',
  // 拗音組合
  'きゃ': 'キャ', 'きゅ': 'キュ', 'きょ': 'キョ',
  'しゃ': 'シャ', 'しゅ': 'シュ', 'しょ': 'ショ',
  'ちゃ': 'チャ', 'ちゅ': 'チュ', 'ちょ': 'チョ',
  'にゃ': 'ニャ', 'にゅ': 'ニュ', 'にょ': 'ニョ',
  'ひゃ': 'ヒャ', 'ひゅ': 'ヒュ', 'ひょ': 'ヒョ',
  'みゃ': 'ミャ', 'みゅ': 'ミュ', 'みょ': 'ミョ',
  'りゃ': 'リャ', 'りゅ': 'リュ', 'りょ': 'リョ',
  'ぎゃ': 'ギャ', 'ぎゅ': 'ギュ', 'ぎょ': 'ギョ',
  'じゃ': 'ジャ', 'じゅ': 'ジュ', 'じょ': 'ジョ',
  'びゃ': 'ビャ', 'びゅ': 'ビュ', 'びょ': 'ビョ',
  'ぴゃ': 'ピャ', 'ぴゅ': 'ピュ', 'ぴょ': 'ピョ'
};

// 反向映射（片假名 → 平假名）
const KATAKANA_HIRAGANA_MAP: Record<string, string> = {};
Object.entries(HIRAGANA_KATAKANA_MAP).forEach(([hiragana, katakana]) => {
  KATAKANA_HIRAGANA_MAP[katakana] = hiragana;
});

/**
 * 濁音映射：基本字符 → 濁音字符
 */
const DAKUTEN_MAP: Record<string, string> = {
  // 平假名濁音
  'か': 'が', 'き': 'ぎ', 'く': 'ぐ', 'け': 'げ', 'こ': 'ご',
  'さ': 'ざ', 'し': 'じ', 'す': 'ず', 'せ': 'ぜ', 'そ': 'ぞ',
  'た': 'だ', 'ち': 'ぢ', 'つ': 'づ', 'て': 'で', 'と': 'ど',
  'は': 'ば', 'ひ': 'び', 'ふ': 'ぶ', 'へ': 'べ', 'ほ': 'ぼ',
  // 片假名濁音
  'カ': 'ガ', 'キ': 'ギ', 'ク': 'グ', 'ケ': 'ゲ', 'コ': 'ゴ',
  'サ': 'ザ', 'シ': 'ジ', 'ス': 'ズ', 'セ': 'ゼ', 'ソ': 'ゾ',
  'タ': 'ダ', 'チ': 'ヂ', 'ツ': 'ヅ', 'テ': 'デ', 'ト': 'ド',
  'ハ': 'バ', 'ヒ': 'ビ', 'フ': 'ブ', 'ヘ': 'ベ', 'ホ': 'ボ'
};

/**
 * 半濁音映射：濁音字符 → 半濁音字符
 */
const HANDAKUTEN_MAP: Record<string, string> = {
  // 從基本音直接到半濁音
  'は': 'ぱ', 'ひ': 'ぴ', 'ふ': 'ぷ', 'へ': 'ぺ', 'ほ': 'ぽ',
  'ハ': 'パ', 'ヒ': 'ピ', 'フ': 'プ', 'ヘ': 'ペ', 'ホ': 'ポ',
  // 從濁音到半濁音（三段式輸入）
  'ば': 'ぱ', 'び': 'ぴ', 'ぶ': 'ぷ', 'べ': 'ぺ', 'ぼ': 'ぽ',
  'バ': 'パ', 'ビ': 'ピ', 'ブ': 'プ', 'ベ': 'ペ', 'ボ': 'ポ'
};

/**
 * 小字映射：普通字符 → 小字符
 */
const SMALL_CHAR_MAP: Record<string, string> = {
  // 平假名小字
  'あ': 'ぁ', 'い': 'ぃ', 'う': 'ぅ', 'え': 'ぇ', 'お': 'ぉ',
  'や': 'ゃ', 'ゆ': 'ゅ', 'よ': 'ょ', 'つ': 'っ',
  'わ': 'ゎ', 'か': 'ゕ', 'け': 'ゖ',
  // 片假名小字
  'ア': 'ァ', 'イ': 'ィ', 'ウ': 'ゥ', 'エ': 'ェ', 'オ': 'ォ',
  'ヤ': 'ャ', 'ユ': 'ュ', 'ヨ': 'ョ', 'ツ': 'ッ',
  'ワ': 'ヮ', 'カ': 'ヵ', 'ケ': 'ヶ'
};

/**
 * 拗音基本字符（可以組成拗音的字符）
 */
const YOUON_BASE_CHARS = [
  'き', 'し', 'ち', 'に', 'ひ', 'み', 'り',
  'ぎ', 'じ', 'ぢ', 'び', 'ぴ',
  'キ', 'シ', 'チ', 'ニ', 'ヒ', 'ミ', 'リ',
  'ギ', 'ジ', 'ヂ', 'ビ', 'ピ'
];

/**
 * 長音相關字符
 */
const LONG_VOWEL_MAP: Record<string, string[]> = {
  'あ': ['ー', 'あ'],
  'い': ['ー', 'い'],
  'う': ['ー', 'う'],
  'え': ['ー', 'え', 'い'],
  'お': ['ー', 'お', 'う'],
  'ア': ['ー', 'ア'],
  'イ': ['ー', 'イ'],
  'ウ': ['ー', 'ウ'],
  'エ': ['ー', 'エ', 'イ'],
  'オ': ['ー', 'オ', 'ウ']
};

/**
 * 智能輸入驗證結果
 */
export interface InputValidationResult {
  isValid: boolean;
  isComplete: boolean;
  isPartialMatch: boolean;
  canContinue: boolean;
  errorType?: 'wrong_character' | 'too_long' | 'invalid_sequence';
  nextPossibleChars?: string[];
  confidence: number; // 匹配信心度 0-1
  hint?: string; // 輸入提示
  transformationPath?: string[]; // 變換路徑
}

/**
 * 高級日文輸入驗證
 * 支持完整的日文輸入規則
 */
export const validateJapaneseInput = (input: string, target: string): InputValidationResult => {
  // 空輸入
  if (input.length === 0) {
    return {
      isValid: true,
      isComplete: false,
      isPartialMatch: true,
      canContinue: true,
      nextPossibleChars: [target[0]],
      confidence: 1.0
    };
  }

  // 輸入過長
  if (input.length > target.length) {
    return {
      isValid: false,
      isComplete: false,
      isPartialMatch: false,
      canContinue: false,
      errorType: 'too_long',
      confidence: 0.0
    };
  }

  // 完全匹配
  if (input === target) {
    return {
      isValid: true,
      isComplete: true,
      isPartialMatch: true,
      canContinue: false,
      confidence: 1.0
    };
  }

  // 執行高級匹配算法
  return performAdvancedMatching(input, target);
};

/**
 * 執行高級匹配算法
 */
function performAdvancedMatching(input: string, target: string): InputValidationResult {
  let confidence = 0;
  let canContinue = true;
  let errorType: InputValidationResult['errorType'];
  let hint = '';
  let transformationPath: string[] = [];

  // 逐字符分析
  for (let i = 0; i < input.length; i++) {
    const inputChar = input[i];
    const targetChar = target[i];

    if (inputChar === targetChar) {
      // 完全匹配
      confidence += 1.0 / target.length;
      continue;
    }

    // 檢查各種轉換可能性
    const transformResult = checkAllTransformations(inputChar, targetChar, input, target, i);
    
    if (transformResult.isValid) {
      confidence += transformResult.score;
      if (transformResult.hint) {
        hint = transformResult.hint;
      }
      if (transformResult.path) {
        transformationPath = transformResult.path;
      }
    } else {
      canContinue = false;
      errorType = 'wrong_character';
      break;
    }
  }

  // 計算下一個可能的字符
  const nextPossibleChars: string[] = [];
  if (canContinue && input.length < target.length) {
    nextPossibleChars.push(target[input.length]);
  }

  return {
    isValid: confidence > 0,
    isComplete: input === target,
    isPartialMatch: confidence > 0,
    canContinue,
    errorType,
    nextPossibleChars,
    confidence,
    hint: hint || undefined,
    transformationPath: transformationPath.length > 0 ? transformationPath : undefined
  };
}

/**
 * 轉換檢查結果
 */
interface TransformResult {
  isValid: boolean;
  score: number;
  hint?: string;
  path?: string[];
}

/**
 * 檢查所有可能的轉換
 */
function checkAllTransformations(
  inputChar: string,
  targetChar: string,
  fullInput: string,
  fullTarget: string,
  position: number
): TransformResult {
  console.log(`[checkAllTransformations] 檢查轉換: "${inputChar}" → "${targetChar}"`);
  console.log(`[checkAllTransformations] 完整輸入: "${fullInput}", 完整目標: "${fullTarget}", 位置: ${position}`);
  
  // 1. 平假名↔片假名轉換
  if (HIRAGANA_KATAKANA_MAP[inputChar] === targetChar) {
    return {
      isValid: true,
      score: 0.95 / fullTarget.length,
      hint: `${inputChar} 可以轉換為 ${targetChar} (平假名↔片假名)`,
      path: [inputChar, targetChar]
    };
  }
  
  if (KATAKANA_HIRAGANA_MAP[inputChar] === targetChar) {
    return {
      isValid: true,
      score: 0.95 / fullTarget.length,
      hint: `${inputChar} 可以轉換為 ${targetChar} (片假名↔平假名)`,
      path: [inputChar, targetChar]
    };
  }

  // 2. 濁音轉換：か → が
  if (DAKUTEN_MAP[inputChar] === targetChar) {
    return {
      isValid: true,
      score: 0.8 / fullTarget.length,
      hint: `${inputChar} 可以變成 ${targetChar} (濁音)`,
      path: [inputChar, targetChar]
    };
  }

  // 3. 半濁音轉換：は → ぱ 或 ば → ぱ
  if (HANDAKUTEN_MAP[inputChar] === targetChar) {
    const isThreeStage = DAKUTEN_MAP[inputChar.replace(/[ばびぶべぼバビブベボ]/, (m) => {
      const map: Record<string, string> = {
        'ば': 'は', 'び': 'ひ', 'ぶ': 'ふ', 'べ': 'へ', 'ぼ': 'ほ',
        'バ': 'ハ', 'ビ': 'ヒ', 'ブ': 'フ', 'ベ': 'ヘ', 'ボ': 'ホ'
      };
      return map[m] || m;
    })];
    
    if (isThreeStage) {
      const baseChar = inputChar.replace(/[ばびぶべぼバビブベボ]/, (m) => {
        const map: Record<string, string> = {
          'ば': 'は', 'び': 'ひ', 'ぶ': 'ふ', 'べ': 'へ', 'ぼ': 'ほ',
          'バ': 'ハ', 'ビ': 'ヒ', 'ブ': 'フ', 'ベ': 'ヘ', 'ボ': 'ホ'
        };
        return map[m] || m;
      });
      return {
        isValid: true,
        score: 0.85 / fullTarget.length,
        hint: `${inputChar} 可以變成 ${targetChar} (三段式: ${baseChar}→${inputChar}→${targetChar})`,
        path: [baseChar, inputChar, targetChar]
      };
    } else {
      return {
        isValid: true,
        score: 0.8 / fullTarget.length,
        hint: `${inputChar} 可以變成 ${targetChar} (半濁音)`,
        path: [inputChar, targetChar]
      };
    }
  }

  // 4. 檢查三段式轉換的第一階段：は → ば → ぱ 或 ハ → バ → パ
  // 當目標是半濁音時，檢查輸入是否是對應的基本音
  const targetIsHandakuten = Object.values(HANDAKUTEN_MAP).includes(targetChar);
  console.log(`[checkAllTransformations] 目標 "${targetChar}" 是半濁音: ${targetIsHandakuten}`);
  
  if (targetIsHandakuten) {
    // 找到目標字符對應的基本字符和濁音字符
    const baseToHandakuten = Object.entries(HANDAKUTEN_MAP).find(([key, value]) => 
      value === targetChar && !key.match(/[ばびぶべぼバビブベボ]/));
    
    console.log(`[checkAllTransformations] 查找基本字符結果:`, baseToHandakuten);
    
    if (baseToHandakuten) {
      const [baseChar] = baseToHandakuten;
      console.log(`[checkAllTransformations] 找到基本字符: "${baseChar}"`);
      
      // 檢查輸入是否是基本字符（第一階段：は 或 ハ）
      if (inputChar === baseChar) {
        console.log(`[checkAllTransformations] ✅ 三段式第一階段匹配: ${inputChar} === ${baseChar}`);
        return {
          isValid: true,
          score: 0.7 / fullTarget.length,
          hint: `${inputChar} 可以變成 ${targetChar} (三段式第一階段: ${baseChar}→${DAKUTEN_MAP[baseChar]}→${targetChar})`,
          path: [baseChar, DAKUTEN_MAP[baseChar], targetChar]
        };
      }
      
      // 檢查跨文字系統的轉換：平假名輸入 → 片假名目標
      // 例如：輸入「は」，目標「パ」
      if (targetChar.match(/[パピプペポ]/)) {
        console.log(`[checkAllTransformations] 檢查跨文字系統轉換（平假名→片假名）`);
        // 目標是片假名半濁音，檢查輸入是否是對應的平假名基本音
        const hiraganaBase = KATAKANA_HIRAGANA_MAP[baseChar];
        console.log(`[checkAllTransformations] baseChar "${baseChar}" → hiraganaBase "${hiraganaBase}"`);
        console.log(`[checkAllTransformations] 比較: inputChar "${inputChar}" === hiraganaBase "${hiraganaBase}"`);
        
        if (hiraganaBase && inputChar === hiraganaBase) {
          console.log(`[checkAllTransformations] ✅ 跨文字系統三段式匹配成功！`);
          return {
            isValid: true,
            score: 0.7 / fullTarget.length,
            hint: `${inputChar} 可以變成 ${targetChar} (跨文字系統三段式: ${inputChar}→${DAKUTEN_MAP[hiraganaBase]}→${targetChar})`,
            path: [inputChar, DAKUTEN_MAP[hiraganaBase], targetChar]
          };
        } else {
          console.log(`[checkAllTransformations] ❌ 跨文字系統三段式匹配失敗`);
        }
      }
      
      // 檢查跨文字系統的轉換：片假名輸入 → 平假名目標
      // 例如：輸入「ハ」，目標「ぱ」
      if (targetChar.match(/[ぱぴぷぺぽ]/)) {
        console.log(`[checkAllTransformations] 檢查跨文字系統轉換（片假名→平假名）`);
        // 目標是平假名半濁音，檢查輸入是否是對應的片假名基本音
        const katakanaBase = HIRAGANA_KATAKANA_MAP[baseChar];
        console.log(`[checkAllTransformations] baseChar "${baseChar}" → katakanaBase "${katakanaBase}"`);
        console.log(`[checkAllTransformations] 比較: inputChar "${inputChar}" === katakanaBase "${katakanaBase}"`);
        
        if (katakanaBase && inputChar === katakanaBase) {
          console.log(`[checkAllTransformations] ✅ 跨文字系統三段式匹配成功！`);
          return {
            isValid: true,
            score: 0.7 / fullTarget.length,
            hint: `${inputChar} 可以變成 ${targetChar} (跨文字系統三段式: ${inputChar}→${DAKUTEN_MAP[KATAKANA_HIRAGANA_MAP[inputChar]]}→${targetChar})`,
            path: [inputChar, DAKUTEN_MAP[KATAKANA_HIRAGANA_MAP[inputChar]], targetChar]
          };
        } else {
          console.log(`[checkAllTransformations] ❌ 跨文字系統三段式匹配失敗`);
        }
      }
    }
  }

  // 5. 小字轉換：や → ゃ
  if (SMALL_CHAR_MAP[inputChar] === targetChar) {
    return {
      isValid: true,
      score: 0.9 / fullTarget.length,
      hint: `${inputChar} 可以變成 ${targetChar} (小字)`,
      path: [inputChar, targetChar]
    };
  }

  // 6. 拗音檢查（特殊處理多字符組合）
  if (position > 0) {
    const prevInputChar = fullInput[position - 1];
    const prevTargetChar = fullTarget[position - 1];
    
    if (YOUON_BASE_CHARS.includes(prevInputChar) && 
        isSmallYouonChar(inputChar) &&
        isYouonCombination(prevTargetChar, targetChar)) {
      return {
        isValid: true,
        score: 0.9 / fullTarget.length,
        hint: `${prevInputChar}${inputChar} 組成拗音 ${prevTargetChar}${targetChar}`,
        path: [prevInputChar, inputChar, prevTargetChar + targetChar]
      };
    }
  }

  // 7. 長音檢查
  if (position > 0) {
    const prevTargetChar = fullTarget[position - 1];
    const longVowelOptions = LONG_VOWEL_MAP[getVowelType(prevTargetChar)];
    if (longVowelOptions && longVowelOptions.includes(inputChar) && 
        longVowelOptions.includes(targetChar)) {
      return {
        isValid: true,
        score: 0.7 / fullTarget.length,
        hint: `${inputChar} 可以作為長音 ${targetChar}`,
        path: [inputChar, targetChar]
      };
    }
  }

  // 8. 促音檢查：つ → っ
  if (inputChar === 'つ' && targetChar === 'っ') {
    return {
      isValid: true,
      score: 0.9 / fullTarget.length,
      hint: `つ 可以變成 っ (促音)`,
      path: [inputChar, targetChar]
    };
  }
  
  if (inputChar === 'ツ' && targetChar === 'ッ') {
    return {
      isValid: true,
      score: 0.9 / fullTarget.length,
      hint: `ツ 可以變成 ッ (促音)`,
      path: [inputChar, targetChar]
    };
  }

  console.log(`[checkAllTransformations] ❌ 沒有找到任何匹配的轉換`);
  return { isValid: false, score: 0 };
}

/**
 * 檢查是否是小さい拗音字符
 */
function isSmallYouonChar(char: string): boolean {
  return ['ゃ', 'ゅ', 'ょ', 'ャ', 'ュ', 'ョ'].includes(char);
}

/**
 * 檢查是否是拗音組合
 */
function isYouonCombination(char1: string, char2: string): boolean {
  const youonCombinations = [
    'きゃ', 'きゅ', 'きょ', 'しゃ', 'しゅ', 'しょ',
    'ちゃ', 'ちゅ', 'ちょ', 'にゃ', 'にゅ', 'にょ',
    'ひゃ', 'ひゅ', 'ひょ', 'みゃ', 'みゅ', 'みょ',
    'りゃ', 'りゅ', 'りょ', 'ぎゃ', 'ぎゅ', 'ぎょ',
    'じゃ', 'じゅ', 'じょ', 'びゃ', 'びゅ', 'びょ',
    'ぴゃ', 'ぴゅ', 'ぴょ',
    'キャ', 'キュ', 'キョ', 'シャ', 'シュ', 'ショ',
    'チャ', 'チュ', 'チョ', 'ニャ', 'ニュ', 'ニョ',
    'ヒャ', 'ヒュ', 'ヒョ', 'ミャ', 'ミュ', 'ミョ',
    'リャ', 'リュ', 'リョ', 'ギャ', 'ギュ', 'ギョ',
    'ジャ', 'ジュ', 'ジョ', 'ビャ', 'ビュ', 'ビョ',
    'ピャ', 'ピュ', 'ピョ'
  ];
  
  return youonCombinations.includes(char1 + char2);
}

/**
 * 獲取字符的母音類型
 */
function getVowelType(char: string): string {
  const vowelMap: Record<string, string> = {
    'あ': 'あ', 'か': 'あ', 'が': 'あ', 'さ': 'あ', 'ざ': 'あ', 'た': 'あ', 'だ': 'あ',
    'な': 'あ', 'は': 'あ', 'ば': 'あ', 'ぱ': 'あ', 'ま': 'あ', 'や': 'あ', 'ら': 'あ', 'わ': 'あ',
    'い': 'い', 'き': 'い', 'ぎ': 'い', 'し': 'い', 'じ': 'い', 'ち': 'い', 'ぢ': 'い',
    'に': 'い', 'ひ': 'い', 'び': 'い', 'ぴ': 'い', 'み': 'い', 'り': 'い',
    'う': 'う', 'く': 'う', 'ぐ': 'う', 'す': 'う', 'ず': 'う', 'つ': 'う', 'づ': 'う',
    'ぬ': 'う', 'ふ': 'う', 'ぶ': 'う', 'ぷ': 'う', 'む': 'う', 'ゆ': 'う', 'る': 'う',
    'え': 'え', 'け': 'え', 'げ': 'え', 'せ': 'え', 'ぜ': 'え', 'て': 'え', 'で': 'え',
    'ね': 'え', 'へ': 'え', 'べ': 'え', 'ぺ': 'え', 'め': 'え', 'れ': 'え',
    'お': 'お', 'こ': 'お', 'ご': 'お', 'そ': 'お', 'ぞ': 'お', 'と': 'お', 'ど': 'お',
    'の': 'お', 'ほ': 'お', 'ぼ': 'お', 'ぽ': 'お', 'も': 'お', 'よ': 'お', 'ろ': 'お', 'を': 'お'
  };
  
  // 對片假名也做同樣處理
  const hiraganaChar = KATAKANA_HIRAGANA_MAP[char] || char;
  return vowelMap[hiraganaChar] || char;
}

/**
 * 檢查字符串是否包含日文字符
 */
export const isJapanese = (text: string): boolean => {
  return HIRAGANA_REGEX.test(text) || KATAKANA_REGEX.test(text) || KANJI_REGEX.test(text);
};

/**
 * 檢查字符串是否為平假名
 */
export const isHiragana = (text: string): boolean => {
  return HIRAGANA_REGEX.test(text) && text.match(/[\u3040-\u309F]/g)?.length === text.length;
};

/**
 * 檢查字符串是否為片假名
 */
export const isKatakana = (text: string): boolean => {
  return KATAKANA_REGEX.test(text) && text.match(/[\u30A0-\u30FF]/g)?.length === text.length;
};

/**
 * 檢查字符串是否包含漢字
 */
export const hasKanji = (text: string): boolean => {
  return KANJI_REGEX.test(text);
};

/**
 * 計算輸入準確度
 */
export const calculateAccuracy = (input: string, target: string): number => {
  const validation = validateJapaneseInput(input, target);
  return Math.round(validation.confidence * 100);
};

/**
 * 檢查輸入是否為目標的前綴
 * @deprecated 使用 validateJapaneseInput 代替
 */
export const isValidPrefix = (input: string, target: string): boolean => {
  const validation = validateJapaneseInput(input, target);
  return validation.isValid && validation.canContinue;
};

/**
 * 獲取下一個應該輸入的字符
 */
export const getNextCharacter = (input: string, target: string): string | null => {
  const validation = validateJapaneseInput(input, target);
  return validation.nextPossibleChars?.[0] || null;
};

/**
 * 將全角字符轉換為半角字符
 */
export const toHalfWidth = (text: string): string => {
  return text.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (char) => {
    return String.fromCharCode(char.charCodeAt(0) - 0xFEE0);
  });
};

/**
 * 格式化遊戲時間
 */
export const formatGameTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

/**
 * 計算每分鐘字符數 (CPM)
 */
export const calculateCPM = (charactersTyped: number, timeInSeconds: number): number => {
  if (timeInSeconds === 0) return 0;
  return Math.round((charactersTyped / timeInSeconds) * 60);
};

/**
 * 計算每分鐘單詞數 (WPM)
 */
export const calculateWPM = (wordsCompleted: number, timeInSeconds: number): number => {
  if (timeInSeconds === 0) return 0;
  return Math.round((wordsCompleted / timeInSeconds) * 60);
}; 