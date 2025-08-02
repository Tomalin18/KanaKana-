// 模擬漢字模式的詞彙獲取邏輯
console.log('測試漢字模式詞彙系統...\n');

// 模擬 JLPT 等級選擇
const getJLPTLevelByDifficulty = (difficulty) => {
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
};

// 測試不同難度等級
const difficulties = ['elementary', 'intermediate', 'advanced'];

difficulties.forEach(difficulty => {
  console.log(`測試難度: ${difficulty}`);
  
  // 測試多次以確保隨機性
  for (let i = 0; i < 5; i++) {
    const level = getJLPTLevelByDifficulty(difficulty);
    console.log(`  第${i + 1}次: JLPT ${level.toUpperCase()}`);
  }
  console.log('');
});

console.log('詞彙系統測試完成！');
console.log('\n下一步需要測試實際的詞彙獲取函數...'); 