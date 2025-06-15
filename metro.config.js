const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// 添加別名支援
config.resolver.alias = {
  '@': path.resolve(__dirname, 'src'),
  '@/components': path.resolve(__dirname, 'src/components'),
  '@/screens': path.resolve(__dirname, 'src/screens'),
  '@/hooks': path.resolve(__dirname, 'src/hooks'),
  '@/services': path.resolve(__dirname, 'src/services'),
  '@/store': path.resolve(__dirname, 'src/store'),
  '@/utils': path.resolve(__dirname, 'src/utils'),
  '@/types': path.resolve(__dirname, 'src/types'),
  '@/constants': path.resolve(__dirname, 'src/constants'),
  '@/navigation': path.resolve(__dirname, 'src/navigation'),
  '@/data': path.resolve(__dirname, 'src/data'),
  '@/assets': path.resolve(__dirname, 'src/assets'),
};

// 優化JavaScript轉換
config.transformer.minifierConfig = {
  keep_fnames: true,
  mangle: {
    keep_fnames: true,
  },
};

// 添加額外的文件擴展名
config.resolver.sourceExts = [
  ...config.resolver.sourceExts,
  'ts',
  'tsx',
  'js',
  'jsx',
  'json',
];

module.exports = config; 