// 獲取完整的版本信息
function getVersionInfo() {
  try {
    const fs = require('fs');
    const path = require('path');
    
    const appJsonPath = path.join(__dirname, '..', 'app.json');
    const appJson = JSON.parse(fs.readFileSync(appJsonPath, 'utf8'));
    
    const expoConfig = appJson.expo;
    
    console.log('📱 KanaKana 版本信息');
    console.log('=' .repeat(40));
    
    // 基本信息
    console.log(`📋 應用名稱: ${expoConfig.name}`);
    console.log(`🏷️  應用標識: ${expoConfig.slug}`);
    console.log(`📦 版本號: ${expoConfig.version}`);
    
    // iOS版本信息
    if (expoConfig.ios) {
      console.log('\n🍎 iOS 版本信息:');
      console.log(`   Bundle ID: ${expoConfig.ios.bundleIdentifier}`);
      console.log(`   版本號: ${expoConfig.ios.infoPlist?.CFBundleShortVersionString || expoConfig.version}`);
      console.log(`   構建號: ${expoConfig.ios.buildNumber || '1'}`);
    }
    
    // Android版本信息
    if (expoConfig.android) {
      console.log('\n🤖 Android 版本信息:');
      console.log(`   Package: ${expoConfig.android.package}`);
      console.log(`   版本號: ${expoConfig.android.versionName || expoConfig.version}`);
      console.log(`   版本代碼: ${expoConfig.android.versionCode || '1'}`);
    }
    
    // 版本檢查配置
    if (expoConfig.extra?.versionCheck) {
      console.log('\n🔧 版本檢查配置:');
      console.log(`   API端點: ${expoConfig.extra.versionCheck.apiUrl}`);
      console.log(`   啟用狀態: ${expoConfig.extra.versionCheck.enabled ? '✅ 已啟用' : '❌ 已禁用'}`);
      console.log(`   檢查間隔: ${expoConfig.extra.versionCheck.checkInterval / 1000 / 60} 分鐘`);
    }
    
    return {
      version: expoConfig.version,
      ios: expoConfig.ios,
      android: expoConfig.android,
      versionCheck: expoConfig.extra?.versionCheck
    };
    
  } catch (error) {
    console.error('❌ 無法讀取版本信息:', error.message);
    return null;
  }
}

// 檢查版本更新
async function checkForUpdates() {
  console.log('\n🔄 檢查版本更新...');
  console.log('=' .repeat(40));
  
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
    const currentVersion = getVersionInfo()?.version;
    
    console.log(`📱 當前版本: ${currentVersion}`);
    console.log(`🎯 最新版本: ${latestVersion}`);
    
    // 版本比較
    const comparison = compareVersions(currentVersion, latestVersion);
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
      currentVersion,
      latestVersion,
      needsUpdate: comparison < 0,
      comparison
    };
    
  } catch (error) {
    console.error('❌ 版本檢查失敗:', error.message);
    return null;
  }
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

// 主函數
async function main() {
  console.log('🚀 KanaKana 版本管理工具\n');
  
  // 獲取版本信息
  const versionInfo = getVersionInfo();
  
  if (versionInfo) {
    // 檢查更新
    await checkForUpdates();
    
    console.log('\n' + '=' .repeat(40));
    console.log('✨ 版本檢查完成！');
  }
}

// 運行主函數
main().catch(console.error); 