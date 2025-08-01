// 快速測試腳本 - 幫助非技術用戶了解測試結果
console.log('🚀 KanaKana 強制更新功能快速測試\n');

console.log('📋 測試檢查清單：');
console.log('=' .repeat(40));

// 檢查API
async function checkAPI() {
  console.log('1️⃣ 檢查版本檢查API...');
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

    if (response.ok) {
      const data = await response.json();
      const latestVersion = data.data?.outputs?.answer;
      console.log(`   ✅ API正常工作`);
      console.log(`   📱 最新版本: ${latestVersion}`);
      return true;
    } else {
      console.log(`   ❌ API錯誤: ${response.status}`);
      return false;
    }
  } catch (error) {
    console.log(`   ❌ API連接失敗: ${error.message}`);
    return false;
  }
}

// 檢查版本比較
function checkVersionComparison() {
  console.log('\n2️⃣ 檢查版本比較邏輯...');
  
  const testCases = [
    { current: '1.0.0', latest: '1.1.0', shouldUpdate: true },
    { current: '1.1.0', latest: '1.1.0', shouldUpdate: false },
    { current: '0.9.0', latest: '1.1.0', shouldUpdate: true }
  ];
  
  let passed = 0;
  for (const test of testCases) {
    const needsUpdate = compareVersions(test.current, test.latest) < 0;
    if (needsUpdate === test.shouldUpdate) {
      passed++;
    }
  }
  
  console.log(`   ✅ 版本比較測試: ${passed}/${testCases.length} 通過`);
  return passed === testCases.length;
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

// 檢查配置文件
function checkConfig() {
  console.log('\n3️⃣ 檢查配置文件...');
  
  try {
    const fs = require('fs');
    const path = require('path');
    
    const appJsonPath = path.join(__dirname, '..', 'app.json');
    const appJson = JSON.parse(fs.readFileSync(appJsonPath, 'utf8'));
    
    const version = appJson.expo.version;
    const apiUrl = appJson.expo.extra?.versionCheck?.apiUrl;
    const enabled = appJson.expo.extra?.versionCheck?.enabled;
    
    console.log(`   📱 當前版本: ${version}`);
    console.log(`   🌐 API端點: ${apiUrl}`);
    console.log(`   ✅ 功能啟用: ${enabled ? '是' : '否'}`);
    
    return true;
  } catch (error) {
    console.log(`   ❌ 配置文件錯誤: ${error.message}`);
    return false;
  }
}

// 主測試函數
async function runQuickTest() {
  const results = [];
  
  // 運行所有測試
  results.push(await checkAPI());
  results.push(checkVersionComparison());
  results.push(checkConfig());
  
  // 總結
  console.log('\n' + '=' .repeat(40));
  console.log('📊 測試結果總結:');
  
  const passed = results.filter(r => r).length;
  const total = results.length;
  
  if (passed === total) {
    console.log('🎉 所有測試通過！強制更新功能準備就緒');
    console.log('\n💡 下一步：');
    console.log('1. 在手機上安裝Expo Go');
    console.log('2. 掃描QR碼打開應用');
    console.log('3. 觀察是否顯示更新提示');
    console.log('4. 測試更新按鈕功能');
  } else {
    console.log(`⚠️  部分測試失敗 (${passed}/${total})`);
    console.log('請聯繫工程師檢查問題');
  }
  
  console.log('\n📱 實際測試步驟：');
  console.log('1. 確保手機和電腦在同一WiFi網絡');
  console.log('2. 在手機上打開Expo Go應用');
  console.log('3. 掃描電腦上顯示的QR碼');
  console.log('4. 等待應用加載完成');
  console.log('5. 觀察是否出現更新提示界面');
  console.log('6. 點擊"立即更新"測試跳轉功能');
}

// 運行測試
runQuickTest().catch(console.error); 