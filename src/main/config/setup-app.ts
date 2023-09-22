import fastify from 'fastify'

import { env } from './env'
import { setupDatabase } from './setup-database'
import { setupRoutes } from './setup-routes'
export const setupApp = async () => {
  const app = await fastify({
    logger: env.NODE_DEV,
  })
  setupDatabase()
  await setupRoutes(app)
  return { app }
}
