import { FastifyInstance } from 'fastify'

import { makeFastifyRouterAdapter } from '../adapters/make-fastify-router-adapter'
import { makeCreateCompanyController } from '../factories/presentation/controller/company/make-create-company-controller'

export default function CreateCompany(fastify: FastifyInstance) {
  fastify.post(
    '/company',
    makeFastifyRouterAdapter(makeCreateCompanyController()),
  )
}
