import React, { useEffect } from 'react';
import { Alert, Linking } from 'react-native';
import { UpdateInfo } from '@/utils/versionCheck';

interface ForceUpdateModalProps {
  updateInfo: UpdateInfo;
  onRetry?: () => void;
}

export const ForceUpdateModal: React.FC<ForceUpdateModalProps> = ({
  updateInfo,
  onRetry,
}) => {
  const handleUpdate = async () => {
    try {
      const supported = await Linking.canOpenURL(updateInfo.updateUrl);
      
      if (supported) {
        await Linking.openURL(updateInfo.updateUrl);
      } else {
        Alert.alert(
          '無法打開應用商店',
          '請手動前往應用商店更新應用',
          [
            { text: '取消', style: 'cancel' },
            { text: '重試', onPress: onRetry },
          ]
        );
      }
    } catch (error) {
      console.error('Failed to open update URL:', error);
      Alert.alert(
        '更新失敗',
        '無法打開應用商店，請手動前往更新',
        [
          { text: '取消', style: 'cancel' },
          { text: '重試', onPress: onRetry },
        ]
      );
    }
  };

  useEffect(() => {
    // 顯示 iOS 原生更新對話框
    Alert.alert(
      '需要更新',
      `目前應用程式有最新版本 ${updateInfo.latestVersion}，請至 App Store 更新以獲得最佳體驗。`,
      [
        {
          text: '稍後再說',
          style: 'cancel',
          onPress: onRetry, // 重試檢查
        },
        {
          text: '立即更新',
          onPress: handleUpdate,
        },
      ],
      { cancelable: false } // 防止用戶點擊外部關閉
    );
  }, [updateInfo, onRetry]);

  // 這個組件不再渲染任何 UI，只負責顯示 Alert
  return null;
}; 