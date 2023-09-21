import fastify from 'fastify'

import { setupDatabase } from './setup-database'
import { setupRoutes } from './setup-routes'
export const setupApp = async () => {
  const app = await fastify({
    logger: true,
  })
  setupDatabase()
  await setupRoutes(app)
  return { app }
}
