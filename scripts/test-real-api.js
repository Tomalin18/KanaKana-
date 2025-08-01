// 測試真實的版本號API
async function testRealVersionAPI() {
  console.log('🧪 測試真實版本號API...\n');

  try {
    console.log('📡 調用API: https://neobase.app/v1/workflows/run');
    
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
    
    console.log('✅ API調用成功！');
    console.log('📋 響應數據:');
    console.log(JSON.stringify(apiResponse, null, 2));
    
    // 提取版本號
    const latestVersion = apiResponse.data?.outputs?.answer;
    console.log(`\n🎯 最新版本號: ${latestVersion}`);
    
    // 從app.json獲取當前版本號（用於測試）
    const currentVersion = getCurrentAppVersion();
    console.log(`📱 當前應用版本: ${currentVersion}`);
    
    // 測試版本比較
    const isUpdateAvailable = compareVersions(currentVersion, latestVersion) < 0;
    
    console.log(`🔄 有更新可用: ${isUpdateAvailable ? '是' : '否'}`);
    
    if (isUpdateAvailable) {
      console.log('💡 用戶需要更新應用');
    } else {
      console.log('✅ 用戶已使用最新版本');
    }
    
  } catch (error) {
    console.error('❌ API測試失敗:', error.message);
  }
}

// 從app.json獲取當前版本號（僅用於測試腳本）
function getCurrentAppVersion() {
  try {
    // 讀取app.json文件
    const fs = require('fs');
    const path = require('path');
    
    const appJsonPath = path.join(__dirname, '..', 'app.json');
    const appJson = JSON.parse(fs.readFileSync(appJsonPath, 'utf8'));
    
    // 獲取版本號
    const version = appJson.expo.version;
    console.log(`📋 從app.json讀取版本號: ${version}`);
    
    return version;
  } catch (error) {
    console.warn('⚠️ 無法讀取app.json，使用默認版本號1.0.0');
    return '1.0.0';
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

// 運行測試
testRealVersionAPI().catch(console.error); 