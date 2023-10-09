import { FastifyInstance } from 'fastify'

import { makeFastifyRouterAdapter } from '../adapters/make-fastify-router-adapter'
import { makeGetAllCompaniesOfUserController } from '../factories/presentation/controller/user/make-get-all-companies-of-user-controller'

export default function GetCompanyOfUser(fastify: FastifyInstance) {
  fastify.get(
    '/company/:id/user',
    makeFastifyRouterAdapter(makeGetAllCompaniesOfUserController()),
  )
}
