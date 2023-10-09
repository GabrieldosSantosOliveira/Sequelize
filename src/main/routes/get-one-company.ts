import { FastifyInstance } from 'fastify'

import { makeFastifyRouterAdapter } from '../adapters/make-fastify-router-adapter'
import { makeGetOneCompanyController } from '../factories/presentation/controller/user/make-get-one-company-controller'

export default function GetOneCompany(fastify: FastifyInstance) {
  fastify.get(
    '/company/:id',
    makeFastifyRouterAdapter(makeGetOneCompanyController()),
  )
}
