module.exports = {
    parser: "babel-eslint",
    env: {
      es6: true,
      node: true,
      browser: true
    },
    extends: [
      "airbnb",
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
      'arrow-parens': ['error', 'as-needed'],
      'react/prop-types': 0
    },
  };
