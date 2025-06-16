import type { DifficultyLevel } from '@/types';

/**
 * 俄羅斯方塊模式單字數據
 */

export interface TetrisWord {
  word: string;
  kana: string;
  meaning: string;
  difficulty: DifficultyLevel;
  category: string;
  kanji?: string; // 漢字版本（可選）
  isKanji?: boolean; // 是否為漢字方塊
}

// 初級單字（3-4字）
export const BEGINNER_WORDS: TetrisWord[] = [
  // 日常用語
  { word: 'ともだち', kana: 'ともだち', meaning: '朋友', difficulty: 'beginner', category: '人物' },
  { word: 'がっこう', kana: 'がっこう', meaning: '學校', difficulty: 'beginner', category: '場所' },
  { word: 'せんせい', kana: 'せんせい', meaning: '老師', difficulty: 'beginner', category: '人物' },
  { word: 'でんしゃ', kana: 'でんしゃ', meaning: '電車', difficulty: 'beginner', category: '交通' },
  { word: 'やすみ', kana: 'やすみ', meaning: '休息', difficulty: 'beginner', category: '動作' },
  { word: 'べんきょう', kana: 'べんきょう', meaning: '學習', difficulty: 'beginner', category: '動作' },
  { word: 'りょうり', kana: 'りょうり', meaning: '料理', difficulty: 'beginner', category: '食物' },
  { word: 'しごと', kana: 'しごと', meaning: '工作', difficulty: 'beginner', category: '動作' },
  
  // 食物
  { word: 'あさごはん', kana: 'あさごはん', meaning: '早餐', difficulty: 'beginner', category: '食物' },
  { word: 'ひるごはん', kana: 'ひるごはん', meaning: '午餐', difficulty: 'beginner', category: '食物' },
  { word: 'ばんごはん', kana: 'ばんごはん', meaning: '晚餐', difficulty: 'beginner', category: '食物' },
  { word: 'みず', kana: 'みず', meaning: '水', difficulty: 'beginner', category: '食物' },
  { word: 'おちゃ', kana: 'おちゃ', meaning: '茶', difficulty: 'beginner', category: '食物' },
  { word: 'ぱん', kana: 'ぱん', meaning: '麵包', difficulty: 'beginner', category: '食物' },
  { word: 'ごはん', kana: 'ごはん', meaning: '米飯', difficulty: 'beginner', category: '食物' },
  { word: 'やさい', kana: 'やさい', meaning: '蔬菜', difficulty: 'beginner', category: '食物' },
  { word: 'くだもの', kana: 'くだもの', meaning: '水果', difficulty: 'beginner', category: '食物' },
  { word: 'にく', kana: 'にく', meaning: '肉', difficulty: 'beginner', category: '食物' },
  { word: 'さかな', kana: 'さかな', meaning: '魚', difficulty: 'beginner', category: '食物' },
  { word: 'たまご', kana: 'たまご', meaning: '雞蛋', difficulty: 'beginner', category: '食物' },
  { word: 'みるく', kana: 'みるく', meaning: '牛奶', difficulty: 'beginner', category: '食物' },
  { word: 'ケーキ', kana: 'けーき', meaning: '蛋糕', difficulty: 'beginner', category: '食物' },
  
  // 家族
  { word: 'おとうさん', kana: 'おとうさん', meaning: '爸爸', difficulty: 'beginner', category: '家族' },
  { word: 'おかあさん', kana: 'おかあさん', meaning: '媽媽', difficulty: 'beginner', category: '家族' },
  { word: 'おにいさん', kana: 'おにいさん', meaning: '哥哥', difficulty: 'beginner', category: '家族' },
  { word: 'おねえさん', kana: 'おねえさん', meaning: '姐姐', difficulty: 'beginner', category: '家族' },
  { word: 'おじいさん', kana: 'おじいさん', meaning: '爺爺', difficulty: 'beginner', category: '家族' },
  { word: 'おばあさん', kana: 'おばあさん', meaning: '奶奶', difficulty: 'beginner', category: '家族' },
  { word: 'いもうと', kana: 'いもうと', meaning: '妹妹', difficulty: 'beginner', category: '家族' },
  { word: 'おとうと', kana: 'おとうと', meaning: '弟弟', difficulty: 'beginner', category: '家族' },
  { word: 'かぞく', kana: 'かぞく', meaning: '家族', difficulty: 'beginner', category: '家族' },
  
  // 時間
  { word: 'あさ', kana: 'あさ', meaning: '早上', difficulty: 'beginner', category: '時間' },
  { word: 'ひる', kana: 'ひる', meaning: '中午', difficulty: 'beginner', category: '時間' },
  { word: 'ばん', kana: 'ばん', meaning: '晚上', difficulty: 'beginner', category: '時間' },
  { word: 'きょう', kana: 'きょう', meaning: '今天', difficulty: 'beginner', category: '時間' },
  { word: 'あした', kana: 'あした', meaning: '明天', difficulty: 'beginner', category: '時間' },
  { word: 'きのう', kana: 'きのう', meaning: '昨天', difficulty: 'beginner', category: '時間' },
  { word: 'まいにち', kana: 'まいにち', meaning: '每天', difficulty: 'beginner', category: '時間' },
  { word: 'しゅうまつ', kana: 'しゅうまつ', meaning: '週末', difficulty: 'beginner', category: '時間' },
  { word: 'やすみ', kana: 'やすみ', meaning: '假期', difficulty: 'beginner', category: '時間' },
  
  // 動物
  { word: 'いぬ', kana: 'いぬ', meaning: '狗', difficulty: 'beginner', category: '動物' },
  { word: 'ねこ', kana: 'ねこ', meaning: '貓', difficulty: 'beginner', category: '動物' },
  { word: 'とり', kana: 'とり', meaning: '鳥', difficulty: 'beginner', category: '動物' },
  { word: 'うま', kana: 'うま', meaning: '馬', difficulty: 'beginner', category: '動物' },
  { word: 'ぞう', kana: 'ぞう', meaning: '大象', difficulty: 'beginner', category: '動物' },
  { word: 'らいおん', kana: 'らいおん', meaning: '獅子', difficulty: 'beginner', category: '動物' },
  { word: 'うさぎ', kana: 'うさぎ', meaning: '兔子', difficulty: 'beginner', category: '動物' },
  { word: 'くま', kana: 'くま', meaning: '熊', difficulty: 'beginner', category: '動物' },
  
  // 色彩
  { word: 'あか', kana: 'あか', meaning: '紅色', difficulty: 'beginner', category: '色彩' },
  { word: 'あお', kana: 'あお', meaning: '藍色', difficulty: 'beginner', category: '色彩' },
  { word: 'きいろ', kana: 'きいろ', meaning: '黃色', difficulty: 'beginner', category: '色彩' },
  { word: 'みどり', kana: 'みどり', meaning: '綠色', difficulty: 'beginner', category: '色彩' },
  { word: 'しろ', kana: 'しろ', meaning: '白色', difficulty: 'beginner', category: '色彩' },
  { word: 'くろ', kana: 'くろ', meaning: '黑色', difficulty: 'beginner', category: '色彩' },
  
  // 天氣
  { word: 'はれ', kana: 'はれ', meaning: '晴天', difficulty: 'beginner', category: '天氣' },
  { word: 'あめ', kana: 'あめ', meaning: '雨', difficulty: 'beginner', category: '天氣' },
  { word: 'ゆき', kana: 'ゆき', meaning: '雪', difficulty: 'beginner', category: '天氣' },
  { word: 'かぜ', kana: 'かぜ', meaning: '風', difficulty: 'beginner', category: '天氣' },
  { word: 'くもり', kana: 'くもり', meaning: '陰天', difficulty: 'beginner', category: '天氣' },
  
  // 身體部位
  { word: 'あたま', kana: 'あたま', meaning: '頭', difficulty: 'beginner', category: '身體' },
  { word: 'かお', kana: 'かお', meaning: '臉', difficulty: 'beginner', category: '身體' },
  { word: 'て', kana: 'て', meaning: '手', difficulty: 'beginner', category: '身體' },
  { word: 'あし', kana: 'あし', meaning: '腳', difficulty: 'beginner', category: '身體' },
  { word: 'め', kana: 'め', meaning: '眼睛', difficulty: 'beginner', category: '身體' },
  { word: 'はな', kana: 'はな', meaning: '鼻子', difficulty: 'beginner', category: '身體' },
  { word: 'くち', kana: 'くち', meaning: '嘴巴', difficulty: 'beginner', category: '身體' },
  { word: 'みみ', kana: 'みみ', meaning: '耳朵', difficulty: 'beginner', category: '身體' },
  
  // 數字
  { word: 'ひとつ', kana: 'ひとつ', meaning: '一個', difficulty: 'beginner', category: '數字' },
  { word: 'ふたつ', kana: 'ふたつ', meaning: '兩個', difficulty: 'beginner', category: '數字' },
  { word: 'みっつ', kana: 'みっつ', meaning: '三個', difficulty: 'beginner', category: '數字' },
  { word: 'よっつ', kana: 'よっつ', meaning: '四個', difficulty: 'beginner', category: '數字' },
  { word: 'いつつ', kana: 'いつつ', meaning: '五個', difficulty: 'beginner', category: '數字' },
];

// 中級單字（4-5字）
export const INTERMEDIATE_WORDS: TetrisWord[] = [
  // 學校相關
  { word: 'きょうしつ', kana: 'きょうしつ', meaning: '教室', difficulty: 'normal', category: '學校' },
  { word: 'しゅくだい', kana: 'しゅくだい', meaning: '作業', difficulty: 'normal', category: '學校' },
  { word: 'じゅぎょう', kana: 'じゅぎょう', meaning: '上課', difficulty: 'normal', category: '學校' },
  { word: 'せいと', kana: 'せいと', meaning: '學生', difficulty: 'normal', category: '學校' },
  { word: 'としょかん', kana: 'としょかん', meaning: '圖書館', difficulty: 'normal', category: '學校' },
  { word: 'たいいくかん', kana: 'たいいくかん', meaning: '體育館', difficulty: 'normal', category: '學校' },
  { word: 'しょくどう', kana: 'しょくどう', meaning: '食堂', difficulty: 'normal', category: '學校' },
  { word: 'ほけんしつ', kana: 'ほけんしつ', meaning: '保健室', difficulty: 'normal', category: '學校' },
  { word: 'こうちょうしつ', kana: 'こうちょうしつ', meaning: '校長室', difficulty: 'normal', category: '學校' },
  { word: 'しょくいんしつ', kana: 'しょくいんしつ', meaning: '職員室', difficulty: 'normal', category: '學校' },
  { word: 'うんどうじょう', kana: 'うんどうじょう', meaning: '運動場', difficulty: 'normal', category: '學校' },
  { word: 'プール', kana: 'ぷーる', meaning: '游泳池', difficulty: 'normal', category: '學校' },
  
  // 職業
  { word: 'いしゃ', kana: 'いしゃ', meaning: '醫生', difficulty: 'normal', category: '職業' },
  { word: 'かんごし', kana: 'かんごし', meaning: '護士', difficulty: 'normal', category: '職業' },
  { word: 'けいさつかん', kana: 'けいさつかん', meaning: '警察', difficulty: 'normal', category: '職業' },
  { word: 'しょうぼうし', kana: 'しょうぼうし', meaning: '消防員', difficulty: 'normal', category: '職業' },
  { word: 'うんてんしゅ', kana: 'うんてんしゅ', meaning: '司機', difficulty: 'normal', category: '職業' },
  { word: 'てんいん', kana: 'てんいん', meaning: '店員', difficulty: 'normal', category: '職業' },
  { word: 'ぎんこういん', kana: 'ぎんこういん', meaning: '銀行員', difficulty: 'normal', category: '職業' },
  { word: 'ゆうびんやさん', kana: 'ゆうびんやさん', meaning: '郵差', difficulty: 'normal', category: '職業' },
  { word: 'りょうりにん', kana: 'りょうりにん', meaning: '廚師', difficulty: 'normal', category: '職業' },
  { word: 'びようし', kana: 'びようし', meaning: '美髮師', difficulty: 'normal', category: '職業' },
  { word: 'でんきや', kana: 'でんきや', meaning: '電器行', difficulty: 'normal', category: '職業' },
  { word: 'ほんや', kana: 'ほんや', meaning: '書店', difficulty: 'normal', category: '職業' },
  
  // 趣味活動
  { word: 'どくしょ', kana: 'どくしょ', meaning: '讀書', difficulty: 'normal', category: '趣味' },
  { word: 'おんがく', kana: 'おんがく', meaning: '音樂', difficulty: 'normal', category: '趣味' },
  { word: 'えいが', kana: 'えいが', meaning: '電影', difficulty: 'normal', category: '趣味' },
  { word: 'スポーツ', kana: 'すぽーつ', meaning: '運動', difficulty: 'normal', category: '趣味' },
  { word: 'りょこう', kana: 'りょこう', meaning: '旅行', difficulty: 'normal', category: '趣味' },
  { word: 'しゃしん', kana: 'しゃしん', meaning: '攝影', difficulty: 'normal', category: '趣味' },
  { word: 'えかき', kana: 'えかき', meaning: '畫畫', difficulty: 'normal', category: '趣味' },
  { word: 'うた', kana: 'うた', meaning: '唱歌', difficulty: 'normal', category: '趣味' },
  { word: 'ダンス', kana: 'だんす', meaning: '跳舞', difficulty: 'normal', category: '趣味' },
  { word: 'ゲーム', kana: 'げーむ', meaning: '遊戲', difficulty: 'normal', category: '趣味' },
  { word: 'アニメ', kana: 'あにめ', meaning: '動畫', difficulty: 'normal', category: '趣味' },
  { word: 'マンガ', kana: 'まんが', meaning: '漫畫', difficulty: 'normal', category: '趣味' },
  
  // 場所
  { word: 'びょういん', kana: 'びょういん', meaning: '醫院', difficulty: 'normal', category: '場所' },
  { word: 'ぎんこう', kana: 'ぎんこう', meaning: '銀行', difficulty: 'normal', category: '場所' },
  { word: 'ゆうびんきょく', kana: 'ゆうびんきょく', meaning: '郵局', difficulty: 'normal', category: '場所' },
  { word: 'こうえん', kana: 'こうえん', meaning: '公園', difficulty: 'normal', category: '場所' },
  { word: 'デパート', kana: 'でぱーと', meaning: '百貨公司', difficulty: 'normal', category: '場所' },
  { word: 'スーパー', kana: 'すーぱー', meaning: '超市', difficulty: 'normal', category: '場所' },
  { word: 'コンビニ', kana: 'こんびに', meaning: '便利商店', difficulty: 'normal', category: '場所' },
  { word: 'レストラン', kana: 'れすとらん', meaning: '餐廳', difficulty: 'normal', category: '場所' },
  { word: 'カフェ', kana: 'かふぇ', meaning: '咖啡廳', difficulty: 'normal', category: '場所' },
  { word: 'ホテル', kana: 'ほてる', meaning: '飯店', difficulty: 'normal', category: '場所' },
  { word: 'えきまえ', kana: 'えきまえ', meaning: '車站前', difficulty: 'normal', category: '場所' },
  { word: 'くうこう', kana: 'くうこう', meaning: '機場', difficulty: 'normal', category: '場所' },
  
  // 交通工具
  { word: 'でんしゃ', kana: 'でんしゃ', meaning: '電車', difficulty: 'normal', category: '交通' },
  { word: 'バス', kana: 'ばす', meaning: '公車', difficulty: 'normal', category: '交通' },
  { word: 'タクシー', kana: 'たくしー', meaning: '計程車', difficulty: 'normal', category: '交通' },
  { word: 'じてんしゃ', kana: 'じてんしゃ', meaning: '腳踏車', difficulty: 'normal', category: '交通' },
  { word: 'オートバイ', kana: 'おーとばい', meaning: '機車', difficulty: 'normal', category: '交通' },
  { word: 'ひこうき', kana: 'ひこうき', meaning: '飛機', difficulty: 'normal', category: '交通' },
  { word: 'ふね', kana: 'ふね', meaning: '船', difficulty: 'normal', category: '交通' },
  { word: 'しんかんせん', kana: 'しんかんせん', meaning: '新幹線', difficulty: 'normal', category: '交通' },
  
  // 季節活動
  { word: 'はなみ', kana: 'はなみ', meaning: '賞花', difficulty: 'normal', category: '季節' },
  { word: 'なつまつり', kana: 'なつまつり', meaning: '夏日祭', difficulty: 'normal', category: '季節' },
  { word: 'ゆきまつり', kana: 'ゆきまつり', meaning: '雪祭', difficulty: 'normal', category: '季節' },
  { word: 'おしょうがつ', kana: 'おしょうがつ', meaning: '新年', difficulty: 'normal', category: '季節' },
  { word: 'クリスマス', kana: 'くりすます', meaning: '聖誕節', difficulty: 'normal', category: '季節' },
  { word: 'たんじょうび', kana: 'たんじょうび', meaning: '生日', difficulty: 'normal', category: '季節' },
  
  // 電子產品
  { word: 'でんわ', kana: 'でんわ', meaning: '電話', difficulty: 'normal', category: '電子' },
  { word: 'けいたい', kana: 'けいたい', meaning: '手機', difficulty: 'normal', category: '電子' },
  { word: 'パソコン', kana: 'ぱそこん', meaning: '電腦', difficulty: 'normal', category: '電子' },
  { word: 'テレビ', kana: 'てれび', meaning: '電視', difficulty: 'normal', category: '電子' },
  { word: 'ラジオ', kana: 'らじお', meaning: '收音機', difficulty: 'normal', category: '電子' },
  { word: 'カメラ', kana: 'かめら', meaning: '相機', difficulty: 'normal', category: '電子' },
  { word: 'ビデオ', kana: 'びでお', meaning: '錄影機', difficulty: 'normal', category: '電子' },
];

// 高級單字（5-6字）
export const ADVANCED_WORDS: TetrisWord[] = [
  // 抽象概念
  { word: 'けいけん', kana: 'けいけん', meaning: '經驗', difficulty: 'hard', category: '抽象' },
  { word: 'きかい', kana: 'きかい', meaning: '機會', difficulty: 'hard', category: '抽象' },
  { word: 'もんだい', kana: 'もんだい', meaning: '問題', difficulty: 'hard', category: '抽象' },
  { word: 'かいけつ', kana: 'かいけつ', meaning: '解決', difficulty: 'hard', category: '抽象' },
  { word: 'しんぱい', kana: 'しんぱい', meaning: '擔心', difficulty: 'hard', category: '感情' },
  { word: 'きぼう', kana: 'きぼう', meaning: '希望', difficulty: 'hard', category: '感情' },
  { word: 'ゆめ', kana: 'ゆめ', meaning: '夢想', difficulty: 'hard', category: '感情' },
  { word: 'しあわせ', kana: 'しあわせ', meaning: '幸福', difficulty: 'hard', category: '感情' },
  { word: 'かなしみ', kana: 'かなしみ', meaning: '悲傷', difficulty: 'hard', category: '感情' },
  { word: 'よろこび', kana: 'よろこび', meaning: '喜悅', difficulty: 'hard', category: '感情' },
  { word: 'いかり', kana: 'いかり', meaning: '憤怒', difficulty: 'hard', category: '感情' },
  { word: 'おどろき', kana: 'おどろき', meaning: '驚訝', difficulty: 'hard', category: '感情' },
  
  // 複雜動作
  { word: 'じゅんび', kana: 'じゅんび', meaning: '準備', difficulty: 'hard', category: '動作' },
  { word: 'せつめい', kana: 'せつめい', meaning: '說明', difficulty: 'hard', category: '動作' },
  { word: 'そうだん', kana: 'そうだん', meaning: '商量', difficulty: 'hard', category: '動作' },
  { word: 'けんきゅう', kana: 'けんきゅう', meaning: '研究', difficulty: 'hard', category: '動作' },
  { word: 'はっけん', kana: 'はっけん', meaning: '發現', difficulty: 'hard', category: '動作' },
  { word: 'はつめい', kana: 'はつめい', meaning: '發明', difficulty: 'hard', category: '動作' },
  { word: 'そうぞう', kana: 'そうぞう', meaning: '創造', difficulty: 'hard', category: '動作' },
  { word: 'けいかく', kana: 'けいかく', meaning: '計劃', difficulty: 'hard', category: '動作' },
  { word: 'じっこう', kana: 'じっこう', meaning: '執行', difficulty: 'hard', category: '動作' },
  { word: 'かんせい', kana: 'かんせい', meaning: '完成', difficulty: 'hard', category: '動作' },
  { word: 'しっぱい', kana: 'しっぱい', meaning: '失敗', difficulty: 'hard', category: '動作' },
  { word: 'せいこう', kana: 'せいこう', meaning: '成功', difficulty: 'hard', category: '動作' },
  
  // 社會概念
  { word: 'しゃかい', kana: 'しゃかい', meaning: '社會', difficulty: 'hard', category: '社會' },
  { word: 'せいじ', kana: 'せいじ', meaning: '政治', difficulty: 'hard', category: '社會' },
  { word: 'けいざい', kana: 'けいざい', meaning: '經濟', difficulty: 'hard', category: '社會' },
  { word: 'ぶんか', kana: 'ぶんか', meaning: '文化', difficulty: 'hard', category: '社會' },
  { word: 'でんとう', kana: 'でんとう', meaning: '傳統', difficulty: 'hard', category: '社會' },
  { word: 'れきし', kana: 'れきし', meaning: '歷史', difficulty: 'hard', category: '社會' },
  { word: 'みらい', kana: 'みらい', meaning: '未來', difficulty: 'hard', category: '社會' },
  { word: 'げんざい', kana: 'げんざい', meaning: '現在', difficulty: 'hard', category: '社會' },
  { word: 'かこ', kana: 'かこ', meaning: '過去', difficulty: 'hard', category: '社會' },
  { word: 'へいわ', kana: 'へいわ', meaning: '和平', difficulty: 'hard', category: '社會' },
  { word: 'せんそう', kana: 'せんそう', meaning: '戰爭', difficulty: 'hard', category: '社會' },
  { word: 'じゆう', kana: 'じゆう', meaning: '自由', difficulty: 'hard', category: '社會' },
  
  // 學術領域
  { word: 'かがく', kana: 'かがく', meaning: '科學', difficulty: 'hard', category: '學術' },
  { word: 'すうがく', kana: 'すうがく', meaning: '數學', difficulty: 'hard', category: '學術' },
  { word: 'ぶつり', kana: 'ぶつり', meaning: '物理', difficulty: 'hard', category: '學術' },
  { word: 'かがく', kana: 'かがく', meaning: '化學', difficulty: 'hard', category: '學術' },
  { word: 'せいぶつ', kana: 'せいぶつ', meaning: '生物', difficulty: 'hard', category: '學術' },
  { word: 'ちり', kana: 'ちり', meaning: '地理', difficulty: 'hard', category: '學術' },
  { word: 'れきし', kana: 'れきし', meaning: '歷史', difficulty: 'hard', category: '學術' },
  { word: 'こくご', kana: 'こくご', meaning: '國語', difficulty: 'hard', category: '學術' },
  { word: 'えいご', kana: 'えいご', meaning: '英語', difficulty: 'hard', category: '學術' },
  { word: 'びじゅつ', kana: 'びじゅつ', meaning: '美術', difficulty: 'hard', category: '學術' },
  { word: 'おんがく', kana: 'おんがく', meaning: '音樂', difficulty: 'hard', category: '學術' },
  { word: 'たいいく', kana: 'たいいく', meaning: '體育', difficulty: 'hard', category: '學術' },
  
  // 自然現象
  { word: 'じしん', kana: 'じしん', meaning: '地震', difficulty: 'hard', category: '自然' },
  { word: 'たいふう', kana: 'たいふう', meaning: '颱風', difficulty: 'hard', category: '自然' },
  { word: 'つなみ', kana: 'つなみ', meaning: '海嘯', difficulty: 'hard', category: '自然' },
  { word: 'かざん', kana: 'かざん', meaning: '火山', difficulty: 'hard', category: '自然' },
  { word: 'にじ', kana: 'にじ', meaning: '彩虹', difficulty: 'hard', category: '自然' },
  { word: 'いなずま', kana: 'いなずま', meaning: '閃電', difficulty: 'hard', category: '自然' },
  { word: 'かみなり', kana: 'かみなり', meaning: '雷', difficulty: 'hard', category: '自然' },
  { word: 'ほし', kana: 'ほし', meaning: '星星', difficulty: 'hard', category: '自然' },
  { word: 'つき', kana: 'つき', meaning: '月亮', difficulty: 'hard', category: '自然' },
  { word: 'たいよう', kana: 'たいよう', meaning: '太陽', difficulty: 'hard', category: '自然' },
  
  // 技術概念
  { word: 'ぎじゅつ', kana: 'ぎじゅつ', meaning: '技術', difficulty: 'hard', category: '技術' },
  { word: 'コンピューター', kana: 'こんぴゅーたー', meaning: '電腦', difficulty: 'hard', category: '技術' },
  { word: 'インターネット', kana: 'いんたーねっと', meaning: '網際網路', difficulty: 'hard', category: '技術' },
  { word: 'ソフトウェア', kana: 'そふとうぇあ', meaning: '軟體', difficulty: 'hard', category: '技術' },
  { word: 'ハードウェア', kana: 'はーどうぇあ', meaning: '硬體', difficulty: 'hard', category: '技術' },
  { word: 'プログラム', kana: 'ぷろぐらむ', meaning: '程式', difficulty: 'hard', category: '技術' },
  { word: 'データベース', kana: 'でーたべーす', meaning: '資料庫', difficulty: 'hard', category: '技術' },
  { word: 'ネットワーク', kana: 'ねっとわーく', meaning: '網路', difficulty: 'hard', category: '技術' },
];

// 漢字單字（2字）- 第5關開始出現
export const KANJI_2_WORDS: TetrisWord[] = [
  // 基礎漢字 - 場所
  { word: '学校', kana: 'がっこう', meaning: '學校', difficulty: 'normal', category: '場所', kanji: '学校', isKanji: true },
  { word: '病院', kana: 'びょういん', meaning: '醫院', difficulty: 'normal', category: '場所', kanji: '病院', isKanji: true },
  { word: '銀行', kana: 'ぎんこう', meaning: '銀行', difficulty: 'normal', category: '場所', kanji: '銀行', isKanji: true },
  { word: '公園', kana: 'こうえん', meaning: '公園', difficulty: 'normal', category: '場所', kanji: '公園', isKanji: true },
  { word: '駅前', kana: 'えきまえ', meaning: '車站前', difficulty: 'normal', category: '場所', kanji: '駅前', isKanji: true },
  { word: '空港', kana: 'くうこう', meaning: '機場', difficulty: 'normal', category: '場所', kanji: '空港', isKanji: true },
  { word: '会社', kana: 'かいしゃ', meaning: '公司', difficulty: 'normal', category: '場所', kanji: '会社', isKanji: true },
  { word: '工場', kana: 'こうじょう', meaning: '工廠', difficulty: 'normal', category: '場所', kanji: '工場', isKanji: true },
  { word: '市場', kana: 'いちば', meaning: '市場', difficulty: 'normal', category: '場所', kanji: '市場', isKanji: true },
  { word: '神社', kana: 'じんじゃ', meaning: '神社', difficulty: 'normal', category: '場所', kanji: '神社', isKanji: true },
  { word: '寺院', kana: 'じいん', meaning: '寺廟', difficulty: 'normal', category: '場所', kanji: '寺院', isKanji: true },
  { word: '教会', kana: 'きょうかい', meaning: '教堂', difficulty: 'normal', category: '場所', kanji: '教会', isKanji: true },
  { word: '商店', kana: 'しょうてん', meaning: '商店', difficulty: 'normal', category: '場所', kanji: '商店', isKanji: true },
  { word: '書店', kana: 'しょてん', meaning: '書店', difficulty: 'normal', category: '場所', kanji: '書店', isKanji: true },
  { word: '薬局', kana: 'やっきょく', meaning: '藥局', difficulty: 'normal', category: '場所', kanji: '薬局', isKanji: true },
  { word: '理髪', kana: 'りはつ', meaning: '理髮店', difficulty: 'normal', category: '場所', kanji: '理髪', isKanji: true },
  { word: '映画', kana: 'えいが', meaning: '電影院', difficulty: 'normal', category: '場所', kanji: '映画', isKanji: true },
  { word: '劇場', kana: 'げきじょう', meaning: '劇場', difficulty: 'normal', category: '場所', kanji: '劇場', isKanji: true },
  { word: '体育', kana: 'たいいく', meaning: '體育館', difficulty: 'normal', category: '場所', kanji: '体育', isKanji: true },
  { word: '温泉', kana: 'おんせん', meaning: '溫泉', difficulty: 'normal', category: '場所', kanji: '温泉', isKanji: true },
  
  // 人物
  { word: '先生', kana: 'せんせい', meaning: '老師', difficulty: 'normal', category: '人物', kanji: '先生', isKanji: true },
  { word: '友達', kana: 'ともだち', meaning: '朋友', difficulty: 'normal', category: '人物', kanji: '友達', isKanji: true },
  { word: '家族', kana: 'かぞく', meaning: '家人', difficulty: 'normal', category: '人物', kanji: '家族', isKanji: true },
  { word: '両親', kana: 'りょうしん', meaning: '父母', difficulty: 'normal', category: '人物', kanji: '両親', isKanji: true },
  { word: '兄弟', kana: 'きょうだい', meaning: '兄弟', difficulty: 'normal', category: '人物', kanji: '兄弟', isKanji: true },
  { word: '姉妹', kana: 'しまい', meaning: '姐妹', difficulty: 'normal', category: '人物', kanji: '姉妹', isKanji: true },
  { word: '夫婦', kana: 'ふうふ', meaning: '夫妻', difficulty: 'normal', category: '人物', kanji: '夫婦', isKanji: true },
  { word: '恋人', kana: 'こいびと', meaning: '戀人', difficulty: 'normal', category: '人物', kanji: '恋人', isKanji: true },
  { word: '同僚', kana: 'どうりょう', meaning: '同事', difficulty: 'normal', category: '人物', kanji: '同僚', isKanji: true },
  { word: '上司', kana: 'じょうし', meaning: '上司', difficulty: 'normal', category: '人物', kanji: '上司', isKanji: true },
  { word: '部下', kana: 'ぶか', meaning: '部下', difficulty: 'normal', category: '人物', kanji: '部下', isKanji: true },
  { word: '客様', kana: 'きゃくさま', meaning: '客人', difficulty: 'normal', category: '人物', kanji: '客様', isKanji: true },
  { word: '店員', kana: 'てんいん', meaning: '店員', difficulty: 'normal', category: '人物', kanji: '店員', isKanji: true },
  { word: '医者', kana: 'いしゃ', meaning: '醫生', difficulty: 'normal', category: '人物', kanji: '医者', isKanji: true },
  { word: '看護', kana: 'かんご', meaning: '護士', difficulty: 'normal', category: '人物', kanji: '看護', isKanji: true },
  { word: '警察', kana: 'けいさつ', meaning: '警察', difficulty: 'normal', category: '人物', kanji: '警察', isKanji: true },
  { word: '消防', kana: 'しょうぼう', meaning: '消防員', difficulty: 'normal', category: '人物', kanji: '消防', isKanji: true },
  { word: '運転', kana: 'うんてん', meaning: '司機', difficulty: 'normal', category: '人物', kanji: '運転', isKanji: true },
  
  // 交通
  { word: '電車', kana: 'でんしゃ', meaning: '電車', difficulty: 'normal', category: '交通', kanji: '電車', isKanji: true },
  { word: '汽車', kana: 'きしゃ', meaning: '火車', difficulty: 'normal', category: '交通', kanji: '汽車', isKanji: true },
  { word: '地下', kana: 'ちか', meaning: '地下', difficulty: 'normal', category: '交通', kanji: '地下', isKanji: true },
  { word: '電話', kana: 'でんわ', meaning: '電話', difficulty: 'normal', category: '交通', kanji: '電話', isKanji: true },
  { word: '道路', kana: 'どうろ', meaning: '道路', difficulty: 'normal', category: '交通', kanji: '道路', isKanji: true },
  { word: '交通', kana: 'こうつう', meaning: '交通', difficulty: 'normal', category: '交通', kanji: '交通', isKanji: true },
  { word: '自動', kana: 'じどう', meaning: '自動車', difficulty: 'normal', category: '交通', kanji: '自動', isKanji: true },
  { word: '自転', kana: 'じてん', meaning: '腳踏車', difficulty: 'normal', category: '交通', kanji: '自転', isKanji: true },
  { word: '飛行', kana: 'ひこう', meaning: '飛機', difficulty: 'normal', category: '交通', kanji: '飛行', isKanji: true },
  { word: '船舶', kana: 'せんぱく', meaning: '船舶', difficulty: 'normal', category: '交通', kanji: '船舶', isKanji: true },
  { word: '信号', kana: 'しんごう', meaning: '紅綠燈', difficulty: 'normal', category: '交通', kanji: '信号', isKanji: true },
  { word: '駐車', kana: 'ちゅうしゃ', meaning: '停車', difficulty: 'normal', category: '交通', kanji: '駐車', isKanji: true },
  { word: '切符', kana: 'きっぷ', meaning: '車票', difficulty: 'normal', category: '交通', kanji: '切符', isKanji: true },
  { word: '運賃', kana: 'うんちん', meaning: '車資', difficulty: 'normal', category: '交通', kanji: '運賃', isKanji: true },
  
  // 趣味娛樂
  { word: '映画', kana: 'えいが', meaning: '電影', difficulty: 'normal', category: '趣味', kanji: '映画', isKanji: true },
  { word: '音楽', kana: 'おんがく', meaning: '音樂', difficulty: 'normal', category: '趣味', kanji: '音楽', isKanji: true },
  { word: '読書', kana: 'どくしょ', meaning: '讀書', difficulty: 'normal', category: '趣味', kanji: '読書', isKanji: true },
  { word: '写真', kana: 'しゃしん', meaning: '照片', difficulty: 'normal', category: '趣味', kanji: '写真', isKanji: true },
  { word: '旅行', kana: 'りょこう', meaning: '旅行', difficulty: 'normal', category: '趣味', kanji: '旅行', isKanji: true },
  { word: '運動', kana: 'うんどう', meaning: '運動', difficulty: 'normal', category: '趣味', kanji: '運動', isKanji: true },
  { word: '散歩', kana: 'さんぽ', meaning: '散步', difficulty: 'normal', category: '趣味', kanji: '散歩', isKanji: true },
  { word: '買物', kana: 'かいもの', meaning: '購物', difficulty: 'normal', category: '趣味', kanji: '買物', isKanji: true },
  { word: '釣魚', kana: 'つりざかな', meaning: '釣魚', difficulty: 'normal', category: '趣味', kanji: '釣魚', isKanji: true },
  { word: '登山', kana: 'とざん', meaning: '登山', difficulty: 'normal', category: '趣味', kanji: '登山', isKanji: true },
  { word: '水泳', kana: 'すいえい', meaning: '游泳', difficulty: 'normal', category: '趣味', kanji: '水泳', isKanji: true },
  { word: '野球', kana: 'やきゅう', meaning: '棒球', difficulty: 'normal', category: '趣味', kanji: '野球', isKanji: true },
  { word: '足球', kana: 'そっきゅう', meaning: '足球', difficulty: 'normal', category: '趣味', kanji: '足球', isKanji: true },
  { word: '卓球', kana: 'たっきゅう', meaning: '桌球', difficulty: 'normal', category: '趣味', kanji: '卓球', isKanji: true },
  { word: '料理', kana: 'りょうり', meaning: '料理', difficulty: 'normal', category: '趣味', kanji: '料理', isKanji: true },
  { word: '園芸', kana: 'えんげい', meaning: '園藝', difficulty: 'normal', category: '趣味', kanji: '園芸', isKanji: true },
  
  // 動作
  { word: '勉強', kana: 'べんきょう', meaning: '學習', difficulty: 'normal', category: '動作', kanji: '勉強', isKanji: true },
  { word: '仕事', kana: 'しごと', meaning: '工作', difficulty: 'normal', category: '動作', kanji: '仕事', isKanji: true },
  { word: '掃除', kana: 'そうじ', meaning: '打掃', difficulty: 'normal', category: '動作', kanji: '掃除', isKanji: true },
  { word: '洗濯', kana: 'せんたく', meaning: '洗衣', difficulty: 'normal', category: '動作', kanji: '洗濯', isKanji: true },
  { word: '準備', kana: 'じゅんび', meaning: '準備', difficulty: 'normal', category: '動作', kanji: '準備', isKanji: true },
  { word: '練習', kana: 'れんしゅう', meaning: '練習', difficulty: 'normal', category: '動作', kanji: '練習', isKanji: true },
  { word: '休憩', kana: 'きゅうけい', meaning: '休息', difficulty: 'normal', category: '動作', kanji: '休憩', isKanji: true },
  { word: '會議', kana: 'かいぎ', meaning: '會議', difficulty: 'normal', category: '動作', kanji: '會議', isKanji: true },
  { word: '發表', kana: 'はっぴょう', meaning: '發表', difficulty: 'normal', category: '動作', kanji: '發表', isKanji: true },
  { word: '説明', kana: 'せつめい', meaning: '說明', difficulty: 'normal', category: '動作', kanji: '説明', isKanji: true },
  { word: '相談', kana: 'そうだん', meaning: '商量', difficulty: 'normal', category: '動作', kanji: '相談', isKanji: true },
  { word: '計画', kana: 'けいかく', meaning: '計劃', difficulty: 'normal', category: '動作', kanji: '計画', isKanji: true },
  { word: '決定', kana: 'けってい', meaning: '決定', difficulty: 'normal', category: '動作', kanji: '決定', isKanji: true },
  { word: '確認', kana: 'かくにん', meaning: '確認', difficulty: 'normal', category: '動作', kanji: '確認', isKanji: true },
  { word: '連絡', kana: 'れんらく', meaning: '聯絡', difficulty: 'normal', category: '動作', kanji: '連絡', isKanji: true },
  { word: '報告', kana: 'ほうこく', meaning: '報告', difficulty: 'normal', category: '動作', kanji: '報告', isKanji: true },
  
  // 時間
  { word: '時間', kana: 'じかん', meaning: '時間', difficulty: 'normal', category: '時間', kanji: '時間', isKanji: true },
  { word: '今日', kana: 'きょう', meaning: '今天', difficulty: 'normal', category: '時間', kanji: '今日', isKanji: true },
  { word: '明日', kana: 'あした', meaning: '明天', difficulty: 'normal', category: '時間', kanji: '明日', isKanji: true },
  { word: '昨日', kana: 'きのう', meaning: '昨天', difficulty: 'normal', category: '時間', kanji: '昨日', isKanji: true },
  { word: '今年', kana: 'ことし', meaning: '今年', difficulty: 'normal', category: '時間', kanji: '今年', isKanji: true },
  { word: '来年', kana: 'らいねん', meaning: '明年', difficulty: 'normal', category: '時間', kanji: '来年', isKanji: true },
  { word: '去年', kana: 'きょねん', meaning: '去年', difficulty: 'normal', category: '時間', kanji: '去年', isKanji: true },
  { word: '今月', kana: 'こんげつ', meaning: '這個月', difficulty: 'normal', category: '時間', kanji: '今月', isKanji: true },
  { word: '来月', kana: 'らいげつ', meaning: '下個月', difficulty: 'normal', category: '時間', kanji: '来月', isKanji: true },
  { word: '先月', kana: 'せんげつ', meaning: '上個月', difficulty: 'normal', category: '時間', kanji: '先月', isKanji: true },
  { word: '今週', kana: 'こんしゅう', meaning: '這週', difficulty: 'normal', category: '時間', kanji: '今週', isKanji: true },
  { word: '来週', kana: 'らいしゅう', meaning: '下週', difficulty: 'normal', category: '時間', kanji: '来週', isKanji: true },
  { word: '先週', kana: 'せんしゅう', meaning: '上週', difficulty: 'normal', category: '時間', kanji: '先週', isKanji: true },
  { word: '午前', kana: 'ごぜん', meaning: '上午', difficulty: 'normal', category: '時間', kanji: '午前', isKanji: true },
  { word: '午後', kana: 'ごご', meaning: '下午', difficulty: 'normal', category: '時間', kanji: '午後', isKanji: true },
  { word: '夜中', kana: 'よなか', meaning: '半夜', difficulty: 'normal', category: '時間', kanji: '夜中', isKanji: true },
  { word: '平日', kana: 'へいじつ', meaning: '平日', difficulty: 'normal', category: '時間', kanji: '平日', isKanji: true },
  { word: '休日', kana: 'きゅうじつ', meaning: '假日', difficulty: 'normal', category: '時間', kanji: '休日', isKanji: true },
  
  // 食物
  { word: '食事', kana: 'しょくじ', meaning: '用餐', difficulty: 'normal', category: '食物', kanji: '食事', isKanji: true },
  { word: '朝食', kana: 'ちょうしょく', meaning: '早餐', difficulty: 'normal', category: '食物', kanji: '朝食', isKanji: true },
  { word: '昼食', kana: 'ちゅうしょく', meaning: '午餐', difficulty: 'normal', category: '食物', kanji: '昼食', isKanji: true },
  { word: '夕食', kana: 'ゆうしょく', meaning: '晚餐', difficulty: 'normal', category: '食物', kanji: '夕食', isKanji: true },
  { word: '野菜', kana: 'やさい', meaning: '蔬菜', difficulty: 'normal', category: '食物', kanji: '野菜', isKanji: true },
  { word: '果物', kana: 'くだもの', meaning: '水果', difficulty: 'normal', category: '食物', kanji: '果物', isKanji: true },
  { word: '肉類', kana: 'にくるい', meaning: '肉類', difficulty: 'normal', category: '食物', kanji: '肉類', isKanji: true },
  { word: '魚類', kana: 'ぎょるい', meaning: '魚類', difficulty: 'normal', category: '食物', kanji: '魚類', isKanji: true },
  { word: '牛肉', kana: 'ぎゅうにく', meaning: '牛肉', difficulty: 'normal', category: '食物', kanji: '牛肉', isKanji: true },
  { word: '豚肉', kana: 'ぶたにく', meaning: '豬肉', difficulty: 'normal', category: '食物', kanji: '豚肉', isKanji: true },
  { word: '鶏肉', kana: 'とりにく', meaning: '雞肉', difficulty: 'normal', category: '食物', kanji: '鶏肉', isKanji: true },
  { word: '魚肉', kana: 'ぎょにく', meaning: '魚肉', difficulty: 'normal', category: '食物', kanji: '魚肉', isKanji: true },
  { word: '米飯', kana: 'べいはん', meaning: '米飯', difficulty: 'normal', category: '食物', kanji: '米飯', isKanji: true },
  { word: '麺類', kana: 'めんるい', meaning: '麵類', difficulty: 'normal', category: '食物', kanji: '麺類', isKanji: true },
  { word: '飲物', kana: 'のみもの', meaning: '飲料', difficulty: 'normal', category: '食物', kanji: '飲物', isKanji: true },
  { word: '茶葉', kana: 'ちゃば', meaning: '茶葉', difficulty: 'normal', category: '食物', kanji: '茶葉', isKanji: true },
  { word: '牛乳', kana: 'ぎゅうにゅう', meaning: '牛奶', difficulty: 'normal', category: '食物', kanji: '牛乳', isKanji: true },
  { word: '果汁', kana: 'かじゅう', meaning: '果汁', difficulty: 'normal', category: '食物', kanji: '果汁', isKanji: true },
];

// 漢字單字（3字）- 第10關開始出現
export const KANJI_3_WORDS: TetrisWord[] = [
  // 場所
  { word: '図書館', kana: 'としょかん', meaning: '圖書館', difficulty: 'hard', category: '場所', kanji: '図書館', isKanji: true },
  { word: '郵便局', kana: 'ゆうびんきょく', meaning: '郵局', difficulty: 'hard', category: '場所', kanji: '郵便局', isKanji: true },
  { word: '市役所', kana: 'しやくしょ', meaning: '市政府', difficulty: 'hard', category: '場所', kanji: '市役所', isKanji: true },
  { word: '区役所', kana: 'くやくしょ', meaning: '區公所', difficulty: 'hard', category: '場所', kanji: '区役所', isKanji: true },
  { word: '警察署', kana: 'けいさつしょ', meaning: '警察局', difficulty: 'hard', category: '場所', kanji: '警察署', isKanji: true },
  { word: '消防署', kana: 'しょうぼうしょ', meaning: '消防局', difficulty: 'hard', category: '場所', kanji: '消防署', isKanji: true },
  { word: '美術館', kana: 'びじゅつかん', meaning: '美術館', difficulty: 'hard', category: '場所', kanji: '美術館', isKanji: true },
  { word: '博物館', kana: 'はくぶつかん', meaning: '博物館', difficulty: 'hard', category: '場所', kanji: '博物館', isKanji: true },
  { word: '動物園', kana: 'どうぶつえん', meaning: '動物園', difficulty: 'hard', category: '場所', kanji: '動物園', isKanji: true },
  { word: '植物園', kana: 'しょくぶつえん', meaning: '植物園', difficulty: 'hard', category: '場所', kanji: '植物園', isKanji: true },
  { word: '遊園地', kana: 'ゆうえんち', meaning: '遊樂園', difficulty: 'hard', category: '場所', kanji: '遊園地', isKanji: true },
  { word: '水族館', kana: 'すいぞくかん', meaning: '水族館', difficulty: 'hard', category: '場所', kanji: '水族館', isKanji: true },
  { word: '体育館', kana: 'たいいくかん', meaning: '體育館', difficulty: 'hard', category: '場所', kanji: '体育館', isKanji: true },
  { word: '音楽堂', kana: 'おんがくどう', meaning: '音樂廳', difficulty: 'hard', category: '場所', kanji: '音楽堂', isKanji: true },
  { word: '会議室', kana: 'かいぎしつ', meaning: '會議室', difficulty: 'hard', category: '場所', kanji: '会議室', isKanji: true },
  { word: '研究所', kana: 'けんきゅうじょ', meaning: '研究所', difficulty: 'hard', category: '場所', kanji: '研究所', isKanji: true },
  { word: '実験室', kana: 'じっけんしつ', meaning: '實驗室', difficulty: 'hard', category: '場所', kanji: '実験室', isKanji: true },
  { word: '保健所', kana: 'ほけんじょ', meaning: '保健所', difficulty: 'hard', category: '場所', kanji: '保健所', isKanji: true },
  { word: '税務署', kana: 'ぜいむしょ', meaning: '稅務署', difficulty: 'hard', category: '場所', kanji: '税務署', isKanji: true },
  { word: '法務局', kana: 'ほうむきょく', meaning: '法務局', difficulty: 'hard', category: '場所', kanji: '法務局', isKanji: true },
  
  // 交通
  { word: '地下鉄', kana: 'ちかてつ', meaning: '地鐵', difficulty: 'hard', category: '交通', kanji: '地下鉄', isKanji: true },
  { word: '新幹線', kana: 'しんかんせん', meaning: '新幹線', difficulty: 'hard', category: '交通', kanji: '新幹線', isKanji: true },
  { word: '自動車', kana: 'じどうしゃ', meaning: '汽車', difficulty: 'hard', category: '交通', kanji: '自動車', isKanji: true },
  { word: '自転車', kana: 'じてんしゃ', meaning: '腳踏車', difficulty: 'hard', category: '交通', kanji: '自転車', isKanji: true },
  { word: '飛行機', kana: 'ひこうき', meaning: '飛機', difficulty: 'hard', category: '交通', kanji: '飛行機', isKanji: true },
  { word: '救急車', kana: 'きゅうきゅうしゃ', meaning: '救護車', difficulty: 'hard', category: '交通', kanji: '救急車', isKanji: true },
  { word: '消防車', kana: 'しょうぼうしゃ', meaning: '消防車', difficulty: 'hard', category: '交通', kanji: '消防車', isKanji: true },
  { word: '警察車', kana: 'けいさつしゃ', meaning: '警車', difficulty: 'hard', category: '交通', kanji: '警察車', isKanji: true },
  { word: '宅配便', kana: 'たくはいびん', meaning: '宅配', difficulty: 'hard', category: '交通', kanji: '宅配便', isKanji: true },
  { word: '高速道', kana: 'こうそくどう', meaning: '高速公路', difficulty: 'hard', category: '交通', kanji: '高速道', isKanji: true },
  { word: '駐車場', kana: 'ちゅうしゃじょう', meaning: '停車場', difficulty: 'hard', category: '交通', kanji: '駐車場', isKanji: true },
  { word: '交差点', kana: 'こうさてん', meaning: '十字路口', difficulty: 'hard', category: '交通', kanji: '交差点', isKanji: true },
  { word: '歩道橋', kana: 'ほどうきょう', meaning: '人行天橋', difficulty: 'hard', category: '交通', kanji: '歩道橋', isKanji: true },
  { word: '地下道', kana: 'ちかどう', meaning: '地下道', difficulty: 'hard', category: '交通', kanji: '地下道', isKanji: true },
  
  // 職業
  { word: '警察官', kana: 'けいさつかん', meaning: '警察', difficulty: 'hard', category: '職業', kanji: '警察官', isKanji: true },
  { word: '消防士', kana: 'しょうぼうし', meaning: '消防員', difficulty: 'hard', category: '職業', kanji: '消防士', isKanji: true },
  { word: '看護師', kana: 'かんごし', meaning: '護士', difficulty: 'hard', category: '職業', kanji: '看護師', isKanji: true },
  { word: '研究者', kana: 'けんきゅうしゃ', meaning: '研究者', difficulty: 'hard', category: '職業', kanji: '研究者', isKanji: true },
  { word: '技術者', kana: 'ぎじゅつしゃ', meaning: '技術人員', difficulty: 'hard', category: '職業', kanji: '技術者', isKanji: true },
  { word: '営業員', kana: 'えいぎょういん', meaning: '業務員', difficulty: 'hard', category: '職業', kanji: '営業員', isKanji: true },
  { word: '事務員', kana: 'じむいん', meaning: '事務員', difficulty: 'hard', category: '職業', kanji: '事務員', isKanji: true },
  { word: '販売員', kana: 'はんばいいん', meaning: '銷售員', difficulty: 'hard', category: '職業', kanji: '販売員', isKanji: true },
  { word: '運転手', kana: 'うんてんしゅ', meaning: '司機', difficulty: 'hard', category: '職業', kanji: '運転手', isKanji: true },
  { word: '料理人', kana: 'りょうりにん', meaning: '廚師', difficulty: 'hard', category: '職業', kanji: '料理人', isKanji: true },
  { word: '美容師', kana: 'びようし', meaning: '美髮師', difficulty: 'hard', category: '職業', kanji: '美容師', isKanji: true },
  { word: '建築家', kana: 'けんちくか', meaning: '建築師', difficulty: 'hard', category: '職業', kanji: '建築家', isKanji: true },
  { word: '設計者', kana: 'せっけいしゃ', meaning: '設計師', difficulty: 'hard', category: '職業', kanji: '設計者', isKanji: true },
  { word: '翻訳者', kana: 'ほんやくしゃ', meaning: '翻譯員', difficulty: 'hard', category: '職業', kanji: '翻訳者', isKanji: true },
  { word: '通訳者', kana: 'つうやくしゃ', meaning: '口譯員', difficulty: 'hard', category: '職業', kanji: '通訳者', isKanji: true },
  { word: '記者', kana: 'きしゃ', meaning: '記者', difficulty: 'hard', category: '職業', kanji: '記者', isKanji: true },
  { word: '編集者', kana: 'へんしゅうしゃ', meaning: '編輯', difficulty: 'hard', category: '職業', kanji: '編集者', isKanji: true },
  { word: '写真家', kana: 'しゃしんか', meaning: '攝影師', difficulty: 'hard', category: '職業', kanji: '写真家', isKanji: true },
  { word: '音楽家', kana: 'おんがくか', meaning: '音樂家', difficulty: 'hard', category: '職業', kanji: '音楽家', isKanji: true },
  { word: '画家', kana: 'がか', meaning: '畫家', difficulty: 'hard', category: '職業', kanji: '画家', isKanji: true },
  
  // 學校活動
  { word: '入学式', kana: 'にゅうがくしき', meaning: '入學典禮', difficulty: 'hard', category: '學校', kanji: '入学式', isKanji: true },
  { word: '卒業式', kana: 'そつぎょうしき', meaning: '畢業典禮', difficulty: 'hard', category: '學校', kanji: '卒業式', isKanji: true },
  { word: '運動会', kana: 'うんどうかい', meaning: '運動會', difficulty: 'hard', category: '學校', kanji: '運動会', isKanji: true },
  { word: '文化祭', kana: 'ぶんかさい', meaning: '文化祭', difficulty: 'hard', category: '學校', kanji: '文化祭', isKanji: true },
  { word: '修学旅', kana: 'しゅうがくりょ', meaning: '修學旅行', difficulty: 'hard', category: '學校', kanji: '修学旅', isKanji: true },
  { word: '試験日', kana: 'しけんび', meaning: '考試日', difficulty: 'hard', category: '學校', kanji: '試験日', isKanji: true },
  { word: '成績表', kana: 'せいせきひょう', meaning: '成績單', difficulty: 'hard', category: '學校', kanji: '成績表', isKanji: true },
  { word: '授業料', kana: 'じゅぎょうりょう', meaning: '學費', difficulty: 'hard', category: '學校', kanji: '授業料', isKanji: true },
  { word: '奨学金', kana: 'しょうがくきん', meaning: '獎學金', difficulty: 'hard', category: '學校', kanji: '奨学金', isKanji: true },
  { word: '部活動', kana: 'ぶかつどう', meaning: '社團活動', difficulty: 'hard', category: '學校', kanji: '部活動', isKanji: true },
  
  // 季節活動
  { word: '花見会', kana: 'はなみかい', meaning: '賞花會', difficulty: 'hard', category: '季節', kanji: '花見会', isKanji: true },
  { word: '夏祭り', kana: 'なつまつり', meaning: '夏日祭', difficulty: 'hard', category: '季節', kanji: '夏祭り', isKanji: true },
  { word: '紅葉狩', kana: 'もみじがり', meaning: '賞楓', difficulty: 'hard', category: '季節', kanji: '紅葉狩', isKanji: true },
  { word: '雪祭り', kana: 'ゆきまつり', meaning: '雪祭', difficulty: 'hard', category: '季節', kanji: '雪祭り', isKanji: true },
  { word: '正月休', kana: 'しょうがつやす', meaning: '新年假期', difficulty: 'hard', category: '季節', kanji: '正月休', isKanji: true },
  { word: '春休み', kana: 'はるやすみ', meaning: '春假', difficulty: 'hard', category: '季節', kanji: '春休み', isKanji: true },
  { word: '夏休み', kana: 'なつやすみ', meaning: '暑假', difficulty: 'hard', category: '季節', kanji: '夏休み', isKanji: true },
  { word: '冬休み', kana: 'ふゆやすみ', meaning: '寒假', difficulty: 'hard', category: '季節', kanji: '冬休み', isKanji: true },
  { word: '黄金週', kana: 'おうごんしゅう', meaning: '黃金週', difficulty: 'hard', category: '季節', kanji: '黄金週', isKanji: true },
  { word: '盆休み', kana: 'ぼんやすみ', meaning: '盂蘭盆假', difficulty: 'hard', category: '季節', kanji: '盆休み', isKanji: true },
  
  // 食物料理
  { word: '和食店', kana: 'わしょくてん', meaning: '日式料理店', difficulty: 'hard', category: '食物', kanji: '和食店', isKanji: true },
  { word: '洋食店', kana: 'ようしょくてん', meaning: '西式料理店', difficulty: 'hard', category: '食物', kanji: '洋食店', isKanji: true },
  { word: '中華料', kana: 'ちゅうかりょう', meaning: '中華料理', difficulty: 'hard', category: '食物', kanji: '中華料', isKanji: true },
  { word: '韓国料', kana: 'かんこくりょう', meaning: '韓式料理', difficulty: 'hard', category: '食物', kanji: '韓国料', isKanji: true },
  { word: '回転寿', kana: 'かいてんずし', meaning: '迴轉壽司', difficulty: 'hard', category: '食物', kanji: '回転寿', isKanji: true },
  { word: '焼肉店', kana: 'やきにくてん', meaning: '燒肉店', difficulty: 'hard', category: '食物', kanji: '焼肉店', isKanji: true },
  { word: '居酒屋', kana: 'いざかや', meaning: '居酒屋', difficulty: 'hard', category: '食物', kanji: '居酒屋', isKanji: true },
  { word: '喫茶店', kana: 'きっさてん', meaning: '咖啡店', difficulty: 'hard', category: '食物', kanji: '喫茶店', isKanji: true },
  { word: '甘味処', kana: 'あまみどころ', meaning: '甜品店', difficulty: 'hard', category: '食物', kanji: '甘味処', isKanji: true },
  { word: '弁当屋', kana: 'べんとうや', meaning: '便當店', difficulty: 'hard', category: '食物', kanji: '弁当屋', isKanji: true },
];

/**
 * 根據難度獲取單字
 */
export const getWordsByDifficulty = (difficulty: DifficultyLevel): TetrisWord[] => {
  switch (difficulty) {
    case 'beginner':
      return BEGINNER_WORDS;
    case 'normal':
      return [...BEGINNER_WORDS, ...INTERMEDIATE_WORDS];
    case 'hard':
    case 'expert':
      return [...BEGINNER_WORDS, ...INTERMEDIATE_WORDS, ...ADVANCED_WORDS];
    default:
      return BEGINNER_WORDS;
  }
};

/**
 * 根據單字類型過濾
 */
export const getWordsByType = (words: TetrisWord[], wordType: 'hiragana' | 'katakana' | 'mixed'): TetrisWord[] => {
  switch (wordType) {
    case 'hiragana':
      // 只返回平假名單字 - 使用更兼容的檢測方式
      return words.filter(word => {
        // 檢查是否只包含平假名字符
        for (let i = 0; i < word.kana.length; i++) {
          const char = word.kana.charCodeAt(i);
          // 平假名 Unicode 範圍: 0x3041-0x3096
          if (char < 0x3041 || char > 0x3096) {
            return false;
          }
        }
        return true;
      });
    case 'katakana':
      // 只返回包含片假名的單字 - 使用更兼容的檢測方式
      return words.filter(word => {
        // 檢查是否包含片假名字符
        for (let i = 0; i < word.kana.length; i++) {
          const char = word.kana.charCodeAt(i);
          // 片假名 Unicode 範圍: 0x30A1-0x30F6
          if (char >= 0x30A1 && char <= 0x30F6) {
            return true;
          }
        }
        return false;
      });
    case 'mixed':
    default:
      return words;
  }
};

// 改進的隨機選擇函數，避免重複
let recentWords: string[] = [];
const MAX_RECENT_WORDS = 20; // 記住最近20個單字，避免重複

export const getRandomWordImproved = (
  difficulty: DifficultyLevel, 
  wordType: 'hiragana' | 'katakana' | 'mixed' = 'mixed'
): TetrisWord => {
  const allWords = getWordsByDifficulty(difficulty);
  const filteredWords = getWordsByType(allWords, wordType);
  
  // 過濾掉最近使用過的單字
  const availableWords = filteredWords.filter(word => 
    !recentWords.includes(word.word)
  );
  
  // 如果可用單字太少，清空記錄重新開始
  if (availableWords.length < 5) {
    recentWords = [];
    return filteredWords[Math.floor(Math.random() * filteredWords.length)];
  }
  
  // 隨機選擇
  const randomIndex = Math.floor(Math.random() * availableWords.length);
  const selectedWord = availableWords[randomIndex];
  
  // 記錄選中的單字
  recentWords.push(selectedWord.word);
  if (recentWords.length > MAX_RECENT_WORDS) {
    recentWords.shift(); // 移除最舊的記錄
  }
  
  return selectedWord;
};

/**
 * 根據字數獲取合適的單字（用於不同方塊形狀）
 */
export const getWordByLength = (
  targetLength: number, 
  difficulty: DifficultyLevel, 
  wordType: 'hiragana' | 'katakana' | 'mixed' = 'mixed'
): TetrisWord => {
  const words = getWordsByDifficulty(difficulty);
  const filteredWords = getWordsByType(words, wordType);
  
  // 確保有可用的單字
  if (filteredWords.length === 0) {
    // 如果過濾後沒有單字，使用所有單字
    const allWords = getWordsByDifficulty(difficulty);
    if (allWords.length === 0) {
      // 如果還是沒有，使用初級單字
      return BEGINNER_WORDS[0];
    }
    const randomIndex = Math.floor(Math.random() * allWords.length);
    return allWords[randomIndex];
  }
  
  // 找到符合長度的單字
  const matchingWords = filteredWords.filter(word => word.kana.length === targetLength);
  
  if (matchingWords.length > 0) {
    const randomIndex = Math.floor(Math.random() * matchingWords.length);
    return matchingWords[randomIndex];
  }
  
  // 如果沒有符合長度的單字，返回隨機單字
  const randomIndex = Math.floor(Math.random() * filteredWords.length);
  return filteredWords[randomIndex];
};

/**
 * 獲取所有可用的單字類別
 */
export const getAllCategories = (): string[] => {
  const allWords = [...BEGINNER_WORDS, ...INTERMEDIATE_WORDS, ...ADVANCED_WORDS];
  const categories = [...new Set(allWords.map(word => word.category))];
  return categories.sort();
};

/**
 * 根據類別獲取單字
 */
export const getWordsByCategory = (category: string, difficulty?: DifficultyLevel): TetrisWord[] => {
  let words: TetrisWord[];
  
  if (difficulty) {
    words = getWordsByDifficulty(difficulty);
  } else {
    words = [...BEGINNER_WORDS, ...INTERMEDIATE_WORDS, ...ADVANCED_WORDS];
  }
  
  return words.filter(word => word.category === category);
};

/**
 * 根據等級和方塊大小獲取合適的單字（改進版本，避免重複）
 */
export const getWordByLevelAndLength = (
  targetLength: number,
  level: number,
  difficulty: DifficultyLevel,
  wordType: 'hiragana' | 'katakana' | 'mixed' = 'mixed'
): TetrisWord => {
  let availableWords: TetrisWord[] = [];
  
  // 根據等級決定是否包含漢字
  if (level >= 10) {
    // 第10關以上：包含3字漢字
    const kanji3Words = KANJI_3_WORDS.filter(word => word.kana.length === targetLength);
    availableWords = [...availableWords, ...kanji3Words];
  }
  
  if (level >= 5) {
    // 第5關以上：包含2字漢字
    const kanji2Words = KANJI_2_WORDS.filter(word => word.kana.length === targetLength);
    availableWords = [...availableWords, ...kanji2Words];
  }
  
  // 添加普通單字
  const regularWords = getWordsByDifficulty(difficulty);
  const filteredRegularWords = getWordsByType(regularWords, wordType)
    .filter(word => word.kana.length === targetLength && !word.isKanji);
  availableWords = [...availableWords, ...filteredRegularWords];
  
  // 過濾掉最近使用過的單字
  const nonRecentWords = availableWords.filter(word => 
    !recentWords.includes(word.word)
  );
  
  // 如果可用單字太少，清空記錄
  const finalWords = nonRecentWords.length >= 3 ? nonRecentWords : availableWords;
  
  if (finalWords.length === 0) {
    // 如果沒有符合條件的單字，返回任意單字
    return getRandomWordImproved(difficulty, wordType);
  }
  
  // 隨機選擇
  const randomIndex = Math.floor(Math.random() * finalWords.length);
  const selectedWord = finalWords[randomIndex];
  
  // 記錄選中的單字
  recentWords.push(selectedWord.word);
  if (recentWords.length > MAX_RECENT_WORDS) {
    recentWords.shift();
  }
  
  return selectedWord;
}; 