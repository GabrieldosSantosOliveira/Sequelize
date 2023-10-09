import { FastifyInstance } from 'fastify'

import { makeFastifyRouterAdapter } from '../adapters/make-fastify-router-adapter'
import { makeCreateUserController } from '../factories/presentation/controller/user/make-create-user-controller'

export default function CreateUser(fastify: FastifyInstance) {
  fastify.post('/user', makeFastifyRouterAdapter(makeCreateUserController()))
}
