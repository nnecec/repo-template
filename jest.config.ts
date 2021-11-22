import type { Config } from '@jest/types'

export default async (): Promise<Config.InitialOptions> => ({
  collectCoverage: true,
  verbose: true,
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  setupFilesAfterEnv: [
    require.resolve('@testing-library/jest-dom/extend-expect')
  ],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest'
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/',
    '/dist/'
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules'
  ]
})
