const http = require('http');
const url = require('url');

// 模擬版本檢查服務器
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  
  // 設置CORS頭
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  
  if (req.method === 'POST' && parsedUrl.pathname === '/v1/workflows/run') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      try {
        const requestData = JSON.parse(body);
        console.log('收到版本檢查請求:', requestData);
        
        // 從查詢參數或請求體中獲取測試場景
        const testScenario = parsedUrl.query.scenario || 'normal';
        
        let responseData;
        
        switch (testScenario) {
          case 'force_update':
            // 強制更新場景：當前版本 1.0.0，最低要求版本 1.1.0
            responseData = {
              data: {
                outputs: {
                  answer: '1.2.0', // 最新版本
                  minRequiredVersion: '1.1.0', // 最低要求版本
                  isForceUpdate: true
                }
              }
            };
            console.log('🔴 模擬強制更新場景');
            break;
            
          case 'optional_update':
            // 可選更新場景：當前版本 1.0.0，最新版本 1.1.0
            responseData = {
              data: {
                outputs: {
                  answer: '1.1.0', // 最新版本
                  minRequiredVersion: '1.0.0', // 最低要求版本
                  isForceUpdate: false
                }
              }
            };
            console.log('🟡 模擬可選更新場景');
            break;
            
          case 'no_update':
            // 無更新場景：當前版本 1.0.0，最新版本也是 1.0.0
            responseData = {
              data: {
                outputs: {
                  answer: '1.0.0', // 最新版本
                  minRequiredVersion: '1.0.0', // 最低要求版本
                  isForceUpdate: false
                }
              }
            };
            console.log('🟢 模擬無更新場景');
            break;
            
          default:
            // 默認場景：正常檢查
            responseData = {
              data: {
                outputs: {
                  answer: '1.0.1', // 最新版本
                  minRequiredVersion: '1.0.0', // 最低要求版本
                  isForceUpdate: false
                }
              }
            };
            console.log('🔵 模擬正常檢查場景');
        }
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(responseData));
        
      } catch (error) {
        console.error('處理請求時出錯:', error);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid request' }));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`🚀 版本檢查測試服務器運行在 http://localhost:${PORT}`);
  console.log('');
  console.log('📋 可用的測試場景:');
  console.log('  🔴 強制更新: http://localhost:3001/v1/workflows/run?scenario=force_update');
  console.log('  🟡 可選更新: http://localhost:3001/v1/workflows/run?scenario=optional_update');
  console.log('  🟢 無更新:   http://localhost:3001/v1/workflows/run?scenario=no_update');
  console.log('  🔵 正常檢查: http://localhost:3001/v1/workflows/run');
  console.log('');
  console.log('💡 使用方法:');
  console.log('  1. 修改 src/utils/versionCheck.ts 中的 API URL 為 http://localhost:3001/v1/workflows/run');
  console.log('  2. 重啟 Expo 開發服務器');
  console.log('  3. 在應用中測試不同的更新場景');
  console.log('');
  console.log('按 Ctrl+C 停止服務器');
});

server.on('error', (error) => {
  console.error('服務器錯誤:', error);
}); 