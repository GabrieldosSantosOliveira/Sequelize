import { FastifyInstance } from 'fastify'

import { makeFastifyRouterAdapter } from '../adapters/make-fastify-router-adapter'
import { makeGetAllUsersOfCompanyController } from '../factories/presentation/controller/user/make-get-all-users-of-company-controller'

export default function GetUserCompany(fastify: FastifyInstance) {
  fastify.get(
    '/company/:id/user',
    makeFastifyRouterAdapter(makeGetAllUsersOfCompanyController()),
  )
}
