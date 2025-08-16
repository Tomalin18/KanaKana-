const fs = require('fs');
const path = require('path');

// 修復字符串錯誤
const fixStringErrors = (content) => {
  // 修復未終止的字符串
  let fixedContent = content;
  
  // 修復包含反斜線的字符串
  fixedContent = fixedContent.replace(
    /meaning: "([^"]*\\"[^"]*)/g,
    (match, p1) => {
      // 找到字符串的結束位置
      const endQuoteIndex = p1.indexOf('",');
      if (endQuoteIndex === -1) {
        // 如果沒有找到結束引號，添加一個
        return `meaning: "${p1}",`;
      }
      return match;
    }
  );
  
  // 修復 chineseMeaning 中的類似問題
  fixedContent = fixedContent.replace(
    /chineseMeaning: "([^"]*\\"[^"]*)/g,
    (match, p1) => {
      const endQuoteIndex = p1.indexOf('",');
      if (endQuoteIndex === -1) {
        return `chineseMeaning: "${p1}",`;
      }
      return match;
    }
  );
  
  // 修復包含換行符的字符串
  fixedContent = fixedContent.replace(
    /meaning: "([^"]*)\n([^"]*)"/g,
    'meaning: "$1 $2"'
  );
  
  fixedContent = fixedContent.replace(
    /chineseMeaning: "([^"]*)\n([^"]*)"/g,
    'chineseMeaning: "$1 $2"'
  );
  
  // 修復特定的錯誤模式
  fixedContent = fixedContent.replace(
    /meaning: "新幹線「子彈列車」 \(新幹線「子彈列車」\) \(新幹線「子彈列車」 \(Shinkansen, \\"/g,
    'meaning: "新幹線「子彈列車」 (Shinkansen)"'
  );
  
  fixedContent = fixedContent.replace(
    /chineseMeaning: "新幹線「子彈列車」 \(新幹線「子彈列車」\) \(新幹線「子彈列車」 \(Shinkansen, \\"/g,
    'chineseMeaning: "新幹線「子彈列車」 (Shinkansen)"'
  );
  
  fixedContent = fixedContent.replace(
    /meaning: "very hard \(as in \\"/g,
    'meaning: "very hard (as in)"'
  );
  
  fixedContent = fixedContent.replace(
    /chineseMeaning: "very hard \(as in \\"/g,
    'chineseMeaning: "very hard (as in)"'
  );
  
  return fixedContent;
};

// 主函數
const main = () => {
  console.log('開始修復字符串錯誤...');
  
  const expertPath = path.join(__dirname, '../src/data/vocabulary-final/expert.ts');
  
  if (fs.existsSync(expertPath)) {
    console.log('修復 expert.ts...');
    const content = fs.readFileSync(expertPath, 'utf8');
    const fixedContent = fixStringErrors(content);
    fs.writeFileSync(expertPath, fixedContent, 'utf8');
    console.log('✅ expert.ts 修復完成');
  }
  
  // 檢查其他檔案是否也有類似問題
  const filesToCheck = ['beginner.ts', 'normal.ts', 'hard.ts'];
  
  filesToCheck.forEach(file => {
    const filePath = path.join(__dirname, '../src/data/vocabulary-final', file);
    if (fs.existsSync(filePath)) {
      console.log(`檢查 ${file}...`);
      const content = fs.readFileSync(filePath, 'utf8');
      const fixedContent = fixStringErrors(content);
      if (content !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log(`✅ ${file} 修復完成`);
      } else {
        console.log(`✅ ${file} 無需修復`);
      }
    }
  });
  
  console.log('\n🎉 字符串錯誤修復完成！');
};

// 執行主函數
main(); 