// 模擬Expo環境中的版本檢查測試
// 這個腳本模擬了在React Native應用中運行時的版本檢查邏輯

// 模擬Expo Constants
const mockConstants = {
  expoConfig: {
    name: 'KanaKana',
    slug: 'kana-tower',
    version: '1.0.0',
    ios: {
      bundleIdentifier: 'com.kanakana.app',
      buildNumber: '1',
      infoPlist: {
        CFBundleShortVersionString: '1.0.0'
      }
    },
    android: {
      package: 'com.kanakana.app',
      versionCode: 1
    },
    extra: {
      versionCheck: {
        enabled: true,
        apiUrl: 'https://neobase.app/v1/workflows/run',
        checkInterval: 3600000
      }
    }
  }
};

// 模擬Device
const mockDevice = {
  osName: 'iOS' // 可以改為 'Android' 來測試Android
};

// 模擬版本檢查邏輯（從src/utils/versionCheck.ts複製）
function getCurrentVersion() {
  const appConfig = mockConstants.expoConfig;
  const platform = mockDevice.osName?.toLowerCase() === 'ios' ? 'ios' : 'android';
  
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
  let nativeVersion;
  let nativeBuildVersion;
  
  if (platform === 'ios') {
    nativeVersion = appConfig?.ios?.infoPlist?.CFBundleShortVersionString;
    nativeBuildVersion = appConfig?.ios?.buildNumber;
  } else {
    nativeVersion = appConfig?.version;
    nativeBuildVersion = appConfig?.android?.versionCode?.toString();
  }
  
  return {
    version,
    buildNumber,
    platform,
    nativeVersion,
    nativeBuildVersion
  };
}

function getDetailedVersionInfo() {
  const appConfig = mockConstants.expoConfig;
  const platform = mockDevice.osName?.toLowerCase() === 'ios' ? 'ios' : 'android';
  
  console.log('📱 詳細版本信息 (模擬Expo環境):');
  console.log('=' .repeat(50));
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
  
  console.log('=' .repeat(50));
}

// 版本比較函數
function compareVersions(v1, v2) {
  const normalize = (version) => {
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
}

// 測試版本檢查API
async function testVersionCheckAPI() {
  console.log('\n🔄 測試版本檢查API...');
  console.log('=' .repeat(50));
  
  try {
    const response = await fetch('https://neobase.app/v1/workflows/run', {
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
    const latestVersion = apiResponse.data?.outputs?.answer;
    const currentVersion = getCurrentVersion();
    
    console.log(`📱 當前版本: ${currentVersion.version}`);
    console.log(`🎯 最新版本: ${latestVersion}`);
    console.log(`🏗️  構建號: ${currentVersion.buildNumber}`);
    console.log(`🖥️  平台: ${currentVersion.platform}`);
    
    // 版本比較
    const comparison = compareVersions(currentVersion.version, latestVersion);
    let status, message;
    
    if (comparison < 0) {
      status = '🔄 需要更新';
      message = '發現新版本，建議更新應用';
    } else if (comparison === 0) {
      status = '✅ 已是最新';
      message = '您正在使用最新版本';
    } else {
      status = '⚠️ 版本異常';
      message = '當前版本高於服務器版本（可能是開發版本）';
    }
    
    console.log(`\n${status}: ${message}`);
    
    return {
      currentVersion: currentVersion.version,
      latestVersion,
      needsUpdate: comparison < 0,
      comparison
    };
    
  } catch (error) {
    console.error('❌ 版本檢查失敗:', error.message);
    return null;
  }
}

// 主函數
async function main() {
  console.log('🚀 Expo版本檢查測試工具\n');
  
  // 顯示詳細版本信息
  getDetailedVersionInfo();
  
  // 測試版本檢查API
  await testVersionCheckAPI();
  
  console.log('\n' + '=' .repeat(50));
  console.log('✨ 測試完成！');
  console.log('\n💡 提示: 在實際應用中，這些信息會通過Expo Constants自動獲取');
}

// 運行測試
main().catch(console.error); 