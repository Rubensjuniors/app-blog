import nextJest from 'next/jest.js'

import type { Config } from 'jest'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/config/jest/setup.ts'],
  collectCoverage: true,
  coverageDirectory: './coverage/',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/index.ts',
    '!src/**/*.stories.{ts,tsx}',
    '!src/utils/**',
    '!src/**/mock.{ts,tsx}',
    '!src/middleware.ts',
    '!src/@types/**',
    '!src/constants/**',
    '!src/pages/**',
    '!src/app/**',
    '!src/providers/**',
    '!src/styles/**',
    '!src/scripts/**',
    '!src/types/**',
    '!src/models/**',
    '!src/**/types.ts',
    '!src/**/styles.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  modulePaths: ['<rootDir>/src/', '<rootDir>/config/jest'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  testMatch: [
    '<rootDir>/src/**/*.test.{ts,tsx}',
    '<rootDir>/src/**/*.spec.{ts,tsx}'
  ],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest'
  },
}

export default createJestConfig(config)