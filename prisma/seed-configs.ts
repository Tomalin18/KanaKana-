import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * 種子資料 - 系統配置
 * 初始化遊戲設定、功能開關等配置
 */
async function seedConfigs() {
  console.log('🔧 Seeding system configurations...');

  // 功能開關
  console.log('🚀 Seeding feature flags...');
  const featureFlags = [
    { key: 'KANJI_MODE', enabled: true, description: '漢字模式' },
    { key: 'LONG_TEXT_MODE', enabled: false, description: '長文模式（上架版隱藏）' },
    { key: 'TETRIS_MODE', enabled: true, description: '俄羅斯方塊模式' },
    { key: 'BETA_FEATURES', enabled: false, description: '測試功能' },
    { key: 'ADVANCED_ANALYTICS', enabled: false, description: '進階分析' },
    { key: 'MULTIPLAYER', enabled: false, description: '多人模式' },
  ];

  for (const flag of featureFlags) {
    await prisma.featureFlag.upsert({
      where: { key: flag.key },
      update: { enabled: flag.enabled, description: flag.description },
      create: flag,
    });
  }

  // 難度設定
  console.log('🎮 Seeding difficulty levels...');
  const difficultyLevels = [
    {
      id: 'beginner',
      name: '初心者',
      lives: 5,
      timeMultiplier: 1.5,
      pointsMultiplier: 0.8,
      vocabularyLevel: 'n5',
      sortOrder: 1,
    },
    {
      id: 'normal',
      name: '通常',
      lives: 3,
      timeMultiplier: 1.0,
      pointsMultiplier: 1.0,
      vocabularyLevel: 'n4',
      sortOrder: 2,
    },
    {
      id: 'hard',
      name: '困難',
      lives: 2,
      timeMultiplier: 0.8,
      pointsMultiplier: 1.2,
      vocabularyLevel: 'n3',
      sortOrder: 3,
    },
    {
      id: 'expert',
      name: '達人',
      lives: 1,
      timeMultiplier: 0.6,
      pointsMultiplier: 1.5,
      vocabularyLevel: 'n2',
      sortOrder: 4,
    },
  ];

  for (const level of difficultyLevels) {
    await prisma.difficultyLevel.upsert({
      where: { id: level.id },
      update: level,
      create: level,
    });
  }

  // 成就系統
  console.log('🏆 Seeding achievements...');
  const achievements = [
    {
      id: 'first_word',
      name: '初めの一歩',
      description: '第一個單詞輸入成功',
      points: 10,
      icon: '🎯',
      category: 'beginner',
      sortOrder: 1,
    },
    {
      id: 'combo_master',
      name: 'コンボマスター',
      description: '達成50連擊',
      points: 100,
      icon: '🔥',
      category: 'skill',
      sortOrder: 2,
    },
    {
      id: 'speed_demon',
      name: '速度惡魔',
      description: '達成120 CPM',
      points: 200,
      icon: '⚡',
      category: 'speed',
      sortOrder: 3,
    },
    {
      id: 'perfectionist',
      name: '完璧主義者',
      description: '在一局遊戲中保持100%準確率',
      points: 150,
      icon: '💯',
      category: 'accuracy',
      sortOrder: 4,
    },
    {
      id: 'survivor',
      name: '生存者',
      description: '在困難模式下生存10分鐘',
      points: 300,
      icon: '🛡️',
      category: 'endurance',
      sortOrder: 5,
    },
  ];

  for (const achievement of achievements) {
    await prisma.achievement.upsert({
      where: { id: achievement.id },
      update: achievement,
      create: achievement,
    });
  }

  // 計分規則
  console.log('📊 Seeding scoring rules...');
  const scoringRules = [
    { key: 'BASE_POINTS_PER_CHARACTER', value: 10, description: '每個字符的基本分數' },
    { key: 'COMBO_MULTIPLIER', value: 0.1, description: '連擊加成倍數' },
    { key: 'PERFECT_ACCURACY_BONUS', value: 50, description: '完美準確度獎勵' },
    { key: 'SPEED_BONUS_THRESHOLD', value: 60, description: '速度獎勵閾值 (CPM)' },
    { key: 'SPEED_BONUS_MULTIPLIER', value: 0.2, description: '速度獎勵倍數' },
    { key: 'LIFE_BONUS', value: 100, description: '每剩餘生命獎勵' },
  ];

  for (const rule of scoringRules) {
    await prisma.scoringRule.upsert({
      where: { key: rule.key },
      update: { value: rule.value, description: rule.description },
      create: rule,
    });
  }

  // 遊戲設定 (使用 SystemConfig 表)
  console.log('⚙️ Seeding game settings...');
  const gameSettings = {
    MAX_LIVES: 5,
    DEFAULT_LIVES: 3,
    MIN_LIVES: 1,
    WORD_DISPLAY_TIME: 5000,
    COMBO_RESET_DELAY: 1000,
    GAME_OVER_DELAY: 2000,
    AUTO_SAVE_INTERVAL: 30000,
  };

  await prisma.systemConfig.upsert({
    where: { key: 'game_settings' },
    update: { value: gameSettings },
    create: {
      key: 'game_settings',
      value: gameSettings,
      description: '遊戲基本設定',
    },
  });

  console.log('✅ System configurations seeded successfully!');
}

// 執行種子資料
seedConfigs()
  .catch((e) => {
    console.error('❌ Config seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });