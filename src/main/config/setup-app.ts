import Fastify from 'fastify'

import { setupDatabase } from './setup-database'
import { setupRoutes } from './setup-routes'
export const setupApp = async () => {
  const app = Fastify()

  const { sequelize } = setupDatabase()

  await setupRoutes(app)
  return { app, sequelize }
}
