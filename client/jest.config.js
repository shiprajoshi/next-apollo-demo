module.exports = {
    testEnvironment: 'jsdom',
    "collectCoverageFrom": ["**/*.{ts,js}"],
    "coveragePathIgnorePatterns" : [
      "client/.next",
      "jest.config.js",
      "coverage"
    ]
  }