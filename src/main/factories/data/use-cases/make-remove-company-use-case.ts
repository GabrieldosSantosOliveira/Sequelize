import { RemoveCompanyUseCaseImpl } from '@/data/use-cases/company/remove-company-use-case-impl'

import { makeLoadCompanyRepository } from '../../infra/database/sequelize/repositories/make-load-company-repository'
import { makeRemoveCompanyRepository } from '../../infra/database/sequelize/repositories/make-remove-company-repository'

export const makeRemoveCompanyUseCase = () =>
  new RemoveCompanyUseCaseImpl(
    makeLoadCompanyRepository(),
    makeRemoveCompanyRepository(),
  )
