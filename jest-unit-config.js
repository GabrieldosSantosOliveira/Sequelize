const config = require('./jest.config')
/** @type {import('ts-jest').JestConfigWithTsJest} */
config.testMatch = ['**/*.spec.ts']
module.exports = config
