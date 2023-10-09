import { FastifyInstance } from 'fastify'

import { makeFastifyRouterAdapter } from '../adapters/make-fastify-router-adapter'
import { makeRemoveUserController } from '../factories/presentation/controller/user/make-remove-user-controller'

export default function DeleteUser(fastify: FastifyInstance) {
  fastify.delete(
    '/user/:id',
    makeFastifyRouterAdapter(makeRemoveUserController()),
  )
}
