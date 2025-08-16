import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 導入語言檔案
import zh_tw from './locales/zh_tw';
import en from './locales/en';
import ko from './locales/ko';
import zh_cn from './locales/zh_cn';
import ja from './locales/ja';

// 語言資源
const resources = {
  zh_tw: { translation: zh_tw },
  en: { translation: en },
  ko: { translation: ko },
  zh_cn: { translation: zh_cn },
  ja: { translation: ja },
};

// 語言檢測函數
const getLanguageFromStorage = async (): Promise<string> => {
  try {
    const storedLanguage = await AsyncStorage.getItem('app_language');
    if (storedLanguage && resources[storedLanguage as keyof typeof resources]) {
      return storedLanguage;
    }
  } catch (error) {
    console.warn('無法從儲存空間讀取語言設定:', error);
  }
  
  // 如果沒有儲存的語言設定，使用系統語言
  const systemLanguage = Localization.getLocales()[0]?.languageCode || 'zh';
  const languageCode = systemLanguage.split('-')[0];
  
  // 映射系統語言到支援的語言
  const languageMap: Record<string, string> = {
    'zh': 'zh_tw', // 預設使用繁體中文
    'en': 'en',
    'ko': 'ko',
    'ja': 'ja',
  };
  
  return languageMap[languageCode] || 'zh_tw';
};

// 初始化 i18n
const initI18n = async () => {
  const language = await getLanguageFromStorage();
  
  await i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: language,
      fallbackLng: 'zh_tw',
      debug: __DEV__,
      
      interpolation: {
        escapeValue: false, // React 已經處理了 XSS
      },
      
      react: {
        useSuspense: false, // 在 React Native 中建議設為 false
      },
    });
};

// 語言切換函數
export const changeLanguage = async (language: string) => {
  try {
    await AsyncStorage.setItem('app_language', language);
    await i18n.changeLanguage(language);
  } catch (error) {
    console.error('切換語言時發生錯誤:', error);
  }
};

// 獲取當前語言
export const getCurrentLanguage = (): string => {
  return i18n.language;
};

// 獲取支援的語言列表
export const getSupportedLanguages = () => {
  return [
    { code: 'zh_tw', name: '繁體中文', nativeName: '繁體中文' },
    { code: 'zh_cn', name: '简体中文', nativeName: '简体中文' },
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'ko', name: '한국어', nativeName: '한국어' },
    { code: 'ja', name: '日本語', nativeName: '日本語' },
  ];
};

// 初始化
initI18n();

// 調試：檢查初始化狀態
console.log('i18n initialized with language:', i18n.language);
console.log('i18n available languages:', Object.keys(resources));

export default i18n;
