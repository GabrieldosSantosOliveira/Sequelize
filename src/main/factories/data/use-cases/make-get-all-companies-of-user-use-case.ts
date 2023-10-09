import { GetAllCompaniesOfUserUseCaseImpl } from '@/data/use-cases/user/get-all-companies-of-user-use-case-impl'

import { makeLoadAllCompaniesOfUserRepository } from '../../infra/database/sequelize/repositories/make-load-all-companies-of-user-repository'

export const makeGetAllCompaniesOfUserUseCase = () =>
  new GetAllCompaniesOfUserUseCaseImpl(makeLoadAllCompaniesOfUserRepository())
