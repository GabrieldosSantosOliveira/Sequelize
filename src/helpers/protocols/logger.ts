export interface Logger {
  warn(message: string, obj?: unknown): void
  info(message: string, obj?: unknown): void
  error(message: string, obj?: unknown): void
  debug(message: string, obj?: unknown): void
}
