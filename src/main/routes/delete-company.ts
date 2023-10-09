import { FastifyInstance } from 'fastify'

import { makeFastifyRouterAdapter } from '../adapters/make-fastify-router-adapter'
import { makeRemoveCompanyController } from '../factories/presentation/controller/company/make-remove-company-controller'

export default function DeleteCompany(fastify: FastifyInstance) {
  fastify.delete(
    '/company/:id',
    makeFastifyRouterAdapter(makeRemoveCompanyController()),
  )
}
