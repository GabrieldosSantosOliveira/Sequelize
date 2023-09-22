import { LoggerPino } from '@/infra/logger/logger'

export const makeLogger = () => new LoggerPino()
