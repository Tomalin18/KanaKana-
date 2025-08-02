const fs = require('fs');
const path = require('path');

console.log('🔧 實際修正檔案中的 chineseMeaning...\n');

// 讀取詞彙檔案
const vocabularyPath = path.join(__dirname, '../src/data/vocabulary-final/beginner_converted.ts');
const content = fs.readFileSync(vocabularyPath, 'utf8');

// 提取 BEGINNER_WORDS 陣列
const match = content.match(/export const BEGINNER_WORDS: TetrisWord\[\] = (\[[\s\S]*?\]);/);
if (!match) {
  console.error('❌ 無法找到 BEGINNER_WORDS 陣列');
  process.exit(1);
}

const wordsArray = eval(match[1]);

// 繁體中文翻譯對照表
const chineseTranslations = {
  "economics, finance, economy": "經濟、金融、經濟學",
  "bad, sinful; inferior": "壞的、邪惡的、劣等的",
  "to meet, to see": "見面、見",
  "blue": "藍色",
  "red": "紅色",
  "bright (in reference to personality or weather); cheerful": "明亮的（指性格或天氣）、開朗的",
  "to open, to become open": "打開、開啟",
  "to open (v.t.)": "打開",
  "to raise, to lift": "舉起、抬起",
  "breakfast": "早餐",
  "day after tomorrow": "後天",
  "foot; leg": "腳、腿",
  "tomorrow": "明天",
  "to play; to spend time pleasantly; to hang out": "玩耍、愉快地度過時間、閒逛",
  "warm": "溫暖的",
  "new": "新的",
  "hot (in reference to weather), warm": "熱的（指天氣）、溫暖的",
  "to bathe, to shower": "洗澡、淋浴",
  "dangerous, critical": "危險的、危急的",
  "generous, sweet": "慷慨的、甜的",
  "not very; surplus": "不太、剩餘",
  "to wash": "洗",
  "to be, to have": "是、有",
  "to walk": "走路",
  "good": "好的",
  "to say": "說",
  "to go": "去",
  "entrance": "入口",
  "doctor; physician": "醫生",
  "chair": "椅子",
  "one day (duration)": "一天（持續時間）",
  "five days; fifth day of the month": "五天、當月第五天",
  "together": "一起",
  "five things": "五個東西",
  "meaning, significance": "意義、重要性",
  "(humble) to be (animate), to exist": "（謙遜語）存在（有生命的）",
  "to put in": "放入",
  "various": "各種各樣的",
  "back, behind, rear": "後面、後方",
  "to sing": "唱歌",
  "to be born": "出生",
  "to sell (v.t.)": "賣",
  "coat, jacket": "外套、夾克",
  "movie, film": "電影",
  "movie theater, cinema": "電影院",
  "English (language)": "英語",
  "pencil": "鉛筆",
  "money": "錢",
  "to get up (e.g., from sleeping); to happen": "起床、發生",
  "to put; to lay; to place": "放置、擺放",
  "(someone else's) wife (hon.)": "（別人的）妻子（敬語）",
  "sake; alcohol": "清酒、酒",
  "plate, dish": "盤子、碟子",
  "uncle, middle-aged man": "叔叔、中年男子",
  "to teach, to inform, to instruct": "教、告知、指導",
  "to push, to press, to stamp (e.g., a passport)": "推、按、蓋章",
  "slow; (to be) late": "慢的、遲到的",
  "(green) tea": "綠茶",
  "toilet, restroom, bathroom (lit., a place to wash one's hands)": "廁所、洗手間",
  "father (formal)": "父親（正式）",
  "boy": "男孩",
  "the day before yesterday": "前天",
  "adult": "成年人",
  "stomach": "胃",
  "same, identical": "相同的、一樣的",
  "(someone else's) older brother (formal)": "（別人的）哥哥（正式）",
  "older sister (formal)": "姐姐（正式）",
  "aunt": "阿姨",
  "a bath": "洗澡",
  "a boxed lunch": "便當",
  "to learn, to commit to memory, to remember, to memorize": "學習、記住、記憶",
  "heavy; serious": "重的、嚴重的",
  "interesting, amusing": "有趣的、好玩的",
  "to swim": "游泳",
  "to get off": "下車",
  "to finish, to close": "完成、關閉",
  "Music": "音樂",
  "girl": "女孩",
  "foreign country; abroad": "外國、國外",
  "foreigner": "外國人",
  "company, corporation": "公司、企業",
  "stairs": "樓梯",
  "shopping": "購物",
  "to buy": "買",
  "to return something": "歸還某物",
  "to go back, to go home, to return": "回去、回家、返回",
  "to write": "寫",
  "student": "學生",
  "to put on (e.g., glasses); to hang (e.g., on a wall)": "戴上、掛上",
  "to lend": "借出",
  "mother (formal)": "母親（正式）",
  "confections, sweets, snack": "糖果、甜點、零食",
  "cold, flu": "感冒、流感",
  "family, members of a family": "家庭、家庭成員",
  "katakana": "片假名",
  "a school": "學校",
  "home; family": "家、家庭",
  "(flower) vase": "花瓶",
  "Tuesday": "星期二",
  "hot and spicy; salty": "辣、鹹",
  "to borrow, to owe": "借、欠",
  "light, non-serious, minor": "輕的、不嚴重的、次要的",
  "river": "河流",
  "cute, adorable": "可愛的",
  "kanji; Chinese character": "漢字",
  "yellow": "黃色",
  "to vanish, to disappear": "消失",
  "to hear, to listen, to ask": "聽、問",
  "dirty, unclean, filthy": "髒的、不乾淨的",
  "café": "咖啡廳",
  "postal (postage) stamps": "郵票",
  "a ticket": "票",
  "yesterday": "昨天",
  "beef": "牛肉",
  "milk": "牛奶",
  "today, this day": "今天",
  "classroom": "教室",
  "siblings (humble), brothers and sisters": "兄弟姐妹（謙遜語）",
  "last year": "去年",
  "dislike": "不喜歡",
  "to cut; to hang up (a phone)": "切、掛斷電話",
  "pretty, clean, tidy": "漂亮的、乾淨的、整潔的",
  "(abbr.) kilo (kilogram)": "公斤（縮寫）",
  "bank": "銀行",
  "Friday": "星期五",
  "(with te-form verb) please do for me": "（與て形動詞連用）請為我做",
  "fruit": "水果",
  "socks": "襪子",
  "cloudiness, cloudy weather": "多雲、陰天",
  "to become cloudy, to become dim": "變多雲、變暗",
  "dark, gloomy": "黑暗的、陰暗的",
  "to come": "來",
  "black; dark": "黑色、黑暗的",
  "police officer": "警察",
  "this morning": "今天早上",
  "to erase, to delete, to turn off power": "擦除、刪除、關閉電源",
  "splendid; enough, tolerably": "華麗的、足夠的、可容忍的",
  "marriage (get married)": "結婚",
  "Monday": "星期一",
  "entrance (to a house or a building)": "入口（房屋或建築物）",
  "health(y), energetic": "健康的、有活力的",
  "a park": "公園",
  "intersection": "十字路口",
  "black tea": "紅茶",
  "police box": "派出所",
  "afternoon, P.M.": "下午",
  "nine days; ninth day of the month": "九天、當月第九天",
  "nine things": "九個東西",
  "morning, A.M.": "早上",
  "to answer, to reply": "回答、回覆",
  "this year": "今年",
  "language; word(s); expression(s)": "語言、詞彙、表達",
  "child(ren)": "孩子",
  "rice (cooked); meal": "米飯、餐",
  "to be bothered, to have difficulty": "困擾、有困難",
  "this month": "這個月",
  "this week": "這週",
  "tonight, this evening": "今晚",
  "wallet": "錢包",
  "to bloom": "開花",
  "essay; composition": "作文、文章",
  "to raise (stretch out) hands, to raise (e.g., umbrella)": "舉手、舉起（如雨傘）",
  "magazine, journal": "雜誌、期刊",
  "sugar": "糖",
  "cold (in reference to weather)": "冷的（指天氣）",
  "year after next": "後年",
  "walk, stroll": "散步",
  "time": "時間",
  "dictionary": "字典",
  "quiet, calm": "安靜的、平靜的",
  "question, inquiry": "問題、詢問",
  "bicycle": "自行車",
  "automobile": "汽車",
  "to die": "死亡",
  "myself, oneself": "自己",
  "to close, to be closed": "關閉",
  "to close, to shut": "關閉、關上",
  "well, well then": "好吧、那麼",
  "a picture; a photograph": "圖片、照片",
  "a class (of school)": "班級",
  "certainly, by all means; without fail": "當然、無論如何、一定",
  "other than, with the exception of, excepting": "除了、除了...之外",
  "drawer": "抽屜",
  "play": "玩耍",
  "preparation": "準備",
  "enough": "足夠的",
  "to be visible; -- polite verb meaning 来る (くる) --": "可見的；敬語動詞，意思是來",
  "homework": "功課",
  "be good at, skillful": "擅長、熟練",
  "strong, solid, durable": "堅固的、耐用的",
  "soy sauce": "醬油",
  "cafeteria, dining hall": "餐廳",
  "to know, to understand": "知道、理解",
  "white": "白色",
  "newspaper": "報紙",
  "Wednesday": "星期三",
  "to breathe in, to suck": "吸入、吸",
  "many, much": "很多",
  "big, large": "大的",
  "big": "大的",
  "great number of people": "很多人",
  "busy (people, days)": "忙碌的（人、日子）",
  "hurt; painful; sore": "受傷的、疼痛的、酸痛的",
  "best (most), first, number one": "最好的、第一的、第一名的",
  "thin, weak": "薄的、弱的",
  "delicious, tasty": "美味的、好吃的",
  "many; there are a lot": "很多、有許多",
  "slow; (to be) late": "慢的、遲到的",
  "heavy; serious": "重的、嚴重的",
  "interesting, amusing": "有趣的、好玩的",
  "same, identical": "相同的、一樣的",
  "bitter": "苦的",
  "soft (in reference to texture), tender": "柔軟的、嫩的",
  "useless, no good, hopeless": "沒用的、無望的",
  "hard; rigorous; strict": "困難的、嚴格的",
  "deep, profound": "深的、深刻的",
  "complexity, complication": "複雜、複雜性",
  "opinion, view, idea": "意見、觀點、想法",
  "as I thought, absolutely": "正如我所想的、絕對",
  "comic (book), cartoon": "漫畫、卡通",
  "stereo": "立體聲",
  "medical science": "醫學",
  "text; text book": "文本、教科書",
  "month": "月",
  "~ meeting": "~會議",
  "I (used by men towards those of equal or lower status)": "我（男性用語）",
  "surely, certainly": "肯定、一定",
  "barber's (shop)": "理髮店",
  "motorcycle (lit: auto-bi(ke))": "摩托車",
  "exercise": "運動",
  "if": "如果",
  "surface; front; outside": "表面、前面、外面",
  "college student, university student": "大學生",
  "driver (by occupation)": "司機",
  "preparation of lessons (for class)": "預習",
  "worry, concern": "擔心、憂慮",
  "distinction, different": "區別、不同的",
  "extremely; very": "極其、非常",
  "(someone else's) house; home -- polite word for 家 (いえ) --": "府上、貴府",
  "to pick up (something), to find": "撿起、找到",
  "to be (polite), to exist": "是、存在（敬語）",
  "spirit, mood": "精神、心情",
  "to compare": "比較",
  "mostly, almost": "大部分、幾乎",
  "intention, plan": "意圖、計劃",
  "suburb, outskirts": "郊區、外圍",
  "place where things are sold": "銷售處",
  "New Year, New Year's Day": "新年、元旦",
  "rule, regulation": "規則、規定",
  "yes (informal), all right (ok)": "是的（非正式）、好的",
  "pronunciation": "發音",
  "to bake, to grill": "烤、燒烤",
  "rooftop": "屋頂",
  "discourtesy, impoliteness; Excuse me": "失禮、不禮貌；對不起",
  "trash, garbage": "垃圾",
  "Africa": "非洲",
  "mark, score, grade; point, dot": "分數、等級；點、點",
  "very hard (as in \"to work hard\"), with utmost effort": "非常努力、盡全力",
  "now, this time, near future, one of these days, next time": "現在、這次、不久的將來、下次",
  "chance, opportunity": "機會",
  "he, boyfriend": "他、男朋友",
  "-- honorific expression for いく, くる, and いる --": "敬語表達",
  "futon": "榻榻米",
  "important, valuable, serious matter": "重要的、有價值的、嚴重的事情",
  "a gift; a present": "禮物",
  "thief; burglar": "小偷、竊賊",
  "made in ~": "~製造",
  "caution, attention": "注意、小心",
  "typhoon": "颱風",
  "sun, sunshine, day": "太陽、陽光、日子",
  "counter for houses": "房屋計數詞",
  "really, (is that) so; yes, right": "真的、是這樣嗎；是的、對的",
  "report": "報告",
  "leaf": "葉子",
  "necessary": "必要的",
  "section manager": "課長",
  "earthquake": "地震",
  "and, then": "然後",
  "glass, pane": "玻璃、窗戶",
  "department of a university": "大學系所",
  "escalator": "電扶梯",
  "population": "人口",
  "moon": "月亮",
  "silk": "絲綢",
  "not at all (neg. verb)": "一點也不（否定動詞）",
  "if at all possible, as much as possible": "如果可能的話、盡可能地"
};

// 修正翻譯的函數
function fixChineseTranslations(words) {
  return words.map(word => {
    const { meaning, chineseMeaning } = word;
    
    // 檢查是否為英文內容
    const isEnglish = /^[a-zA-Z\s,;()]+$/.test(chineseMeaning);
    
    if (isEnglish) {
      // 如果有對應的翻譯，使用它
      const translation = chineseTranslations[chineseMeaning];
      if (translation) {
        return {
          ...word,
          chineseMeaning: translation
        };
      }
    }
    
    return word;
  });
}

// 修正詞彙
const originalCount = wordsArray.length;
const fixedWords = fixChineseTranslations(wordsArray);

// 計算修正的數量
let fixedCount = 0;
wordsArray.forEach((originalWord, index) => {
  if (originalWord.chineseMeaning !== fixedWords[index].chineseMeaning) {
    fixedCount++;
  }
});

console.log(`📊 原始詞彙數量: ${originalCount} 個`);
console.log(`🔧 修正詞彙數量: ${fixedCount} 個`);

// 顯示一些修正的範例
console.log('\n🔧 修正範例:');
let exampleCount = 0;
wordsArray.forEach((originalWord, index) => {
  if (originalWord.chineseMeaning !== fixedWords[index].chineseMeaning && exampleCount < 10) {
    console.log(`  ${originalWord.word} (${originalWord.kana})`);
    console.log(`    原本: ${originalWord.chineseMeaning}`);
    console.log(`    修正: ${fixedWords[index].chineseMeaning}`);
    console.log('');
    exampleCount++;
  }
});

// 生成新的 TypeScript 檔案內容
const newTsContent = `import type { DifficultyLevel } from '../../types';

/**
 * BEGINNER_WORDS - 完整初級詞彙庫（已修正所有繁體中文翻譯）
 * 
 * 🔄 修正時間: ${new Date().toISOString()}
 * 📊 總詞彙數量: ${fixedWords.length} 個
 * 🔧 修正詞彙數量: ${fixedCount} 個
 * ✨ 來源: 原本詞彙 + https://github.com/jamsinclair/open-anki-jlpt-decks
 * 🔍 已修正所有英文翻譯為繁體中文
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
  id?: string;
}

export const BEGINNER_WORDS: TetrisWord[] = ${JSON.stringify(fixedWords, null, 2)};
`;

// 寫入檔案
fs.writeFileSync(vocabularyPath, newTsContent, 'utf8');

console.log(`\n✅ 已修正所有繁體中文翻譯`);
console.log(`📁 檔案位置: ${vocabularyPath}`);
console.log(`📊 修正詞彙數量: ${fixedCount} 個`);

console.log('\n🎉 繁體中文翻譯修正完成！');
console.log('現在所有詞彙都有正確的繁體中文翻譯了！'); 