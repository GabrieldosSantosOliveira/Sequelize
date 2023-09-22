import { Logger } from '@/helpers/protocols/logger'
import pino from 'pino'
const logger = pino({
  transport: {
    target: 'pino-pretty',
  },
})
export class LoggerPino implements Logger {
  warn(message: string, obj?: unknown): void {
    const date = new Date(Date.now())
    logger.warn(obj, `${date.toISOString()}  ${message}`)
  }

  info(message: string, obj?: unknown): void {
    const date = new Date(Date.now())
    logger.info(obj, `${date.toISOString()}  ${message}`)
  }

  error(message: string, obj?: unknown): void {
    const date = new Date(Date.now())
    logger.error(obj, `${date.toISOString()}  ${message}`)
  }

  debug(message: string, obj?: unknown): void {
    const date = new Date(Date.now())
    logger.debug(obj, `${date.toISOString()}  ${message}`)
  }
}
