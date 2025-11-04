module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@components': './src/components',
            '@assets': './assets',
            '@routes': './src/routes',
            '@icons': './assets/icons',
            '@store': './src/store',
            '@screens': './src/screens',
            '@services': './src/services',
            '@hooks': './src/hooks',
            '@navigation': './src/navigation',
            '@atoms': './src/atoms',
            '@features': './src/features',
            '@type': './src/types',
            '@utils': './src/utils', // оставьте только один путь
          },
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.json',
          ],
        }
      ],
      ['@babel/plugin-proposal-optional-chaining'],
      'react-native-reanimated/plugin'
    ],
  };
};