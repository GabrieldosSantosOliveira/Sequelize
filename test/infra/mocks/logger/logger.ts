/* eslint-disable @typescript-eslint/no-empty-function */
import { Logger } from '@/helpers/protocols/logger'

export class LoggerMock implements Logger {
  warn(): void {}

  info(): void {}

  error(): void {}

  debug(): void {}
}
export const makeLoggerMock = () => {
  const loggerMock = new LoggerMock()
  return { loggerMock }
}
