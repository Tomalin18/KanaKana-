module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo'
    ],
    plugins: [
      [
        'babel-plugin-module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.native.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.native.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json'
          ],
          alias: {
            '@': './src',
            '@/components': './src/components',
            '@/screens': './src/screens',
            '@/hooks': './src/hooks',
            '@/store': './src/store',
            '@/utils': './src/utils',
            '@/types': './src/types',
            '@/constants': './src/constants',
            '@/navigation': './src/navigation',
            '@/data': './src/data',
            '@/assets': './src/assets'
          }
        }
      ],
      'react-native-reanimated/plugin'
    ]
  };
}; 