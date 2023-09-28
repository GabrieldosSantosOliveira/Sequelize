import { GetCompaniesUseCaseImpl } from '@/data/use-cases/company/get-companies-use-case-impl'

import { makeLoadCompaniesRepository } from '../../infra/database/sequelize/repositories/make-load-companies-repository'

export const makeGetCompaniesUseCase = () =>
  new GetCompaniesUseCaseImpl(makeLoadCompaniesRepository())
