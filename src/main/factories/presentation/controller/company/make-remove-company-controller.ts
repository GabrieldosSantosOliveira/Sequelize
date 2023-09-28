import { makeRemoveCompanyUseCase } from '@/main/factories/data/use-cases/make-remove-company-use-case'
import { RemoveCompanyController } from '@/presentation/controller/company/remove-company-controller'

export const makeRemoveCompanyController = () =>
  new RemoveCompanyController(makeRemoveCompanyUseCase())
