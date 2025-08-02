// 測試不同的版本更新場景
const scenarios = [
  {
    name: '場景1: 當前版本低於最新版本 (應該提示更新)',
    currentVersion: '1.0.0',
    latestVersion: '1.1.0',
    expectedResult: '需要更新'
  },
  {
    name: '場景2: 當前版本等於最新版本 (不需要更新)',
    currentVersion: '1.1.0',
    latestVersion: '1.1.0',
    expectedResult: '已是最新'
  },
  {
    name: '場景3: 當前版本高於最新版本 (開發版本)',
    currentVersion: '1.2.0',
    latestVersion: '1.1.0',
    expectedResult: '版本異常'
  },
  {
    name: '場景4: 強制更新測試 (當前版本低於最低要求)',
    currentVersion: '0.9.0',
    latestVersion: '1.1.0',
    minRequiredVersion: '1.0.0',
    expectedResult: '強制更新'
  }
];

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

// 測試單個場景
function testScenario(scenario) {
  console.log(`\n📋 ${scenario.name}`);
  console.log('-'.repeat(50));
  
  const comparison = compareVersions(scenario.currentVersion, scenario.latestVersion);
  const minRequiredVersion = scenario.minRequiredVersion || scenario.currentVersion;
  const isUpdateRequired = compareVersions(scenario.currentVersion, minRequiredVersion) < 0;
  
  let actualResult;
  if (isUpdateRequired && scenario.minRequiredVersion) {
    actualResult = '強制更新';
  } else if (comparison < 0) {
    actualResult = '需要更新';
  } else if (comparison === 0) {
    actualResult = '已是最新';
  } else {
    actualResult = '版本異常';
  }
  
  const passed = actualResult === scenario.expectedResult;
  const status = passed ? '✅ 通過' : '❌ 失敗';
  
  console.log(`📱 當前版本: ${scenario.currentVersion}`);
  console.log(`🎯 最新版本: ${scenario.latestVersion}`);
  if (scenario.minRequiredVersion) {
    console.log(`⚠️  最低要求版本: ${scenario.minRequiredVersion}`);
  }
  console.log(`🔄 版本比較結果: ${comparison < 0 ? '需要更新' : comparison === 0 ? '版本相同' : '版本異常'}`);
  console.log(`💡 強制更新: ${isUpdateRequired ? '是' : '否'}`);
  console.log(`📊 預期結果: ${scenario.expectedResult}`);
  console.log(`📊 實際結果: ${actualResult}`);
  console.log(`狀態: ${status}`);
  
  return passed;
}

// 測試真實API
async function testRealAPI() {
  console.log('\n🌐 測試真實API...');
  console.log('='.repeat(50));
  
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
    
    console.log(`✅ API調用成功`);
    console.log(`🎯 服務器返回的最新版本: ${latestVersion}`);
    console.log(`📋 完整響應:`, JSON.stringify(apiResponse, null, 2));
    
    return latestVersion;
  } catch (error) {
    console.error('❌ API測試失敗:', error.message);
    return null;
  }
}

// 模擬應用內版本檢查
function simulateAppVersionCheck(currentVersion, latestVersion) {
  console.log('\n📱 模擬應用內版本檢查...');
  console.log('='.repeat(50));
  
  const comparison = compareVersions(currentVersion, latestVersion);
  const isUpdateAvailable = comparison < 0;
  const isUpdateRequired = false; // 默認不強制更新
  
  const result = {
    isRequired: isUpdateRequired,
    isAvailable: isUpdateAvailable,
    currentVersion: currentVersion,
    latestVersion: latestVersion,
    minRequiredVersion: currentVersion,
    updateUrl: 'https://apps.apple.com/app/kanakana/id123456789',
    releaseNotes: '• 修復已知問題\n• 提升性能\n• 新增功能',
  };
  
  console.log('📊 版本檢查結果:');
  console.log(JSON.stringify(result, null, 2));
  
  if (isUpdateAvailable) {
    console.log('💡 用戶會看到更新提示');
  } else if (isUpdateRequired) {
    console.log('⚠️  用戶會看到強制更新提示');
  } else {
    console.log('✅ 用戶不會看到更新提示');
  }
  
  return result;
}

// 主函數
async function main() {
  console.log('🚀 強制更新功能測試工具\n');
  
  // 測試場景
  console.log('🧪 測試版本比較場景...');
  let passedTests = 0;
  let totalTests = scenarios.length;
  
  for (const scenario of scenarios) {
    if (testScenario(scenario)) {
      passedTests++;
    }
  }
  
  console.log(`\n📊 場景測試結果: ${passedTests}/${totalTests} 通過`);
  
  // 測試真實API
  const latestVersion = await testRealAPI();
  
  if (latestVersion) {
    // 模擬不同當前版本的應用內檢查
    const testVersions = ['1.0.0', '1.1.0', '0.9.0'];
    
    for (const testVersion of testVersions) {
      simulateAppVersionCheck(testVersion, latestVersion);
    }
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('✨ 測試完成！');
  console.log('\n💡 建議:');
  console.log('1. 在開發環境中測試不同版本號');
  console.log('2. 使用Expo Go測試實際的更新提示界面');
  console.log('3. 測試網絡錯誤和離線情況');
  console.log('4. 測試應用商店跳轉功能');
}

// 運行測試
main().catch(console.error); 