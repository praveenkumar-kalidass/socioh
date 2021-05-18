module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'jsx-control-statements',
    [
      'module-resolver',
      {
        root: './src',
        alias: {
          asset: './src/asset',
          component: './src/component',
          constant: './src/constant',
          helper: './src/helper',
          hook: './src/hook',
          navigation: './src/navigation',
          screen: './src/screen',
          translation: './src/translation',
        },
        transformFunctions: ['jest.mock'],
      },
    ],
  ],
};
