module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/configs/jest/setup-tests.ts'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/configs/jest/mocks/fileMock.ts',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
  }
}
