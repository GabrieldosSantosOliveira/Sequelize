import { GetAllUsersUseCaseImpl } from '@/data/use-cases/user/get-all-users-use-case-impl'
import { env } from 'process'

import { makeCountUsersRepository } from '../../infra/database/sequelize/repositories/make-count-users-repository'
import { makeLoadAllUsersRepository } from '../../infra/database/sequelize/repositories/make-load-all-users-repository'

export const makeGetAllUsersUseCase = () =>
  new GetAllUsersUseCaseImpl(
    makeCountUsersRepository(),
    makeLoadAllUsersRepository(),
    new URL('/user', env.BASE_URL).toString(),
  )
