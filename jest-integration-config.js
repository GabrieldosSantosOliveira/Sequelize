/* eslint-disable @typescript-eslint/no-var-requires */
const config = require('./jest.config')
/** @type {import('ts-jest').JestConfigWithTsJest} */
config.testMatch = ['**/*.test.ts']
module.exports = config
