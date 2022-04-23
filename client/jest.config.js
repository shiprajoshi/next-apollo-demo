module.exports = {
    testEnvironment: 'jsdom',
    collectCoverage: true,
    "collectCoverageFrom": ["**/*.{ts,js}"],
    "coveragePathIgnorePatterns" : [
      "client/.next",
      "jest.config.js",
      "coverage"
    ]
  }