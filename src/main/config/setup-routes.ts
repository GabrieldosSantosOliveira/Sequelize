import { FastifyInstance } from 'fastify'
import fs from 'fs'
import { resolve } from 'path'
export const setupRoutes = async (fastify: FastifyInstance) => {
  const filenames = fs.readdirSync(resolve(__dirname, '..', 'routes'))
  for (const file of filenames) {
    const route = await import(`../routes/${file}`)
    route.default(fastify)
  }
}
