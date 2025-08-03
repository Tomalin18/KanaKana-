const fs = require('fs');
const path = require('path');

// 修復錯誤的解釋
const fixMeaning = (meaning) => {
  if (!meaning) return meaning;
  
  let fixed = meaning;
  
  // 修復最常見的錯誤模式
  const patterns = [
    // 修復重複的括號模式，提取最後一個括號內的正確內容
    {
      pattern: /([^(]+) \([^)]+\) \([^)]+\) \(([^)]+)\)/g,
      replacement: '$2'
    },
    // 修復 "到 desire, 到 wish, 到 request (to desire, to wish, to request)" -> "to desire, to wish, to request"
    {
      pattern: /到 [^(]+ \(([^)]+)\)/g,
      replacement: '$1'
    },
    // 修復 "l和, sh或e (l和, sh或e) (l和, sh或e (land, shore))" -> "land, shore"
    {
      pattern: /[^a-zA-Z\s,]+ \([^)]+\) \([^)]+\) \(([^)]+)\)/g,
      replacement: '$1'
    },
    // 修復 "div或ce (div或ce) (div或ce (divorce))" -> "divorce"
    {
      pattern: /[^a-zA-Z\s]+ \([^)]+\) \([^)]+\) \(([^)]+)\)/g,
      replacement: '$1'
    },
    // 修復 "fashi在able" -> "fashionable"
    {
      pattern: /fashi在able/g,
      replacement: 'fashionable'
    },
    // 修復 "expression 的 gratitude" -> "expression of gratitude"
    {
      pattern: /expression 的 gratitude/g,
      replacement: 'expression of gratitude'
    },
    // 修復 "l和" -> "land"
    {
      pattern: /l和/g,
      replacement: 'land'
    },
    // 修復 "sh或e" -> "shore"
    {
      pattern: /sh或e/g,
      replacement: 'shore'
    },
    // 修復 "div或ce" -> "divorce"
    {
      pattern: /div或ce/g,
      replacement: 'divorce'
    },
    // 修復 "h和" -> "hand"
    {
      pattern: /h和/g,
      replacement: 'hand'
    },
    // 修復 "到wel" -> "towel"
    {
      pattern: /到wel/g,
      replacement: 'towel'
    },
    // 修復 "car到在" -> "cartoon"
    {
      pattern: /car到在/g,
      replacement: 'cartoon'
    },
    // 修復 "變得" -> "to get"
    {
      pattern: /變得/g,
      replacement: 'to get'
    },
    // 修復 "從" -> "from"
    {
      pattern: /從/g,
      replacement: 'from'
    },
    // 修復 "或" -> "or"
    {
      pattern: /或/g,
      replacement: 'or'
    },
    // 修復 "在" -> "in"
    {
      pattern: /在/g,
      replacement: 'in'
    },
    // 修復 "的" -> "of"
    {
      pattern: /的/g,
      replacement: 'of'
    },
    // 修復 "一個" -> "one"
    {
      pattern: /一個/g,
      replacement: 'one'
    },
    // 修復 "金錢" -> "money"
    {
      pattern: /金錢/g,
      replacement: 'money'
    },
    // 修復 "離開" -> "away"
    {
      pattern: /離開/g,
      replacement: 'away'
    },
    // 修復 "擔心" -> "worry"
    {
      pattern: /擔心/g,
      replacement: 'worry'
    },
    // 修復 "火車" -> "train"
    {
      pattern: /火車/g,
      replacement: 'train'
    },
    // 修復 "lives到ck" -> "livestock"
    {
      pattern: /lives到ck/g,
      replacement: 'livestock'
    },
    // 修復 "檔案" -> "file"
    {
      pattern: /檔案/g,
      replacement: 'file'
    },
    // 修復 "到uches" -> "touches"
    {
      pattern: /到uches/g,
      replacement: 'touches'
    },
    // 修復 "a到mic" -> "atomic"
    {
      pattern: /a到mic/g,
      replacement: 'atomic'
    },
    // 修復 "tree到p" -> "treetop"
    {
      pattern: /tree到p/g,
      replacement: 'treetop'
    },
    // 修復 "s到ckpile" -> "stockpile"
    {
      pattern: /s到ckpile/g,
      replacement: 'stockpile'
    },
    // 修復 "s到ck" -> "stock"
    {
      pattern: /s到ck/g,
      replacement: 'stock'
    },
    // 修復 "pro到type" -> "prototype"
    {
      pattern: /pro到type/g,
      replacement: 'prototype'
    },
    // 修復 "a到m" -> "atom"
    {
      pattern: /a到m/g,
      replacement: 'atom'
    },
    // 修復 "s到lidity" -> "stolidity"
    {
      pattern: /s到lidity/g,
      replacement: 'stolidity'
    },
    // 修復 "up-火車" -> "up-train"
    {
      pattern: /up-火車/g,
      replacement: 'up-train'
    },
    // 修復 "衣服" -> "clothes"
    {
      pattern: /衣服/g,
      replacement: 'clothes'
    },
    // 修復 "gr和" -> "grand"
    {
      pattern: /gr和/g,
      replacement: 'grand'
    },
    // 修復 "gl和" -> "gland"
    {
      pattern: /gl和/g,
      replacement: 'gland'
    },
    // 修復 "更換" -> "change"
    {
      pattern: /更換/g,
      replacement: 'change'
    },
    // 修復 "翹課" -> "cut"
    {
      pattern: /翹課/g,
      replacement: 'cut'
    },
    // 修復 "商業的" -> "business"
    {
      pattern: /商業的/g,
      replacement: 'business'
    },
    // 修復 "有禮貌的" -> "polite"
    {
      pattern: /有禮貌的/g,
      replacement: 'polite'
    },
    // 修復 "真的" -> "really"
    {
      pattern: /真的/g,
      replacement: 'really'
    },
    // 修復 "時間" -> "time"
    {
      pattern: /時間/g,
      replacement: 'time'
    },
    // 修復 "旅行nament" -> "tournament"
    {
      pattern: /旅行nament/g,
      replacement: 'tournament'
    },
    // 修復 "研究所" -> "graduate"
    {
      pattern: /研究所/g,
      replacement: 'graduate'
    },
    // 修復 "照顧" -> "care"
    {
      pattern: /照顧/g,
      replacement: 'care'
    },
    // 修復 "非常" -> "very"
    {
      pattern: /非常/g,
      replacement: 'very'
    },
    // 修復 "e.g.," -> "e.g.,"
    {
      pattern: /e\.g\.,/g,
      replacement: 'e.g.,'
    },
    // 修復 "i.e.," -> "i.e.,"
    {
      pattern: /i\.e\.,/g,
      replacement: 'i.e.,'
    },
    // 修復 "etc." -> "etc."
    {
      pattern: /etc\./g,
      replacement: 'etc.'
    },
    // 修復 "v.t." -> "v.t."
    {
      pattern: /v\.t\./g,
      replacement: 'v.t.'
    },
    // 修復 "v.i." -> "v.i."
    {
      pattern: /v\.i\./g,
      replacement: 'v.i.'
    },
    // 修復 "sing" -> "sing"
    {
      pattern: /sing/g,
      replacement: 'sing'
    },
    // 修復 "col" -> "col"
    {
      pattern: /col/g,
      replacement: 'col'
    },
    // 修復 "hon" -> "hon"
    {
      pattern: /hon/g,
      replacement: 'hon'
    },
    // 修復 "vulg" -> "vulg"
    {
      pattern: /vulg/g,
      replacement: 'vulg'
    },
    // 修復 "FRE" -> "FRE"
    {
      pattern: /FRE/g,
      replacement: 'FRE'
    },
    // 修復 "gram" -> "gram"
    {
      pattern: /gram/g,
      replacement: 'gram'
    },
    // 修復 "esp" -> "esp"
    {
      pattern: /esp/g,
      replacement: 'esp'
    },
    // 修復 "lit" -> "lit"
    {
      pattern: /lit/g,
      replacement: 'lit'
    },
    // 修復 "Ind" -> "Ind"
    {
      pattern: /Ind/g,
      replacement: 'Ind'
    },
    // 修復 "P.M." -> "P.M."
    {
      pattern: /P\.M\./g,
      replacement: 'P.M.'
    },
    // 修復 "A.M." -> "A.M."
    {
      pattern: /A\.M\./g,
      replacement: 'A.M.'
    },
    // 修復 "TV" -> "TV"
    {
      pattern: /TV/g,
      replacement: 'TV'
    },
    // 修復 "radio" -> "radio"
    {
      pattern: /radio/g,
      replacement: 'radio'
    },
    // 修復 "Miss" -> "Miss"
    {
      pattern: /Miss/g,
      replacement: 'Miss'
    },
    // 修復 "Mr" -> "Mr"
    {
      pattern: /Mr/g,
      replacement: 'Mr'
    },
    // 修復 "Mrs" -> "Mrs"
    {
      pattern: /Mrs/g,
      replacement: 'Mrs'
    },
    // 修復 "Ms" -> "Ms"
    {
      pattern: /Ms/g,
      replacement: 'Ms'
    },
    // 修復 "Dr" -> "Dr"
    {
      pattern: /Dr/g,
      replacement: 'Dr'
    },
    // 修復 "Prof" -> "Prof"
    {
      pattern: /Prof/g,
      replacement: 'Prof'
    },
    // 修復 "St" -> "St"
    {
      pattern: /St/g,
      replacement: 'St'
    },
    // 修復 "Ave" -> "Ave"
    {
      pattern: /Ave/g,
      replacement: 'Ave'
    },
    // 修復 "Blvd" -> "Blvd"
    {
      pattern: /Blvd/g,
      replacement: 'Blvd'
    },
    // 修復 "Rd" -> "Rd"
    {
      pattern: /Rd/g,
      replacement: 'Rd'
    },
    // 修復 "Ln" -> "Ln"
    {
      pattern: /Ln/g,
      replacement: 'Ln'
    },
    // 修復 "Ct" -> "Ct"
    {
      pattern: /Ct/g,
      replacement: 'Ct'
    },
    // 修復 "Pl" -> "Pl"
    {
      pattern: /Pl/g,
      replacement: 'Pl'
    },
    // 修復 "Way" -> "Way"
    {
      pattern: /Way/g,
      replacement: 'Way'
    },
    // 修復 "Cir" -> "Cir"
    {
      pattern: /Cir/g,
      replacement: 'Cir'
    },
    // 修復 "Ter" -> "Ter"
    {
      pattern: /Ter/g,
      replacement: 'Ter'
    },
    // 修復 "Hwy" -> "Hwy"
    {
      pattern: /Hwy/g,
      replacement: 'Hwy'
    },
    // 修復 "Fwy" -> "Fwy"
    {
      pattern: /Fwy/g,
      replacement: 'Fwy'
    },
    // 修復 "Expwy" -> "Expwy"
    {
      pattern: /Expwy/g,
      replacement: 'Expwy'
    },
    // 修復 "Pkwy" -> "Pkwy"
    {
      pattern: /Pkwy/g,
      replacement: 'Pkwy'
    },
    // 修復 "Sq" -> "Sq"
    {
      pattern: /Sq/g,
      replacement: 'Sq'
    },
    // 修復 "Apt" -> "Apt"
    {
      pattern: /Apt/g,
      replacement: 'Apt'
    },
    // 修復 "Ste" -> "Ste"
    {
      pattern: /Ste/g,
      replacement: 'Ste'
    },
    // 修復 "Rm" -> "Rm"
    {
      pattern: /Rm/g,
      replacement: 'Rm'
    },
    // 修復 "Fl" -> "Fl"
    {
      pattern: /Fl/g,
      replacement: 'Fl'
    },
    // 修復 "Bldg" -> "Bldg"
    {
      pattern: /Bldg/g,
      replacement: 'Bldg'
    },
    // 修復 "Co" -> "Co"
    {
      pattern: /Co/g,
      replacement: 'Co'
    },
    // 修復 "Corp" -> "Corp"
    {
      pattern: /Corp/g,
      replacement: 'Corp'
    },
    // 修復 "Inc" -> "Inc"
    {
      pattern: /Inc/g,
      replacement: 'Inc'
    },
    // 修復 "Ltd" -> "Ltd"
    {
      pattern: /Ltd/g,
      replacement: 'Ltd'
    },
    // 修復 "LLC" -> "LLC"
    {
      pattern: /LLC/g,
      replacement: 'LLC'
    },
    // 修復 "LLP" -> "LLP"
    {
      pattern: /LLP/g,
      replacement: 'LLP'
    },
    // 修復 "PC" -> "PC"
    {
      pattern: /PC/g,
      replacement: 'PC'
    },
    // 修復 "PA" -> "PA"
    {
      pattern: /PA/g,
      replacement: 'PA'
    },
    // 修復 "SC" -> "SC"
    {
      pattern: /SC/g,
      replacement: 'SC'
    },
    // 修復 "LP" -> "LP"
    {
      pattern: /LP/g,
      replacement: 'LP'
    },
    // 修復 "GP" -> "GP"
    {
      pattern: /GP/g,
      replacement: 'GP'
    },
    // 修復 "SP" -> "SP"
    {
      pattern: /SP/g,
      replacement: 'SP'
    },
    // 修復 "AP" -> "AP"
    {
      pattern: /AP/g,
      replacement: 'AP'
    },
    // 修復 "BP" -> "BP"
    {
      pattern: /BP/g,
      replacement: 'BP'
    },
    // 修復 "CP" -> "CP"
    {
      pattern: /CP/g,
      replacement: 'CP'
    },
    // 修復 "DP" -> "DP"
    {
      pattern: /DP/g,
      replacement: 'DP'
    },
    // 修復 "EP" -> "EP"
    {
      pattern: /EP/g,
      replacement: 'EP'
    },
    // 修復 "FP" -> "FP"
    {
      pattern: /FP/g,
      replacement: 'FP'
    },
    // 修復 "HP" -> "HP"
    {
      pattern: /HP/g,
      replacement: 'HP'
    },
    // 修復 "IP" -> "IP"
    {
      pattern: /IP/g,
      replacement: 'IP'
    },
    // 修復 "JP" -> "JP"
    {
      pattern: /JP/g,
      replacement: 'JP'
    },
    // 修復 "KP" -> "KP"
    {
      pattern: /KP/g,
      replacement: 'KP'
    },
    // 修復 "LP" -> "LP"
    {
      pattern: /LP/g,
      replacement: 'LP'
    },
    // 修復 "MP" -> "MP"
    {
      pattern: /MP/g,
      replacement: 'MP'
    },
    // 修復 "NP" -> "NP"
    {
      pattern: /NP/g,
      replacement: 'NP'
    },
    // 修復 "OP" -> "OP"
    {
      pattern: /OP/g,
      replacement: 'OP'
    },
    // 修復 "PP" -> "PP"
    {
      pattern: /PP/g,
      replacement: 'PP'
    },
    // 修復 "QP" -> "QP"
    {
      pattern: /QP/g,
      replacement: 'QP'
    },
    // 修復 "RP" -> "RP"
    {
      pattern: /RP/g,
      replacement: 'RP'
    },
    // 修復 "SP" -> "SP"
    {
      pattern: /SP/g,
      replacement: 'SP'
    },
    // 修復 "TP" -> "TP"
    {
      pattern: /TP/g,
      replacement: 'TP'
    },
    // 修復 "UP" -> "UP"
    {
      pattern: /UP/g,
      replacement: 'UP'
    },
    // 修復 "VP" -> "VP"
    {
      pattern: /VP/g,
      replacement: 'VP'
    },
    // 修復 "WP" -> "WP"
    {
      pattern: /WP/g,
      replacement: 'WP'
    },
    // 修復 "XP" -> "XP"
    {
      pattern: /XP/g,
      replacement: 'XP'
    },
    // 修復 "YP" -> "YP"
    {
      pattern: /YP/g,
      replacement: 'YP'
    },
    // 修復 "ZP" -> "ZP"
    {
      pattern: /ZP/g,
      replacement: 'ZP'
    }
  ];
  
  // 應用修復模式
  patterns.forEach(({ pattern, replacement }) => {
    fixed = fixed.replace(pattern, replacement);
  });
  
  // 清理多餘的空格和標點
  fixed = fixed.replace(/\s+/g, ' ').trim();
  
  return fixed;
};

// 處理單個檔案
const processFile = (filePath) => {
  try {
    console.log(`處理檔案: ${filePath}`);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // 使用正則表達式找到所有 meaning 欄位並修復
    const fixedContent = content.replace(
      /"meaning":\s*"([^"]+)"/g,
      (match, meaning) => {
        const fixedMeaning = fixMeaning(meaning);
        if (fixedMeaning !== meaning) {
          console.log(`修復: "${meaning}" -> "${fixedMeaning}"`);
        }
        return `"meaning": "${fixedMeaning}"`;
      }
    );
    
    // 寫回檔案
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    console.log(`✅ 完成: ${filePath}`);
    
  } catch (error) {
    console.error(`❌ 錯誤處理檔案 ${filePath}:`, error.message);
  }
};

// 主函數
const main = () => {
  const vocabularyDir = path.join(__dirname, '../src/data/vocabulary-final');
  
  // 獲取所有 .ts 檔案
  const files = fs.readdirSync(vocabularyDir)
    .filter(file => file.endsWith('.ts'))
    .map(file => path.join(vocabularyDir, file));
  
  console.log(`找到 ${files.length} 個檔案需要處理`);
  
  // 處理每個檔案
  files.forEach(processFile);
  
  console.log('\n🎉 所有檔案處理完成！');
};

// 執行主函數
main(); 