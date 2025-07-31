import Constants from 'expo-constants';
import * as Device from 'expo-device';
import * as Network from 'expo-network';

export interface VersionInfo {
  version: string;
  buildNumber: string;
  platform: 'ios' | 'android';
}

export interface UpdateInfo {
  isRequired: boolean;
  isAvailable: boolean;
  currentVersion: string;
  latestVersion: string;
  minRequiredVersion: string;
  updateUrl: string;
  releaseNotes?: string;
}

/**
 * 獲取當前應用版本信息
 */
export const getCurrentVersion = (): VersionInfo => {
  const appConfig = Constants.expoConfig;
  
  return {
    version: appConfig?.version || '1.0.0',
    buildNumber: appConfig?.ios?.buildNumber || appConfig?.android?.versionCode?.toString() || '1',
    platform: Device.osName?.toLowerCase() === 'ios' ? 'ios' : 'android'
  };
};

/**
 * 從配置中獲取版本檢查API URL
 */
const getVersionCheckApiUrl = (): string => {
  const config = Constants.expoConfig?.extra?.versionCheck;
  return config?.apiUrl || 'https://your-api.com/api/version-check';
};

/**
 * 從服務器檢查版本更新
 * 這裡使用一個簡單的API端點來檢查版本
 * 在實際應用中，您需要替換為您的版本檢查API
 */
export const checkForUpdates = async (): Promise<UpdateInfo> => {
  try {
    // 檢查網絡連接
    const networkState = await Network.getNetworkStateAsync();
    if (!networkState.isConnected) {
      throw new Error('No network connection');
    }

    const currentVersion = getCurrentVersion();
    const apiUrl = getVersionCheckApiUrl();
    
    console.log('Checking for updates:', {
      platform: currentVersion.platform,
      currentVersion: currentVersion.version,
      buildNumber: currentVersion.buildNumber,
      apiUrl
    });

    // 調用版本檢查API
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        platform: currentVersion.platform,
        currentVersion: currentVersion.version,
        buildNumber: currentVersion.buildNumber,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const updateData = await response.json();
    
    const result = {
      isRequired: updateData.isRequired || false,
      isAvailable: updateData.isAvailable || false,
      currentVersion: currentVersion.version,
      latestVersion: updateData.latestVersion || currentVersion.version,
      minRequiredVersion: updateData.minRequiredVersion || currentVersion.version,
      updateUrl: updateData.updateUrl || getDefaultUpdateUrl(currentVersion.platform),
      releaseNotes: updateData.releaseNotes,
    };

    console.log('Update check result:', result);
    return result;
  } catch (error) {
    console.error('Version check failed:', error);
    
    // 返回默認值，不強制更新
    const currentVersion = getCurrentVersion();
    return {
      isRequired: false,
      isAvailable: false,
      currentVersion: currentVersion.version,
      latestVersion: currentVersion.version,
      minRequiredVersion: currentVersion.version,
      updateUrl: getDefaultUpdateUrl(currentVersion.platform),
    };
  }
};

/**
 * 獲取默認更新URL
 */
const getDefaultUpdateUrl = (platform: 'ios' | 'android'): string => {
  if (platform === 'ios') {
    return 'https://apps.apple.com/app/kanakana/id123456789'; // 替換為實際的App Store URL
  } else {
    return 'https://play.google.com/store/apps/details?id=com.kanakana.app'; // 替換為實際的Google Play URL
  }
};

/**
 * 比較版本號
 * 返回：1 (v1 > v2), 0 (v1 = v2), -1 (v1 < v2)
 */
export const compareVersions = (v1: string, v2: string): number => {
  const normalize = (version: string) => {
    return version.split('.').map(num => parseInt(num, 10));
  };

  const v1Parts = normalize(v1);
  const v2Parts = normalize(v2);

  for (let i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++) {
    const v1Part = v1Parts[i] || 0;
    const v2Part = v2Parts[i] || 0;

    if (v1Part > v2Part) return 1;
    if (v1Part < v2Part) return -1;
  }

  return 0;
};

/**
 * 檢查是否需要強制更新
 */
export const isUpdateRequired = (currentVersion: string, minRequiredVersion: string): boolean => {
  return compareVersions(currentVersion, minRequiredVersion) < 0;
}; 