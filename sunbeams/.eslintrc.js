module.exports = {
  extends: ['@cascadeplus'],
  ignorePatterns: ['**/dist/**/*', '**/node_modules/**/*', '**/coverage/**/*', '.eslintrc.js'],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname
  }
}
