import { useState, useEffect, useCallback } from 'react';
import { checkForUpdates, UpdateInfo } from '@/utils/versionCheck';

interface VersionCheckState {
  isLoading: boolean;
  updateInfo: UpdateInfo | null;
  error: string | null;
  isUpdateRequired: boolean;
}

export const useVersionCheck = () => {
  const [state, setState] = useState<VersionCheckState>({
    isLoading: false,
    updateInfo: null,
    error: null,
    isUpdateRequired: false,
  });

  const performVersionCheck = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const updateInfo = await checkForUpdates();
      
      setState({
        isLoading: false,
        updateInfo,
        error: null,
        isUpdateRequired: updateInfo.isRequired,
      });
    } catch (error) {
      console.error('Version check failed:', error);
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : '版本檢查失敗',
      }));
    }
  }, []);

  // 初始化時檢查版本
  useEffect(() => {
    performVersionCheck();
  }, [performVersionCheck]);

  return {
    ...state,
    retry: performVersionCheck,
  };
}; 