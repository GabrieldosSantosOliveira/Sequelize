import express, { urlencoded } from 'express'

import { jsonParser } from '../middlewares/json-parser'
import { setupDatabase } from './setup-database'
import { setupRoutes } from './setup-routes'
export const setupApp = () => {
  const app = express()
  app.use(jsonParser)
  app.use(
    urlencoded({
      extended: true,
    }),
  )
  setupDatabase()
  setupRoutes(app)
  return { app }
}
