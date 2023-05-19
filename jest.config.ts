import { Config } from 'jest'
const config: Config = {
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['**/src/**/*.ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  testEnvironment: 'node',
}
export default config
