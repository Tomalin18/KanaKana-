const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// 中間件
app.use(cors());
app.use(express.json());

// 版本配置
const VERSION_CONFIG = {
  ios: {
    latestVersion: '1.1.0',
    minRequiredVersion: '1.0.0',
    buildNumber: '2',
    updateUrl: 'https://apps.apple.com/app/kanakana/id123456789',
    releaseNotes: '• 修復已知問題\n• 提升性能\n• 新增功能'
  },
  android: {
    latestVersion: '1.1.0',
    minRequiredVersion: '1.0.0',
    versionCode: 2,
    updateUrl: 'https://play.google.com/store/apps/details?id=com.kanakana.app',
    releaseNotes: '• 修復已知問題\n• 提升性能\n• 新增功能'
  }
};

// 版本檢查API
app.post('/api/version-check', (req, res) => {
  try {
    const { platform, currentVersion, buildNumber } = req.body;
    
    console.log('Version check request:', { platform, currentVersion, buildNumber });
    
    if (!platform || !currentVersion) {
      return res.status(400).json({
        error: 'Missing required parameters'
      });
    }
    
    const config = VERSION_CONFIG[platform];
    if (!config) {
      return res.status(400).json({
        error: 'Unsupported platform'
      });
    }
    
    // 比較版本
    const isUpdateAvailable = compareVersions(currentVersion, config.latestVersion) < 0;
    const isUpdateRequired = compareVersions(currentVersion, config.minRequiredVersion) < 0;
    
    const response = {
      isAvailable: isUpdateAvailable,
      isRequired: isUpdateRequired,
      latestVersion: config.latestVersion,
      minRequiredVersion: config.minRequiredVersion,
      updateUrl: config.updateUrl,
      releaseNotes: config.releaseNotes,
      currentVersion: currentVersion
    };
    
    console.log('Version check response:', response);
    
    res.json(response);
  } catch (error) {
    console.error('Version check error:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});

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

// 健康檢查
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// 啟動服務器
app.listen(PORT, () => {
  console.log(`Version check server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`Version check: http://localhost:${PORT}/api/version-check`);
});

module.exports = app; 