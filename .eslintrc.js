module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:jsx-control-statements/recommended',
  ],
  env: {
    jest: true,
    'jsx-control-statements/jsx-control-statements': true,
  },
  ignorePatterns: ['/coverage/'],
  plugins: ['jsx-control-statements'],
  rules: {
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'react-hooks/exhaustive-deps': 'off',
  },
};
