import { GetCompaniesUseCase } from '@/app/use-cases/company/get-companies-use-case'
import { SequelizeLoadCompaniesRepository } from '@/infra/database/sequelize/repositories/sequelize-load-companies-repository'
import { GetCompaniesController } from '@/presentation/controller/company/get-companies-controller'
import { FastifyInstance } from 'fastify'

import { FastifyRouterAdapter } from '../adapters/fastify-router-adapter'

export default function GetCompanies(fastify: FastifyInstance) {
  fastify.get(
    '/empresas',
    FastifyRouterAdapter.adapter(
      new GetCompaniesController(
        new GetCompaniesUseCase(new SequelizeLoadCompaniesRepository()),
      ),
    ),
  )
}
