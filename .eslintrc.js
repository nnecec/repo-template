module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:unicorn/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  ignorePatterns: [
    'dist',
    'coverage',
    'node_modules',
    '.yarn',
    '.changeset',
    '.husky'
  ],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: false,
        variables: false,
        typedefs: false
      }
    ],
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-node-protocol': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
