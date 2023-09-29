import { GetCompaniesUseCaseImpl } from '@/data/use-cases/company/get-companies-use-case-impl'
import { env } from '@/main/config/env'

import { makeCountCompaniesRepository } from '../../infra/database/sequelize/repositories/make-count-companies-repository'
import { makeLoadCompaniesRepository } from '../../infra/database/sequelize/repositories/make-load-companies-repository'
export const makeGetCompaniesUseCase = () =>
  new GetCompaniesUseCaseImpl(
    makeLoadCompaniesRepository(),
    makeCountCompaniesRepository(),
    new URL('/company', env.BASE_URL).toString(),
  )
