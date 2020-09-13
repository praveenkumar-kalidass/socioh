module.exports = {
  preset: 'react-native',
  setupFiles: ['./config/jestSetup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)',
  ],
};
