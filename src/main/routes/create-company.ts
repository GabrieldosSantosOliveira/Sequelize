import { ServerErrorControllerDecorator } from '@/presentation/decorator/server-error-controller-decorator'
import { FastifyInstance } from 'fastify'

import { makeFastifyRouterAdapter } from '../adapters/make-fastify-router-adapter'
import { makeLogger } from '../factories/infra/logger/make-logger'
import { makeCreateCompanyController } from '../factories/presentation/controller/company/make-create-company-controller'

export default function CreateCompany(fastify: FastifyInstance) {
  fastify.post(
    '/company',
    makeFastifyRouterAdapter(
      new ServerErrorControllerDecorator(
        makeCreateCompanyController(),
        makeLogger(),
      ),
    ),
  )
}
