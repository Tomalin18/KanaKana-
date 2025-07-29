import type { DifficultyLevel } from '../../types';

/**
 * EXPERT_WORDS - 從 vocabulary.csv 轉換
 * 
 * 🔄 轉換時間: 2025-07-19T01:23:03.798Z
 * 📊 單字數量: 2633 個
 */

export interface TetrisWord {
  word: string;
  kana: string;
  meaning: string;
  difficulty: DifficultyLevel;
  category: string;
  kanji?: string;
  isKanji?: boolean;
}

export const EXPERT_WORDS: TetrisWord[] = [
  {
    "word": "現像",
    "kana": "げんぞう",
    "meaning": "developing (film)",
    "difficulty": "expert",
    "category": "技術",
    "kanji": "現像",
    "isKanji": true
  },
  {
    "word": "原則",
    "kana": "げんそく",
    "meaning": "principle, general rule",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "原則",
    "isKanji": true
  },
  {
    "word": "見地",
    "kana": "けんち",
    "meaning": "point 的 view (point 的 view) (point 的 view (point of view))",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "見地",
    "isKanji": true
  },
  {
    "word": "現地",
    "kana": "げんち",
    "meaning": "actual place, local",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "現地",
    "isKanji": true
  },
  {
    "word": "限定",
    "kana": "げんてい",
    "meaning": "limit, restricti在 (limit, restricti在) (limit, restricti在 (limit, restriction))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "限定",
    "isKanji": true
  },
  {
    "word": "原点",
    "kana": "げんてん",
    "meaning": "或igin (co或dinates, starting point) (或igin (co或dinates, starting point)) (或igin (co或dinates, starting point) (origin (coordinates, starting point)))",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "原点",
    "isKanji": true
  },
  {
    "word": "原典",
    "kana": "げんてん",
    "meaning": "或iginal, source (或iginal, source) (或iginal, source (original, source))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "原典",
    "isKanji": true
  },
  {
    "word": "原爆",
    "kana": "げんばく",
    "meaning": "a到mic bomb (a到mic bomb) (a到mic bomb (atomic bomb))",
    "difficulty": "expert",
    "category": "物質",
    "kanji": "原爆",
    "isKanji": true
  },
  {
    "word": "原文",
    "kana": "げんぶん",
    "meaning": "the text, 或iginal (the text, 或iginal) (the text, 或iginal (the text, original))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "原文",
    "isKanji": true
  },
  {
    "word": "厳密",
    "kana": "げんみつ",
    "meaning": "strict, close",
    "difficulty": "expert",
    "category": "性質",
    "kanji": "厳密",
    "isKanji": true
  },
  {
    "word": "賢明",
    "kana": "けんめい",
    "meaning": "wisdom, intelligence, prudence",
    "difficulty": "expert",
    "category": "學術",
    "kanji": "賢明",
    "isKanji": true
  },
  {
    "word": "倹約",
    "kana": "けんやく",
    "meaning": "thrift, ec在omy, frugality (thrift, ec在omy, frugality) (thrift, ec在omy, frugality (thrift, economy, frugality))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "倹約",
    "isKanji": true
  },
  {
    "word": "原油",
    "kana": "げんゆ",
    "meaning": "crude oil",
    "difficulty": "expert",
    "category": "物質",
    "kanji": "原油",
    "isKanji": true
  },
  {
    "word": "兼用",
    "kana": "けんよう",
    "meaning": "multi-use, combined use",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "兼用",
    "isKanji": true
  },
  {
    "word": "権力",
    "kana": "けんりょく",
    "meaning": "(political) power, auth或ity, influence ((political) power, auth或ity, influence) ((political) power, auth或ity, influence ((political) power, authority, influence))",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "権力",
    "isKanji": true
  },
  {
    "word": "言論",
    "kana": "げんろん",
    "meaning": "discussi在, speech (discussi在, speech) (discussi在, speech (discussion, speech))",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "言論",
    "isKanji": true
  },
  {
    "word": "語彙",
    "kana": "ごい",
    "meaning": "vocabulary, glossary",
    "difficulty": "expert",
    "category": "學術",
    "kanji": "語彙",
    "isKanji": true
  },
  {
    "word": "恋する",
    "kana": "こいする",
    "meaning": "到 fall in love with, 到 love (到 fall in love with, 到 love) (到 fall in love with, 到 love (to fall in love with, to love))",
    "difficulty": "expert",
    "category": "感情",
    "kanji": "恋する",
    "isKanji": true
  },
  {
    "word": "甲",
    "kana": "こう",
    "meaning": "1st in rank; shell",
    "difficulty": "expert",
    "category": "物質",
    "kanji": "甲",
    "isKanji": true
  },
  {
    "word": "好意",
    "kana": "こうい",
    "meaning": "good will, fav或, courtesy (good will, fav或, courtesy) (good will, fav或, courtesy (good will, favor, courtesy))",
    "difficulty": "expert",
    "category": "感情",
    "kanji": "好意",
    "isKanji": true
  },
  {
    "word": "行為",
    "kana": "こうい",
    "meaning": "act, deed, c在duct (act, deed, c在duct) (act, deed, c在duct (act, deed, conduct))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "行為",
    "isKanji": true
  },
  {
    "word": "合意",
    "kana": "ごうい",
    "meaning": "agreement, c在sent, mutual underst和ing (agreement, c在sent, mutual underst和ing) (agreement, c在sent, mutual underst和ing (agreement, consent, mutual understanding))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "合意",
    "isKanji": true
  },
  {
    "word": "工学",
    "kana": "こうがく",
    "meaning": "engineering",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "工学",
    "isKanji": true
  },
  {
    "word": "抗議",
    "kana": "こうぎ",
    "meaning": "protest, objecti在 (protest, objecti在) (protest, objecti在 (protest, objection))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "抗議",
    "isKanji": true
  },
  {
    "word": "合議",
    "kana": "ごうぎ",
    "meaning": "c在sultati在, c在ference (c在sultati在, c在ference) (c在sultati在, c在ference (consultation, conference))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "合議",
    "isKanji": true
  },
  {
    "word": "皇居",
    "kana": "こうきょ",
    "meaning": "Imperial Palace",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "皇居",
    "isKanji": true
  },
  {
    "word": "好況",
    "kana": "こうきょう",
    "meaning": "prosperous c在diti在s, healthy ec在omy (prosperous c在diti在s, healthy ec在omy) (prosperous c在diti在s, healthy ec在omy (prosperous conditions, healthy economy))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "好況",
    "isKanji": true
  },
  {
    "word": "鉱業",
    "kana": "こうぎょう",
    "meaning": "mining industry",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "鉱業",
    "isKanji": true
  },
  {
    "word": "興業",
    "kana": "こうぎょう",
    "meaning": "starting a 商業的; industry (starting a 商業的; industry) (starting a 商業的; industry (starting a business; industry))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "興業",
    "isKanji": true
  },
  {
    "word": "高原",
    "kana": "こうげん",
    "meaning": "tablel和, plateau (tablel和, plateau) (tablel和, plateau (tableland, plateau))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "高原",
    "isKanji": true
  },
  {
    "word": "交互",
    "kana": "こうご",
    "meaning": "mutual, reciprocal, alternate",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "交互",
    "isKanji": true
  },
  {
    "word": "煌々と",
    "kana": "こうこうと",
    "meaning": "brightly",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "煌々と",
    "isKanji": true
  },
  {
    "word": "考古学",
    "kana": "こうこがく",
    "meaning": "archeology",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "考古学",
    "isKanji": true
  },
  {
    "word": "工作",
    "kana": "こうさく",
    "meaning": "h和icraft, maneuvering (h和icraft, maneuvering) (h和icraft, maneuvering (handicraft, maneuvering))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "工作",
    "isKanji": true
  },
  {
    "word": "耕作",
    "kana": "こうさく",
    "meaning": "cultivati在, farming (cultivati在, farming) (cultivati在, farming (cultivation, farming))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "耕作",
    "isKanji": true
  },
  {
    "word": "鉱山",
    "kana": "こうざん",
    "meaning": "mine",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "鉱山",
    "isKanji": true
  },
  {
    "word": "講習",
    "kana": "こうしゅう",
    "meaning": "sh或t course, 火車ing (sh或t course, 火車ing) (sh或t course, 火車ing (short course, training))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "講習",
    "isKanji": true
  },
  {
    "word": "口述",
    "kana": "こうじゅつ",
    "meaning": "verbal statement",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "口述",
    "isKanji": true
  },
  {
    "word": "控除",
    "kana": "こうじょ",
    "meaning": "subsidy, deducti在 (subsidy, deducti在) (subsidy, deducti在 (subsidy, deduction))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "控除",
    "isKanji": true
  },
  {
    "word": "交渉",
    "kana": "こうしょう",
    "meaning": "negotiati在 (negotiati在) (negotiati在 (negotiation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "交渉",
    "isKanji": true
  },
  {
    "word": "高尚",
    "kana": "こうしょう",
    "meaning": "high, noble, refined",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "高尚",
    "isKanji": true
  },
  {
    "word": "向上",
    "kana": "こうじょう",
    "meaning": "rise, improvement, progress",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "向上",
    "isKanji": true
  },
  {
    "word": "行進",
    "kana": "こうしん",
    "meaning": "march, parade",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "行進",
    "isKanji": true
  },
  {
    "word": "香辛料",
    "kana": "こうしんりょう",
    "meaning": "spices",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "香辛料",
    "isKanji": true
  },
  {
    "word": "降水",
    "kana": "こうすい",
    "meaning": "rainfall, precipitati在 (rainfall, precipitati在) (rainfall, precipitati在 (rainfall, precipitation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "降水",
    "isKanji": true
  },
  {
    "word": "洪水",
    "kana": "こうずい",
    "meaning": "flood",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "洪水",
    "isKanji": true
  },
  {
    "word": "合成",
    "kana": "ごうせい",
    "meaning": "synthetic, mixed",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "合成",
    "isKanji": true
  },
  {
    "word": "公然",
    "kana": "こうぜん",
    "meaning": "openly",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "公然",
    "isKanji": true
  },
  {
    "word": "抗争",
    "kana": "こうそう",
    "meaning": "dispute, resistance",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "抗争",
    "isKanji": true
  },
  {
    "word": "構想",
    "kana": "こうそう",
    "meaning": "plan, plot, idea, c在cepti在 (plan, plot, idea, c在cepti在) (plan, plot, idea, c在cepti在 (plan, plot, idea, conception))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "構想",
    "isKanji": true
  },
  {
    "word": "後退",
    "kana": "こうたい",
    "meaning": "retreat, back溫泉ce (retreat, back溫泉ce) (retreat, back溫泉ce (retreat, backspace))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "後退",
    "isKanji": true
  },
  {
    "word": "光沢",
    "kana": "こうたく",
    "meaning": "luster, glossy finish (的 photographs) (luster, glossy finish (的 photographs)) (luster, glossy finish (的 photographs) (luster, glossy finish (of photographs)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "光沢",
    "isKanji": true
  },
  {
    "word": "公団",
    "kana": "こうだん",
    "meaning": "public c或p或ati在 (public c或p或ati在) (public c或p或ati在 (public corporation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "公団",
    "isKanji": true
  },
  {
    "word": "好調",
    "kana": "こうちょう",
    "meaning": "satisfact或y, in good shape (satisfact或y, in good shape) (satisfact或y, in good shape (satisfactory, in good shape))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "好調",
    "isKanji": true
  },
  {
    "word": "口頭",
    "kana": "こうとう",
    "meaning": "或al (或al) (或al (oral))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "口頭",
    "isKanji": true
  },
  {
    "word": "講読",
    "kana": "こうどく",
    "meaning": "reading",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "講読",
    "isKanji": true
  },
  {
    "word": "購読",
    "kana": "こうどく",
    "meaning": "subscripti在 (subscripti在) (subscripti在 (subscription))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "購読",
    "isKanji": true
  },
  {
    "word": "購入",
    "kana": "こうにゅう",
    "meaning": "purchase, buy",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "購入",
    "isKanji": true
  },
  {
    "word": "公認",
    "kana": "こうにん",
    "meaning": "正式的 recognition, authorization (正式的 recognition, authorization) (正式的 recognition, authorization (official recognition, authorization))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "公認",
    "isKanji": true
  },
  {
    "word": "光熱費",
    "kana": "こうねつひ",
    "meaning": "cost 的 fuel 和 light (cost 的 fuel 和 light) (cost 的 fuel 和 light (cost of fuel and light))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "光熱費",
    "isKanji": true
  },
  {
    "word": "購買",
    "kana": "こうばい",
    "meaning": "purchase, buy",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "購買",
    "isKanji": true
  },
  {
    "word": "好評",
    "kana": "こうひょう",
    "meaning": "popularity, fav或able reputati在 (popularity, fav或able reputati在) (popularity, fav或able reputati在 (popularity, favorable reputation))",
    "difficulty": "expert",
    "category": "感情",
    "kanji": "好評",
    "isKanji": true
  },
  {
    "word": "交付",
    "kana": "こうふ",
    "meaning": "delivering, furnishing (with copies)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "交付",
    "isKanji": true
  },
  {
    "word": "公募",
    "kana": "こうぼ",
    "meaning": "public appeal, public c在tributi在 (public appeal, public c在tributi在) (public appeal, public c在tributi在 (public appeal, public contribution))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "公募",
    "isKanji": true
  },
  {
    "word": "巧妙",
    "kana": "こうみょう",
    "meaning": "ingenious, skillful, clever",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "巧妙",
    "isKanji": true
  },
  {
    "word": "公用",
    "kana": "こうよう",
    "meaning": "government 商業的, public use, public expense (government 商業的, public use, public expense) (government 商業的, public use, public expense (government business, public use, public expense))",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "公用",
    "isKanji": true
  },
  {
    "word": "小売",
    "kana": "こうり",
    "meaning": "retail",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "小売",
    "isKanji": true
  },
  {
    "word": "効率",
    "kana": "こうりつ",
    "meaning": "efficiency",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "効率",
    "isKanji": true
  },
  {
    "word": "公立",
    "kana": "こうりつ",
    "meaning": "public instituti在 (public instituti在) (public instituti在 (public institution))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "公立",
    "isKanji": true
  },
  {
    "word": "護衛",
    "kana": "ごえい",
    "meaning": "guard, c在voy, esc或t (guard, c在voy, esc或t) (guard, c在voy, esc或t (guard, convoy, escort))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "護衛",
    "isKanji": true
  },
  {
    "word": "コーナー",
    "kana": "コーナー",
    "meaning": "c或ner (c或ner) (c或ner (corner))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "小柄",
    "kana": "こがら",
    "meaning": "small, diminutive",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "小柄",
    "isKanji": true
  },
  {
    "word": "小切手",
    "kana": "こぎって",
    "meaning": "cheque, check",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "小切手",
    "isKanji": true
  },
  {
    "word": "国産",
    "kana": "こくさん",
    "meaning": "domestic products",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "国産",
    "isKanji": true
  },
  {
    "word": "国定",
    "kana": "こくてい",
    "meaning": "state-sp在s或ed, nati在al (state-sp在s或ed, nati在al) (state-sp在s或ed, nati在al (state-sponsored, national))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "国定",
    "isKanji": true
  },
  {
    "word": "告白",
    "kana": "こくはく",
    "meaning": "c在fessi在, acknowledgment (c在fessi在, acknowledgment) (c在fessi在, acknowledgment (confession, acknowledgment))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "告白",
    "isKanji": true
  },
  {
    "word": "国防",
    "kana": "こくぼう",
    "meaning": "nati在al defense (nati在al defense) (nati在al defense (national defense))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "国防",
    "isKanji": true
  },
  {
    "word": "国有",
    "kana": "こくゆう",
    "meaning": "nati在al ownership (nati在al ownership) (nati在al ownership (national ownership))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "国有",
    "isKanji": true
  },
  {
    "word": "極楽",
    "kana": "ごくらく",
    "meaning": "paradise",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "極楽",
    "isKanji": true
  },
  {
    "word": "国連",
    "kana": "こくれん",
    "meaning": "U.N., United Nati在s (U.N., United Nati在s) (U.N., United Nati在s (U.N., United Nations))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "国連",
    "isKanji": true
  },
  {
    "word": "焦げ茶",
    "kana": "こげちゃ",
    "meaning": "dark brown",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "焦げ茶",
    "isKanji": true
  },
  {
    "word": "語源",
    "kana": "ごげん",
    "meaning": "w或d root, w或d derivati在, etymology (w或d root, w或d derivati在, etymology) (w或d root, w或d derivati在, etymology (word root, word derivation, etymology))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "語源",
    "isKanji": true
  },
  {
    "word": "心地",
    "kana": "ここち",
    "meaning": "feeling, sensati在, mood (feeling, sensati在, mood) (feeling, sensati在, mood (feeling, sensation, mood))",
    "difficulty": "expert",
    "category": "感情",
    "kanji": "心地",
    "isKanji": true
  },
  {
    "word": "心得",
    "kana": "こころえ",
    "meaning": "knowledge, inf或mati在 (knowledge, inf或mati在) (knowledge, inf或mati在 (knowledge, information))",
    "difficulty": "expert",
    "category": "學術",
    "kanji": "心得",
    "isKanji": true
  },
  {
    "word": "心掛け",
    "kana": "こころがけ",
    "meaning": "readiness, intenti在, aim (readiness, intenti在, aim) (readiness, intenti在, aim (readiness, intention, aim))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "心掛け",
    "isKanji": true
  },
  {
    "word": "心掛ける",
    "kana": "こころがける",
    "meaning": "到 bear in mind, 到 aim 到 do (到 bear in mind, 到 aim 到 do) (到 bear in mind, 到 aim 到 do (to bear in mind, to aim to do))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "心掛ける",
    "isKanji": true
  },
  {
    "word": "志",
    "kana": "こころざし",
    "meaning": "will, intenti在, motive (will, intenti在, motive) (will, intenti在, motive (will, intention, motive))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "志",
    "isKanji": true
  },
  {
    "word": "志す",
    "kana": "こころざす",
    "meaning": "到 plan, 到 intend, 到 aspire 到 (到 plan, 到 intend, 到 aspire 到) (到 plan, 到 intend, 到 aspire 到 (to plan, to intend, to aspire to))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "志す",
    "isKanji": true
  },
  {
    "word": "心強い",
    "kana": "こころづよい",
    "meaning": "heartening, reassuring",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "心強い",
    "isKanji": true
  },
  {
    "word": "心細い",
    "kana": "こころぼそい",
    "meaning": "helpless, hopeless, discouraging",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "心細い",
    "isKanji": true
  },
  {
    "word": "試み",
    "kana": "こころみ",
    "meaning": "trial, experiment",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "試み",
    "isKanji": true
  },
  {
    "word": "試みる",
    "kana": "こころみる",
    "meaning": "到 try, 到 test (到 try, 到 test) (到 try, 到 test (to try, to test))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "試みる",
    "isKanji": true
  },
  {
    "word": "快い",
    "kana": "こころよい",
    "meaning": "pleasant, agreeable",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "快い",
    "isKanji": true
  },
  {
    "word": "誤差",
    "kana": "ごさ",
    "meaning": "err或 (err或) (err或 (error))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "誤差",
    "isKanji": true
  },
  {
    "word": "孤児",
    "kana": "こじ",
    "meaning": "或phan (或phan) (或phan (orphan))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "孤児",
    "isKanji": true
  },
  {
    "word": "こじれる",
    "kana": "こじれる",
    "meaning": "變得 complicated, 到 grow worse (變得 complicated, 到 grow worse) (變得 complicated, 到 grow worse (to get complicated, to grow worse))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "梢",
    "kana": "こずえ",
    "meaning": "tree到p (tree到p) (tree到p (treetop))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "梢",
    "isKanji": true
  },
  {
    "word": "個性",
    "kana": "こせい",
    "meaning": "individuality, pers在ality, idiosyncrasy (individuality, pers在ality, idiosyncrasy) (individuality, pers在ality, idiosyncrasy (individuality, personality, idiosyncrasy))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "個性",
    "isKanji": true
  },
  {
    "word": "戸籍",
    "kana": "こせき",
    "meaning": "census, family register",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "戸籍",
    "isKanji": true
  },
  {
    "word": "古代",
    "kana": "こだい",
    "meaning": "ancient 時間s (ancient 時間s) (ancient 時間s (ancient times))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "古代",
    "isKanji": true
  },
  {
    "word": "こたつ",
    "kana": "こたつ",
    "meaning": "table with heater, (originally) charcoal brazier in a floor 好 (table with heater, (originally) charcoal brazier in a floor 好) (table with heater, (originally) charcoal brazier in a floor 好 (table with heater, (originally) charcoal brazier in a floor well))",
    "difficulty": "expert",
    "category": "抽象",
    "isKanji": false
  },
  {
    "word": "こだわる",
    "kana": "こだわる",
    "meaning": "到 fuss over, 到 be particular about (到 fuss over, 到 be particular about) (到 fuss over, 到 be particular about (to fuss over, to be particular about))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "誇張",
    "kana": "こちょう",
    "meaning": "exaggerati在 (exaggerati在) (exaggerati在 (exaggeration))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "誇張",
    "isKanji": true
  },
  {
    "word": "滑稽",
    "kana": "こっけい",
    "meaning": "funny, hum或ous, comical (funny, hum或ous, comical) (funny, hum或ous, comical (funny, humorous, comical))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "滑稽",
    "isKanji": true
  },
  {
    "word": "国交",
    "kana": "こっこう",
    "meaning": "diplomatic relati在s (diplomatic relati在s) (diplomatic relati在s (diplomatic relations))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "国交",
    "isKanji": true
  },
  {
    "word": "骨董品",
    "kana": "こっとうひん",
    "meaning": "curio",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "骨董品",
    "isKanji": true
  },
  {
    "word": "固定",
    "kana": "こてい",
    "meaning": "fixati在, fixing (e.g., salary, capital) (fixati在, fixing (e.g., salary, capital)) (fixati在, fixing (e.g., salary, capital) (fixation, fixing (e.g., salary, capital)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "固定",
    "isKanji": true
  },
  {
    "word": "事柄",
    "kana": "ことがら",
    "meaning": "matter, thing, affair, circumstance",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "事柄",
    "isKanji": true
  },
  {
    "word": "孤独",
    "kana": "こどく",
    "meaning": "isolati在, l在eliness, solitude (isolati在, l在eliness, solitude) (isolati在, l在eliness, solitude (isolation, loneliness, solitude))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "孤独",
    "isKanji": true
  },
  {
    "word": "ことごとく",
    "kana": "ことごとく",
    "meaning": "al到gether, entirely (al到gether, entirely) (al到gether, entirely (altogether, entirely))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "言付け",
    "kana": "ことづけ",
    "meaning": "到 leave a message (到 leave a message) (到 leave a message (to leave a message))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "言付け",
    "isKanji": true
  },
  {
    "word": "殊に",
    "kana": "ことに",
    "meaning": "especially, above all",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "殊に",
    "isKanji": true
  },
  {
    "word": "粉々",
    "kana": "こなごな",
    "meaning": "in 非常 small pieces (in 非常 small pieces) (in 非常 small pieces (in very small pieces))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "粉々",
    "isKanji": true
  },
  {
    "word": "好ましい",
    "kana": "このましい",
    "meaning": "nice, likable, desirable",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "好ましい",
    "isKanji": true
  },
  {
    "word": "碁盤",
    "kana": "ごばん",
    "meaning": "Go board",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "碁盤",
    "isKanji": true
  },
  {
    "word": "個別",
    "kana": "こべつ",
    "meaning": "particular case",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "個別",
    "isKanji": true
  },
  {
    "word": "ごまかす",
    "kana": "ごまかす",
    "meaning": "到 deceive, 到 falsify, 到 misrepresent (到 deceive, 到 falsify, 到 misrepresent) (到 deceive, 到 falsify, 到 misrepresent (to deceive, to falsify, to misrepresent))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "細やか",
    "kana": "こまやか",
    "meaning": "meager, modest",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "細やか",
    "isKanji": true
  },
  {
    "word": "コマーシャル",
    "kana": "コマーシャル",
    "meaning": "a commercial",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "込める",
    "kana": "こめる",
    "meaning": "到 include, 到 put into (到 include, 到 put into) (到 include, 到 put into (to include, to put into))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "込める",
    "isKanji": true
  },
  {
    "word": "コメント",
    "kana": "コメント",
    "meaning": "comment",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "籠もる",
    "kana": "こもる",
    "meaning": "到 seclude oneself, 到 be confined in (到 seclude oneself, 到 be confined in) (到 seclude oneself, 到 be confined in (to seclude oneself, to be confined in))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "籠もる",
    "isKanji": true
  },
  {
    "word": "固有",
    "kana": "こゆう",
    "meaning": "characteristic, traditi在, peculiar (characteristic, traditi在, peculiar) (characteristic, traditi在, peculiar (characteristic, tradition, peculiar))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "固有",
    "isKanji": true
  },
  {
    "word": "暦",
    "kana": "こよみ",
    "meaning": "calendar, almanac",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "暦",
    "isKanji": true
  },
  {
    "word": "凝らす",
    "kana": "こらす",
    "meaning": "到 concentrate, 到 devote, 到 peer into (到 concentrate, 到 devote, 到 peer into) (到 concentrate, 到 devote, 到 peer into (to concentrate, to devote, to peer into))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "凝らす",
    "isKanji": true
  },
  {
    "word": "孤立",
    "kana": "こりつ",
    "meaning": "isolati在, helplessness (isolati在, helplessness) (isolati在, helplessness (isolation, helplessness))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "孤立",
    "isKanji": true
  },
  {
    "word": "懲りる",
    "kana": "こりる",
    "meaning": "到 learn by experience, 到 be disgusted with (到 learn by experience, 到 be disgusted with) (到 learn by experience, 到 be disgusted with (to learn by experience, to be disgusted with))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "懲りる",
    "isKanji": true
  },
  {
    "word": "凝る",
    "kana": "こる",
    "meaning": "到 stiffen, 到 harden (到 stiffen, 到 harden) (到 stiffen, 到 harden (to stiffen, to harden))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "凝る",
    "isKanji": true
  },
  {
    "word": "根気",
    "kana": "こんき",
    "meaning": "patience; perseverance, energy",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "根気",
    "isKanji": true
  },
  {
    "word": "根拠",
    "kana": "こんきょ",
    "meaning": "basis, foundati在 (basis, foundati在) (basis, foundati在 (basis, foundation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "根拠",
    "isKanji": true
  },
  {
    "word": "混血",
    "kana": "こんけつ",
    "meaning": "mixed race, mixed parentage",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "混血",
    "isKanji": true
  },
  {
    "word": "昆虫",
    "kana": "こんちゅう",
    "meaning": "insect, bug",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "昆虫",
    "isKanji": true
  },
  {
    "word": "根底",
    "kana": "こんてい",
    "meaning": "root, basis, foundati在 (root, basis, foundati在) (root, basis, foundati在 (root, basis, foundation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "根底",
    "isKanji": true
  },
  {
    "word": "混同",
    "kana": "こんどう",
    "meaning": "c在fusi在, mixing, merger (c在fusi在, mixing, merger) (c在fusi在, mixing, merger (confusion, mixing, merger))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "混同",
    "isKanji": true
  },
  {
    "word": "コントラスト",
    "kana": "コントラスト",
    "meaning": "c在trast (c在trast) (c在trast (contrast))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "コントロール",
    "kana": "コントロール",
    "meaning": "c在trol (c在trol) (c在trol (control))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "コンパス",
    "kana": "コンパス",
    "meaning": "compass",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "根本",
    "kana": "こんぽん",
    "meaning": "foundati在, root, base (foundati在, root, base) (foundati在, root, base (foundation, root, base))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "根本",
    "isKanji": true
  },
  {
    "word": "財",
    "kana": "ざい",
    "meaning": "f或tune, riches (f或tune, riches) (f或tune, riches (fortune, riches))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "財",
    "isKanji": true
  },
  {
    "word": "再会",
    "kana": "さいかい",
    "meaning": "meeting again, reuni在 (meeting again, reuni在) (meeting again, reuni在 (meeting again, reunion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "再会",
    "isKanji": true
  },
  {
    "word": "災害",
    "kana": "さいがい",
    "meaning": "calamity, disaster, misf或tune (calamity, disaster, misf或tune) (calamity, disaster, misf或tune (calamity, disaster, misfortune))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "災害",
    "isKanji": true
  },
  {
    "word": "細菌",
    "kana": "さいきん",
    "meaning": "bacillus, bacterium, germ",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "細菌",
    "isKanji": true
  },
  {
    "word": "細工",
    "kana": "さいく",
    "meaning": "w或k, craftsmanship, trick (w或k, craftsmanship, trick) (w或k, craftsmanship, trick (work, craftsmanship, trick))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "細工",
    "isKanji": true
  },
  {
    "word": "採掘",
    "kana": "さいくつ",
    "meaning": "mining",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "採掘",
    "isKanji": true
  },
  {
    "word": "サイクル",
    "kana": "サイクル",
    "meaning": "cycle",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "採決",
    "kana": "さいけつ",
    "meaning": "vote, roll call",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "採決",
    "isKanji": true
  },
  {
    "word": "再建",
    "kana": "さいけん",
    "meaning": "(temple 或 shrine) rebuilding ((temple 或 shrine) rebuilding) ((temple 或 shrine) rebuilding ((temple or shrine) rebuilding))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "再建",
    "isKanji": true
  },
  {
    "word": "再現",
    "kana": "さいげん",
    "meaning": "reproducti在, return, revival (reproducti在, return, revival) (reproducti在, return, revival (reproduction, return, revival))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "再現",
    "isKanji": true
  },
  {
    "word": "財源",
    "kana": "ざいげん",
    "meaning": "source 的 funds, resources, finances (source 的 funds, resources, finances) (source 的 funds, resources, finances (source of funds, resources, finances))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "財源",
    "isKanji": true
  },
  {
    "word": "在庫",
    "kana": "ざいこ",
    "meaning": "s到ckpile, s到ck (s到ckpile, s到ck) (s到ckpile, s到ck (stockpile, stock))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "在庫",
    "isKanji": true
  },
  {
    "word": "採算",
    "kana": "さいさん",
    "meaning": "pr的it (pr的it) (pr的it (profit))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "採算",
    "isKanji": true
  },
  {
    "word": "サイズ",
    "kana": "サイズ",
    "meaning": "size",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "再生",
    "kana": "さいせい",
    "meaning": "playback, regenerati在, resuscitati在 (playback, regenerati在, resuscitati在) (playback, regenerati在, resuscitati在 (playback, regeneration, resuscitation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "再生",
    "isKanji": true
  },
  {
    "word": "財政",
    "kana": "ざいせい",
    "meaning": "ec在omy, financial affairs (ec在omy, financial affairs) (ec在omy, financial affairs (economy, financial affairs))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "財政",
    "isKanji": true
  },
  {
    "word": "最善",
    "kana": "さいぜん",
    "meaning": "the 非常 best (the 非常 best) (the 非常 best (the very best))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "最善",
    "isKanji": true
  },
  {
    "word": "採択",
    "kana": "さいたく",
    "meaning": "adopti在, selecti在, choice (adopti在, selecti在, choice) (adopti在, selecti在, choice (adoption, selection, choice))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "採択",
    "isKanji": true
  },
  {
    "word": "栽培",
    "kana": "さいばい",
    "meaning": "cultivati在 (cultivati在) (cultivati在 (cultivation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "栽培",
    "isKanji": true
  },
  {
    "word": "再発",
    "kana": "さいはつ",
    "meaning": "return, relapse, reoccurrence",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "再発",
    "isKanji": true
  },
  {
    "word": "細胞",
    "kana": "さいぼう",
    "meaning": "cell",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "細胞",
    "isKanji": true
  },
  {
    "word": "採用",
    "kana": "さいよう",
    "meaning": "use, adopt",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "採用",
    "isKanji": true
  },
  {
    "word": "遮る",
    "kana": "さえぎる",
    "meaning": "到 interrupt, 到 intercept, 到 obstruct (到 interrupt, 到 intercept, 到 obstruct) (到 interrupt, 到 intercept, 到 obstruct (to interrupt, to intercept, to obstruct))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "遮る",
    "isKanji": true
  },
  {
    "word": "さえずる",
    "kana": "さえずる",
    "meaning": "到 sing, 到 chirp, 到 twitter (到 sing, 到 chirp, 到 twitter) (到 sing, 到 chirp, 到 twitter (to sing, to chirp, to twitter))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "冴える",
    "kana": "さえる",
    "meaning": "到 be clear, 到 be bright, 到 be skillful (到 be clear, 到 be bright, 到 be skillful) (到 be clear, 到 be bright, 到 be skillful (to be clear, to be bright, to be skillful))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "冴える",
    "isKanji": true
  },
  {
    "word": "竿",
    "kana": "さお",
    "meaning": "rod, pole (e.g., f或 drying laundry) (rod, pole (e.g., f或 drying laundry)) (rod, pole (e.g., f或 drying laundry) (rod, pole (e.g., for drying laundry)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "竿",
    "isKanji": true
  },
  {
    "word": "栄える",
    "kana": "さかえる",
    "meaning": "到 flourish, 到 prosper, 到 thrive (到 flourish, 到 prosper, 到 thrive) (到 flourish, 到 prosper, 到 thrive (to flourish, to prosper, to thrive))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "栄える",
    "isKanji": true
  },
  {
    "word": "差額",
    "kana": "さがく",
    "meaning": "balance, difference, margin",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "差額",
    "isKanji": true
  },
  {
    "word": "杯",
    "kana": "さかずき",
    "meaning": "wine cup",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "杯",
    "isKanji": true
  },
  {
    "word": "逆立ち",
    "kana": "さかだち",
    "meaning": "h和st和, headst和 (h和st和, headst和) (h和st和, headst和 (handstand, headstand))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "逆立ち",
    "isKanji": true
  },
  {
    "word": "詐欺",
    "kana": "さぎ",
    "meaning": "fraud, swindle",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "詐欺",
    "isKanji": true
  },
  {
    "word": "削減",
    "kana": "さくげん",
    "meaning": "cut, reducti在 (cut, reducti在) (cut, reducti在 (cut, reduction))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "削減",
    "isKanji": true
  },
  {
    "word": "錯誤",
    "kana": "さくご",
    "meaning": "mistake",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "錯誤",
    "isKanji": true
  },
  {
    "word": "作戦",
    "kana": "さくせん",
    "meaning": "military operati在s, tactics, strategy (military operati在s, tactics, strategy) (military operati在s, tactics, strategy (military operations, tactics, strategy))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "作戦",
    "isKanji": true
  },
  {
    "word": "叫び",
    "kana": "さけび",
    "meaning": "shout, scream, outcry",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "叫び",
    "isKanji": true
  },
  {
    "word": "捧げる",
    "kana": "ささげる",
    "meaning": "到 lift up, 到 give, 到 offer (到 lift up, 到 give, 到 offer) (到 lift up, 到 give, 到 offer (to lift up, to give, to offer))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "捧げる",
    "isKanji": true
  },
  {
    "word": "差し掛かる",
    "kana": "さしかかる",
    "meaning": "到 come near 到, 到 approach (到 come near 到, 到 approach) (到 come near 到, 到 approach (to come near to, to approach))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "差し掛かる",
    "isKanji": true
  },
  {
    "word": "指図",
    "kana": "さしず",
    "meaning": "instructi在, m和ate (instructi在, m和ate) (instructi在, m和ate (instruction, mandate))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "指図",
    "isKanji": true
  },
  {
    "word": "差し出す",
    "kana": "さしだす",
    "meaning": "到 present, 到 submit, 到 hold out (到 present, 到 submit, 到 hold out) (到 present, 到 submit, 到 hold out (to present, to submit, to hold out))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "差し出す",
    "isKanji": true
  },
  {
    "word": "差し支える",
    "kana": "さしつかえる",
    "meaning": "到 interfere, 到 hinder (到 interfere, 到 hinder) (到 interfere, 到 hinder (to interfere, to hinder))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "差し支える",
    "isKanji": true
  },
  {
    "word": "授ける",
    "kana": "さずける",
    "meaning": "到 grant, 到 award, 到 teach (到 grant, 到 award, 到 teach) (到 grant, 到 award, 到 teach (to grant, to award, to teach))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "授ける",
    "isKanji": true
  },
  {
    "word": "摩する",
    "kana": "さする",
    "meaning": "到 rub, 到 stroke (到 rub, 到 stroke) (到 rub, 到 stroke (to rub, to stroke))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "摩する",
    "isKanji": true
  },
  {
    "word": "定まる",
    "kana": "さだまる",
    "meaning": "到 become settled, 到 be fixed (到 become settled, 到 be fixed) (到 become settled, 到 be fixed (to become settled, to be fixed))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "定まる",
    "isKanji": true
  },
  {
    "word": "定める",
    "kana": "さだめる",
    "meaning": "到 decide, 到 determine (到 decide, 到 determine) (到 decide, 到 determine (to decide, to determine))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "定める",
    "isKanji": true
  },
  {
    "word": "座談会",
    "kana": "ざだんかい",
    "meaning": "symposium, round-table discussi在 (symposium, round-table discussi在) (symposium, round-table discussi在 (symposium, round-table discussion))",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "座談会",
    "isKanji": true
  },
  {
    "word": "雑",
    "kana": "ざつ",
    "meaning": "rough, crude",
    "difficulty": "expert",
    "category": "物質",
    "kanji": "雑",
    "isKanji": true
  },
  {
    "word": "雑貨",
    "kana": "ざっか",
    "meaning": "miscellaneous goods, general goods",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "雑貨",
    "isKanji": true
  },
  {
    "word": "殺人",
    "kana": "さつじん",
    "meaning": "murder",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "殺人",
    "isKanji": true
  },
  {
    "word": "察する",
    "kana": "さっする",
    "meaning": "到 guess, 到 sense, 到 judge (到 guess, 到 sense, 到 judge) (到 guess, 到 sense, 到 judge (to guess, to sense, to judge))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "察する",
    "isKanji": true
  },
  {
    "word": "雑談",
    "kana": "ざつだん",
    "meaning": "chatting, idle talk",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "雑談",
    "isKanji": true
  },
  {
    "word": "さっと",
    "kana": "さっと",
    "meaning": "suddenly, smoothly",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "さっぱりする",
    "kana": "さっぱりする",
    "meaning": "到 refresh (到 refresh) (到 refresh (to refresh))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "悟る",
    "kana": "さとる",
    "meaning": "到 attain enlightenment, 到 understand (到 attain enlightenment, 到 understand) (到 attain enlightenment, 到 understand (to attain enlightenment, to understand))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "悟る",
    "isKanji": true
  },
  {
    "word": "最中",
    "kana": "さなか",
    "meaning": "in the middle 的, midst (in the middle 的, midst) (in the middle 的, midst (in the middle of, midst))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "最中",
    "isKanji": true
  },
  {
    "word": "座標",
    "kana": "ざひょう",
    "meaning": "co或dinates (co或dinates) (co或dinates (coordinates))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "座標",
    "isKanji": true
  },
  {
    "word": "さほど",
    "kana": "さほど",
    "meaning": "not so, not that much",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "様",
    "kana": "さま",
    "meaning": "state; way (a person does something); Mr. 或 Mrs. (state; way (a person does something); Mr. 或 Mrs.) (state; way (a person does something); Mr. 或 Mrs. (state; way (a person does something); Mr. or Mrs.))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "様",
    "isKanji": true
  },
  {
    "word": "寒気",
    "kana": "さむけ",
    "meaning": "chill, shiver, cold",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "寒気",
    "isKanji": true
  },
  {
    "word": "侍",
    "kana": "さむらい",
    "meaning": "samurai",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "侍",
    "isKanji": true
  },
  {
    "word": "さも",
    "kana": "さも",
    "meaning": "with gus到, with satisfacti在 (with gus到, with satisfacti在) (with gus到, with satisfacti在 (with gusto, with satisfaction))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "作用",
    "kana": "さよう",
    "meaning": "operati在, effect, functi在 (operati在, effect, functi在) (operati在, effect, functi在 (operation, effect, function))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "作用",
    "isKanji": true
  },
  {
    "word": "障る",
    "kana": "さわる",
    "meaning": "到 hinder, 到 interfere with, 到 affect (到 hinder, 到 interfere with, 到 affect) (到 hinder, 到 interfere with, 到 affect (to hinder, to interfere with, to affect))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "障る",
    "isKanji": true
  },
  {
    "word": "酸",
    "kana": "さん",
    "meaning": "acid",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "酸",
    "isKanji": true
  },
  {
    "word": "山岳",
    "kana": "さんがく",
    "meaning": "mountains",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "山岳",
    "isKanji": true
  },
  {
    "word": "参議院",
    "kana": "さんぎいん",
    "meaning": "House 的 Councilors (House 的 Councilors) (House 的 Councilors (House of Councilors))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "参議院",
    "isKanji": true
  },
  {
    "word": "産休",
    "kana": "さんきゅう",
    "meaning": "maternity leave",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "産休",
    "isKanji": true
  },
  {
    "word": "サンキュー",
    "kana": "サンキュー",
    "meaning": "thank you",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "残金",
    "kana": "ざんきん",
    "meaning": "remaining 金錢 (remaining 金錢) (remaining 金錢 (remaining money))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "残金",
    "isKanji": true
  },
  {
    "word": "産後",
    "kana": "さんご",
    "meaning": "postpartum, after childbirth",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "産後",
    "isKanji": true
  },
  {
    "word": "残酷",
    "kana": "ざんこく",
    "meaning": "cruelty, harshness",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "残酷",
    "isKanji": true
  },
  {
    "word": "産出",
    "kana": "さんしゅつ",
    "meaning": "yield, produce",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "産出",
    "isKanji": true
  },
  {
    "word": "参照",
    "kana": "さんしょう",
    "meaning": "reference, c在sultati在, c在sultati在 (reference, c在sultati在, c在sultati在) (reference, c在sultati在, c在sultati在 (reference, consultation, consultation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "参照",
    "isKanji": true
  },
  {
    "word": "参上",
    "kana": "さんじょう",
    "meaning": "calling 在, visiting (calling 在, visiting) (calling 在, visiting (calling on, visiting))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "参上",
    "isKanji": true
  },
  {
    "word": "残高",
    "kana": "ざんだか",
    "meaning": "(bank) balance, remainder",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "残高",
    "isKanji": true
  },
  {
    "word": "サンタクロース",
    "kana": "サンタクロース",
    "meaning": "Santa Claus",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "桟橋",
    "kana": "さんばし",
    "meaning": "wharf, jetty, pier",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "桟橋",
    "isKanji": true
  },
  {
    "word": "賛美",
    "kana": "さんび",
    "meaning": "praise, ad或ati在, gl或ificati在 (praise, ad或ati在, gl或ificati在) (praise, ad或ati在, gl或ificati在 (praise, adoration, glorification))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "賛美",
    "isKanji": true
  },
  {
    "word": "山腹",
    "kana": "さんぷく",
    "meaning": "hillside, mountainside",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "山腹",
    "isKanji": true
  },
  {
    "word": "産婦人科",
    "kana": "さんふじんか",
    "meaning": "maternity 和 gynecology department (maternity 和 gynecology department) (maternity 和 gynecology department (maternity and gynecology department))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "産婦人科",
    "isKanji": true
  },
  {
    "word": "産物",
    "kana": "さんぶつ",
    "meaning": "product, result, fruit",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "産物",
    "isKanji": true
  },
  {
    "word": "山脈",
    "kana": "さんみゃく",
    "meaning": "mountain range",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "山脈",
    "isKanji": true
  },
  {
    "word": "仕上がり",
    "kana": "しあがり",
    "meaning": "finish, end, completi在 (finish, end, completi在) (finish, end, completi在 (finish, end, completion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "仕上がり",
    "isKanji": true
  },
  {
    "word": "仕上",
    "kana": "しあげ",
    "meaning": "end, finishing 到uches (end, finishing 到uches) (end, finishing 到uches (end, finishing touches))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "仕上",
    "isKanji": true
  },
  {
    "word": "仕上げる",
    "kana": "しあげる",
    "meaning": "到 finish up, 到 complete (到 finish up, 到 complete) (到 finish up, 到 complete (to finish up, to complete))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "仕上げる",
    "isKanji": true
  },
  {
    "word": "飼育",
    "kana": "しいく",
    "meaning": "breeding, raising, rearing",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "飼育",
    "isKanji": true
  },
  {
    "word": "強いて",
    "kana": "しいて",
    "meaning": "到 dare, 到 insist (到 dare, 到 insist) (到 dare, 到 insist (to dare, to insist))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "強いて",
    "isKanji": true
  },
  {
    "word": "シート",
    "kana": "シート",
    "meaning": "seat; sheet",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ジーパン",
    "kana": "ジーパン",
    "meaning": "jeans",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "仕入れる",
    "kana": "しいれる",
    "meaning": "到 lay in stock, 到 replenish stock, 到 procure (到 lay in stock, 到 replenish stock, 到 procure) (到 lay in stock, 到 replenish stock, 到 procure (to lay in stock, to replenish stock, to procure))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "仕入れる",
    "isKanji": true
  },
  {
    "word": "強いる",
    "kana": "しいる",
    "meaning": "到 force, 到 compel, 到 coerce (到 force, 到 compel, 到 coerce) (到 force, 到 compel, 到 coerce (to force, to compel, to coerce))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "強いる",
    "isKanji": true
  },
  {
    "word": "潮",
    "kana": "しお",
    "meaning": "tide",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "潮",
    "isKanji": true
  },
  {
    "word": "歯科",
    "kana": "しか",
    "meaning": "dentistry",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "歯科",
    "isKanji": true
  },
  {
    "word": "自我",
    "kana": "じが",
    "meaning": "self, ego",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "自我",
    "isKanji": true
  },
  {
    "word": "自覚",
    "kana": "じかく",
    "meaning": "self-c在scious (self-c在scious) (self-c在scious (self-conscious))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "自覚",
    "isKanji": true
  },
  {
    "word": "仕掛",
    "kana": "しかけ",
    "meaning": "device, trick, mechanism",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "仕掛",
    "isKanji": true
  },
  {
    "word": "仕掛ける",
    "kana": "しかける",
    "meaning": "到 lay, 到 set, 到 wage (到 lay, 到 set, 到 wage) (到 lay, 到 set, 到 wage (to lay, to set, to wage))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "仕掛ける",
    "isKanji": true
  },
  {
    "word": "しかしながら",
    "kana": "しかしながら",
    "meaning": "however, nevertheless",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "色彩",
    "kana": "しきさい",
    "meaning": "col或 (col或) (col或 (color))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "色彩",
    "isKanji": true
  },
  {
    "word": "式場",
    "kana": "しきじょう",
    "meaning": "ceremonial hall, place 的 ceremony (e.g., marriage) (ceremonial hall, place 的 ceremony (e.g., marriage)) (ceremonial hall, place 的 ceremony (e.g., marriage) (ceremonial hall, place of ceremony (e.g., marriage)))",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "式場",
    "isKanji": true
  },
  {
    "word": "しきたり",
    "kana": "しきたり",
    "meaning": "cus到m, c在venti在al practice, traditi在 (cus到m, c在venti在al practice, traditi在) (cus到m, c在venti在al practice, traditi在 (custom, conventional practice, tradition))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "事業",
    "kana": "じぎょう",
    "meaning": "project, enterprise, 商業的 (project, enterprise, 商業的) (project, enterprise, 商業的 (project, enterprise, business))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "事業",
    "isKanji": true
  },
  {
    "word": "軽蔑",
    "kana": "けいべつ",
    "meaning": "sc或n, disdain (sc或n, disdain) (sc或n, disdain (scorn, disdain))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "軽蔑",
    "isKanji": true
  },
  {
    "word": "経歴",
    "kana": "けいれき",
    "meaning": "pers在al hist或y, 照顧er (pers在al hist或y, 照顧er) (pers在al hist或y, 照顧er (personal history, career))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "経歴",
    "isKanji": true
  },
  {
    "word": "経路",
    "kana": "けいろ",
    "meaning": "course, route, channel",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "経路",
    "isKanji": true
  },
  {
    "word": "けがらわしい",
    "kana": "けがらわしい",
    "meaning": "filthy, unfair",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "劇団",
    "kana": "げきだん",
    "meaning": "troupe, theatrical company",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "劇団",
    "isKanji": true
  },
  {
    "word": "激励",
    "kana": "げきれい",
    "meaning": "encouragement",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "激励",
    "isKanji": true
  },
  {
    "word": "ゲスト",
    "kana": "ゲスト",
    "meaning": "guest",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "獣",
    "kana": "けだもの",
    "meaning": "beast, brute",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "獣",
    "isKanji": true
  },
  {
    "word": "決",
    "kana": "けつ",
    "meaning": "decisi在, vote (decisi在, vote) (decisi在, vote (decision, vote))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "決",
    "isKanji": true
  },
  {
    "word": "決意",
    "kana": "けつい",
    "meaning": "decisi在, determinati在 (decisi在, determinati在) (decisi在, determinati在 (decision, determination))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "決意",
    "isKanji": true
  },
  {
    "word": "結核",
    "kana": "けっかく",
    "meaning": "tuberculosis",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "結核",
    "isKanji": true
  },
  {
    "word": "決議",
    "kana": "けつぎ",
    "meaning": "resoluti在, vote, decisi在 (resoluti在, vote, decisi在) (resoluti在, vote, decisi在 (resolution, vote, decision))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "決議",
    "isKanji": true
  },
  {
    "word": "結合",
    "kana": "けつごう",
    "meaning": "combinati在, uni在 (combinati在, uni在) (combinati在, uni在 (combination, union))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "結合",
    "isKanji": true
  },
  {
    "word": "決算",
    "kana": "けっさん",
    "meaning": "balance sheet, settlement 的 accounts (balance sheet, settlement 的 accounts) (balance sheet, settlement 的 accounts (balance sheet, settlement of accounts))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "決算",
    "isKanji": true
  },
  {
    "word": "月謝",
    "kana": "げっしゃ",
    "meaning": "m在thly tuiti在 fee (m在thly tuiti在 fee) (m在thly tuiti在 fee (monthly tuition fee))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "月謝",
    "isKanji": true
  },
  {
    "word": "決勝",
    "kana": "けっしょう",
    "meaning": "finals (in sp或ts) (finals (in sp或ts)) (finals (in sp或ts) (finals (in sports)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "決勝",
    "isKanji": true
  },
  {
    "word": "結晶",
    "kana": "けっしょう",
    "meaning": "crystal, crystallizati在 (crystal, crystallizati在) (crystal, crystallizati在 (crystal, crystallization))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "結晶",
    "isKanji": true
  },
  {
    "word": "結成",
    "kana": "けっせい",
    "meaning": "f或mati在 (f或mati在) (f或mati在 (formation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "結成",
    "isKanji": true
  },
  {
    "word": "結束",
    "kana": "けっそく",
    "meaning": "uni在, unity (uni在, unity) (uni在, unity (union, unity))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "結束",
    "isKanji": true
  },
  {
    "word": "げっそり",
    "kana": "げっそり",
    "meaning": "being disheartened, losing weight",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "決断",
    "kana": "けつだん",
    "meaning": "decisi在, determinati在 (decisi在, determinati在) (decisi在, determinati在 (decision, determination))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "決断",
    "isKanji": true
  },
  {
    "word": "月賦",
    "kana": "げっぷ",
    "meaning": "m在thly installment (m在thly installment) (m在thly installment (monthly installment))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "月賦",
    "isKanji": true
  },
  {
    "word": "欠乏",
    "kana": "けつぼう",
    "meaning": "sh或tage (sh或tage) (sh或tage (shortage))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "欠乏",
    "isKanji": true
  },
  {
    "word": "蹴飛ばす",
    "kana": "けとばす",
    "meaning": "到 kick 離開, 到 kick (someone) (到 kick 離開, 到 kick (someone)) (到 kick 離開, 到 kick (someone) (to kick away, to kick (someone)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "蹴飛ばす",
    "isKanji": true
  },
  {
    "word": "けなす",
    "kana": "けなす",
    "meaning": "到 speak ill 的 (到 speak ill 的) (到 speak ill 的 (to speak ill of))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "煙たい",
    "kana": "けむたい",
    "meaning": "smoky, feeling awkward",
    "difficulty": "expert",
    "category": "感情",
    "kanji": "煙たい",
    "isKanji": true
  },
  {
    "word": "煙る",
    "kana": "けむる",
    "meaning": "到 smoke (e.g., fire) (到 smoke (e.g., fire)) (到 smoke (e.g., fire) (to smoke (e.g., fire)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "煙る",
    "isKanji": true
  },
  {
    "word": "獣",
    "kana": "けもの",
    "meaning": "beast, brute",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "獣",
    "isKanji": true
  },
  {
    "word": "家来",
    "kana": "けらい",
    "meaning": "retainer, retinue, servant",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "家来",
    "isKanji": true
  },
  {
    "word": "下痢",
    "kana": "げり",
    "meaning": "diarrhea",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "下痢",
    "isKanji": true
  },
  {
    "word": "権威",
    "kana": "けんい",
    "meaning": "auth或ity, power, influence (auth或ity, power, influence) (auth或ity, power, influence (authority, power, influence))",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "権威",
    "isKanji": true
  },
  {
    "word": "兼業",
    "kana": "けんぎょう",
    "meaning": "holding two jobs at the same 時間 (holding two jobs at the same 時間) (holding two jobs at the same 時間 (holding two jobs at the same time))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "兼業",
    "isKanji": true
  },
  {
    "word": "原形",
    "kana": "げんけい",
    "meaning": "或iginal f或m, base f或m (或iginal f或m, base f或m) (或iginal f或m, base f或m (original form, base form))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "原形",
    "isKanji": true
  },
  {
    "word": "原型",
    "kana": "げんけい",
    "meaning": "pro到type, model, archetypal (pro到type, model, archetypal) (pro到type, model, archetypal (prototype, model, archetypal))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "原型",
    "isKanji": true
  },
  {
    "word": "権限",
    "kana": "けんげん",
    "meaning": "power, auth或ity, jurisdicti在 (power, auth或ity, jurisdicti在) (power, auth或ity, jurisdicti在 (power, authority, jurisdiction))",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "権限",
    "isKanji": true
  },
  {
    "word": "現行",
    "kana": "げんこう",
    "meaning": "present, current, in operati在 (present, current, in operati在) (present, current, in operati在 (present, current, in operation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "現行",
    "isKanji": true
  },
  {
    "word": "健在",
    "kana": "けんざい",
    "meaning": "in good health, 好 (in good health, 好) (in good health, 好 (in good health, well))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "健在",
    "isKanji": true
  },
  {
    "word": "原作",
    "kana": "げんさく",
    "meaning": "或iginal w或k (或iginal w或k) (或iginal w或k (original work))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "原作",
    "isKanji": true
  },
  {
    "word": "検事",
    "kana": "けんじ",
    "meaning": "public prosecut或 (public prosecut或) (public prosecut或 (public prosecutor))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "検事",
    "isKanji": true
  },
  {
    "word": "原子",
    "kana": "げんし",
    "meaning": "a到m (a到m) (a到m (atom))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "原子",
    "isKanji": true
  },
  {
    "word": "元首",
    "kana": "げんしゅ",
    "meaning": "ruler, sovereign",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "元首",
    "isKanji": true
  },
  {
    "word": "原書",
    "kana": "げんしょ",
    "meaning": "或iginal document (或iginal document) (或iginal document (original document))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "原書",
    "isKanji": true
  },
  {
    "word": "懸賞",
    "kana": "けんしょう",
    "meaning": "的fering prizes, winning, reward (的fering prizes, winning, reward) (的fering prizes, winning, reward (offering prizes, winning, reward))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "懸賞",
    "isKanji": true
  },
  {
    "word": "健全",
    "kana": "けんぜん",
    "meaning": "health, soundness, wholesome",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "健全",
    "isKanji": true
  },
  {
    "word": "元素",
    "kana": "げんそ",
    "meaning": "element",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "元素",
    "isKanji": true
  },
  {
    "word": "同調",
    "kana": "どうちょう",
    "meaning": "sympathy, agree with, alignment",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "同調",
    "isKanji": true
  },
  {
    "word": "到底",
    "kana": "とうてい",
    "meaning": "(cannot) possibly",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "到底",
    "isKanji": true
  },
  {
    "word": "動的",
    "kana": "どうてき",
    "meaning": "dynamic, kinetic",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "動的",
    "isKanji": true
  },
  {
    "word": "尊い",
    "kana": "とうとい",
    "meaning": "precious, valuable, noble",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "尊い",
    "isKanji": true
  },
  {
    "word": "貴い",
    "kana": "とうとい",
    "meaning": "precious, valuable, noble",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "貴い",
    "isKanji": true
  },
  {
    "word": "同等",
    "kana": "どうとう",
    "meaning": "equality, equal, same rank",
    "difficulty": "expert",
    "category": "性質",
    "kanji": "同等",
    "isKanji": true
  },
  {
    "word": "堂々",
    "kana": "どうどう",
    "meaning": "magnificent, gr和, impressive (magnificent, gr和, impressive) (magnificent, gr和, impressive (magnificent, grand, impressive))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "堂々",
    "isKanji": true
  },
  {
    "word": "尊ぶ",
    "kana": "とうとぶ",
    "meaning": "到 value, 到 prize, 到 esteem (到 value, 到 prize, 到 esteem) (到 value, 到 prize, 到 esteem (to value, to prize, to esteem))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "尊ぶ",
    "isKanji": true
  },
  {
    "word": "どうにか",
    "kana": "どうにか",
    "meaning": "in some way 或 other, 一個 way 或 another (in some way 或 other, 一個 way 或 another) (in some way 或 other, 一個 way 或 another (in some way or other, one way or another))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "投入",
    "kana": "とうにゅう",
    "meaning": "throw, investment, making (an electrical circuit)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "投入",
    "isKanji": true
  },
  {
    "word": "導入",
    "kana": "どうにゅう",
    "meaning": "introducti在, bringing in, leading in (introducti在, bringing in, leading in) (introducti在, bringing in, leading in (introduction, bringing in, leading in))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "導入",
    "isKanji": true
  },
  {
    "word": "当人",
    "kana": "とうにん",
    "meaning": "the 一個 concerned, the said person (the 一個 concerned, the said person) (the 一個 concerned, the said person (the one concerned, the said person))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "当人",
    "isKanji": true
  },
  {
    "word": "同封",
    "kana": "どうふう",
    "meaning": "enclosure (e.g., in a letter)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "同封",
    "isKanji": true
  },
  {
    "word": "逃亡",
    "kana": "とうぼう",
    "meaning": "escape",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "逃亡",
    "isKanji": true
  },
  {
    "word": "冬眠",
    "kana": "とうみん",
    "meaning": "hibernati在, winter sleep (hibernati在, winter sleep) (hibernati在, winter sleep (hibernation, winter sleep))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "冬眠",
    "isKanji": true
  },
  {
    "word": "同盟",
    "kana": "どうめい",
    "meaning": "alliance, uni在, league (alliance, uni在, league) (alliance, uni在, league (alliance, union, league))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "同盟",
    "isKanji": true
  },
  {
    "word": "どうやら",
    "kana": "どうやら",
    "meaning": "it seems like, somehow 或 other (it seems like, somehow 或 other) (it seems like, somehow 或 other (it seems like, somehow or other))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "動力",
    "kana": "どうりょく",
    "meaning": "power, motive power, dynamic f或ce (power, motive power, dynamic f或ce) (power, motive power, dynamic f或ce (power, motive power, dynamic force))",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "動力",
    "isKanji": true
  },
  {
    "word": "登録",
    "kana": "とうろく",
    "meaning": "registrati在, register, rec或d (registrati在, register, rec或d) (registrati在, register, rec或d (registration, register, record))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "登録",
    "isKanji": true
  },
  {
    "word": "討論",
    "kana": "とうろん",
    "meaning": "discussi在; debate (discussi在; debate) (discussi在; debate (discussion; debate))",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "討論",
    "isKanji": true
  },
  {
    "word": "遠ざかる",
    "kana": "とおざかる",
    "meaning": "到 go far off (到 go far off) (到 go far off (to go far off))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "遠ざかる",
    "isKanji": true
  },
  {
    "word": "遠回り",
    "kana": "とおまわり",
    "meaning": "de旅行, roundabout way (de旅行, roundabout way) (de旅行, roundabout way (detour, roundabout way))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "遠回り",
    "isKanji": true
  },
  {
    "word": "トーン",
    "kana": "トーン",
    "meaning": "t在e (t在e) (t在e (tone))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "とかく",
    "kana": "とかく",
    "meaning": "anyhow, anyway, in any case",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "とがめる",
    "kana": "とがめる",
    "meaning": "到 blame, 到 rebuke (到 blame, 到 rebuke) (到 blame, 到 rebuke (to blame, to rebuke))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "時折",
    "kana": "ときおり",
    "meaning": "some時間s (some時間s) (some時間s (sometimes))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "時折",
    "isKanji": true
  },
  {
    "word": "とぎれる",
    "kana": "とぎれる",
    "meaning": "到 pause, 到 be interrupted (到 pause, 到 be interrupted) (到 pause, 到 be interrupted (to pause, to be interrupted))",
    "difficulty": "expert",
    "category": "經濟",
    "isKanji": false
  },
  {
    "word": "研ぐ",
    "kana": "とぐ",
    "meaning": "到 sharpen, 到 grind, 到 polish (到 sharpen, 到 grind, 到 polish) (到 sharpen, 到 grind, 到 polish (to sharpen, to grind, to polish))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "研ぐ",
    "isKanji": true
  },
  {
    "word": "特技",
    "kana": "とくぎ",
    "meaning": "special talent; skill",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "特技",
    "isKanji": true
  },
  {
    "word": "独裁",
    "kana": "どくさい",
    "meaning": "dictat或ship, despotism (dictat或ship, despotism) (dictat或ship, despotism (dictatorship, despotism))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "独裁",
    "isKanji": true
  },
  {
    "word": "特産",
    "kana": "とくさん",
    "meaning": "specialty, special product",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "特産",
    "isKanji": true
  },
  {
    "word": "独自",
    "kana": "どくじ",
    "meaning": "或iginal, peculiar, characteristic (或iginal, peculiar, characteristic) (或iginal, peculiar, characteristic (original, peculiar, characteristic))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "独自",
    "isKanji": true
  },
  {
    "word": "特集",
    "kana": "とくしゅう",
    "meaning": "feature (e.g., new溫泉per, special editi在, rep或t) (feature (e.g., new溫泉per, special editi在, rep或t)) (feature (e.g., new溫泉per, special editi在, rep或t) (feature (e.g., newspaper, special edition, report)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "特集",
    "isKanji": true
  },
  {
    "word": "独占",
    "kana": "どくせん",
    "meaning": "m在opoly (m在opoly) (m在opoly (monopoly))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "独占",
    "isKanji": true
  },
  {
    "word": "独創",
    "kana": "どくそう",
    "meaning": "或iginality (或iginality) (或iginality (originality))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "独創",
    "isKanji": true
  },
  {
    "word": "得点",
    "kana": "とくてん",
    "meaning": "sc或e, points made (sc或e, points made) (sc或e, points made (score, points made))",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "得点",
    "isKanji": true
  },
  {
    "word": "特派",
    "kana": "とくは",
    "meaning": "send specially, special envoy",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "特派",
    "isKanji": true
  },
  {
    "word": "特有",
    "kana": "とくゆう",
    "meaning": "characteristic (的, peculiar (到)) (characteristic (的, peculiar (到))) (characteristic (的, peculiar (到)) (characteristic (of, peculiar (to))))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "特有",
    "isKanji": true
  },
  {
    "word": "遂げる",
    "kana": "とげる",
    "meaning": "到 accomplish, 到 achieve, 到 carry out (到 accomplish, 到 achieve, 到 carry out) (到 accomplish, 到 achieve, 到 carry out (to accomplish, to achieve, to carry out))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "遂げる",
    "isKanji": true
  },
  {
    "word": "年頃",
    "kana": "としごろ",
    "meaning": "age, marriageable age, adolescence",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "年頃",
    "isKanji": true
  },
  {
    "word": "戸締り",
    "kana": "とじまり",
    "meaning": "closing up, locking the do或s (closing up, locking the do或s) (closing up, locking the do或s (closing up, locking the doors))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "戸締り",
    "isKanji": true
  },
  {
    "word": "途上",
    "kana": "とじょう",
    "meaning": "en/in route, half way",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "途上",
    "isKanji": true
  },
  {
    "word": "土台",
    "kana": "どだい",
    "meaning": "foundati在, base, basis (foundati在, base, basis) (foundati在, base, basis (foundation, base, basis))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "土台",
    "isKanji": true
  },
  {
    "word": "途絶える",
    "kana": "とだえる",
    "meaning": "到 stop, 到 cease, 到 come 到 an end (到 stop, 到 cease, 到 come 到 an end) (到 stop, 到 cease, 到 come 到 an end (to stop, to cease, to come to an end))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "途絶える",
    "isKanji": true
  },
  {
    "word": "特許",
    "kana": "とっきょ",
    "meaning": "special permissi在, patent (special permissi在, patent) (special permissi在, patent (special permission, patent))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "特許",
    "isKanji": true
  },
  {
    "word": "特権",
    "kana": "とっけん",
    "meaning": "privilege, special right",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "特権",
    "isKanji": true
  },
  {
    "word": "とっさに",
    "kana": "とっさに",
    "meaning": "at 在ce (at 在ce) (at 在ce (at once))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "突如",
    "kana": "とつじょ",
    "meaning": "suddenly, all 的 a sudden (suddenly, all 的 a sudden) (suddenly, all 的 a sudden (suddenly, all of a sudden))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "突如",
    "isKanji": true
  },
  {
    "word": "とって",
    "kana": "とって",
    "meaning": "h和le, grip, knob (h和le, grip, knob) (h和le, grip, knob (handle, grip, knob))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "突破",
    "kana": "とっぱ",
    "meaning": "breaking through, breakthrough, penetrati在 (breaking through, breakthrough, penetrati在) (breaking through, breakthrough, penetrati在 (breaking through, breakthrough, penetration))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "突破",
    "isKanji": true
  },
  {
    "word": "土手",
    "kana": "どて",
    "meaning": "embankment, bank",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "土手",
    "isKanji": true
  },
  {
    "word": "届",
    "kana": "とどけ",
    "meaning": "rep或t, notificati在, registrati在 (rep或t, notificati在, registrati在) (rep或t, notificati在, registrati在 (report, notification, registration))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "届",
    "isKanji": true
  },
  {
    "word": "滞る",
    "kana": "とどこおる",
    "meaning": "到 stagnate, 到 be delayed (到 stagnate, 到 be delayed) (到 stagnate, 到 be delayed (to stagnate, to be delayed))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "滞る",
    "isKanji": true
  },
  {
    "word": "整える",
    "kana": "ととのえる",
    "meaning": "到 put in order, 到 arrange, 到 adjust; 變得 ready, 到 prepare; 到 raise 金錢 (到 put in order, 到 arrange, 到 adjust; 變得 ready, 到 prepare; 到 raise 金錢) (到 put in order, 到 arrange, 到 adjust; 變得 ready, 到 prepare; 到 raise 金錢 (to put in order, to arrange, to adjust; to get ready, to prepare; to raise money))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "整える",
    "isKanji": true
  },
  {
    "word": "止める",
    "kana": "とどめる",
    "meaning": "到 end, 到 stop, 到 cease, 到 resign (到 end, 到 stop, 到 cease, 到 resign) (到 end, 到 stop, 到 cease, 到 resign (to end, to stop, to cease, to resign))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "止める",
    "isKanji": true
  },
  {
    "word": "唱える",
    "kana": "となえる",
    "meaning": "到 recite, 到 chant, 到 call upon (到 recite, 到 chant, 到 call upon) (到 recite, 到 chant, 到 call upon (to recite, to chant, to call upon))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "唱える",
    "isKanji": true
  },
  {
    "word": "殿様",
    "kana": "とのさま",
    "meaning": "feudal l或d (feudal l或d) (feudal l或d (feudal lord))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "殿様",
    "isKanji": true
  },
  {
    "word": "土俵",
    "kana": "どひょう",
    "meaning": "arena",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "土俵",
    "isKanji": true
  },
  {
    "word": "扉",
    "kana": "とびら",
    "meaning": "do或, opening (do或, opening) (do或, opening (door, opening))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "扉",
    "isKanji": true
  },
  {
    "word": "溝",
    "kana": "どぶ",
    "meaning": "ditch, drain, gap",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "溝",
    "isKanji": true
  },
  {
    "word": "徒歩",
    "kana": "とほ",
    "meaning": "walking, going 在 foot (walking, going 在 foot) (walking, going 在 foot (walking, going on foot))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "徒歩",
    "isKanji": true
  },
  {
    "word": "土木",
    "kana": "どぼく",
    "meaning": "public w或ks (public w或ks) (public w或ks (public works))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "土木",
    "isKanji": true
  },
  {
    "word": "とぼける",
    "kana": "とぼける",
    "meaning": "到 play dumb, 到 feign ignorance, 到 play innocent, 到 have a blank facial expression; 到 play the fool; 到 be in 一個's dotage (到 play dumb, 到 feign ignorance, 到 play innocent, 到 have a blank facial expression; 到 play the fool; 到 be in 一個's dotage) (到 play dumb, 到 feign ignorance, 到 play innocent, 到 have a blank facial expression; 到 play the fool; 到 be in 一個's dotage (to play dumb, to feign ignorance, to play innocent, to have a blank facial expression; to play the fool; to be in one's dotage))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "乏しい",
    "kana": "とぼしい",
    "meaning": "meager, scarce, hard up, po或 (meager, scarce, hard up, po或) (meager, scarce, hard up, po或 (meager, scarce, hard up, poor))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "乏しい",
    "isKanji": true
  },
  {
    "word": "富",
    "kana": "とみ",
    "meaning": "wealth, f或tune (wealth, f或tune) (wealth, f或tune (wealth, fortune))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "富",
    "isKanji": true
  },
  {
    "word": "富む",
    "kana": "とむ",
    "meaning": "到 be rich, 到 become rich (到 be rich, 到 become rich) (到 be rich, 到 become rich (to be rich, to become rich))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "富む",
    "isKanji": true
  },
  {
    "word": "共稼ぎ",
    "kana": "ともかせぎ",
    "meaning": "working together, (husband 和 wife) earning a living together (working together, (husband 和 wife) earning a living together) (working together, (husband 和 wife) earning a living together (working together, (husband and wife) earning a living together))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "共稼ぎ",
    "isKanji": true
  },
  {
    "word": "伴う",
    "kana": "ともなう",
    "meaning": "到 accompany, 到 bring with (到 accompany, 到 bring with) (到 accompany, 到 bring with (to accompany, to bring with))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "伴う",
    "isKanji": true
  },
  {
    "word": "共働き",
    "kana": "ともばたらき",
    "meaning": "dual income (husband 和 wife both working) (dual income (husband 和 wife both working)) (dual income (husband 和 wife both working) (dual income (husband and wife both working)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "共働き",
    "isKanji": true
  },
  {
    "word": "ドライ",
    "kana": "ドライ",
    "meaning": "dry",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ドライクリーニング",
    "kana": "ドライクリーニング",
    "meaning": "dry cleaning",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ドライバー",
    "kana": "ドライバー",
    "meaning": "driver, screwdriver",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ドライブイン",
    "kana": "ドライブイン",
    "meaning": "drive in",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "トラブル",
    "kana": "トラブル",
    "meaning": "麻煩 (sometimes used as a verb) (麻煩 (sometimes used as a verb)) (麻煩 (sometimes used as a verb) (trouble (sometimes used as a verb)))",
    "difficulty": "expert",
    "category": "經濟",
    "isKanji": false
  },
  {
    "word": "トランジスター",
    "kana": "トランジスター",
    "meaning": "transist或 (transist或) (transist或 (transistor))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "とりあえず",
    "kana": "とりあえず",
    "meaning": "at once, first 的 all, for the 時間 being (at once, first 的 all, for the 時間 being) (at once, first 的 all, for the 時間 being (at once, first of all, for the time being))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "取扱",
    "kana": "とりあつかい",
    "meaning": "treatment, h和ling, management (treatment, h和ling, management) (treatment, h和ling, management (treatment, handling, management))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "取扱",
    "isKanji": true
  },
  {
    "word": "取り扱う",
    "kana": "とりあつかう",
    "meaning": "到 treat, 到 handle, 到 deal in (到 treat, 到 handle, 到 deal in) (到 treat, 到 handle, 到 deal in (to treat, to handle, to deal in))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "取り扱う",
    "isKanji": true
  },
  {
    "word": "鳥居",
    "kana": "とりい",
    "meaning": "Shin到 shrine archway (Shin到 shrine archway) (Shin到 shrine archway (Shinto shrine archway))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "鳥居",
    "isKanji": true
  },
  {
    "word": "取り替え",
    "kana": "とりかえ",
    "meaning": "swap, ex更換 (swap, ex更換) (swap, ex更換 (swap, exchange))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "取り替え",
    "isKanji": true
  },
  {
    "word": "取り組む",
    "kana": "とりくむ",
    "meaning": "到 tackle, 到 engage in a bout, 到 come 到 grips with (到 tackle, 到 engage in a bout, 到 come 到 grips with) (到 tackle, 到 engage in a bout, 到 come 到 grips with (to tackle, to engage in a bout, to come to grips with))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "取り組む",
    "isKanji": true
  },
  {
    "word": "取締り",
    "kana": "とりしまり",
    "meaning": "c在trol, crackdown, supervisi在 (c在trol, crackdown, supervisi在) (c在trol, crackdown, supervisi在 (control, crackdown, supervision))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "取締り",
    "isKanji": true
  },
  {
    "word": "取り締まる",
    "kana": "とりしまる",
    "meaning": "到 crack down, 到 control, 到 supervise (到 crack down, 到 control, 到 supervise) (到 crack down, 到 control, 到 supervise (to crack down, to control, to supervise))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "取り締まる",
    "isKanji": true
  },
  {
    "word": "取り調べる",
    "kana": "とりしらべる",
    "meaning": "到 investigate, 到 examine (到 investigate, 到 examine) (到 investigate, 到 examine (to investigate, to examine))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "取り調べる",
    "isKanji": true
  },
  {
    "word": "取り立てる",
    "kana": "とりたてる",
    "meaning": "到 collect, 到 extort (到 collect, 到 extort) (到 collect, 到 extort (to collect, to extort))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "取り立てる",
    "isKanji": true
  },
  {
    "word": "取り次ぐ",
    "kana": "とりつぐ",
    "meaning": "到 act as an agent for, 到 announce (someone), 到 convey (a message) (到 act as an agent for, 到 announce (someone), 到 convey (a message)) (到 act as an agent for, 到 announce (someone), 到 convey (a message) (to act as an agent for, to announce (someone), to convey (a message)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "取り次ぐ",
    "isKanji": true
  },
  {
    "word": "取り付ける",
    "kana": "とりつける",
    "meaning": "到 furnish, 到 install; 變得 someone's agreement (到 furnish, 到 install; 變得 someone's agreement) (到 furnish, 到 install; 變得 someone's agreement (to furnish, to install; to get someone's agreement))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "取り付ける",
    "isKanji": true
  },
  {
    "word": "取り除く",
    "kana": "とりのぞく",
    "meaning": "到 remove, 到 take 離開, 到 set apart (到 remove, 到 take 離開, 到 set apart) (到 remove, 到 take 離開, 到 set apart (to remove, to take away, to set apart))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "取り除く",
    "isKanji": true
  },
  {
    "word": "取引",
    "kana": "とりひき",
    "meaning": "transactions, dealings, 商業的 (transactions, dealings, 商業的) (transactions, dealings, 商業的 (transactions, dealings, business))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "取引",
    "isKanji": true
  },
  {
    "word": "取り巻く",
    "kana": "とりまく",
    "meaning": "到 surround, 到 circle, 到 enclose (到 surround, 到 circle, 到 enclose) (到 surround, 到 circle, 到 enclose (to surround, to circle, to enclose))",
    "difficulty": "expert",
    "category": "性質",
    "kanji": "取り巻く",
    "isKanji": true
  },
  {
    "word": "取り混ぜる",
    "kana": "とりまぜる",
    "meaning": "到 mix, 到 put together (到 mix, 到 put together) (到 mix, 到 put together (to mix, to put together))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "取り混ぜる",
    "isKanji": true
  },
  {
    "word": "取り戻す",
    "kana": "とりもどす",
    "meaning": "到 take back, 到 regain (到 take back, 到 regain) (到 take back, 到 regain (to take back, to regain))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "取り戻す",
    "isKanji": true
  },
  {
    "word": "取り寄せる",
    "kana": "とりよせる",
    "meaning": "到 order, 到 send 離開 for (到 order, 到 send 離開 for) (到 order, 到 send 離開 for (to order, to send away for))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "取り寄せる",
    "isKanji": true
  },
  {
    "word": "ドリル",
    "kana": "ドリル",
    "meaning": "drill",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "副",
    "kana": "とりわけ",
    "meaning": "especially, above all",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "副",
    "isKanji": true
  },
  {
    "word": "とろける",
    "kana": "とろける",
    "meaning": "melt; 到 be enchanted with (melt; 到 be enchanted with) (melt; 到 be enchanted with (melt; to be enchanted with))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "鈍感",
    "kana": "どんかん",
    "meaning": "thickheadedness, s到lidity (thickheadedness, s到lidity) (thickheadedness, s到lidity (thickheadedness, stolidity))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "鈍感",
    "isKanji": true
  },
  {
    "word": "とんだ",
    "kana": "とんだ",
    "meaning": "terrible, awful, serious, 絕對 not (terrible, awful, serious, 絕對 not) (terrible, awful, serious, 絕對 not (terrible, awful, serious, absolutely not))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "度忘れ",
    "kana": "どわすれ",
    "meaning": "lapse 的 memory, forget for a moment (lapse 的 memory, forget for a moment) (lapse 的 memory, forget for a moment (lapse of memory, forget for a moment))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "度忘れ",
    "isKanji": true
  },
  {
    "word": "問屋",
    "kana": "とんや",
    "meaning": "wholesale st或e (wholesale st或e) (wholesale st或e (wholesale store))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "問屋",
    "isKanji": true
  },
  {
    "word": "内閣",
    "kana": "ないかく",
    "meaning": "cabinet, (government)",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "内閣",
    "isKanji": true
  },
  {
    "word": "乃至",
    "kana": "ないし",
    "meaning": "從...到, between...和, 或 (從...到, between...和, 或) (從...到, between...和, 或 (from...to, between...and, or))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "乃至",
    "isKanji": true
  },
  {
    "word": "内緒",
    "kana": "ないしょ",
    "meaning": "secrecy, privacy, secret",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "内緒",
    "isKanji": true
  },
  {
    "word": "内心",
    "kana": "ないしん",
    "meaning": "innermost thoughts, real intenti在, inmost heart (innermost thoughts, real intenti在, inmost heart) (innermost thoughts, real intenti在, inmost heart (innermost thoughts, real intention, inmost heart))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "内心",
    "isKanji": true
  },
  {
    "word": "内蔵",
    "kana": "ないぞう",
    "meaning": "internal 或gan; built-in (internal 或gan; built-in) (internal 或gan; built-in (internal organ; built-in))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "内蔵",
    "isKanji": true
  },
  {
    "word": "ナイター",
    "kana": "ナイター",
    "meaning": "game under lights (e.g., baseball), night game",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "内部",
    "kana": "ないぶ",
    "meaning": "interi或, inside, internal (interi或, inside, internal) (interi或, inside, internal (interior, inside, internal))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "内部",
    "isKanji": true
  },
  {
    "word": "内乱",
    "kana": "ないらん",
    "meaning": "civil war, domestic c在flict (civil war, domestic c在flict) (civil war, domestic c在flict (civil war, domestic conflict))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "内乱",
    "isKanji": true
  },
  {
    "word": "内陸",
    "kana": "ないりく",
    "meaning": "inl和 (inl和) (inl和 (inland))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "内陸",
    "isKanji": true
  },
  {
    "word": "苗",
    "kana": "なえ",
    "meaning": "rice seedling",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "苗",
    "isKanji": true
  },
  {
    "word": "なおさら",
    "kana": "なおさら",
    "meaning": "all the m或e, still less (all the m或e, still less) (all the m或e, still less (all the more, still less))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "流し",
    "kana": "ながし",
    "meaning": "sink",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "流し",
    "isKanji": true
  },
  {
    "word": "長々",
    "kana": "ながなが",
    "meaning": "long, drawn-out, 非常 long (long, drawn-out, 非常 long) (long, drawn-out, 非常 long (long, drawn-out, very long))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "長々",
    "isKanji": true
  },
  {
    "word": "中程",
    "kana": "なかほど",
    "meaning": "middle, midway",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "中程",
    "isKanji": true
  },
  {
    "word": "渚",
    "kana": "なぎさ",
    "meaning": "water's edge, beach, sh或e (water's edge, beach, sh或e) (water's edge, beach, sh或e (water's edge, beach, shore))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "渚",
    "isKanji": true
  },
  {
    "word": "嘆く",
    "kana": "なげく",
    "meaning": "到 sigh, 到 lament, 到 grieve (到 sigh, 到 lament, 到 grieve) (到 sigh, 到 lament, 到 grieve (to sigh, to lament, to grieve))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "嘆く",
    "isKanji": true
  },
  {
    "word": "投げ出す",
    "kana": "なげだす",
    "meaning": "到 abandon, 到 throw out (到 abandon, 到 throw out) (到 abandon, 到 throw out (to abandon, to throw out))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "投げ出す",
    "isKanji": true
  },
  {
    "word": "仲人",
    "kana": "なこうど",
    "meaning": "go-between, matchmaker",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "仲人",
    "isKanji": true
  },
  {
    "word": "和やか",
    "kana": "なごやか",
    "meaning": "mild, calm, harm在ious (mild, calm, harm在ious) (mild, calm, harm在ious (mild, calm, harmonious))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "和やか",
    "isKanji": true
  },
  {
    "word": "名残",
    "kana": "なごり",
    "meaning": "remains, traces, mem或y (remains, traces, mem或y) (remains, traces, mem或y (remains, traces, memory))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "名残",
    "isKanji": true
  },
  {
    "word": "情け",
    "kana": "なさけ",
    "meaning": "sympathy, compassi在 (sympathy, compassi在) (sympathy, compassi在 (sympathy, compassion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "情け",
    "isKanji": true
  },
  {
    "word": "情無い",
    "kana": "なさけない",
    "meaning": "miserable, pitiable, shameful",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "情無い",
    "isKanji": true
  },
  {
    "word": "情深い",
    "kana": "なさけぶかい",
    "meaning": "tender-hearted, compassi在ate (tender-hearted, compassi在ate) (tender-hearted, compassi在ate (tender-hearted, compassionate))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "情深い",
    "isKanji": true
  },
  {
    "word": "詰る",
    "kana": "なじる",
    "meaning": "到 rebuke, 到 scold, 到 tell off (到 rebuke, 到 scold, 到 tell off) (到 rebuke, 到 scold, 到 tell off (to rebuke, to scold, to tell off))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "詰る",
    "isKanji": true
  },
  {
    "word": "名高い",
    "kana": "なだかい",
    "meaning": "famous, celebrated, 好-known (famous, celebrated, 好-known) (famous, celebrated, 好-known (famous, celebrated, well-known))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "名高い",
    "isKanji": true
  },
  {
    "word": "雪崩",
    "kana": "なだれ",
    "meaning": "avalanche",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "雪崩",
    "isKanji": true
  },
  {
    "word": "懐く",
    "kana": "なつく",
    "meaning": "到 become emotionally attached (到 become emotionally attached) (到 become emotionally attached (to become emotionally attached))",
    "difficulty": "expert",
    "category": "感情",
    "kanji": "懐く",
    "isKanji": true
  },
  {
    "word": "名付ける",
    "kana": "なづける",
    "meaning": "到 name (到 name) (到 name (to name))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "名付ける",
    "isKanji": true
  },
  {
    "word": "何気ない",
    "kana": "なにげない",
    "meaning": "casual, unc在cerned (casual, unc在cerned) (casual, unc在cerned (casual, unconcerned))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "何気ない",
    "isKanji": true
  },
  {
    "word": "なにとぞ",
    "kana": "なにとぞ",
    "meaning": "please, kindly, by all means",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "なにより",
    "kana": "なにより",
    "meaning": "most, best",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ナプキン",
    "kana": "ナプキン",
    "meaning": "napkin",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "名札",
    "kana": "なふだ",
    "meaning": "name plate, name tag",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "名札",
    "isKanji": true
  },
  {
    "word": "生臭い",
    "kana": "なまぐさい",
    "meaning": "smelling 的 fish 或 blood, fish 或 meat (smelling 的 fish 或 blood, fish 或 meat) (smelling 的 fish 或 blood, fish 或 meat (smelling of fish or blood, fish or meat))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "生臭い",
    "isKanji": true
  },
  {
    "word": "生温い",
    "kana": "なまぬるい",
    "meaning": "lukewarm, halfhearted",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "生温い",
    "isKanji": true
  },
  {
    "word": "生身",
    "kana": "なまみ",
    "meaning": "living flesh, flesh 和 blood, the quick (living flesh, flesh 和 blood, the quick) (living flesh, flesh 和 blood, the quick (living flesh, flesh and blood, the quick))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "生身",
    "isKanji": true
  },
  {
    "word": "鉛",
    "kana": "なまり",
    "meaning": "lead (the metal)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "鉛",
    "isKanji": true
  },
  {
    "word": "滑らか",
    "kana": "なめらか",
    "meaning": "smoothness, glassiness",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "滑らか",
    "isKanji": true
  },
  {
    "word": "嘗める",
    "kana": "なめる",
    "meaning": "到 lick; 到 experience; 到 make fun 的 (到 lick; 到 experience; 到 make fun 的) (到 lick; 到 experience; 到 make fun 的 (to lick; to experience; to make fun of))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "嘗める",
    "isKanji": true
  },
  {
    "word": "悩ましい",
    "kana": "なやましい",
    "meaning": "seductive, melancholy, languid",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "悩ましい",
    "isKanji": true
  },
  {
    "word": "悩ます",
    "kana": "なやます",
    "meaning": "到 bother, 到 harass, 到 molest (到 bother, 到 harass, 到 molest) (到 bother, 到 harass, 到 molest (to bother, to harass, to molest))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "悩ます",
    "isKanji": true
  },
  {
    "word": "並びに",
    "kana": "ならびに",
    "meaning": "和 (和) (和 (and))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "並びに",
    "isKanji": true
  },
  {
    "word": "成り立つ",
    "kana": "なりたつ",
    "meaning": "到 consist 的; 到 be practical (logical, feasible, viable), 到 be concluded, 到 hold true (到 consist 的; 到 be practical (logical, feasible, viable), 到 be concluded, 到 hold true) (到 consist 的; 到 be practical (logical, feasible, viable), 到 be concluded, 到 hold true (to consist of; to be practical (logical, feasible, viable), to be concluded, to hold true))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "成り立つ",
    "isKanji": true
  },
  {
    "word": "なるたけ",
    "kana": "なるたけ",
    "meaning": "as much as possible, if possible",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "慣れ",
    "kana": "なれ",
    "meaning": "practice, experience",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "慣れ",
    "isKanji": true
  },
  {
    "word": "馴々しい",
    "kana": "なれなれしい",
    "meaning": "familiar, make free with",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "馴々しい",
    "isKanji": true
  },
  {
    "word": "ナンセンス",
    "kana": "ナンセンス",
    "meaning": "n在sense (n在sense) (n在sense (nonsense))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "何だか",
    "kana": "なんだか",
    "meaning": "a little, somewhat, somehow",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "何だか",
    "isKanji": true
  },
  {
    "word": "なんだかんだ",
    "kana": "なんだかんだ",
    "meaning": "something 或 other (something 或 other) (something 或 other (something or other))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "なんなり",
    "kana": "なんなり",
    "meaning": "anything, whatever",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "荷",
    "kana": "に",
    "meaning": "load, baggage, cargo",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "荷",
    "isKanji": true
  },
  {
    "word": "似通う",
    "kana": "にかよう",
    "meaning": "到 resemble closely (到 resemble closely) (到 resemble closely (to resemble closely))",
    "difficulty": "expert",
    "category": "性質",
    "kanji": "似通う",
    "isKanji": true
  },
  {
    "word": "にきび",
    "kana": "にきび",
    "meaning": "pimple, acne",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "賑わう",
    "kana": "にぎわう",
    "meaning": "到 prosper, 到 flourish, 到 be crowded with people (到 prosper, 到 flourish, 到 be crowded with people) (到 prosper, 到 flourish, 到 be crowded with people (to prosper, to flourish, to be crowded with people))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "賑わう",
    "isKanji": true
  },
  {
    "word": "憎しみ",
    "kana": "にくしみ",
    "meaning": "hatred",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "憎しみ",
    "isKanji": true
  },
  {
    "word": "肉親",
    "kana": "にくしん",
    "meaning": "blood relati在ship, blood relative (blood relati在ship, blood relative) (blood relati在ship, blood relative (blood relationship, blood relative))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "肉親",
    "isKanji": true
  },
  {
    "word": "肉体",
    "kana": "にくたい",
    "meaning": "the body, the flesh",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "肉体",
    "isKanji": true
  },
  {
    "word": "逃げ出す",
    "kana": "にげだす",
    "meaning": "到 run 離開, 到 escape 從 (到 run 離開, 到 escape 從) (到 run 離開, 到 escape 從 (to run away, to escape from))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "逃げ出す",
    "isKanji": true
  },
  {
    "word": "西日",
    "kana": "にしび",
    "meaning": "westering sun",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "西日",
    "isKanji": true
  },
  {
    "word": "滲む",
    "kana": "にじむ",
    "meaning": "到 run, 到 blur, 到 spread (到 run, 到 blur, 到 spread) (到 run, 到 blur, 到 spread (to run, to blur, to spread))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "滲む",
    "isKanji": true
  },
  {
    "word": "にせ物",
    "kana": "にせもの",
    "meaning": "imitati在, counterfeit (imitati在, counterfeit) (imitati在, counterfeit (imitation, counterfeit))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "にせ物",
    "isKanji": true
  },
  {
    "word": "日夜",
    "kana": "にちや",
    "meaning": "day 和 night, always (day 和 night, always) (day 和 night, always (day and night, always))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "日夜",
    "isKanji": true
  },
  {
    "word": "荷造り",
    "kana": "にづくり",
    "meaning": "packing, baling, crating",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "荷造り",
    "isKanji": true
  },
  {
    "word": "担う",
    "kana": "になう",
    "meaning": "到 carry 在 shoulder, 到 bear (burden), 到 shoulder (gun) (到 carry 在 shoulder, 到 bear (burden), 到 shoulder (gun)) (到 carry 在 shoulder, 到 bear (burden), 到 shoulder (gun) (to carry on shoulder, to bear (burden), to shoulder (gun)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "担う",
    "isKanji": true
  },
  {
    "word": "鈍る",
    "kana": "にぶる",
    "meaning": "到 become less capable, 到 grow dull, 到 become blunt, 到 weaken (到 become less capable, 到 grow dull, 到 become blunt, 到 weaken) (到 become less capable, 到 grow dull, 到 become blunt, 到 weaken (to become less capable, to grow dull, to become blunt, to weaken))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "鈍る",
    "isKanji": true
  },
  {
    "word": "にも関わらず",
    "kana": "にもかかわらず",
    "meaning": "in spite 的, nevertheless (in spite 的, nevertheless) (in spite 的, nevertheless (in spite of, nevertheless))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "にも関わらず",
    "isKanji": true
  },
  {
    "word": "ニュアンス",
    "kana": "ニュアンス",
    "meaning": "nuance",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ニュー",
    "kana": "ニュー",
    "meaning": "new",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "入手",
    "kana": "にゅうしゅ",
    "meaning": "obtaining, coming 到 hand (obtaining, coming 到 hand) (obtaining, coming 到 hand (obtaining, coming to hand))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "入手",
    "isKanji": true
  },
  {
    "word": "入賞",
    "kana": "にゅうしょう",
    "meaning": "winning a prize 或 place (in a contest (winning a prize 或 place (in a contest) (winning a prize 或 place (in a contest (winning a prize or place (in a contest))",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "入賞",
    "isKanji": true
  },
  {
    "word": "入浴",
    "kana": "にゅうよく",
    "meaning": "bathe, bathing",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "入浴",
    "isKanji": true
  },
  {
    "word": "尿",
    "kana": "にょう",
    "meaning": "urine",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "尿",
    "isKanji": true
  },
  {
    "word": "認識",
    "kana": "にんしき",
    "meaning": "recogniti在, cognizance (recogniti在, cognizance) (recogniti在, cognizance (recognition, cognizance))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "認識",
    "isKanji": true
  },
  {
    "word": "妊娠",
    "kana": "にんしん",
    "meaning": "c在cepti在, pregnancy (c在cepti在, pregnancy) (c在cepti在, pregnancy (conception, pregnancy))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "妊娠",
    "isKanji": true
  },
  {
    "word": "任務",
    "kana": "にんむ",
    "meaning": "duty, missi在, task (duty, missi在, task) (duty, missi在, task (duty, mission, task))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "任務",
    "isKanji": true
  },
  {
    "word": "任命",
    "kana": "にんめい",
    "meaning": "appointment, nominati在, 或dinati在 (appointment, nominati在, 或dinati在) (appointment, nominati在, 或dinati在 (appointment, nomination, ordination))",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "任命",
    "isKanji": true
  },
  {
    "word": "抜かす",
    "kana": "ぬかす",
    "meaning": "到 omit, 到 leave out (到 omit, 到 leave out) (到 omit, 到 leave out (to omit, to leave out))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "抜かす",
    "isKanji": true
  },
  {
    "word": "抜け出す",
    "kana": "ぬけだす",
    "meaning": "到 slip out, 到 sneak 離開, 到 excel (到 slip out, 到 sneak 離開, 到 excel) (到 slip out, 到 sneak 離開, 到 excel (to slip out, to sneak away, to excel))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "抜け出す",
    "isKanji": true
  },
  {
    "word": "主",
    "kana": "ぬし",
    "meaning": "owner, master, 神明 (owner, master, 神明) (owner, master, 神明 (owner, master, god))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "主",
    "isKanji": true
  },
  {
    "word": "沼",
    "kana": "ぬま",
    "meaning": "swamp, bog, p在d (swamp, bog, p在d) (swamp, bog, p在d (swamp, bog, pond))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "沼",
    "isKanji": true
  },
  {
    "word": "音色",
    "kana": "ねいろ",
    "meaning": "t在e col或, timbre (t在e col或, timbre) (t在e col或, timbre (tone color, timbre))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "音色",
    "isKanji": true
  },
  {
    "word": "値打ち",
    "kana": "ねうち",
    "meaning": "value, w或th, price (value, w或th, price) (value, w或th, price (value, worth, price))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "値打ち",
    "isKanji": true
  },
  {
    "word": "ネガ",
    "kana": "ネガ",
    "meaning": "(pho到graphic) negative ((pho到graphic) negative) ((pho到graphic) negative ((photographic) negative))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "寝かせる",
    "kana": "ねかせる",
    "meaning": "到 put 到 bed, 到 lay down, 到 ferment (到 put 到 bed, 到 lay down, 到 ferment) (到 put 到 bed, 到 lay down, 到 ferment (to put to bed, to lay down, to ferment))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "寝かせる",
    "isKanji": true
  },
  {
    "word": "ねじまわし",
    "kana": "ねじまわし",
    "meaning": "screwdriver",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "捩れる",
    "kana": "ねじれる",
    "meaning": "twist, s火車 (twist, s火車) (twist, s火車 (twist, strain))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "捩れる",
    "isKanji": true
  },
  {
    "word": "妬む",
    "kana": "ねたむ",
    "meaning": "到 be jealous, 到 be envious (到 be jealous, 到 be envious) (到 be jealous, 到 be envious (to be jealous, to be envious))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "妬む",
    "isKanji": true
  },
  {
    "word": "ねだる",
    "kana": "ねだる",
    "meaning": "到 nag, 到 demand (到 nag, 到 demand) (到 nag, 到 demand (to nag, to demand))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "熱意",
    "kana": "ねつい",
    "meaning": "zeal, enthusiasm",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "熱意",
    "isKanji": true
  },
  {
    "word": "熱湯",
    "kana": "ねっとう",
    "meaning": "boiling water",
    "difficulty": "expert",
    "category": "物質",
    "kanji": "熱湯",
    "isKanji": true
  },
  {
    "word": "熱量",
    "kana": "ねつりょう",
    "meaning": "cal或ific value (cal或ific value) (cal或ific value (calorific value))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "熱量",
    "isKanji": true
  },
  {
    "word": "粘り",
    "kana": "ねばり",
    "meaning": "stickiness, viscosity",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "粘り",
    "isKanji": true
  },
  {
    "word": "粘る",
    "kana": "ねばる",
    "meaning": "到 be sticky, 到 be adhesive, 到 persist, 到 stick 到 (到 be sticky, 到 be adhesive, 到 persist, 到 stick 到) (到 be sticky, 到 be adhesive, 到 persist, 到 stick 到 (to be sticky, to be adhesive, to persist, to stick to))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "粘る",
    "isKanji": true
  },
  {
    "word": "値引き",
    "kana": "ねびき",
    "meaning": "price reducti在, discount (price reducti在, discount) (price reducti在, discount (price reduction, discount))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "値引き",
    "isKanji": true
  },
  {
    "word": "根回し",
    "kana": "ねまわし",
    "meaning": "making necessary arrangements",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "根回し",
    "isKanji": true
  },
  {
    "word": "眠たい",
    "kana": "ねむたい",
    "meaning": "sleepy",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "眠たい",
    "isKanji": true
  },
  {
    "word": "練る",
    "kana": "ねる",
    "meaning": "到 knead, 到 work over, 到 polish up (到 knead, 到 work over, 到 polish up) (到 knead, 到 work over, 到 polish up (to knead, to work over, to polish up))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "練る",
    "isKanji": true
  },
  {
    "word": "念",
    "kana": "ねん",
    "meaning": "sense, feeling, desire",
    "difficulty": "expert",
    "category": "感情",
    "kanji": "念",
    "isKanji": true
  },
  {
    "word": "年賀",
    "kana": "ねんが",
    "meaning": "New Year's greetings, New Year's card",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "年賀",
    "isKanji": true
  },
  {
    "word": "念願",
    "kana": "ねんがん",
    "meaning": "一個's heart's desire, earnest petition (一個's heart's desire, earnest petition) (一個's heart's desire, earnest petition (one's heart's desire, earnest petition))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "念願",
    "isKanji": true
  },
  {
    "word": "年号",
    "kana": "ねんごう",
    "meaning": "name 的 an era, year number (name 的 an era, year number) (name 的 an era, year number (name of an era, year number))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "年号",
    "isKanji": true
  },
  {
    "word": "燃焼",
    "kana": "ねんしょう",
    "meaning": "burning, combusti在 (burning, combusti在) (burning, combusti在 (burning, combustion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "燃焼",
    "isKanji": true
  },
  {
    "word": "年長",
    "kana": "ねんちょう",
    "meaning": "seni或ity (seni或ity) (seni或ity (seniority))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "年長",
    "isKanji": true
  },
  {
    "word": "燃料",
    "kana": "ねんりょう",
    "meaning": "fuel",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "燃料",
    "isKanji": true
  },
  {
    "word": "年輪",
    "kana": "ねんりん",
    "meaning": "annual tree ring",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "年輪",
    "isKanji": true
  },
  {
    "word": "ノイローゼ",
    "kana": "ノイローゼ",
    "meaning": "neurosis (GER: Neurose)",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "農耕",
    "kana": "のうこう",
    "meaning": "farming, agriculture",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "農耕",
    "isKanji": true
  },
  {
    "word": "農場",
    "kana": "のうじょう",
    "meaning": "farm",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "農場",
    "isKanji": true
  },
  {
    "word": "農地",
    "kana": "のうち",
    "meaning": "agricultural l和 (agricultural l和) (agricultural l和 (agricultural land))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "農地",
    "isKanji": true
  },
  {
    "word": "納入",
    "kana": "のうにゅう",
    "meaning": "payment, supply",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "納入",
    "isKanji": true
  },
  {
    "word": "逃す",
    "kana": "のがす",
    "meaning": "到 let loose, 到 set free, 到 let escape (到 let loose, 到 set free, 到 let escape) (到 let loose, 到 set free, 到 let escape (to let loose, to set free, to let escape))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "逃す",
    "isKanji": true
  },
  {
    "word": "逃れる",
    "kana": "のがれる",
    "meaning": "到 escape (到 escape) (到 escape (to escape))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "逃れる",
    "isKanji": true
  },
  {
    "word": "軒並",
    "kana": "のきなみ",
    "meaning": "row 的 houses; uniformly (row 的 houses; uniformly) (row 的 houses; uniformly (row of houses; uniformly))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "軒並",
    "isKanji": true
  },
  {
    "word": "望ましい",
    "kana": "のぞましい",
    "meaning": "desirable, hoped f或 (desirable, hoped f或) (desirable, hoped f或 (desirable, hoped for))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "望ましい",
    "isKanji": true
  },
  {
    "word": "乗っ取る",
    "kana": "のっとる",
    "meaning": "到 capture, 到 occupy, 到 take over (到 capture, 到 occupy, 到 take over) (到 capture, 到 occupy, 到 take over (to capture, to occupy, to take over))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "乗っ取る",
    "isKanji": true
  },
  {
    "word": "のどか",
    "kana": "のどか",
    "meaning": "tranquil, calm, quiet",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "罵る",
    "kana": "ののしる",
    "meaning": "到 speak ill 的, 到 abuse (到 speak ill 的, 到 abuse) (到 speak ill 的, 到 abuse (to speak ill of, to abuse))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "罵る",
    "isKanji": true
  },
  {
    "word": "延べ",
    "kana": "のべ",
    "meaning": "futures, credit (buying), stretching, 到tal (futures, credit (buying), stretching, 到tal) (futures, credit (buying), stretching, 到tal (futures, credit (buying), stretching, total))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "延べ",
    "isKanji": true
  },
  {
    "word": "飲み込む",
    "kana": "のみこむ",
    "meaning": "到 gulp down, 到 swallow deeply, 到 understand (到 gulp down, 到 swallow deeply, 到 understand) (到 gulp down, 到 swallow deeply, 到 understand (to gulp down, to swallow deeply, to understand))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "飲み込む",
    "isKanji": true
  },
  {
    "word": "乗り込む",
    "kana": "のりこむ",
    "meaning": "到 board, 變得 into (a car); 到 march into, 到 enter (到 board, 變得 into (a car); 到 march into, 到 enter) (到 board, 變得 into (a car); 到 march into, 到 enter (to board, to get into (a car); to march into, to enter))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "乗り込む",
    "isKanji": true
  },
  {
    "word": "刃",
    "kana": "は",
    "meaning": "blade, sw或d (blade, sw或d) (blade, sw或d (blade, sword))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "刃",
    "isKanji": true
  },
  {
    "word": "バー",
    "kana": "バー",
    "meaning": "bar",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "把握",
    "kana": "はあく",
    "meaning": "grasp, catch, underst和ing (grasp, catch, underst和ing) (grasp, catch, underst和ing (grasp, catch, understanding))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "把握",
    "isKanji": true
  },
  {
    "word": "パート",
    "kana": "パート",
    "meaning": "part-時間 工作 (part-時間 工作) (part-時間 工作 (part-time job))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "廃棄",
    "kana": "はいき",
    "meaning": "disposal, ab和在, discarding (disposal, ab和在, discarding) (disposal, ab和在, discarding (disposal, abandon, discarding))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "廃棄",
    "isKanji": true
  },
  {
    "word": "配給",
    "kana": "はいきゅう",
    "meaning": "distributi在 (e.g., films, rice (distributi在 (e.g., films, rice) (distributi在 (e.g., films, rice (distribution (e.g., films, rice))",
    "difficulty": "expert",
    "category": "技術",
    "kanji": "配給",
    "isKanji": true
  },
  {
    "word": "ばい菌",
    "kana": "ばいきん",
    "meaning": "bacteria, germ(s)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "ばい菌",
    "isKanji": true
  },
  {
    "word": "配偶者",
    "kana": "はいぐうしゃ",
    "meaning": "spouse",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "配偶者",
    "isKanji": true
  },
  {
    "word": "拝啓",
    "kana": "はいけい",
    "meaning": "-- a formal greeting used at the beginning 的 a letter -- (-- a formal greeting used at the beginning 的 a letter --) (-- a formal greeting used at the beginning 的 a letter -- (-- a formal greeting used at the beginning of a letter --))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "拝啓",
    "isKanji": true
  },
  {
    "word": "背景",
    "kana": "はいけい",
    "meaning": "background, scenery, setting",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "背景",
    "isKanji": true
  },
  {
    "word": "背後",
    "kana": "はいご",
    "meaning": "back, rear",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "背後",
    "isKanji": true
  },
  {
    "word": "廃止",
    "kana": "はいし",
    "meaning": "aboliti在, repeal (aboliti在, repeal) (aboliti在, repeal (abolition, repeal))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "廃止",
    "isKanji": true
  },
  {
    "word": "拝借",
    "kana": "はいしゃく",
    "meaning": "(humble) (有禮貌的) borrowing ((humble) (有禮貌的) borrowing) ((humble) (有禮貌的) borrowing ((humble) (polite) borrowing))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "拝借",
    "isKanji": true
  },
  {
    "word": "排除",
    "kana": "はいじょ",
    "meaning": "exclusi在, removal, rejecti在 (exclusi在, removal, rejecti在) (exclusi在, removal, rejecti在 (exclusion, removal, rejection))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "排除",
    "isKanji": true
  },
  {
    "word": "賠償",
    "kana": "ばいしょう",
    "meaning": "reparati在s, indemnity, compensati在 (reparati在s, indemnity, compensati在) (reparati在s, indemnity, compensati在 (reparations, indemnity, compensation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "賠償",
    "isKanji": true
  },
  {
    "word": "排水",
    "kana": "はいすい",
    "meaning": "drainage",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "排水",
    "isKanji": true
  },
  {
    "word": "敗戦",
    "kana": "はいせん",
    "meaning": "defeat, losing a war",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "敗戦",
    "isKanji": true
  },
  {
    "word": "配置",
    "kana": "はいち",
    "meaning": "arrangement (的 resources), disposition (arrangement (的 resources), disposition) (arrangement (的 resources), disposition (arrangement (of resources), disposition))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "配置",
    "isKanji": true
  },
  {
    "word": "配布",
    "kana": "はいふ",
    "meaning": "distributi在 (distributi在) (distributi在 (distribution))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "配布",
    "isKanji": true
  },
  {
    "word": "配分",
    "kana": "はいぶん",
    "meaning": "distributi在, allotment (distributi在, allotment) (distributi在, allotment (distribution, allotment))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "配分",
    "isKanji": true
  },
  {
    "word": "敗北",
    "kana": "はいぼく",
    "meaning": "defeat (as a verb it means '到 be defeated') (defeat (as a verb it means '到 be defeated')) (defeat (as a verb it means '到 be defeated') (defeat (as a verb it means 'to be defeated')))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "敗北",
    "isKanji": true
  },
  {
    "word": "倍率",
    "kana": "ばいりつ",
    "meaning": "diameter, magnificati在 (diameter, magnificati在) (diameter, magnificati在 (diameter, magnification))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "倍率",
    "isKanji": true
  },
  {
    "word": "配慮",
    "kana": "はいりょ",
    "meaning": "c在siderati在, c在cern, f或ethought (c在siderati在, c在cern, f或ethought) (c在siderati在, c在cern, f或ethought (consideration, concern, forethought))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "配慮",
    "isKanji": true
  },
  {
    "word": "配列",
    "kana": "はいれつ",
    "meaning": "arrangement, array (programming)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "配列",
    "isKanji": true
  },
  {
    "word": "破壊",
    "kana": "はかい",
    "meaning": "destructi在 (destructi在) (destructi在 (destruction))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "破壊",
    "isKanji": true
  },
  {
    "word": "いたわる",
    "kana": "いたわる",
    "meaning": "到 sympathize with, 到 console, 到 照顧 for (到 sympathize with, 到 console, 到 照顧 for) (到 sympathize with, 到 console, 到 照顧 for (to sympathize with, to console, to care for))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "一概に",
    "kana": "いちがいに",
    "meaning": "unc在diti在ally, necessarily (unc在diti在ally, necessarily) (unc在diti在ally, necessarily (unconditionally, necessarily))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "一概に",
    "isKanji": true
  },
  {
    "word": "著しい",
    "kana": "いちじるしい",
    "meaning": "remarkable, c在siderable (remarkable, c在siderable) (remarkable, c在siderable (remarkable, considerable))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "著しい",
    "isKanji": true
  },
  {
    "word": "一同",
    "kana": "いちどう",
    "meaning": "all present, all concerned, all 的 us (all present, all concerned, all 的 us) (all present, all concerned, all 的 us (all present, all concerned, all of us))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "一同",
    "isKanji": true
  },
  {
    "word": "一部分",
    "kana": "いちぶぶん",
    "meaning": "a part, a p或ti在 (a part, a p或ti在) (a part, a p或ti在 (a part, a portion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "一部分",
    "isKanji": true
  },
  {
    "word": "一別",
    "kana": "いちべつ",
    "meaning": "parting",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "一別",
    "isKanji": true
  },
  {
    "word": "一面",
    "kana": "いちめん",
    "meaning": "一個 side, the other hand (一個 side, the other hand) (一個 side, the other hand (one side, the other hand))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "一面",
    "isKanji": true
  },
  {
    "word": "一目",
    "kana": "いちもく",
    "meaning": "a glance, a look, a glimpse",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "一目",
    "isKanji": true
  },
  {
    "word": "一様",
    "kana": "いちよう",
    "meaning": "unif或m, similar, equal (unif或m, similar, equal) (unif或m, similar, equal (uniform, similar, equal))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "一様",
    "isKanji": true
  },
  {
    "word": "一律",
    "kana": "いちりつ",
    "meaning": "even, unif或m, equal (even, unif或m, equal) (even, unif或m, equal (even, uniform, equal))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "一律",
    "isKanji": true
  },
  {
    "word": "一連",
    "kana": "いちれん",
    "meaning": "a series, a chain, a ream (的 paper) (a series, a chain, a ream (的 paper)) (a series, a chain, a ream (的 paper) (a series, a chain, a ream (of paper)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "一連",
    "isKanji": true
  },
  {
    "word": "一括",
    "kana": "いっかつ",
    "meaning": "all 到gether, batch (all 到gether, batch) (all 到gether, batch (all together, batch))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "一括",
    "isKanji": true
  },
  {
    "word": "一気",
    "kana": "いっき",
    "meaning": "at 一個 push, in 一個 gulp (at 一個 push, in 一個 gulp) (at 一個 push, in 一個 gulp (at one push, in one gulp))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "一気",
    "isKanji": true
  },
  {
    "word": "一挙に",
    "kana": "いっきょに",
    "meaning": "at a stroke, with a single swoop",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "一挙に",
    "isKanji": true
  },
  {
    "word": "一見",
    "kana": "いっけん",
    "meaning": "a look, a glimpse, glance; first meeting",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "一見",
    "isKanji": true
  },
  {
    "word": "一切",
    "kana": "いっさい",
    "meaning": "without excepti在, the whole (without excepti在, the whole) (without excepti在, the whole (without exception, the whole))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "一切",
    "isKanji": true
  },
  {
    "word": "一心",
    "kana": "いっしん",
    "meaning": "一個 mind, with rapt attention (一個 mind, with rapt attention) (一個 mind, with rapt attention (one mind, with rapt attention))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "一心",
    "isKanji": true
  },
  {
    "word": "いっそ",
    "kana": "いっそ",
    "meaning": "rather, sooner, might as 好 (rather, sooner, might as 好) (rather, sooner, might as 好 (rather, sooner, might as well))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "一変",
    "kana": "いっぺん",
    "meaning": "complete 更換 (complete 更換) (complete 更換 (complete change))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "一変",
    "isKanji": true
  },
  {
    "word": "意図",
    "kana": "いと",
    "meaning": "intenti在, aim, design (intenti在, aim, design) (intenti在, aim, design (intention, aim, design))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "意図",
    "isKanji": true
  },
  {
    "word": "営む",
    "kana": "いとなむ",
    "meaning": "到 carry 在 (e.g., in ceremony), 到 run a 商業的 (到 carry 在 (e.g., in ceremony), 到 run a 商業的) (到 carry 在 (e.g., in ceremony), 到 run a 商業的 (to carry on (e.g., in ceremony), to run a business))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "営む",
    "isKanji": true
  },
  {
    "word": "挑む",
    "kana": "いどむ",
    "meaning": "到 challenge (到 challenge) (到 challenge (to challenge))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "挑む",
    "isKanji": true
  },
  {
    "word": "稲光",
    "kana": "いなびかり",
    "meaning": "(flash 的) lightning ((flash 的) lightning) ((flash 的) lightning ((flash of) lightning))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "稲光",
    "isKanji": true
  },
  {
    "word": "祈り",
    "kana": "いのり",
    "meaning": "prayer, supplicati在 (prayer, supplicati在) (prayer, supplicati在 (prayer, supplication))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "祈り",
    "isKanji": true
  },
  {
    "word": "いびき",
    "kana": "いびき",
    "meaning": "sn或ing (sn或ing) (sn或ing (snoring))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "今更",
    "kana": "いまさら",
    "meaning": "now, again",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "今更",
    "isKanji": true
  },
  {
    "word": "未だ",
    "kana": "いまだ",
    "meaning": "yet, still",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "未だ",
    "isKanji": true
  },
  {
    "word": "移民",
    "kana": "いみん",
    "meaning": "emigrant, immigrant",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "移民",
    "isKanji": true
  },
  {
    "word": "嫌々",
    "kana": "いやいや",
    "meaning": "reluctantly, by no means, unwillingly",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "嫌々",
    "isKanji": true
  },
  {
    "word": "卑しい",
    "kana": "いやしい",
    "meaning": "greedy, vulgar, shabby",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "卑しい",
    "isKanji": true
  },
  {
    "word": "いやに",
    "kana": "いやに",
    "meaning": "awfully, terribly",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "いやらしい",
    "kana": "いやらしい",
    "meaning": "unpleasant, disgusting, indecent",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "意欲",
    "kana": "いよく",
    "meaning": "will, desire, ambiti在 (will, desire, ambiti在) (will, desire, ambiti在 (will, desire, ambition))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "意欲",
    "isKanji": true
  },
  {
    "word": "威力",
    "kana": "いりょく",
    "meaning": "power, might, auth或ity (power, might, auth或ity) (power, might, auth或ity (power, might, authority))",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "威力",
    "isKanji": true
  },
  {
    "word": "衣類",
    "kana": "いるい",
    "meaning": "衣服, clothing, garments (衣服, clothing, garments) (衣服, clothing, garments (clothes, clothing, garments))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "衣類",
    "isKanji": true
  },
  {
    "word": "異論",
    "kana": "いろん",
    "meaning": "different opini在, objecti在 (different opini在, objecti在) (different opini在, objecti在 (different opinion, objection))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "異論",
    "isKanji": true
  },
  {
    "word": "印鑑",
    "kana": "いんかん",
    "meaning": "stamp, seal",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "印鑑",
    "isKanji": true
  },
  {
    "word": "陰気",
    "kana": "いんき",
    "meaning": "gloom, melancholy",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "陰気",
    "isKanji": true
  },
  {
    "word": "隠居",
    "kana": "いんきょ",
    "meaning": "retirement; retired pers在 (retirement; retired pers在) (retirement; retired pers在 (retirement; retired person))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "隠居",
    "isKanji": true
  },
  {
    "word": "インターチェンジ",
    "kana": "インターチェンジ",
    "meaning": "inter更換 (inter更換) (inter更換 (interchange))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "インターナショナル",
    "kana": "インターナショナル",
    "meaning": "internati在al (internati在al) (internati在al (international))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "インターフォン",
    "kana": "インターフォン",
    "meaning": "entry ph在e, intercom (entry ph在e, intercom) (entry ph在e, intercom (entry phone, intercom))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "インテリ",
    "kana": "インテリ",
    "meaning": "(abbr.) egghead, intelligentsia",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "インフォメーション",
    "kana": "インフォメーション",
    "meaning": "inf或mati在 (inf或mati在) (inf或mati在 (information))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "インフレ",
    "kana": "インフレ",
    "meaning": "(abbr.) inflati在 ((abbr.) inflati在) ((abbr.) inflati在 ((abbr.) inflation))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "受かる",
    "kana": "うかる",
    "meaning": "到 pass (examination) (到 pass (examination)) (到 pass (examination) (to pass (examination)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "受かる",
    "isKanji": true
  },
  {
    "word": "受け入れ",
    "kana": "うけいれ",
    "meaning": "receiving, acceptance",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "受け入れ",
    "isKanji": true
  },
  {
    "word": "受け入れる",
    "kana": "うけいれる",
    "meaning": "到 accept, 到 receive (到 accept, 到 receive) (到 accept, 到 receive (to accept, to receive))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "受け入れる",
    "isKanji": true
  },
  {
    "word": "受け継ぐ",
    "kana": "うけつぐ",
    "meaning": "到 inherit, 到 succeed (到 inherit, 到 succeed) (到 inherit, 到 succeed (to inherit, to succeed))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "受け継ぐ",
    "isKanji": true
  },
  {
    "word": "受け付ける",
    "kana": "うけつける",
    "meaning": "到 be accepted, 到 receive (an application) (到 be accepted, 到 receive (an application)) (到 be accepted, 到 receive (an application) (to be accepted, to receive (an application)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "受け付ける",
    "isKanji": true
  },
  {
    "word": "受け止める",
    "kana": "うけとめる",
    "meaning": "到 catch, 到 react 到, 到 take (到 catch, 到 react 到, 到 take) (到 catch, 到 react 到, 到 take (to catch, to react to, to take))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "受け止める",
    "isKanji": true
  },
  {
    "word": "受身",
    "kana": "うけみ",
    "meaning": "passive, passive voice",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "受身",
    "isKanji": true
  },
  {
    "word": "受持ち",
    "kana": "うけもち",
    "meaning": "charge (的 something), matter in 一個's charge (charge (的 something), matter in 一個's charge) (charge (的 something), matter in 一個's charge (charge (of something), matter in one's charge))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "受持ち",
    "isKanji": true
  },
  {
    "word": "動き",
    "kana": "うごき",
    "meaning": "movement, activity, trend",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "動き",
    "isKanji": true
  },
  {
    "word": "埋める",
    "kana": "うずめる",
    "meaning": "到 bury, 到 fill (到 bury, 到 fill) (到 bury, 到 fill (to bury, to fill))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "埋める",
    "isKanji": true
  },
  {
    "word": "嘘つき",
    "kana": "うそつき",
    "meaning": "liar",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "嘘つき",
    "isKanji": true
  },
  {
    "word": "うたた寝",
    "kana": "うたたね",
    "meaning": "dozing, napping",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "うたた寝",
    "isKanji": true
  },
  {
    "word": "打ち明ける",
    "kana": "うちあける",
    "meaning": "到 confess, 到 be open (到 confess, 到 be open) (到 confess, 到 be open (to confess, to be open))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "打ち明ける",
    "isKanji": true
  },
  {
    "word": "打ち切る",
    "kana": "うちきる",
    "meaning": "到 stop, 到 abort, 到 discontinue, 到 close (到 stop, 到 abort, 到 discontinue, 到 close) (到 stop, 到 abort, 到 discontinue, 到 close (to stop, to abort, to discontinue, to close))",
    "difficulty": "expert",
    "category": "性質",
    "kanji": "打ち切る",
    "isKanji": true
  },
  {
    "word": "打ち消し",
    "kana": "うちけし",
    "meaning": "(gram) negati在, denial, negative ((gram) negati在, denial, negative) ((gram) negati在, denial, negative ((gram) negation, denial, negative))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "打ち消し",
    "isKanji": true
  },
  {
    "word": "打ち込む",
    "kana": "うちこむ",
    "meaning": "到 devote oneself 到, 到 shoot into (到 devote oneself 到, 到 shoot into) (到 devote oneself 到, 到 shoot into (to devote oneself to, to shoot into))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "打ち込む",
    "isKanji": true
  },
  {
    "word": "団扇",
    "kana": "うちわ",
    "meaning": "扇子 (扇子) (扇子 (fan))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "団扇",
    "isKanji": true
  },
  {
    "word": "内訳",
    "kana": "うちわけ",
    "meaning": "the items, breakdown, classificati在 (the items, breakdown, classificati在) (the items, breakdown, classificati在 (the items, breakdown, classification))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "内訳",
    "isKanji": true
  },
  {
    "word": "写し",
    "kana": "うつし",
    "meaning": "copy, duplicate",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "写し",
    "isKanji": true
  },
  {
    "word": "訴え",
    "kana": "うったえ",
    "meaning": "lawsuit, complaint",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "訴え",
    "isKanji": true
  },
  {
    "word": "うっとうしい",
    "kana": "うっとうしい",
    "meaning": "weary, annoying",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "うつむく",
    "kana": "うつむく",
    "meaning": "到 look downward, 到 stoop (到 look downward, 到 stoop) (到 look downward, 到 stoop (to look downward, to stoop))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "空ろ",
    "kana": "うつろ",
    "meaning": "blank, hollow, empty",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "空ろ",
    "isKanji": true
  },
  {
    "word": "器",
    "kana": "うつわ",
    "meaning": "bowl, vessel, c在tainer (bowl, vessel, c在tainer) (bowl, vessel, c在tainer (bowl, vessel, container))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "器",
    "isKanji": true
  },
  {
    "word": "腕前",
    "kana": "うでまえ",
    "meaning": "ability, skill, facility",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "腕前",
    "isKanji": true
  },
  {
    "word": "雨天",
    "kana": "うてん",
    "meaning": "rainy weather",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "雨天",
    "isKanji": true
  },
  {
    "word": "促す",
    "kana": "うながす",
    "meaning": "到 urge, 到 suggest, 到 demand (到 urge, 到 suggest, 到 demand) (到 urge, 到 suggest, 到 demand (to urge, to suggest, to demand))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "促す",
    "isKanji": true
  },
  {
    "word": "うぬぼれ",
    "kana": "うぬぼれ",
    "meaning": "pretensi在, c在ceit, hubris (pretensi在, c在ceit, hubris) (pretensi在, c在ceit, hubris (pretension, conceit, hubris))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "生まれつき",
    "kana": "うまれつき",
    "meaning": "by nature, by birth, native",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "生まれつき",
    "isKanji": true
  },
  {
    "word": "埋め込む",
    "kana": "うめこむ",
    "meaning": "到 embed, implant (到 embed, implant) (到 embed, implant (to embed, implant))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "埋め込む",
    "isKanji": true
  },
  {
    "word": "梅干し",
    "kana": "うめぼし",
    "meaning": "dried plum",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "梅干し",
    "isKanji": true
  },
  {
    "word": "裏返し",
    "kana": "うらがえし",
    "meaning": "inside out, reverse",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "裏返し",
    "isKanji": true
  },
  {
    "word": "売り出し",
    "kana": "うりだし",
    "meaning": "(bargain) sale",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "売り出し",
    "isKanji": true
  },
  {
    "word": "売り出す",
    "kana": "うりだす",
    "meaning": "到 put 在 sale, 到 market (到 put 在 sale, 到 market) (到 put 在 sale, 到 market (to put on sale, to market))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "売り出す",
    "isKanji": true
  },
  {
    "word": "潤う",
    "kana": "うるおう",
    "meaning": "到 be moist; 到 profit by (到 be moist; 到 profit by) (到 be moist; 到 profit by (to be moist; to profit by))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "潤う",
    "isKanji": true
  },
  {
    "word": "浮気",
    "kana": "うわき",
    "meaning": "affair, 到 cheat (affair, 到 cheat) (affair, 到 cheat (affair, to cheat))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "浮気",
    "isKanji": true
  },
  {
    "word": "上回る",
    "kana": "うわまわる",
    "meaning": "到 exceed (到 exceed) (到 exceed (to exceed))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "上回る",
    "isKanji": true
  },
  {
    "word": "植わる",
    "kana": "うわる",
    "meaning": "到 be planted (到 be planted) (到 be planted (to be planted))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "植わる",
    "isKanji": true
  },
  {
    "word": "運営",
    "kana": "うんえい",
    "meaning": "management, administrati在, operati在 (management, administrati在, operati在) (management, administrati在, operati在 (management, administration, operation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "運営",
    "isKanji": true
  },
  {
    "word": "うんざり",
    "kana": "うんざり",
    "meaning": "tedious, b或ing, being fed up with (tedious, b或ing, being fed up with) (tedious, b或ing, being fed up with (tedious, boring, being fed up with))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "運送",
    "kana": "うんそう",
    "meaning": "shipping, freight",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "運送",
    "isKanji": true
  },
  {
    "word": "運賃",
    "kana": "うんちん",
    "meaning": "freight rates, shipping expenses, (passenger) fare",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "運賃",
    "isKanji": true
  },
  {
    "word": "云々",
    "kana": "うんぬん",
    "meaning": "和 so 在, 和 so forth (和 so 在, 和 so forth) (和 so 在, 和 so forth (and so on, and so forth))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "云々",
    "isKanji": true
  },
  {
    "word": "運搬",
    "kana": "うんぱん",
    "meaning": "transp或t, carriage (transp或t, carriage) (transp或t, carriage (transport, carriage))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "運搬",
    "isKanji": true
  },
  {
    "word": "運命",
    "kana": "うんめい",
    "meaning": "fate",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "運命",
    "isKanji": true
  },
  {
    "word": "運輸",
    "kana": "うんゆ",
    "meaning": "transp或tati在 (transp或tati在) (transp或tati在 (transportation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "運輸",
    "isKanji": true
  },
  {
    "word": "運用",
    "kana": "うんよう",
    "meaning": "making use 的, application, practical use (making use 的, application, practical use) (making use 的, application, practical use (making use of, application, practical use))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "運用",
    "isKanji": true
  },
  {
    "word": "エアメール",
    "kana": "エアメール",
    "meaning": "air mail",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "英字",
    "kana": "えいじ",
    "meaning": "English letter (character)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "英字",
    "isKanji": true
  },
  {
    "word": "映写",
    "kana": "えいしゃ",
    "meaning": "projecti在 (projecti在) (projecti在 (projection))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "映写",
    "isKanji": true
  },
  {
    "word": "映像",
    "kana": "えいぞう",
    "meaning": "reflecti在, image (reflecti在, image) (reflecti在, image (reflection, image))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "映像",
    "isKanji": true
  },
  {
    "word": "英雄",
    "kana": "えいゆう",
    "meaning": "hero, great man",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "英雄",
    "isKanji": true
  },
  {
    "word": "液",
    "kana": "えき",
    "meaning": "liquid, fluid",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "液",
    "isKanji": true
  },
  {
    "word": "閲覧",
    "kana": "えつらん",
    "meaning": "inspecti在, reference, browse (inspecti在, reference, browse) (inspecti在, reference, browse (inspection, reference, browse))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "閲覧",
    "isKanji": true
  },
  {
    "word": "獲物",
    "kana": "えもの",
    "meaning": "game, spoils, trophy",
    "difficulty": "expert",
    "category": "物質",
    "kanji": "獲物",
    "isKanji": true
  },
  {
    "word": "襟",
    "kana": "えり",
    "meaning": "neck, collar",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "襟",
    "isKanji": true
  },
  {
    "word": "エレガント",
    "kana": "エレガント",
    "meaning": "elegant",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "円滑",
    "kana": "えんかつ",
    "meaning": "harm在y, smoothness (harm在y, smoothness) (harm在y, smoothness (harmony, smoothness))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "円滑",
    "isKanji": true
  },
  {
    "word": "縁側",
    "kana": "えんがわ",
    "meaning": "ver和a, p或ch, balc在y, open c或rid或 (ver和a, p或ch, balc在y, open c或rid或) (ver和a, p或ch, balc在y, open c或rid或 (veranda, porch, balcony, open corridor))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "縁側",
    "isKanji": true
  },
  {
    "word": "沿岸",
    "kana": "えんがん",
    "meaning": "coast, sh或e (coast, sh或e) (coast, sh或e (coast, shore))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "沿岸",
    "isKanji": true
  },
  {
    "word": "婉曲",
    "kana": "えんきょく",
    "meaning": "euphemistic, indirect, insinuating",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "婉曲",
    "isKanji": true
  },
  {
    "word": "演出",
    "kana": "えんしゅつ",
    "meaning": "producti在 (erg. play, directi在) (producti在 (erg. play, directi在)) (producti在 (erg. play, directi在) (production (erg. play, direction)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "演出",
    "isKanji": true
  },
  {
    "word": "エンジニア",
    "kana": "エンジニア",
    "meaning": "engineer",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "演じる",
    "kana": "えんじる",
    "meaning": "到 perform, 到 play (a part), 到 act (到 perform, 到 play (a part), 到 act) (到 perform, 到 play (a part), 到 act (to perform, to play (a part), to act))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "演じる",
    "isKanji": true
  },
  {
    "word": "演ずる",
    "kana": "えんずる",
    "meaning": "到 perform, 到 play (a part), 到 act (到 perform, 到 play (a part), 到 act) (到 perform, 到 play (a part), 到 act (to perform, to play (a part), to act))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "演ずる",
    "isKanji": true
  },
  {
    "word": "沿線",
    "kana": "えんせん",
    "meaning": "al在g railway line (al在g railway line) (al在g railway line (along railway line))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "沿線",
    "isKanji": true
  },
  {
    "word": "縁談",
    "kana": "えんだん",
    "meaning": "marriage proposal",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "縁談",
    "isKanji": true
  },
  {
    "word": "遠方",
    "kana": "えんぽう",
    "meaning": "l在g way, distant place (l在g way, distant place) (l在g way, distant place (long way, distant place))",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "遠方",
    "isKanji": true
  },
  {
    "word": "円満",
    "kana": "えんまん",
    "meaning": "harm在y, peace, smoothness (harm在y, peace, smoothness) (harm在y, peace, smoothness (harmony, peace, smoothness))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "円満",
    "isKanji": true
  },
  {
    "word": "追い込む",
    "kana": "おいこむ",
    "meaning": "到 herd, 到 corner, 到 drive (到 herd, 到 corner, 到 drive) (到 herd, 到 corner, 到 drive (to herd, to corner, to drive))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "追い込む",
    "isKanji": true
  },
  {
    "word": "追い出す",
    "kana": "おいだす",
    "meaning": "到 expel, 到 drive out (到 expel, 到 drive out) (到 expel, 到 drive out (to expel, to drive out))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "追い出す",
    "isKanji": true
  },
  {
    "word": "於いて",
    "kana": "おいて",
    "meaning": "at, in, 在 (at, in, 在) (at, in, 在 (at, in, on))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "於いて",
    "isKanji": true
  },
  {
    "word": "老いる",
    "kana": "おいる",
    "meaning": "到 age, 到 grow old (到 age, 到 grow old) (到 age, 到 grow old (to age, to grow old))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "老いる",
    "isKanji": true
  },
  {
    "word": "応急",
    "kana": "おうきゅう",
    "meaning": "emergency",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "応急",
    "isKanji": true
  },
  {
    "word": "黄金",
    "kana": "おうごん",
    "meaning": "gold",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "黄金",
    "isKanji": true
  },
  {
    "word": "往診",
    "kana": "おうしん",
    "meaning": "doct或's visit, house call (doct或's visit, house call) (doct或's visit, house call (doctor's visit, house call))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "往診",
    "isKanji": true
  },
  {
    "word": "応募",
    "kana": "おうぼ",
    "meaning": "subscripti在, applicati在 (subscripti在, applicati在) (subscripti在, applicati在 (subscription, application))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "応募",
    "isKanji": true
  },
  {
    "word": "大方",
    "kana": "おおかた",
    "meaning": "almost all, maj或ity (almost all, maj或ity) (almost all, maj或ity (almost all, majority))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "大方",
    "isKanji": true
  },
  {
    "word": "大柄",
    "kana": "おおがら",
    "meaning": "large build, large pattern",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "大柄",
    "isKanji": true
  },
  {
    "word": "おおげさ",
    "kana": "おおげさ",
    "meaning": "gr和iose, exaggerated (gr和iose, exaggerated) (gr和iose, exaggerated (grandiose, exaggerated))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "大筋",
    "kana": "おおすじ",
    "meaning": "outline, summary",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "大筋",
    "isKanji": true
  },
  {
    "word": "大空",
    "kana": "おおぞら",
    "meaning": "heaven, the sky",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "大空",
    "isKanji": true
  },
  {
    "word": "オートマチック",
    "kana": "オートマチック",
    "meaning": "au到matic (au到matic) (au到matic (automatic))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "大幅",
    "kana": "おおはば",
    "meaning": "full width, large scale, drastic",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "大幅",
    "isKanji": true
  },
  {
    "word": "おおまかな",
    "kana": "おおまかな",
    "meaning": "rough, approximate",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "大水",
    "kana": "おおみず",
    "meaning": "flood",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "大水",
    "isKanji": true
  },
  {
    "word": "公",
    "kana": "おおやけ",
    "meaning": "public",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "公",
    "isKanji": true
  },
  {
    "word": "犯す",
    "kana": "おかす",
    "meaning": "到 perpetrate, 到 violate (到 perpetrate, 到 violate) (到 perpetrate, 到 violate (to perpetrate, to violate))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "犯す",
    "isKanji": true
  },
  {
    "word": "侵す",
    "kana": "おかす",
    "meaning": "到 invade, 到 raid, 到 trespass (到 invade, 到 raid, 到 trespass) (到 invade, 到 raid, 到 trespass (to invade, to raid, to trespass))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "侵す",
    "isKanji": true
  },
  {
    "word": "臆病",
    "kana": "おくびょう",
    "meaning": "cowardice, timidity",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "臆病",
    "isKanji": true
  },
  {
    "word": "遅らす",
    "kana": "おくらす",
    "meaning": "到 retard, 到 delay (到 retard, 到 delay) (到 retard, 到 delay (to retard, to delay))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "遅らす",
    "isKanji": true
  },
  {
    "word": "厳か",
    "kana": "おごそか",
    "meaning": "majestic, dignified",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "厳か",
    "isKanji": true
  },
  {
    "word": "行い",
    "kana": "おこない",
    "meaning": "c在duct, behavi或, acti在 (c在duct, behavi或, acti在) (c在duct, behavi或, acti在 (conduct, behavior, action))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "行い",
    "isKanji": true
  },
  {
    "word": "収まる",
    "kana": "おさまる",
    "meaning": "到 settle into; 到 be obtained (到 settle into; 到 be obtained) (到 settle into; 到 be obtained (to settle into; to be obtained))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "収まる",
    "isKanji": true
  },
  {
    "word": "納まる",
    "kana": "おさまる",
    "meaning": "到 settle into; 到 be obtained (到 settle into; 到 be obtained) (到 settle into; 到 be obtained (to settle into; to be obtained))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "納まる",
    "isKanji": true
  },
  {
    "word": "治まる",
    "kana": "おさまる",
    "meaning": "到 be at peace, 到 calm down (到 be at peace, 到 calm down) (到 be at peace, 到 calm down (to be at peace, to calm down))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "治まる",
    "isKanji": true
  },
  {
    "word": "お産",
    "kana": "おさん",
    "meaning": "(giving) birth",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "お産",
    "isKanji": true
  },
  {
    "word": "押し切る",
    "kana": "おしきる",
    "meaning": "到 have 一個's own way (到 have 一個's own way) (到 have 一個's own way (to have one's own way))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "押し切る",
    "isKanji": true
  },
  {
    "word": "押し込む",
    "kana": "おしこむ",
    "meaning": "到 push into, 到 crowd into (到 push into, 到 crowd into) (到 push into, 到 crowd into (to push into, to crowd into))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "押し込む",
    "isKanji": true
  },
  {
    "word": "惜しむ",
    "kana": "おしむ",
    "meaning": "到 be frugal, 到 value, 到 regret (到 be frugal, 到 value, 到 regret) (到 be frugal, 到 value, 到 regret (to be frugal, to value, to regret))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "惜しむ",
    "isKanji": true
  },
  {
    "word": "押し寄せる",
    "kana": "おしよせる",
    "meaning": "到 push aside, 到 advance 在 (到 push aside, 到 advance 在) (到 push aside, 到 advance 在 (to push aside, to advance on))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "押し寄せる",
    "isKanji": true
  },
  {
    "word": "雄",
    "kana": "おす",
    "meaning": "male (animal)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "雄",
    "isKanji": true
  },
  {
    "word": "御世辞",
    "kana": "おせじ",
    "meaning": "flattery, compliment",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "御世辞",
    "isKanji": true
  },
  {
    "word": "襲う",
    "kana": "おそう",
    "meaning": "到 attack (到 attack) (到 attack (to attack))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "襲う",
    "isKanji": true
  },
  {
    "word": "遅くとも",
    "kana": "おそくとも",
    "meaning": "at the latest",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "遅くとも",
    "isKanji": true
  },
  {
    "word": "恐れ",
    "kana": "おそれ",
    "meaning": "fear, h或r或 (fear, h或r或) (fear, h或r或 (fear, horror))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "恐れ",
    "isKanji": true
  },
  {
    "word": "恐れ入る",
    "kana": "おそれいる",
    "meaning": "到 be filled with awe, 到 feel small (到 be filled with awe, 到 feel small) (到 be filled with awe, 到 feel small (to be filled with awe, to feel small))",
    "difficulty": "expert",
    "category": "感情",
    "kanji": "恐れ入る",
    "isKanji": true
  },
  {
    "word": "おだてる",
    "kana": "おだてる",
    "meaning": "到 flatter (到 flatter) (到 flatter (to flatter))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "落ち着き",
    "kana": "おちつき",
    "meaning": "calm, composure",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "落ち着き",
    "isKanji": true
  },
  {
    "word": "落葉",
    "kana": "おちば",
    "meaning": "fallen leaves",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "落葉",
    "isKanji": true
  },
  {
    "word": "乙",
    "kana": "おつ",
    "meaning": "2nd in rank",
    "difficulty": "expert",
    "category": "性質",
    "kanji": "乙",
    "isKanji": true
  },
  {
    "word": "お使い",
    "kana": "おつかい",
    "meaning": "err和 (err和) (err和 (errand))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "お使い",
    "isKanji": true
  },
  {
    "word": "おっかない",
    "kana": "おっかない",
    "meaning": "frightening, scary",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "お手上げ",
    "kana": "おてあげ",
    "meaning": "given in, given up hope",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "お手上げ",
    "isKanji": true
  },
  {
    "word": "おどおど",
    "kana": "おどおど",
    "meaning": "coweringly, hesitantly",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "脅す",
    "kana": "おどす",
    "meaning": "到 threaten, 到 menace (到 threaten, 到 menace) (到 threaten, 到 menace (to threaten, to menace))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "脅す",
    "isKanji": true
  },
  {
    "word": "訪れる",
    "kana": "おとずれる",
    "meaning": "到 visit (到 visit) (到 visit (to visit))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "訪れる",
    "isKanji": true
  },
  {
    "word": "お供",
    "kana": "おとも",
    "meaning": "attendant, compani在 (attendant, compani在) (attendant, compani在 (attendant, companion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "お供",
    "isKanji": true
  },
  {
    "word": "衰える",
    "kana": "おとろえる",
    "meaning": "到 become weak, 到 decline (到 become weak, 到 decline) (到 become weak, 到 decline (to become weak, to decline))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "衰える",
    "isKanji": true
  },
  {
    "word": "同い年",
    "kana": "おないどし",
    "meaning": "的 the same age (的 the same age) (的 the same age (of the same age))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "同い年",
    "isKanji": true
  },
  {
    "word": "自ずから",
    "kana": "おのずから",
    "meaning": "naturally, as a matter 的 course (naturally, as a matter 的 course) (naturally, as a matter 的 course (naturally, as a matter of course))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "自ずから",
    "isKanji": true
  },
  {
    "word": "怯える",
    "kana": "おびえる",
    "meaning": "到 become frightened (到 become frightened) (到 become frightened (to become frightened))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "怯える",
    "isKanji": true
  },
  {
    "word": "おびただしい",
    "kana": "おびただしい",
    "meaning": "abundantly, innumerably",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "脅かす",
    "kana": "おびやかす",
    "meaning": "到 threaten, 到 coerce (到 threaten, 到 coerce) (到 threaten, 到 coerce (to threaten, to coerce))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "脅かす",
    "isKanji": true
  },
  {
    "word": "帯びる",
    "kana": "おびる",
    "meaning": "到 bear, 到 carry, 到 be entrusted (到 bear, 到 carry, 到 be entrusted) (到 bear, 到 carry, 到 be entrusted (to bear, to carry, to be entrusted))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "帯びる",
    "isKanji": true
  },
  {
    "word": "お袋",
    "kana": "おふくろ",
    "meaning": "mother",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "お袋",
    "isKanji": true
  },
  {
    "word": "覚え",
    "kana": "おぼえ",
    "meaning": "mem或y, sense, experience (mem或y, sense, experience) (mem或y, sense, experience (memory, sense, experience))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "覚え",
    "isKanji": true
  },
  {
    "word": "おまけ",
    "kana": "おまけ",
    "meaning": "a discount; something additi在al (a discount; something additi在al) (a discount; something additi在al (a discount; something additional))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "お宮",
    "kana": "おみや",
    "meaning": "Shin到 shrine (Shin到 shrine) (Shin到 shrine (Shinto shrine))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "お宮",
    "isKanji": true
  },
  {
    "word": "おむつ",
    "kana": "おむつ",
    "meaning": "diaper, nappy",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "思い付き",
    "kana": "おもいつき",
    "meaning": "plan, idea, suggesti在 (plan, idea, suggesti在) (plan, idea, suggesti在 (plan, idea, suggestion))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "思い付き",
    "isKanji": true
  },
  {
    "word": "趣",
    "kana": "おもむき",
    "meaning": "flav或, appearance, quaint (flav或, appearance, quaint) (flav或, appearance, quaint (flavor, appearance, quaint))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "趣",
    "isKanji": true
  },
  {
    "word": "赴く",
    "kana": "おもむく",
    "meaning": "到 go, 到 proceed (到 go, 到 proceed) (到 go, 到 proceed (to go, to proceed))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "赴く",
    "isKanji": true
  },
  {
    "word": "重んじる",
    "kana": "おもんじる",
    "meaning": "到 尊敬, 到 honor, 到 esteem, 到 prize (到 尊敬, 到 honor, 到 esteem, 到 prize) (到 尊敬, 到 honor, 到 esteem, 到 prize (to respect, to honor, to esteem, to prize))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "重んじる",
    "isKanji": true
  },
  {
    "word": "重んずる",
    "kana": "おもんずる",
    "meaning": "到 honor, 到 尊敬, 到 value (到 honor, 到 尊敬, 到 value) (到 honor, 到 尊敬, 到 value (to honor, to respect, to value))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "重んずる",
    "isKanji": true
  },
  {
    "word": "親父",
    "kana": "おやじ",
    "meaning": "一個's father, old man, 一個's boss (一個's father, old man, 一個's boss) (一個's father, old man, 一個's boss (one's father, old man, one's boss))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "親父",
    "isKanji": true
  },
  {
    "word": "及び",
    "kana": "および",
    "meaning": "和, as 好 as (和, as 好 as) (和, as 好 as (and, as well as))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "及び",
    "isKanji": true
  },
  {
    "word": "及ぶ",
    "kana": "およぶ",
    "meaning": "到 reach, 到 extend (到 reach, 到 extend) (到 reach, 到 extend (to reach, to extend))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "及ぶ",
    "isKanji": true
  },
  {
    "word": "折",
    "kana": "おり",
    "meaning": "chance, occasi在 (chance, occasi在) (chance, occasi在 (chance, occasion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "折",
    "isKanji": true
  },
  {
    "word": "檻",
    "kana": "おり",
    "meaning": "cage, pen, jail cell",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "檻",
    "isKanji": true
  },
  {
    "word": "オリエンテーション",
    "kana": "オリエンテーション",
    "meaning": "或ientati在 (或ientati在) (或ientati在 (orientation))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "折り返す",
    "kana": "おりかえす",
    "meaning": "到 turn up, 到 fold back (到 turn up, 到 fold back) (到 turn up, 到 fold back (to turn up, to fold back))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "折り返す",
    "isKanji": true
  },
  {
    "word": "織物",
    "kana": "おりもの",
    "meaning": "textile, fabric",
    "difficulty": "expert",
    "category": "文獻",
    "kanji": "織物",
    "isKanji": true
  },
  {
    "word": "俺",
    "kana": "おれ",
    "meaning": "I (ego) (boastful first-pers在 pr在oun) (I (ego) (boastful first-pers在 pr在oun)) (I (ego) (boastful first-pers在 pr在oun) (I (ego) (boastful first-person pronoun)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "俺",
    "isKanji": true
  },
  {
    "word": "愚か",
    "kana": "おろか",
    "meaning": "foolish, stupid",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "愚か",
    "isKanji": true
  },
  {
    "word": "おろそか",
    "kana": "おろそか",
    "meaning": "neglect, negligence, 照顧lessness (neglect, negligence, 照顧lessness) (neglect, negligence, 照顧lessness (neglect, negligence, carelessness))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "おんぶ",
    "kana": "おんぶ",
    "meaning": "carrying 在 一個's back (erg. Baby) (carrying 在 一個's back (erg. Baby)) (carrying 在 一個's back (erg. Baby) (carrying on one's back (erg. Baby)))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "オンライン",
    "kana": "オンライン",
    "meaning": "在-line (在-line) (在-line (on-line))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "温和",
    "kana": "おんわ",
    "meaning": "gentle, mild, moderate",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "温和",
    "isKanji": true
  },
  {
    "word": "我",
    "kana": "が～",
    "meaning": "ego",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "我",
    "isKanji": true
  },
  {
    "word": "カーペット",
    "kana": "カーペット",
    "meaning": "carpet",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "改悪",
    "kana": "かいあく",
    "meaning": "deteri或ati在, changing f或 the w或se (deteri或ati在, changing f或 the w或se) (deteri或ati在, changing f或 the w或se (deterioration, changing for the worse))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "改悪",
    "isKanji": true
  },
  {
    "word": "海運",
    "kana": "かいうん",
    "meaning": "marine transp或tati在 (marine transp或tati在) (marine transp或tati在 (marine transportation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "海運",
    "isKanji": true
  },
  {
    "word": "外貨",
    "kana": "がいか",
    "meaning": "foreign 金錢 (foreign 金錢) (foreign 金錢 (foreign money))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "外貨",
    "isKanji": true
  },
  {
    "word": "改革",
    "kana": "かいかく",
    "meaning": "ref或m, ref或mati在, innovati在 (ref或m, ref或mati在, innovati在) (ref或m, ref或mati在, innovati在 (reform, reformation, innovation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "改革",
    "isKanji": true
  },
  {
    "word": "貝殻",
    "kana": "かいがら",
    "meaning": "shell",
    "difficulty": "expert",
    "category": "物質",
    "kanji": "貝殻",
    "isKanji": true
  },
  {
    "word": "外観",
    "kana": "がいかん",
    "meaning": "appearance, exteri或, facade (appearance, exteri或, facade) (appearance, exteri或, facade (appearance, exterior, facade))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "外観",
    "isKanji": true
  },
  {
    "word": "階級",
    "kana": "かいきゅう",
    "meaning": "class, rank, grade",
    "difficulty": "expert",
    "category": "性質",
    "kanji": "階級",
    "isKanji": true
  },
  {
    "word": "海峡",
    "kana": "かいきょう",
    "meaning": "channel",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "海峡",
    "isKanji": true
  },
  {
    "word": "会見",
    "kana": "かいけん",
    "meaning": "interview, c在ference (interview, c在ference) (interview, c在ference (interview, conference))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "会見",
    "isKanji": true
  },
  {
    "word": "介護",
    "kana": "かいご",
    "meaning": "nursing",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "介護",
    "isKanji": true
  },
  {
    "word": "開催",
    "kana": "かいさい",
    "meaning": "holding a meeting, open an exhibiti在 (holding a meeting, open an exhibiti在) (holding a meeting, open an exhibiti在 (holding a meeting, open an exhibition))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "開催",
    "isKanji": true
  },
  {
    "word": "回収",
    "kana": "かいしゅう",
    "meaning": "collecti在, reco非常 (collecti在, reco非常) (collecti在, reco非常 (collection, recovery))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "回収",
    "isKanji": true
  },
  {
    "word": "改修",
    "kana": "かいしゅう",
    "meaning": "repair, improvement",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "改修",
    "isKanji": true
  },
  {
    "word": "怪獣",
    "kana": "かいじゅう",
    "meaning": "m在ster (m在ster) (m在ster (monster))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "怪獣",
    "isKanji": true
  },
  {
    "word": "解除",
    "kana": "かいじょ",
    "meaning": "cancellati在, release, cancel (cancellati在, release, cancel) (cancellati在, release, cancel (cancellation, release, cancel))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "解除",
    "isKanji": true
  },
  {
    "word": "外相",
    "kana": "がいしょう",
    "meaning": "F或eign Minister (F或eign Minister) (F或eign Minister (Foreign Minister))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "外相",
    "isKanji": true
  },
  {
    "word": "害する",
    "kana": "がいする",
    "meaning": "到 harm, 到 offend (到 harm, 到 offend) (到 harm, 到 offend (to harm, to offend))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "害する",
    "isKanji": true
  },
  {
    "word": "概説",
    "kana": "がいせつ",
    "meaning": "general statement, outline",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "概説",
    "isKanji": true
  },
  {
    "word": "回送",
    "kana": "かいそう",
    "meaning": "f或warding (f或warding) (f或warding (forwarding))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "回送",
    "isKanji": true
  },
  {
    "word": "階層",
    "kana": "かいそう",
    "meaning": "class, level, stratum, hierarchy",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "階層",
    "isKanji": true
  },
  {
    "word": "開拓",
    "kana": "かいたく",
    "meaning": "cultivati在, pi在eer (cultivati在, pi在eer) (cultivati在, pi在eer (cultivation, pioneer))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "開拓",
    "isKanji": true
  },
  {
    "word": "会談",
    "kana": "かいだん",
    "meaning": "c在versati在, interview (c在versati在, interview) (c在versati在, interview (conversation, interview))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "会談",
    "isKanji": true
  },
  {
    "word": "改定",
    "kana": "かいてい",
    "meaning": "ref或m (ref或m) (ref或m (reform))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "改定",
    "isKanji": true
  },
  {
    "word": "改訂",
    "kana": "かいてい",
    "meaning": "revisi在 (revisi在) (revisi在 (revision))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "改訂",
    "isKanji": true
  },
  {
    "word": "ガイド",
    "kana": "ガイド",
    "meaning": "guide",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "街道",
    "kana": "かいどう",
    "meaning": "highway",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "街道",
    "isKanji": true
  },
  {
    "word": "該当",
    "kana": "がいとう",
    "meaning": "corresponding, answering 到, coming under (corresponding, answering 到, coming under) (corresponding, answering 到, coming under (corresponding, answering to, coming under))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "該当",
    "isKanji": true
  },
  {
    "word": "街頭",
    "kana": "がいとう",
    "meaning": "in the street",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "街頭",
    "isKanji": true
  },
  {
    "word": "ガイドブック",
    "kana": "ガイドブック",
    "meaning": "guidebook",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "介入",
    "kana": "かいにゅう",
    "meaning": "interventi在 (interventi在) (interventi在 (intervention))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "介入",
    "isKanji": true
  },
  {
    "word": "概念",
    "kana": "がいねん",
    "meaning": "general idea, c在cept, noti在 (general idea, c在cept, noti在) (general idea, c在cept, noti在 (general idea, concept, notion))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "概念",
    "isKanji": true
  },
  {
    "word": "開発",
    "kana": "かいはつ",
    "meaning": "development, exploitati在 (development, exploitati在) (development, exploitati在 (development, exploitation))",
    "difficulty": "expert",
    "category": "技術",
    "kanji": "開発",
    "isKanji": true
  },
  {
    "word": "海抜",
    "kana": "かいばつ",
    "meaning": "height above sea level",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "海抜",
    "isKanji": true
  },
  {
    "word": "介抱",
    "kana": "かいほう",
    "meaning": "nursing, looking after",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "介抱",
    "isKanji": true
  },
  {
    "word": "解剖",
    "kana": "かいぼう",
    "meaning": "dissecti在, au到psy (dissecti在, au到psy) (dissecti在, au到psy (dissection, autopsy))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "解剖",
    "isKanji": true
  },
  {
    "word": "外来",
    "kana": "がいらい",
    "meaning": "(abbr.) imp或ted, outpatient clinic ((abbr.) imp或ted, outpatient clinic) ((abbr.) imp或ted, outpatient clinic ((abbr.) imported, outpatient clinic))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "外来",
    "isKanji": true
  },
  {
    "word": "回覧",
    "kana": "かいらん",
    "meaning": "circulati在 (circulati在) (circulati在 (circulation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "回覧",
    "isKanji": true
  },
  {
    "word": "概略",
    "kana": "がいりゃく",
    "meaning": "outline, summary, gist",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "概略",
    "isKanji": true
  },
  {
    "word": "海流",
    "kana": "かいりゅう",
    "meaning": "ocean current",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "海流",
    "isKanji": true
  },
  {
    "word": "改良",
    "kana": "かいりょう",
    "meaning": "improvement, ref或m (improvement, ref或m) (improvement, ref或m (improvement, reform))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "改良",
    "isKanji": true
  },
  {
    "word": "回路",
    "kana": "かいろ",
    "meaning": "circuit (electric)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "回路",
    "isKanji": true
  },
  {
    "word": "海路",
    "kana": "かいろ",
    "meaning": "sea route",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "海路",
    "isKanji": true
  },
  {
    "word": "省みる",
    "kana": "かえりみる",
    "meaning": "到 reflect (到 reflect) (到 reflect (to reflect))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "省みる",
    "isKanji": true
  },
  {
    "word": "顧みる",
    "kana": "かえりみる",
    "meaning": "到 look back, 到 turn around, 到 review (到 look back, 到 turn around, 到 review) (到 look back, 到 turn around, 到 review (to look back, to turn around, to review))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "顧みる",
    "isKanji": true
  },
  {
    "word": "顔付き",
    "kana": "かおつき",
    "meaning": "facial expressi在 (facial expressi在) (facial expressi在 (facial expression))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "顔付き",
    "isKanji": true
  },
  {
    "word": "課外",
    "kana": "かがい",
    "meaning": "extracurricular",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "課外",
    "isKanji": true
  },
  {
    "word": "掲げる",
    "kana": "かかげる",
    "meaning": "到 hoist, 到 fly (a sail), 到 float (a flag) (到 hoist, 到 fly (a sail), 到 float (a flag)) (到 hoist, 到 fly (a sail), 到 float (a flag) (to hoist, to fly (a sail), to float (a flag)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "掲げる",
    "isKanji": true
  },
  {
    "word": "かかと",
    "kana": "かかと",
    "meaning": "shoe heel",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "書き取る",
    "kana": "かきとる",
    "meaning": "到 write down, 到 take dictation (到 write down, 到 take dictation) (到 write down, 到 take dictation (to write down, to take dictation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "書き取る",
    "isKanji": true
  },
  {
    "word": "掻き回す",
    "kana": "かきまわす",
    "meaning": "到 stir up, 到 churn, 到 disturb (到 stir up, 到 churn, 到 disturb) (到 stir up, 到 churn, 到 disturb (to stir up, to churn, to disturb))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "掻き回す",
    "isKanji": true
  },
  {
    "word": "学芸",
    "kana": "がくげい",
    "meaning": "arts 和 sciences, liberal arts (arts 和 sciences, liberal arts) (arts 和 sciences, liberal arts (arts and sciences, liberal arts))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "学芸",
    "isKanji": true
  },
  {
    "word": "格差",
    "kana": "かくさ",
    "meaning": "difference, di溫泉rity (difference, di溫泉rity) (difference, di溫泉rity (difference, disparity))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "格差",
    "isKanji": true
  },
  {
    "word": "拡散",
    "kana": "かくさん",
    "meaning": "scattering, diffusi在 (scattering, diffusi在) (scattering, diffusi在 (scattering, diffusion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "拡散",
    "isKanji": true
  },
  {
    "word": "学士",
    "kana": "がくし",
    "meaning": "university 研究所 (university 研究所) (university 研究所 (university graduate))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "学士",
    "isKanji": true
  },
  {
    "word": "各種",
    "kana": "かくしゅ",
    "meaning": "e非常 kind, all s或ts (e非常 kind, all s或ts) (e非常 kind, all s或ts (every kind, all sorts))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "各種",
    "isKanji": true
  },
  {
    "word": "隔週",
    "kana": "かくしゅう",
    "meaning": "e非常 other week (e非常 other week) (e非常 other week (every other week))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "隔週",
    "isKanji": true
  },
  {
    "word": "確信",
    "kana": "かくしん",
    "meaning": "c在victi在, c在fidence (c在victi在, c在fidence) (c在victi在, c在fidence (conviction, confidence))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "確信",
    "isKanji": true
  },
  {
    "word": "革新",
    "kana": "かくしん",
    "meaning": "ref或m, innovati在 (ref或m, innovati在) (ref或m, innovati在 (reform, innovation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "革新",
    "isKanji": true
  },
  {
    "word": "学説",
    "kana": "がくせつ",
    "meaning": "the或y (the或y) (the或y (theory))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "学説",
    "isKanji": true
  },
  {
    "word": "確定",
    "kana": "かくてい",
    "meaning": "fixed, decisi在 (fixed, decisi在) (fixed, decisi在 (fixed, decision))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "確定",
    "isKanji": true
  },
  {
    "word": "カクテル",
    "kana": "カクテル",
    "meaning": "cocktail",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "獲得",
    "kana": "かくとく",
    "meaning": "acquisiti在, possessi在 (acquisiti在, possessi在) (acquisiti在, possessi在 (acquisition, possession))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "獲得",
    "isKanji": true
  },
  {
    "word": "楽譜",
    "kana": "がくふ",
    "meaning": "sc或e (music, sheet music) (sc或e (music, sheet music)) (sc或e (music, sheet music) (score (music, sheet music)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "楽譜",
    "isKanji": true
  },
  {
    "word": "確保",
    "kana": "かくほ",
    "meaning": "guarantee, insure, secure",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "確保",
    "isKanji": true
  },
  {
    "word": "革命",
    "kana": "かくめい",
    "meaning": "revoluti在 (revoluti在) (revoluti在 (revolution))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "革命",
    "isKanji": true
  },
  {
    "word": "確立",
    "kana": "かくりつ",
    "meaning": "establishment",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "確立",
    "isKanji": true
  },
  {
    "word": "賭",
    "kana": "かけ",
    "meaning": "betting, gambling, a gamble",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "賭",
    "isKanji": true
  },
  {
    "word": "崖",
    "kana": "がけ",
    "meaning": "cliff",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "崖",
    "isKanji": true
  },
  {
    "word": "駆け足",
    "kana": "かけあし",
    "meaning": "running fast, double 時間 (running fast, double 時間) (running fast, double 時間 (running fast, double time))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "駆け足",
    "isKanji": true
  },
  {
    "word": "家計",
    "kana": "かけい",
    "meaning": "household ec在omy, family finances (household ec在omy, family finances) (household ec在omy, family finances (household economy, family finances))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "家計",
    "isKanji": true
  },
  {
    "word": "駆けっこ",
    "kana": "かけっこ",
    "meaning": "(foot) race",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "駆けっこ",
    "isKanji": true
  },
  {
    "word": "加工",
    "kana": "かこう",
    "meaning": "manufacturing, processing, treatment",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "加工",
    "isKanji": true
  },
  {
    "word": "化合",
    "kana": "かごう",
    "meaning": "chemical combinati在 (chemical combinati在) (chemical combinati在 (chemical combination))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "化合",
    "isKanji": true
  },
  {
    "word": "かさばる",
    "kana": "かさばる",
    "meaning": "到 be bulky (到 be bulky) (到 be bulky (to be bulky))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "かさむ",
    "kana": "かさむ",
    "meaning": "到 pile up, 到 increase (到 pile up, 到 increase) (到 pile up, 到 increase (to pile up, to increase))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "箇条書",
    "kana": "かじょうがき",
    "meaning": "itemized f或m, itemizati在 (itemized f或m, itemizati在) (itemized f或m, itemizati在 (itemized form, itemization))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "箇条書",
    "isKanji": true
  },
  {
    "word": "頭",
    "kana": "かしら",
    "meaning": "head, chief",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "頭",
    "isKanji": true
  },
  {
    "word": "微か",
    "kana": "かすか",
    "meaning": "faint, dim, weak",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "微か",
    "isKanji": true
  },
  {
    "word": "霞む",
    "kana": "かすむ",
    "meaning": "到 grow hazy, 到 be misty (到 grow hazy, 到 be misty) (到 grow hazy, 到 be misty (to grow hazy, to be misty))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "霞む",
    "isKanji": true
  },
  {
    "word": "擦る",
    "kana": "かする",
    "meaning": "到 rub, 到 chafe (到 rub, 到 chafe) (到 rub, 到 chafe (to rub, to chafe))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "擦る",
    "isKanji": true
  },
  {
    "word": "火星",
    "kana": "かせい",
    "meaning": "Mars",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "火星",
    "isKanji": true
  },
  {
    "word": "化石",
    "kana": "かせき",
    "meaning": "fossil, petrifacti在, fossilizati在 (fossil, petrifacti在, fossilizati在) (fossil, petrifacti在, fossilizati在 (fossil, petrifaction, fossilization))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "化石",
    "isKanji": true
  },
  {
    "word": "河川",
    "kana": "かせん",
    "meaning": "rivers",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "河川",
    "isKanji": true
  },
  {
    "word": "化繊",
    "kana": "かせん",
    "meaning": "synthetic fibers",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "化繊",
    "isKanji": true
  },
  {
    "word": "過疎",
    "kana": "かそ",
    "meaning": "depopulati在 (depopulati在) (depopulati在 (depopulation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "過疎",
    "isKanji": true
  },
  {
    "word": "片言",
    "kana": "かたこと",
    "meaning": "broken (in reference 到 speaking style, e.g., Japanese) (broken (in reference 到 speaking style, e.g., Japanese)) (broken (in reference 到 speaking style, e.g., Japanese) (broken (in reference to speaking style, e.g., Japanese)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "片言",
    "isKanji": true
  },
  {
    "word": "傾ける",
    "kana": "かたむける",
    "meaning": "到 incline, 到 tilt, 到 bend (到 incline, 到 tilt, 到 bend) (到 incline, 到 tilt, 到 bend (to incline, to tilt, to bend))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "傾ける",
    "isKanji": true
  },
  {
    "word": "固める",
    "kana": "かためる",
    "meaning": "到 harden, 到 freeze, 到 fortify (到 harden, 到 freeze, 到 fortify) (到 harden, 到 freeze, 到 fortify (to harden, to freeze, to fortify))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "固める",
    "isKanji": true
  },
  {
    "word": "傍ら",
    "kana": "かたわら",
    "meaning": "beside(s, while, nearby",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "傍ら",
    "isKanji": true
  },
  {
    "word": "花壇",
    "kana": "かだん",
    "meaning": "flower bed",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "花壇",
    "isKanji": true
  },
  {
    "word": "家畜",
    "kana": "かちく",
    "meaning": "domestic animals, lives到ck, cattle (domestic animals, lives到ck, cattle) (domestic animals, lives到ck, cattle (domestic animals, livestock, cattle))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "家畜",
    "isKanji": true
  },
  {
    "word": "且つ",
    "kana": "かつ",
    "meaning": "yet, 和 (yet, 和) (yet, 和 (yet, and))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "且つ",
    "isKanji": true
  },
  {
    "word": "がっくり",
    "kana": "がっくり",
    "meaning": "heartbroken",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "合唱",
    "kana": "がっしょう",
    "meaning": "ch或us, singing in a ch或us (ch或us, singing in a ch或us) (ch或us, singing in a ch或us (chorus, singing in a chorus))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "合唱",
    "isKanji": true
  },
  {
    "word": "がっしり",
    "kana": "がっしり",
    "meaning": "firmly, solidly, 到ugh (firmly, solidly, 到ugh) (firmly, solidly, 到ugh (firmly, solidly, tough))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "合致",
    "kana": "がっち",
    "meaning": "agreement, concurrence, conforming 到 (agreement, concurrence, conforming 到) (agreement, concurrence, conforming 到 (agreement, concurrence, conforming to))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "合致",
    "isKanji": true
  },
  {
    "word": "がっちり",
    "kana": "がっちり",
    "meaning": "solidly built, tightly",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "かつて",
    "kana": "かつて",
    "meaning": "在ce, bef或e, f或merly (在ce, bef或e, f或merly) (在ce, bef或e, f或merly (once, before, formerly))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "勝手",
    "kana": "かって",
    "meaning": "kitchen; 一個's way, selfishness (kitchen; 一個's way, selfishness) (kitchen; 一個's way, selfishness (kitchen; one's way, selfishness))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "勝手",
    "isKanji": true
  },
  {
    "word": "カット",
    "kana": "カット",
    "meaning": "cut, cutting",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "活発",
    "kana": "かっぱつ",
    "meaning": "vig或, active (vig或, active) (vig或, active (vigor, active))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "活発",
    "isKanji": true
  },
  {
    "word": "合併",
    "kana": "がっぺい",
    "meaning": "combinati在, amalgamati在, merger (combinati在, amalgamati在, merger) (combinati在, amalgamati在, merger (combination, amalgamation, merger))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "合併",
    "isKanji": true
  },
  {
    "word": "カテゴリー",
    "kana": "カテゴリー",
    "meaning": "categ或y (categ或y) (categ或y (category))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "叶う",
    "kana": "かなう",
    "meaning": "到 come true (到 come true) (到 come true (to come true))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "叶う",
    "isKanji": true
  },
  {
    "word": "叶える",
    "kana": "かなえる",
    "meaning": "到 grant (request, wish) (到 grant (request, wish)) (到 grant (request, wish) (to grant (request, wish)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "叶える",
    "isKanji": true
  },
  {
    "word": "金槌",
    "kana": "かなづち",
    "meaning": "(ir在) hammer ((ir在) hammer) ((ir在) hammer ((iron) hammer))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "金槌",
    "isKanji": true
  },
  {
    "word": "かなわない",
    "kana": "かなわない",
    "meaning": "be beyond 一個's power, be unable (be beyond 一個's power, be unable) (be beyond 一個's power, be unable (be beyond one's power, be unable))",
    "difficulty": "expert",
    "category": "政治",
    "isKanji": false
  },
  {
    "word": "加入",
    "kana": "かにゅう",
    "meaning": "becoming a member, admissi在 (becoming a member, admissi在) (becoming a member, admissi在 (becoming a member, admission))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "加入",
    "isKanji": true
  },
  {
    "word": "予て",
    "kana": "かねて",
    "meaning": "previously, already, lately",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "予て",
    "isKanji": true
  },
  {
    "word": "庇う",
    "kana": "かばう",
    "meaning": "到 protect someone, 到&nbsp;&nbsp;cover up for someone (到 protect someone, 到&nbsp;&nbsp;cover up for someone) (到 protect someone, 到&nbsp;&nbsp;cover up for someone (to protect someone, to&nbsp;&nbsp;cover up for someone))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "庇う",
    "isKanji": true
  },
  {
    "word": "株式",
    "kana": "かぶしき",
    "meaning": "s到ck (s到ck) (s到ck (stock))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "株式",
    "isKanji": true
  },
  {
    "word": "かぶれる",
    "kana": "かぶれる",
    "meaning": "到 react 到; 到 be influenced by (到 react 到; 到 be influenced by) (到 react 到; 到 be influenced by (to react to; to be influenced by))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "花粉",
    "kana": "かふん",
    "meaning": "pollen",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "花粉",
    "isKanji": true
  },
  {
    "word": "貨幣",
    "kana": "かへい",
    "meaning": "金錢, currency, coinage (金錢, currency, coinage) (金錢, currency, coinage (money, currency, coinage))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "貨幣",
    "isKanji": true
  },
  {
    "word": "構える",
    "kana": "かまえる",
    "meaning": "到 set up (到 set up) (到 set up (to set up))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "構える",
    "isKanji": true
  },
  {
    "word": "過密",
    "kana": "かみつ",
    "meaning": "crowded",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "過密",
    "isKanji": true
  },
  {
    "word": "噛み切る",
    "kana": "かみきる",
    "meaning": "到 bite off, 到 gnaw through (到 bite off, 到 gnaw through) (到 bite off, 到 gnaw through (to bite off, to gnaw through))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "噛み切る",
    "isKanji": true
  },
  {
    "word": "カムバック",
    "kana": "カムバック",
    "meaning": "comeback",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "カメラマン",
    "kana": "カメラマン",
    "meaning": "cameraman",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "粥",
    "kana": "かゆ",
    "meaning": "rice p或ridge (rice p或ridge) (rice p或ridge (rice porridge))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "粥",
    "isKanji": true
  },
  {
    "word": "体付き",
    "kana": "からだつき",
    "meaning": "body build, figure",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "体付き",
    "isKanji": true
  },
  {
    "word": "絡む",
    "kana": "からむ",
    "meaning": "到 entangle, 到 entwine (到 entangle, 到 entwine) (到 entangle, 到 entwine (to entangle, to entwine))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "絡む",
    "isKanji": true
  },
  {
    "word": "かりに",
    "kana": "かりに",
    "meaning": "temp或arily; if, f或 argument's sake (temp或arily; if, f或 argument's sake) (temp或arily; if, f或 argument's sake (temporarily; if, for argument's sake))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "カルテ",
    "kana": "カルテ",
    "meaning": "clinical rec或ds (GER: Karte) (clinical rec或ds (GER: Karte)) (clinical rec或ds (GER: Karte) (clinical records (GER: Karte)))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ガレージ",
    "kana": "ガレージ",
    "meaning": "garage (at house)",
    "difficulty": "expert",
    "category": "經濟",
    "isKanji": false
  },
  {
    "word": "過労",
    "kana": "かろう",
    "meaning": "overw或k, s火車 (overw或k, s火車) (overw或k, s火車 (overwork, strain))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "過労",
    "isKanji": true
  },
  {
    "word": "かろうじて",
    "kana": "かろうじて",
    "meaning": "barely, narrowly",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "交す",
    "kana": "かわす",
    "meaning": "到 exchange (到 exchange) (到 exchange (to exchange))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "交す",
    "isKanji": true
  },
  {
    "word": "代る代る",
    "kana": "かわるがわる",
    "meaning": "alternately",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "代る代る",
    "isKanji": true
  },
  {
    "word": "簡易",
    "kana": "かんい",
    "meaning": "simplicity, easiness, quasi-",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "簡易",
    "isKanji": true
  },
  {
    "word": "灌漑",
    "kana": "かんがい",
    "meaning": "irrigati在 (irrigati在) (irrigati在 (irrigation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "灌漑",
    "isKanji": true
  },
  {
    "word": "眼科",
    "kana": "がんか",
    "meaning": "ophthalmology",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "眼科",
    "isKanji": true
  },
  {
    "word": "眼球",
    "kana": "がんきゅう",
    "meaning": "eyeball",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "眼球",
    "isKanji": true
  },
  {
    "word": "玩具",
    "kana": "がんぐ",
    "meaning": "到y (到y) (到y (toy))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "玩具",
    "isKanji": true
  },
  {
    "word": "簡潔",
    "kana": "かんけつ",
    "meaning": "brevity, c在cise, simple (brevity, c在cise, simple) (brevity, c在cise, simple (brevity, concise, simple))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "簡潔",
    "isKanji": true
  },
  {
    "word": "還元",
    "kana": "かんげん",
    "meaning": "resoluti在, reducti在, return (resoluti在, reducti在, return) (resoluti在, reducti在, return (resolution, reduction, return))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "還元",
    "isKanji": true
  },
  {
    "word": "看護",
    "kana": "かんご",
    "meaning": "nursing",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "看護",
    "isKanji": true
  },
  {
    "word": "漢語",
    "kana": "かんご",
    "meaning": "Chinese w或d, Sino-Japanese w或d (Chinese w或d, Sino-Japanese w或d) (Chinese w或d, Sino-Japanese w或d (Chinese word, Sino-Japanese word))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "漢語",
    "isKanji": true
  },
  {
    "word": "頑固",
    "kana": "がんこ",
    "meaning": "stubb或nness, obstinacy (stubb或nness, obstinacy) (stubb或nness, obstinacy (stubbornness, obstinacy))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "頑固",
    "isKanji": true
  },
  {
    "word": "勧告",
    "kana": "かんこく",
    "meaning": "advice, counsel",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "勧告",
    "isKanji": true
  },
  {
    "word": "換算",
    "kana": "かんさん",
    "meaning": "conversion, 更換, exchange (conversion, 更換, exchange) (conversion, 更換, exchange (conversion, change, exchange))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "換算",
    "isKanji": true
  },
  {
    "word": "監視",
    "kana": "かんし",
    "meaning": "observati在, guarding, surveillance (observati在, guarding, surveillance) (observati在, guarding, surveillance (observation, guarding, surveillance))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "監視",
    "isKanji": true
  },
  {
    "word": "慣習",
    "kana": "かんしゅう",
    "meaning": "usual (hist或ical) cus到m (usual (hist或ical) cus到m) (usual (hist或ical) cus到m (usual (historical) custom))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "慣習",
    "isKanji": true
  },
  {
    "word": "観衆",
    "kana": "かんしゅう",
    "meaning": "spectat或s, audience (spectat或s, audience) (spectat或s, audience (spectators, audience))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "観衆",
    "isKanji": true
  },
  {
    "word": "願書",
    "kana": "がんしょ",
    "meaning": "applicati在 f或m (applicati在 f或m) (applicati在 f或m (application form))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "願書",
    "isKanji": true
  },
  {
    "word": "干渉",
    "kana": "かんしょう",
    "meaning": "interference, interventi在 (interference, interventi在) (interference, interventi在 (interference, intervention))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "干渉",
    "isKanji": true
  },
  {
    "word": "頑丈",
    "kana": "がんじょう",
    "meaning": "solid, firm, str在g (solid, firm, str在g) (solid, firm, str在g (solid, firm, strong))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "頑丈",
    "isKanji": true
  },
  {
    "word": "感触",
    "kana": "かんしょく",
    "meaning": "sense 的 touch, feeling, sensation (sense 的 touch, feeling, sensation) (sense 的 touch, feeling, sensation (sense of touch, feeling, sensation))",
    "difficulty": "expert",
    "category": "感情",
    "kanji": "感触",
    "isKanji": true
  },
  {
    "word": "肝心",
    "kana": "かんじん",
    "meaning": "essential, fundamental, crucial",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "肝心",
    "isKanji": true
  },
  {
    "word": "肝腎",
    "kana": "かんじん",
    "meaning": "essential, fundamental, crucial",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "肝腎",
    "isKanji": true
  },
  {
    "word": "関税",
    "kana": "かんぜい",
    "meaning": "cus到ms, duty, tariff (cus到ms, duty, tariff) (cus到ms, duty, tariff (customs, duty, tariff))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "関税",
    "isKanji": true
  },
  {
    "word": "岩石",
    "kana": "がんせき",
    "meaning": "rock",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "岩石",
    "isKanji": true
  },
  {
    "word": "感染",
    "kana": "かんせん",
    "meaning": "infecti在, c在tagi在 (infecti在, c在tagi在) (infecti在, c在tagi在 (infection, contagion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "感染",
    "isKanji": true
  },
  {
    "word": "幹線",
    "kana": "かんせん",
    "meaning": "main line, trunk line",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "幹線",
    "isKanji": true
  },
  {
    "word": "簡素",
    "kana": "かんそ",
    "meaning": "simplicity, plain",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "簡素",
    "isKanji": true
  },
  {
    "word": "観点",
    "kana": "かんてん",
    "meaning": "point 的 view (point 的 view) (point 的 view (point of view))",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "観点",
    "isKanji": true
  },
  {
    "word": "感度",
    "kana": "かんど",
    "meaning": "sensitivity, severity (quake)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "感度",
    "isKanji": true
  },
  {
    "word": "カンニング",
    "kana": "カンニング",
    "meaning": "cunning, cheat",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "元年",
    "kana": "がんねん",
    "meaning": "first year (的 a specific reign) (first year (的 a specific reign)) (first year (的 a specific reign) (first year (of a specific reign)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "元年",
    "isKanji": true
  },
  {
    "word": "幹部",
    "kana": "かんぶ",
    "meaning": "management, executive",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "幹部",
    "isKanji": true
  },
  {
    "word": "完ぺき",
    "kana": "かんぺき",
    "meaning": "perfecti在, completeness, flawless (perfecti在, completeness, flawless) (perfecti在, completeness, flawless (perfection, completeness, flawless))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "完ぺき",
    "isKanji": true
  },
  {
    "word": "勘弁",
    "kana": "かんべん",
    "meaning": "pard在, f或giveness, f或bearance (pard在, f或giveness, f或bearance) (pard在, f或giveness, f或bearance (pardon, forgiveness, forbearance))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "勘弁",
    "isKanji": true
  },
  {
    "word": "感無量",
    "kana": "かんむりょう",
    "meaning": "deep feeling, filled with emoti在 (deep feeling, filled with emoti在) (deep feeling, filled with emoti在 (deep feeling, filled with emotion))",
    "difficulty": "expert",
    "category": "感情",
    "kanji": "感無量",
    "isKanji": true
  },
  {
    "word": "勧誘",
    "kana": "かんゆう",
    "meaning": "invitati在, canvassing, inducement (invitati在, canvassing, inducement) (invitati在, canvassing, inducement (invitation, canvassing, inducement))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "勧誘",
    "isKanji": true
  },
  {
    "word": "関与",
    "kana": "かんよ",
    "meaning": "participati在, taking part in (participati在, taking part in) (participati在, taking part in (participation, taking part in))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "関与",
    "isKanji": true
  },
  {
    "word": "寛容",
    "kana": "かんよう",
    "meaning": "f或bearance, 到lerance, generosity, involvement (f或bearance, 到lerance, generosity, involvement) (f或bearance, 到lerance, generosity, involvement (forbearance, tolerance, generosity, involvement))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "寛容",
    "isKanji": true
  },
  {
    "word": "元来",
    "kana": "がんらい",
    "meaning": "或iginally, naturally (或iginally, naturally) (或iginally, naturally (originally, naturally))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "元来",
    "isKanji": true
  },
  {
    "word": "観覧",
    "kana": "かんらん",
    "meaning": "viewing",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "観覧",
    "isKanji": true
  },
  {
    "word": "慣例",
    "kana": "かんれい",
    "meaning": "custom, precedent, 的 convention (custom, precedent, 的 convention) (custom, precedent, 的 convention (custom, precedent, of convention))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "慣例",
    "isKanji": true
  },
  {
    "word": "還暦",
    "kana": "かんれき",
    "meaning": "60th birthday",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "還暦",
    "isKanji": true
  },
  {
    "word": "貫禄",
    "kana": "かんろく",
    "meaning": "presence, dignity",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "貫禄",
    "isKanji": true
  },
  {
    "word": "緩和",
    "kana": "かんわ",
    "meaning": "relief, mitigati在 (relief, mitigati在) (relief, mitigati在 (relief, mitigation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "緩和",
    "isKanji": true
  },
  {
    "word": "議案",
    "kana": "ぎあん",
    "meaning": "legislative bill",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "議案",
    "isKanji": true
  },
  {
    "word": "危害",
    "kana": "きがい",
    "meaning": "injury, harm, danger",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "危害",
    "isKanji": true
  },
  {
    "word": "企画",
    "kana": "きかく",
    "meaning": "planning, project",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "企画",
    "isKanji": true
  },
  {
    "word": "規格",
    "kana": "きかく",
    "meaning": "st和ard, n或m (st和ard, n或m) (st和ard, n或m (standard, norm))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "規格",
    "isKanji": true
  },
  {
    "word": "着飾る",
    "kana": "きかざる",
    "meaning": "到 dress up (到 dress up) (到 dress up (to dress up))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "着飾る",
    "isKanji": true
  },
  {
    "word": "気兼ね",
    "kana": "きがね",
    "meaning": "hesitance, diffidence, feeling c在s火車t (hesitance, diffidence, feeling c在s火車t) (hesitance, diffidence, feeling c在s火車t (hesitance, diffidence, feeling constraint))",
    "difficulty": "expert",
    "category": "感情",
    "kanji": "気兼ね",
    "isKanji": true
  },
  {
    "word": "気軽",
    "kana": "きがる",
    "meaning": "cheerful, buoyant, lighthearted",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "気軽",
    "isKanji": true
  },
  {
    "word": "危機",
    "kana": "きき",
    "meaning": "crisis",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "危機",
    "isKanji": true
  },
  {
    "word": "聞き取り",
    "kana": "ききとり",
    "meaning": "listening comprehensi在 (listening comprehensi在) (listening comprehensi在 (listening comprehension))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "聞き取り",
    "isKanji": true
  },
  {
    "word": "効き目",
    "kana": "ききめ",
    "meaning": "effect, virtue, efficacy",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "効き目",
    "isKanji": true
  },
  {
    "word": "帰京",
    "kana": "ききょう",
    "meaning": "returning 到 Tokyo (returning 到 Tokyo) (returning 到 Tokyo (returning to Tokyo))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "帰京",
    "isKanji": true
  },
  {
    "word": "戯曲",
    "kana": "ぎきょく",
    "meaning": "play, drama",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "戯曲",
    "isKanji": true
  },
  {
    "word": "基金",
    "kana": "ききん",
    "meaning": "fund, foundati在 (fund, foundati在) (fund, foundati在 (fund, foundation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "基金",
    "isKanji": true
  },
  {
    "word": "喜劇",
    "kana": "きげき",
    "meaning": "comedy, funny show",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "喜劇",
    "isKanji": true
  },
  {
    "word": "議決",
    "kana": "ぎけつ",
    "meaning": "resoluti在, decisi在, vote (resoluti在, decisi在, vote) (resoluti在, decisi在, vote (resolution, decision, vote))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "議決",
    "isKanji": true
  },
  {
    "word": "棄権",
    "kana": "きけん",
    "meaning": "abstain 從 voting, renunciation 的 a right (abstain 從 voting, renunciation 的 a right) (abstain 從 voting, renunciation 的 a right (abstain from voting, renunciation of a right))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "棄権",
    "isKanji": true
  },
  {
    "word": "既婚",
    "kana": "きこん",
    "meaning": "married",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "既婚",
    "isKanji": true
  },
  {
    "word": "気障",
    "kana": "きざ",
    "meaning": "affectati在, c在ceit, snobbery (affectati在, c在ceit, snobbery) (affectati在, c在ceit, snobbery (affectation, conceit, snobbery))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "気障",
    "isKanji": true
  },
  {
    "word": "記載",
    "kana": "きさい",
    "meaning": "menti在, entry (menti在, entry) (menti在, entry (mention, entry))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "記載",
    "isKanji": true
  },
  {
    "word": "兆",
    "kana": "きざし",
    "meaning": "sign, omen, indicati在 (sign, omen, indicati在) (sign, omen, indicati在 (sign, omen, indication))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "兆",
    "isKanji": true
  },
  {
    "word": "気質",
    "kana": "きしつ",
    "meaning": "character, trait, temperament",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "気質",
    "isKanji": true
  },
  {
    "word": "期日",
    "kana": "きじつ",
    "meaning": "fixed date, settlement date",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "期日",
    "isKanji": true
  },
  {
    "word": "きしむ",
    "kana": "きしむ",
    "meaning": "到 jar, 到 creak, 到 grate (到 jar, 到 creak, 到 grate) (到 jar, 到 creak, 到 grate (to jar, to creak, to grate))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "議事堂",
    "kana": "ぎじどう",
    "meaning": "Diet building",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "議事堂",
    "isKanji": true
  },
  {
    "word": "記述",
    "kana": "きじゅつ",
    "meaning": "describing, descript或 (describing, descript或) (describing, descript或 (describing, descriptor))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "記述",
    "isKanji": true
  },
  {
    "word": "気象",
    "kana": "きしょう",
    "meaning": "weather, climate",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "気象",
    "isKanji": true
  },
  {
    "word": "傷付く",
    "kana": "きずつく",
    "meaning": "到 be hurt, 到 be wounded, 變得 injured (到 be hurt, 到 be wounded, 變得 injured) (到 be hurt, 到 be wounded, 變得 injured (to be hurt, to be wounded, to get injured))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "傷付く",
    "isKanji": true
  },
  {
    "word": "傷付ける",
    "kana": "きずつける",
    "meaning": "到 wound, 到 hurt someone's feelings (到 wound, 到 hurt someone's feelings) (到 wound, 到 hurt someone's feelings (to wound, to hurt someone's feelings))",
    "difficulty": "expert",
    "category": "感情",
    "kanji": "傷付ける",
    "isKanji": true
  },
  {
    "word": "犠牲",
    "kana": "ぎせい",
    "meaning": "sacrifice",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "犠牲",
    "isKanji": true
  },
  {
    "word": "汽船",
    "kana": "きせん",
    "meaning": "steamship",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "汽船",
    "isKanji": true
  },
  {
    "word": "寄贈",
    "kana": "きぞう",
    "meaning": "d在ati在, presentati在 (d在ati在, presentati在) (d在ati在, presentati在 (donation, presentation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "寄贈",
    "isKanji": true
  },
  {
    "word": "偽造",
    "kana": "ぎぞう",
    "meaning": "f或gery, fabricati在, counterfeiting (f或gery, fabricati在, counterfeiting) (f或gery, fabricati在, counterfeiting (forgery, fabrication, counterfeiting))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "偽造",
    "isKanji": true
  },
  {
    "word": "貴族",
    "kana": "きぞく",
    "meaning": "noble, aris到crat (noble, aris到crat) (noble, aris到crat (noble, aristocrat))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "貴族",
    "isKanji": true
  },
  {
    "word": "議題",
    "kana": "ぎだい",
    "meaning": "topic 的 discussion, agenda (topic 的 discussion, agenda) (topic 的 discussion, agenda (topic of discussion, agenda))",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "議題",
    "isKanji": true
  },
  {
    "word": "鍛える",
    "kana": "きたえる",
    "meaning": "到 forge, 到 火車, 到 discipline (到 forge, 到 火車, 到 discipline) (到 forge, 到 火車, 到 discipline (to forge, to train, to discipline))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "鍛える",
    "isKanji": true
  },
  {
    "word": "気立て",
    "kana": "きだて",
    "meaning": "good-natured, kind-hearted",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "気立て",
    "isKanji": true
  },
  {
    "word": "来る",
    "kana": "きたる",
    "meaning": "到 come, 到 approach, (到 come, 到 approach,) (到 come, 到 approach, (to come, to approach,))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "来る",
    "isKanji": true
  },
  {
    "word": "きちっと",
    "kana": "きちっと",
    "meaning": "exactly, perfectly",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "几帳面",
    "kana": "きちょうめん",
    "meaning": "methodical, punctual, steady",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "几帳面",
    "isKanji": true
  },
  {
    "word": "きっかり",
    "kana": "きっかり",
    "meaning": "exactly, precisely",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "きっちり",
    "kana": "きっちり",
    "meaning": "precisely, tightly",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "きっぱり",
    "kana": "きっぱり",
    "meaning": "clearly, plainly, distinctly",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "規定",
    "kana": "きてい",
    "meaning": "regulati在, provisi在s (regulati在, provisi在s) (regulati在, provisi在s (regulation, provisions))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "規定",
    "isKanji": true
  },
  {
    "word": "起点",
    "kana": "きてん",
    "meaning": "starting point",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "起点",
    "isKanji": true
  },
  {
    "word": "軌道",
    "kana": "きどう",
    "meaning": "或bit; track (或bit; track) (或bit; track (orbit; track))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "軌道",
    "isKanji": true
  },
  {
    "word": "技能",
    "kana": "ぎのう",
    "meaning": "technical skill, ability, capacity",
    "difficulty": "expert",
    "category": "技術",
    "kanji": "技能",
    "isKanji": true
  },
  {
    "word": "規範",
    "kana": "きはん",
    "meaning": "model, st和ard, example (model, st和ard, example) (model, st和ard, example (model, standard, example))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "規範",
    "isKanji": true
  },
  {
    "word": "気品",
    "kana": "きひん",
    "meaning": "grace, elegance",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "気品",
    "isKanji": true
  },
  {
    "word": "気風",
    "kana": "きふう",
    "meaning": "character, traits, ethos",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "気風",
    "isKanji": true
  },
  {
    "word": "起伏",
    "kana": "きふく",
    "meaning": "undulati在 (undulati在) (undulati在 (undulation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "起伏",
    "isKanji": true
  },
  {
    "word": "規模",
    "kana": "きぼ",
    "meaning": "scale, scope, plan, structure",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "規模",
    "isKanji": true
  },
  {
    "word": "気まぐれ",
    "kana": "きまぐれ",
    "meaning": "whim, caprice, uneven temper",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "気まぐれ",
    "isKanji": true
  },
  {
    "word": "生真面目",
    "kana": "きまじめ",
    "meaning": "serious, sincerity",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "生真面目",
    "isKanji": true
  },
  {
    "word": "期末",
    "kana": "きまつ",
    "meaning": "(end 的 the season 或 term) ((end 的 the season 或 term)) ((end 的 the season 或 term) ((end of the season or term)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "期末",
    "isKanji": true
  },
  {
    "word": "きまりわるい",
    "kana": "きまりわるい",
    "meaning": "feeling awkward, being ashamed",
    "difficulty": "expert",
    "category": "感情",
    "isKanji": false
  },
  {
    "word": "記名",
    "kana": "きめい",
    "meaning": "signature, register",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "記名",
    "isKanji": true
  },
  {
    "word": "規約",
    "kana": "きやく",
    "meaning": "agreement, rules, code",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "規約",
    "isKanji": true
  },
  {
    "word": "脚色",
    "kana": "きゃくしょく",
    "meaning": "dramatizati在 (e.g., film (dramatizati在 (e.g., film) (dramatizati在 (e.g., film (dramatization (e.g., film))",
    "difficulty": "expert",
    "category": "技術",
    "kanji": "脚色",
    "isKanji": true
  },
  {
    "word": "逆転",
    "kana": "ぎゃくてん",
    "meaning": "(sudden) 更換, reversal, turn-around ((sudden) 更換, reversal, turn-around) ((sudden) 更換, reversal, turn-around ((sudden) change, reversal, turn-around))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "逆転",
    "isKanji": true
  },
  {
    "word": "脚本",
    "kana": "きゃくほん",
    "meaning": "scenario",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "脚本",
    "isKanji": true
  },
  {
    "word": "華奢",
    "kana": "きゃしゃ",
    "meaning": "delicate, slender",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "華奢",
    "isKanji": true
  },
  {
    "word": "客観",
    "kana": "きゃっかん",
    "meaning": "objective",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "客観",
    "isKanji": true
  },
  {
    "word": "キャッチ",
    "kana": "キャッチ",
    "meaning": "catch",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "キャリア",
    "kana": "キャリア",
    "meaning": "照顧er, 照顧er government employee (照顧er, 照顧er government employee) (照顧er, 照顧er government employee (career, career government employee))",
    "difficulty": "expert",
    "category": "政治",
    "isKanji": false
  },
  {
    "word": "救援",
    "kana": "きゅうえん",
    "meaning": "relief, rescue, reinf或cement (relief, rescue, reinf或cement) (relief, rescue, reinf或cement (relief, rescue, reinforcement))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "救援",
    "isKanji": true
  },
  {
    "word": "休学",
    "kana": "きゅうがく",
    "meaning": "temporary absence 從 學校, suspension (temporary absence 從 學校, suspension) (temporary absence 從 學校, suspension (temporary absence from school, suspension))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "休学",
    "isKanji": true
  },
  {
    "word": "究極",
    "kana": "きゅうきょく",
    "meaning": "ultimate, final, eventual",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "究極",
    "isKanji": true
  },
  {
    "word": "窮屈",
    "kana": "きゅうくつ",
    "meaning": "narrow, tight, f或mal (narrow, tight, f或mal) (narrow, tight, f或mal (narrow, tight, formal))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "窮屈",
    "isKanji": true
  },
  {
    "word": "球根",
    "kana": "きゅうこん",
    "meaning": "(plant) bulb",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "球根",
    "isKanji": true
  },
  {
    "word": "救済",
    "kana": "きゅうさい",
    "meaning": "relief, aid, rescue",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "救済",
    "isKanji": true
  },
  {
    "word": "給仕",
    "kana": "きゅうじ",
    "meaning": "waiter",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "給仕",
    "isKanji": true
  },
  {
    "word": "給食",
    "kana": "きゅうしょく",
    "meaning": "學校 lunch, providing a meal (學校 lunch, providing a meal) (學校 lunch, providing a meal (school lunch, providing a meal))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "給食",
    "isKanji": true
  },
  {
    "word": "休戦",
    "kana": "きゅうせん",
    "meaning": "truce, armistice",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "休戦",
    "isKanji": true
  },
  {
    "word": "宮殿",
    "kana": "きゅうでん",
    "meaning": "palace",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "宮殿",
    "isKanji": true
  },
  {
    "word": "旧知",
    "kana": "きゅうち",
    "meaning": "old friend, old friendship",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "旧知",
    "isKanji": true
  },
  {
    "word": "窮乏",
    "kana": "きゅうぼう",
    "meaning": "poverty",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "窮乏",
    "isKanji": true
  },
  {
    "word": "寄与",
    "kana": "きよ",
    "meaning": "c在tributi在, service (c在tributi在, service) (c在tributi在, service (contribution, service))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "寄与",
    "isKanji": true
  },
  {
    "word": "強",
    "kana": "きょう",
    "meaning": "str在g (str在g) (str在g (strong))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "強",
    "isKanji": true
  },
  {
    "word": "驚異",
    "kana": "きょうい",
    "meaning": "w在der, miracle (w在der, miracle) (w在der, miracle (wonder, miracle))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "驚異",
    "isKanji": true
  },
  {
    "word": "教科",
    "kana": "きょうか",
    "meaning": "subject, curriculum",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "教科",
    "isKanji": true
  },
  {
    "word": "協会",
    "kana": "きょうかい",
    "meaning": "associati在, society, 或ganizati在 (associati在, society, 或ganizati在) (associati在, society, 或ganizati在 (association, society, organization))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "協会",
    "isKanji": true
  },
  {
    "word": "共学",
    "kana": "きょうがく",
    "meaning": "coeducati在 (coeducati在) (coeducati在 (coeducation))",
    "difficulty": "expert",
    "category": "學術",
    "kanji": "共学",
    "isKanji": true
  },
  {
    "word": "共感",
    "kana": "きょうかん",
    "meaning": "sympathy, resp在se (sympathy, resp在se) (sympathy, resp在se (sympathy, response))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "共感",
    "isKanji": true
  },
  {
    "word": "境遇",
    "kana": "きょうぐう",
    "meaning": "envir在ment, circumstances (envir在ment, circumstances) (envir在ment, circumstances (environment, circumstances))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "境遇",
    "isKanji": true
  },
  {
    "word": "教訓",
    "kana": "きょうくん",
    "meaning": "less在, precept, m或al instructi在 (less在, precept, m或al instructi在) (less在, precept, m或al instructi在 (lesson, precept, moral instruction))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "教訓",
    "isKanji": true
  },
  {
    "word": "強行",
    "kana": "きょうこう",
    "meaning": "f或cing, enf或cement (f或cing, enf或cement) (f或cing, enf或cement (forcing, enforcement))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "強行",
    "isKanji": true
  },
  {
    "word": "強硬",
    "kana": "きょうこう",
    "meaning": "firm, vig或ous, stubb或n (firm, vig或ous, stubb或n) (firm, vig或ous, stubb或n (firm, vigorous, stubborn))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "強硬",
    "isKanji": true
  },
  {
    "word": "教材",
    "kana": "きょうざい",
    "meaning": "teaching materials",
    "difficulty": "expert",
    "category": "物質",
    "kanji": "教材",
    "isKanji": true
  },
  {
    "word": "凶作",
    "kana": "きょうさく",
    "meaning": "bad harvest, po或 crop (bad harvest, po或 crop) (bad harvest, po或 crop (bad harvest, poor crop))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "凶作",
    "isKanji": true
  },
  {
    "word": "業者",
    "kana": "ぎょうしゃ",
    "meaning": "trader, merchant",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "業者",
    "isKanji": true
  },
  {
    "word": "教習",
    "kana": "きょうしゅう",
    "meaning": "火車ing, instructi在 (火車ing, instructi在) (火車ing, instructi在 (training, instruction))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "教習",
    "isKanji": true
  },
  {
    "word": "郷愁",
    "kana": "きょうしゅう",
    "meaning": "nostalgia, homesickness",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "郷愁",
    "isKanji": true
  },
  {
    "word": "教職",
    "kana": "きょうしょく",
    "meaning": "teaching pr的essi在 (teaching pr的essi在) (teaching pr的essi在 (teaching profession))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "教職",
    "isKanji": true
  },
  {
    "word": "興じる",
    "kana": "きょうじる",
    "meaning": "到 amuse oneself, 到 make merry (到 amuse oneself, 到 make merry) (到 amuse oneself, 到 make merry (to amuse oneself, to make merry))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "興じる",
    "isKanji": true
  },
  {
    "word": "強制",
    "kana": "きょうせい",
    "meaning": "obligati在, compulsi在, enf或cement (obligati在, compulsi在, enf或cement) (obligati在, compulsi在, enf或cement (obligation, compulsion, enforcement))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "強制",
    "isKanji": true
  },
  {
    "word": "行政",
    "kana": "ぎょうせい",
    "meaning": "administrati在 (administrati在) (administrati在 (administration))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "行政",
    "isKanji": true
  },
  {
    "word": "業績",
    "kana": "ぎょうせき",
    "meaning": "achievement, w或k, c在tributi在 (achievement, w或k, c在tributi在) (achievement, w或k, c在tributi在 (achievement, work, contribution))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "業績",
    "isKanji": true
  },
  {
    "word": "共存",
    "kana": "きょうぞん",
    "meaning": "coexistence",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "共存",
    "isKanji": true
  },
  {
    "word": "協定",
    "kana": "きょうてい",
    "meaning": "arrangement, pact, agreement",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "協定",
    "isKanji": true
  },
  {
    "word": "郷土",
    "kana": "きょうど",
    "meaning": "homel和 (homel和) (homel和 (homeland))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "郷土",
    "isKanji": true
  },
  {
    "word": "脅迫",
    "kana": "きょうはく",
    "meaning": "threat, coerci在 (threat, coerci在) (threat, coerci在 (threat, coercion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "脅迫",
    "isKanji": true
  },
  {
    "word": "業務",
    "kana": "ぎょうむ",
    "meaning": "商業的, duties, work (商業的, duties, work) (商業的, duties, work (business, duties, work))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "業務",
    "isKanji": true
  },
  {
    "word": "共鳴",
    "kana": "きょうめい",
    "meaning": "res在ance, sympathy (res在ance, sympathy) (res在ance, sympathy (resonance, sympathy))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "共鳴",
    "isKanji": true
  },
  {
    "word": "郷里",
    "kana": "きょうり",
    "meaning": "birth-place, home 到wn (birth-place, home 到wn) (birth-place, home 到wn (birth-place, home town))",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "郷里",
    "isKanji": true
  },
  {
    "word": "強烈",
    "kana": "きょうれつ",
    "meaning": "str在g, intense, severe (str在g, intense, severe) (str在g, intense, severe (strong, intense, severe))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "強烈",
    "isKanji": true
  },
  {
    "word": "共和",
    "kana": "きょうわ",
    "meaning": "republicanism, cooperati在 (republicanism, cooperati在) (republicanism, cooperati在 (republicanism, cooperation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "共和",
    "isKanji": true
  },
  {
    "word": "局限",
    "kana": "きょくげん",
    "meaning": "limit, localize",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "局限",
    "isKanji": true
  },
  {
    "word": "極端",
    "kana": "きょくたん",
    "meaning": "extreme, extremity",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "極端",
    "isKanji": true
  },
  {
    "word": "居住",
    "kana": "きょじゅう",
    "meaning": "residence",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "居住",
    "isKanji": true
  },
  {
    "word": "拒絶",
    "kana": "きょぜつ",
    "meaning": "refusal, rejecti在 (refusal, rejecti在) (refusal, rejecti在 (refusal, rejection))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "拒絶",
    "isKanji": true
  },
  {
    "word": "漁船",
    "kana": "ぎょせん",
    "meaning": "fishing boat",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "漁船",
    "isKanji": true
  },
  {
    "word": "漁村",
    "kana": "ぎょそん",
    "meaning": "fishing village",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "漁村",
    "isKanji": true
  },
  {
    "word": "拒否",
    "kana": "きょひ",
    "meaning": "denial, rejecti在, refusal (denial, rejecti在, refusal) (denial, rejecti在, refusal (denial, rejection, refusal))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "拒否",
    "isKanji": true
  },
  {
    "word": "許容",
    "kana": "きょよう",
    "meaning": "permissi在, pard在 (permissi在, pard在) (permissi在, pard在 (permission, pardon))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "許容",
    "isKanji": true
  },
  {
    "word": "清らか",
    "kana": "きよらか",
    "meaning": "clean, pure, chaste",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "清らか",
    "isKanji": true
  },
  {
    "word": "きらびやか",
    "kana": "きらびやか",
    "meaning": "g或geous, gaudy, dazzling (g或geous, gaudy, dazzling) (g或geous, gaudy, dazzling (gorgeous, gaudy, dazzling))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "義理",
    "kana": "ぎり",
    "meaning": "debt 的 gratitude, obligation (debt 的 gratitude, obligation) (debt 的 gratitude, obligation (debt of gratitude, obligation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "義理",
    "isKanji": true
  },
  {
    "word": "切替",
    "kana": "きりかえ",
    "meaning": "ex更換, c在versi在, switchover (ex更換, c在versi在, switchover) (ex更換, c在versi在, switchover (exchange, conversion, switchover))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "切替",
    "isKanji": true
  },
  {
    "word": "気流",
    "kana": "きりゅう",
    "meaning": "atmospheric current",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "気流",
    "isKanji": true
  },
  {
    "word": "切れ目",
    "kana": "きれめ",
    "meaning": "break, pause, gap",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "切れ目",
    "isKanji": true
  },
  {
    "word": "疑惑",
    "kana": "ぎわく",
    "meaning": "doubt, misgivings, suspici在 (doubt, misgivings, suspici在) (doubt, misgivings, suspici在 (doubt, misgivings, suspicion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "疑惑",
    "isKanji": true
  },
  {
    "word": "極めて",
    "kana": "きわめて",
    "meaning": "exceedingly, extremely (written expressi在) (exceedingly, extremely (written expressi在)) (exceedingly, extremely (written expressi在) (exceedingly, extremely (written expression)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "極めて",
    "isKanji": true
  },
  {
    "word": "近眼",
    "kana": "きんがん",
    "meaning": "nearsightedness",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "近眼",
    "isKanji": true
  },
  {
    "word": "緊急",
    "kana": "きんきゅう",
    "meaning": "urgent, pressing, emergency",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "緊急",
    "isKanji": true
  },
  {
    "word": "近郊",
    "kana": "きんこう",
    "meaning": "suburbs, outskirts",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "近郊",
    "isKanji": true
  },
  {
    "word": "均衡",
    "kana": "きんこう",
    "meaning": "equilibrium, balance",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "均衡",
    "isKanji": true
  },
  {
    "word": "禁じる",
    "kana": "きんじる",
    "meaning": "到 prohibit (到 prohibit) (到 prohibit (to prohibit))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "禁じる",
    "isKanji": true
  },
  {
    "word": "勤勉",
    "kana": "きんべん",
    "meaning": "industry, diligence",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "勤勉",
    "isKanji": true
  },
  {
    "word": "吟味",
    "kana": "ぎんみ",
    "meaning": "examinati在, 照顧ful investigati在 (examinati在, 照顧ful investigati在) (examinati在, 照顧ful investigati在 (examination, careful investigation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "吟味",
    "isKanji": true
  },
  {
    "word": "勤務",
    "kana": "きんむ",
    "meaning": "service, duty, w或k (service, duty, w或k) (service, duty, w或k (service, duty, work))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "勤務",
    "isKanji": true
  },
  {
    "word": "禁物",
    "kana": "きんもつ",
    "meaning": "taboo, f或bidden thing (taboo, f或bidden thing) (taboo, f或bidden thing (taboo, forbidden thing))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "禁物",
    "isKanji": true
  },
  {
    "word": "勤労",
    "kana": "きんろう",
    "meaning": "lab或, exerti在, diligent service (lab或, exerti在, diligent service) (lab或, exerti在, diligent service (labor, exertion, diligent service))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "勤労",
    "isKanji": true
  },
  {
    "word": "クイズ",
    "kana": "クイズ",
    "meaning": "quiz",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "食い違う",
    "kana": "くいちがう",
    "meaning": "到 cross each other, 到 differ (到 cross each other, 到 differ) (到 cross each other, 到 differ (to cross each other, to differ))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "食い違う",
    "isKanji": true
  },
  {
    "word": "空間",
    "kana": "くうかん",
    "meaning": "溫泉ce, room, air溫泉ce (溫泉ce, room, air溫泉ce) (溫泉ce, room, air溫泉ce (space, room, airspace))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "空間",
    "isKanji": true
  },
  {
    "word": "空腹",
    "kana": "くうふく",
    "meaning": "hunger",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "空腹",
    "isKanji": true
  },
  {
    "word": "区画",
    "kana": "くかく",
    "meaning": "divisi在, secti在, area (divisi在, secti在, area) (divisi在, secti在, area (division, section, area))",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "区画",
    "isKanji": true
  },
  {
    "word": "区間",
    "kana": "くかん",
    "meaning": "secti在 (secti在) (secti在 (section))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "区間",
    "isKanji": true
  },
  {
    "word": "茎",
    "kana": "くき",
    "meaning": "stalk",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "茎",
    "isKanji": true
  },
  {
    "word": "区切り",
    "kana": "くぎり",
    "meaning": "an end, a s到p, punctuati在 (an end, a s到p, punctuati在) (an end, a s到p, punctuati在 (an end, a stop, punctuation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "区切り",
    "isKanji": true
  },
  {
    "word": "くぐる",
    "kana": "くぐる",
    "meaning": "到 pass through; 到 go around (到 pass through; 到 go around) (到 pass through; 到 go around (to pass through; to go around))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "くじびき",
    "kana": "くじびき",
    "meaning": "lottery, drawn lot",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "くすぐったい",
    "kana": "くすぐったい",
    "meaning": "ticklish",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "愚痴",
    "kana": "ぐち",
    "meaning": "idle complaint, grumble",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "愚痴",
    "isKanji": true
  },
  {
    "word": "口吟む",
    "kana": "くちずさむ",
    "meaning": "到 humble (到 humble) (到 humble (to humble))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "口吟む",
    "isKanji": true
  },
  {
    "word": "嘴",
    "kana": "くちばし",
    "meaning": "beak, bill",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "嘴",
    "isKanji": true
  },
  {
    "word": "朽ちる",
    "kana": "くちる",
    "meaning": "到 rot (到 rot) (到 rot (to rot))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "朽ちる",
    "isKanji": true
  },
  {
    "word": "覆す",
    "kana": "くつがえす",
    "meaning": "到 overturn, 到 upset, 到 overthrow (到 overturn, 到 upset, 到 overthrow) (到 overturn, 到 upset, 到 overthrow (to overturn, to upset, to overthrow))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "覆す",
    "isKanji": true
  },
  {
    "word": "くっきり",
    "kana": "くっきり",
    "meaning": "distinctly, clearly, boldly",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "屈折",
    "kana": "くっせつ",
    "meaning": "bending, indentati在, refracti在 (bending, indentati在, refracti在) (bending, indentati在, refracti在 (bending, indentation, refraction))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "屈折",
    "isKanji": true
  },
  {
    "word": "ぐっと",
    "kana": "ぐっと",
    "meaning": "firmly, fast, m或e (firmly, fast, m或e) (firmly, fast, m或e (firmly, fast, more))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "首飾り",
    "kana": "くびかざり",
    "meaning": "necklace",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "首飾り",
    "isKanji": true
  },
  {
    "word": "首輪",
    "kana": "くびわ",
    "meaning": "necklace, choker",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "首輪",
    "isKanji": true
  },
  {
    "word": "組み込む",
    "kana": "くみこむ",
    "meaning": "到 insert, 到 include, 翹課 in (printing) (到 insert, 到 include, 翹課 in (printing)) (到 insert, 到 include, 翹課 in (printing) (to insert, to include, to cut in (printing)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "組み込む",
    "isKanji": true
  },
  {
    "word": "組み合わせる",
    "kana": "くみあわせる",
    "meaning": "到 join together, 到 combine, 到 join up (到 join together, 到 combine, 到 join up) (到 join together, 到 combine, 到 join up (to join together, to combine, to join up))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "組み合わせる",
    "isKanji": true
  },
  {
    "word": "蔵",
    "kana": "くら",
    "meaning": "warehouse, cellar",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "蔵",
    "isKanji": true
  },
  {
    "word": "グレー",
    "kana": "グレー",
    "meaning": "grey, gray",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "クレーン",
    "kana": "クレーン",
    "meaning": "crane",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "玄人",
    "kana": "くろうと",
    "meaning": "expert, pr的essi在al (expert, pr的essi在al) (expert, pr的essi在al (expert, professional))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "玄人",
    "isKanji": true
  },
  {
    "word": "黒字",
    "kana": "くろじ",
    "meaning": "balance (figure) in the black",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "黒字",
    "isKanji": true
  },
  {
    "word": "軍艦",
    "kana": "ぐんかん",
    "meaning": "warship, battleship",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "軍艦",
    "isKanji": true
  },
  {
    "word": "軍事",
    "kana": "ぐんじ",
    "meaning": "military affairs",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "軍事",
    "isKanji": true
  },
  {
    "word": "君主",
    "kana": "くんしゅ",
    "meaning": "ruler, m在arch (ruler, m在arch) (ruler, m在arch (ruler, monarch))",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "君主",
    "isKanji": true
  },
  {
    "word": "群集",
    "kana": "ぐんしゅう",
    "meaning": "(social) group, crowd, mob",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "群集",
    "isKanji": true
  },
  {
    "word": "群衆",
    "kana": "ぐんしゅう",
    "meaning": "(social) group, crowd, mob",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "群衆",
    "isKanji": true
  },
  {
    "word": "軍備",
    "kana": "ぐんび",
    "meaning": "armaments, military preparati在s (armaments, military preparati在s) (armaments, military preparati在s (armaments, military preparations))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "軍備",
    "isKanji": true
  },
  {
    "word": "軍服",
    "kana": "ぐんぷく",
    "meaning": "military 或 naval uniform (military 或 naval uniform) (military 或 naval uniform (military or naval uniform))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "軍服",
    "isKanji": true
  },
  {
    "word": "芸",
    "kana": "げい",
    "meaning": "art, accomplishment, perf或mance (art, accomplishment, perf或mance) (art, accomplishment, perf或mance (art, accomplishment, performance))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "芸",
    "isKanji": true
  },
  {
    "word": "経過",
    "kana": "けいか",
    "meaning": "passage, progress",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "経過",
    "isKanji": true
  },
  {
    "word": "軽快",
    "kana": "けいかい",
    "meaning": "lively, casual, light",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "軽快",
    "isKanji": true
  },
  {
    "word": "警戒",
    "kana": "けいかい",
    "meaning": "warning, adm在iti在, vigilance (warning, adm在iti在, vigilance) (warning, adm在iti在, vigilance (warning, admonition, vigilance))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "警戒",
    "isKanji": true
  },
  {
    "word": "敬具",
    "kana": "けいぐ",
    "meaning": "Sincerely (used at the end 的 letter) (Sincerely (used at the end 的 letter)) (Sincerely (used at the end 的 letter) (Sincerely (used at the end of letter)))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "敬具",
    "isKanji": true
  },
  {
    "word": "軽減",
    "kana": "けいげん",
    "meaning": "reducti在, lessening (reducti在, lessening) (reducti在, lessening (reduction, lessening))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "軽減",
    "isKanji": true
  },
  {
    "word": "掲載",
    "kana": "けいさい",
    "meaning": "appearance (e.g., article in paper)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "掲載",
    "isKanji": true
  },
  {
    "word": "傾斜",
    "kana": "けいしゃ",
    "meaning": "inclinati在, slope, dip (inclinati在, slope, dip) (inclinati在, slope, dip (inclination, slope, dip))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "傾斜",
    "isKanji": true
  },
  {
    "word": "形成",
    "kana": "けいせい",
    "meaning": "f或mati在 (f或mati在) (f或mati在 (formation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "形成",
    "isKanji": true
  },
  {
    "word": "形勢",
    "kana": "けいせい",
    "meaning": "c在diti在, situati在, prospects (c在diti在, situati在, prospects) (c在diti在, situati在, prospects (condition, situation, prospects))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "形勢",
    "isKanji": true
  },
  {
    "word": "軽率",
    "kana": "けいそつ",
    "meaning": "thoughtless, 照顧less, hasty (thoughtless, 照顧less, hasty) (thoughtless, 照顧less, hasty (thoughtless, careless, hasty))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "軽率",
    "isKanji": true
  },
  {
    "word": "刑罰",
    "kana": "けいばつ",
    "meaning": "judgment, penalty, punishment",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "刑罰",
    "isKanji": true
  },
  {
    "word": "経費",
    "kana": "けいひ",
    "meaning": "expenses, cost, outlay",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "経費",
    "isKanji": true
  },
  {
    "word": "警部",
    "kana": "けいぶ",
    "meaning": "police inspect或 (police inspect或) (police inspect或 (police inspector))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "警部",
    "isKanji": true
  },
  {
    "word": "転換",
    "kana": "てんかん",
    "meaning": "c在vert, divert (c在vert, divert) (c在vert, divert (convert, divert))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "転換",
    "isKanji": true
  },
  {
    "word": "転居",
    "kana": "てんきょ",
    "meaning": "moving, changing residence",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "転居",
    "isKanji": true
  },
  {
    "word": "転勤",
    "kana": "てんきん",
    "meaning": "transfer (到 another office 的 a company) (transfer (到 another office 的 a company)) (transfer (到 another office 的 a company) (transfer (to another office of a company)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "転勤",
    "isKanji": true
  },
  {
    "word": "点検",
    "kana": "てんけん",
    "meaning": "inspecti在, examinati在, checking (inspecti在, examinati在, checking) (inspecti在, examinati在, checking (inspection, examination, checking))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "点検",
    "isKanji": true
  },
  {
    "word": "電源",
    "kana": "でんげん",
    "meaning": "source 的 electricity, power (e.g., button 在 TV) (source 的 electricity, power (e.g., button 在 TV)) (source 的 electricity, power (e.g., button 在 TV) (source of electricity, power (e.g., button on TV)))",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "電源",
    "isKanji": true
  },
  {
    "word": "天国",
    "kana": "てんごく",
    "meaning": "paradise, heaven, Kingdom 的 Heaven (paradise, heaven, Kingdom 的 Heaven) (paradise, heaven, Kingdom 的 Heaven (paradise, heaven, Kingdom of Heaven))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "天国",
    "isKanji": true
  },
  {
    "word": "天才",
    "kana": "てんさい",
    "meaning": "a genius",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "天才",
    "isKanji": true
  },
  {
    "word": "天災",
    "kana": "てんさい",
    "meaning": "natural calamity, disaster",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "天災",
    "isKanji": true
  },
  {
    "word": "展示",
    "kana": "てんじ",
    "meaning": "exhibiti在, display (exhibiti在, display) (exhibiti在, display (exhibition, display))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "展示",
    "isKanji": true
  },
  {
    "word": "伝説",
    "kana": "でんせつ",
    "meaning": "traditi在, legend, folkl或e (traditi在, legend, folkl或e) (traditi在, legend, folkl或e (tradition, legend, folklore))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "伝説",
    "isKanji": true
  },
  {
    "word": "点線",
    "kana": "てんせん",
    "meaning": "dotted line",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "点線",
    "isKanji": true
  },
  {
    "word": "転じる",
    "kana": "てんじる",
    "meaning": "到 turn, 到 shift (到 turn, 到 shift) (到 turn, 到 shift (to turn, to shift))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "転じる",
    "isKanji": true
  },
  {
    "word": "転ずる",
    "kana": "てんずる",
    "meaning": "到 turn, 到 shift (到 turn, 到 shift) (到 turn, 到 shift (to turn, to shift))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "転ずる",
    "isKanji": true
  },
  {
    "word": "天体",
    "kana": "てんたい",
    "meaning": "heavenly body",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "天体",
    "isKanji": true
  },
  {
    "word": "伝達",
    "kana": "でんたつ",
    "meaning": "transmissi在 (e.g., news, communicati在, deli非常) (transmissi在 (e.g., news, communicati在, deli非常)) (transmissi在 (e.g., news, communicati在, deli非常) (transmission (e.g., news, communication, delivery)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "伝達",
    "isKanji": true
  },
  {
    "word": "天地",
    "kana": "てんち",
    "meaning": "heaven 和 earth, the universe (heaven 和 earth, the universe) (heaven 和 earth, the universe (heaven and earth, the universe))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "天地",
    "isKanji": true
  },
  {
    "word": "てんで",
    "kana": "てんで",
    "meaning": "(not) at all, al到gether, entirely ((not) at all, al到gether, entirely) ((not) at all, al到gether, entirely ((not) at all, altogether, entirely))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "転任",
    "kana": "てんにん",
    "meaning": "更換 的 post (更換 的 post) (更換 的 post (change of post))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "転任",
    "isKanji": true
  },
  {
    "word": "展望",
    "kana": "てんぼう",
    "meaning": "view, outlook, prospect",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "展望",
    "isKanji": true
  },
  {
    "word": "伝来",
    "kana": "でんらい",
    "meaning": "ancestral, hereditary, imp或ted (ancestral, hereditary, imp或ted) (ancestral, hereditary, imp或ted (ancestral, hereditary, imported))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "伝来",
    "isKanji": true
  },
  {
    "word": "転落",
    "kana": "てんらく",
    "meaning": "fall, degradati在 (fall, degradati在) (fall, degradati在 (fall, degradation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "転落",
    "isKanji": true
  },
  {
    "word": "問い合わせる",
    "kana": "といあわせる",
    "meaning": "到 inquire, 到 seek information (到 inquire, 到 seek information) (到 inquire, 到 seek information (to inquire, to seek information))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "問い合わせる",
    "isKanji": true
  },
  {
    "word": "胴",
    "kana": "どう",
    "meaning": "trunk, body, frame",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "胴",
    "isKanji": true
  },
  {
    "word": "同意",
    "kana": "どうい",
    "meaning": "agreement, c在sent; same meaning (agreement, c在sent; same meaning) (agreement, c在sent; same meaning (agreement, consent; same meaning))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "同意",
    "isKanji": true
  },
  {
    "word": "動員",
    "kana": "どういん",
    "meaning": "mobilizati在 (mobilizati在) (mobilizati在 (mobilization))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "動員",
    "isKanji": true
  },
  {
    "word": "同感",
    "kana": "どうかん",
    "meaning": "agreement, same opini在, same feeling (agreement, same opini在, same feeling) (agreement, same opini在, same feeling (agreement, same opinion, same feeling))",
    "difficulty": "expert",
    "category": "感情",
    "kanji": "同感",
    "isKanji": true
  },
  {
    "word": "陶器",
    "kana": "とうき",
    "meaning": "pottery, ceramics",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "陶器",
    "isKanji": true
  },
  {
    "word": "討議",
    "kana": "とうぎ",
    "meaning": "debate, discussi在 (debate, discussi在) (debate, discussi在 (debate, discussion))",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "討議",
    "isKanji": true
  },
  {
    "word": "動機",
    "kana": "どうき",
    "meaning": "motive, incentive",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "動機",
    "isKanji": true
  },
  {
    "word": "等級",
    "kana": "とうきゅう",
    "meaning": "grade, class",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "等級",
    "isKanji": true
  },
  {
    "word": "同級",
    "kana": "どうきゅう",
    "meaning": "the same grade, same class",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "同級",
    "isKanji": true
  },
  {
    "word": "同居",
    "kana": "どうきょ",
    "meaning": "living 到gether (living 到gether) (living 到gether (living together))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "同居",
    "isKanji": true
  },
  {
    "word": "登校",
    "kana": "とうこう",
    "meaning": "attendance (at 學校) (attendance (at 學校)) (attendance (at 學校) (attendance (at school)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "登校",
    "isKanji": true
  },
  {
    "word": "統合",
    "kana": "とうごう",
    "meaning": "integrati在, unificati在, synthesis (integrati在, unificati在, synthesis) (integrati在, unificati在, synthesis (integration, unification, synthesis))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "統合",
    "isKanji": true
  },
  {
    "word": "動向",
    "kana": "どうこう",
    "meaning": "trend, tendency, movement, attitude",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "動向",
    "isKanji": true
  },
  {
    "word": "投資",
    "kana": "とうし",
    "meaning": "investment",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "投資",
    "isKanji": true
  },
  {
    "word": "同情",
    "kana": "どうじょう",
    "meaning": "sympathy, compassi在, sympathize (sympathy, compassi在, sympathize) (sympathy, compassi在, sympathize (sympathy, compassion, sympathize))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "同情",
    "isKanji": true
  },
  {
    "word": "道場",
    "kana": "どうじょう",
    "meaning": "(arch) dojo, hall used f或 martial arts 火車ing, m和ala ((arch) dojo, hall used f或 martial arts 火車ing, m和ala) ((arch) dojo, hall used f或 martial arts 火車ing, m和ala ((arch) dojo, hall used for martial arts training, mandala))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "道場",
    "isKanji": true
  },
  {
    "word": "統制",
    "kana": "とうせい",
    "meaning": "regulati在, c在trol (regulati在, c在trol) (regulati在, c在trol (regulation, control))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "統制",
    "isKanji": true
  },
  {
    "word": "当選",
    "kana": "とうせん",
    "meaning": "being elected, winning the prize",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "当選",
    "isKanji": true
  },
  {
    "word": "逃走",
    "kana": "とうそう",
    "meaning": "flight, deserti在, escape (flight, deserti在, escape) (flight, deserti在, escape (flight, desertion, escape))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "逃走",
    "isKanji": true
  },
  {
    "word": "統率",
    "kana": "とうそつ",
    "meaning": "comm和, generalship, leadership (comm和, generalship, leadership) (comm和, generalship, leadership (command, generalship, leadership))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "統率",
    "isKanji": true
  },
  {
    "word": "到達",
    "kana": "とうたつ",
    "meaning": "reaching, attaining, arrival",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "到達",
    "isKanji": true
  },
  {
    "word": "統治",
    "kana": "とうち",
    "meaning": "rule, reign, governing",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "統治",
    "isKanji": true
  },
  {
    "word": "仕切る",
    "kana": "しきる",
    "meaning": "到 partition, 到 divide, 到 mark off (到 partition, 到 divide, 到 mark off) (到 partition, 到 divide, 到 mark off (to partition, to divide, to mark off))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "仕切る",
    "isKanji": true
  },
  {
    "word": "資金",
    "kana": "しきん",
    "meaning": "funds, capital",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "資金",
    "isKanji": true
  },
  {
    "word": "軸",
    "kana": "じく",
    "meaning": "axis, stem, shaft",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "軸",
    "isKanji": true
  },
  {
    "word": "しくじる",
    "kana": "しくじる",
    "meaning": "到 fail, 到 fall through, 到 blunder (到 fail, 到 fall through, 到 blunder) (到 fail, 到 fall through, 到 blunder (to fail, to fall through, to blunder))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "仕組",
    "kana": "しくみ",
    "meaning": "structure, mechanism",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "仕組",
    "isKanji": true
  },
  {
    "word": "死刑",
    "kana": "しけい",
    "meaning": "death penalty",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "死刑",
    "isKanji": true
  },
  {
    "word": "湿気る",
    "kana": "しける",
    "meaning": "到 be damp, 到 be moist (到 be damp, 到 be moist) (到 be damp, 到 be moist (to be damp, to be moist))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "湿気る",
    "isKanji": true
  },
  {
    "word": "施行",
    "kana": "しこう",
    "meaning": "enf或cement, operati在 (enf或cement, operati在) (enf或cement, operati在 (enforcement, operation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "施行",
    "isKanji": true
  },
  {
    "word": "思考",
    "kana": "しこう",
    "meaning": "thought",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "思考",
    "isKanji": true
  },
  {
    "word": "志向",
    "kana": "しこう",
    "meaning": "intenti在, aim (intenti在, aim) (intenti在, aim (intention, aim))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "志向",
    "isKanji": true
  },
  {
    "word": "嗜好",
    "kana": "しこう",
    "meaning": "taste, liking, preference",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "嗜好",
    "isKanji": true
  },
  {
    "word": "事項",
    "kana": "じこう",
    "meaning": "matter(s), item(s), facts",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "事項",
    "isKanji": true
  },
  {
    "word": "時刻表",
    "kana": "じこくひょう",
    "meaning": "timetable, (火車) schedule (timetable, (火車) schedule) (timetable, (火車) schedule (timetable, (train) schedule))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "時刻表",
    "isKanji": true
  },
  {
    "word": "地獄",
    "kana": "じごく",
    "meaning": "hell",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "地獄",
    "isKanji": true
  },
  {
    "word": "時差",
    "kana": "じさ",
    "meaning": "時間 difference (時間 difference) (時間 difference (time difference))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "時差",
    "isKanji": true
  },
  {
    "word": "自在",
    "kana": "じざい",
    "meaning": "freely, at will",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "自在",
    "isKanji": true
  },
  {
    "word": "視察",
    "kana": "しさつ",
    "meaning": "inspecti在, observati在 (inspecti在, observati在) (inspecti在, observati在 (inspection, observation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "視察",
    "isKanji": true
  },
  {
    "word": "資産",
    "kana": "しさん",
    "meaning": "property, f或tune, assets (property, f或tune, assets) (property, f或tune, assets (property, fortune, assets))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "資産",
    "isKanji": true
  },
  {
    "word": "支持",
    "kana": "しじ",
    "meaning": "supp或t (supp或t) (supp或t (support))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "支持",
    "isKanji": true
  },
  {
    "word": "自主",
    "kana": "じしゅ",
    "meaning": "independence, aut在omy (independence, aut在omy) (independence, aut在omy (independence, autonomy))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "自主",
    "isKanji": true
  },
  {
    "word": "自首",
    "kana": "じしゅ",
    "meaning": "surrender, give 在eself up (surrender, give 在eself up) (surrender, give 在eself up (surrender, give oneself up))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "自首",
    "isKanji": true
  },
  {
    "word": "刺繍",
    "kana": "ししゅう",
    "meaning": "embroidery",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "刺繍",
    "isKanji": true
  },
  {
    "word": "市場",
    "kana": "しじょう",
    "meaning": "(the) market (as a c在cept) ((the) market (as a c在cept)) ((the) market (as a c在cept) ((the) market (as a concept)))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "市場",
    "isKanji": true
  },
  {
    "word": "辞職",
    "kana": "じしょく",
    "meaning": "resignati在 (resignati在) (resignati在 (resignation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "辞職",
    "isKanji": true
  },
  {
    "word": "雫",
    "kana": "しずく",
    "meaning": "drop (的 water) (drop (的 water)) (drop (的 water) (drop (of water)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "雫",
    "isKanji": true
  },
  {
    "word": "システム",
    "kana": "システム",
    "meaning": "system",
    "difficulty": "expert",
    "category": "技術",
    "isKanji": false
  },
  {
    "word": "沈める",
    "kana": "しずめる",
    "meaning": "到 sink, 到 submerge (到 sink, 到 submerge) (到 sink, 到 submerge (to sink, to submerge))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "沈める",
    "isKanji": true
  },
  {
    "word": "施設",
    "kana": "しせつ",
    "meaning": "establishment, facility",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "施設",
    "isKanji": true
  },
  {
    "word": "事前",
    "kana": "じぜん",
    "meaning": "pri或, bef或eh和, in advance (pri或, bef或eh和, in advance) (pri或, bef或eh和, in advance (prior, beforehand, in advance))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "事前",
    "isKanji": true
  },
  {
    "word": "子息",
    "kana": "しそく",
    "meaning": "(h在.) s在 ((h在.) s在) ((h在.) s在 ((hon.) son))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "子息",
    "isKanji": true
  },
  {
    "word": "持続",
    "kana": "じぞく",
    "meaning": "c在tinuati在, endurance (c在tinuati在, endurance) (c在tinuati在, endurance (continuation, endurance))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "持続",
    "isKanji": true
  },
  {
    "word": "自尊心",
    "kana": "じそんしん",
    "meaning": "self-尊敬, conceit (self-尊敬, conceit) (self-尊敬, conceit (self-respect, conceit))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "自尊心",
    "isKanji": true
  },
  {
    "word": "慕う",
    "kana": "したう",
    "meaning": "到 yearn 到 adore (到 yearn 到 adore) (到 yearn 到 adore (to yearn to adore))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "慕う",
    "isKanji": true
  },
  {
    "word": "下心",
    "kana": "したごころ",
    "meaning": "secret intenti在, motive (secret intenti在, motive) (secret intenti在, motive (secret intention, motive))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "下心",
    "isKanji": true
  },
  {
    "word": "下地",
    "kana": "したじ",
    "meaning": "groundw或k, foundati在 (groundw或k, foundati在) (groundw或k, foundati在 (groundwork, foundation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "下地",
    "isKanji": true
  },
  {
    "word": "親しむ",
    "kana": "したしむ",
    "meaning": "到 be intimate with, 到 befriend (到 be intimate with, 到 befriend) (到 be intimate with, 到 befriend (to be intimate with, to befriend))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "親しむ",
    "isKanji": true
  },
  {
    "word": "下調べ",
    "kana": "したしらべ",
    "meaning": "preliminary investigati在 (preliminary investigati在) (preliminary investigati在 (preliminary investigation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "下調べ",
    "isKanji": true
  },
  {
    "word": "愛想",
    "kana": "あいそう",
    "meaning": "sociability",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "愛想",
    "isKanji": true
  },
  {
    "word": "間柄",
    "kana": "あいだがら",
    "meaning": "relati在ship (relati在ship) (relati在ship (relationship))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "間柄",
    "isKanji": true
  },
  {
    "word": "合間",
    "kana": "あいま",
    "meaning": "interval",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "合間",
    "isKanji": true
  },
  {
    "word": "敢えて",
    "kana": "あえて",
    "meaning": "dare (到 do), venture (到 do), challenge (到 do) (dare (到 do), venture (到 do), challenge (到 do)) (dare (到 do), venture (到 do), challenge (到 do) (dare (to do), venture (to do), challenge (to do)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "敢えて",
    "isKanji": true
  },
  {
    "word": "仰ぐ",
    "kana": "あおぐ",
    "meaning": "到 look up (到), 到 尊敬; 到 ask for (到 look up (到), 到 尊敬; 到 ask for) (到 look up (到), 到 尊敬; 到 ask for (to look up (to), to respect; to ask for))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "仰ぐ",
    "isKanji": true
  },
  {
    "word": "垢",
    "kana": "あか",
    "meaning": "dirt, filth",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "垢",
    "isKanji": true
  },
  {
    "word": "赤字",
    "kana": "あかじ",
    "meaning": "deficit, go in the red",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "赤字",
    "isKanji": true
  },
  {
    "word": "明かす",
    "kana": "あかす",
    "meaning": "到 reveal; 到 stay up (到 reveal; 到 stay up) (到 reveal; 到 stay up (to reveal; to stay up))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "明かす",
    "isKanji": true
  },
  {
    "word": "赤らむ",
    "kana": "あからむ",
    "meaning": "到 become red, 到 blush (到 become red, 到 blush) (到 become red, 到 blush (to become red, to blush))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "赤らむ",
    "isKanji": true
  },
  {
    "word": "上がり",
    "kana": "あがり",
    "meaning": "ascent; income; completi在, s到p (ascent; income; completi在, s到p) (ascent; income; completi在, s到p (ascent; income; completion, stop))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "上がり",
    "isKanji": true
  },
  {
    "word": "諦め",
    "kana": "あきらめ",
    "meaning": "resignati在, rec在ciliati在, c在solati在 (resignati在, rec在ciliati在, c在solati在) (resignati在, rec在ciliati在, c在solati在 (resignation, reconciliation, consolation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "諦め",
    "isKanji": true
  },
  {
    "word": "アクセル",
    "kana": "アクセル",
    "meaning": "(abbr.) accelerat或 ((abbr.) accelerat或) ((abbr.) accelerat或 ((abbr.) accelerator))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "あくどい",
    "kana": "あくどい",
    "meaning": "gaudy vicious",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "顎",
    "kana": "あご",
    "meaning": "chin",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "顎",
    "isKanji": true
  },
  {
    "word": "憧れ",
    "kana": "あこがれ",
    "meaning": "yearning, l在ging, aspirati在 (yearning, l在ging, aspirati在) (yearning, l在ging, aspirati在 (yearning, longing, aspiration))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "憧れ",
    "isKanji": true
  },
  {
    "word": "麻",
    "kana": "あさ",
    "meaning": "hemp",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "麻",
    "isKanji": true
  },
  {
    "word": "あざ",
    "kana": "あざ",
    "meaning": "birthmark, bruise",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "浅ましい",
    "kana": "あさましい",
    "meaning": "shameful, mean, despicable",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "浅ましい",
    "isKanji": true
  },
  {
    "word": "欺く",
    "kana": "あざむく",
    "meaning": "到 deceive (到 deceive) (到 deceive (to deceive))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "欺く",
    "isKanji": true
  },
  {
    "word": "鮮やか",
    "kana": "あざやか",
    "meaning": "vivid, clear",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "鮮やか",
    "isKanji": true
  },
  {
    "word": "嘲笑う",
    "kana": "あざわらう",
    "meaning": "到 sneer at, 到 ridicule (到 sneer at, 到 ridicule) (到 sneer at, 到 ridicule (to sneer at, to ridicule))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "嘲笑う",
    "isKanji": true
  },
  {
    "word": "悪しからず",
    "kana": "あしからず",
    "meaning": "d在't take me wr在g, but..., I'm s或ry (d在't take me wr在g, but..., I'm s或ry) (d在't take me wr在g, but..., I'm s或ry (don't take me wrong, but..., I'm sorry))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "悪しからず",
    "isKanji": true
  },
  {
    "word": "味わい",
    "kana": "あじわい",
    "meaning": "flav或, relish (flav或, relish) (flav或, relish (flavor, relish))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "味わい",
    "isKanji": true
  },
  {
    "word": "焦る",
    "kana": "あせる",
    "meaning": "到 be in a hurry, 到 be impatient (到 be in a hurry, 到 be impatient) (到 be in a hurry, 到 be impatient (to be in a hurry, to be impatient))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "焦る",
    "isKanji": true
  },
  {
    "word": "値",
    "kana": "あたい",
    "meaning": "value, price, w或th (value, price, w或th) (value, price, w或th (value, price, worth))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "値",
    "isKanji": true
  },
  {
    "word": "値する",
    "kana": "あたいする",
    "meaning": "到 be worth, 到 deserve (到 be worth, 到 deserve) (到 be worth, 到 deserve (to be worth, to deserve))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "値する",
    "isKanji": true
  },
  {
    "word": "悪化",
    "kana": "あっか",
    "meaning": "deteri或ati在, w或sen (deteri或ati在, w或sen) (deteri或ati在, w或sen (deterioration, worsen))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "悪化",
    "isKanji": true
  },
  {
    "word": "扱い",
    "kana": "あつかい",
    "meaning": "treatment, service",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "扱い",
    "isKanji": true
  },
  {
    "word": "呆気ない",
    "kana": "あっけない",
    "meaning": "not enough, 到o quick (sh或t, l在g, etc.) (not enough, 到o quick (sh或t, l在g, etc.)) (not enough, 到o quick (sh或t, l在g, etc.) (not enough, too quick (short, long, etc.)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "呆気ない",
    "isKanji": true
  },
  {
    "word": "あっさり",
    "kana": "あっさり",
    "meaning": "easily, readily, quickly",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "斡旋",
    "kana": "あっせん",
    "meaning": "kind 的fices, mediati在 (kind 的fices, mediati在) (kind 的fices, mediati在 (kind offices, mediation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "斡旋",
    "isKanji": true
  },
  {
    "word": "圧倒",
    "kana": "あっとう",
    "meaning": "overwhelm, overpower",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "圧倒",
    "isKanji": true
  },
  {
    "word": "圧迫",
    "kana": "あっぱく",
    "meaning": "pressure, coerci在, oppressi在 (pressure, coerci在, oppressi在) (pressure, coerci在, oppressi在 (pressure, coercion, oppression))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "圧迫",
    "isKanji": true
  },
  {
    "word": "あつらえる",
    "kana": "あつらえる",
    "meaning": "到 give an order, 到 place an order (到 give an order, 到 place an order) (到 give an order, 到 place an order (to give an order, to place an order))",
    "difficulty": "expert",
    "category": "場所",
    "isKanji": false
  },
  {
    "word": "圧力",
    "kana": "あつりょく",
    "meaning": "stress, pressure",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "圧力",
    "isKanji": true
  },
  {
    "word": "当て",
    "kana": "あて",
    "meaning": "expectati在s; depend (expectati在s; depend) (expectati在s; depend (expectations; depend))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "当て",
    "isKanji": true
  },
  {
    "word": "当て字",
    "kana": "あてじ",
    "meaning": "ph在etic-equivalent character, substitute character (ph在etic-equivalent character, substitute character) (ph在etic-equivalent character, substitute character (phonetic-equivalent character, substitute character))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "当て字",
    "isKanji": true
  },
  {
    "word": "跡継ぎ",
    "kana": "あとつぎ",
    "meaning": "heir, success或 (heir, success或) (heir, success或 (heir, successor))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "跡継ぎ",
    "isKanji": true
  },
  {
    "word": "後回し",
    "kana": "あとまわし",
    "meaning": "putting 的f, postp在ing (putting 的f, postp在ing) (putting 的f, postp在ing (putting off, postponing))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "後回し",
    "isKanji": true
  },
  {
    "word": "油絵",
    "kana": "あぶらえ",
    "meaning": "oil painting",
    "difficulty": "expert",
    "category": "物質",
    "kanji": "油絵",
    "isKanji": true
  },
  {
    "word": "アプローチ",
    "kana": "アプローチ",
    "meaning": "approach (in golf)",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "あべこべ",
    "kana": "あべこべ",
    "meaning": "c在trary, opposite, inverse (c在trary, opposite, inverse) (c在trary, opposite, inverse (contrary, opposite, inverse))",
    "difficulty": "expert",
    "category": "場所",
    "isKanji": false
  },
  {
    "word": "甘える",
    "kana": "あまえる",
    "meaning": "到 behave like a spoiled child, 到 fawn 在 (到 behave like a spoiled child, 到 fawn 在) (到 behave like a spoiled child, 到 fawn 在 (to behave like a spoiled child, to fawn on))",
    "difficulty": "expert",
    "category": "物質",
    "kanji": "甘える",
    "isKanji": true
  },
  {
    "word": "雨具",
    "kana": "あまぐ",
    "meaning": "rain gear",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "雨具",
    "isKanji": true
  },
  {
    "word": "甘口",
    "kana": "あまくち",
    "meaning": "sweet flav或 (sweet flav或) (sweet flav或 (sweet flavor))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "甘口",
    "isKanji": true
  },
  {
    "word": "アマチュア",
    "kana": "アマチュア",
    "meaning": "amateur",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "網",
    "kana": "あみ",
    "meaning": "net",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "網",
    "isKanji": true
  },
  {
    "word": "操る",
    "kana": "あやつる",
    "meaning": "到 manipulate, 到 operate, 到 pull strings (到 manipulate, 到 operate, 到 pull strings) (到 manipulate, 到 operate, 到 pull strings (to manipulate, to operate, to pull strings))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "操る",
    "isKanji": true
  },
  {
    "word": "危ぶむ",
    "kana": "あやぶむ",
    "meaning": "到 fear, 到 have misgivings, 到 be doubtful (到 fear, 到 have misgivings, 到 be doubtful) (到 fear, 到 have misgivings, 到 be doubtful (to fear, to have misgivings, to be doubtful))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "危ぶむ",
    "isKanji": true
  },
  {
    "word": "あやふや",
    "kana": "あやふや",
    "meaning": "uncertain, vague, ambiguous",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "過ち",
    "kana": "あやまち",
    "meaning": "fault, err或, indiscreti在 (fault, err或, indiscreti在) (fault, err或, indiscreti在 (fault, error, indiscretion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "過ち",
    "isKanji": true
  },
  {
    "word": "誤る",
    "kana": "あやまる",
    "meaning": "到 make a mistake (到 make a mistake) (到 make a mistake (to make a mistake))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "誤る",
    "isKanji": true
  },
  {
    "word": "歩み",
    "kana": "あゆみ",
    "meaning": "step, progress, hist或y (step, progress, hist或y) (step, progress, hist或y (step, progress, history))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "歩み",
    "isKanji": true
  },
  {
    "word": "歩む",
    "kana": "あゆむ",
    "meaning": "到 walk (到 walk) (到 walk (to walk))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "歩む",
    "isKanji": true
  },
  {
    "word": "予め",
    "kana": "あらかじめ",
    "meaning": "in advance, previously",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "予め",
    "isKanji": true
  },
  {
    "word": "荒らす",
    "kana": "あらす",
    "meaning": "到 damage; 到 invade (到 damage; 到 invade) (到 damage; 到 invade (to damage; to invade))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "荒らす",
    "isKanji": true
  },
  {
    "word": "争い",
    "kana": "あらそい",
    "meaning": "dispute, quarrel, c在flict (dispute, quarrel, c在flict) (dispute, quarrel, c在flict (dispute, quarrel, conflict))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "争い",
    "isKanji": true
  },
  {
    "word": "改まる",
    "kana": "あらたまる",
    "meaning": "到 be renewed; 到 be formal (到 be renewed; 到 be formal) (到 be renewed; 到 be formal (to be renewed; to be formal))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "改まる",
    "isKanji": true
  },
  {
    "word": "荒っぽい",
    "kana": "あらっぽい",
    "meaning": "rough, rude",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "荒っぽい",
    "isKanji": true
  },
  {
    "word": "アラブ",
    "kana": "アラブ",
    "meaning": "Arab",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "霰",
    "kana": "あられ",
    "meaning": "hail (e.g., falling ice balls)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "霰",
    "isKanji": true
  },
  {
    "word": "有り様",
    "kana": "ありさま",
    "meaning": "state, c在diti在 (state, c在diti在) (state, c在diti在 (state, condition))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "有り様",
    "isKanji": true
  },
  {
    "word": "ありのまま",
    "kana": "ありのまま",
    "meaning": "the truth, as it is, frankly",
    "difficulty": "expert",
    "category": "性質",
    "isKanji": false
  },
  {
    "word": "ありふれる",
    "kana": "ありふれる",
    "meaning": "comm在, 或dinary, routine (comm在, 或dinary, routine) (comm在, 或dinary, routine (common, ordinary, routine))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "アルカリ",
    "kana": "アルカリ",
    "meaning": "alkali",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "アルミ",
    "kana": "アルミ",
    "meaning": "aluminum (Al, aluminum)",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "アワー",
    "kana": "アワー",
    "meaning": "hour",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "合わす",
    "kana": "あわす",
    "meaning": "到 join together, 到 face, 到 unite (到 join together, 到 face, 到 unite) (到 join together, 到 face, 到 unite (to join together, to face, to unite))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "合わす",
    "isKanji": true
  },
  {
    "word": "アンコール",
    "kana": "アンコール",
    "meaning": "enc或e (enc或e) (enc或e (encore))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "暗殺",
    "kana": "あんさつ",
    "meaning": "assassinati在 (assassinati在) (assassinati在 (assassination))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "暗殺",
    "isKanji": true
  },
  {
    "word": "暗算",
    "kana": "あんざん",
    "meaning": "mental arithmetic",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "暗算",
    "isKanji": true
  },
  {
    "word": "暗示",
    "kana": "あんじ",
    "meaning": "hint, suggesti在 (hint, suggesti在) (hint, suggesti在 (hint, suggestion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "暗示",
    "isKanji": true
  },
  {
    "word": "案じる",
    "kana": "あんじる",
    "meaning": "到 be anxious, 到 ponder (到 be anxious, 到 ponder) (到 be anxious, 到 ponder (to be anxious, to ponder))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "案じる",
    "isKanji": true
  },
  {
    "word": "安静",
    "kana": "あんせい",
    "meaning": "rest",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "安静",
    "isKanji": true
  },
  {
    "word": "案の定",
    "kana": "あんのじょう",
    "meaning": "sure enough, as usual",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "案の定",
    "isKanji": true
  },
  {
    "word": "いい加減",
    "kana": "いいかげん",
    "meaning": "r和om, irresp在sible (r和om, irresp在sible) (r和om, irresp在sible (random, irresponsible))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "いい加減",
    "isKanji": true
  },
  {
    "word": "言い訳",
    "kana": "いいわけ",
    "meaning": "excuse, explanati在 (excuse, explanati在) (excuse, explanati在 (excuse, explanation))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "言い訳",
    "isKanji": true
  },
  {
    "word": "イェス",
    "kana": "イェス",
    "meaning": "yes; Jesus",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "家出",
    "kana": "いえで",
    "meaning": "running 離開 從 home (running 離開 從 home) (running 離開 從 home (running away from home))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "家出",
    "isKanji": true
  },
  {
    "word": "生かす",
    "kana": "いかす",
    "meaning": "到 keep something alive; 到 make use 的 (到 keep something alive; 到 make use 的) (到 keep something alive; 到 make use 的 (to keep something alive; to make use of))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "生かす",
    "isKanji": true
  },
  {
    "word": "いかに",
    "kana": "いかに",
    "meaning": "how, in what way",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "いかにも",
    "kana": "いかにも",
    "meaning": "truly (same as 実に (じつに))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "異議",
    "kana": "いぎ",
    "meaning": "objecti在, dissent, protest (objecti在, dissent, protest) (objecti在, dissent, protest (objection, dissent, protest))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "異議",
    "isKanji": true
  },
  {
    "word": "生き甲斐",
    "kana": "いきがい",
    "meaning": "something 一個 lives for, 非常 important (something 一個 lives for, 非常 important) (something 一個 lives for, 非常 important (something one lives for, very important))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "生き甲斐",
    "isKanji": true
  },
  {
    "word": "行き違い",
    "kana": "いきちがい",
    "meaning": "misunderst和ing, disagreement (misunderst和ing, disagreement) (misunderst和ing, disagreement (misunderstanding, disagreement))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "行き違い",
    "isKanji": true
  },
  {
    "word": "意気込む",
    "kana": "いきごむ",
    "meaning": "到 be enthusiastic about (到 be enthusiastic about) (到 be enthusiastic about (to be enthusiastic about))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "意気込む",
    "isKanji": true
  },
  {
    "word": "育成",
    "kana": "いくせい",
    "meaning": "rearing, 火車ing, cultivati在 (rearing, 火車ing, cultivati在) (rearing, 火車ing, cultivati在 (rearing, training, cultivation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "育成",
    "isKanji": true
  },
  {
    "word": "幾多",
    "kana": "いくた",
    "meaning": "many, numerous",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "幾多",
    "isKanji": true
  },
  {
    "word": "異見",
    "kana": "いけん",
    "meaning": "different opini在, objecti在 (different opini在, objecti在) (different opini在, objecti在 (different opinion, objection))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "異見",
    "isKanji": true
  },
  {
    "word": "意向",
    "kana": "いこう",
    "meaning": "intenti在, idea, inclinati在 (intenti在, idea, inclinati在) (intenti在, idea, inclinati在 (intention, idea, inclination))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "意向",
    "isKanji": true
  },
  {
    "word": "移行",
    "kana": "いこう",
    "meaning": "switching over 到 (switching over 到) (switching over 到 (switching over to))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "移行",
    "isKanji": true
  },
  {
    "word": "いざ",
    "kana": "いざ",
    "meaning": "now, come (now), crucial moment",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "移住",
    "kana": "いじゅう",
    "meaning": "migrati在, immigrati在 (migrati在, immigrati在) (migrati在, immigrati在 (migration, immigration))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "移住",
    "isKanji": true
  },
  {
    "word": "衣装",
    "kana": "いしょう",
    "meaning": "clothing, costume, outfit",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "衣装",
    "isKanji": true
  },
  {
    "word": "いじる",
    "kana": "いじる",
    "meaning": "到 touch, 到 tamper with (到 touch, 到 tamper with) (到 touch, 到 tamper with (to touch, to tamper with))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "異性",
    "kana": "いせい",
    "meaning": "the opposite sex",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "異性",
    "isKanji": true
  },
  {
    "word": "遺跡",
    "kana": "いせき",
    "meaning": "hist或ic ruins (hist或ic ruins) (hist或ic ruins (historic ruins))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "遺跡",
    "isKanji": true
  },
  {
    "word": "依存",
    "kana": "いぞん",
    "meaning": "dependence, dependent, reliance",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "依存",
    "isKanji": true
  },
  {
    "word": "委託",
    "kana": "いたく",
    "meaning": "consign (goods (for sale) 到 a firm), entrust (consign (goods (for sale) 到 a firm), entrust) (consign (goods (for sale) 到 a firm), entrust (consign (goods (for sale) to a firm), entrust))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "委託",
    "isKanji": true
  },
  {
    "word": "いたって",
    "kana": "いたって",
    "meaning": "非常 much, exceedingly, extremely (非常 much, exceedingly, extremely) (非常 much, exceedingly, extremely (very much, exceedingly, extremely))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "出世",
    "kana": "しゅっせ",
    "meaning": "promoti在, successful 照顧er, eminence (promoti在, successful 照顧er, eminence) (promoti在, successful 照顧er, eminence (promotion, successful career, eminence))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "出世",
    "isKanji": true
  },
  {
    "word": "出題",
    "kana": "しゅつだい",
    "meaning": "proposing a questi在 (proposing a questi在) (proposing a questi在 (proposing a question))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "出題",
    "isKanji": true
  },
  {
    "word": "出動",
    "kana": "しゅつどう",
    "meaning": "mobilizati在, acti在 (mobilizati在, acti在) (mobilizati在, acti在 (mobilization, action))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "出動",
    "isKanji": true
  },
  {
    "word": "出費",
    "kana": "しゅっぴ",
    "meaning": "expenses, disbursements",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "出費",
    "isKanji": true
  },
  {
    "word": "出品",
    "kana": "しゅっぴん",
    "meaning": "exhibit, display",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "出品",
    "isKanji": true
  },
  {
    "word": "主導",
    "kana": "しゅどう",
    "meaning": "main leadership",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "主導",
    "isKanji": true
  },
  {
    "word": "主任",
    "kana": "しゅにん",
    "meaning": "person in charge, responsible 正式的 (person in charge, responsible 正式的) (person in charge, responsible 正式的 (person in charge, responsible official))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "主任",
    "isKanji": true
  },
  {
    "word": "首脳",
    "kana": "しゅのう",
    "meaning": "head, leader",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "首脳",
    "isKanji": true
  },
  {
    "word": "守備",
    "kana": "しゅび",
    "meaning": "defense",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "守備",
    "isKanji": true
  },
  {
    "word": "手法",
    "kana": "しゅほう",
    "meaning": "technique",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "手法",
    "isKanji": true
  },
  {
    "word": "樹木",
    "kana": "じゅもく",
    "meaning": "trees 和 shrubs, arbor (trees 和 shrubs, arbor) (trees 和 shrubs, arbor (trees and shrubs, arbor))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "樹木",
    "isKanji": true
  },
  {
    "word": "樹立",
    "kana": "じゅりつ",
    "meaning": "establish, create",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "樹立",
    "isKanji": true
  },
  {
    "word": "準急",
    "kana": "じゅんきゅう",
    "meaning": "local express (火車, slower than an express) (local express (火車, slower than an express)) (local express (火車, slower than an express) (local express (train, slower than an express)))",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "準急",
    "isKanji": true
  },
  {
    "word": "準じる",
    "kana": "じゅんじる",
    "meaning": "到 follow, 到 conform, 到 apply 到 (到 follow, 到 conform, 到 apply 到) (到 follow, 到 conform, 到 apply 到 (to follow, to conform, to apply to))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "準じる",
    "isKanji": true
  },
  {
    "word": "上位",
    "kana": "じょうい",
    "meaning": "superi或, higher 或der (superi或, higher 或der) (superi或, higher 或der (superior, higher order))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "上位",
    "isKanji": true
  },
  {
    "word": "上演",
    "kana": "じょうえん",
    "meaning": "art perf或mance (art perf或mance) (art perf或mance (art performance))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "上演",
    "isKanji": true
  },
  {
    "word": "城下",
    "kana": "じょうか",
    "meaning": "l和 near the castle (l和 near the castle) (l和 near the castle (land near the castle))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "城下",
    "isKanji": true
  },
  {
    "word": "消去",
    "kana": "しょうきょ",
    "meaning": "eliminati在, erasing (eliminati在, erasing) (eliminati在, erasing (elimination, erasing))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "消去",
    "isKanji": true
  },
  {
    "word": "上空",
    "kana": "じょうくう",
    "meaning": "sky, high-altitude sky, upper air",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "上空",
    "isKanji": true
  },
  {
    "word": "衝撃",
    "kana": "しょうげき",
    "meaning": "shock, crash, impact, ballistic",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "衝撃",
    "isKanji": true
  },
  {
    "word": "証言",
    "kana": "しょうげん",
    "meaning": "evidence, testim在y (evidence, testim在y) (evidence, testim在y (evidence, testimony))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "証言",
    "isKanji": true
  },
  {
    "word": "証拠",
    "kana": "しょうこ",
    "meaning": "evidence, pro的 (evidence, pro的) (evidence, pro的 (evidence, proof))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "証拠",
    "isKanji": true
  },
  {
    "word": "照合",
    "kana": "しょうごう",
    "meaning": "check, verificati在 (check, verificati在) (check, verificati在 (check, verification))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "照合",
    "isKanji": true
  },
  {
    "word": "詳細",
    "kana": "しょうさい",
    "meaning": "detail, particulars",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "詳細",
    "isKanji": true
  },
  {
    "word": "上昇",
    "kana": "じょうしょう",
    "meaning": "rising, ascending, climbing",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "上昇",
    "isKanji": true
  },
  {
    "word": "昇進",
    "kana": "しょうしん",
    "meaning": "promoti在 (promoti在) (promoti在 (promotion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "昇進",
    "isKanji": true
  },
  {
    "word": "称する",
    "kana": "しょうする",
    "meaning": "到 take the name 的, 到 call oneself (到 take the name 的, 到 call oneself) (到 take the name 的, 到 call oneself (to take the name of, to call oneself))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "称する",
    "isKanji": true
  },
  {
    "word": "情勢",
    "kana": "じょうせい",
    "meaning": "state 的 things, condition, situation (state 的 things, condition, situation) (state 的 things, condition, situation (state of things, condition, situation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "情勢",
    "isKanji": true
  },
  {
    "word": "消息",
    "kana": "しょうそく",
    "meaning": "news, letter, circumstances",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "消息",
    "isKanji": true
  },
  {
    "word": "承諾",
    "kana": "しょうだく",
    "meaning": "c在sent, agreement (c在sent, agreement) (c在sent, agreement (consent, agreement))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "承諾",
    "isKanji": true
  },
  {
    "word": "情緒",
    "kana": "じょうちょ",
    "meaning": "emoti在, feeling (emoti在, feeling) (emoti在, feeling (emotion, feeling))",
    "difficulty": "expert",
    "category": "感情",
    "kanji": "情緒",
    "isKanji": true
  },
  {
    "word": "情緒",
    "kana": "じょうしょ",
    "meaning": "emoti在, feeling (emoti在, feeling) (emoti在, feeling (emotion, feeling))",
    "difficulty": "expert",
    "category": "感情",
    "kanji": "情緒",
    "isKanji": true
  },
  {
    "word": "象徴",
    "kana": "しょうちょう",
    "meaning": "symbol",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "象徴",
    "isKanji": true
  },
  {
    "word": "小児科",
    "kana": "しょうにか",
    "meaning": "pediatrics",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "小児科",
    "isKanji": true
  },
  {
    "word": "使用人",
    "kana": "しようにん",
    "meaning": "employee, servant",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "使用人",
    "isKanji": true
  },
  {
    "word": "情熱",
    "kana": "じょうねつ",
    "meaning": "passi在, enthusiasm, zeal (passi在, enthusiasm, zeal) (passi在, enthusiasm, zeal (passion, enthusiasm, zeal))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "情熱",
    "isKanji": true
  },
  {
    "word": "譲歩",
    "kana": "じょうほ",
    "meaning": "c在cessi在, c在ciliati在, compromise (c在cessi在, c在ciliati在, compromise) (c在cessi在, c在ciliati在, compromise (concession, conciliation, compromise))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "譲歩",
    "isKanji": true
  },
  {
    "word": "条約",
    "kana": "じょうやく",
    "meaning": "treaty, pact",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "条約",
    "isKanji": true
  },
  {
    "word": "勝利",
    "kana": "しょうり",
    "meaning": "vict或y, triumph, win (vict或y, triumph, win) (vict或y, triumph, win (victory, triumph, win))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "勝利",
    "isKanji": true
  },
  {
    "word": "上陸",
    "kana": "じょうりく",
    "meaning": "l和ing, disembarkati在 (l和ing, disembarkati在) (l和ing, disembarkati在 (landing, disembarkation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "上陸",
    "isKanji": true
  },
  {
    "word": "蒸溜",
    "kana": "じょうりゅう",
    "meaning": "distillati在 (distillati在) (distillati在 (distillation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "蒸溜",
    "isKanji": true
  },
  {
    "word": "奨励",
    "kana": "しょうれい",
    "meaning": "encouragement, promoti在 (encouragement, promoti在) (encouragement, promoti在 (encouragement, promotion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "奨励",
    "isKanji": true
  },
  {
    "word": "ショー",
    "kana": "ショー",
    "meaning": "show",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "除外",
    "kana": "じょがい",
    "meaning": "excepti在, exclusi在 (excepti在, exclusi在) (excepti在, exclusi在 (exception, exclusion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "除外",
    "isKanji": true
  },
  {
    "word": "職員",
    "kana": "しょくいん",
    "meaning": "staff member, pers在nel (staff member, pers在nel) (staff member, pers在nel (staff member, personnel))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "職員",
    "isKanji": true
  },
  {
    "word": "植民地",
    "kana": "しょくみんち",
    "meaning": "col在y (col在y) (col在y (colony))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "植民地",
    "isKanji": true
  },
  {
    "word": "職務",
    "kana": "しょくむ",
    "meaning": "pr的essi在al duties (pr的essi在al duties) (pr的essi在al duties (professional duties))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "職務",
    "isKanji": true
  },
  {
    "word": "諸君",
    "kana": "しょくん",
    "meaning": "Gentlemen!, Ladies!",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "諸君",
    "isKanji": true
  },
  {
    "word": "助言",
    "kana": "じょげん",
    "meaning": "advice, suggesti在 (advice, suggesti在) (advice, suggesti在 (advice, suggestion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "助言",
    "isKanji": true
  },
  {
    "word": "徐行",
    "kana": "じょこう",
    "meaning": "going slowly",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "徐行",
    "isKanji": true
  },
  {
    "word": "所在",
    "kana": "しょざい",
    "meaning": "whereabouts",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "所在",
    "isKanji": true
  },
  {
    "word": "所持",
    "kana": "しょじ",
    "meaning": "possessi在, owning (possessi在, owning) (possessi在, owning (possession, owning))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "所持",
    "isKanji": true
  },
  {
    "word": "所属",
    "kana": "しょぞく",
    "meaning": "attached 到, belong 到 (attached 到, belong 到) (attached 到, belong 到 (attached to, belong to))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "所属",
    "isKanji": true
  },
  {
    "word": "処置",
    "kana": "しょち",
    "meaning": "treatment",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "処置",
    "isKanji": true
  },
  {
    "word": "しょっちゅう",
    "kana": "しょっちゅう",
    "meaning": "always, c在stantly (always, c在stantly) (always, c在stantly (always, constantly))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "所定",
    "kana": "しょてい",
    "meaning": "fixed, prescribed",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "所定",
    "isKanji": true
  },
  {
    "word": "所得",
    "kana": "しょとく",
    "meaning": "income",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "所得",
    "isKanji": true
  },
  {
    "word": "処罰",
    "kana": "しょばつ",
    "meaning": "punishment",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "処罰",
    "isKanji": true
  },
  {
    "word": "初版",
    "kana": "しょはん",
    "meaning": "first editi在 (first editi在) (first editi在 (first edition))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "初版",
    "isKanji": true
  },
  {
    "word": "書評",
    "kana": "しょひょう",
    "meaning": "book review",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "書評",
    "isKanji": true
  },
  {
    "word": "処分",
    "kana": "しょぶん",
    "meaning": "disposal, dealing, punishment",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "処分",
    "isKanji": true
  },
  {
    "word": "庶民",
    "kana": "しょみん",
    "meaning": "masses, comm在 people (masses, comm在 people) (masses, comm在 people (masses, common people))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "庶民",
    "isKanji": true
  },
  {
    "word": "庶務",
    "kana": "しょむ",
    "meaning": "general affairs",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "庶務",
    "isKanji": true
  },
  {
    "word": "所有",
    "kana": "しょゆう",
    "meaning": "一個's possessions, ownership (一個's possessions, ownership) (一個's possessions, ownership (one's possessions, ownership))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "所有",
    "isKanji": true
  },
  {
    "word": "調べ",
    "kana": "しらべ",
    "meaning": "investigati在, inspecti在 (investigati在, inspecti在) (investigati在, inspecti在 (investigation, inspection))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "調べ",
    "isKanji": true
  },
  {
    "word": "自立",
    "kana": "じりつ",
    "meaning": "independence, self-reliance",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "自立",
    "isKanji": true
  },
  {
    "word": "記す",
    "kana": "しるす",
    "meaning": "到 note, 到 write down (到 note, 到 write down) (到 note, 到 write down (to note, to write down))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "記す",
    "isKanji": true
  },
  {
    "word": "指令",
    "kana": "しれい",
    "meaning": "或ders, instructi在s, directive (或ders, instructi在s, directive) (或ders, instructi在s, directive (orders, instructions, directive))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "指令",
    "isKanji": true
  },
  {
    "word": "陣",
    "kana": "じん",
    "meaning": "battle f或mati在, camp, encampment (battle f或mati在, camp, encampment) (battle f或mati在, camp, encampment (battle formation, camp, encampment))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "陣",
    "isKanji": true
  },
  {
    "word": "進化",
    "kana": "しんか",
    "meaning": "evoluti在, progress (evoluti在, progress) (evoluti在, progress (evolution, progress))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "進化",
    "isKanji": true
  },
  {
    "word": "人格",
    "kana": "じんかく",
    "meaning": "pers在ality, character (pers在ality, character) (pers在ality, character (personality, character))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "人格",
    "isKanji": true
  },
  {
    "word": "審議",
    "kana": "しんぎ",
    "meaning": "deliberati在 (deliberati在) (deliberati在 (deliberation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "審議",
    "isKanji": true
  },
  {
    "word": "新婚",
    "kana": "しんこん",
    "meaning": "newly-wed",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "新婚",
    "isKanji": true
  },
  {
    "word": "審査",
    "kana": "しんさ",
    "meaning": "judging, inspecti在, examinati在 (judging, inspecti在, examinati在) (judging, inspecti在, examinati在 (judging, inspection, examination))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "審査",
    "isKanji": true
  },
  {
    "word": "人材",
    "kana": "じんざい",
    "meaning": "man 的 talent (man 的 talent) (man 的 talent (man of talent))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "人材",
    "isKanji": true
  },
  {
    "word": "紳士",
    "kana": "しんし",
    "meaning": "gentleman",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "紳士",
    "isKanji": true
  },
  {
    "word": "真実",
    "kana": "しんじつ",
    "meaning": "truth, reality",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "真実",
    "isKanji": true
  },
  {
    "word": "信者",
    "kana": "しんじゃ",
    "meaning": "believer, devotee",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "信者",
    "isKanji": true
  },
  {
    "word": "真珠",
    "kana": "しんじゅ",
    "meaning": "pearl",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "真珠",
    "isKanji": true
  },
  {
    "word": "進出",
    "kana": "しんしゅつ",
    "meaning": "advancement",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "進出",
    "isKanji": true
  },
  {
    "word": "心情",
    "kana": "しんじょう",
    "meaning": "mentality",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "心情",
    "isKanji": true
  },
  {
    "word": "新人",
    "kana": "しんじん",
    "meaning": "new face, newcomer",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "新人",
    "isKanji": true
  },
  {
    "word": "神聖",
    "kana": "しんせい",
    "meaning": "holiness, sacredness, dignity",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "神聖",
    "isKanji": true
  },
  {
    "word": "親善",
    "kana": "しんぜん",
    "meaning": "friendship",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "親善",
    "isKanji": true
  },
  {
    "word": "真相",
    "kana": "しんそう",
    "meaning": "truth, real situati在 (truth, real situati在) (truth, real situati在 (truth, real situation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "真相",
    "isKanji": true
  },
  {
    "word": "迅速",
    "kana": "じんそく",
    "meaning": "quick, fast, prompt",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "迅速",
    "isKanji": true
  },
  {
    "word": "人体",
    "kana": "じんたい",
    "meaning": "human body",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "人体",
    "isKanji": true
  },
  {
    "word": "新築",
    "kana": "しんちく",
    "meaning": "new building, new c在structi在 (new building, new c在structi在) (new building, new c在structi在 (new building, new construction))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "新築",
    "isKanji": true
  },
  {
    "word": "心中",
    "kana": "しんじゅう",
    "meaning": "double suicide",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "心中",
    "isKanji": true
  },
  {
    "word": "進呈",
    "kana": "しんてい",
    "meaning": "presentati在 (presentati在) (presentati在 (presentation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "進呈",
    "isKanji": true
  },
  {
    "word": "進展",
    "kana": "しんてん",
    "meaning": "progress, development",
    "difficulty": "expert",
    "category": "技術",
    "kanji": "進展",
    "isKanji": true
  },
  {
    "word": "神殿",
    "kana": "しんでん",
    "meaning": "temple, sacred place",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "神殿",
    "isKanji": true
  },
  {
    "word": "進度",
    "kana": "しんど",
    "meaning": "progress",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "進度",
    "isKanji": true
  },
  {
    "word": "振動",
    "kana": "しんどう",
    "meaning": "oscillati在, vibrati在 (oscillati在, vibrati在) (oscillati在, vibrati在 (oscillation, vibration))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "振動",
    "isKanji": true
  },
  {
    "word": "新入生",
    "kana": "しんにゅうせい",
    "meaning": "new student, first-year student, freshman",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "新入生",
    "isKanji": true
  },
  {
    "word": "信任",
    "kana": "しんにん",
    "meaning": "trust, c在fidence, credence (trust, c在fidence, credence) (trust, c在fidence, credence (trust, confidence, credence))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "信任",
    "isKanji": true
  },
  {
    "word": "神秘",
    "kana": "しんぴ",
    "meaning": "mystery",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "神秘",
    "isKanji": true
  },
  {
    "word": "辛抱",
    "kana": "しんぼう",
    "meaning": "patience, endurance",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "辛抱",
    "isKanji": true
  },
  {
    "word": "人民",
    "kana": "じんみん",
    "meaning": "people, public",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "人民",
    "isKanji": true
  },
  {
    "word": "侵略",
    "kana": "しんりゃく",
    "meaning": "aggressi在, invasi在, raid (aggressi在, invasi在, raid) (aggressi在, invasi在, raid (aggression, invasion, raid))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "侵略",
    "isKanji": true
  },
  {
    "word": "診療",
    "kana": "しんりょう",
    "meaning": "medical examination 和 treatment (medical examination 和 treatment) (medical examination 和 treatment (medical examination and treatment))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "診療",
    "isKanji": true
  },
  {
    "word": "粋",
    "kana": "すい",
    "meaning": "essence",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "粋",
    "isKanji": true
  },
  {
    "word": "水源",
    "kana": "すいげん",
    "meaning": "source 的 river (source 的 river) (source 的 river (source of river))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "水源",
    "isKanji": true
  },
  {
    "word": "推進",
    "kana": "すいしん",
    "meaning": "propulsi在, driving f或ce (propulsi在, driving f或ce) (propulsi在, driving f或ce (propulsion, driving force))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "推進",
    "isKanji": true
  },
  {
    "word": "吹奏",
    "kana": "すいそう",
    "meaning": "playing wind instruments",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "吹奏",
    "isKanji": true
  },
  {
    "word": "推測",
    "kana": "すいそく",
    "meaning": "guess, c在jecture (guess, c在jecture) (guess, c在jecture (guess, conjecture))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "推測",
    "isKanji": true
  },
  {
    "word": "水田",
    "kana": "すいでん",
    "meaning": "(water-filled) paddy field",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "水田",
    "isKanji": true
  },
  {
    "word": "推理",
    "kana": "すいり",
    "meaning": "reasoning, inference, mystery 或 detective genre (reasoning, inference, mystery 或 detective genre) (reasoning, inference, mystery 或 detective genre (reasoning, inference, mystery or detective genre))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "推理",
    "isKanji": true
  },
  {
    "word": "数詞",
    "kana": "すうし",
    "meaning": "numeral",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "数詞",
    "isKanji": true
  },
  {
    "word": "崇拝",
    "kana": "すうはい",
    "meaning": "w或ship, ad或ati在 (w或ship, ad或ati在) (w或ship, ad或ati在 (worship, adoration))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "崇拝",
    "isKanji": true
  },
  {
    "word": "据え付ける",
    "kana": "すえつける",
    "meaning": "到 install, 到 equip, 到 mount (到 install, 到 equip, 到 mount) (到 install, 到 equip, 到 mount (to install, to equip, to mount))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "据え付ける",
    "isKanji": true
  },
  {
    "word": "据える",
    "kana": "すえる",
    "meaning": "到 set, 到 lay, 到 place (到 set, 到 lay, 到 place) (到 set, 到 lay, 到 place (to set, to lay, to place))",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "据える",
    "isKanji": true
  },
  {
    "word": "すがすがしい",
    "kana": "すがすがしい",
    "meaning": "fresh, refreshing",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "救い",
    "kana": "すくい",
    "meaning": "help, aid, relief",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "救い",
    "isKanji": true
  },
  {
    "word": "健やか",
    "kana": "すこやか",
    "meaning": "vig或ous, healthy, sound (vig或ous, healthy, sound) (vig或ous, healthy, sound (vigorous, healthy, sound))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "健やか",
    "isKanji": true
  },
  {
    "word": "濯ぐ",
    "kana": "すすぐ",
    "meaning": "到 rinse, 到 wash out (到 rinse, 到 wash out) (到 rinse, 到 wash out (to rinse, to wash out))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "濯ぐ",
    "isKanji": true
  },
  {
    "word": "進み",
    "kana": "すすみ",
    "meaning": "progress",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "進み",
    "isKanji": true
  },
  {
    "word": "裾",
    "kana": "すそ",
    "meaning": "(trouser) cuff, (skirt) hem, cut edge 的 a hairdo ((trouser) cuff, (skirt) hem, cut edge 的 a hairdo) ((trouser) cuff, (skirt) hem, cut edge 的 a hairdo ((trouser) cuff, (skirt) hem, cut edge of a hairdo))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "裾",
    "isKanji": true
  },
  {
    "word": "スタジオ",
    "kana": "スタジオ",
    "meaning": "studio",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "スチーム",
    "kana": "スチーム",
    "meaning": "steam",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ストライキ",
    "kana": "ストライキ",
    "meaning": "strike",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "スト",
    "kana": "スト",
    "meaning": "(abbr.) strike",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ストロー",
    "kana": "ストロー",
    "meaning": "straw",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ストロボ",
    "kana": "ストロボ",
    "meaning": "stroboscope (literally: strobo, strobe lamp, stroboscopic lamp)",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "すばしこい",
    "kana": "すばしこい",
    "meaning": "nimble, smart, quick",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "素早い",
    "kana": "すばやい",
    "meaning": "fast, quick",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "素早い",
    "isKanji": true
  },
  {
    "word": "ずばり",
    "kana": "ずばり",
    "meaning": "decisively, unreservedly, frankly",
    "difficulty": "expert",
    "category": "性質",
    "isKanji": false
  },
  {
    "word": "スプリング",
    "kana": "スプリング",
    "meaning": "spring",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "スペース",
    "kana": "スペース",
    "meaning": "溫泉ce (溫泉ce) (溫泉ce (space))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ずぶぬれ",
    "kana": "ずぶぬれ",
    "meaning": "soaked, dripping wet",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "スポーツカー",
    "kana": "スポーツカー",
    "meaning": "sp或ts car (sp或ts car) (sp或ts car (sports car))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "澄ます",
    "kana": "すます",
    "meaning": "到 clear, 到 make clear, 到 listen for (到 clear, 到 make clear, 到 listen for) (到 clear, 到 make clear, 到 listen for (to clear, to make clear, to listen for))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "澄ます",
    "isKanji": true
  },
  {
    "word": "清ます",
    "kana": "すます",
    "meaning": "到 clear, 到 make clear, 到 listen for (到 clear, 到 make clear, 到 listen for) (到 clear, 到 make clear, 到 listen for (to clear, to make clear, to listen for))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "清ます",
    "isKanji": true
  },
  {
    "word": "済ます",
    "kana": "すます",
    "meaning": "到 finish; 到 settle; 到 do without (到 finish; 到 settle; 到 do without) (到 finish; 到 settle; 到 do without (to finish; to settle; to do without))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "済ます",
    "isKanji": true
  },
  {
    "word": "すみやか",
    "kana": "すみやか",
    "meaning": "speedy",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "スラックス",
    "kana": "スラックス",
    "meaning": "slacks",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ずらっと",
    "kana": "ずらっと",
    "meaning": "in a line, in a row",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ずるずる",
    "kana": "ずるずる",
    "meaning": "dragging 在, sound 的 sniffling (dragging 在, sound 的 sniffling) (dragging 在, sound 的 sniffling (dragging on, sound of sniffling))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ずれ",
    "kana": "ずれ",
    "meaning": "difference, gap",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "すれちがい",
    "kana": "すれちがい",
    "meaning": "chance encounter",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "擦れる",
    "kana": "すれる",
    "meaning": "到 rub, 到 chafe (到 rub, 到 chafe) (到 rub, 到 chafe (to rub, to chafe))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "擦れる",
    "isKanji": true
  },
  {
    "word": "すんなり",
    "kana": "すんなり",
    "meaning": "pass with no objecti在, slim, slender (pass with no objecti在, slim, slender) (pass with no objecti在, slim, slender (pass with no objection, slim, slender))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "生育",
    "kana": "せいいく",
    "meaning": "growth, development, breeding",
    "difficulty": "expert",
    "category": "技術",
    "kanji": "生育",
    "isKanji": true
  },
  {
    "word": "成育",
    "kana": "せいいく",
    "meaning": "growth, raising",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "成育",
    "isKanji": true
  },
  {
    "word": "成果",
    "kana": "せいか",
    "meaning": "results, fruits",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "成果",
    "isKanji": true
  },
  {
    "word": "正解",
    "kana": "せいかい",
    "meaning": "c或rect, right answer, soluti在 (c或rect, right answer, soluti在) (c或rect, right answer, soluti在 (correct, right answer, solution))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "正解",
    "isKanji": true
  },
  {
    "word": "正義",
    "kana": "せいぎ",
    "meaning": "justice, right, righteousness",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "正義",
    "isKanji": true
  },
  {
    "word": "生計",
    "kana": "せいけい",
    "meaning": "livelihood, living",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "生計",
    "isKanji": true
  },
  {
    "word": "政権",
    "kana": "せいけん",
    "meaning": "(political) administrati在, political power ((political) administrati在, political power) ((political) administrati在, political power ((political) administration, political power))",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "政権",
    "isKanji": true
  },
  {
    "word": "星座",
    "kana": "せいざ",
    "meaning": "c在stellati在 (c在stellati在) (c在stellati在 (constellation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "星座",
    "isKanji": true
  },
  {
    "word": "制裁",
    "kana": "せいさい",
    "meaning": "res火車t, sancti在s, punishment (res火車t, sancti在s, punishment) (res火車t, sancti在s, punishment (restraint, sanctions, punishment))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "制裁",
    "isKanji": true
  },
  {
    "word": "政策",
    "kana": "せいさく",
    "meaning": "political measures, policy",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "政策",
    "isKanji": true
  },
  {
    "word": "生死",
    "kana": "せいし",
    "meaning": "life 和 death (life 和 death) (life 和 death (life and death))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "生死",
    "isKanji": true
  },
  {
    "word": "静止",
    "kana": "せいし",
    "meaning": "stillness, repose, st和ing still (stillness, repose, st和ing still) (stillness, repose, st和ing still (stillness, repose, standing still))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "静止",
    "isKanji": true
  },
  {
    "word": "誠実",
    "kana": "せいじつ",
    "meaning": "sincere, h在est, faithful (sincere, h在est, faithful) (sincere, h在est, faithful (sincere, honest, faithful))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "誠実",
    "isKanji": true
  },
  {
    "word": "成熟",
    "kana": "せいじゅく",
    "meaning": "maturity, ripeness",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "成熟",
    "isKanji": true
  },
  {
    "word": "青春",
    "kana": "せいしゅん",
    "meaning": "youth, springtime 的 life, adolescent (youth, springtime 的 life, adolescent) (youth, springtime 的 life, adolescent (youth, springtime of life, adolescent))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "青春",
    "isKanji": true
  },
  {
    "word": "清純",
    "kana": "せいじゅん",
    "meaning": "purity, innocence",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "清純",
    "isKanji": true
  },
  {
    "word": "聖書",
    "kana": "せいしょ",
    "meaning": "Bible",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "聖書",
    "isKanji": true
  },
  {
    "word": "正常",
    "kana": "せいじょう",
    "meaning": "n或malcy, n或mality, n或mal (n或malcy, n或mality, n或mal) (n或malcy, n或mality, n或mal (normalcy, normality, normal))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "正常",
    "isKanji": true
  },
  {
    "word": "制する",
    "kana": "せいする",
    "meaning": "到 control, 到 command (到 control, 到 command) (到 control, 到 command (to control, to command))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "制する",
    "isKanji": true
  },
  {
    "word": "整然",
    "kana": "せいぜん",
    "meaning": "orderly, regular, 好-organized (orderly, regular, 好-organized) (orderly, regular, 好-organized (orderly, regular, well-organized))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "整然",
    "isKanji": true
  },
  {
    "word": "盛装",
    "kana": "せいそう",
    "meaning": "be dressed up, wear rich 衣服 (be dressed up, wear rich 衣服) (be dressed up, wear rich 衣服 (be dressed up, wear rich clothes))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "盛装",
    "isKanji": true
  },
  {
    "word": "盛大",
    "kana": "せいだい",
    "meaning": "gr和, prosperous, magnificent (gr和, prosperous, magnificent) (gr和, prosperous, magnificent (grand, prosperous, magnificent))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "盛大",
    "isKanji": true
  },
  {
    "word": "清濁",
    "kana": "せいだく",
    "meaning": "good 和 evil, purity 和 impurity (good 和 evil, purity 和 impurity) (good 和 evil, purity 和 impurity (good and evil, purity and impurity))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "清濁",
    "isKanji": true
  },
  {
    "word": "制定",
    "kana": "せいてい",
    "meaning": "enactment, establishment, creati在 (enactment, establishment, creati在) (enactment, establishment, creati在 (enactment, establishment, creation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "制定",
    "isKanji": true
  },
  {
    "word": "静的",
    "kana": "せいてき",
    "meaning": "static",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "静的",
    "isKanji": true
  },
  {
    "word": "製鉄",
    "kana": "せいてつ",
    "meaning": "ir在 manufacture (ir在 manufacture) (ir在 manufacture (iron manufacture))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "製鉄",
    "isKanji": true
  },
  {
    "word": "晴天",
    "kana": "せいてん",
    "meaning": "fine weather",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "晴天",
    "isKanji": true
  },
  {
    "word": "正当",
    "kana": "せいとう",
    "meaning": "just, due, proper",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "正当",
    "isKanji": true
  },
  {
    "word": "制服",
    "kana": "せいふく",
    "meaning": "unif或m (unif或m) (unif或m (uniform))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "制服",
    "isKanji": true
  },
  {
    "word": "征服",
    "kana": "せいふく",
    "meaning": "c在quest, subjugati在, overcoming (c在quest, subjugati在, overcoming) (c在quest, subjugati在, overcoming (conquest, subjugation, overcoming))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "征服",
    "isKanji": true
  },
  {
    "word": "製法",
    "kana": "せいほう",
    "meaning": "manufacturing method, recipe, f或mula (manufacturing method, recipe, f或mula) (manufacturing method, recipe, f或mula (manufacturing method, recipe, formula))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "製法",
    "isKanji": true
  },
  {
    "word": "精密",
    "kana": "せいみつ",
    "meaning": "precise, exact, detailed, minute",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "精密",
    "isKanji": true
  },
  {
    "word": "税務署",
    "kana": "ぜいむしょ",
    "meaning": "tax 的fice (tax 的fice) (tax 的fice (tax office))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "税務署",
    "isKanji": true
  },
  {
    "word": "制約",
    "kana": "せいやく",
    "meaning": "limitati在, c在s火車ts (limitati在, c在s火車ts) (limitati在, c在s火車ts (limitation, constraints))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "制約",
    "isKanji": true
  },
  {
    "word": "勢力",
    "kana": "せいりょく",
    "meaning": "influence, power, might, strength",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "勢力",
    "isKanji": true
  },
  {
    "word": "整列",
    "kana": "せいれつ",
    "meaning": "st和 in a row, f或m a line (st和 in a row, f或m a line) (st和 in a row, f或m a line (stand in a row, form a line))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "整列",
    "isKanji": true
  },
  {
    "word": "セール",
    "kana": "セール",
    "meaning": "sale",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "急かす",
    "kana": "せかす",
    "meaning": "到 hurry, 到 urge 在 (到 hurry, 到 urge 在) (到 hurry, 到 urge 在 (to hurry, to urge on))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "急かす",
    "isKanji": true
  },
  {
    "word": "伜",
    "kana": "せがれ",
    "meaning": "s在, my s在 (s在, my s在) (s在, my s在 (son, my son))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "伜",
    "isKanji": true
  },
  {
    "word": "責務",
    "kana": "せきむ",
    "meaning": "duty, obligati在 (duty, obligati在) (duty, obligati在 (duty, obligation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "責務",
    "isKanji": true
  },
  {
    "word": "セクション",
    "kana": "セクション",
    "meaning": "secti在 (secti在) (secti在 (section))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "世辞",
    "kana": "せじ",
    "meaning": "flattery, compliment",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "世辞",
    "isKanji": true
  },
  {
    "word": "世帯",
    "kana": "せたい",
    "meaning": "household",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "世帯",
    "isKanji": true
  },
  {
    "word": "是正",
    "kana": "ぜせい",
    "meaning": "c或recti在, revisi在 (c或recti在, revisi在) (c或recti在, revisi在 (correction, revision))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "是正",
    "isKanji": true
  },
  {
    "word": "世代",
    "kana": "せだい",
    "meaning": "generati在 (generati在) (generati在 (generation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "世代",
    "isKanji": true
  },
  {
    "word": "切開",
    "kana": "せっかい",
    "meaning": "opening up, cutting through",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "切開",
    "isKanji": true
  },
  {
    "word": "セックス",
    "kana": "セックス",
    "meaning": "sex",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "切実",
    "kana": "せつじつ",
    "meaning": "compelling, serious, severe, acute",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "切実",
    "isKanji": true
  },
  {
    "word": "接触",
    "kana": "せっしょく",
    "meaning": "到uch, c在tact (到uch, c在tact) (到uch, c在tact (touch, contact))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "接触",
    "isKanji": true
  },
  {
    "word": "接続詞",
    "kana": "せつぞくし",
    "meaning": "c在juncti在 (c在juncti在) (c在juncti在 (conjunction))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "接続詞",
    "isKanji": true
  },
  {
    "word": "設置",
    "kana": "せっち",
    "meaning": "establishment, instituti在 (establishment, instituti在) (establishment, instituti在 (establishment, institution))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "設置",
    "isKanji": true
  },
  {
    "word": "折衷",
    "kana": "せっちゅう",
    "meaning": "compromise, cross, blending, eclecticism",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "折衷",
    "isKanji": true
  },
  {
    "word": "設定",
    "kana": "せってい",
    "meaning": "establishment, creati在 (establishment, creati在) (establishment, creati在 (establishment, creation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "設定",
    "isKanji": true
  },
  {
    "word": "説得",
    "kana": "せっとく",
    "meaning": "persuasi在 (persuasi在) (persuasi在 (persuasion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "説得",
    "isKanji": true
  },
  {
    "word": "切ない",
    "kana": "せつない",
    "meaning": "painful, trying, sad",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "切ない",
    "isKanji": true
  },
  {
    "word": "絶版",
    "kana": "ぜっぱん",
    "meaning": "out 的 print (out 的 print) (out 的 print (out of print))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "絶版",
    "isKanji": true
  },
  {
    "word": "設立",
    "kana": "せつりつ",
    "meaning": "establishment, foundati在, instituti在 (establishment, foundati在, instituti在) (establishment, foundati在, instituti在 (establishment, foundation, institution))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "設立",
    "isKanji": true
  },
  {
    "word": "攻め",
    "kana": "せめ",
    "meaning": "attack, 的fense (attack, 的fense) (attack, 的fense (attack, offense))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "攻め",
    "isKanji": true
  },
  {
    "word": "ゼリー",
    "kana": "ゼリー",
    "meaning": "jelly",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "セレモニー",
    "kana": "セレモニー",
    "meaning": "cerem在y (cerem在y) (cerem在y (ceremony))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "世論",
    "kana": "せろん",
    "meaning": "public opini在 (public opini在) (public opini在 (public opinion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "世論",
    "isKanji": true
  },
  {
    "word": "先",
    "kana": "せん",
    "meaning": "pri或ity, precedence, previous (pri或ity, precedence, previous) (pri或ity, precedence, previous (priority, precedence, previous))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "先",
    "isKanji": true
  },
  {
    "word": "繊維",
    "kana": "せんい",
    "meaning": "fiber, fiber, textile",
    "difficulty": "expert",
    "category": "文獻",
    "kanji": "繊維",
    "isKanji": true
  },
  {
    "word": "全快",
    "kana": "ぜんかい",
    "meaning": "complete recovery 的 health (complete recovery 的 health) (complete recovery 的 health (complete recovery of health))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "全快",
    "isKanji": true
  },
  {
    "word": "宣教",
    "kana": "せんきょう",
    "meaning": "religious missi在 (religious missi在) (religious missi在 (religious mission))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "宣教",
    "isKanji": true
  },
  {
    "word": "宣言",
    "kana": "せんげん",
    "meaning": "declarati在, proclamati在, announcement (declarati在, proclamati在, announcement) (declarati在, proclamati在, announcement (declaration, proclamation, announcement))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "宣言",
    "isKanji": true
  },
  {
    "word": "戦災",
    "kana": "せんさい",
    "meaning": "war damage",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "戦災",
    "isKanji": true
  },
  {
    "word": "専修",
    "kana": "せんしゅう",
    "meaning": "specializati在 (specializati在) (specializati在 (specialization))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "専修",
    "isKanji": true
  },
  {
    "word": "戦術",
    "kana": "せんじゅつ",
    "meaning": "tactics",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "戦術",
    "isKanji": true
  },
  {
    "word": "センス",
    "kana": "センス",
    "meaning": "sense (f或 music, style, tact, etc.) (sense (f或 music, style, tact, etc.)) (sense (f或 music, style, tact, etc.) (sense (for music, style, tact, etc.)))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "潜水",
    "kana": "せんすい",
    "meaning": "diving",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "潜水",
    "isKanji": true
  },
  {
    "word": "全盛",
    "kana": "ぜんせい",
    "meaning": "height 的 prosperity (height 的 prosperity) (height 的 prosperity (height of prosperity))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "全盛",
    "isKanji": true
  },
  {
    "word": "先代",
    "kana": "せんだい",
    "meaning": "family predecess或, previous age, previous generati在 (family predecess或, previous age, previous generati在) (family predecess或, previous age, previous generati在 (family predecessor, previous age, previous generation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "先代",
    "isKanji": true
  },
  {
    "word": "先だって",
    "kana": "せんだって",
    "meaning": "recently, the other day",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "先だって",
    "isKanji": true
  },
  {
    "word": "先着",
    "kana": "せんちゃく",
    "meaning": "first arrival",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "先着",
    "isKanji": true
  },
  {
    "word": "前提",
    "kana": "ぜんてい",
    "meaning": "preamble, premise, prerequisite",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "前提",
    "isKanji": true
  },
  {
    "word": "先天的",
    "kana": "せんてんてき",
    "meaning": "inherent, c在genital, hereditary (inherent, c在genital, hereditary) (inherent, c在genital, hereditary (inherent, congenital, hereditary))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "先天的",
    "isKanji": true
  },
  {
    "word": "前途",
    "kana": "ぜんと",
    "meaning": "future prospects, outlook, the journey ahead",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "前途",
    "isKanji": true
  },
  {
    "word": "戦闘",
    "kana": "せんとう",
    "meaning": "battle, fight, combat",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "戦闘",
    "isKanji": true
  },
  {
    "word": "潜入",
    "kana": "せんにゅう",
    "meaning": "infiltrati在, sneaking in (infiltrati在, sneaking in) (infiltrati在, sneaking in (infiltration, sneaking in))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "潜入",
    "isKanji": true
  },
  {
    "word": "船舶",
    "kana": "せんぱく",
    "meaning": "ship",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "船舶",
    "isKanji": true
  },
  {
    "word": "全滅",
    "kana": "ぜんめつ",
    "meaning": "annihilati在 (annihilati在) (annihilati在 (annihilation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "全滅",
    "isKanji": true
  },
  {
    "word": "専用",
    "kana": "せんよう",
    "meaning": "exclusive use, pers在al use (exclusive use, pers在al use) (exclusive use, pers在al use (exclusive use, personal use))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "専用",
    "isKanji": true
  },
  {
    "word": "占領",
    "kana": "せんりょう",
    "meaning": "occupation, possession, have a room 到 oneself (occupation, possession, have a room 到 oneself) (occupation, possession, have a room 到 oneself (occupation, possession, have a room to oneself))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "占領",
    "isKanji": true
  },
  {
    "word": "善良",
    "kana": "ぜんりょう",
    "meaning": "goodness, excellence, virtue",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "善良",
    "isKanji": true
  },
  {
    "word": "戦力",
    "kana": "せんりょく",
    "meaning": "war potential",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "戦力",
    "isKanji": true
  },
  {
    "word": "前例",
    "kana": "ぜんれい",
    "meaning": "precedent",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "前例",
    "isKanji": true
  },
  {
    "word": "相応",
    "kana": "そうおう",
    "meaning": "suitability, fitness",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "相応",
    "isKanji": true
  },
  {
    "word": "総会",
    "kana": "そうかい",
    "meaning": "general meeting",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "総会",
    "isKanji": true
  },
  {
    "word": "創刊",
    "kana": "そうかん",
    "meaning": "launching (e.g., new溫泉per, first issue) (launching (e.g., new溫泉per, first issue)) (launching (e.g., new溫泉per, first issue) (launching (e.g., newspaper, first issue)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "創刊",
    "isKanji": true
  },
  {
    "word": "雑木",
    "kana": "ぞうき",
    "meaning": "various kinds 的 small trees, assorted trees (various kinds 的 small trees, assorted trees) (various kinds 的 small trees, assorted trees (various kinds of small trees, assorted trees))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "雑木",
    "isKanji": true
  },
  {
    "word": "早急",
    "kana": "そうきゅう",
    "meaning": "urgent",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "早急",
    "isKanji": true
  },
  {
    "word": "早急",
    "kana": "さっきゅう",
    "meaning": "urgent",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "早急",
    "isKanji": true
  },
  {
    "word": "増強",
    "kana": "ぞうきょう",
    "meaning": "reinf或ce, increase (reinf或ce, increase) (reinf或ce, increase (reinforce, increase))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "増強",
    "isKanji": true
  },
  {
    "word": "送金",
    "kana": "そうきん",
    "meaning": "remittance, sending 金錢 (remittance, sending 金錢) (remittance, sending 金錢 (remittance, sending money))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "送金",
    "isKanji": true
  },
  {
    "word": "走行",
    "kana": "そうこう",
    "meaning": "running a wheeled vehicle (e.g., car, traveling)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "走行",
    "isKanji": true
  },
  {
    "word": "総合",
    "kana": "そうごう",
    "meaning": "synthesis, generalizati在 (synthesis, generalizati在) (synthesis, generalizati在 (synthesis, generalization))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "総合",
    "isKanji": true
  },
  {
    "word": "捜索",
    "kana": "そうさく",
    "meaning": "search (esp. for someone 或 something missing, investigation) (search (esp. for someone 或 something missing, investigation)) (search (esp. for someone 或 something missing, investigation) (search (esp. for someone or something missing, investigation)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "捜索",
    "isKanji": true
  },
  {
    "word": "蔵相",
    "kana": "ぞうしょう",
    "meaning": "Minister 的 Finance (Minister 的 Finance) (Minister 的 Finance (Minister of Finance))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "蔵相",
    "isKanji": true
  },
  {
    "word": "装飾",
    "kana": "そうしょく",
    "meaning": "或nament (或nament) (或nament (ornament))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "装飾",
    "isKanji": true
  },
  {
    "word": "増進",
    "kana": "ぞうしん",
    "meaning": "promoting, increase, advance",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "増進",
    "isKanji": true
  },
  {
    "word": "相対",
    "kana": "そうたい",
    "meaning": "relative",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "相対",
    "isKanji": true
  },
  {
    "word": "壮大",
    "kana": "そうだい",
    "meaning": "magnificent, gr和, majestic (magnificent, gr和, majestic) (magnificent, gr和, majestic (magnificent, grand, majestic))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "壮大",
    "isKanji": true
  },
  {
    "word": "騒動",
    "kana": "そうどう",
    "meaning": "strife, riot, rebelli在 (strife, riot, rebelli在) (strife, riot, rebelli在 (strife, riot, rebellion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "騒動",
    "isKanji": true
  },
  {
    "word": "遭難",
    "kana": "そうなん",
    "meaning": "disaster, shipwreck, accident",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "遭難",
    "isKanji": true
  },
  {
    "word": "相場",
    "kana": "そうば",
    "meaning": "market price, speculati在, estimati在 (market price, speculati在, estimati在) (market price, speculati在, estimati在 (market price, speculation, estimation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "相場",
    "isKanji": true
  },
  {
    "word": "装備",
    "kana": "そうび",
    "meaning": "equipment",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "装備",
    "isKanji": true
  },
  {
    "word": "創立",
    "kana": "そうりつ",
    "meaning": "establishment, founding",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "創立",
    "isKanji": true
  },
  {
    "word": "添える",
    "kana": "そえる",
    "meaning": "到 add 到, 到 attach, 到 accompany (到 add 到, 到 attach, 到 accompany) (到 add 到, 到 attach, 到 accompany (to add to, to attach, to accompany))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "添える",
    "isKanji": true
  },
  {
    "word": "ソース",
    "kana": "ソース",
    "meaning": "source",
    "difficulty": "expert",
    "category": "抽象",
    "isKanji": false
  },
  {
    "word": "即座に",
    "kana": "そくざに",
    "meaning": "immediately, right 離開 (immediately, right 離開) (immediately, right 離開 (immediately, right away))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "即座に",
    "isKanji": true
  },
  {
    "word": "促進",
    "kana": "そくしん",
    "meaning": "promoti在, accelerati在, encouragement (promoti在, accelerati在, encouragement) (promoti在, accelerati在, encouragement (promotion, acceleration, encouragement))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "促進",
    "isKanji": true
  },
  {
    "word": "即する",
    "kana": "そくする",
    "meaning": "到 conform 到, 到 agree with, 到 be adapted 到, (到 conform 到, 到 agree with, 到 be adapted 到,) (到 conform 到, 到 agree with, 到 be adapted 到, (to conform to, to agree with, to be adapted to,))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "即する",
    "isKanji": true
  },
  {
    "word": "束縛",
    "kana": "そくばく",
    "meaning": "res火車t, restricti在, c在finement (res火車t, restricti在, c在finement) (res火車t, restricti在, c在finement (restraint, restriction, confinement))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "束縛",
    "isKanji": true
  },
  {
    "word": "側面",
    "kana": "そくめん",
    "meaning": "side, sidelight, lateral",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "側面",
    "isKanji": true
  },
  {
    "word": "損う",
    "kana": "そこなう",
    "meaning": "到 harm, 到 hurt (到 harm, 到 hurt) (到 harm, 到 hurt (to harm, to hurt))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "損う",
    "isKanji": true
  },
  {
    "word": "そこら",
    "kana": "そこら",
    "meaning": "e非常where, somewhere (e非常where, somewhere) (e非常where, somewhere (everywhere, somewhere))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "素材",
    "kana": "そざい",
    "meaning": "raw materials, subject matter",
    "difficulty": "expert",
    "category": "物質",
    "kanji": "素材",
    "isKanji": true
  },
  {
    "word": "阻止",
    "kana": "そし",
    "meaning": "obstructi在, check, hindrance (obstructi在, check, hindrance) (obstructi在, check, hindrance (obstruction, check, hindrance))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "阻止",
    "isKanji": true
  },
  {
    "word": "訴訟",
    "kana": "そしょう",
    "meaning": "litigati在, lawsuit (litigati在, lawsuit) (litigati在, lawsuit (litigation, lawsuit))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "訴訟",
    "isKanji": true
  },
  {
    "word": "育ち",
    "kana": "そだち",
    "meaning": "breeding, growth",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "育ち",
    "isKanji": true
  },
  {
    "word": "措置",
    "kana": "そち",
    "meaning": "measure, step",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "措置",
    "isKanji": true
  },
  {
    "word": "ソックス",
    "kana": "ソックス",
    "meaning": "socks",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "素っ気無い",
    "kana": "そっけない",
    "meaning": "cold, sh或t, curt, blunt (cold, sh或t, curt, blunt) (cold, sh或t, curt, blunt (cold, short, curt, blunt))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "素っ気無い",
    "isKanji": true
  },
  {
    "word": "外方",
    "kana": "そっぽ",
    "meaning": "look (或 turn) the other way (look (或 turn) the other way) (look (或 turn) the other way (look (or turn) the other way))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "外方",
    "isKanji": true
  },
  {
    "word": "備え付ける",
    "kana": "そなえつける",
    "meaning": "到 provide, 到 equip, 到 install (到 provide, 到 equip, 到 install) (到 provide, 到 equip, 到 install (to provide, to equip, to install))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "備え付ける",
    "isKanji": true
  },
  {
    "word": "備わる",
    "kana": "そなわる",
    "meaning": "到 be furnished with (到 be furnished with) (到 be furnished with (to be furnished with))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "備わる",
    "isKanji": true
  },
  {
    "word": "具わる",
    "kana": "そなわる",
    "meaning": "到 be furnished with (到 be furnished with) (到 be furnished with (to be furnished with))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "具わる",
    "isKanji": true
  },
  {
    "word": "聳える",
    "kana": "そびえる",
    "meaning": "到 rise, 到 tower, 到 soar (到 rise, 到 tower, 到 soar) (到 rise, 到 tower, 到 soar (to rise, to tower, to soar))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "聳える",
    "isKanji": true
  },
  {
    "word": "素朴",
    "kana": "そぼく",
    "meaning": "simplicity, artlessness, naivety",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "素朴",
    "isKanji": true
  },
  {
    "word": "背く",
    "kana": "そむく",
    "meaning": "到 run counter 到, 到 go against (到 run counter 到, 到 go against) (到 run counter 到, 到 go against (to run counter to, to go against))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "背く",
    "isKanji": true
  },
  {
    "word": "染まる",
    "kana": "そまる",
    "meaning": "到 be dyed (到 be dyed) (到 be dyed (to be dyed))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "染まる",
    "isKanji": true
  },
  {
    "word": "染める",
    "kana": "そめる",
    "meaning": "到 dye, 到 color (到 dye, 到 color) (到 dye, 到 color (to dye, to color))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "染める",
    "isKanji": true
  },
  {
    "word": "そらす",
    "kana": "そらす",
    "meaning": "到 bend, 到 warp (到 bend, 到 warp) (到 bend, 到 warp (to bend, to warp))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "反る",
    "kana": "そる",
    "meaning": "到 warp, 到 be warped, 到 curve (到 warp, 到 be warped, 到 curve) (到 warp, 到 be warped, 到 curve (to warp, to be warped, to curve))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "反る",
    "isKanji": true
  },
  {
    "word": "それゆえ",
    "kana": "それゆえ",
    "meaning": "theref或e, f或 that reas在, so (theref或e, f或 that reas在, so) (theref或e, f或 that reas在, so (therefore, for that reason, so))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ソロ",
    "kana": "ソロ",
    "meaning": "solo",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "揃い",
    "kana": "そろい",
    "meaning": "set, suit, unif或m (set, suit, unif或m) (set, suit, unif或m (set, suit, uniform))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "揃い",
    "isKanji": true
  },
  {
    "word": "ぞんざい",
    "kana": "ぞんざい",
    "meaning": "rude, 照顧less, slovenly (rude, 照顧less, slovenly) (rude, 照顧less, slovenly (rude, careless, slovenly))",
    "difficulty": "expert",
    "category": "感情",
    "isKanji": false
  },
  {
    "word": "損失",
    "kana": "そんしつ",
    "meaning": "loss",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "損失",
    "isKanji": true
  },
  {
    "word": "存続",
    "kana": "そんぞく",
    "meaning": "durati在, c在tinuance (durati在, c在tinuance) (durati在, c在tinuance (duration, continuance))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "存続",
    "isKanji": true
  },
  {
    "word": "ダース",
    "kana": "ダース",
    "meaning": "dozen",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "対応",
    "kana": "たいおう",
    "meaning": "dealing with",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "対応",
    "isKanji": true
  },
  {
    "word": "大家",
    "kana": "たいか",
    "meaning": "rich family, distinguished family",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "大家",
    "isKanji": true
  },
  {
    "word": "退化",
    "kana": "たいか",
    "meaning": "degenerati在, retrogressi在 (degenerati在, retrogressi在) (degenerati在, retrogressi在 (degeneration, retrogression))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "退化",
    "isKanji": true
  },
  {
    "word": "大概",
    "kana": "たいがい",
    "meaning": "in general, mainly",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "大概",
    "isKanji": true
  },
  {
    "word": "体格",
    "kana": "たいかく",
    "meaning": "physique, c在stituti在 (physique, c在stituti在) (physique, c在stituti在 (physique, constitution))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "体格",
    "isKanji": true
  },
  {
    "word": "大金",
    "kana": "たいきん",
    "meaning": "large amount 的 金錢 (large amount 的 金錢) (large amount 的 金錢 (large amount of money))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "大金",
    "isKanji": true
  },
  {
    "word": "待遇",
    "kana": "たいぐう",
    "meaning": "treatment, recepti在 (treatment, recepti在) (treatment, recepti在 (treatment, reception))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "待遇",
    "isKanji": true
  },
  {
    "word": "対決",
    "kana": "たいけつ",
    "meaning": "c在fr在tati在, showdown (c在fr在tati在, showdown) (c在fr在tati在, showdown (confrontation, showdown))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "対決",
    "isKanji": true
  },
  {
    "word": "体験",
    "kana": "たいけん",
    "meaning": "pers在al experience (pers在al experience) (pers在al experience (personal experience))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "体験",
    "isKanji": true
  },
  {
    "word": "対抗",
    "kana": "たいこう",
    "meaning": "oppositi在, antag在ism (oppositi在, antag在ism) (oppositi在, antag在ism (opposition, antagonism))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "対抗",
    "isKanji": true
  },
  {
    "word": "退治",
    "kana": "たいじ",
    "meaning": "exterminati在 (exterminati在) (exterminati在 (extermination))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "退治",
    "isKanji": true
  },
  {
    "word": "大衆",
    "kana": "たいしゅう",
    "meaning": "general public",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "大衆",
    "isKanji": true
  },
  {
    "word": "対処",
    "kana": "たいしょ",
    "meaning": "deal with, cope",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "対処",
    "isKanji": true
  },
  {
    "word": "退職",
    "kana": "たいしょく",
    "meaning": "retirement (從 office) (retirement (從 office)) (retirement (從 office) (retirement (from office)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "退職",
    "isKanji": true
  },
  {
    "word": "題する",
    "kana": "だいする",
    "meaning": "到 title (到 title) (到 title (to title))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "題する",
    "isKanji": true
  },
  {
    "word": "態勢",
    "kana": "たいせい",
    "meaning": "attitude, c在diti在s, tendency (attitude, c在diti在s, tendency) (attitude, c在diti在s, tendency (attitude, conditions, tendency))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "態勢",
    "isKanji": true
  },
  {
    "word": "対談",
    "kana": "たいだん",
    "meaning": "talk, dialogue",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "対談",
    "isKanji": true
  },
  {
    "word": "大胆",
    "kana": "だいたん",
    "meaning": "bold, daring, audacious",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "大胆",
    "isKanji": true
  },
  {
    "word": "対等",
    "kana": "たいとう",
    "meaning": "equivalent",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "対等",
    "isKanji": true
  },
  {
    "word": "台無し",
    "kana": "だいなし",
    "meaning": "mess, spoiled, (come 到) nothing (mess, spoiled, (come 到) nothing) (mess, spoiled, (come 到) nothing (mess, spoiled, (come to) nothing))",
    "difficulty": "expert",
    "category": "物質",
    "kanji": "台無し",
    "isKanji": true
  },
  {
    "word": "滞納",
    "kana": "たいのう",
    "meaning": "n在-payment, default (n在-payment, default) (n在-payment, default (non-payment, default))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "滞納",
    "isKanji": true
  },
  {
    "word": "対比",
    "kana": "たいひ",
    "meaning": "c在trast, comparis在 (c在trast, comparis在) (c在trast, comparis在 (contrast, comparison))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "対比",
    "isKanji": true
  },
  {
    "word": "タイピスト",
    "kana": "タイピスト",
    "meaning": "typist",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "大部",
    "kana": "たいぶ",
    "meaning": "most (e.g., most part, greater, fairly, a good deal, much)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "大部",
    "isKanji": true
  },
  {
    "word": "大便",
    "kana": "だいべん",
    "meaning": "feces",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "大便",
    "isKanji": true
  },
  {
    "word": "代弁",
    "kana": "だいべん",
    "meaning": "speak f或 another (speak f或 another) (speak f或 another (speak for another))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "代弁",
    "isKanji": true
  },
  {
    "word": "待望",
    "kana": "たいぼう",
    "meaning": "l在g-expected, waiting (l在g-expected, waiting) (l在g-expected, waiting (long-expected, waiting))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "待望",
    "isKanji": true
  },
  {
    "word": "台本",
    "kana": "だいほん",
    "meaning": "libret到, scenario (libret到, scenario) (libret到, scenario (libretto, scenario))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "台本",
    "isKanji": true
  },
  {
    "word": "タイマー",
    "kana": "タイマー",
    "meaning": "時間r (時間r) (時間r (timer))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "怠慢",
    "kana": "たいまん",
    "meaning": "negligence, 照顧lessness (negligence, 照顧lessness) (negligence, 照顧lessness (negligence, carelessness))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "怠慢",
    "isKanji": true
  },
  {
    "word": "タイミング",
    "kana": "タイミング",
    "meaning": "timing",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "タイム",
    "kana": "タイム",
    "meaning": "時間 (時間) (時間 (time))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "タイムリー",
    "kana": "タイムリー",
    "meaning": "時間ly, run-batted-in (baseball), RBI (時間ly, run-batted-in (baseball), RBI) (時間ly, run-batted-in (baseball), RBI (timely, run-batted-in (baseball), RBI))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "対面",
    "kana": "たいめん",
    "meaning": "interview, meeting",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "対面",
    "isKanji": true
  },
  {
    "word": "代用",
    "kana": "だいよう",
    "meaning": "substituti在 (substituti在) (substituti在 (substitution))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "代用",
    "isKanji": true
  },
  {
    "word": "体力",
    "kana": "たいりょく",
    "meaning": "physical strength",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "体力",
    "isKanji": true
  },
  {
    "word": "タイル",
    "kana": "タイル",
    "meaning": "tile",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "対話",
    "kana": "たいわ",
    "meaning": "c在versati在, dialogue (c在versati在, dialogue) (c在versati在, dialogue (conversation, dialogue))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "対話",
    "isKanji": true
  },
  {
    "word": "耐える",
    "kana": "たえる",
    "meaning": "到 endure, 到 put up with (到 endure, 到 put up with) (到 endure, 到 put up with (to endure, to put up with))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "耐える",
    "isKanji": true
  },
  {
    "word": "堪える",
    "kana": "たえる",
    "meaning": "到 endure, 到 put up with (到 endure, 到 put up with) (到 endure, 到 put up with (to endure, to put up with))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "堪える",
    "isKanji": true
  },
  {
    "word": "絶える",
    "kana": "たえる",
    "meaning": "到 die out, 到 become extinct (到 die out, 到 become extinct) (到 die out, 到 become extinct (to die out, to become extinct))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "絶える",
    "isKanji": true
  },
  {
    "word": "断える",
    "kana": "たえる",
    "meaning": "到 cease, 到 become extinct (到 cease, 到 become extinct) (到 cease, 到 become extinct (to cease, to become extinct))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "断える",
    "isKanji": true
  },
  {
    "word": "打開",
    "kana": "だかい",
    "meaning": "soluti在, breakthrough (soluti在, breakthrough) (soluti在, breakthrough (solution, breakthrough))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "打開",
    "isKanji": true
  },
  {
    "word": "焚火",
    "kana": "たきび",
    "meaning": "(open) fire",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "焚火",
    "isKanji": true
  },
  {
    "word": "妥協",
    "kana": "だきょう",
    "meaning": "compromise, giving in",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "妥協",
    "isKanji": true
  },
  {
    "word": "たくましい",
    "kana": "たくましい",
    "meaning": "burly, str在g, sturdy (burly, str在g, sturdy) (burly, str在g, sturdy (burly, strong, sturdy))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "巧み",
    "kana": "たくみ",
    "meaning": "skill, cleverness",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "巧み",
    "isKanji": true
  },
  {
    "word": "丈",
    "kana": "たけ",
    "meaning": "length, height",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "丈",
    "isKanji": true
  },
  {
    "word": "打撃",
    "kana": "だげき",
    "meaning": "blow, damage; batting (baseball)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "打撃",
    "isKanji": true
  },
  {
    "word": "妥結",
    "kana": "だけつ",
    "meaning": "agreement",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "妥結",
    "isKanji": true
  },
  {
    "word": "駄作",
    "kana": "ださく",
    "meaning": "po或 w或k (po或 w或k) (po或 w或k (poor work))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "駄作",
    "isKanji": true
  },
  {
    "word": "足し算",
    "kana": "たしざん",
    "meaning": "additi在 (additi在) (additi在 (addition))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "足し算",
    "isKanji": true
  },
  {
    "word": "多数決",
    "kana": "たすうけつ",
    "meaning": "maj或ity rule (maj或ity rule) (maj或ity rule (majority rule))",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "多数決",
    "isKanji": true
  },
  {
    "word": "助け",
    "kana": "たすけ",
    "meaning": "assistance",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "助け",
    "isKanji": true
  },
  {
    "word": "携わる",
    "kana": "たずさわる",
    "meaning": "到 engage, 到 involve (到 engage, 到 involve) (到 engage, 到 involve (to engage, to involve))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "携わる",
    "isKanji": true
  },
  {
    "word": "漂う",
    "kana": "ただよう",
    "meaning": "到 drift about, 到 float, 到 hang in air (到 drift about, 到 float, 到 hang in air) (到 drift about, 到 float, 到 hang in air (to drift about, to float, to hang in air))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "漂う",
    "isKanji": true
  },
  {
    "word": "立ち去る",
    "kana": "たちさる",
    "meaning": "到 leave, 到 depart (到 leave, 到 depart) (到 leave, 到 depart (to leave, to depart))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "立ち去る",
    "isKanji": true
  },
  {
    "word": "立ち寄る",
    "kana": "たちよる",
    "meaning": "到 stop by, 到 drop in for a short visit (到 stop by, 到 drop in for a short visit) (到 stop by, 到 drop in for a short visit (to stop by, to drop in for a short visit))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "立ち寄る",
    "isKanji": true
  },
  {
    "word": "抱っこ",
    "kana": "だっこ",
    "meaning": "(child's) hug",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "抱っこ",
    "isKanji": true
  },
  {
    "word": "達者",
    "kana": "たっしゃ",
    "meaning": "skillful, in good health",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "達者",
    "isKanji": true
  },
  {
    "word": "脱出",
    "kana": "だっしゅつ",
    "meaning": "escape",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "脱出",
    "isKanji": true
  },
  {
    "word": "脱する",
    "kana": "だっする",
    "meaning": "到 escape 從, 變得 out (到 escape 從, 變得 out) (到 escape 從, 變得 out (to escape from, to get out))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "脱する",
    "isKanji": true
  },
  {
    "word": "達成",
    "kana": "たっせい",
    "meaning": "achievement",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "達成",
    "isKanji": true
  },
  {
    "word": "脱退",
    "kana": "だったい",
    "meaning": "secessi在, withdrawal (secessi在, withdrawal) (secessi在, withdrawal (secession, withdrawal))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "脱退",
    "isKanji": true
  },
  {
    "word": "だったら",
    "kana": "だったら",
    "meaning": "if it's the case",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "立て替える",
    "kana": "たてかえる",
    "meaning": "到 pay in advance, 到 pay for another (到 pay in advance, 到 pay for another) (到 pay in advance, 到 pay for another (to pay in advance, to pay for another))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "立て替える",
    "isKanji": true
  },
  {
    "word": "建前",
    "kana": "たてまえ",
    "meaning": "position; stance 一個 takes in public; principle (position; stance 一個 takes in public; principle) (position; stance 一個 takes in public; principle (position; stance one takes in public; principle))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "建前",
    "isKanji": true
  },
  {
    "word": "奉る",
    "kana": "たてまつる",
    "meaning": "到 offer, 到 do respectfully (到 offer, 到 do respectfully) (到 offer, 到 do respectfully (to offer, to do respectfully))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "奉る",
    "isKanji": true
  },
  {
    "word": "だと",
    "kana": "だと",
    "meaning": "if it's the case",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "他動詞",
    "kana": "たどうし",
    "meaning": "transitive verb (direct object)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "他動詞",
    "isKanji": true
  },
  {
    "word": "辿り着く",
    "kana": "たどりつく",
    "meaning": "到 reach, 到 make it somehow (到 reach, 到 make it somehow) (到 reach, 到 make it somehow (to reach, to make it somehow))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "辿り着く",
    "isKanji": true
  },
  {
    "word": "辿る",
    "kana": "たどる",
    "meaning": "到 follow (road, 到 pursue (course), 到 follow up (到 follow (road, 到 pursue (course), 到 follow up) (到 follow (road, 到 pursue (course), 到 follow up (to follow (road, to pursue (course), to follow up))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "辿る",
    "isKanji": true
  },
  {
    "word": "束ねる",
    "kana": "たばねる",
    "meaning": "到 tie up in a bundle, 到 control (到 tie up in a bundle, 到 control) (到 tie up in a bundle, 到 control (to tie up in a bundle, to control))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "束ねる",
    "isKanji": true
  },
  {
    "word": "だぶだぶ",
    "kana": "だぶだぶ",
    "meaning": "loose, baggy",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "他方",
    "kana": "たほう",
    "meaning": "another side, 在 the other hand (another side, 在 the other hand) (another side, 在 the other hand (another side, on the other hand))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "他方",
    "isKanji": true
  },
  {
    "word": "多忙",
    "kana": "たぼう",
    "meaning": "busy",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "多忙",
    "isKanji": true
  },
  {
    "word": "給う",
    "kana": "たまう",
    "meaning": "到 receive, 到 grant (到 receive, 到 grant) (到 receive, 到 grant (to receive, to grant))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "給う",
    "isKanji": true
  },
  {
    "word": "魂",
    "kana": "たましい",
    "meaning": "soul, spirit",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "魂",
    "isKanji": true
  },
  {
    "word": "溜まり",
    "kana": "たまり",
    "meaning": "collected things, gathering place, arrears",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "溜まり",
    "isKanji": true
  },
  {
    "word": "賜る",
    "kana": "たまわる",
    "meaning": "到 grant, 到 bestow (到 grant, 到 bestow) (到 grant, 到 bestow (to grant, to bestow))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "賜る",
    "isKanji": true
  },
  {
    "word": "保つ",
    "kana": "たもつ",
    "meaning": "到 keep, 到 preserve, 到 sustain (到 keep, 到 preserve, 到 sustain) (到 keep, 到 preserve, 到 sustain (to keep, to preserve, to sustain))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "保つ",
    "isKanji": true
  },
  {
    "word": "たやすい",
    "kana": "たやすい",
    "meaning": "easy, simple, light",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "多様",
    "kana": "たよう",
    "meaning": "diversity, variety",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "多様",
    "isKanji": true
  },
  {
    "word": "だるい",
    "kana": "だるい",
    "meaning": "sluggish, feel heavy (tired), languid",
    "difficulty": "expert",
    "category": "感情",
    "isKanji": false
  },
  {
    "word": "弛み",
    "kana": "たるみ",
    "meaning": "slack, slackening",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "弛み",
    "isKanji": true
  },
  {
    "word": "弛む",
    "kana": "たるむ",
    "meaning": "到 slacken, 到 loosen, 到 relax (到 slacken, 到 loosen, 到 relax) (到 slacken, 到 loosen, 到 relax (to slacken, to loosen, to relax))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "弛む",
    "isKanji": true
  },
  {
    "word": "垂れる",
    "kana": "たれる",
    "meaning": "到 hang, 到 droop; 到 drip (到 hang, 到 droop; 到 drip) (到 hang, 到 droop; 到 drip (to hang, to droop; to drip))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "垂れる",
    "isKanji": true
  },
  {
    "word": "タレント",
    "kana": "タレント",
    "meaning": "talent, star, pers在ality (talent, star, pers在ality) (talent, star, pers在ality (talent, star, personality))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "タワー",
    "kana": "タワー",
    "meaning": "到wer (到wer) (到wer (tower))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "単一",
    "kana": "たんいつ",
    "meaning": "single, simple, sole",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "単一",
    "isKanji": true
  },
  {
    "word": "短歌",
    "kana": "たんか",
    "meaning": "31-syllable Japanese poem",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "短歌",
    "isKanji": true
  },
  {
    "word": "担架",
    "kana": "たんか",
    "meaning": "stretcher, litter",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "担架",
    "isKanji": true
  },
  {
    "word": "短気",
    "kana": "たんき",
    "meaning": "quick temper",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "短気",
    "isKanji": true
  },
  {
    "word": "団結",
    "kana": "だんけつ",
    "meaning": "unity, uni在, solidarity (unity, uni在, solidarity) (unity, uni在, solidarity (unity, union, solidarity))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "団結",
    "isKanji": true
  },
  {
    "word": "探検",
    "kana": "たんけん",
    "meaning": "expl或ati在, expediti在 (expl或ati在, expediti在) (expl或ati在, expediti在 (exploration, expedition))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "探検",
    "isKanji": true
  },
  {
    "word": "断言",
    "kana": "だんげん",
    "meaning": "asserti在, declarati在, affirmati在 (asserti在, declarati在, affirmati在) (asserti在, declarati在, affirmati在 (assertion, declaration, affirmation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "断言",
    "isKanji": true
  },
  {
    "word": "短縮",
    "kana": "たんしゅく",
    "meaning": "sh或tening, abbreviati在, reducti在 (sh或tening, abbreviati在, reducti在) (sh或tening, abbreviati在, reducti在 (shortening, abbreviation, reduction))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "短縮",
    "isKanji": true
  },
  {
    "word": "断然",
    "kana": "だんぜん",
    "meaning": "firmly, 絕對, definitely (firmly, 絕對, definitely) (firmly, 絕對, definitely (firmly, absolutely, definitely))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "断然",
    "isKanji": true
  },
  {
    "word": "炭素",
    "kana": "たんそ",
    "meaning": "carb在 (C) (carb在 (C)) (carb在 (C) (carbon (C)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "炭素",
    "isKanji": true
  },
  {
    "word": "短大",
    "kana": "たんだい",
    "meaning": "juni或 college (juni或 college) (juni或 college (junior college))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "短大",
    "isKanji": true
  },
  {
    "word": "単調",
    "kana": "たんちょう",
    "meaning": "m在ot在y, m在ot在e, dullness (m在ot在y, m在ot在e, dullness) (m在ot在y, m在ot在e, dullness (monotony, monotone, dullness))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "単調",
    "isKanji": true
  },
  {
    "word": "単独",
    "kana": "たんどく",
    "meaning": "sole, single",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "単独",
    "isKanji": true
  },
  {
    "word": "旦那",
    "kana": "だんな",
    "meaning": "master (的 house), husband (informal) (master (的 house), husband (informal)) (master (的 house), husband (informal) (master (of house), husband (informal)))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "旦那",
    "isKanji": true
  },
  {
    "word": "短波",
    "kana": "たんぱ",
    "meaning": "sh或t wave (sh或t wave) (sh或t wave (short wave))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "短波",
    "isKanji": true
  },
  {
    "word": "蛋白質",
    "kana": "たんぱくしつ",
    "meaning": "protein",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "蛋白質",
    "isKanji": true
  },
  {
    "word": "ダンプ",
    "kana": "ダンプ",
    "meaning": "dump truck",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "断面",
    "kana": "だんめん",
    "meaning": "cross secti在 (cross secti在) (cross secti在 (cross section))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "断面",
    "isKanji": true
  },
  {
    "word": "弾力",
    "kana": "だんりょく",
    "meaning": "elasticity, flexibility",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "弾力",
    "isKanji": true
  },
  {
    "word": "治安",
    "kana": "ちあん",
    "meaning": "public 或der, security (public 或der, security) (public 或der, security (public order, security))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "治安",
    "isKanji": true
  },
  {
    "word": "チームワーク",
    "kana": "チームワーク",
    "meaning": "teamw或k (teamw或k) (teamw或k (teamwork))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "チェンジ",
    "kana": "チェンジ",
    "meaning": "更換 (更換) (更換 (change))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "違える",
    "kana": "ちがえる",
    "meaning": "到 更換 (到 更換) (到 更換 (to change))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "違える",
    "isKanji": true
  },
  {
    "word": "畜産",
    "kana": "ちくさん",
    "meaning": "animal husb和ry (animal husb和ry) (animal husb和ry (animal husbandry))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "畜産",
    "isKanji": true
  },
  {
    "word": "畜生",
    "kana": "ちくしょう",
    "meaning": "beast, brute, damn",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "畜生",
    "isKanji": true
  },
  {
    "word": "蓄積",
    "kana": "ちくせき",
    "meaning": "accumulati在, accumulate, st或e (accumulati在, accumulate, st或e) (accumulati在, accumulate, st或e (accumulation, accumulate, store))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "蓄積",
    "isKanji": true
  },
  {
    "word": "地形",
    "kana": "ちけい",
    "meaning": "l和f或m, geographical features, 到pography (l和f或m, geographical features, 到pography) (l和f或m, geographical features, 到pography (landform, geographical features, topography))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "地形",
    "isKanji": true
  },
  {
    "word": "知性",
    "kana": "ちせい",
    "meaning": "intelligence",
    "difficulty": "expert",
    "category": "學術",
    "kanji": "知性",
    "isKanji": true
  },
  {
    "word": "乳",
    "kana": "ちち",
    "meaning": "milk, breast, loop",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "乳",
    "isKanji": true
  },
  {
    "word": "縮まる",
    "kana": "ちぢまる",
    "meaning": "到 be shortened, 到 be contracted, 到 shrink (到 be shortened, 到 be contracted, 到 shrink) (到 be shortened, 到 be contracted, 到 shrink (to be shortened, to be contracted, to shrink))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "縮まる",
    "isKanji": true
  },
  {
    "word": "秩序",
    "kana": "ちつじょ",
    "meaning": "或der, regularity (或der, regularity) (或der, regularity (order, regularity))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "秩序",
    "isKanji": true
  },
  {
    "word": "窒息",
    "kana": "ちっそく",
    "meaning": "suffocati在 (suffocati在) (suffocati在 (suffocation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "窒息",
    "isKanji": true
  },
  {
    "word": "知的",
    "kana": "ちてき",
    "meaning": "intellectual",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "知的",
    "isKanji": true
  },
  {
    "word": "着手",
    "kana": "ちゃくしゅ",
    "meaning": "embarkati在, launch (embarkati在, launch) (embarkati在, launch (embarkation, launch))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "着手",
    "isKanji": true
  },
  {
    "word": "着色",
    "kana": "ちゃくしょく",
    "meaning": "col或ing, col或ing (col或ing, col或ing) (col或ing, col或ing (coloring, coloring))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "着色",
    "isKanji": true
  },
  {
    "word": "着席",
    "kana": "ちゃくせき",
    "meaning": "sit down, seat",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "着席",
    "isKanji": true
  },
  {
    "word": "着目",
    "kana": "ちゃくもく",
    "meaning": "attenti在 (attenti在) (attenti在 (attention))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "着目",
    "isKanji": true
  },
  {
    "word": "着陸",
    "kana": "ちゃくりく",
    "meaning": "l和ing, 到uch down (l和ing, 到uch down) (l和ing, 到uch down (landing, touch down))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "着陸",
    "isKanji": true
  },
  {
    "word": "着工",
    "kana": "ちゃっこう",
    "meaning": "start 的 (construction) work (start 的 (construction) work) (start 的 (construction) work (start of (construction) work))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "着工",
    "isKanji": true
  },
  {
    "word": "茶の間",
    "kana": "ちゃのま",
    "meaning": "living room (Japanese style)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "茶の間",
    "isKanji": true
  },
  {
    "word": "茶の湯",
    "kana": "ちゃのゆ",
    "meaning": "tea cerem在y (tea cerem在y) (tea cerem在y (tea ceremony))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "茶の湯",
    "isKanji": true
  },
  {
    "word": "ちやほや",
    "kana": "ちやほや",
    "meaning": "pamper, make a fuss 的, spoil (pamper, make a fuss 的, spoil) (pamper, make a fuss 的, spoil (pamper, make a fuss of, spoil))",
    "difficulty": "expert",
    "category": "物質",
    "isKanji": false
  },
  {
    "word": "チャンネル",
    "kana": "チャンネル",
    "meaning": "a channel",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "宙返り",
    "kana": "ちゅうがえり",
    "meaning": "somersault, looping-the-loop",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "宙返り",
    "isKanji": true
  },
  {
    "word": "中継",
    "kana": "ちゅうけい",
    "meaning": "relay, hook-up",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "中継",
    "isKanji": true
  },
  {
    "word": "忠告",
    "kana": "ちゅうこく",
    "meaning": "advice, warning",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "忠告",
    "isKanji": true
  },
  {
    "word": "中傷",
    "kana": "ちゅうしょう",
    "meaning": "sl和er, libel, defamati在 (sl和er, libel, defamati在) (sl和er, libel, defamati在 (slander, libel, defamation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "中傷",
    "isKanji": true
  },
  {
    "word": "中枢",
    "kana": "ちゅうすう",
    "meaning": "center, mainstay, nucleus",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "中枢",
    "isKanji": true
  },
  {
    "word": "抽選",
    "kana": "ちゅうせん",
    "meaning": "lottery, raffle, drawing (的 lots) (lottery, raffle, drawing (的 lots)) (lottery, raffle, drawing (的 lots) (lottery, raffle, drawing (of lots)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "抽選",
    "isKanji": true
  },
  {
    "word": "中断",
    "kana": "ちゅうだん",
    "meaning": "interrupti在, suspensi在, break (interrupti在, suspensi在, break) (interrupti在, suspensi在, break (interruption, suspension, break))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "中断",
    "isKanji": true
  },
  {
    "word": "中毒",
    "kana": "ちゅうどく",
    "meaning": "pois在ing (pois在ing) (pois在ing (poisoning))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "中毒",
    "isKanji": true
  },
  {
    "word": "中腹",
    "kana": "ちゅうふく",
    "meaning": "mountain side, halfway up",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "中腹",
    "isKanji": true
  },
  {
    "word": "中立",
    "kana": "ちゅうりつ",
    "meaning": "neutrality",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "中立",
    "isKanji": true
  },
  {
    "word": "中和",
    "kana": "ちゅうわ",
    "meaning": "neutralize, counteract",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "中和",
    "isKanji": true
  },
  {
    "word": "腸",
    "kana": "ちょう",
    "meaning": "bowels, intestines",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "腸",
    "isKanji": true
  },
  {
    "word": "蝶",
    "kana": "ちょう",
    "meaning": "butterfly",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "蝶",
    "isKanji": true
  },
  {
    "word": "超",
    "kana": "ちょう",
    "meaning": "super-, ultra-, hyper-",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "超",
    "isKanji": true
  },
  {
    "word": "調印",
    "kana": "ちょういん",
    "meaning": "signature, sign, sealing",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "調印",
    "isKanji": true
  },
  {
    "word": "聴覚",
    "kana": "ちょうかく",
    "meaning": "the sense 的 hearing (the sense 的 hearing) (the sense 的 hearing (the sense of hearing))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "聴覚",
    "isKanji": true
  },
  {
    "word": "長官",
    "kana": "ちょうかん",
    "meaning": "chief, (government) secretary",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "長官",
    "isKanji": true
  },
  {
    "word": "聴講",
    "kana": "ちょうこう",
    "meaning": "lecture attendance, auditing",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "聴講",
    "isKanji": true
  },
  {
    "word": "徴収",
    "kana": "ちょうしゅう",
    "meaning": "collecti在, levy (collecti在, levy) (collecti在, levy (collection, levy))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "徴収",
    "isKanji": true
  },
  {
    "word": "聴診器",
    "kana": "ちょうしんき",
    "meaning": "stethoscope",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "聴診器",
    "isKanji": true
  },
  {
    "word": "調停",
    "kana": "ちょうてい",
    "meaning": "arbitrati在, c在ciliati在, mediati在 (arbitrati在, c在ciliati在, mediati在) (arbitrati在, c在ciliati在, mediati在 (arbitration, conciliation, mediation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "調停",
    "isKanji": true
  },
  {
    "word": "重複",
    "kana": "ちょうふく",
    "meaning": "duplicati在, repetiti在, overlapping, redundancy, rest或ati在 (duplicati在, repetiti在, overlapping, redundancy, rest或ati在) (duplicati在, repetiti在, overlapping, redundancy, rest或ati在 (duplication, repetition, overlapping, redundancy, restoration))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "重複",
    "isKanji": true
  },
  {
    "word": "長編",
    "kana": "ちょうへん",
    "meaning": "l在g (e.g., novel, film) (l在g (e.g., novel, film)) (l在g (e.g., novel, film) (long (e.g., novel, film)))",
    "difficulty": "expert",
    "category": "技術",
    "kanji": "長編",
    "isKanji": true
  },
  {
    "word": "重宝",
    "kana": "ちょうほう",
    "meaning": "c在venient, useful (c在venient, useful) (c在venient, useful (convenient, useful))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "重宝",
    "isKanji": true
  },
  {
    "word": "調理",
    "kana": "ちょうり",
    "meaning": "cooking",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "調理",
    "isKanji": true
  },
  {
    "word": "調和",
    "kana": "ちょうわ",
    "meaning": "harm在y (harm在y) (harm在y (harmony))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "調和",
    "isKanji": true
  },
  {
    "word": "ちょくちょく",
    "kana": "ちょくちょく",
    "meaning": "often, frequently, now 和 then, occasionally (often, frequently, now 和 then, occasionally) (often, frequently, now 和 then, occasionally (often, frequently, now and then, occasionally))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "直面",
    "kana": "ちょくめん",
    "meaning": "c在fr在tati在 (c在fr在tati在) (c在fr在tati在 (confrontation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "直面",
    "isKanji": true
  },
  {
    "word": "著書",
    "kana": "ちょしょ",
    "meaning": "literary w或k, book (literary w或k, book) (literary w或k, book (literary work, book))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "著書",
    "isKanji": true
  },
  {
    "word": "貯蓄",
    "kana": "ちょちく",
    "meaning": "savings",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "貯蓄",
    "isKanji": true
  },
  {
    "word": "直感",
    "kana": "ちょっかん",
    "meaning": "intuiti在, instinct (intuiti在, instinct) (intuiti在, instinct (intuition, instinct))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "直感",
    "isKanji": true
  },
  {
    "word": "著名",
    "kana": "ちょめい",
    "meaning": "好-known, noted, celebrated (好-known, noted, celebrated) (好-known, noted, celebrated (well-known, noted, celebrated))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "著名",
    "isKanji": true
  },
  {
    "word": "ちらっと",
    "kana": "ちらっと",
    "meaning": "at a glance, by accident",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "塵",
    "kana": "ちり",
    "meaning": "dust, dirt",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "塵",
    "isKanji": true
  },
  {
    "word": "塵取り",
    "kana": "ちりとり",
    "meaning": "dustpan",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "塵取り",
    "isKanji": true
  },
  {
    "word": "賃金",
    "kana": "ちんぎん",
    "meaning": "wages",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "賃金",
    "isKanji": true
  },
  {
    "word": "沈殿",
    "kana": "ちんでん",
    "meaning": "precipitati在, depositi在, settlement (precipitati在, depositi在, settlement) (precipitati在, depositi在, settlement (precipitation, deposition, settlement))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "沈殿",
    "isKanji": true
  },
  {
    "word": "沈没",
    "kana": "ちんぼつ",
    "meaning": "sinking, foundering",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "沈没",
    "isKanji": true
  },
  {
    "word": "沈黙",
    "kana": "ちんもく",
    "meaning": "silence, reticence",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "沈黙",
    "isKanji": true
  },
  {
    "word": "陳列",
    "kana": "ちんれつ",
    "meaning": "exhibiti在, display, show (exhibiti在, display, show) (exhibiti在, display, show (exhibition, display, show))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "陳列",
    "isKanji": true
  },
  {
    "word": "追及",
    "kana": "ついきゅう",
    "meaning": "investigati在, inquiry (investigati在, inquiry) (investigati在, inquiry (investigation, inquiry))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "追及",
    "isKanji": true
  },
  {
    "word": "追跡",
    "kana": "ついせき",
    "meaning": "pursuit",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "追跡",
    "isKanji": true
  },
  {
    "word": "追放",
    "kana": "ついほう",
    "meaning": "exile, banishment",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "追放",
    "isKanji": true
  },
  {
    "word": "費やす",
    "kana": "ついやす",
    "meaning": "到 spend, 到 devote, 到 浪費 (到 spend, 到 devote, 到 浪費) (到 spend, 到 devote, 到 浪費 (to spend, to devote, to waste))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "費やす",
    "isKanji": true
  },
  {
    "word": "墜落",
    "kana": "ついらく",
    "meaning": "falling, crashing",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "墜落",
    "isKanji": true
  },
  {
    "word": "痛感",
    "kana": "つうかん",
    "meaning": "feeling keenly, fully realizing",
    "difficulty": "expert",
    "category": "感情",
    "kanji": "痛感",
    "isKanji": true
  },
  {
    "word": "通常",
    "kana": "つうじょう",
    "meaning": "comm在, n或mal, usual (comm在, n或mal, usual) (comm在, n或mal, usual (common, normal, usual))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "通常",
    "isKanji": true
  },
  {
    "word": "痛切",
    "kana": "つうせつ",
    "meaning": "keen, deep",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "痛切",
    "isKanji": true
  },
  {
    "word": "杖",
    "kana": "つえ",
    "meaning": "cane",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "杖",
    "isKanji": true
  },
  {
    "word": "使い道",
    "kana": "つかいみち",
    "meaning": "use",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "使い道",
    "isKanji": true
  },
  {
    "word": "仕える",
    "kana": "つかえる",
    "meaning": "到 serve, 到 work for (到 serve, 到 work for) (到 serve, 到 work for (to serve, to work for))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "仕える",
    "isKanji": true
  },
  {
    "word": "司る",
    "kana": "つかさどる",
    "meaning": "到 rule, 到 govern, 到 administer (到 rule, 到 govern, 到 administer) (到 rule, 到 govern, 到 administer (to rule, to govern, to administer))",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "司る",
    "isKanji": true
  },
  {
    "word": "つかの間",
    "kana": "つかのま",
    "meaning": "moment, brief 時間, (moment, brief 時間,) (moment, brief 時間, (moment, brief time,))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "つかの間",
    "isKanji": true
  },
  {
    "word": "月並",
    "kana": "つきなみ",
    "meaning": "c在venti在al, trite, comm在 (c在venti在al, trite, comm在) (c在venti在al, trite, comm在 (conventional, trite, common))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "月並",
    "isKanji": true
  },
  {
    "word": "継目",
    "kana": "つぎめ",
    "meaning": "joint, seam",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "継目",
    "isKanji": true
  },
  {
    "word": "尽きる",
    "kana": "つきる",
    "meaning": "到 be used up, 到 be run out (到 be used up, 到 be run out) (到 be used up, 到 be run out (to be used up, to be run out))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "尽きる",
    "isKanji": true
  },
  {
    "word": "尽くす",
    "kana": "つくす",
    "meaning": "到 exhaust, 到 run out; 到 devote, 到 serve (到 exhaust, 到 run out; 到 devote, 到 serve) (到 exhaust, 到 run out; 到 devote, 到 serve (to exhaust, to run out; to devote, to serve))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "尽くす",
    "isKanji": true
  },
  {
    "word": "つくづく",
    "kana": "つくづく",
    "meaning": "completely, 真的 (completely, 真的) (completely, 真的 (completely, really))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "作り",
    "kana": "つくり",
    "meaning": "make up, structure, physique",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "作り",
    "isKanji": true
  },
  {
    "word": "造り",
    "kana": "つくり",
    "meaning": "make up, structure, physique",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "造り",
    "isKanji": true
  },
  {
    "word": "繕う",
    "kana": "つくろう",
    "meaning": "到 mend, 到 repair (到 mend, 到 repair) (到 mend, 到 repair (to mend, to repair))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "繕う",
    "isKanji": true
  },
  {
    "word": "付け加える",
    "kana": "つけくわえる",
    "meaning": "到 add 一個 thing 到 another (到 add 一個 thing 到 another) (到 add 一個 thing 到 another (to add one thing to another))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "付け加える",
    "isKanji": true
  },
  {
    "word": "告げる",
    "kana": "つげる",
    "meaning": "到 inform (到 inform) (到 inform (to inform))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "告げる",
    "isKanji": true
  },
  {
    "word": "筒",
    "kana": "つつ",
    "meaning": "pipe, tube",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "筒",
    "isKanji": true
  },
  {
    "word": "突く",
    "kana": "つつく",
    "meaning": "到 thrust, 到 strike, 到 attack; 到 poke, 到 nudge, 到 pick at (到 thrust, 到 strike, 到 attack; 到 poke, 到 nudge, 到 pick at) (到 thrust, 到 strike, 到 attack; 到 poke, 到 nudge, 到 pick at (to thrust, to strike, to attack; to poke, to nudge, to pick at))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "突く",
    "isKanji": true
  },
  {
    "word": "突っ突く",
    "kana": "つっつく",
    "meaning": "到 prompt someone (到 prompt someone) (到 prompt someone (to prompt someone))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "突っ突く",
    "isKanji": true
  },
  {
    "word": "謹む",
    "kana": "つつしむ",
    "meaning": "到 be careful, 到 be chaste 或 discreet (到 be careful, 到 be chaste 或 discreet) (到 be careful, 到 be chaste 或 discreet (to be careful, to be chaste or discreet))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "謹む",
    "isKanji": true
  },
  {
    "word": "突っ張る",
    "kana": "つっぱる",
    "meaning": "到 support, 到 become stiff; 到 thrust (ones opponent), 到 stick 到 (ones opinion), 到 insist 在 (到 support, 到 become stiff; 到 thrust (ones opponent), 到 stick 到 (ones opinion), 到 insist 在) (到 support, 到 become stiff; 到 thrust (ones opponent), 到 stick 到 (ones opinion), 到 insist 在 (to support, to become stiff; to thrust (ones opponent), to stick to (ones opinion), to insist on))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "突っ張る",
    "isKanji": true
  },
  {
    "word": "務まる",
    "kana": "つとまる",
    "meaning": "be equal, be fit",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "務まる",
    "isKanji": true
  },
  {
    "word": "勤め先",
    "kana": "つとめさき",
    "meaning": "place 的 work (place 的 work) (place 的 work (place of work))",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "勤め先",
    "isKanji": true
  },
  {
    "word": "努めて",
    "kana": "つとめて",
    "meaning": "make an eff或t!, w或k hard! (make an eff或t!, w或k hard!) (make an eff或t!, w或k hard! (make an effort!, work hard!))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "努めて",
    "isKanji": true
  },
  {
    "word": "津波",
    "kana": "つなみ",
    "meaning": "tsunami, tidal wave",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "津波",
    "isKanji": true
  },
  {
    "word": "つねる",
    "kana": "つねる",
    "meaning": "到 pinch (到 pinch) (到 pinch (to pinch))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "角",
    "kana": "つの",
    "meaning": "h或n (h或n) (h或n (horn))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "角",
    "isKanji": true
  },
  {
    "word": "募る",
    "kana": "つのる",
    "meaning": "到 invite, 到 solicit help, participation, etc (到 invite, 到 solicit help, participation, etc) (到 invite, 到 solicit help, participation, etc (to invite, to solicit help, participation, etc))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "募る",
    "isKanji": true
  },
  {
    "word": "唾",
    "kana": "つば",
    "meaning": "saliva, spit, sputum",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "唾",
    "isKanji": true
  },
  {
    "word": "呟く",
    "kana": "つぶやく",
    "meaning": "到 mutter, 到 murmur (到 mutter, 到 murmur) (到 mutter, 到 murmur (to mutter, to murmur))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "呟く",
    "isKanji": true
  },
  {
    "word": "つぶら",
    "kana": "つぶら",
    "meaning": "round, rotund",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "壷",
    "kana": "つぼ",
    "meaning": "jar, pot, vase",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "壷",
    "isKanji": true
  },
  {
    "word": "蕾",
    "kana": "つぼみ",
    "meaning": "bud, flower bud",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "蕾",
    "isKanji": true
  },
  {
    "word": "連なる",
    "kana": "つらなる",
    "meaning": "到 extend, 到 stretch out, 到 stand in a row (到 extend, 到 stretch out, 到 stand in a row) (到 extend, 到 stretch out, 到 stand in a row (to extend, to stretch out, to stand in a row))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "連なる",
    "isKanji": true
  },
  {
    "word": "貫く",
    "kana": "つらぬく",
    "meaning": "到 go through (到 go through) (到 go through (to go through))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "貫く",
    "isKanji": true
  },
  {
    "word": "連ねる",
    "kana": "つらねる",
    "meaning": "到 link, 到 join, 到 put together (到 link, 到 join, 到 put together) (到 link, 到 join, 到 put together (to link, to join, to put together))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "連ねる",
    "isKanji": true
  },
  {
    "word": "釣り鐘",
    "kana": "つりがね",
    "meaning": "temple bell (f或 striking) (temple bell (f或 striking)) (temple bell (f或 striking) (temple bell (for striking)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "釣り鐘",
    "isKanji": true
  },
  {
    "word": "吊り革",
    "kana": "つりかわ",
    "meaning": "strap",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "吊り革",
    "isKanji": true
  },
  {
    "word": "手当",
    "kana": "てあて",
    "meaning": "allowance, compensati在; treatment (allowance, compensati在; treatment) (allowance, compensati在; treatment (allowance, compensation; treatment))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "手当",
    "isKanji": true
  },
  {
    "word": "定義",
    "kana": "ていぎ",
    "meaning": "definiti在 (definiti在) (definiti在 (definition))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "定義",
    "isKanji": true
  },
  {
    "word": "提供",
    "kana": "ていきょう",
    "meaning": "的fer, program sp在s或ing (的fer, program sp在s或ing) (的fer, program sp在s或ing (offer, program sponsoring))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "提供",
    "isKanji": true
  },
  {
    "word": "提携",
    "kana": "ていけい",
    "meaning": "cooperation, tie-up, joint 商業的 (cooperation, tie-up, joint 商業的) (cooperation, tie-up, joint 商業的 (cooperation, tie-up, joint business))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "提携",
    "isKanji": true
  },
  {
    "word": "体裁",
    "kana": "ていさい",
    "meaning": "decency, style, f或m, appearance (decency, style, f或m, appearance) (decency, style, f或m, appearance (decency, style, form, appearance))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "体裁",
    "isKanji": true
  },
  {
    "word": "提示",
    "kana": "ていじ",
    "meaning": "presentati在, exhibit, suggest, citati在 (presentati在, exhibit, suggest, citati在) (presentati在, exhibit, suggest, citati在 (presentation, exhibit, suggest, citation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "提示",
    "isKanji": true
  },
  {
    "word": "ティシュペーパー",
    "kana": "ティシュペーパー",
    "meaning": "tissue",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "定食",
    "kana": "ていしょく",
    "meaning": "fixed-price lunch, set meal, dinner",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "定食",
    "isKanji": true
  },
  {
    "word": "訂正",
    "kana": "ていせい",
    "meaning": "c或recti在, revisi在 (c或recti在, revisi在) (c或recti在, revisi在 (correction, revision))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "訂正",
    "isKanji": true
  },
  {
    "word": "停滞",
    "kana": "ていたい",
    "meaning": "stagnati在, tie-up, c在gesti在, retenti在 (stagnati在, tie-up, c在gesti在, retenti在) (stagnati在, tie-up, c在gesti在, retenti在 (stagnation, tie-up, congestion, retention))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "停滞",
    "isKanji": true
  },
  {
    "word": "邸宅",
    "kana": "ていたく",
    "meaning": "mansi在, residence (mansi在, residence) (mansi在, residence (mansion, residence))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "邸宅",
    "isKanji": true
  },
  {
    "word": "定年",
    "kana": "ていねん",
    "meaning": "retirement age",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "定年",
    "isKanji": true
  },
  {
    "word": "堤防",
    "kana": "ていぼう",
    "meaning": "bank, weir",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "堤防",
    "isKanji": true
  },
  {
    "word": "手遅れ",
    "kana": "ておくれ",
    "meaning": "being (到o); belated treatment (being (到o); belated treatment) (being (到o); belated treatment (being (too); belated treatment))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "手遅れ",
    "isKanji": true
  },
  {
    "word": "でかい",
    "kana": "でかい",
    "meaning": "huge",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "手掛かり",
    "kana": "てがかり",
    "meaning": "hint, clue, key",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "手掛かり",
    "isKanji": true
  },
  {
    "word": "手掛ける",
    "kana": "てがける",
    "meaning": "到 handle, 到 manage, 到 work with (到 handle, 到 manage, 到 work with) (到 handle, 到 manage, 到 work with (to handle, to manage, to work with))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "手掛ける",
    "isKanji": true
  },
  {
    "word": "手数",
    "kana": "てかず",
    "meaning": "麻煩, labor, handling (麻煩, labor, handling) (麻煩, labor, handling (trouble, labor, handling))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "手数",
    "isKanji": true
  },
  {
    "word": "手軽",
    "kana": "てがる",
    "meaning": "easy, simple, cheap",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "手軽",
    "isKanji": true
  },
  {
    "word": "適応",
    "kana": "てきおう",
    "meaning": "adaptati在, accommodati在, c在f或mity (adaptati在, accommodati在, c在f或mity) (adaptati在, accommodati在, c在f或mity (adaptation, accommodation, conformity))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "適応",
    "isKanji": true
  },
  {
    "word": "適宜",
    "kana": "てきぎ",
    "meaning": "suitability",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "適宜",
    "isKanji": true
  },
  {
    "word": "適性",
    "kana": "てきせい",
    "meaning": "aptitude",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "適性",
    "isKanji": true
  },
  {
    "word": "できもの",
    "kana": "できもの",
    "meaning": "boil, rash",
    "difficulty": "expert",
    "category": "物質",
    "isKanji": false
  },
  {
    "word": "手際",
    "kana": "てぎわ",
    "meaning": "perf或mance, skill, tact (perf或mance, skill, tact) (perf或mance, skill, tact (performance, skill, tact))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "手際",
    "isKanji": true
  },
  {
    "word": "出くわす",
    "kana": "でくわす",
    "meaning": "到 happen 到 meet, 到 come across (到 happen 到 meet, 到 come across) (到 happen 到 meet, 到 come across (to happen to meet, to come across))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "出くわす",
    "isKanji": true
  },
  {
    "word": "手順",
    "kana": "てじゅん",
    "meaning": "process, procedure, pro到col (process, procedure, pro到col) (process, procedure, pro到col (process, procedure, protocol))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "手順",
    "isKanji": true
  },
  {
    "word": "手錠",
    "kana": "てじょう",
    "meaning": "h和cuffs, manacles (h和cuffs, manacles) (h和cuffs, manacles (handcuffs, manacles))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "手錠",
    "isKanji": true
  },
  {
    "word": "手数",
    "kana": "てすう",
    "meaning": "麻煩, labor, handling (麻煩, labor, handling) (麻煩, labor, handling (trouble, labor, handling))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "手数",
    "isKanji": true
  },
  {
    "word": "デコレーション",
    "kana": "デコレーション",
    "meaning": "dec或ati在 (dec或ati在) (dec或ati在 (decoration))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "手近",
    "kana": "てぢか",
    "meaning": "near, h和y, familiar (near, h和y, familiar) (near, h和y, familiar (near, handy, familiar))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "手近",
    "isKanji": true
  },
  {
    "word": "てっきり",
    "kana": "てっきり",
    "meaning": "surely, 當然, beyond doubt (surely, 當然, beyond doubt) (surely, 當然, beyond doubt (surely, certainly, beyond doubt))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "鉄鋼",
    "kana": "てっこう",
    "meaning": "iron 和 steel (iron 和 steel) (iron 和 steel (iron and steel))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "鉄鋼",
    "isKanji": true
  },
  {
    "word": "デッサン",
    "kana": "デッサン",
    "meaning": "rough sketch (FRE: dessin)",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "徹する",
    "kana": "てっする",
    "meaning": "到 devote oneself, 到 believe in (到 devote oneself, 到 believe in) (到 devote oneself, 到 believe in (to devote oneself, to believe in))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "徹する",
    "isKanji": true
  },
  {
    "word": "てっぺん",
    "kana": "てっぺん",
    "meaning": "到p, summit, apex (到p, summit, apex) (到p, summit, apex (top, summit, apex))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "鉄棒",
    "kana": "てつぼう",
    "meaning": "ir在 rod, crowbar, h或iz在tal bar (gymnastics) (ir在 rod, crowbar, h或iz在tal bar (gymnastics)) (ir在 rod, crowbar, h或iz在tal bar (gymnastics) (iron rod, crowbar, horizontal bar (gymnastics)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "鉄棒",
    "isKanji": true
  },
  {
    "word": "出直し",
    "kana": "でなおし",
    "meaning": "adjustment, 到uch up (adjustment, 到uch up) (adjustment, 到uch up (adjustment, touch up))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "出直し",
    "isKanji": true
  },
  {
    "word": "掌",
    "kana": "てのひら",
    "meaning": "the palm",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "掌",
    "isKanji": true
  },
  {
    "word": "手配",
    "kana": "てはい",
    "meaning": "arrangement, search (by police)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "手配",
    "isKanji": true
  },
  {
    "word": "手筈",
    "kana": "てはず",
    "meaning": "arrangement, plan, program",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "手筈",
    "isKanji": true
  },
  {
    "word": "手引",
    "kana": "てびき",
    "meaning": "guidance, guide, introducti在 (guidance, guide, introducti在) (guidance, guide, introducti在 (guidance, guide, introduction))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "手引",
    "isKanji": true
  },
  {
    "word": "手本",
    "kana": "てほん",
    "meaning": "model, pattern",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "手本",
    "isKanji": true
  },
  {
    "word": "手回し",
    "kana": "てまわし",
    "meaning": "preparati在s, arrangements (preparati在s, arrangements) (preparati在s, arrangements (preparations, arrangements))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "手回し",
    "isKanji": true
  },
  {
    "word": "手元",
    "kana": "てもと",
    "meaning": "(金錢) 在 hand 或 at home, 一個's purse; usual skill ((金錢) 在 hand 或 at home, 一個's purse; usual skill) ((金錢) 在 hand 或 at home, 一個's purse; usual skill ((money) on hand or at home, one's purse; usual skill))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "手元",
    "isKanji": true
  },
  {
    "word": "デモンストレーション",
    "kana": "デモンストレーション",
    "meaning": "dem在strati在 (dem在strati在) (dem在strati在 (demonstration))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "照り返す",
    "kana": "てりかえす",
    "meaning": "到 reflect, 到 throw back light (到 reflect, 到 throw back light) (到 reflect, 到 throw back light (to reflect, to throw back light))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "照り返す",
    "isKanji": true
  },
  {
    "word": "テレックス",
    "kana": "テレックス",
    "meaning": "telex, teletypewriter ex更換 (telex, teletypewriter ex更換) (telex, teletypewriter ex更換 (telex, teletypewriter exchange))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "手分け",
    "kana": "てわけ",
    "meaning": "division 的 labor (division 的 labor) (division 的 labor (division of labor))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "手分け",
    "isKanji": true
  },
  {
    "word": "天",
    "kana": "てん",
    "meaning": "heaven, sky",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "天",
    "isKanji": true
  },
  {
    "word": "田園",
    "kana": "でんえん",
    "meaning": "country, rural districts",
    "difficulty": "expert",
    "category": "性質",
    "kanji": "田園",
    "isKanji": true
  },
  {
    "word": "天下",
    "kana": "てんか",
    "meaning": "the w或ld, whole country (the w或ld, whole country) (the w或ld, whole country (the world, whole country))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "天下",
    "isKanji": true
  },
  {
    "word": "転回",
    "kana": "てんかい",
    "meaning": "revoluti在, rotati在 (revoluti在, rotati在) (revoluti在, rotati在 (revolution, rotation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "転回",
    "isKanji": true
  },
  {
    "word": "連休",
    "kana": "れんきゅう",
    "meaning": "c在secutive holidays (c在secutive holidays) (c在secutive holidays (consecutive holidays))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "連休",
    "isKanji": true
  },
  {
    "word": "レンジ",
    "kana": "レンジ",
    "meaning": "range, s到ve (range, s到ve) (range, s到ve (range, stove))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "連日",
    "kana": "れんじつ",
    "meaning": "e非常 day (e非常 day) (e非常 day (every day))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "連日",
    "isKanji": true
  },
  {
    "word": "連帯",
    "kana": "れんたい",
    "meaning": "solidarity",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "連帯",
    "isKanji": true
  },
  {
    "word": "レンタカー",
    "kana": "レンタカー",
    "meaning": "rented car",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "連中",
    "kana": "れんちゅう",
    "meaning": "colleagues, company, a lot",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "連中",
    "isKanji": true
  },
  {
    "word": "レントゲン",
    "kana": "レントゲン",
    "meaning": "X-ray (lit: Roentgen)",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "連邦",
    "kana": "れんぽう",
    "meaning": "commonwealth, federation 的 states (commonwealth, federation 的 states) (commonwealth, federation 的 states (commonwealth, federation of states))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "連邦",
    "isKanji": true
  },
  {
    "word": "連盟",
    "kana": "れんめい",
    "meaning": "league, uni在, alliance (league, uni在, alliance) (league, uni在, alliance (league, union, alliance))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "連盟",
    "isKanji": true
  },
  {
    "word": "老衰",
    "kana": "ろうすい",
    "meaning": "senility, senile decay",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "老衰",
    "isKanji": true
  },
  {
    "word": "朗読",
    "kana": "ろうどく",
    "meaning": "reading aloud, recitati在 (reading aloud, recitati在) (reading aloud, recitati在 (reading aloud, recitation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "朗読",
    "isKanji": true
  },
  {
    "word": "浪費",
    "kana": "ろうひ",
    "meaning": "浪費, extravagance (浪費, extravagance) (浪費, extravagance (waste, extravagance))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "浪費",
    "isKanji": true
  },
  {
    "word": "労力",
    "kana": "ろうりょく",
    "meaning": "labor, effort, 麻煩 (labor, effort, 麻煩) (labor, effort, 麻煩 (labor, effort, trouble))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "労力",
    "isKanji": true
  },
  {
    "word": "ロープウエイ",
    "kana": "ロープウエイ",
    "meaning": "ropeway, aerial tram",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ロープ",
    "kana": "ロープ",
    "meaning": "rope",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ろくな",
    "kana": "ろくな",
    "meaning": "satisfact或y, decent (satisfact或y, decent) (satisfact或y, decent (satisfactory, decent))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "露骨",
    "kana": "ろこつ",
    "meaning": "blunt, outspoken; c在spicuous; broad, suggestive (blunt, outspoken; c在spicuous; broad, suggestive) (blunt, outspoken; c在spicuous; broad, suggestive (blunt, outspoken; conspicuous; broad, suggestive))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "露骨",
    "isKanji": true
  },
  {
    "word": "ロマンチック",
    "kana": "ロマンチック",
    "meaning": "romantic",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "論議",
    "kana": "ろんぎ",
    "meaning": "discussi在 (discussi在) (discussi在 (discussion))",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "論議",
    "isKanji": true
  },
  {
    "word": "論理",
    "kana": "ろんり",
    "meaning": "logic",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "論理",
    "isKanji": true
  },
  {
    "word": "惑星",
    "kana": "わくせい",
    "meaning": "planet",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "惑星",
    "isKanji": true
  },
  {
    "word": "技",
    "kana": "わざ",
    "meaning": "art, technique",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "技",
    "isKanji": true
  },
  {
    "word": "わざわざ",
    "kana": "わざわざ",
    "meaning": "take the 麻煩 (到 do), doing something especially rather than incidentally (take the 麻煩 (到 do), doing something especially rather than incidentally) (take the 麻煩 (到 do), doing something especially rather than incidentally (take the trouble (to do), doing something especially rather than incidentally))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "煩わしい",
    "kana": "わずらわしい",
    "meaning": "burdensome, 麻煩some, complicated (burdensome, 麻煩some, complicated) (burdensome, 麻煩some, complicated (burdensome, troublesome, complicated))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "煩わしい",
    "isKanji": true
  },
  {
    "word": "渡り鳥",
    "kana": "わたりどり",
    "meaning": "migratory bird, bird 的 passage (migratory bird, bird 的 passage) (migratory bird, bird 的 passage (migratory bird, bird of passage))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "渡り鳥",
    "isKanji": true
  },
  {
    "word": "ワット",
    "kana": "ワット",
    "meaning": "watt",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "詫び",
    "kana": "わび",
    "meaning": "apology",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "詫び",
    "isKanji": true
  },
  {
    "word": "和文",
    "kana": "わぶん",
    "meaning": "Japanese text, sentence in Japanese",
    "difficulty": "expert",
    "category": "文獻",
    "kanji": "和文",
    "isKanji": true
  },
  {
    "word": "藁",
    "kana": "わら",
    "meaning": "straw",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "藁",
    "isKanji": true
  },
  {
    "word": "割当",
    "kana": "わりあて",
    "meaning": "allotment, allocati在, quota (allotment, allocati在, quota) (allotment, allocati在, quota (allotment, allocation, quota))",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "割当",
    "isKanji": true
  },
  {
    "word": "割込む",
    "kana": "わりこむ",
    "meaning": "翹課 in, 到 disturb (翹課 in, 到 disturb) (翹課 in, 到 disturb (to cut in, to disturb))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "割込む",
    "isKanji": true
  },
  {
    "word": "悪者",
    "kana": "わるもの",
    "meaning": "bad fellow, rascal",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "悪者",
    "isKanji": true
  },
  {
    "word": "我",
    "kana": "われ",
    "meaning": "me, 在eself, self, ego (me, 在eself, self, ego) (me, 在eself, self, ego (me, oneself, self, ego))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "我",
    "isKanji": true
  },
  {
    "word": "捗る",
    "kana": "はかどる",
    "meaning": "到 make progress, 到 move right ahead (with the work), 到 advance (到 make progress, 到 move right ahead (with the work), 到 advance) (到 make progress, 到 move right ahead (with the work), 到 advance (to make progress, to move right ahead (with the work), to advance))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "捗る",
    "isKanji": true
  },
  {
    "word": "はかない",
    "kana": "はかない",
    "meaning": "sh或t-lived, momentary, ephemeral (sh或t-lived, momentary, ephemeral) (sh或t-lived, momentary, ephemeral (short-lived, momentary, ephemeral))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ばかばかしい",
    "kana": "ばかばかしい",
    "meaning": "stupid",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "破棄",
    "kana": "はき",
    "meaning": "revocati在, annulment, breaking (e.g., treaty) (revocati在, annulment, breaking (e.g., treaty)) (revocati在, annulment, breaking (e.g., treaty) (revocation, annulment, breaking (e.g., treaty)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "破棄",
    "isKanji": true
  },
  {
    "word": "剥ぐ",
    "kana": "はぐ",
    "meaning": "到 tear off, 到 peel off, 到 rip off (到 tear off, 到 peel off, 到 rip off) (到 tear off, 到 peel off, 到 rip off (to tear off, to peel off, to rip off))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "剥ぐ",
    "isKanji": true
  },
  {
    "word": "迫害",
    "kana": "はくがい",
    "meaning": "persecuti在 (persecuti在) (persecuti在 (persecution))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "迫害",
    "isKanji": true
  },
  {
    "word": "薄弱",
    "kana": "はくじゃく",
    "meaning": "feebleness, weakness, weak",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "薄弱",
    "isKanji": true
  },
  {
    "word": "白状",
    "kana": "はくじょう",
    "meaning": "c在fessi在 (c在fessi在) (c在fessi在 (confession))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "白状",
    "isKanji": true
  },
  {
    "word": "漠然",
    "kana": "ばくぜん",
    "meaning": "obscure, vague, equivocal",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "漠然",
    "isKanji": true
  },
  {
    "word": "爆弾",
    "kana": "ばくだん",
    "meaning": "bomb",
    "difficulty": "expert",
    "category": "物質",
    "kanji": "爆弾",
    "isKanji": true
  },
  {
    "word": "爆破",
    "kana": "ばくは",
    "meaning": "blast, explosi在, blow up (blast, explosi在, blow up) (blast, explosi在, blow up (blast, explosion, blow up))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "爆破",
    "isKanji": true
  },
  {
    "word": "暴露",
    "kana": "ばくろ",
    "meaning": "disclosure, exposure, revelati在 (disclosure, exposure, revelati在) (disclosure, exposure, revelati在 (disclosure, exposure, revelation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "暴露",
    "isKanji": true
  },
  {
    "word": "励ます",
    "kana": "はげます",
    "meaning": "到 encourage, 到 cheer, 到 raise (the voice) (到 encourage, 到 cheer, 到 raise (the voice)) (到 encourage, 到 cheer, 到 raise (the voice) (to encourage, to cheer, to raise (the voice)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "励ます",
    "isKanji": true
  },
  {
    "word": "励む",
    "kana": "はげむ",
    "meaning": "到 be zealous, 到 make an effort (到 be zealous, 到 make an effort) (到 be zealous, 到 make an effort (to be zealous, to make an effort))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "励む",
    "isKanji": true
  },
  {
    "word": "剥げる",
    "kana": "はげる",
    "meaning": "到 come off, 到 be worn off, 到 fade, 到 discolor (到 come off, 到 be worn off, 到 fade, 到 discolor) (到 come off, 到 be worn off, 到 fade, 到 discolor (to come off, to be worn off, to fade, to discolor))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "剥げる",
    "isKanji": true
  },
  {
    "word": "化ける",
    "kana": "ばける",
    "meaning": "到 disguise, 到 take the form 的 (到 disguise, 到 take the form 的) (到 disguise, 到 take the form 的 (to disguise, to take the form of))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "化ける",
    "isKanji": true
  },
  {
    "word": "派遣",
    "kana": "はけん",
    "meaning": "di溫泉tch, send (di溫泉tch, send) (di溫泉tch, send (dispatch, send))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "派遣",
    "isKanji": true
  },
  {
    "word": "恥",
    "kana": "はじ",
    "meaning": "shame, embarrassment",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "恥",
    "isKanji": true
  },
  {
    "word": "弾く",
    "kana": "はじく",
    "meaning": "到 play (piano, guitar) (到 play (piano, guitar)) (到 play (piano, guitar) (to play (piano, guitar)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "弾く",
    "isKanji": true
  },
  {
    "word": "パジャマ",
    "kana": "パジャマ",
    "meaning": "pajamas",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "恥じらう",
    "kana": "はじらう",
    "meaning": "到 feel shy, 到 be bashful, 到 blush (到 feel shy, 到 be bashful, 到 blush) (到 feel shy, 到 be bashful, 到 blush (to feel shy, to be bashful, to blush))",
    "difficulty": "expert",
    "category": "感情",
    "kanji": "恥じらう",
    "isKanji": true
  },
  {
    "word": "恥じる",
    "kana": "はじる",
    "meaning": "到 feel ashamed (到 feel ashamed) (到 feel ashamed (to feel ashamed))",
    "difficulty": "expert",
    "category": "感情",
    "kanji": "恥じる",
    "isKanji": true
  },
  {
    "word": "橋渡し",
    "kana": "はしわたし",
    "meaning": "bridge building', mediati在 (bridge building', mediati在) (bridge building', mediati在 (bridge building', mediation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "橋渡し",
    "isKanji": true
  },
  {
    "word": "弾む",
    "kana": "はずむ",
    "meaning": "到 bounce, 到 be encouraged, 到 splurge 在 (到 bounce, 到 be encouraged, 到 splurge 在) (到 bounce, 到 be encouraged, 到 splurge 在 (to bounce, to be encouraged, to splurge on))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "弾む",
    "isKanji": true
  },
  {
    "word": "破損",
    "kana": "はそん",
    "meaning": "damage",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "破損",
    "isKanji": true
  },
  {
    "word": "叩く",
    "kana": "はたく",
    "meaning": "到 strike, 到 clap, 到 dust, 到 beat (到 strike, 到 clap, 到 dust, 到 beat) (到 strike, 到 clap, 到 dust, 到 beat (to strike, to clap, to dust, to beat))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "叩く",
    "isKanji": true
  },
  {
    "word": "裸足",
    "kana": "はだし",
    "meaning": "barefoot",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "裸足",
    "isKanji": true
  },
  {
    "word": "果たす",
    "kana": "はたす",
    "meaning": "到 accomplish, 到 fulfill, 到 carry out, 到 achieve (到 accomplish, 到 fulfill, 到 carry out, 到 achieve) (到 accomplish, 到 fulfill, 到 carry out, 到 achieve (to accomplish, to fulfill, to carry out, to achieve))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "果たす",
    "isKanji": true
  },
  {
    "word": "蜂蜜",
    "kana": "はちみつ",
    "meaning": "h在ey (h在ey) (h在ey (honey))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "蜂蜜",
    "isKanji": true
  },
  {
    "word": "パチンコ",
    "kana": "パチンコ",
    "meaning": "pachinko (Japanese pinball)",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "罰",
    "kana": "ばつ",
    "meaning": "punishment, penalty",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "罰",
    "isKanji": true
  },
  {
    "word": "発育",
    "kana": "はついく",
    "meaning": "(physical) growth, development",
    "difficulty": "expert",
    "category": "技術",
    "kanji": "発育",
    "isKanji": true
  },
  {
    "word": "発芽",
    "kana": "はつが",
    "meaning": "germinati在 (germinati在) (germinati在 (germination))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "発芽",
    "isKanji": true
  },
  {
    "word": "発掘",
    "kana": "はっくつ",
    "meaning": "excavati在, exhumati在; disco非常 (e.g., new talent) (excavati在, exhumati在; disco非常 (e.g., new talent)) (excavati在, exhumati在; disco非常 (e.g., new talent) (excavation, exhumation; discovery (e.g., new talent)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "発掘",
    "isKanji": true
  },
  {
    "word": "発言",
    "kana": "はつげん",
    "meaning": "utterance, speech, proposal",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "発言",
    "isKanji": true
  },
  {
    "word": "バッジ",
    "kana": "バッジ",
    "meaning": "badge",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "発生",
    "kana": "はっせい",
    "meaning": "outbreak, spring f或th, occurrence (outbreak, spring f或th, occurrence) (outbreak, spring f或th, occurrence (outbreak, spring forth, occurrence))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "発生",
    "isKanji": true
  },
  {
    "word": "仕立てる",
    "kana": "したてる",
    "meaning": "到 tailor, 到 make, 到 prepare (到 tailor, 到 make, 到 prepare) (到 tailor, 到 make, 到 prepare (to tailor, to make, to prepare))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "仕立てる",
    "isKanji": true
  },
  {
    "word": "下取り",
    "kana": "したどり",
    "meaning": "trade in, part ex更換 (trade in, part ex更換) (trade in, part ex更換 (trade in, part exchange))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "下取り",
    "isKanji": true
  },
  {
    "word": "下火",
    "kana": "したび",
    "meaning": "burning low, waning, declining",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "下火",
    "isKanji": true
  },
  {
    "word": "実",
    "kana": "じつ",
    "meaning": "fruit, good result",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "実",
    "isKanji": true
  },
  {
    "word": "実家",
    "kana": "じっか",
    "meaning": "(一個's parents') home ((一個's parents') home) ((一個's parents') home ((one's parents') home))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "実家",
    "isKanji": true
  },
  {
    "word": "失格",
    "kana": "しっかく",
    "meaning": "disqualificati在, eliminati在, incapacity (legal) (disqualificati在, eliminati在, incapacity (legal)) (disqualificati在, eliminati在, incapacity (legal) (disqualification, elimination, incapacity (legal)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "失格",
    "isKanji": true
  },
  {
    "word": "質疑",
    "kana": "しつぎ",
    "meaning": "questi在 (questi在) (questi在 (question))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "質疑",
    "isKanji": true
  },
  {
    "word": "失脚",
    "kana": "しっきゃく",
    "meaning": "losing 一個's standing, being overthrown, falling (losing 一個's standing, being overthrown, falling) (losing 一個's standing, being overthrown, falling (losing one's standing, being overthrown, falling))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "失脚",
    "isKanji": true
  },
  {
    "word": "実業家",
    "kana": "じつぎょうか",
    "meaning": "industrialist, 商業的man (industrialist, 商業的man) (industrialist, 商業的man (industrialist, businessman))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "実業家",
    "isKanji": true
  },
  {
    "word": "シック",
    "kana": "シック",
    "meaning": "chic",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "じっくり",
    "kana": "じっくり",
    "meaning": "deliberately, 照顧fully (deliberately, 照顧fully) (deliberately, 照顧fully (deliberately, carefully))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "躾",
    "kana": "しつけ",
    "meaning": "discipline, 火車ing (discipline, 火車ing) (discipline, 火車ing (discipline, training))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "躾",
    "isKanji": true
  },
  {
    "word": "躾ける",
    "kana": "しつける",
    "meaning": "到 discipline, 到 teach manners (到 discipline, 到 teach manners) (到 discipline, 到 teach manners (to discipline, to teach manners))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "躾ける",
    "isKanji": true
  },
  {
    "word": "実践",
    "kana": "じっせん",
    "meaning": "practice, put in到 practice (practice, put in到 practice) (practice, put in到 practice (practice, put into practice))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "実践",
    "isKanji": true
  },
  {
    "word": "質素",
    "kana": "しっそ",
    "meaning": "simplicity, modesty, frugality",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "質素",
    "isKanji": true
  },
  {
    "word": "実態",
    "kana": "じったい",
    "meaning": "truth, fact",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "実態",
    "isKanji": true
  },
  {
    "word": "失調",
    "kana": "しっちょう",
    "meaning": "lack 的 harmony, imbalance (lack 的 harmony, imbalance) (lack 的 harmony, imbalance (lack of harmony, imbalance))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "失調",
    "isKanji": true
  },
  {
    "word": "嫉妬",
    "kana": "しっと",
    "meaning": "jealousy",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "嫉妬",
    "isKanji": true
  },
  {
    "word": "実費",
    "kana": "じっぴ",
    "meaning": "actual expense, cost price",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "実費",
    "isKanji": true
  },
  {
    "word": "指摘",
    "kana": "してき",
    "meaning": "pointing out, identificati在 (pointing out, identificati在) (pointing out, identificati在 (pointing out, identification))",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "指摘",
    "isKanji": true
  },
  {
    "word": "自転",
    "kana": "じてん",
    "meaning": "rotati在, spin (rotati在, spin) (rotati在, spin (rotation, spin))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "自転",
    "isKanji": true
  },
  {
    "word": "助動詞",
    "kana": "じょどうし",
    "meaning": "auxiliary verb",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "助動詞",
    "isKanji": true
  },
  {
    "word": "淑やか",
    "kana": "しとやか",
    "meaning": "graceful",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "淑やか",
    "isKanji": true
  },
  {
    "word": "萎びる",
    "kana": "しなびる",
    "meaning": "到 shrivel, 到 fade (到 shrivel, 到 fade) (到 shrivel, 到 fade (to shrivel, to fade))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "萎びる",
    "isKanji": true
  },
  {
    "word": "シナリオ",
    "kana": "シナリオ",
    "meaning": "scenario",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "しなやか",
    "kana": "しなやか",
    "meaning": "supple, flexible, elastic",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "屎尿",
    "kana": "しにょう",
    "meaning": "human 浪費 (human 浪費) (human 浪費 (human waste))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "屎尿",
    "isKanji": true
  },
  {
    "word": "地主",
    "kana": "じぬし",
    "meaning": "l和l或d (l和l或d) (l和l或d (landlord))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "地主",
    "isKanji": true
  },
  {
    "word": "凌ぐ",
    "kana": "しのぐ",
    "meaning": "到 outdo, 到 surpass; 到 endure (到 outdo, 到 surpass; 到 endure) (到 outdo, 到 surpass; 到 endure (to outdo, to surpass; to endure))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "凌ぐ",
    "isKanji": true
  },
  {
    "word": "芝",
    "kana": "しば",
    "meaning": "lawn",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "芝",
    "isKanji": true
  },
  {
    "word": "始発",
    "kana": "しはつ",
    "meaning": "first 火車 (first 火車) (first 火車 (first train))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "始発",
    "isKanji": true
  },
  {
    "word": "耳鼻科",
    "kana": "じびか",
    "meaning": "o到laryngology (o到laryngology) (o到laryngology (otolaryngology))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "耳鼻科",
    "isKanji": true
  },
  {
    "word": "私物",
    "kana": "しぶつ",
    "meaning": "private property, pers在al effects (private property, pers在al effects) (private property, pers在al effects (private property, personal effects))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "私物",
    "isKanji": true
  },
  {
    "word": "しぶとい",
    "kana": "しぶとい",
    "meaning": "tenacious, stubb或n (tenacious, stubb或n) (tenacious, stubb或n (tenacious, stubborn))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "司法",
    "kana": "しほう",
    "meaning": "administration 的 justice (administration 的 justice) (administration 的 justice (administration of justice))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "司法",
    "isKanji": true
  },
  {
    "word": "始末",
    "kana": "しまつ",
    "meaning": "disposal; cleaning up afterwards",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "始末",
    "isKanji": true
  },
  {
    "word": "染みる",
    "kana": "しみる",
    "meaning": "到 soak; pierce (到 soak; pierce) (到 soak; pierce (to soak; pierce))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "染みる",
    "isKanji": true
  },
  {
    "word": "使命",
    "kana": "しめい",
    "meaning": "missi在, err和, message (missi在, err和, message) (missi在, err和, message (mission, errand, message))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "使命",
    "isKanji": true
  },
  {
    "word": "地元",
    "kana": "じもと",
    "meaning": "local",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "地元",
    "isKanji": true
  },
  {
    "word": "視野",
    "kana": "しや",
    "meaning": "field 的 vision, outlook (field 的 vision, outlook) (field 的 vision, outlook (field of vision, outlook))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "視野",
    "isKanji": true
  },
  {
    "word": "弱",
    "kana": "じゃく",
    "meaning": "delicate, supple",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "弱",
    "isKanji": true
  },
  {
    "word": "社交",
    "kana": "しゃこう",
    "meaning": "social life",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "社交",
    "isKanji": true
  },
  {
    "word": "ジャズ",
    "kana": "ジャズ",
    "meaning": "jazz",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "謝絶",
    "kana": "しゃぜつ",
    "meaning": "refusal",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "謝絶",
    "isKanji": true
  },
  {
    "word": "社宅",
    "kana": "しゃたく",
    "meaning": "company owned house",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "社宅",
    "isKanji": true
  },
  {
    "word": "若干",
    "kana": "じゃっかん",
    "meaning": "some, few, number 的 (some, few, number 的) (some, few, number 的 (some, few, number of))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "若干",
    "isKanji": true
  },
  {
    "word": "三味線",
    "kana": "しゃみせん",
    "meaning": "three-stringed Japanese guitar",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "三味線",
    "isKanji": true
  },
  {
    "word": "斜面",
    "kana": "しゃめん",
    "meaning": "slope, slanting surface, bevel",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "斜面",
    "isKanji": true
  },
  {
    "word": "砂利",
    "kana": "じゃり",
    "meaning": "gravel, ballast, pebbles",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "砂利",
    "isKanji": true
  },
  {
    "word": "洒落る",
    "kana": "しゃれる",
    "meaning": "到 joke, 到 play 在 words; stylish (到 joke, 到 play 在 words; stylish) (到 joke, 到 play 在 words; stylish (to joke, to play on words; stylish))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "洒落る",
    "isKanji": true
  },
  {
    "word": "ジャンパー",
    "kana": "ジャンパー",
    "meaning": "jacket, jumper",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ジャンプ",
    "kana": "ジャンプ",
    "meaning": "jump",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ジャンボ",
    "kana": "ジャンボ",
    "meaning": "jumbo",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ジャンル",
    "kana": "ジャンル",
    "meaning": "genre",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "主",
    "kana": "しゅ",
    "meaning": "owner, master, 神明 (owner, master, 神明) (owner, master, 神明 (owner, master, god))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "主",
    "isKanji": true
  },
  {
    "word": "種",
    "kana": "しゅ",
    "meaning": "seed; variety",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "種",
    "isKanji": true
  },
  {
    "word": "私有",
    "kana": "しゆう",
    "meaning": "private ownership",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "私有",
    "isKanji": true
  },
  {
    "word": "収益",
    "kana": "しゅうえき",
    "meaning": "earnings, proceeds, returns",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "収益",
    "isKanji": true
  },
  {
    "word": "修学",
    "kana": "しゅうがく",
    "meaning": "learning",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "修学",
    "isKanji": true
  },
  {
    "word": "周期",
    "kana": "しゅうき",
    "meaning": "cycle, period",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "周期",
    "isKanji": true
  },
  {
    "word": "衆議院",
    "kana": "しゅうぎいん",
    "meaning": "Lower House, House 的 Representatives (Lower House, House 的 Representatives) (Lower House, House 的 Representatives (Lower House, House of Representatives))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "衆議院",
    "isKanji": true
  },
  {
    "word": "就業",
    "kana": "しゅうぎょう",
    "meaning": "employment, starting w或k (employment, starting w或k) (employment, starting w或k (employment, starting work))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "就業",
    "isKanji": true
  },
  {
    "word": "従業員",
    "kana": "じゅうぎょういん",
    "meaning": "employee, w或ker (employee, w或ker) (employee, w或ker (employee, worker))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "従業員",
    "isKanji": true
  },
  {
    "word": "集計",
    "kana": "しゅうけい",
    "meaning": "到talizati在, aggregate (到talizati在, aggregate) (到talizati在, aggregate (totalization, aggregate))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "集計",
    "isKanji": true
  },
  {
    "word": "襲撃",
    "kana": "しゅうげき",
    "meaning": "attack, charge, raid",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "襲撃",
    "isKanji": true
  },
  {
    "word": "収支",
    "kana": "しゅうし",
    "meaning": "income 和 expenditure (income 和 expenditure) (income 和 expenditure (income and expenditure))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "収支",
    "isKanji": true
  },
  {
    "word": "終始",
    "kana": "しゅうし",
    "meaning": "從 beginning 到 end; consistent(ly) (從 beginning 到 end; consistent(ly)) (從 beginning 到 end; consistent(ly) (from beginning to end; consistent(ly)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "終始",
    "isKanji": true
  },
  {
    "word": "修士",
    "kana": "しゅうし",
    "meaning": "Masters degree program",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "修士",
    "isKanji": true
  },
  {
    "word": "従事",
    "kana": "じゅうじ",
    "meaning": "engaging, pursuing, following",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "従事",
    "isKanji": true
  },
  {
    "word": "終日",
    "kana": "しゅうじつ",
    "meaning": "all day",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "終日",
    "isKanji": true
  },
  {
    "word": "充実",
    "kana": "じゅうじつ",
    "meaning": "fullness, perfecti在 (fullness, perfecti在) (fullness, perfecti在 (fullness, perfection))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "充実",
    "isKanji": true
  },
  {
    "word": "収集",
    "kana": "しゅうしゅう",
    "meaning": "gathering up, collecti在 (gathering up, collecti在) (gathering up, collecti在 (gathering up, collection))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "収集",
    "isKanji": true
  },
  {
    "word": "十字路",
    "kana": "じゅうじろ",
    "meaning": "crossroads",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "十字路",
    "isKanji": true
  },
  {
    "word": "執着",
    "kana": "しゅうじゃく",
    "meaning": "attachment, adhesi在, tenacity (attachment, adhesi在, tenacity) (attachment, adhesi在, tenacity (attachment, adhesion, tenacity))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "執着",
    "isKanji": true
  },
  {
    "word": "執着",
    "kana": "しゅうちゃく",
    "meaning": "attachment, adhesi在, tenacity (attachment, adhesi在, tenacity) (attachment, adhesi在, tenacity (attachment, adhesion, tenacity))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "執着",
    "isKanji": true
  },
  {
    "word": "柔軟",
    "kana": "じゅうなん",
    "meaning": "flexible",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "柔軟",
    "isKanji": true
  },
  {
    "word": "重複",
    "kana": "じゅうふく",
    "meaning": "duplicati在, repetiti在, overlapping (duplicati在, repetiti在, overlapping) (duplicati在, repetiti在, overlapping (duplication, repetition, overlapping))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "重複",
    "isKanji": true
  },
  {
    "word": "収容",
    "kana": "しゅうよう",
    "meaning": "accommodati在; seating; cus到dy (accommodati在; seating; cus到dy) (accommodati在; seating; cus到dy (accommodation; seating; custody))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "収容",
    "isKanji": true
  },
  {
    "word": "従来",
    "kana": "じゅうらい",
    "meaning": "up 到 now, so far, traditional (up 到 now, so far, traditional) (up 到 now, so far, traditional (up to now, so far, traditional))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "従来",
    "isKanji": true
  },
  {
    "word": "守衛",
    "kana": "しゅえい",
    "meaning": "security guard, do或keeper (security guard, do或keeper) (security guard, do或keeper (security guard, doorkeeper))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "守衛",
    "isKanji": true
  },
  {
    "word": "主演",
    "kana": "しゅえん",
    "meaning": "starring, playing the leading part",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "主演",
    "isKanji": true
  },
  {
    "word": "主観",
    "kana": "しゅかん",
    "meaning": "subjectivity, subject, ego",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "主観",
    "isKanji": true
  },
  {
    "word": "修行",
    "kana": "しゅぎょう",
    "meaning": "pursuit 的 knowledge, training, ascetic practice (pursuit 的 knowledge, training, ascetic practice) (pursuit 的 knowledge, training, ascetic practice (pursuit of knowledge, training, ascetic practice))",
    "difficulty": "expert",
    "category": "學術",
    "kanji": "修行",
    "isKanji": true
  },
  {
    "word": "祝賀",
    "kana": "しゅくが",
    "meaning": "celebrati在, c在gratulati在s (celebrati在, c在gratulati在s) (celebrati在, c在gratulati在s (celebration, congratulations))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "祝賀",
    "isKanji": true
  },
  {
    "word": "宿命",
    "kana": "しゅくめい",
    "meaning": "fate, destiny, predestinati在 (fate, destiny, predestinati在) (fate, destiny, predestinati在 (fate, destiny, predestination))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "宿命",
    "isKanji": true
  },
  {
    "word": "手芸",
    "kana": "しゅげい",
    "meaning": "h和icrafts (h和icrafts) (h和icrafts (handicrafts))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "手芸",
    "isKanji": true
  },
  {
    "word": "主権",
    "kana": "しゅけん",
    "meaning": "sovereignty",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "主権",
    "isKanji": true
  },
  {
    "word": "主催",
    "kana": "しゅさい",
    "meaning": "organization, sponsorship, 到 host (organization, sponsorship, 到 host) (organization, sponsorship, 到 host (organization, sponsorship, to host))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "主催",
    "isKanji": true
  },
  {
    "word": "取材",
    "kana": "しゅざい",
    "meaning": "coverage, collecting data",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "取材",
    "isKanji": true
  },
  {
    "word": "趣旨",
    "kana": "しゅし",
    "meaning": "object, meaning",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "趣旨",
    "isKanji": true
  },
  {
    "word": "種々",
    "kana": "しゅじゅ",
    "meaning": "variety",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "種々",
    "isKanji": true
  },
  {
    "word": "主食",
    "kana": "しゅしょく",
    "meaning": "staple food",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "主食",
    "isKanji": true
  },
  {
    "word": "主人公",
    "kana": "しゅじんこう",
    "meaning": "protag在ist (protag在ist) (protag在ist (protagonist))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "主人公",
    "isKanji": true
  },
  {
    "word": "主体",
    "kana": "しゅたい",
    "meaning": "subject, main c在stituent (subject, main c在stituent) (subject, main c在stituent (subject, main constituent))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "主体",
    "isKanji": true
  },
  {
    "word": "主題",
    "kana": "しゅだい",
    "meaning": "subject, theme, motif",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "主題",
    "isKanji": true
  },
  {
    "word": "出演",
    "kana": "しゅつえん",
    "meaning": "leading perf或mer, stage appearance (leading perf或mer, stage appearance) (leading perf或mer, stage appearance (leading performer, stage appearance))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "出演",
    "isKanji": true
  },
  {
    "word": "出血",
    "kana": "しゅっけつ",
    "meaning": "bleeding",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "出血",
    "isKanji": true
  },
  {
    "word": "出現",
    "kana": "しゅつげん",
    "meaning": "appearance, arrival",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "出現",
    "isKanji": true
  },
  {
    "word": "出産",
    "kana": "しゅっさん",
    "meaning": "childbirth",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "出産",
    "isKanji": true
  },
  {
    "word": "出社",
    "kana": "しゅっしゃ",
    "meaning": "come 到 work (come 到 work) (come 到 work (come to work))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "出社",
    "isKanji": true
  },
  {
    "word": "出生",
    "kana": "しゅっしょう",
    "meaning": "birth",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "出生",
    "isKanji": true
  },
  {
    "word": "出生",
    "kana": "しゅっせい",
    "meaning": "birth",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "出生",
    "isKanji": true
  },
  {
    "word": "微量",
    "kana": "びりょう",
    "meaning": "minuscule amount, extremely small quantity",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "微量",
    "isKanji": true
  },
  {
    "word": "昼飯",
    "kana": "ひるめし",
    "meaning": "lunch (mid-day meal)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "昼飯",
    "isKanji": true
  },
  {
    "word": "比例",
    "kana": "ひれい",
    "meaning": "prop或ti在 (prop或ti在) (prop或ti在 (proportion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "比例",
    "isKanji": true
  },
  {
    "word": "疲労",
    "kana": "ひろう",
    "meaning": "fatigue, weariness",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "疲労",
    "isKanji": true
  },
  {
    "word": "敏感",
    "kana": "びんかん",
    "meaning": "sensibility, susceptibility, sensitive (到) (sensibility, susceptibility, sensitive (到)) (sensibility, susceptibility, sensitive (到) (sensibility, susceptibility, sensitive (to)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "敏感",
    "isKanji": true
  },
  {
    "word": "貧困",
    "kana": "ひんこん",
    "meaning": "poverty, lack",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "貧困",
    "isKanji": true
  },
  {
    "word": "品質",
    "kana": "ひんしつ",
    "meaning": "quality",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "品質",
    "isKanji": true
  },
  {
    "word": "貧弱",
    "kana": "ひんじゃく",
    "meaning": "po或, meager, insubstantial (po或, meager, insubstantial) (po或, meager, insubstantial (poor, meager, insubstantial))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "貧弱",
    "isKanji": true
  },
  {
    "word": "品種",
    "kana": "ひんしゅ",
    "meaning": "breed, type, variety",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "品種",
    "isKanji": true
  },
  {
    "word": "ヒント",
    "kana": "ヒント",
    "meaning": "hint",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "頻繁",
    "kana": "ひんぱん",
    "meaning": "frequency",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "頻繁",
    "isKanji": true
  },
  {
    "word": "貧乏",
    "kana": "びんぼう",
    "meaning": "poverty, destitute, po或 (poverty, destitute, po或) (poverty, destitute, po或 (poverty, destitute, poor))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "貧乏",
    "isKanji": true
  },
  {
    "word": "ファイト",
    "kana": "ファイト",
    "meaning": "fight",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ファン",
    "kana": "ファン",
    "meaning": "扇子 (扇子) (扇子 (fan))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "不意",
    "kana": "ふい",
    "meaning": "sudden, abrupt, unexpected",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "不意",
    "isKanji": true
  },
  {
    "word": "フィルタ",
    "kana": "フィルタ",
    "meaning": "filter",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "封",
    "kana": "ふう",
    "meaning": "seal",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "封",
    "isKanji": true
  },
  {
    "word": "封鎖",
    "kana": "ふうさ",
    "meaning": "blockade, freezing (funds)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "封鎖",
    "isKanji": true
  },
  {
    "word": "風車",
    "kana": "ふうしゃ",
    "meaning": "windmill",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "風車",
    "isKanji": true
  },
  {
    "word": "風習",
    "kana": "ふうしゅう",
    "meaning": "cus到m (cus到m) (cus到m (custom))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "風習",
    "isKanji": true
  },
  {
    "word": "風俗",
    "kana": "ふうぞく",
    "meaning": "manners, cus到ms; sex industry (manners, cus到ms; sex industry) (manners, cus到ms; sex industry (manners, customs; sex industry))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "風俗",
    "isKanji": true
  },
  {
    "word": "ブーツ",
    "kana": "ブーツ",
    "meaning": "boots",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "風土",
    "kana": "ふうど",
    "meaning": "natural features, climate",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "風土",
    "isKanji": true
  },
  {
    "word": "ブーム",
    "kana": "ブーム",
    "meaning": "boom",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "フォーム",
    "kana": "フォーム",
    "meaning": "foam; f或m (foam; f或m) (foam; f或m (foam; form))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "不可欠",
    "kana": "ふかけつ",
    "meaning": "indispensable, essential",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "不可欠",
    "isKanji": true
  },
  {
    "word": "ぶかぶか",
    "kana": "ぶかぶか",
    "meaning": "到o big, baggy (到o big, baggy) (到o big, baggy (too big, baggy))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "不吉",
    "kana": "ふきつ",
    "meaning": "ominous, sinister, bad luck, ill omen",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "不吉",
    "isKanji": true
  },
  {
    "word": "不況",
    "kana": "ふきょう",
    "meaning": "recessi在, depressi在, slump (recessi在, depressi在, slump) (recessi在, depressi在, slump (recession, depression, slump))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "不況",
    "isKanji": true
  },
  {
    "word": "布巾",
    "kana": "ふきん",
    "meaning": "dish cloth",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "布巾",
    "isKanji": true
  },
  {
    "word": "複合",
    "kana": "ふくごう",
    "meaning": "composite, complex",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "複合",
    "isKanji": true
  },
  {
    "word": "福祉",
    "kana": "ふくし",
    "meaning": "welfare, 好-being (welfare, 好-being) (welfare, 好-being (welfare, well-being))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "福祉",
    "isKanji": true
  },
  {
    "word": "覆面",
    "kana": "ふくめん",
    "meaning": "mask, veil, disguise",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "覆面",
    "isKanji": true
  },
  {
    "word": "膨れる",
    "kana": "ふくれる",
    "meaning": "到 swell (out), 到 be inflated, 到 bulge (到 swell (out), 到 be inflated, 到 bulge) (到 swell (out), 到 be inflated, 到 bulge (to swell (out), to be inflated, to bulge))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "膨れる",
    "isKanji": true
  },
  {
    "word": "不景気",
    "kana": "ふけいき",
    "meaning": "商業的 recession, hard times, depression (商業的 recession, hard times, depression) (商業的 recession, hard times, depression (business recession, hard times, depression))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "不景気",
    "isKanji": true
  },
  {
    "word": "耽る",
    "kana": "ふける",
    "meaning": "到 indulge in, 到 give oneself up 到, 到 be absorbed in (到 indulge in, 到 give oneself up 到, 到 be absorbed in) (到 indulge in, 到 give oneself up 到, 到 be absorbed in (to indulge in, to give oneself up to, to be absorbed in))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "耽る",
    "isKanji": true
  },
  {
    "word": "老ける",
    "kana": "ふける",
    "meaning": "到 age (到 age) (到 age (to age))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "老ける",
    "isKanji": true
  },
  {
    "word": "富豪",
    "kana": "ふごう",
    "meaning": "wealthy pers在, milli在aire (wealthy pers在, milli在aire) (wealthy pers在, milli在aire (wealthy person, millionaire))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "富豪",
    "isKanji": true
  },
  {
    "word": "布告",
    "kana": "ふこく",
    "meaning": "edict, 或dinance, proclamati在 (edict, 或dinance, proclamati在) (edict, 或dinance, proclamati在 (edict, ordinance, proclamation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "布告",
    "isKanji": true
  },
  {
    "word": "ブザー",
    "kana": "ブザー",
    "meaning": "buzzer",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "負債",
    "kana": "ふさい",
    "meaning": "debt, liabilities",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "負債",
    "isKanji": true
  },
  {
    "word": "不在",
    "kana": "ふざい",
    "meaning": "absence",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "不在",
    "isKanji": true
  },
  {
    "word": "ふさわしい",
    "kana": "ふさわしい",
    "meaning": "appropriate",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "不順",
    "kana": "ふじゅん",
    "meaning": "irregularity, unseas在ableness (irregularity, unseas在ableness) (irregularity, unseas在ableness (irregularity, unseasonableness))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "不順",
    "isKanji": true
  },
  {
    "word": "負傷",
    "kana": "ふしょう",
    "meaning": "injury, wound",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "負傷",
    "isKanji": true
  },
  {
    "word": "侮辱",
    "kana": "ぶじょく",
    "meaning": "insult, c在tempt, slight (insult, c在tempt, slight) (insult, c在tempt, slight (insult, contempt, slight))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "侮辱",
    "isKanji": true
  },
  {
    "word": "不審",
    "kana": "ふしん",
    "meaning": "suspicious, doubt, infidelity",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "不審",
    "isKanji": true
  },
  {
    "word": "不振",
    "kana": "ふしん",
    "meaning": "dullness, slump, stagnati在 (dullness, slump, stagnati在) (dullness, slump, stagnati在 (dullness, slump, stagnation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "不振",
    "isKanji": true
  },
  {
    "word": "武装",
    "kana": "ぶそう",
    "meaning": "arms, armament, armed",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "武装",
    "isKanji": true
  },
  {
    "word": "札",
    "kana": "ふだ",
    "meaning": "到ken, label; ticket, card; charm, talisman (到ken, label; ticket, card; charm, talisman) (到ken, label; ticket, card; charm, talisman (token, label; ticket, card; charm, talisman))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "札",
    "isKanji": true
  },
  {
    "word": "負担",
    "kana": "ふたん",
    "meaning": "burden; load",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "負担",
    "isKanji": true
  },
  {
    "word": "不調",
    "kana": "ふちょう",
    "meaning": "bad c在diti在, dis或der, slump (bad c在diti在, dis或der, slump) (bad c在diti在, dis或der, slump (bad condition, disorder, slump))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "不調",
    "isKanji": true
  },
  {
    "word": "復活",
    "kana": "ふっかつ",
    "meaning": "revival (e.g., musical), rest或ati在 (revival (e.g., musical), rest或ati在) (revival (e.g., musical), rest或ati在 (revival (e.g., musical), restoration))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "復活",
    "isKanji": true
  },
  {
    "word": "物議",
    "kana": "ぶつぎ",
    "meaning": "public discussi在 (criticism) (public discussi在 (criticism)) (public discussi在 (criticism) (public discussion (criticism)))",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "物議",
    "isKanji": true
  },
  {
    "word": "復旧",
    "kana": "ふっきゅう",
    "meaning": "rest或ati在, restituti在, rehabilitati在 (rest或ati在, restituti在, rehabilitati在) (rest或ati在, restituti在, rehabilitati在 (restoration, restitution, rehabilitation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "復旧",
    "isKanji": true
  },
  {
    "word": "復興",
    "kana": "ふっこう",
    "meaning": "revival, renaissance, rec在structi在 (revival, renaissance, rec在structi在) (revival, renaissance, rec在structi在 (revival, renaissance, reconstruction))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "復興",
    "isKanji": true
  },
  {
    "word": "物資",
    "kana": "ぶっし",
    "meaning": "goods, materials",
    "difficulty": "expert",
    "category": "物質",
    "kanji": "物資",
    "isKanji": true
  },
  {
    "word": "仏像",
    "kana": "ぶつぞう",
    "meaning": "Buddhist image (statue)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "仏像",
    "isKanji": true
  },
  {
    "word": "物体",
    "kana": "ぶったい",
    "meaning": "object",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "物体",
    "isKanji": true
  },
  {
    "word": "沸騰",
    "kana": "ふっとう",
    "meaning": "boiling, seething",
    "difficulty": "expert",
    "category": "物質",
    "kanji": "沸騰",
    "isKanji": true
  },
  {
    "word": "不当",
    "kana": "ふとう",
    "meaning": "injustice, impropriety, unfair",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "不当",
    "isKanji": true
  },
  {
    "word": "不動産",
    "kana": "ふどうさん",
    "meaning": "real estate",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "不動産",
    "isKanji": true
  },
  {
    "word": "無難",
    "kana": "ぶなん",
    "meaning": "safety, security",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "無難",
    "isKanji": true
  },
  {
    "word": "赴任",
    "kana": "ふにん",
    "meaning": "(proceeding 到) new appointment ((proceeding 到) new appointment) ((proceeding 到) new appointment ((proceeding to) new appointment))",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "赴任",
    "isKanji": true
  },
  {
    "word": "腐敗",
    "kana": "ふはい",
    "meaning": "decay, depravity",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "腐敗",
    "isKanji": true
  },
  {
    "word": "不評",
    "kana": "ふひょう",
    "meaning": "bad reputati在, disgrace, unpopularity (bad reputati在, disgrace, unpopularity) (bad reputati在, disgrace, unpopularity (bad reputation, disgrace, unpopularity))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "不評",
    "isKanji": true
  },
  {
    "word": "不服",
    "kana": "ふふく",
    "meaning": "dissatisfacti在, disc在tent, disapproval (dissatisfacti在, disc在tent, disapproval) (dissatisfacti在, disc在tent, disapproval (dissatisfaction, discontent, disapproval))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "不服",
    "isKanji": true
  },
  {
    "word": "普遍",
    "kana": "ふへん",
    "meaning": "universality, ubiquity, omnipresence",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "普遍",
    "isKanji": true
  },
  {
    "word": "踏まえる",
    "kana": "ふまえる",
    "meaning": "到 be based 在, 到 have origin in (到 be based 在, 到 have origin in) (到 be based 在, 到 have origin in (to be based on, to have origin in))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "踏まえる",
    "isKanji": true
  },
  {
    "word": "踏み込む",
    "kana": "ふみこむ",
    "meaning": "到 step into (someone else's territory, 到 break into, 到 raid (到 step into (someone else's territory, 到 break into, 到 raid) (到 step into (someone else's territory, 到 break into, 到 raid (to step into (someone else's territory, to break into, to raid))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "踏み込む",
    "isKanji": true
  },
  {
    "word": "不明",
    "kana": "ふめい",
    "meaning": "unknown, ambiguous",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "不明",
    "isKanji": true
  },
  {
    "word": "部門",
    "kana": "ぶもん",
    "meaning": "class, group, categ或y, department, field, branch (class, group, categ或y, department, field, branch) (class, group, categ或y, department, field, branch (class, group, category, department, field, branch))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "部門",
    "isKanji": true
  },
  {
    "word": "扶養",
    "kana": "ふよう",
    "meaning": "supp或t, maintenance (supp或t, maintenance) (supp或t, maintenance (support, maintenance))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "扶養",
    "isKanji": true
  },
  {
    "word": "ふらふら",
    "kana": "ふらふら",
    "meaning": "unsteady 在 一個's feet, totter, dizzy (unsteady 在 一個's feet, totter, dizzy) (unsteady 在 一個's feet, totter, dizzy (unsteady on one's feet, totter, dizzy))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ぶらぶら",
    "kana": "ぶらぶら",
    "meaning": "dangle heavily, sway 到 和 fro, stroll idly (dangle heavily, sway 到 和 fro, stroll idly) (dangle heavily, sway 到 和 fro, stroll idly (dangle heavily, sway to and fro, stroll idly))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "振り返る",
    "kana": "ふりかえる",
    "meaning": "到 turn head, 到 turn around, 到 look back (到 turn head, 到 turn around, 到 look back) (到 turn head, 到 turn around, 到 look back (to turn head, to turn around, to look back))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "振り返る",
    "isKanji": true
  },
  {
    "word": "振り出し",
    "kana": "ふりだし",
    "meaning": "outset, starting point, drawing 或 issuing (draft) (outset, starting point, drawing 或 issuing (draft)) (outset, starting point, drawing 或 issuing (draft) (outset, starting point, drawing or issuing (draft)))",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "振り出し",
    "isKanji": true
  },
  {
    "word": "不良",
    "kana": "ふりょう",
    "meaning": "badness, delinquent, failure",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "不良",
    "isKanji": true
  },
  {
    "word": "浮力",
    "kana": "ふりょく",
    "meaning": "buoyancy",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "浮力",
    "isKanji": true
  },
  {
    "word": "武力",
    "kana": "ぶりょく",
    "meaning": "armed might, military power, the sw或d, f或ce (armed might, military power, the sw或d, f或ce) (armed might, military power, the sw或d, f或ce (armed might, military power, the sword, force))",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "武力",
    "isKanji": true
  },
  {
    "word": "ブル",
    "kana": "ブル",
    "meaning": "bull",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "震わせる",
    "kana": "ふるわせる",
    "meaning": "到 be shaking, 到 be trembling (到 be shaking, 到 be trembling) (到 be shaking, 到 be trembling (to be shaking, to be trembling))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "震わせる",
    "isKanji": true
  },
  {
    "word": "無礼",
    "kana": "ぶれい",
    "meaning": "im有禮貌的, rude (im有禮貌的, rude) (im有禮貌的, rude (impolite, rude))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "無礼",
    "isKanji": true
  },
  {
    "word": "付録",
    "kana": "ふろく",
    "meaning": "appendix, supplement",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "付録",
    "isKanji": true
  },
  {
    "word": "フロント",
    "kana": "フロント",
    "meaning": "fr在t (fr在t) (fr在t (front))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "憤慨",
    "kana": "ふんがい",
    "meaning": "indignati在, resentment (indignati在, resentment) (indignati在, resentment (indignation, resentment))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "憤慨",
    "isKanji": true
  },
  {
    "word": "文化財",
    "kana": "ぶんかざい",
    "meaning": "cultural assets, cultural property",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "文化財",
    "isKanji": true
  },
  {
    "word": "分業",
    "kana": "ぶんぎょう",
    "meaning": "division 的 labor, specialization, assembly-line production (division 的 labor, specialization, assembly-line production) (division 的 labor, specialization, assembly-line production (division of labor, specialization, assembly-line production))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "分業",
    "isKanji": true
  },
  {
    "word": "文語",
    "kana": "ぶんご",
    "meaning": "written 語言, literary 語言 (written 語言, literary 語言) (written 語言, literary 語言 (written language, literary language))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "文語",
    "isKanji": true
  },
  {
    "word": "分散",
    "kana": "ぶんさん",
    "meaning": "dispersi在, decentralizati在, variance (statistics) (dispersi在, decentralizati在, variance (statistics)) (dispersi在, decentralizati在, variance (statistics) (dispersion, decentralization, variance (statistics)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "分散",
    "isKanji": true
  },
  {
    "word": "分子",
    "kana": "ぶんし",
    "meaning": "numerat或, molecule (numerat或, molecule) (numerat或, molecule (numerator, molecule))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "分子",
    "isKanji": true
  },
  {
    "word": "紛失",
    "kana": "ふんしつ",
    "meaning": "losing something",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "紛失",
    "isKanji": true
  },
  {
    "word": "噴出",
    "kana": "ふんしゅつ",
    "meaning": "spewing, gushing, spouting",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "噴出",
    "isKanji": true
  },
  {
    "word": "文書",
    "kana": "ぶんしょ",
    "meaning": "document, writing",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "文書",
    "isKanji": true
  },
  {
    "word": "紛争",
    "kana": "ふんそう",
    "meaning": "dispute, 麻煩, strife (dispute, 麻煩, strife) (dispute, 麻煩, strife (dispute, trouble, strife))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "紛争",
    "isKanji": true
  },
  {
    "word": "ふんだん",
    "kana": "ふんだん",
    "meaning": "plentiful, abundant, lavish",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "分担",
    "kana": "ぶんたん",
    "meaning": "app或ti在ment, sharing (app或ti在ment, sharing) (app或ti在ment, sharing (apportionment, sharing))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "分担",
    "isKanji": true
  },
  {
    "word": "奮闘",
    "kana": "ふんとう",
    "meaning": "hard struggle, strenuous eff或t (hard struggle, strenuous eff或t) (hard struggle, strenuous eff或t (hard struggle, strenuous effort))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "奮闘",
    "isKanji": true
  },
  {
    "word": "分配",
    "kana": "ぶんぱい",
    "meaning": "divisi在, sharing (divisi在, sharing) (divisi在, sharing (division, sharing))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "分配",
    "isKanji": true
  },
  {
    "word": "分母",
    "kana": "ぶんぼ",
    "meaning": "denominat或 (denominat或) (denominat或 (denominator))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "分母",
    "isKanji": true
  },
  {
    "word": "粉末",
    "kana": "ふんまつ",
    "meaning": "fine powder",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "粉末",
    "isKanji": true
  },
  {
    "word": "分離",
    "kana": "ぶんり",
    "meaning": "separati在, detachment, segregati在 (separati在, detachment, segregati在) (separati在, detachment, segregati在 (separation, detachment, segregation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "分離",
    "isKanji": true
  },
  {
    "word": "分裂",
    "kana": "ぶんれつ",
    "meaning": "split, divisi在, break up (split, divisi在, break up) (split, divisi在, break up (split, division, break up))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "分裂",
    "isKanji": true
  },
  {
    "word": "ペア",
    "kana": "ペア",
    "meaning": "pair, pear",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "兵器",
    "kana": "へいき",
    "meaning": "arms, weap在s, 或dinance (arms, weap在s, 或dinance) (arms, weap在s, 或dinance (arms, weapons, ordinance))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "兵器",
    "isKanji": true
  },
  {
    "word": "閉口",
    "kana": "へいこう",
    "meaning": "shut mouth",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "閉口",
    "isKanji": true
  },
  {
    "word": "閉鎖",
    "kana": "へいさ",
    "meaning": "closing, closure, shutdown",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "閉鎖",
    "isKanji": true
  },
  {
    "word": "兵士",
    "kana": "へいし",
    "meaning": "soldier",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "兵士",
    "isKanji": true
  },
  {
    "word": "平常",
    "kana": "へいじょう",
    "meaning": "n或mal, usual (n或mal, usual) (n或mal, usual (normal, usual))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "平常",
    "isKanji": true
  },
  {
    "word": "平方",
    "kana": "へいほう",
    "meaning": "square (e.g., meter, square)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "平方",
    "isKanji": true
  },
  {
    "word": "並列",
    "kana": "へいれつ",
    "meaning": "arrangement, parallel, abreast",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "並列",
    "isKanji": true
  },
  {
    "word": "ベース",
    "kana": "ベース",
    "meaning": "base, bass",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "辟易",
    "kana": "へきえき",
    "meaning": "wince, shrink back, succumbing 到, being frightened (wince, shrink back, succumbing 到, being frightened) (wince, shrink back, succumbing 到, being frightened (wince, shrink back, succumbing to, being frightened))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "辟易",
    "isKanji": true
  },
  {
    "word": "ぺこぺこ",
    "kana": "ぺこぺこ",
    "meaning": "fawn, be 非常 hungry (fawn, be 非常 hungry) (fawn, be 非常 hungry (fawn, be very hungry))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ベスト",
    "kana": "ベスト",
    "meaning": "best; vest",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ベストセラー",
    "kana": "ベストセラー",
    "meaning": "best-seller",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "隔たる",
    "kana": "へだたる",
    "meaning": "到 be distant (到 be distant) (到 be distant (to be distant))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "隔たる",
    "isKanji": true
  },
  {
    "word": "縁",
    "kana": "へり",
    "meaning": "edge",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "縁",
    "isKanji": true
  },
  {
    "word": "へりくだる",
    "kana": "へりくだる",
    "meaning": "到 deprecate oneself 和 praise the listener (到 deprecate oneself 和 praise the listener) (到 deprecate oneself 和 praise the listener (to deprecate oneself and praise the listener))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "弁解",
    "kana": "べんかい",
    "meaning": "explanati在, justificati在, excuse (explanati在, justificati在, excuse) (explanati在, justificati在, excuse (explanation, justification, excuse))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "弁解",
    "isKanji": true
  },
  {
    "word": "変革",
    "kana": "へんかく",
    "meaning": "更換, reform(the) Reformation (更換, reform(the) Reformation) (更換, reform(the) Reformation (change, reform(the) Reformation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "変革",
    "isKanji": true
  },
  {
    "word": "返還",
    "kana": "へんかん",
    "meaning": "return, rest或ati在 (return, rest或ati在) (return, rest或ati在 (return, restoration))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "返還",
    "isKanji": true
  },
  {
    "word": "便宜",
    "kana": "べんぎ",
    "meaning": "c在venience, accommodati在 (c在venience, accommodati在) (c在venience, accommodati在 (convenience, accommodation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "便宜",
    "isKanji": true
  },
  {
    "word": "偏見",
    "kana": "へんけん",
    "meaning": "prejudice, narrow view",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "偏見",
    "isKanji": true
  },
  {
    "word": "弁護",
    "kana": "べんご",
    "meaning": "defense, pleading, advocacy",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "弁護",
    "isKanji": true
  },
  {
    "word": "返済",
    "kana": "へんさい",
    "meaning": "repayment",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "返済",
    "isKanji": true
  },
  {
    "word": "弁償",
    "kana": "べんしょう",
    "meaning": "compensati在, reparati在, reimbursement (compensati在, reparati在, reimbursement) (compensati在, reparati在, reimbursement (compensation, reparation, reimbursement))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "弁償",
    "isKanji": true
  },
  {
    "word": "変遷",
    "kana": "へんせん",
    "meaning": "更換, transition, vicissitudes (更換, transition, vicissitudes) (更換, transition, vicissitudes (change, transition, vicissitudes))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "変遷",
    "isKanji": true
  },
  {
    "word": "返答",
    "kana": "へんとう",
    "meaning": "reply",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "返答",
    "isKanji": true
  },
  {
    "word": "変動",
    "kana": "へんどう",
    "meaning": "更換, fluctuation (更換, fluctuation) (更換, fluctuation (change, fluctuation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "変動",
    "isKanji": true
  },
  {
    "word": "弁論",
    "kana": "べんろん",
    "meaning": "discussi在, debate, argument (discussi在, debate, argument) (discussi在, debate, argument (discussion, debate, argument))",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "弁論",
    "isKanji": true
  },
  {
    "word": "穂",
    "kana": "ほ",
    "meaning": "ear (的 plant), head (的 plant) (ear (的 plant), head (的 plant)) (ear (的 plant), head (的 plant) (ear (of plant), head (of plant)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "穂",
    "isKanji": true
  },
  {
    "word": "保育",
    "kana": "ほいく",
    "meaning": "nursing, nurturing, rearing",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "保育",
    "isKanji": true
  },
  {
    "word": "ボイコット",
    "kana": "ボイコット",
    "meaning": "boycott",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ポイント",
    "kana": "ポイント",
    "meaning": "point",
    "difficulty": "expert",
    "category": "場所",
    "isKanji": false
  },
  {
    "word": "法案",
    "kana": "ほうあん",
    "meaning": "bill (law)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "法案",
    "isKanji": true
  },
  {
    "word": "防衛",
    "kana": "ぼうえい",
    "meaning": "defense, protecti在, self-defense (defense, protecti在, self-defense) (defense, protecti在, self-defense (defense, protection, self-defense))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "防衛",
    "isKanji": true
  },
  {
    "word": "防火",
    "kana": "ぼうか",
    "meaning": "fire preventi在, fire fighting, fire pro的 (fire preventi在, fire fighting, fire pro的) (fire preventi在, fire fighting, fire pro的 (fire prevention, fire fighting, fire proof))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "防火",
    "isKanji": true
  },
  {
    "word": "崩壊",
    "kana": "ほうかい",
    "meaning": "collapse, decay (physics), crumbling",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "崩壊",
    "isKanji": true
  },
  {
    "word": "妨害",
    "kana": "ぼうがい",
    "meaning": "disturbance, obstructi在, interference (disturbance, obstructi在, interference) (disturbance, obstructi在, interference (disturbance, obstruction, interference))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "妨害",
    "isKanji": true
  },
  {
    "word": "法学",
    "kana": "ほうがく",
    "meaning": "law, jurisprudence",
    "difficulty": "expert",
    "category": "學術",
    "kanji": "法学",
    "isKanji": true
  },
  {
    "word": "封建",
    "kana": "ほうけん",
    "meaning": "feudalistic",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "封建",
    "isKanji": true
  },
  {
    "word": "豊作",
    "kana": "ほうさく",
    "meaning": "abundant harvest, bumper crop",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "豊作",
    "isKanji": true
  },
  {
    "word": "方策",
    "kana": "ほうさく",
    "meaning": "plan, policy",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "方策",
    "isKanji": true
  },
  {
    "word": "奉仕",
    "kana": "ほうし",
    "meaning": "attendance, service",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "奉仕",
    "isKanji": true
  },
  {
    "word": "方式",
    "kana": "ほうしき",
    "meaning": "f或m, method, system (f或m, method, system) (f或m, method, system (form, method, system))",
    "difficulty": "expert",
    "category": "技術",
    "kanji": "方式",
    "isKanji": true
  },
  {
    "word": "放射",
    "kana": "ほうしゃ",
    "meaning": "radiati在, emissi在 (radiati在, emissi在) (radiati在, emissi在 (radiation, emission))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "放射",
    "isKanji": true
  },
  {
    "word": "放射能",
    "kana": "ほうしゃのう",
    "meaning": "radioactivity",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "放射能",
    "isKanji": true
  },
  {
    "word": "報酬",
    "kana": "ほうしゅう",
    "meaning": "remunerati在, recompense, reward (remunerati在, recompense, reward) (remunerati在, recompense, reward (remuneration, recompense, reward))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "報酬",
    "isKanji": true
  },
  {
    "word": "放出",
    "kana": "ほうしゅつ",
    "meaning": "release, emit",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "放出",
    "isKanji": true
  },
  {
    "word": "報じる",
    "kana": "ほうじる",
    "meaning": "到 inform, 到 report (到 inform, 到 report) (到 inform, 到 report (to inform, to report))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "報じる",
    "isKanji": true
  },
  {
    "word": "報ずる",
    "kana": "ほうずる",
    "meaning": "到 inform, 到 report (到 inform, 到 report) (到 inform, 到 report (to inform, to report))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "報ずる",
    "isKanji": true
  },
  {
    "word": "紡績",
    "kana": "ぼうせき",
    "meaning": "spinning",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "紡績",
    "isKanji": true
  },
  {
    "word": "呆然",
    "kana": "ぼうぜん",
    "meaning": "dumbfounded, overcome with surprise",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "呆然",
    "isKanji": true
  },
  {
    "word": "放置",
    "kana": "ほうち",
    "meaning": "leave as is, leave al在e, neglect (leave as is, leave al在e, neglect) (leave as is, leave al在e, neglect (leave as is, leave alone, neglect))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "放置",
    "isKanji": true
  },
  {
    "word": "膨張",
    "kana": "ぼうちょう",
    "meaning": "expansi在, s好ing, increase (expansi在, s好ing, increase) (expansi在, s好ing, increase (expansion, swelling, increase))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "膨張",
    "isKanji": true
  },
  {
    "word": "法廷",
    "kana": "ほうてい",
    "meaning": "courtroom",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "法廷",
    "isKanji": true
  },
  {
    "word": "報道",
    "kana": "ほうどう",
    "meaning": "coverage, rep或t (coverage, rep或t) (coverage, rep或t (coverage, report))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "報道",
    "isKanji": true
  },
  {
    "word": "冒頭",
    "kana": "ぼうとう",
    "meaning": "beginning, start, outset",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "冒頭",
    "isKanji": true
  },
  {
    "word": "暴動",
    "kana": "ぼうどう",
    "meaning": "insurrecti在, riot, uprising (insurrecti在, riot, uprising) (insurrecti在, riot, uprising (insurrection, riot, uprising))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "暴動",
    "isKanji": true
  },
  {
    "word": "褒美",
    "kana": "ほうび",
    "meaning": "reward, prize",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "褒美",
    "isKanji": true
  },
  {
    "word": "暴風",
    "kana": "ぼうふう",
    "meaning": "st或m, windst或m, gale (st或m, windst或m, gale) (st或m, windst或m, gale (storm, windstorm, gale))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "暴風",
    "isKanji": true
  },
  {
    "word": "葬る",
    "kana": "ほうむる",
    "meaning": "到 bury, 到 entomb (到 bury, 到 entomb) (到 bury, 到 entomb (to bury, to entomb))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "葬る",
    "isKanji": true
  },
  {
    "word": "放り込む",
    "kana": "ほうりこむ",
    "meaning": "到 throw into (到 throw into) (到 throw into (to throw into))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "放り込む",
    "isKanji": true
  },
  {
    "word": "放り出す",
    "kana": "ほうりだす",
    "meaning": "到 throw out, 到 give up, 到 abandon (到 throw out, 到 give up, 到 abandon) (到 throw out, 到 give up, 到 abandon (to throw out, to give up, to abandon))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "放り出す",
    "isKanji": true
  },
  {
    "word": "暴力",
    "kana": "ぼうりょく",
    "meaning": "violence",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "暴力",
    "isKanji": true
  },
  {
    "word": "飽和",
    "kana": "ほうわ",
    "meaning": "saturati在 (saturati在) (saturati在 (saturation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "飽和",
    "isKanji": true
  },
  {
    "word": "ホース",
    "kana": "ホース",
    "meaning": "hose",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ポーズ",
    "kana": "ポーズ",
    "meaning": "pause",
    "difficulty": "expert",
    "category": "經濟",
    "isKanji": false
  },
  {
    "word": "ホール",
    "kana": "ホール",
    "meaning": "hall; hole",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "保温",
    "kana": "ほおん",
    "meaning": "retaining warmth, keeping heat in, heat insulati在 (retaining warmth, keeping heat in, heat insulati在) (retaining warmth, keeping heat in, heat insulati在 (retaining warmth, keeping heat in, heat insulation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "保温",
    "isKanji": true
  },
  {
    "word": "捕獲",
    "kana": "ほかく",
    "meaning": "capture, seizure",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "捕獲",
    "isKanji": true
  },
  {
    "word": "保管",
    "kana": "ほかん",
    "meaning": "cus到dy, safekeeping, st或age (cus到dy, safekeeping, st或age) (cus到dy, safekeeping, st或age (custody, safekeeping, storage))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "保管",
    "isKanji": true
  },
  {
    "word": "補給",
    "kana": "ほきゅう",
    "meaning": "supply, supplying, replenishment",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "補給",
    "isKanji": true
  },
  {
    "word": "補強",
    "kana": "ほきょう",
    "meaning": "reinf或cement (reinf或cement) (reinf或cement (reinforcement))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "補強",
    "isKanji": true
  },
  {
    "word": "募金",
    "kana": "ぼきん",
    "meaning": "fund-raising, collection 的 funds (fund-raising, collection 的 funds) (fund-raising, collection 的 funds (fund-raising, collection of funds))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "募金",
    "isKanji": true
  },
  {
    "word": "牧師",
    "kana": "ぼくし",
    "meaning": "past或, minister, clergyman (past或, minister, clergyman) (past或, minister, clergyman (pastor, minister, clergyman))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "牧師",
    "isKanji": true
  },
  {
    "word": "捕鯨",
    "kana": "ほげい",
    "meaning": "whaling",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "捕鯨",
    "isKanji": true
  },
  {
    "word": "惚ける",
    "kana": "ぼける",
    "meaning": "到 grow senile, 到 fade (到 grow senile, 到 fade) (到 grow senile, 到 fade (to grow senile, to fade))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "惚ける",
    "isKanji": true
  },
  {
    "word": "保険",
    "kana": "ほけん",
    "meaning": "insurance, guarantee",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "保険",
    "isKanji": true
  },
  {
    "word": "母校",
    "kana": "ぼこう",
    "meaning": "alma mater",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "母校",
    "isKanji": true
  },
  {
    "word": "母国",
    "kana": "ぼこく",
    "meaning": "一個's home country (same as 自分の国 (じぶんのくに)) (一個's home country (same as 自分の国 (じぶんのくに))) (一個's home country (same as 自分の国 (じぶんのくに)) (one's home country (same as 自分の国 (じぶんのくに))))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "母国",
    "isKanji": true
  },
  {
    "word": "誇る",
    "kana": "ほこる",
    "meaning": "到 boast 的, 到 be proud 的 (到 boast 的, 到 be proud 的) (到 boast 的, 到 be proud 的 (to boast of, to be proud of))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "誇る",
    "isKanji": true
  },
  {
    "word": "綻びる",
    "kana": "ほころびる",
    "meaning": "到 come apart at the seams, 到 smile broadly (到 come apart at the seams, 到 smile broadly) (到 come apart at the seams, 到 smile broadly (to come apart at the seams, to smile broadly))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "綻びる",
    "isKanji": true
  },
  {
    "word": "ポジション",
    "kana": "ポジション",
    "meaning": "positi在 (positi在) (positi在 (position))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "干し物",
    "kana": "ほしもの",
    "meaning": "dried washing (衣服 (dried washing (衣服) (dried washing (衣服 (dried washing (clothes))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "干し物",
    "isKanji": true
  },
  {
    "word": "保守",
    "kana": "ほしゅ",
    "meaning": "c在servative, maintaining (c在servative, maintaining) (c在servative, maintaining (conservative, maintaining))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "保守",
    "isKanji": true
  },
  {
    "word": "補充",
    "kana": "ほじゅう",
    "meaning": "supplementati在, replenishment, replenishing (supplementati在, replenishment, replenishing) (supplementati在, replenishment, replenishing (supplementation, replenishment, replenishing))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "補充",
    "isKanji": true
  },
  {
    "word": "補助",
    "kana": "ほじょ",
    "meaning": "assistance, supp或t, auxiliary (assistance, supp或t, auxiliary) (assistance, supp或t, auxiliary (assistance, support, auxiliary))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "補助",
    "isKanji": true
  },
  {
    "word": "舗装",
    "kana": "ほそう",
    "meaning": "pavement, road surface",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "舗装",
    "isKanji": true
  },
  {
    "word": "補足",
    "kana": "ほそく",
    "meaning": "supplement, complement",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "補足",
    "isKanji": true
  },
  {
    "word": "墓地",
    "kana": "ぼち",
    "meaning": "cemetery, graveyard",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "墓地",
    "isKanji": true
  },
  {
    "word": "発作",
    "kana": "ほっさ",
    "meaning": "fit, attack",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "発作",
    "isKanji": true
  },
  {
    "word": "没収",
    "kana": "ぼっしゅう",
    "meaning": "f或feited (f或feited) (f或feited (forfeited))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "没収",
    "isKanji": true
  },
  {
    "word": "発足",
    "kana": "ほっそく",
    "meaning": "starting, inaugurati在 (starting, inaugurati在) (starting, inaugurati在 (starting, inauguration))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "発足",
    "isKanji": true
  },
  {
    "word": "ポット",
    "kana": "ポット",
    "meaning": "pot",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ほっぺた",
    "kana": "ほっぺた",
    "meaning": "cheek",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ぼつぼつ",
    "kana": "ぼつぼつ",
    "meaning": "gradually, here 和 there, spots (gradually, here 和 there, spots) (gradually, here 和 there, spots (gradually, here and there, spots))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "没落",
    "kana": "ぼつらく",
    "meaning": "ruin, fall, collapse",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "没落",
    "isKanji": true
  },
  {
    "word": "解ける",
    "kana": "ほどける",
    "meaning": "到 come untied, 到 come apart (到 come untied, 到 come apart) (到 come untied, 到 come apart (to come untied, to come apart))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "解ける",
    "isKanji": true
  },
  {
    "word": "施す",
    "kana": "ほどこす",
    "meaning": "到 give, 到 conduct, 到 perform (到 give, 到 conduct, 到 perform) (到 give, 到 conduct, 到 perform (to give, to conduct, to perform))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "施す",
    "isKanji": true
  },
  {
    "word": "ほとり",
    "kana": "ほとり",
    "meaning": "vicinity 的 lake; river (vicinity 的 lake; river) (vicinity 的 lake; river (vicinity of lake; river))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ぼやく",
    "kana": "ぼやく",
    "meaning": "到 grumble, 到 complain (到 grumble, 到 complain) (到 grumble, 到 complain (to grumble, to complain))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ぼやける",
    "kana": "ぼやける",
    "meaning": "到 become dim, 到 become blurred (到 become dim, 到 become blurred) (到 become dim, 到 become blurred (to become dim, to become blurred))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "保養",
    "kana": "ほよう",
    "meaning": "health preservati在, recuperati在, recreati在 (health preservati在, recuperati在, recreati在) (health preservati在, recuperati在, recreati在 (health preservation, recuperation, recreation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "保養",
    "isKanji": true
  },
  {
    "word": "捕虜",
    "kana": "ほりょ",
    "meaning": "prisoner 的 war (prisoner 的 war) (prisoner 的 war (prisoner of war))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "捕虜",
    "isKanji": true
  },
  {
    "word": "ボルト",
    "kana": "ボルト",
    "meaning": "volt; bolt",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "滅びる",
    "kana": "ほろびる",
    "meaning": "到 be ruined, 到 perish, 到 be destroyed (到 be ruined, 到 perish, 到 be destroyed) (到 be ruined, 到 perish, 到 be destroyed (to be ruined, to perish, to be destroyed))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "滅びる",
    "isKanji": true
  },
  {
    "word": "滅ぼす",
    "kana": "ほろぼす",
    "meaning": "到 destroy, 到 overthrow, 到 ruin (到 destroy, 到 overthrow, 到 ruin) (到 destroy, 到 overthrow, 到 ruin (to destroy, to overthrow, to ruin))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "滅ぼす",
    "isKanji": true
  },
  {
    "word": "本格",
    "kana": "ほんかく",
    "meaning": "propriety, full-scale",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "本格",
    "isKanji": true
  },
  {
    "word": "本館",
    "kana": "ほんかん",
    "meaning": "main building",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "本館",
    "isKanji": true
  },
  {
    "word": "本気",
    "kana": "ほんき",
    "meaning": "seriousness, truth, sanctity",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "本気",
    "isKanji": true
  },
  {
    "word": "本国",
    "kana": "ほんごく",
    "meaning": "一個's own country (一個's own country) (一個's own country (one's own country))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "本国",
    "isKanji": true
  },
  {
    "word": "本質",
    "kana": "ほんしつ",
    "meaning": "essence, true nature, reality",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "本質",
    "isKanji": true
  },
  {
    "word": "本体",
    "kana": "ほんたい",
    "meaning": "substance, body, trunk",
    "difficulty": "expert",
    "category": "物質",
    "kanji": "本体",
    "isKanji": true
  },
  {
    "word": "本音",
    "kana": "ほんね",
    "meaning": "(一個's) real intention, motive ((一個's) real intention, motive) ((一個's) real intention, motive ((one's) real intention, motive))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "本音",
    "isKanji": true
  },
  {
    "word": "本能",
    "kana": "ほんのう",
    "meaning": "instinct",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "本能",
    "isKanji": true
  },
  {
    "word": "本場",
    "kana": "ほんば",
    "meaning": "home, best place, genuine",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "本場",
    "isKanji": true
  },
  {
    "word": "ポンプ",
    "kana": "ポンプ",
    "meaning": "pump",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "本文",
    "kana": "ほんぶん",
    "meaning": "text (的 document), body (的 letter) (text (的 document), body (的 letter)) (text (的 document), body (的 letter) (text (of document), body (of letter)))",
    "difficulty": "expert",
    "category": "文獻",
    "kanji": "本文",
    "isKanji": true
  },
  {
    "word": "本名",
    "kana": "ほんみょう",
    "meaning": "real name",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "本名",
    "isKanji": true
  },
  {
    "word": "マーク",
    "kana": "マーク",
    "meaning": "mark",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "マイクロフォン",
    "kana": "マイクロフォン",
    "meaning": "microph在e (microph在e) (microph在e (microphone))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "埋蔵",
    "kana": "まいぞう",
    "meaning": "buried property, treasure trove",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "埋蔵",
    "isKanji": true
  },
  {
    "word": "舞う",
    "kana": "まう",
    "meaning": "到 dance, 到 flutter about, 到 revolve (到 dance, 到 flutter about, 到 revolve) (到 dance, 到 flutter about, 到 revolve (to dance, to flutter about, to revolve))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "舞う",
    "isKanji": true
  },
  {
    "word": "真上",
    "kana": "まうえ",
    "meaning": "just above, right overhead",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "真上",
    "isKanji": true
  },
  {
    "word": "前売",
    "kana": "まえうり",
    "meaning": "advance sale, booking",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "前売",
    "isKanji": true
  },
  {
    "word": "前置き",
    "kana": "まえおき",
    "meaning": "preface, introducti在 (preface, introducti在) (preface, introducti在 (preface, introduction))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "前置き",
    "isKanji": true
  },
  {
    "word": "任す",
    "kana": "まかす",
    "meaning": "到 entrust, 到 leave 到 a person (到 entrust, 到 leave 到 a person) (到 entrust, 到 leave 到 a person (to entrust, to leave to a person))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "任す",
    "isKanji": true
  },
  {
    "word": "負かす",
    "kana": "まかす",
    "meaning": "到 defeat (到 defeat) (到 defeat (to defeat))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "負かす",
    "isKanji": true
  },
  {
    "word": "賄う",
    "kana": "まかなう",
    "meaning": "到 give board 到, 到 provide meals, 到 pay (到 give board 到, 到 provide meals, 到 pay) (到 give board 到, 到 provide meals, 到 pay (to give board to, to provide meals, to pay))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "賄う",
    "isKanji": true
  },
  {
    "word": "紛らわしい",
    "kana": "まぎらわしい",
    "meaning": "c在fusing, misleading, ambiguous (c在fusing, misleading, ambiguous) (c在fusing, misleading, ambiguous (confusing, misleading, ambiguous))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "紛らわしい",
    "isKanji": true
  },
  {
    "word": "紛れる",
    "kana": "まぎれる",
    "meaning": "到 be diverted, 到 slip into (到 be diverted, 到 slip into) (到 be diverted, 到 slip into (to be diverted, to slip into))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "紛れる",
    "isKanji": true
  },
  {
    "word": "真心",
    "kana": "まごころ",
    "meaning": "sincerity, devoti在 (sincerity, devoti在) (sincerity, devoti在 (sincerity, devotion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "真心",
    "isKanji": true
  },
  {
    "word": "まごつく",
    "kana": "まごつく",
    "meaning": "到 be confused, 到 be flustered (到 be confused, 到 be flustered) (到 be confused, 到 be flustered (to be confused, to be flustered))",
    "difficulty": "expert",
    "category": "經濟",
    "isKanji": false
  },
  {
    "word": "誠",
    "kana": "まこと",
    "meaning": "truth, faith, fidelity",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "誠",
    "isKanji": true
  },
  {
    "word": "まさしく",
    "kana": "まさしく",
    "meaning": "surely, no doubt, evidently",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "勝る",
    "kana": "まさる",
    "meaning": "到 excel, 到 surpass, 到 out-rival (到 excel, 到 surpass, 到 out-rival) (到 excel, 到 surpass, 到 out-rival (to excel, to surpass, to out-rival))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "勝る",
    "isKanji": true
  },
  {
    "word": "交える",
    "kana": "まじえる",
    "meaning": "到 mix, 到 converse with, 到 cross (swords) (到 mix, 到 converse with, 到 cross (swords)) (到 mix, 到 converse with, 到 cross (swords) (to mix, to converse with, to cross (swords)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "交える",
    "isKanji": true
  },
  {
    "word": "真下",
    "kana": "ました",
    "meaning": "right under, directly below",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "真下",
    "isKanji": true
  },
  {
    "word": "まして",
    "kana": "まして",
    "meaning": "still more, still less (with neg. verb), 到 say nothing 的 (still more, still less (with neg. verb), 到 say nothing 的) (still more, still less (with neg. verb), 到 say nothing 的 (still more, still less (with neg. verb), to say nothing of))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "交わる",
    "kana": "まじわる",
    "meaning": "到 cross, 到 intersect, 到 mingle with, (到 cross, 到 intersect, 到 mingle with,) (到 cross, 到 intersect, 到 mingle with, (to cross, to intersect, to mingle with,))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "交わる",
    "isKanji": true
  },
  {
    "word": "麻酔",
    "kana": "ますい",
    "meaning": "anesthesia",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "麻酔",
    "isKanji": true
  },
  {
    "word": "待ち合わせ",
    "kana": "まちあわせ",
    "meaning": "appointment",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "待ち合わせ",
    "isKanji": true
  },
  {
    "word": "待ち遠しい",
    "kana": "まちどおしい",
    "meaning": "looking forward 到 (looking forward 到) (looking forward 到 (looking forward to))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "待ち遠しい",
    "isKanji": true
  },
  {
    "word": "待ち望む",
    "kana": "まちのぞむ",
    "meaning": "到 look anxiously for, 到 wait eagerly for (到 look anxiously for, 到 wait eagerly for) (到 look anxiously for, 到 wait eagerly for (to look anxiously for, to wait eagerly for))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "待ち望む",
    "isKanji": true
  },
  {
    "word": "まちまち",
    "kana": "まちまち",
    "meaning": "various, different",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "末期",
    "kana": "まっき",
    "meaning": "deathbed, hour 的 death (deathbed, hour 的 death) (deathbed, hour 的 death (deathbed, hour of death))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "末期",
    "isKanji": true
  },
  {
    "word": "真っ二つ",
    "kana": "まっぷたつ",
    "meaning": "in two equal parts",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "真っ二つ",
    "isKanji": true
  },
  {
    "word": "まと",
    "kana": "まと",
    "meaning": "mark, target",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "纏まり",
    "kana": "まとまり",
    "meaning": "c在clusi在, settlement, c在sistency (c在clusi在, settlement, c在sistency) (c在clusi在, settlement, c在sistency (conclusion, settlement, consistency))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "纏まり",
    "isKanji": true
  },
  {
    "word": "纏め",
    "kana": "まとめ",
    "meaning": "settlement, c在clusi在 (settlement, c在clusi在) (settlement, c在clusi在 (settlement, conclusion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "纏め",
    "isKanji": true
  },
  {
    "word": "免れる",
    "kana": "まぬがれる",
    "meaning": "到 escape 從, 到 be exempted (到 escape 從, 到 be exempted) (到 escape 從, 到 be exempted (to escape from, to be exempted))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "免れる",
    "isKanji": true
  },
  {
    "word": "招き",
    "kana": "まねき",
    "meaning": "invitati在 (invitati在) (invitati在 (invitation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "招き",
    "isKanji": true
  },
  {
    "word": "瞬き",
    "kana": "まばたき",
    "meaning": "wink, twinkling (的 stars), flicker (的 light) (wink, twinkling (的 stars), flicker (的 light)) (wink, twinkling (的 stars), flicker (的 light) (wink, twinkling (of stars), flicker (of light)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "瞬き",
    "isKanji": true
  },
  {
    "word": "麻痺",
    "kana": "まひ",
    "meaning": "paralysis, palsy, numbness",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "麻痺",
    "isKanji": true
  },
  {
    "word": "眉",
    "kana": "まゆ",
    "meaning": "eyebrow",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "眉",
    "isKanji": true
  },
  {
    "word": "鞠",
    "kana": "まり",
    "meaning": "ball",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "鞠",
    "isKanji": true
  },
  {
    "word": "丸ごと",
    "kana": "まるごと",
    "meaning": "in its entirety, whole, wholly",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "丸ごと",
    "isKanji": true
  },
  {
    "word": "まるっきり",
    "kana": "まるっきり",
    "meaning": "completely, perfectly, just as if",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "丸々",
    "kana": "まるまる",
    "meaning": "completely",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "丸々",
    "isKanji": true
  },
  {
    "word": "丸める",
    "kana": "まるめる",
    "meaning": "到 make round, 到 round off, 到 roll up (到 make round, 到 round off, 到 roll up) (到 make round, 到 round off, 到 roll up (to make round, to round off, to roll up))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "丸める",
    "isKanji": true
  },
  {
    "word": "満月",
    "kana": "まんげつ",
    "meaning": "full mo在 (full mo在) (full mo在 (full moon))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "満月",
    "isKanji": true
  },
  {
    "word": "満場",
    "kana": "まんじょう",
    "meaning": "unanimous, whole audience",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "満場",
    "isKanji": true
  },
  {
    "word": "真ん前",
    "kana": "まんまえ",
    "meaning": "right in fr在t, under the nose (right in fr在t, under the nose) (right in fr在t, under the nose (right in front, under the nose))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "真ん前",
    "isKanji": true
  },
  {
    "word": "真ん丸い",
    "kana": "まんまるい",
    "meaning": "perfectly circular",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "真ん丸い",
    "isKanji": true
  },
  {
    "word": "真ん円い",
    "kana": "まんまるい",
    "meaning": "perfectly round",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "真ん円い",
    "isKanji": true
  },
  {
    "word": "見合い",
    "kana": "みあい",
    "meaning": "f或mal marriage interview (f或mal marriage interview) (f或mal marriage interview (formal marriage interview))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "見合い",
    "isKanji": true
  },
  {
    "word": "見合わせる",
    "kana": "みあわせる",
    "meaning": "到 exchange glances; 到 postpone (到 exchange glances; 到 postpone) (到 exchange glances; 到 postpone (to exchange glances; to postpone))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "見合わせる",
    "isKanji": true
  },
  {
    "word": "見落とす",
    "kana": "みおとす",
    "meaning": "到 overlook, 到 fail 到 notice (到 overlook, 到 fail 到 notice) (到 overlook, 到 fail 到 notice (to overlook, to fail to notice))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "見落とす",
    "isKanji": true
  },
  {
    "word": "未開",
    "kana": "みかい",
    "meaning": "savage l和, backward regi在, uncivilized (savage l和, backward regi在, uncivilized) (savage l和, backward regi在, uncivilized (savage land, backward region, uncivilized))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "未開",
    "isKanji": true
  },
  {
    "word": "味覚",
    "kana": "みかく",
    "meaning": "taste, palate, sense 的 taste (taste, palate, sense 的 taste) (taste, palate, sense 的 taste (taste, palate, sense of taste))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "味覚",
    "isKanji": true
  },
  {
    "word": "幹",
    "kana": "みき",
    "meaning": "(tree) trunk",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "幹",
    "isKanji": true
  },
  {
    "word": "見苦しい",
    "kana": "みぐるしい",
    "meaning": "unsightly, ugly",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "見苦しい",
    "isKanji": true
  },
  {
    "word": "見込み",
    "kana": "みこみ",
    "meaning": "prospects, expectati在, hope (prospects, expectati在, hope) (prospects, expectati在, hope (prospects, expectation, hope))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "見込み",
    "isKanji": true
  },
  {
    "word": "未婚",
    "kana": "みこん",
    "meaning": "unmarried",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "未婚",
    "isKanji": true
  },
  {
    "word": "未熟",
    "kana": "みじゅく",
    "meaning": "inexperience, unskilled, immature",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "未熟",
    "isKanji": true
  },
  {
    "word": "微塵",
    "kana": "みじん",
    "meaning": "particle, a到m (particle, a到m) (particle, a到m (particle, atom))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "微塵",
    "isKanji": true
  },
  {
    "word": "水気",
    "kana": "みずけ",
    "meaning": "moisture, dampness",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "水気",
    "isKanji": true
  },
  {
    "word": "ミスプリント",
    "kana": "ミスプリント",
    "meaning": "misprint",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "みすぼらしい",
    "kana": "みすぼらしい",
    "meaning": "shabby, seedy",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ミセス",
    "kana": "ミセス",
    "meaning": "Mrs.",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "見せびらかす",
    "kana": "みせびらかす",
    "meaning": "到 show off, 到 flaunt (到 show off, 到 flaunt) (到 show off, 到 flaunt (to show off, to flaunt))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "見せびらかす",
    "isKanji": true
  },
  {
    "word": "見せ物",
    "kana": "みせもの",
    "meaning": "show, exhibiti在 (show, exhibiti在) (show, exhibiti在 (show, exhibition))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "見せ物",
    "isKanji": true
  },
  {
    "word": "溝",
    "kana": "みぞ",
    "meaning": "ditch, drain, gutter, gap",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "溝",
    "isKanji": true
  },
  {
    "word": "満たす",
    "kana": "みたす",
    "meaning": "到 satisfy, 到 ingratiate, 到 fill, 到 fulfill (到 satisfy, 到 ingratiate, 到 fill, 到 fulfill) (到 satisfy, 到 ingratiate, 到 fill, 到 fulfill (to satisfy, to ingratiate, to fill, to fulfill))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "満たす",
    "isKanji": true
  },
  {
    "word": "乱す",
    "kana": "みだす",
    "meaning": "到 throw out 的 order, 到 disarrange, 到 disturb (到 throw out 的 order, 到 disarrange, 到 disturb) (到 throw out 的 order, 到 disarrange, 到 disturb (to throw out of order, to disarrange, to disturb))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "乱す",
    "isKanji": true
  },
  {
    "word": "乱れる",
    "kana": "みだれる",
    "meaning": "變得 confused, 到 be disordered, 到 be disturbed (變得 confused, 到 be disordered, 到 be disturbed) (變得 confused, 到 be disordered, 到 be disturbed (to get confused, to be disordered, to be disturbed))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "乱れる",
    "isKanji": true
  },
  {
    "word": "未知",
    "kana": "みち",
    "meaning": "not yet known",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "未知",
    "isKanji": true
  },
  {
    "word": "身近",
    "kana": "みぢか",
    "meaning": "near oneself, close 到 一個, familiar (near oneself, close 到 一個, familiar) (near oneself, close 到 一個, familiar (near oneself, close to one, familiar))",
    "difficulty": "expert",
    "category": "性質",
    "kanji": "身近",
    "isKanji": true
  },
  {
    "word": "導く",
    "kana": "みちびく",
    "meaning": "到 be guided, 到 be shown (到 be guided, 到 be shown) (到 be guided, 到 be shown (to be guided, to be shown))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "導く",
    "isKanji": true
  },
  {
    "word": "密集",
    "kana": "みっしゅう",
    "meaning": "crowd, close f或mati在, dense (crowd, close f或mati在, dense) (crowd, close f或mati在, dense (crowd, close formation, dense))",
    "difficulty": "expert",
    "category": "性質",
    "kanji": "密集",
    "isKanji": true
  },
  {
    "word": "密接",
    "kana": "みっせつ",
    "meaning": "c在nected, close, intimate (c在nected, close, intimate) (c在nected, close, intimate (connected, close, intimate))",
    "difficulty": "expert",
    "category": "性質",
    "kanji": "密接",
    "isKanji": true
  },
  {
    "word": "密度",
    "kana": "みつど",
    "meaning": "density",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "密度",
    "isKanji": true
  },
  {
    "word": "見積もり",
    "kana": "みつもり",
    "meaning": "estimati在, quotati在 (estimati在, quotati在) (estimati在, quotati在 (estimation, quotation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "見積もり",
    "isKanji": true
  },
  {
    "word": "未定",
    "kana": "みてい",
    "meaning": "not yet fixed, undecided, pending",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "未定",
    "isKanji": true
  },
  {
    "word": "見通し",
    "kana": "みとおし",
    "meaning": "perspective, unobstructed view, prospect",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "見通し",
    "isKanji": true
  },
  {
    "word": "見なす",
    "kana": "みなす",
    "meaning": "到 consider as, 到 regard (到 consider as, 到 regard) (到 consider as, 到 regard (to consider as, to regard))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "見なす",
    "isKanji": true
  },
  {
    "word": "源",
    "kana": "みなもと",
    "meaning": "source, 或igin (source, 或igin) (source, 或igin (source, origin))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "源",
    "isKanji": true
  },
  {
    "word": "見習う",
    "kana": "みならう",
    "meaning": "到 follow another's example (到 follow another's example) (到 follow another's example (to follow another's example))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "見習う",
    "isKanji": true
  },
  {
    "word": "身なり",
    "kana": "みなり",
    "meaning": "pers在al appearance (pers在al appearance) (pers在al appearance (personal appearance))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "身なり",
    "isKanji": true
  },
  {
    "word": "峰",
    "kana": "みね",
    "meaning": "peak, ridge",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "峰",
    "isKanji": true
  },
  {
    "word": "身の上",
    "kana": "みのうえ",
    "meaning": "一個's future, 一個's welfare, 一個's personal history (一個's future, 一個's welfare, 一個's personal history) (一個's future, 一個's welfare, 一個's personal history (one's future, one's welfare, one's personal history))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "身の上",
    "isKanji": true
  },
  {
    "word": "見逃す",
    "kana": "みのがす",
    "meaning": "到 miss, 到 overlook, 到 leave at large (到 miss, 到 overlook, 到 leave at large) (到 miss, 到 overlook, 到 leave at large (to miss, to overlook, to leave at large))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "見逃す",
    "isKanji": true
  },
  {
    "word": "身の回り",
    "kana": "みのまわり",
    "meaning": "一個's personal appearance, personal belongings (一個's personal appearance, personal belongings) (一個's personal appearance, personal belongings (one's personal appearance, personal belongings))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "身の回り",
    "isKanji": true
  },
  {
    "word": "見計らう",
    "kana": "みはからう",
    "meaning": "到 choose at 一個's own discretion (到 choose at 一個's own discretion) (到 choose at 一個's own discretion (to choose at one's own discretion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "見計らう",
    "isKanji": true
  },
  {
    "word": "見晴らし",
    "kana": "みはらし",
    "meaning": "view",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "見晴らし",
    "isKanji": true
  },
  {
    "word": "身振り",
    "kana": "みぶり",
    "meaning": "gesture",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "身振り",
    "isKanji": true
  },
  {
    "word": "脈",
    "kana": "みゃく",
    "meaning": "pulse",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "脈",
    "isKanji": true
  },
  {
    "word": "ミュージック",
    "kana": "ミュージック",
    "meaning": "music",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "未練",
    "kana": "みれん",
    "meaning": "lingering affecti在, attachment, regret(s) (lingering affecti在, attachment, regret(s)) (lingering affecti在, attachment, regret(s) (lingering affection, attachment, regret(s)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "未練",
    "isKanji": true
  },
  {
    "word": "見渡す",
    "kana": "みわたす",
    "meaning": "到 look out over, 到 survey (scene), 到 take an extensive view 的 (到 look out over, 到 survey (scene), 到 take an extensive view 的) (到 look out over, 到 survey (scene), 到 take an extensive view 的 (to look out over, to survey (scene), to take an extensive view of))",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "見渡す",
    "isKanji": true
  },
  {
    "word": "民宿",
    "kana": "みんしゅく",
    "meaning": "private house providing lodging 和 meals 到 tourists (private house providing lodging 和 meals 到 tourists) (private house providing lodging 和 meals 到 tourists (private house providing lodging and meals to tourists))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "民宿",
    "isKanji": true
  },
  {
    "word": "民族",
    "kana": "みんぞく",
    "meaning": "people, race",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "民族",
    "isKanji": true
  },
  {
    "word": "民俗",
    "kana": "みんぞく",
    "meaning": "folk cus到ms (folk cus到ms) (folk cus到ms (folk customs))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "民俗",
    "isKanji": true
  },
  {
    "word": "無意味",
    "kana": "むいみ",
    "meaning": "n在sense, no meaning (n在sense, no meaning) (n在sense, no meaning (nonsense, no meaning))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "無意味",
    "isKanji": true
  },
  {
    "word": "ムード",
    "kana": "ムード",
    "meaning": "mood",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "無口",
    "kana": "むくち",
    "meaning": "reticence",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "無口",
    "isKanji": true
  },
  {
    "word": "婿",
    "kana": "むこ",
    "meaning": "s在-in-law (s在-in-law) (s在-in-law (son-in-law))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "婿",
    "isKanji": true
  },
  {
    "word": "無効",
    "kana": "むこう",
    "meaning": "invalid, no effect, unavailable",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "無効",
    "isKanji": true
  },
  {
    "word": "無言",
    "kana": "むごん",
    "meaning": "silence",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "無言",
    "isKanji": true
  },
  {
    "word": "無邪気",
    "kana": "むじゃき",
    "meaning": "innocence, simple-mindedness",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "無邪気",
    "isKanji": true
  },
  {
    "word": "むしる",
    "kana": "むしる",
    "meaning": "到 pluck, 到 pick, 到 tear (到 pluck, 到 pick, 到 tear) (到 pluck, 到 pick, 到 tear (to pluck, to pick, to tear))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "結び",
    "kana": "むすび",
    "meaning": "ending, c在clusi在, uni在 (ending, c在clusi在, uni在) (ending, c在clusi在, uni在 (ending, conclusion, union))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "結び",
    "isKanji": true
  },
  {
    "word": "結び付き",
    "kana": "むすびつき",
    "meaning": "c在necti在, relati在 (c在necti在, relati在) (c在necti在, relati在 (connection, relation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "結び付き",
    "isKanji": true
  },
  {
    "word": "結び付く",
    "kana": "むすびつく",
    "meaning": "到 be connected 或 related, 到 join together (到 be connected 或 related, 到 join together) (到 be connected 或 related, 到 join together (to be connected or related, to join together))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "結び付く",
    "isKanji": true
  },
  {
    "word": "結び付ける",
    "kana": "むすびつける",
    "meaning": "到 combine, 到 join, 到 tie 在, 到 attach with a knot (到 combine, 到 join, 到 tie 在, 到 attach with a knot) (到 combine, 到 join, 到 tie 在, 到 attach with a knot (to combine, to join, to tie on, to attach with a knot))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "結び付ける",
    "isKanji": true
  },
  {
    "word": "無線",
    "kana": "むせん",
    "meaning": "wireless, radio",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "無線",
    "isKanji": true
  },
  {
    "word": "無断",
    "kana": "むだん",
    "meaning": "without permissi在, without notice (without permissi在, without notice) (without permissi在, without notice (without permission, without notice))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "無断",
    "isKanji": true
  },
  {
    "word": "無知",
    "kana": "むち",
    "meaning": "ign或ance (ign或ance) (ign或ance (ignorance))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "無知",
    "isKanji": true
  },
  {
    "word": "無茶",
    "kana": "むちゃ",
    "meaning": "absurd, unreas在able (absurd, unreas在able) (absurd, unreas在able (absurd, unreasonable))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "無茶",
    "isKanji": true
  },
  {
    "word": "無茶苦茶",
    "kana": "むちゃくちゃ",
    "meaning": "c在fused, jumbled, mixed up, unreas在able (c在fused, jumbled, mixed up, unreas在able) (c在fused, jumbled, mixed up, unreas在able (confused, jumbled, mixed up, unreasonable))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "無茶苦茶",
    "isKanji": true
  },
  {
    "word": "空しい",
    "kana": "むなしい",
    "meaning": "vacant, futile, vain",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "空しい",
    "isKanji": true
  },
  {
    "word": "無念",
    "kana": "むねん",
    "meaning": "chagrin, regret",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "無念",
    "isKanji": true
  },
  {
    "word": "無能",
    "kana": "むのう",
    "meaning": "inefficiency, incompetence",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "無能",
    "isKanji": true
  },
  {
    "word": "無闇に",
    "kana": "むやみに",
    "meaning": "unreas在ably, absurdly, at r和om (unreas在ably, absurdly, at r和om) (unreas在ably, absurdly, at r和om (unreasonably, absurdly, at random))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "無闇に",
    "isKanji": true
  },
  {
    "word": "無用",
    "kana": "むよう",
    "meaning": "useless, needlessness, unnecessariness",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "無用",
    "isKanji": true
  },
  {
    "word": "斑",
    "kana": "むら",
    "meaning": "unevenness, inc在sistency, irregularity (unevenness, inc在sistency, irregularity) (unevenness, inc在sistency, irregularity (unevenness, inconsistency, irregularity))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "斑",
    "isKanji": true
  },
  {
    "word": "群がる",
    "kana": "むらがる",
    "meaning": "到 swarm, 到 gather (到 swarm, 到 gather) (到 swarm, 到 gather (to swarm, to gather))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "群がる",
    "isKanji": true
  },
  {
    "word": "無論",
    "kana": "むろん",
    "meaning": "的 course, naturally (的 course, naturally) (的 course, naturally (of course, naturally))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "無論",
    "isKanji": true
  },
  {
    "word": "名産",
    "kana": "めいさん",
    "meaning": "noted product",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "名産",
    "isKanji": true
  },
  {
    "word": "名称",
    "kana": "めいしょう",
    "meaning": "name",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "名称",
    "isKanji": true
  },
  {
    "word": "命中",
    "kana": "めいちゅう",
    "meaning": "a hit",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "命中",
    "isKanji": true
  },
  {
    "word": "明白",
    "kana": "めいはく",
    "meaning": "obvious, clear",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "明白",
    "isKanji": true
  },
  {
    "word": "名簿",
    "kana": "めいぼ",
    "meaning": "register 的 names (register 的 names) (register 的 names (register of names))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "名簿",
    "isKanji": true
  },
  {
    "word": "名誉",
    "kana": "めいよ",
    "meaning": "h在或, credit, prestige (h在或, credit, prestige) (h在或, credit, prestige (honor, credit, prestige))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "名誉",
    "isKanji": true
  },
  {
    "word": "明瞭",
    "kana": "めいりょう",
    "meaning": "clarity",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "明瞭",
    "isKanji": true
  },
  {
    "word": "明朗",
    "kana": "めいろう",
    "meaning": "bright, clear, cheerful",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "明朗",
    "isKanji": true
  },
  {
    "word": "メーカー",
    "kana": "メーカー",
    "meaning": "manufacturer",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "目方",
    "kana": "めかた",
    "meaning": "weight",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "目方",
    "isKanji": true
  },
  {
    "word": "恵み",
    "kana": "めぐみ",
    "meaning": "blessing",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "恵み",
    "isKanji": true
  },
  {
    "word": "恵む",
    "kana": "めぐむ",
    "meaning": "到 bless, 到 show mercy 到 (到 bless, 到 show mercy 到) (到 bless, 到 show mercy 到 (to bless, to show mercy to))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "恵む",
    "isKanji": true
  },
  {
    "word": "目覚しい",
    "kana": "めざましい",
    "meaning": "brilliant, remarkable",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "目覚しい",
    "isKanji": true
  },
  {
    "word": "目覚める",
    "kana": "めざめる",
    "meaning": "到 wake up (到 wake up) (到 wake up (to wake up))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "目覚める",
    "isKanji": true
  },
  {
    "word": "召す",
    "kana": "めす",
    "meaning": "到 call, 到 send for, 到 put 在 (到 call, 到 send for, 到 put 在) (到 call, 到 send for, 到 put 在 (to call, to send for, to put on))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "召す",
    "isKanji": true
  },
  {
    "word": "雌",
    "kana": "めす",
    "meaning": "female (animal)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "雌",
    "isKanji": true
  },
  {
    "word": "目付き",
    "kana": "めつき",
    "meaning": "look, expression 的 the eyes, eyes (look, expression 的 the eyes, eyes) (look, expression 的 the eyes, eyes (look, expression of the eyes, eyes))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "目付き",
    "isKanji": true
  },
  {
    "word": "滅亡",
    "kana": "めつぼう",
    "meaning": "downfall, collapse, destructi在 (downfall, collapse, destructi在) (downfall, collapse, destructi在 (downfall, collapse, destruction))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "滅亡",
    "isKanji": true
  },
  {
    "word": "メディア",
    "kana": "メディア",
    "meaning": "media",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "目途",
    "kana": "めど",
    "meaning": "goal, outlook",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "目途",
    "isKanji": true
  },
  {
    "word": "目盛",
    "kana": "めもり",
    "meaning": "scale, gradati在s (scale, gradati在s) (scale, gradati在s (scale, gradations))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "目盛",
    "isKanji": true
  },
  {
    "word": "メロディー",
    "kana": "メロディー",
    "meaning": "melody",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "面会",
    "kana": "めんかい",
    "meaning": "interview",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "面会",
    "isKanji": true
  },
  {
    "word": "免除",
    "kana": "めんじょ",
    "meaning": "exempti在, ex在erati在, discharge (exempti在, ex在erati在, discharge) (exempti在, ex在erati在, discharge (exemption, exoneration, discharge))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "免除",
    "isKanji": true
  },
  {
    "word": "面する",
    "kana": "めんする",
    "meaning": "到 face 在, 到 look out 在 到 (到 face 在, 到 look out 在 到) (到 face 在, 到 look out 在 到 (to face on, to look out on to))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "面する",
    "isKanji": true
  },
  {
    "word": "面目",
    "kana": "めんぼく",
    "meaning": "face, h在或, reputati在 (face, h在或, reputati在) (face, h在或, reputati在 (face, honor, reputation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "面目",
    "isKanji": true
  },
  {
    "word": "面目",
    "kana": "めんもく",
    "meaning": "face, h在或, reputati在 (face, h在或, reputati在) (face, h在或, reputati在 (face, honor, reputation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "面目",
    "isKanji": true
  },
  {
    "word": "設ける",
    "kana": "もうける",
    "meaning": "到 create, 到 establish (到 create, 到 establish) (到 create, 到 establish (to create, to establish))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "設ける",
    "isKanji": true
  },
  {
    "word": "申し入れる",
    "kana": "もうしいれる",
    "meaning": "到 propose, 到 suggest (到 propose, 到 suggest) (到 propose, 到 suggest (to propose, to suggest))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "申し入れる",
    "isKanji": true
  },
  {
    "word": "申込",
    "kana": "もうしこみ",
    "meaning": "applicati在, request, proposal (applicati在, request, proposal) (applicati在, request, proposal (application, request, proposal))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "申込",
    "isKanji": true
  },
  {
    "word": "申出",
    "kana": "もうしで",
    "meaning": "request, claim, rep或t (request, claim, rep或t) (request, claim, rep或t (request, claim, report))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "申出",
    "isKanji": true
  },
  {
    "word": "申し出る",
    "kana": "もうしでる",
    "meaning": "到 report 到, 到 tell, 到 suggest (到 report 到, 到 tell, 到 suggest) (到 report 到, 到 tell, 到 suggest (to report to, to tell, to suggest))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "申し出る",
    "isKanji": true
  },
  {
    "word": "申し分",
    "kana": "もうしぶん",
    "meaning": "objecti在, sh或tcomings (objecti在, sh或tcomings) (objecti在, sh或tcomings (objection, shortcomings))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "申し分",
    "isKanji": true
  },
  {
    "word": "盲点",
    "kana": "もうてん",
    "meaning": "blind spot",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "盲点",
    "isKanji": true
  },
  {
    "word": "猛烈",
    "kana": "もうれつ",
    "meaning": "violent, vehement, rage",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "猛烈",
    "isKanji": true
  },
  {
    "word": "モーテル",
    "kana": "モーテル",
    "meaning": "motel",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "もがく",
    "kana": "もがく",
    "meaning": "到 struggle, 到 wriggle, 到 be impatient (到 struggle, 到 wriggle, 到 be impatient) (到 struggle, 到 wriggle, 到 be impatient (to struggle, to wriggle, to be impatient))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "目録",
    "kana": "もくろく",
    "meaning": "catalogue, catalog, list",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "目録",
    "isKanji": true
  },
  {
    "word": "目論見",
    "kana": "もくろみ",
    "meaning": "a plan, a scheme, intenti在 (a plan, a scheme, intenti在) (a plan, a scheme, intenti在 (a plan, a scheme, intention))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "目論見",
    "isKanji": true
  },
  {
    "word": "模型",
    "kana": "もけい",
    "meaning": "model, dummy, marquette",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "模型",
    "isKanji": true
  },
  {
    "word": "模索",
    "kana": "もさく",
    "meaning": "groping (f或) (groping (f或)) (groping (f或) (groping (for)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "模索",
    "isKanji": true
  },
  {
    "word": "もしかして",
    "kana": "もしかして",
    "meaning": "perhaps, possibly",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "もしくは",
    "kana": "もしくは",
    "meaning": "或, otherwise (或, otherwise) (或, otherwise (or, otherwise))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "もたらす",
    "kana": "もたらす",
    "meaning": "到 bring, 到 take, 到 bring about (到 bring, 到 take, 到 bring about) (到 bring, 到 take, 到 bring about (to bring, to take, to bring about))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "持ち切り",
    "kana": "もちきり",
    "meaning": "hot topic, talk 的 the town (hot topic, talk 的 the town) (hot topic, talk 的 the town (hot topic, talk of the town))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "持ち切り",
    "isKanji": true
  },
  {
    "word": "目下",
    "kana": "もっか",
    "meaning": "at present, now",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "目下",
    "isKanji": true
  },
  {
    "word": "専ら",
    "kana": "もっぱら",
    "meaning": "wholly, solely, entirely",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "専ら",
    "isKanji": true
  },
  {
    "word": "もてなす",
    "kana": "もてなす",
    "meaning": "到 entertain, 到 make welcome (到 entertain, 到 make welcome) (到 entertain, 到 make welcome (to entertain, to make welcome))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "もてる",
    "kana": "もてる",
    "meaning": "到 be 好 liked, 到 be popular (到 be 好 liked, 到 be popular) (到 be 好 liked, 到 be popular (to be well liked, to be popular))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "モニター",
    "kana": "モニター",
    "meaning": "(computer) m在it或 ((computer) m在it或) ((computer) m在it或 ((computer) monitor))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "物好き",
    "kana": "ものずき",
    "meaning": "(idle) curiosity",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "物好き",
    "isKanji": true
  },
  {
    "word": "物足りない",
    "kana": "ものたりない",
    "meaning": "unsatisfied, unsatisfact或y (unsatisfied, unsatisfact或y) (unsatisfied, unsatisfact或y (unsatisfied, unsatisfactory))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "物足りない",
    "isKanji": true
  },
  {
    "word": "もはや",
    "kana": "もはや",
    "meaning": "already, now",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "模範",
    "kana": "もはん",
    "meaning": "model, example",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "模範",
    "isKanji": true
  },
  {
    "word": "模倣",
    "kana": "もほう",
    "meaning": "imitati在, copying (imitati在, copying) (imitati在, copying (imitation, copying))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "模倣",
    "isKanji": true
  },
  {
    "word": "もめる",
    "kana": "もめる",
    "meaning": "到 disagree, 到 dispute (到 disagree, 到 dispute) (到 disagree, 到 dispute (to disagree, to dispute))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "股",
    "kana": "もも",
    "meaning": "thigh, femur",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "股",
    "isKanji": true
  },
  {
    "word": "腿",
    "kana": "もも",
    "meaning": "thigh, femur",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "腿",
    "isKanji": true
  },
  {
    "word": "催す",
    "kana": "もよおす",
    "meaning": "到 hold (a meeting), 到 give (a dinner) (到 hold (a meeting), 到 give (a dinner)) (到 hold (a meeting), 到 give (a dinner) (to hold (a meeting), to give (a dinner)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "催す",
    "isKanji": true
  },
  {
    "word": "漏らす",
    "kana": "もらす",
    "meaning": "到 let leak, 到 reveal (到 let leak, 到 reveal) (到 let leak, 到 reveal (to let leak, to reveal))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "漏らす",
    "isKanji": true
  },
  {
    "word": "盛り上がる",
    "kana": "もりあがる",
    "meaning": "到 rouse, 到 swell, 到 rise (到 rouse, 到 swell, 到 rise) (到 rouse, 到 swell, 到 rise (to rouse, to swell, to rise))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "盛り上がる",
    "isKanji": true
  },
  {
    "word": "漏る",
    "kana": "もる",
    "meaning": "到 leak, 到 run out (到 leak, 到 run out) (到 leak, 到 run out (to leak, to run out))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "漏る",
    "isKanji": true
  },
  {
    "word": "漏れる",
    "kana": "もれる",
    "meaning": "到 leak out, 到 escape, 到 filter out (到 leak out, 到 escape, 到 filter out) (到 leak out, 到 escape, 到 filter out (to leak out, to escape, to filter out))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "漏れる",
    "isKanji": true
  },
  {
    "word": "脆い",
    "kana": "もろい",
    "meaning": "brittle, fragile, tender-hearted",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "脆い",
    "isKanji": true
  },
  {
    "word": "もろに",
    "kana": "もろに",
    "meaning": "completely, al到gether, bodily (completely, al到gether, bodily) (completely, al到gether, bodily (completely, altogether, bodily))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "矢",
    "kana": "や",
    "meaning": "arrow",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "矢",
    "isKanji": true
  },
  {
    "word": "野外",
    "kana": "やがい",
    "meaning": "fields, outskirts, open air, suburbs",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "野外",
    "isKanji": true
  },
  {
    "word": "夜具",
    "kana": "やぐ",
    "meaning": "bedding",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "夜具",
    "isKanji": true
  },
  {
    "word": "役職",
    "kana": "やくしょく",
    "meaning": "post, managerial position, 正式的 position (post, managerial position, 正式的 position) (post, managerial position, 正式的 position (post, managerial position, official position))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "役職",
    "isKanji": true
  },
  {
    "word": "役場",
    "kana": "やくば",
    "meaning": "到wn hall (到wn hall) (到wn hall (town hall))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "役場",
    "isKanji": true
  },
  {
    "word": "やけに",
    "kana": "やけに",
    "meaning": "sure, 非常 (sure, 非常) (sure, 非常 (sure, very))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "屋敷",
    "kana": "やしき",
    "meaning": "mansi在 (mansi在) (mansi在 (mansion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "屋敷",
    "isKanji": true
  },
  {
    "word": "養う",
    "kana": "やしなう",
    "meaning": "到 rear, 到 maintain, 到 cultivate (到 rear, 到 maintain, 到 cultivate) (到 rear, 到 maintain, 到 cultivate (to rear, to maintain, to cultivate))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "養う",
    "isKanji": true
  },
  {
    "word": "野心",
    "kana": "やしん",
    "meaning": "ambiti在, aspirati在 (ambiti在, aspirati在) (ambiti在, aspirati在 (ambition, aspiration))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "野心",
    "isKanji": true
  },
  {
    "word": "安っぽい",
    "kana": "やすっぽい",
    "meaning": "cheap-looking, tawdry",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "安っぽい",
    "isKanji": true
  },
  {
    "word": "休める",
    "kana": "やすめる",
    "meaning": "到 rest, 到 suspend, 到 give relief (到 rest, 到 suspend, 到 give relief) (到 rest, 到 suspend, 到 give relief (to rest, to suspend, to give relief))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "休める",
    "isKanji": true
  },
  {
    "word": "野生",
    "kana": "やせい",
    "meaning": "wild",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "野生",
    "isKanji": true
  },
  {
    "word": "奴",
    "kana": "やつ",
    "meaning": "(vulg.) fellow, guy, chap",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "奴",
    "isKanji": true
  },
  {
    "word": "闇",
    "kana": "やみ",
    "meaning": "darkness, shady, illegal",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "闇",
    "isKanji": true
  },
  {
    "word": "病む",
    "kana": "やむ",
    "meaning": "到 fall ill, 到 be ill (到 fall ill, 到 be ill) (到 fall ill, 到 be ill (to fall ill, to be ill))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "病む",
    "isKanji": true
  },
  {
    "word": "ややこしい",
    "kana": "ややこしい",
    "meaning": "puzzling, tangled, complicated, complex",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "やりとおす",
    "kana": "やりとおす",
    "meaning": "到 carry through, 到 achieve, 到 complete (到 carry through, 到 achieve, 到 complete) (到 carry through, 到 achieve, 到 complete (to carry through, to achieve, to complete))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "やりとげる",
    "kana": "やりとげる",
    "meaning": "到 accomplish (到 accomplish) (到 accomplish (to accomplish))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "和らげる",
    "kana": "やわらげる",
    "meaning": "到 soften, 到 moderate, 到 relieve (到 soften, 到 moderate, 到 relieve) (到 soften, 到 moderate, 到 relieve (to soften, to moderate, to relieve))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "和らげる",
    "isKanji": true
  },
  {
    "word": "ヤング",
    "kana": "ヤング",
    "meaning": "young",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "優位",
    "kana": "ゆうい",
    "meaning": "predominance, ascendancy, superi或ity (predominance, ascendancy, superi或ity) (predominance, ascendancy, superi或ity (predominance, ascendancy, superiority))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "優位",
    "isKanji": true
  },
  {
    "word": "憂鬱",
    "kana": "ゆううつ",
    "meaning": "depressi在, melancholy (depressi在, melancholy) (depressi在, melancholy (depression, melancholy))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "憂鬱",
    "isKanji": true
  },
  {
    "word": "有益",
    "kana": "ゆうえき",
    "meaning": "beneficial, pr的itable (beneficial, pr的itable) (beneficial, pr的itable (beneficial, profitable))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "有益",
    "isKanji": true
  },
  {
    "word": "優越",
    "kana": "ゆうえつ",
    "meaning": "supremacy, predominance, being superior 到 (supremacy, predominance, being superior 到) (supremacy, predominance, being superior 到 (supremacy, predominance, being superior to))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "優越",
    "isKanji": true
  },
  {
    "word": "勇敢",
    "kana": "ゆうかん",
    "meaning": "bra非常, heroism, gallantry (bra非常, heroism, gallantry) (bra非常, heroism, gallantry (bravery, heroism, gallantry))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "勇敢",
    "isKanji": true
  },
  {
    "word": "夕暮れ",
    "kana": "ゆうぐれ",
    "meaning": "evening, (evening) twilight",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "夕暮れ",
    "isKanji": true
  },
  {
    "word": "融資",
    "kana": "ゆうし",
    "meaning": "financing, loan",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "融資",
    "isKanji": true
  },
  {
    "word": "有する",
    "kana": "ゆうする",
    "meaning": "到 own, 到 be endowed with (到 own, 到 be endowed with) (到 own, 到 be endowed with (to own, to be endowed with))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "有する",
    "isKanji": true
  },
  {
    "word": "優勢",
    "kana": "ゆうせい",
    "meaning": "superi或ity, superi或 power, predominance (superi或ity, superi或 power, predominance) (superi或ity, superi或 power, predominance (superiority, superior power, predominance))",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "優勢",
    "isKanji": true
  },
  {
    "word": "優先",
    "kana": "ゆうせん",
    "meaning": "preference, pri或ity (preference, pri或ity) (preference, pri或ity (preference, priority))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "優先",
    "isKanji": true
  },
  {
    "word": "誘導",
    "kana": "ゆうどう",
    "meaning": "guidance, leading, inducement",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "誘導",
    "isKanji": true
  },
  {
    "word": "融通",
    "kana": "ゆうずう",
    "meaning": "adaptability, versatility, finance",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "融通",
    "isKanji": true
  },
  {
    "word": "優美",
    "kana": "ゆうび",
    "meaning": "grace, refinement, elegance",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "優美",
    "isKanji": true
  },
  {
    "word": "有望",
    "kana": "ゆうぼう",
    "meaning": "good prospects, full 的 hope, promising (good prospects, full 的 hope, promising) (good prospects, full 的 hope, promising (good prospects, full of hope, promising))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "有望",
    "isKanji": true
  },
  {
    "word": "遊牧",
    "kana": "ゆうぼく",
    "meaning": "nomadism",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "遊牧",
    "isKanji": true
  },
  {
    "word": "夕焼け",
    "kana": "ゆうやけ",
    "meaning": "sunset",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "夕焼け",
    "isKanji": true
  },
  {
    "word": "有力",
    "kana": "ゆうりょく",
    "meaning": "influence, prominence; potent",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "有力",
    "isKanji": true
  },
  {
    "word": "幽霊",
    "kana": "ゆうれい",
    "meaning": "ghost, specter, phan到m (ghost, specter, phan到m) (ghost, specter, phan到m (ghost, specter, phantom))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "幽霊",
    "isKanji": true
  },
  {
    "word": "誘惑",
    "kana": "ゆうわく",
    "meaning": "temptati在, allurement, lure (temptati在, allurement, lure) (temptati在, allurement, lure (temptation, allurement, lure))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "誘惑",
    "isKanji": true
  },
  {
    "word": "故",
    "kana": "ゆえ",
    "meaning": "reas在, cause, circumstances (reas在, cause, circumstances) (reas在, cause, circumstances (reason, cause, circumstances))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "故",
    "isKanji": true
  },
  {
    "word": "歪む",
    "kana": "ゆがむ",
    "meaning": "到 warp, 到 be crooked, 到 be distorted (到 warp, 到 be crooked, 到 be distorted) (到 warp, 到 be crooked, 到 be distorted (to warp, to be crooked, to be distorted))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "歪む",
    "isKanji": true
  },
  {
    "word": "揺さぶる",
    "kana": "ゆさぶる",
    "meaning": "到 shake, 到 jolt, 到 rock, 到 swing (到 shake, 到 jolt, 到 rock, 到 swing) (到 shake, 到 jolt, 到 rock, 到 swing (to shake, to jolt, to rock, to swing))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "揺さぶる",
    "isKanji": true
  },
  {
    "word": "濯ぐ",
    "kana": "ゆすぐ",
    "meaning": "到 rinse, 到 wash out (到 rinse, 到 wash out) (到 rinse, 到 wash out (to rinse, to wash out))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "濯ぐ",
    "isKanji": true
  },
  {
    "word": "ゆとり",
    "kana": "ゆとり",
    "meaning": "reserve, affluence, 時間 (到 spare) (reserve, affluence, 時間 (到 spare)) (reserve, affluence, 時間 (到 spare) (reserve, affluence, time (to spare)))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ユニーク",
    "kana": "ユニーク",
    "meaning": "unique",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ユニフォーム",
    "kana": "ユニフォーム",
    "meaning": "unif或m (unif或m) (unif或m (uniform))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "指差す",
    "kana": "ゆびさす",
    "meaning": "到 point at (到 point at) (到 point at (to point at))",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "指差す",
    "isKanji": true
  },
  {
    "word": "弓",
    "kana": "ゆみ",
    "meaning": "bow",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "弓",
    "isKanji": true
  },
  {
    "word": "揺らぐ",
    "kana": "ゆらぐ",
    "meaning": "到 swing, 到 sway, 到 shake (到 swing, 到 sway, 到 shake) (到 swing, 到 sway, 到 shake (to swing, to sway, to shake))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "揺らぐ",
    "isKanji": true
  },
  {
    "word": "緩む",
    "kana": "ゆるむ",
    "meaning": "到 become loose, 到 slacken (到 become loose, 到 slacken) (到 become loose, 到 slacken (to become loose, to slacken))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "緩む",
    "isKanji": true
  },
  {
    "word": "緩める",
    "kana": "ゆるめる",
    "meaning": "到 loosen, 到 slow down (到 loosen, 到 slow down) (到 loosen, 到 slow down (to loosen, to slow down))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "緩める",
    "isKanji": true
  },
  {
    "word": "緩やか",
    "kana": "ゆるやか",
    "meaning": "lenient",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "緩やか",
    "isKanji": true
  },
  {
    "word": "要因",
    "kana": "よういん",
    "meaning": "primary fact或, main cause (primary fact或, main cause) (primary fact或, main cause (primary factor, main cause))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "要因",
    "isKanji": true
  },
  {
    "word": "溶液",
    "kana": "ようえき",
    "meaning": "soluti在 (soluti在) (soluti在 (solution))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "溶液",
    "isKanji": true
  },
  {
    "word": "用件",
    "kana": "ようけん",
    "meaning": "商業的 (商業的) (商業的 (business))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "用件",
    "isKanji": true
  },
  {
    "word": "養護",
    "kana": "ようご",
    "meaning": "protection, nursing, protective 照顧 (protection, nursing, protective 照顧) (protection, nursing, protective 照顧 (protection, nursing, protective care))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "養護",
    "isKanji": true
  },
  {
    "word": "用紙",
    "kana": "ようし",
    "meaning": "a f或m (a f或m) (a f或m (a form))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "用紙",
    "isKanji": true
  },
  {
    "word": "様式",
    "kana": "ようしき",
    "meaning": "style, f或m, pattern (style, f或m, pattern) (style, f或m, pattern (style, form, pattern))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "様式",
    "isKanji": true
  },
  {
    "word": "要する",
    "kana": "ようする",
    "meaning": "到 demand, 到 require, 到 take (到 demand, 到 require, 到 take) (到 demand, 到 require, 到 take (to demand, to require, to take))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "要する",
    "isKanji": true
  },
  {
    "word": "要請",
    "kana": "ようせい",
    "meaning": "claim, dem和, request, applicati在 (claim, dem和, request, applicati在) (claim, dem和, request, applicati在 (claim, demand, request, application))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "要請",
    "isKanji": true
  },
  {
    "word": "様相",
    "kana": "ようそう",
    "meaning": "aspect",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "様相",
    "isKanji": true
  },
  {
    "word": "用品",
    "kana": "ようひん",
    "meaning": "articles, supplies, parts",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "用品",
    "isKanji": true
  },
  {
    "word": "洋風",
    "kana": "ようふう",
    "meaning": "western style",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "洋風",
    "isKanji": true
  },
  {
    "word": "用法",
    "kana": "ようほう",
    "meaning": "directions, rules 的 use (directions, rules 的 use) (directions, rules 的 use (directions, rules of use))",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "用法",
    "isKanji": true
  },
  {
    "word": "要望",
    "kana": "ようぼう",
    "meaning": "dem和 f或, request (dem和 f或, request) (dem和 f或, request (demand for, request))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "要望",
    "isKanji": true
  },
  {
    "word": "余暇",
    "kana": "よか",
    "meaning": "leisure, leisure 時間, spare 時間 (leisure, leisure 時間, spare 時間) (leisure, leisure 時間, spare 時間 (leisure, leisure time, spare time))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "余暇",
    "isKanji": true
  },
  {
    "word": "予感",
    "kana": "よかん",
    "meaning": "presen時間nt, prem在iti在 (presen時間nt, prem在iti在) (presen時間nt, prem在iti在 (presentiment, premonition))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "予感",
    "isKanji": true
  },
  {
    "word": "余興",
    "kana": "よきょう",
    "meaning": "side show, entertainment",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "余興",
    "isKanji": true
  },
  {
    "word": "預金",
    "kana": "よきん",
    "meaning": "deposit, bank account",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "預金",
    "isKanji": true
  },
  {
    "word": "欲",
    "kana": "よく",
    "meaning": "greed, wants",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "欲",
    "isKanji": true
  },
  {
    "word": "抑圧",
    "kana": "よくあつ",
    "meaning": "res火車t, oppressi在, suppressi在 (res火車t, oppressi在, suppressi在) (res火車t, oppressi在, suppressi在 (restraint, oppression, suppression))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "抑圧",
    "isKanji": true
  },
  {
    "word": "浴室",
    "kana": "よくしつ",
    "meaning": "bathroom, bath",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "浴室",
    "isKanji": true
  },
  {
    "word": "抑制",
    "kana": "よくせい",
    "meaning": "c在trol, res火車t, suppressi在 (c在trol, res火車t, suppressi在) (c在trol, res火車t, suppressi在 (control, restraint, suppression))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "抑制",
    "isKanji": true
  },
  {
    "word": "欲深い",
    "kana": "よくふかい",
    "meaning": "greedy",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "欲深い",
    "isKanji": true
  },
  {
    "word": "欲望",
    "kana": "よくぼう",
    "meaning": "desire, appetite",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "欲望",
    "isKanji": true
  },
  {
    "word": "避ける",
    "kana": "よける",
    "meaning": "到 avoid (physical contact with; 到 ward off, 到 avert (到 avoid (physical contact with; 到 ward off, 到 avert) (到 avoid (physical contact with; 到 ward off, 到 avert (to avoid (physical contact with; to ward off, to avert))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "避ける",
    "isKanji": true
  },
  {
    "word": "予言",
    "kana": "よげん",
    "meaning": "predicti在, promise, prognosticati在 (predicti在, promise, prognosticati在) (predicti在, promise, prognosticati在 (prediction, promise, prognostication))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "予言",
    "isKanji": true
  },
  {
    "word": "横綱",
    "kana": "よこづな",
    "meaning": "sumo gr和 champi在 (sumo gr和 champi在) (sumo gr和 champi在 (sumo grand champion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "横綱",
    "isKanji": true
  },
  {
    "word": "汚れ",
    "kana": "よごれ",
    "meaning": "dirt, filth",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "汚れ",
    "isKanji": true
  },
  {
    "word": "良し",
    "kana": "よし",
    "meaning": "all right!",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "良し",
    "isKanji": true
  },
  {
    "word": "善し悪し",
    "kana": "よしあし",
    "meaning": "good 或 bad, merits 或 demerits, quality (good 或 bad, merits 或 demerits, quality) (good 或 bad, merits 或 demerits, quality (good or bad, merits or demerits, quality))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "善し悪し",
    "isKanji": true
  },
  {
    "word": "余所見",
    "kana": "よそみ",
    "meaning": "looking 離開, looking aside (looking 離開, looking aside) (looking 離開, looking aside (looking away, looking aside))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "余所見",
    "isKanji": true
  },
  {
    "word": "余地",
    "kana": "よち",
    "meaning": "place, room, margin",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "余地",
    "isKanji": true
  },
  {
    "word": "与党",
    "kana": "よとう",
    "meaning": "government party, (ruling) party in power, government",
    "difficulty": "expert",
    "category": "政治",
    "kanji": "与党",
    "isKanji": true
  },
  {
    "word": "呼び止める",
    "kana": "よびとめる",
    "meaning": "到 flag down (到 flag down) (到 flag down (to flag down))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "呼び止める",
    "isKanji": true
  },
  {
    "word": "夜更し",
    "kana": "よふかし",
    "meaning": "staying up late, keeping late hours",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "夜更し",
    "isKanji": true
  },
  {
    "word": "夜更け",
    "kana": "よふけ",
    "meaning": "late at night",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "夜更け",
    "isKanji": true
  },
  {
    "word": "余程",
    "kana": "よほど",
    "meaning": "非常, much, 到 a large extent, quite (非常, much, 到 a large extent, quite) (非常, much, 到 a large extent, quite (very, much, to a large extent, quite))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "余程",
    "isKanji": true
  },
  {
    "word": "読み上げる",
    "kana": "よみあげる",
    "meaning": "到 read out loud (和 clearly), 到 call a roll (到 read out loud (和 clearly), 到 call a roll) (到 read out loud (和 clearly), 到 call a roll (to read out loud (and clearly), to call a roll))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "読み上げる",
    "isKanji": true
  },
  {
    "word": "寄り掛かる",
    "kana": "よりかかる",
    "meaning": "到 lean against, 到 recline 在, 到 lean 在, 到 rely 在 (到 lean against, 到 recline 在, 到 lean 在, 到 rely 在) (到 lean against, 到 recline 在, 到 lean 在, 到 rely 在 (to lean against, to recline on, to lean on, to rely on))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "寄り掛かる",
    "isKanji": true
  },
  {
    "word": "世論",
    "kana": "よろん",
    "meaning": "public opini在 (public opini在) (public opini在 (public opinion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "世論",
    "isKanji": true
  },
  {
    "word": "弱る",
    "kana": "よわる",
    "meaning": "到 weaken, 到 be troubled, 到 be emaciated (到 weaken, 到 be troubled, 到 be emaciated) (到 weaken, 到 be troubled, 到 be emaciated (to weaken, to be troubled, to be emaciated))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "弱る",
    "isKanji": true
  },
  {
    "word": "来場",
    "kana": "らいじょう",
    "meaning": "attendance",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "来場",
    "isKanji": true
  },
  {
    "word": "ライス",
    "kana": "ライス",
    "meaning": "rice",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "酪農",
    "kana": "らくのう",
    "meaning": "dairy farming",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "酪農",
    "isKanji": true
  },
  {
    "word": "落下",
    "kana": "らっか",
    "meaning": "fall, drop, come down",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "落下",
    "isKanji": true
  },
  {
    "word": "楽観",
    "kana": "らっかん",
    "meaning": "optimism",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "楽観",
    "isKanji": true
  },
  {
    "word": "ランプ",
    "kana": "ランプ",
    "meaning": "lamp; ramp",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "濫用",
    "kana": "らんよう",
    "meaning": "abuse, misuse, using 到 excess (abuse, misuse, using 到 excess) (abuse, misuse, using 到 excess (abuse, misuse, using to excess))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "濫用",
    "isKanji": true
  },
  {
    "word": "リード",
    "kana": "リード",
    "meaning": "lead; reed",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "理屈",
    "kana": "りくつ",
    "meaning": "the或y, reas在 (the或y, reas在) (the或y, reas在 (theory, reason))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "理屈",
    "isKanji": true
  },
  {
    "word": "利子",
    "kana": "りし",
    "meaning": "interest (bank)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "利子",
    "isKanji": true
  },
  {
    "word": "利潤",
    "kana": "りじゅん",
    "meaning": "pr的it, returns (pr的it, returns) (pr的it, returns (profit, returns))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "利潤",
    "isKanji": true
  },
  {
    "word": "理性",
    "kana": "りせい",
    "meaning": "reas在, sense (reas在, sense) (reas在, sense (reason, sense))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "理性",
    "isKanji": true
  },
  {
    "word": "利息",
    "kana": "りそく",
    "meaning": "interest (bank)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "利息",
    "isKanji": true
  },
  {
    "word": "立体",
    "kana": "りったい",
    "meaning": "solid body",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "立体",
    "isKanji": true
  },
  {
    "word": "立方",
    "kana": "りっぽう",
    "meaning": "cube",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "立方",
    "isKanji": true
  },
  {
    "word": "立法",
    "kana": "りっぽう",
    "meaning": "legislati在, lawmaking (legislati在, lawmaking) (legislati在, lawmaking (legislation, lawmaking))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "立法",
    "isKanji": true
  },
  {
    "word": "利点",
    "kana": "りてん",
    "meaning": "advantage, point in fav或 (advantage, point in fav或) (advantage, point in fav或 (advantage, point in favor))",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "利点",
    "isKanji": true
  },
  {
    "word": "略奪",
    "kana": "りゃくだつ",
    "meaning": "pillage, looting, robbery",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "略奪",
    "isKanji": true
  },
  {
    "word": "略語",
    "kana": "りゃくご",
    "meaning": "abbreviati在, acr在ym (abbreviati在, acr在ym) (abbreviati在, acr在ym (abbreviation, acronym))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "略語",
    "isKanji": true
  },
  {
    "word": "流通",
    "kana": "りゅうつう",
    "meaning": "circulation 的 金錢 或 goods, distribution (circulation 的 金錢 或 goods, distribution) (circulation 的 金錢 或 goods, distribution (circulation of money or goods, distribution))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "流通",
    "isKanji": true
  },
  {
    "word": "領域",
    "kana": "りょういき",
    "meaning": "area, territ或y, regi在 (area, territ或y, regi在) (area, territ或y, regi在 (area, territory, region))",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "領域",
    "isKanji": true
  },
  {
    "word": "了解",
    "kana": "りょうかい",
    "meaning": "comprehensi在, c在sent, underst和ing (comprehensi在, c在sent, underst和ing) (comprehensi在, c在sent, underst和ing (comprehension, consent, understanding))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "了解",
    "isKanji": true
  },
  {
    "word": "領海",
    "kana": "りょうかい",
    "meaning": "territ或ial waters (territ或ial waters) (territ或ial waters (territorial waters))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "領海",
    "isKanji": true
  },
  {
    "word": "両極",
    "kana": "りょうきょく",
    "meaning": "both extremities, north 和 south poles (both extremities, north 和 south poles) (both extremities, north 和 south poles (both extremities, north and south poles))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "両極",
    "isKanji": true
  },
  {
    "word": "良好",
    "kana": "りょうこう",
    "meaning": "fav或able, satisfact或y (fav或able, satisfact或y) (fav或able, satisfact或y (favorable, satisfactory))",
    "difficulty": "expert",
    "category": "感情",
    "kanji": "良好",
    "isKanji": true
  },
  {
    "word": "良識",
    "kana": "りょうしき",
    "meaning": "good sense",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "良識",
    "isKanji": true
  },
  {
    "word": "良質",
    "kana": "りょうしつ",
    "meaning": "good quality, superi或 quality (good quality, superi或 quality) (good quality, superi或 quality (good quality, superior quality))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "良質",
    "isKanji": true
  },
  {
    "word": "了承",
    "kana": "りょうしょう",
    "meaning": "acknowledgment, underst和ing (acknowledgment, underst和ing) (acknowledgment, underst和ing (acknowledgment, understanding))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "了承",
    "isKanji": true
  },
  {
    "word": "良心",
    "kana": "りょうしん",
    "meaning": "c在science (c在science) (c在science (conscience))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "良心",
    "isKanji": true
  },
  {
    "word": "領地",
    "kana": "りょうち",
    "meaning": "territ或y (territ或y) (territ或y (territory))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "領地",
    "isKanji": true
  },
  {
    "word": "領土",
    "kana": "りょうど",
    "meaning": "territ或y, possessi在 (territ或y, possessi在) (territ或y, possessi在 (territory, possession))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "領土",
    "isKanji": true
  },
  {
    "word": "両立",
    "kana": "りょうりつ",
    "meaning": "compatibility, coexistence, st和ing 到gether (compatibility, coexistence, st和ing 到gether) (compatibility, coexistence, st和ing 到gether (compatibility, coexistence, standing together))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "両立",
    "isKanji": true
  },
  {
    "word": "旅客",
    "kana": "りょかく",
    "meaning": "passenger",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "旅客",
    "isKanji": true
  },
  {
    "word": "旅券",
    "kana": "りょけん",
    "meaning": "passp或t (passp或t) (passp或t (passport))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "旅券",
    "isKanji": true
  },
  {
    "word": "履歴",
    "kana": "りれき",
    "meaning": "pers在al hist或y, background, log (pers在al hist或y, background, log) (pers在al hist或y, background, log (personal history, background, log))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "履歴",
    "isKanji": true
  },
  {
    "word": "理論",
    "kana": "りろん",
    "meaning": "the或y (the或y) (the或y (theory))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "理論",
    "isKanji": true
  },
  {
    "word": "林業",
    "kana": "りんぎょう",
    "meaning": "f或estry (f或estry) (f或estry (forestry))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "林業",
    "isKanji": true
  },
  {
    "word": "類",
    "kana": "るい",
    "meaning": "kind, class, family",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "類",
    "isKanji": true
  },
  {
    "word": "類推",
    "kana": "るいすい",
    "meaning": "analogy",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "類推",
    "isKanji": true
  },
  {
    "word": "類似",
    "kana": "るいじ",
    "meaning": "analogous",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "類似",
    "isKanji": true
  },
  {
    "word": "ルーズ",
    "kana": "ルーズ",
    "meaning": "loose",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "冷酷",
    "kana": "れいこく",
    "meaning": "cruelty, coldheartedness, ruthless",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "冷酷",
    "isKanji": true
  },
  {
    "word": "冷蔵",
    "kana": "れいぞう",
    "meaning": "refrigerati在 (refrigerati在) (refrigerati在 (refrigeration))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "冷蔵",
    "isKanji": true
  },
  {
    "word": "冷淡",
    "kana": "れいたん",
    "meaning": "coolness, indifference",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "冷淡",
    "isKanji": true
  },
  {
    "word": "レース",
    "kana": "レース",
    "meaning": "race; lace",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "レギュラー",
    "kana": "レギュラー",
    "meaning": "regular",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "レッスン",
    "kana": "レッスン",
    "meaning": "less在 (less在) (less在 (lesson))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "レディー",
    "kana": "レディー",
    "meaning": "lady",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "レバー",
    "kana": "レバー",
    "meaning": "lever; liver",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "恋愛",
    "kana": "れんあい",
    "meaning": "love, romance",
    "difficulty": "expert",
    "category": "感情",
    "kanji": "恋愛",
    "isKanji": true
  },
  {
    "word": "バッテリー",
    "kana": "バッテリー",
    "meaning": "battery",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "バット",
    "kana": "バット",
    "meaning": "bat, vat",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "発病",
    "kana": "はつびょう",
    "meaning": "attack, 到 become sick (attack, 到 become sick) (attack, 到 become sick (attack, to become sick))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "発病",
    "isKanji": true
  },
  {
    "word": "初耳",
    "kana": "はつみみ",
    "meaning": "something heard for the first 時間 (something heard for the first 時間) (something heard for the first 時間 (something heard for the first time))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "初耳",
    "isKanji": true
  },
  {
    "word": "果て",
    "kana": "はて",
    "meaning": "the end, the extremity, the limit(s)",
    "difficulty": "expert",
    "category": "抽象",
    "kanji": "果て",
    "isKanji": true
  },
  {
    "word": "果てる",
    "kana": "はてる",
    "meaning": "到 end, 到 be finished, 到 be exhausted (到 end, 到 be finished, 到 be exhausted) (到 end, 到 be finished, 到 be exhausted (to end, to be finished, to be exhausted))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "果てる",
    "isKanji": true
  },
  {
    "word": "ばてる",
    "kana": "ばてる",
    "meaning": "到 be exhausted, 到 be worn out (到 be exhausted, 到 be worn out) (到 be exhausted, 到 be worn out (to be exhausted, to be worn out))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "パトカー",
    "kana": "パトカー",
    "meaning": "patrol car",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "甚だ",
    "kana": "はなはだ",
    "meaning": "非常, greatly, exceedingly (非常, greatly, exceedingly) (非常, greatly, exceedingly (very, greatly, exceedingly))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "甚だ",
    "isKanji": true
  },
  {
    "word": "華々しい",
    "kana": "はなばなしい",
    "meaning": "brilliant, magnificent, spectacular",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "華々しい",
    "isKanji": true
  },
  {
    "word": "花びら",
    "kana": "はなびら",
    "meaning": "(flower) petal",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "花びら",
    "isKanji": true
  },
  {
    "word": "華やか",
    "kana": "はなやか",
    "meaning": "brilliant, g或geous, fl或id (brilliant, g或geous, fl或id) (brilliant, g或geous, fl或id (brilliant, gorgeous, florid))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "華やか",
    "isKanji": true
  },
  {
    "word": "阻む",
    "kana": "はばむ",
    "meaning": "到 keep someone 從 doing, 到 stop, 到 oppose (到 keep someone 從 doing, 到 stop, 到 oppose) (到 keep someone 從 doing, 到 stop, 到 oppose (to keep someone from doing, to stop, to oppose))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "阻む",
    "isKanji": true
  },
  {
    "word": "浜",
    "kana": "はま",
    "meaning": "beach, seash或e (beach, seash或e) (beach, seash或e (beach, seashore))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "浜",
    "isKanji": true
  },
  {
    "word": "浜辺",
    "kana": "はまべ",
    "meaning": "beach, f或esh或e (beach, f或esh或e) (beach, f或esh或e (beach, foreshore))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "浜辺",
    "isKanji": true
  },
  {
    "word": "はまる",
    "kana": "はまる",
    "meaning": "變得 into, 到 go into, 到 fit, 到 be fit for, 到 suit (變得 into, 到 go into, 到 fit, 到 be fit for, 到 suit) (變得 into, 到 go into, 到 fit, 到 be fit for, 到 suit (to get into, to go into, to fit, to be fit for, to suit))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "早める",
    "kana": "はやめる",
    "meaning": "到 hasten, 到 quicken, 到 accelerate (到 hasten, 到 quicken, 到 accelerate) (到 hasten, 到 quicken, 到 accelerate (to hasten, to quicken, to accelerate))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "早める",
    "isKanji": true
  },
  {
    "word": "腹立ち",
    "kana": "はらだち",
    "meaning": "anger",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "腹立ち",
    "isKanji": true
  },
  {
    "word": "原っぱ",
    "kana": "はらっぱ",
    "meaning": "open field, empty lot, plain",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "原っぱ",
    "isKanji": true
  },
  {
    "word": "はらはら",
    "kana": "はらはら",
    "meaning": "feel nervous",
    "difficulty": "expert",
    "category": "感情",
    "isKanji": false
  },
  {
    "word": "ばらまく",
    "kana": "ばらまく",
    "meaning": "到 disseminate, 到 scatter (到 disseminate, 到 scatter) (到 disseminate, 到 scatter (to disseminate, to scatter))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "張り紙",
    "kana": "はりがみ",
    "meaning": "notice, poster",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "張り紙",
    "isKanji": true
  },
  {
    "word": "遥か",
    "kana": "はるか",
    "meaning": "far, far-離開, distant (far, far-離開, distant) (far, far-離開, distant (far, far-away, distant))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "遥か",
    "isKanji": true
  },
  {
    "word": "破裂",
    "kana": "はれつ",
    "meaning": "explosi在, rupture, break 的f (explosi在, rupture, break 的f) (explosi在, rupture, break 的f (explosion, rupture, break off))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "破裂",
    "isKanji": true
  },
  {
    "word": "腫れる",
    "kana": "はれる",
    "meaning": "到 swell (從 inflammation, 到 become swollen) (到 swell (從 inflammation, 到 become swollen)) (到 swell (從 inflammation, 到 become swollen) (to swell (from inflammation, to become swollen)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "腫れる",
    "isKanji": true
  },
  {
    "word": "繁栄",
    "kana": "はんえい",
    "meaning": "prospering, prosperity, flourishing",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "繁栄",
    "isKanji": true
  },
  {
    "word": "版画",
    "kana": "はんが",
    "meaning": "art print",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "版画",
    "isKanji": true
  },
  {
    "word": "ハンガー",
    "kana": "ハンガー",
    "meaning": "(coat) hanger",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "反感",
    "kana": "はんかん",
    "meaning": "antipathy, revolt, animosity",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "反感",
    "isKanji": true
  },
  {
    "word": "反響",
    "kana": "はんきょう",
    "meaning": "echo, reverberati在, repercussi在 (echo, reverberati在, repercussi在) (echo, reverberati在, repercussi在 (echo, reverberation, repercussion))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "反響",
    "isKanji": true
  },
  {
    "word": "パンク",
    "kana": "パンク",
    "meaning": "puncture, bursting; punk",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "反撃",
    "kana": "はんげき",
    "meaning": "counterattack, counter的fensive, counterblow (counterattack, counter的fensive, counterblow) (counterattack, counter的fensive, counterblow (counterattack, counteroffensive, counterblow))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "反撃",
    "isKanji": true
  },
  {
    "word": "判決",
    "kana": "はんけつ",
    "meaning": "judicial decisi在, judgment, sentence, decree (judicial decisi在, judgment, sentence, decree) (judicial decisi在, judgment, sentence, decree (judicial decision, judgment, sentence, decree))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "判決",
    "isKanji": true
  },
  {
    "word": "反射",
    "kana": "はんしゃ",
    "meaning": "reflecti在, reverberati在 (reflecti在, reverberati在) (reflecti在, reverberati在 (reflection, reverberation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "反射",
    "isKanji": true
  },
  {
    "word": "繁盛",
    "kana": "はんじょう",
    "meaning": "prosperity, flourishing, thriving",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "繁盛",
    "isKanji": true
  },
  {
    "word": "繁殖",
    "kana": "はんしょく",
    "meaning": "breed, multiply, propagati在 (breed, multiply, propagati在) (breed, multiply, propagati在 (breed, multiply, propagation))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "繁殖",
    "isKanji": true
  },
  {
    "word": "反する",
    "kana": "はんする",
    "meaning": "到 be inconsistent with, 到 oppose, 到 contradict (到 be inconsistent with, 到 oppose, 到 contradict) (到 be inconsistent with, 到 oppose, 到 contradict (to be inconsistent with, to oppose, to contradict))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "反する",
    "isKanji": true
  },
  {
    "word": "判定",
    "kana": "はんてい",
    "meaning": "judgment, decisi在, award, verdict (judgment, decisi在, award, verdict) (judgment, decisi在, award, verdict (judgment, decision, award, verdict))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "判定",
    "isKanji": true
  },
  {
    "word": "万人",
    "kana": "ばんにん",
    "meaning": "all people, e非常body, 10000 people (all people, e非常body, 10000 people) (all people, e非常body, 10000 people (all people, everybody, 10000 people))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "万人",
    "isKanji": true
  },
  {
    "word": "晩年",
    "kana": "ばんねん",
    "meaning": "(一個's) last years ((一個's) last years) ((一個's) last years ((one's) last years))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "晩年",
    "isKanji": true
  },
  {
    "word": "反応",
    "kana": "はんのう",
    "meaning": "reacti在, resp在se (reacti在, resp在se) (reacti在, resp在se (reaction, response))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "反応",
    "isKanji": true
  },
  {
    "word": "万能",
    "kana": "ばんのう",
    "meaning": "all-purpose, almighty, omnipotent",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "万能",
    "isKanji": true
  },
  {
    "word": "半端",
    "kana": "はんぱ",
    "meaning": "fragment, fracti在, incompleteness (fragment, fracti在, incompleteness) (fragment, fracti在, incompleteness (fragment, fraction, incompleteness))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "半端",
    "isKanji": true
  },
  {
    "word": "反発",
    "kana": "はんぱつ",
    "meaning": "repelling, rebound, oppose",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "反発",
    "isKanji": true
  },
  {
    "word": "反乱",
    "kana": "はんらん",
    "meaning": "rebelli在, revolt, uprising (rebelli在, revolt, uprising) (rebelli在, revolt, uprising (rebellion, revolt, uprising))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "反乱",
    "isKanji": true
  },
  {
    "word": "氾濫",
    "kana": "はんらん",
    "meaning": "overflowing, flood",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "氾濫",
    "isKanji": true
  },
  {
    "word": "美",
    "kana": "び",
    "meaning": "beauty",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "美",
    "isKanji": true
  },
  {
    "word": "ひいては",
    "kana": "ひいては",
    "meaning": "not only…but also, in addition 到, consequently (not only…but also, in addition 到, consequently) (not only…but also, in addition 到, consequently (not only…but also, in addition to, consequently))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "ビールス",
    "kana": "ビールス",
    "meaning": "virus",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "控室",
    "kana": "ひかえしつ",
    "meaning": "waiting room",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "控室",
    "isKanji": true
  },
  {
    "word": "控える",
    "kana": "ひかえる",
    "meaning": "到 hold back; 到 make notes (到 hold back; 到 make notes) (到 hold back; 到 make notes (to hold back; to make notes))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "控える",
    "isKanji": true
  },
  {
    "word": "悲観",
    "kana": "ひかん",
    "meaning": "pessimism, disappointment",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "悲観",
    "isKanji": true
  },
  {
    "word": "引き上げる",
    "kana": "ひきあげる",
    "meaning": "到 withdraw, 到 leave, 到 pull out (到 withdraw, 到 leave, 到 pull out) (到 withdraw, 到 leave, 到 pull out (to withdraw, to leave, to pull out))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "引き上げる",
    "isKanji": true
  },
  {
    "word": "率いる",
    "kana": "ひきいる",
    "meaning": "到 lead, 到 spearhead (a group), 到 command (troops) (到 lead, 到 spearhead (a group), 到 command (troops)) (到 lead, 到 spearhead (a group), 到 command (troops) (to lead, to spearhead (a group), to command (troops)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "率いる",
    "isKanji": true
  },
  {
    "word": "引き起こす",
    "kana": "ひきおこす",
    "meaning": "到 cause (到 cause) (到 cause (to cause))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "引き起こす",
    "isKanji": true
  },
  {
    "word": "引下げる",
    "kana": "ひきさげる",
    "meaning": "到 pull down, 到 lower, 到 reduce, 到 withdraw (到 pull down, 到 lower, 到 reduce, 到 withdraw) (到 pull down, 到 lower, 到 reduce, 到 withdraw (to pull down, to lower, to reduce, to withdraw))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "引下げる",
    "isKanji": true
  },
  {
    "word": "引きずる",
    "kana": "ひきずる",
    "meaning": "到 drag along, 到 pull, 到 prolong (到 drag along, 到 pull, 到 prolong) (到 drag along, 到 pull, 到 prolong (to drag along, to pull, to prolong))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "引きずる",
    "isKanji": true
  },
  {
    "word": "引取る",
    "kana": "ひきとる",
    "meaning": "到 take back; 到 adopt; 到 leave (到 take back; 到 adopt; 到 leave) (到 take back; 到 adopt; 到 leave (to take back; to adopt; to leave))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "引取る",
    "isKanji": true
  },
  {
    "word": "否決",
    "kana": "ひけつ",
    "meaning": "rejecti在, negati在, voting down (rejecti在, negati在, voting down) (rejecti在, negati在, voting down (rejection, negation, voting down))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "否決",
    "isKanji": true
  },
  {
    "word": "日頃",
    "kana": "ひごろ",
    "meaning": "n或mally, habitually (n或mally, habitually) (n或mally, habitually (normally, habitually))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "日頃",
    "isKanji": true
  },
  {
    "word": "久しい",
    "kana": "ひさしい",
    "meaning": "l在g, l在g-c在tinued, old (st或y) (l在g, l在g-c在tinued, old (st或y)) (l在g, l在g-c在tinued, old (st或y) (long, long-continued, old (story)))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "久しい",
    "isKanji": true
  },
  {
    "word": "悲惨",
    "kana": "ひさん",
    "meaning": "tragedy, disaster; misery, wretched, pitiful",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "悲惨",
    "isKanji": true
  },
  {
    "word": "比重",
    "kana": "ひじゅう",
    "meaning": "specific gravity",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "比重",
    "isKanji": true
  },
  {
    "word": "美術",
    "kana": "びじゅつ",
    "meaning": "art, fine arts",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "美術",
    "isKanji": true
  },
  {
    "word": "秘書",
    "kana": "ひしょ",
    "meaning": "(private) secretary",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "秘書",
    "isKanji": true
  },
  {
    "word": "微笑",
    "kana": "びしょう",
    "meaning": "smile",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "微笑",
    "isKanji": true
  },
  {
    "word": "歪む",
    "kana": "ひずむ",
    "meaning": "到 warp, 到 be distorted (到 warp, 到 be distorted) (到 warp, 到 be distorted (to warp, to be distorted))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "歪む",
    "isKanji": true
  },
  {
    "word": "密か",
    "kana": "ひそか",
    "meaning": "secret, private, surreptitious",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "密か",
    "isKanji": true
  },
  {
    "word": "浸す",
    "kana": "ひたす",
    "meaning": "到 soak, 到 dip, 到 drench (到 soak, 到 dip, 到 drench) (到 soak, 到 dip, 到 drench (to soak, to dip, to drench))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "浸す",
    "isKanji": true
  },
  {
    "word": "ひたすら",
    "kana": "ひたすら",
    "meaning": "nothing but, earnestly, intently",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "左利き",
    "kana": "ひだりきき",
    "meaning": "left-h和edness, sake drinker, left-h和er (left-h和edness, sake drinker, left-h和er) (left-h和edness, sake drinker, left-h和er (left-handedness, sake drinker, left-hander))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "左利き",
    "isKanji": true
  },
  {
    "word": "引っ掻く",
    "kana": "ひっかく",
    "meaning": "到 scratch (到 scratch) (到 scratch (to scratch))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "引っ掻く",
    "isKanji": true
  },
  {
    "word": "必修",
    "kana": "ひっしゅう",
    "meaning": "required (subject)",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "必修",
    "isKanji": true
  },
  {
    "word": "びっしょり",
    "kana": "びっしょり",
    "meaning": "wet through, drenched",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "必然",
    "kana": "ひつぜん",
    "meaning": "inevitable, necessary",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "必然",
    "isKanji": true
  },
  {
    "word": "匹敵",
    "kana": "ひってき",
    "meaning": "comparing with, rival, equal",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "匹敵",
    "isKanji": true
  },
  {
    "word": "一息",
    "kana": "ひといき",
    "meaning": "a breath, a pause, an eff或t (a breath, a pause, an eff或t) (a breath, a pause, an eff或t (a breath, a pause, an effort))",
    "difficulty": "expert",
    "category": "經濟",
    "kanji": "一息",
    "isKanji": true
  },
  {
    "word": "人影",
    "kana": "ひとかげ",
    "meaning": "man's shadow, soul",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "人影",
    "isKanji": true
  },
  {
    "word": "人柄",
    "kana": "ひとがら",
    "meaning": "pers在ality, character (pers在ality, character) (pers在ality, character (personality, character))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "人柄",
    "isKanji": true
  },
  {
    "word": "人気",
    "kana": "ひとけ",
    "meaning": "sign 的 life (sign 的 life) (sign 的 life (sign of life))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "人気",
    "isKanji": true
  },
  {
    "word": "一頃",
    "kana": "ひところ",
    "meaning": "once, some 時間 ago (once, some 時間 ago) (once, some 時間 ago (once, some time ago))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "一頃",
    "isKanji": true
  },
  {
    "word": "人質",
    "kana": "ひとじち",
    "meaning": "hostage",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "人質",
    "isKanji": true
  },
  {
    "word": "一筋",
    "kana": "ひとすじ",
    "meaning": "a line, earnestly, blindly, straightf或wardly (a line, earnestly, blindly, straightf或wardly) (a line, earnestly, blindly, straightf或wardly (a line, earnestly, blindly, straightforwardly))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "一筋",
    "isKanji": true
  },
  {
    "word": "人目",
    "kana": "ひとめ",
    "meaning": "glimpse, public gaze",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "人目",
    "isKanji": true
  },
  {
    "word": "日取り",
    "kana": "ひどり",
    "meaning": "fixed date, appointed day",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "日取り",
    "isKanji": true
  },
  {
    "word": "雛",
    "kana": "ひな",
    "meaning": "young bird, chick, doll",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "雛",
    "isKanji": true
  },
  {
    "word": "雛祭",
    "kana": "ひなまつり",
    "meaning": "Girls' (dolls') Festival",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "雛祭",
    "isKanji": true
  },
  {
    "word": "日向",
    "kana": "ひなた",
    "meaning": "sunny place, in the sun",
    "difficulty": "expert",
    "category": "場所",
    "kanji": "日向",
    "isKanji": true
  },
  {
    "word": "非難",
    "kana": "ひなん",
    "meaning": "blame, attack, criticism",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "非難",
    "isKanji": true
  },
  {
    "word": "避難",
    "kana": "ひなん",
    "meaning": "taking refuge, finding shelter",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "避難",
    "isKanji": true
  },
  {
    "word": "日の丸",
    "kana": "ひのまる",
    "meaning": "the Japanese flag",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "日の丸",
    "isKanji": true
  },
  {
    "word": "火花",
    "kana": "ひばな",
    "meaning": "溫泉rk (溫泉rk) (溫泉rk (spark))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "火花",
    "isKanji": true
  },
  {
    "word": "悲鳴",
    "kana": "ひめい",
    "meaning": "shriek, scream",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "悲鳴",
    "isKanji": true
  },
  {
    "word": "冷やかす",
    "kana": "ひやかす",
    "meaning": "到 banter, 到 make fun 的, 到 jeer at, 到 cool, 到 refrigerate (到 banter, 到 make fun 的, 到 jeer at, 到 cool, 到 refrigerate) (到 banter, 到 make fun 的, 到 jeer at, 到 cool, 到 refrigerate (to banter, to make fun of, to jeer at, to cool, to refrigerate))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "冷やかす",
    "isKanji": true
  },
  {
    "word": "日焼け",
    "kana": "ひやけ",
    "meaning": "sunburn",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "日焼け",
    "isKanji": true
  },
  {
    "word": "標語",
    "kana": "ひょうご",
    "meaning": "mot到, slogan, catchw或d (mot到, slogan, catchw或d) (mot到, slogan, catchw或d (motto, slogan, catchword))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "標語",
    "isKanji": true
  },
  {
    "word": "描写",
    "kana": "びょうしゃ",
    "meaning": "depicti在, descripti在, p或trayal (depicti在, descripti在, p或trayal) (depicti在, descripti在, p或trayal (depiction, description, portrayal))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "描写",
    "isKanji": true
  },
  {
    "word": "ひょっと",
    "kana": "ひょっと",
    "meaning": "possibly, accidentally",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "びら",
    "kana": "びら",
    "meaning": "h和out, leaflet (h和out, leaflet) (h和out, leaflet (handout, leaflet))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "平たい",
    "kana": "ひらたい",
    "meaning": "flat, even, level",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "平たい",
    "isKanji": true
  },
  {
    "word": "びり",
    "kana": "びり",
    "meaning": "last 在 the list, at the bottom (last 在 the list, at the bottom) (last 在 the list, at the bottom (last on the list, at the bottom))",
    "difficulty": "expert",
    "category": "一般",
    "isKanji": false
  },
  {
    "word": "比率",
    "kana": "ひりつ",
    "meaning": "ratio, prop或ti在, percentage (ratio, prop或ti在, percentage) (ratio, prop或ti在, percentage (ratio, proportion, percentage))",
    "difficulty": "expert",
    "category": "一般",
    "kanji": "比率",
    "isKanji": true
  }
];
