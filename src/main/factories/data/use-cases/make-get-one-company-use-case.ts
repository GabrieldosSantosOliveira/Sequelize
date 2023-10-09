import { GetOneCompanyUseCaseImpl } from '@/data/use-cases/user/get-one-company-use-case-impl'

import { makeLoadCompanyByIdRepository } from '../../infra/database/sequelize/repositories/make-load-company-by-id-repository'

export const makeGetOneCompanyUseCase = () =>
  new GetOneCompanyUseCaseImpl(makeLoadCompanyByIdRepository())
