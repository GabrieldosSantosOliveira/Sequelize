import { CreateCompanyUseCaseImpl } from '@/data/use-cases/company/create-company-use-case-impl'

import { makeCreateCompanyRepository } from '../../infra/database/sequelize/repositories/make-create-company-repository'
import { makeLoadCompanyByNameRepository } from '../../infra/database/sequelize/repositories/make-load-company-by-name-repository'
import { makeGenerateUUID } from '../../infra/gateways/uuid/make-generate-uuid'

export const makeCreateCompanyUseCase = () =>
  new CreateCompanyUseCaseImpl(
    makeLoadCompanyByNameRepository(),
    makeCreateCompanyRepository(),
    makeGenerateUUID(),
  )
