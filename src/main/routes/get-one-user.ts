import { FastifyInstance } from 'fastify'

import { makeFastifyRouterAdapter } from '../adapters/make-fastify-router-adapter'
import { makeGetOneUserController } from '../factories/presentation/controller/user/make-get-one-user-controller'

export default function GetOneUser(fastify: FastifyInstance) {
  fastify.get('/user/:id', makeFastifyRouterAdapter(makeGetOneUserController()))
}
