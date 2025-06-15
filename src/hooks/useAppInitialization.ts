import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

interface AppInitializationState {
  isReady: boolean;
  error: Error | null;
}

/**
 * 應用初始化Hook
 * 處理字體加載、資源準備和初始設定
 */
export const useAppInitialization = (): AppInitializationState => {
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // 延遲確保應用程式有時間初始化
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // 加載字體
        await Font.loadAsync({
          // 這裡可以加載自定義字體
          // 'CustomFont': require('@/assets/fonts/CustomFont.ttf'),
        });

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

  return { isReady, error };
}; 