module.exports = {
  textEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  sutupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
