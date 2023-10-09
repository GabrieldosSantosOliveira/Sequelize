import { FastifyInstance } from 'fastify'

import { makeFastifyRouterAdapter } from '../adapters/make-fastify-router-adapter'
import { makeGetCompaniesController } from '../factories/presentation/controller/company/make-get-companies-controller'

export default function GetCompanies(fastify: FastifyInstance) {
  fastify.get(
    '/company',
    makeFastifyRouterAdapter(makeGetCompaniesController()),
  )
}
