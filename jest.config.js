/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const path = require('path')

module.exports = {
  collectCoverage: true,
  verbose: true,
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  setupFilesAfterEnv: [
    require.resolve('@testing-library/jest-dom/extend-expect'),
    path.resolve(__dirname, './tests/global.ts')
  ],
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsconfig: 'tsconfig.test.json',
      diagnostics: false
    }
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/',
    '/esm/',
    '/lib/',
    '/dist/',
    'package.json',
    '/demo/',
    'package-lock.json'
  ]
  // transform: {
  //   '\\.jsx?$': 'babel-jest',
  // },
  // transformIgnorePatterns: [
  //   '<rootDir>/node_modules/(?!(lodash-es))',
  // ],
}
