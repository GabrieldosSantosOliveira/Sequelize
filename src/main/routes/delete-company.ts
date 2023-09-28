import { ServerErrorControllerDecorator } from '@/presentation/decorator/server-error-controller-decorator'
import { FastifyInstance } from 'fastify'

import { makeFastifyRouterAdapter } from '../adapters/make-fastify-router-adapter'
import { makeLogger } from '../factories/infra/logger/make-logger'
import { makeRemoveCompanyController } from '../factories/presentation/controller/company/make-remove-company-controller'

export default function DeleteCompany(fastify: FastifyInstance) {
  fastify.delete(
    '/company/:id',
    makeFastifyRouterAdapter(
      new ServerErrorControllerDecorator(
        makeRemoveCompanyController(),
        makeLogger(),
      ),
    ),
  )
}
