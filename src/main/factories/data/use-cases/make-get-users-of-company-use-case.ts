import { GetUsersOfCompanyUseCaseImpl } from '@/data/use-cases/user/get-users-of-company-use-case-impl'

import { makeLoadUsersOfCompanyRepository } from '../../infra/database/sequelize/repositories/make-load-users-of-company-repository'

export const makeGetUsersOfCompanyUseCase = () =>
  new GetUsersOfCompanyUseCaseImpl(makeLoadUsersOfCompanyRepository())
