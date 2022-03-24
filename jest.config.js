module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json'],
  transform: {
    '^.*\\.tsx?$': [
      'jest-chain-transform',
      {
        transformers: ['jest-tsd-transform', 'ts-jest'],
      },
    ],
  },
  testMatch: ['<rootDir>/**/*test.ts'],
};
