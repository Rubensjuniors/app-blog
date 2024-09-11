import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './'
})

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/config/.jest/setup.ts'],
  collectCoverage: true,
  coverageDirectory: './coverage/',
  coverageProvider: 'v8',
  testPathIgnorePatterns: ['/node_modules', './next/'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/config/.jest'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}', '<rootDir>/src/**/*.spec.{ts,tsx}'],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
    '^.+\\.(mjs|js)$': ['@swc/jest'],
  },

  testEnvironment: 'jest-environment-jsdom',
  coverageThreshold: {
    global: {
      statements: 60,
      branches: 40,
      functions: 38,
      lines: 61
    }
  }
}

export default createJestConfig(config)
