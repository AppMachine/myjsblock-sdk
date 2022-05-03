/* eslint-disable */

module.exports = {
  env: {
      browser: true,
      es2021: true
  },
  extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      'airbnb',
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
  },
  plugins: [
      "@typescript-eslint"
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/member-delimiter-style': ['error', {
    multiline: {
        delimiter: 'none',
        requireLast: false,
    },
    }],
    'max-len': ['error', {
      code: 120,
      tabWidth: 2,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreRegExpLiterals: true,
    }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-shadow': 'off',
    'max-len': ['error', {
      code: 120,
      tabWidth: 2,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreRegExpLiterals: true,
    }],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-var-requires': 0,
    'no-unused-vars': 0,
    'no-console': 0,
    'no-trailing-spaces': 0,
    'implicit-arrow-linebreak': 0,
    "import/no-extraneous-dependencies": 0
  },
  ignorePatterns: [
    "dist",
    'vite.config.js',
    '!.test/',
    '*.test.ts',
    'dev'
  ],
}
