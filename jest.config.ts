import { Config } from '@jest/types'

export default async (): Promise<Config.InitialOptions> => ({
  collectCoverage: true,
  verbose: true,
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  setupFilesAfterEnv: [require.resolve('@testing-library/jest-dom')],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  coveragePathIgnorePatterns: ['/node_modules/', '/__tests__/', '/dist/'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules']
})
