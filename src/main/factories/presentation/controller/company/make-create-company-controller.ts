import { makeCreateCompanyUseCase } from '@/main/factories/data/use-cases/make-create-company-use-case'
import { CreateCompanyController } from '@/presentation/controller/company/create-company-controller'

export const makeCreateCompanyController = () =>
  new CreateCompanyController(makeCreateCompanyUseCase())
