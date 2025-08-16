import { getCurrentLanguage, getSupportedLanguages, changeLanguage } from './index';

/**
 * 測試國際化功能
 */
export const testI18n = async () => {
  console.log('🧪 開始測試國際化功能...');
  
  // 測試獲取支援的語言
  const supportedLanguages = getSupportedLanguages();
  console.log('✅ 支援的語言:', supportedLanguages.map(lang => `${lang.code}: ${lang.nativeName}`));
  
  // 測試獲取當前語言
  const currentLanguage = getCurrentLanguage();
  console.log('✅ 當前語言:', currentLanguage);
  
  // 測試語言切換
  try {
    console.log('🔄 測試切換到英文...');
    await changeLanguage('en');
    console.log('✅ 語言已切換到英文');
    
    console.log('🔄 測試切換回繁體中文...');
    await changeLanguage('zh_tw');
    console.log('✅ 語言已切換回繁體中文');
    
    console.log('✅ 國際化功能測試完成！');
  } catch (error) {
    console.error('❌ 語言切換測試失敗:', error);
  }
};
