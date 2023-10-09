import { RemoveUserUseCaseImpl } from '@/data/use-cases/user/remove-user-use-case-impl'

import { makeLoadUserByIdRepository } from '../../infra/database/sequelize/repositories/make-load-user-by-id-repository'
import { makeRemoveUserRepository } from '../../infra/database/sequelize/repositories/make-remove-user-repository'

export const makeRemoveUserUseCase = () =>
  new RemoveUserUseCaseImpl(
    makeLoadUserByIdRepository(),
    makeRemoveUserRepository(),
  )
