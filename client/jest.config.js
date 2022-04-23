module.exports = {
    testEnvironment: 'jsdom',
    "collectCoverageFrom": ["**/{components,lib,pages}/**/*.{ts,js}"],
    "coveragePathIgnorePatterns" : [
      "client/.next",
    ]
  }