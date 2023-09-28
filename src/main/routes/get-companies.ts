import { ServerErrorControllerDecorator } from '@/presentation/decorator/server-error-controller-decorator'
import { FastifyInstance } from 'fastify'

import { makeFastifyRouterAdapter } from '../adapters/make-fastify-router-adapter'
import { makeLogger } from '../factories/infra/logger/make-logger'
import { makeGetCompaniesController } from '../factories/presentation/controller/company/make-get-companies-controller'

export default function GetCompanies(fastify: FastifyInstance) {
  fastify.get(
    '/company',
    makeFastifyRouterAdapter(
      new ServerErrorControllerDecorator(
        makeGetCompaniesController(),
        makeLogger(),
      ),
    ),
  )
}
