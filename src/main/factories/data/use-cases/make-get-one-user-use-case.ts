import { GetOneUserUseCaseImpl } from '@/data/use-cases/user/get-one-user-use-case-impl'

import { makeLoadUserByIdRepository } from '../../infra/database/sequelize/repositories/make-load-user-by-id-repository'

export const makeGetOneUserUseCase = () =>
  new GetOneUserUseCaseImpl(makeLoadUserByIdRepository())
