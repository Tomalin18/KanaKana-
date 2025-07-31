// 使用內建的fetch (Node.js 18+)
async function testVersionCheck() {
  console.log('🧪 測試版本檢查功能...\n');

  const testCases = [
    {
      name: '測試1: 當前版本低於最低要求版本 (應該強制更新)',
      data: { platform: 'ios', currentVersion: '1.0.0', buildNumber: '1' },
      expectedRequired: true
    },
    {
      name: '測試2: 當前版本等於最低要求版本 (不應該強制更新)',
      data: { platform: 'ios', currentVersion: '1.0.1', buildNumber: '1' },
      expectedRequired: false
    },
    {
      name: '測試3: 當前版本高於最低要求版本 (不應該強制更新)',
      data: { platform: 'ios', currentVersion: '1.1.0', buildNumber: '1' },
      expectedRequired: false
    },
    {
      name: '測試4: Android平台測試',
      data: { platform: 'android', currentVersion: '1.0.0', buildNumber: '1' },
      expectedRequired: true
    }
  ];

  for (const testCase of testCases) {
    console.log(`📋 ${testCase.name}`);
    
    try {
      const response = await fetch('http://localhost:3000/api/version-check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testCase.data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      const passed = result.isRequired === testCase.expectedRequired;
      const status = passed ? '✅ 通過' : '❌ 失敗';
      
      console.log(`   狀態: ${status}`);
      console.log(`   當前版本: ${result.currentVersion}`);
      console.log(`   最低要求版本: ${result.minRequiredVersion}`);
      console.log(`   最新版本: ${result.latestVersion}`);
      console.log(`   需要強制更新: ${result.isRequired}`);
      console.log(`   有更新可用: ${result.isAvailable}`);
      console.log(`   更新URL: ${result.updateUrl}`);
      console.log(`   更新說明: ${result.releaseNotes ? result.releaseNotes.split('\n')[0] + '...' : '無'}`);
      console.log('');
      
    } catch (error) {
      console.log(`   ❌ 錯誤: ${error.message}\n`);
    }
  }

  console.log('🎉 測試完成！');
}

// 檢查服務器是否運行
async function checkServer() {
  try {
    const response = await fetch('http://localhost:3000/health');
    if (response.ok) {
      console.log('✅ 版本檢查服務器正在運行\n');
      return true;
    }
  } catch (error) {
    console.log('❌ 版本檢查服務器未運行');
    console.log('請先啟動服務器: cd scripts && node version-check-server.js\n');
    return false;
  }
}

async function main() {
  const serverRunning = await checkServer();
  if (serverRunning) {
    await testVersionCheck();
  }
}

main().catch(console.error); 