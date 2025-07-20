/**
 * 功能開關配置
 * 用於控制新功能的啟用/禁用
 */

export const FEATURE_FLAGS = {
  // 新遊戲模式
  KANJI_MODE: true,        // 啟用漢字模式
  LONG_TEXT_MODE: false,   // 上架版隱藏長文模式
  TETRIS_MODE: true,       // 啟用俄羅斯方塊模式
  
  // 其他功能
  BETA_FEATURES: __DEV__,
  ADVANCED_ANALYTICS: false,
  MULTIPLAYER: false,
} as const;

/**
 * 檢查功能是否啟用
 */
export const isFeatureEnabled = (feature: keyof typeof FEATURE_FLAGS): boolean => {
  return FEATURE_FLAGS[feature];
};

/**
 * 獲取可用的遊戲模式
 */
export const getAvailableGameModes = () => {
  const baseModes = ['classic', 'practice', 'daily_challenge'] as const;
  const newModes = [];
  
  if (isFeatureEnabled('KANJI_MODE')) {
    newModes.push('kanji_to_kana' as const);
  }
  
  if (isFeatureEnabled('LONG_TEXT_MODE')) {
    newModes.push('long_text' as const);
  }
  
  if (isFeatureEnabled('TETRIS_MODE')) {
    newModes.push('tetris_typing' as const);
  }
  
  return [...baseModes, ...newModes];
}; 