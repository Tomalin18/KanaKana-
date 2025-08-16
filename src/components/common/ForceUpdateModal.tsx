import React, { useEffect } from 'react';
import { Alert, Linking } from 'react-native';
import { useTranslation } from 'react-i18next';
import { UpdateInfo } from '@/utils/versionCheck';

interface ForceUpdateModalProps {
  updateInfo: UpdateInfo;
  onRetry?: () => void;
}

export const ForceUpdateModal: React.FC<ForceUpdateModalProps> = ({
  updateInfo,
  onRetry,
}) => {
  const { t } = useTranslation();
  const handleUpdate = async () => {
    try {
      const supported = await Linking.canOpenURL(updateInfo.updateUrl);
      
      if (supported) {
        await Linking.openURL(updateInfo.updateUrl);
      } else {
        Alert.alert(
          t('forceUpdate.cannotOpenStore'),
          t('forceUpdate.pleaseUpdateManually'),
          [
            { text: t('common.cancel'), style: 'cancel' },
            { text: t('common.retry'), onPress: onRetry },
          ]
        );
      }
    } catch (error) {
      console.error('Failed to open update URL:', error);
      Alert.alert(
        t('forceUpdate.updateFailed'),
        t('forceUpdate.cannotOpenStorePleaseUpdate'),
        [
          { text: t('common.cancel'), style: 'cancel' },
          { text: t('common.retry'), onPress: onRetry },
        ]
      );
    }
  };

  useEffect(() => {
    // 顯示 iOS 原生更新對話框
    Alert.alert(
      t('forceUpdate.updateRequired'),
      t('forceUpdate.newVersionAvailable', { version: updateInfo.latestVersion }),
      [
        {
          text: t('forceUpdate.later'),
          style: 'cancel',
          onPress: onRetry, // 重試檢查
        },
        {
          text: t('forceUpdate.updateNow'),
          onPress: handleUpdate,
        },
      ],
      { cancelable: false } // 防止用戶點擊外部關閉
    );
  }, [updateInfo, onRetry]);

  // 這個組件不再渲染任何 UI，只負責顯示 Alert
  return null;
}; 