import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { useVersionCheck } from './useVersionCheck';
import { initializeVocabulary } from '@/data/vocabulary-final/database';
import { preloadVocabulary } from '@/services/vocabularyService';
import { preloadLongTexts } from '@/services/longTextService';
import { preloadBossQuestions } from '@/services/bossQuestionService';
import { preloadConfigs } from '@/services/configService';

interface AppInitializationState {
  isReady: boolean;
  error: Error | null;
  isUpdateRequired: boolean;
}

/**
 * 應用初始化Hook
 * 處理字體加載、資源準備、版本檢查和初始設定
 */
export const useAppInitialization = (): AppInitializationState => {
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  
  // 版本檢查
  const { isLoading: isVersionChecking, isUpdateRequired, updateInfo, retry } = useVersionCheck();

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // 加載字體
        await Font.loadAsync({
          // 這裡可以加載自定義字體
          // 'CustomFont': require('@/assets/fonts/CustomFont.ttf'),
        });

        // 清除舊快取（除錯用）
        const { clearVocabularyCache } = await import('@/services/vocabularyService');
        await clearVocabularyCache();
        
        // 初始化資料庫
        console.log('Initializing vocabulary from database...');
        const vocabInitialized = await initializeVocabulary();
        if (!vocabInitialized) {
          console.warn('Failed to initialize vocabulary from database');
        }

        // 預載詞彙資料到快取
        await preloadVocabulary();
        
        // 預載長文資料
        await preloadLongTexts();
        
        // 預載 Boss 題目
        await preloadBossQuestions();
        
        // 預載系統配置
        await preloadConfigs();

        // 這裡可以添加其他初始化邏輯
        // - 檢查日文輸入法設定
        // - 載入用戶設定
        // - 初始化分析服務
        // - 設定錯誤報告

        setIsReady(true);
      } catch (initError) {
        console.error('App initialization failed:', initError);
        setError(initError as Error);
        setIsReady(true); // 即使有錯誤也要設為ready，以便顯示錯誤界面
      }
    };

    initializeApp();
  }, []);

  return { 
    isReady: isReady && !isVersionChecking, 
    error, 
    isUpdateRequired 
  };
}; 