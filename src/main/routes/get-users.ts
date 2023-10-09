import { FastifyInstance } from 'fastify'

import { makeFastifyRouterAdapter } from '../adapters/make-fastify-router-adapter'
import { makeGetUsersController } from '../factories/presentation/controller/user/make-get-users-controller'

export default function GetUsers(fastify: FastifyInstance) {
  fastify.get('/user', makeFastifyRouterAdapter(makeGetUsersController()))
}
