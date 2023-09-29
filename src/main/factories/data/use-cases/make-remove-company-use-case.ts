import { RemoveCompanyUseCaseImpl } from '@/data/use-cases/company/remove-company-use-case-impl'

import { makeLoadCompanyByIdRepository } from '../../infra/database/sequelize/repositories/make-load-company-by-id-repository'
import { makeRemoveCompanyRepository } from '../../infra/database/sequelize/repositories/make-remove-company-repository'

export const makeRemoveCompanyUseCase = () =>
  new RemoveCompanyUseCaseImpl(
    makeLoadCompanyByIdRepository(),
    makeRemoveCompanyRepository(),
  )
