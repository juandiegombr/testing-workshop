module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    "**/__tests__/*.js",
    "**/__tests__/**/*.js",
  ],
  setupFilesAfterEnv: [
    '<rootDir>/test/setup.js',
  ]
}
