import { CreateUserUseCaseImpl } from '@/data/use-cases/user/create-user-use-case-impl'

import { makeCreateUserRepository } from '../../infra/database/sequelize/repositories/make-create-user-repository'
import { makeLoadCompanyByIdRepository } from '../../infra/database/sequelize/repositories/make-load-company-by-id-repository'
import { makeGenerateUUID } from '../../infra/gateways/uuid/make-generate-uuid'

export const makeCreateUserUseCase = () =>
  new CreateUserUseCaseImpl(
    makeCreateUserRepository(),
    makeLoadCompanyByIdRepository(),
    makeGenerateUUID(),
  )
