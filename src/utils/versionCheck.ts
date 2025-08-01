import Constants from 'expo-constants';
import * as Device from 'expo-device';
import * as Network from 'expo-network';

export interface VersionInfo {
  version: string;
  buildNumber: string;
  platform: 'ios' | 'android';
  nativeVersion?: string;
  nativeBuildVersion?: string;
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

// 測試模式配置
const TEST_MODE = __DEV__ && false; // 在開發環境中啟用測試模式
const TEST_SCENARIO: 'force_update' | 'optional_update' | 'no_update' | 'normal' = 'force_update'; // 可選值: 'force_update', 'optional_update', 'no_update', 'normal'

/**
 * 獲取當前應用版本信息
 * 使用Expo內建的方式獲取版本號
 */
export const getCurrentVersion = (): VersionInfo => {
  const appConfig = Constants.expoConfig;
  const platform = Device.osName?.toLowerCase() === 'ios' ? 'ios' : 'android';
  
  // 獲取基本版本信息
  const version = appConfig?.version || '1.0.0';
  
  // 獲取構建號/版本代碼
  let buildNumber = '1';
  if (platform === 'ios') {
    buildNumber = appConfig?.ios?.buildNumber || '1';
  } else {
    buildNumber = appConfig?.android?.versionCode?.toString() || '1';
  }
  
  // 獲取原生版本信息
  let nativeVersion: string | undefined;
  let nativeBuildVersion: string | undefined;
  
  if (platform === 'ios') {
    nativeVersion = appConfig?.ios?.infoPlist?.CFBundleShortVersionString;
    nativeBuildVersion = appConfig?.ios?.buildNumber;
  } else {
    // Android使用versionCode作為版本代碼
    nativeVersion = appConfig?.version; // Android通常使用expo.version
    nativeBuildVersion = appConfig?.android?.versionCode?.toString();
  }
  
  return {
    version,
    buildNumber,
    platform,
    nativeVersion,
    nativeBuildVersion
  };
};

/**
 * 獲取詳細的版本信息（用於調試和日誌）
 */
export const getDetailedVersionInfo = () => {
  const appConfig = Constants.expoConfig;
  const platform = Device.osName?.toLowerCase() === 'ios' ? 'ios' : 'android';
  
  console.log('📱 詳細版本信息:');
  console.log('=' .repeat(40));
  console.log(`📋 應用名稱: ${appConfig?.name || 'Unknown'}`);
  console.log(`🏷️  應用標識: ${appConfig?.slug || 'Unknown'}`);
  console.log(`📦 版本號: ${appConfig?.version || 'Unknown'}`);
  console.log(`🖥️  平台: ${platform}`);
  
  if (platform === 'ios') {
    console.log('\n🍎 iOS 版本信息:');
    console.log(`   Bundle ID: ${appConfig?.ios?.bundleIdentifier || 'Unknown'}`);
    console.log(`   版本號: ${appConfig?.ios?.infoPlist?.CFBundleShortVersionString || appConfig?.version || 'Unknown'}`);
    console.log(`   構建號: ${appConfig?.ios?.buildNumber || 'Unknown'}`);
  } else {
    console.log('\n🤖 Android 版本信息:');
    console.log(`   Package: ${appConfig?.android?.package || 'Unknown'}`);
    console.log(`   版本號: ${appConfig?.version || 'Unknown'}`);
    console.log(`   版本代碼: ${appConfig?.android?.versionCode || 'Unknown'}`);
  }
  
  // 版本檢查配置
  const versionCheckConfig = appConfig?.extra?.versionCheck;
  if (versionCheckConfig) {
    console.log('\n🔧 版本檢查配置:');
    console.log(`   API端點: ${versionCheckConfig.apiUrl || 'Unknown'}`);
    console.log(`   啟用狀態: ${versionCheckConfig.enabled ? '✅ 已啟用' : '❌ 已禁用'}`);
    if (versionCheckConfig.checkInterval) {
      console.log(`   檢查間隔: ${versionCheckConfig.checkInterval / 1000 / 60} 分鐘`);
    }
  }
  
  console.log('=' .repeat(40));
};

/**
 * 從配置中獲取版本檢查API URL
 */
const getVersionCheckApiUrl = (): string => {
  const config = Constants.expoConfig?.extra?.versionCheck;
  return config?.apiUrl || 'https://neobase.app/v1/workflows/run';
};

/**
 * 測試模式下的版本檢查模擬
 */
const getTestUpdateInfo = (currentVersion: string): UpdateInfo => {
  console.log(`🧪 測試模式 - 場景: ${TEST_SCENARIO}`);
  
  switch (TEST_SCENARIO) {
    case 'force_update':
      // 強制更新場景：當前版本 1.0.0，最低要求版本 1.1.0
      return {
        isRequired: true,
        isAvailable: true,
        currentVersion: currentVersion,
        latestVersion: '1.2.0',
        minRequiredVersion: '1.1.0',
        updateUrl: getDefaultUpdateUrl(Device.osName?.toLowerCase() === 'ios' ? 'ios' : 'android'),
        releaseNotes: '• 🔴 重要安全更新\n• 修復已知問題\n• 提升性能\n• 新增功能',
      };
      
    case 'optional_update':
      // 可選更新場景：當前版本 1.0.0，最新版本 1.1.0
      return {
        isRequired: false,
        isAvailable: true,
        currentVersion: currentVersion,
        latestVersion: '1.1.0',
        minRequiredVersion: '1.0.0',
        updateUrl: getDefaultUpdateUrl(Device.osName?.toLowerCase() === 'ios' ? 'ios' : 'android'),
        releaseNotes: '• 🟡 可選更新\n• 修復已知問題\n• 提升性能\n• 新增功能',
      };
      
    case 'no_update':
      // 無更新場景：當前版本 1.0.0，最新版本也是 1.0.0
      return {
        isRequired: false,
        isAvailable: false,
        currentVersion: currentVersion,
        latestVersion: '1.0.0',
        minRequiredVersion: '1.0.0',
        updateUrl: getDefaultUpdateUrl(Device.osName?.toLowerCase() === 'ios' ? 'ios' : 'android'),
        releaseNotes: '• 🟢 已是最新版本',
      };
      
    default:
      // 正常檢查場景：當前版本 1.0.0，最新版本 1.0.1
      return {
        isRequired: false,
        isAvailable: true,
        currentVersion: currentVersion,
        latestVersion: '1.0.1',
        minRequiredVersion: '1.0.0',
        updateUrl: getDefaultUpdateUrl(Device.osName?.toLowerCase() === 'ios' ? 'ios' : 'android'),
        releaseNotes: '• 🔵 正常更新\n• 修復已知問題\n• 提升性能',
      };
  }
};

/**
 * 從服務器檢查版本更新
 * 使用真實的版本號API
 */
export const checkForUpdates = async (): Promise<UpdateInfo> => {
  try {
    // 測試模式：直接返回模擬數據
    if (TEST_MODE) {
      const currentVersion = getCurrentVersion();
      console.log('🧪 測試模式 - 跳過網絡請求');
      const testResult = getTestUpdateInfo(currentVersion.version);
      console.log('測試結果:', testResult);
      return testResult;
    }

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
      nativeVersion: currentVersion.nativeVersion,
      nativeBuildVersion: currentVersion.nativeBuildVersion,
      apiUrl
    });

    // 調用版本檢查API
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer app-uoOi4HzYwlp5PWmrgb583ZWJ',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: {},
        response_mode: "blocking",
        user: "kana"
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const apiResponse = await response.json();
    
    console.log('API 響應:', JSON.stringify(apiResponse, null, 2));
    
    // 檢查 API 響應狀態
    if (apiResponse.data?.status !== 'succeeded') {
      throw new Error(`API 響應狀態錯誤: ${apiResponse.data?.status}`);
    }
    
    // 從API響應中提取版本號
    const latestVersion = apiResponse.data?.outputs?.answer || currentVersion.version;
    
    // 強制更新策略：只要有新版本就強制更新
    // 這樣確保用戶始終使用最新版本
    const minRequiredVersion = latestVersion;
    
    // 比較版本
    const isUpdateAvailable = compareVersions(currentVersion.version, latestVersion) < 0;
    const isUpdateRequired = compareVersions(currentVersion.version, minRequiredVersion) < 0;

    const result = {
      isRequired: isUpdateRequired,
      isAvailable: isUpdateAvailable,
      currentVersion: currentVersion.version,
      latestVersion: latestVersion,
      minRequiredVersion: minRequiredVersion,
      updateUrl: getDefaultUpdateUrl(currentVersion.platform),
      releaseNotes: '• 修復已知問題\n• 提升性能\n• 新增功能',
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
    return 'https://apps.apple.com/jp/app/kanakana-%E3%81%8B%E3%81%AA%E3%82%AB%E3%83%8A/id6748865873'; // 您的真實 App Store 連結
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