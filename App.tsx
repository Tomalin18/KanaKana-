import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { LoadingScreen } from '@/screens/common/LoadingScreen';
import { ForceUpdateModal } from '@/components/common/ForceUpdateModal';
import { useAppInitialization } from '@/hooks/useAppInitialization';
import { useVersionCheck } from '@/hooks/useVersionCheck';
import { AppNavigator } from '@/navigation/AppNavigator';

/**
 * 主應用程式組件 - KanaKana的入口點
 * 
 * 負責：
 * - 應用程式初始化
 * - 錯誤邊界處理
 * - 版本檢查和強制更新
 * - 主題和字體載入
 * - 導航設置
 */
export default function App(): React.JSX.Element {
  const { isReady, error, isUpdateRequired } = useAppInitialization();
  const { updateInfo, retry } = useVersionCheck();

  if (error) {
    console.error('App initialization error:', error);
  }

  if (!isReady) {
    return <LoadingScreen />;
  }

  return (
    <ErrorBoundary>
      <StatusBar style="light" backgroundColor="#1E40AF" />
      <AppNavigator />
      
      {/* 強制更新模態框 */}
      {isUpdateRequired && updateInfo && (
        <ForceUpdateModal 
          updateInfo={updateInfo} 
          onRetry={retry}
        />
      )}
    </ErrorBoundary>
  );
} 