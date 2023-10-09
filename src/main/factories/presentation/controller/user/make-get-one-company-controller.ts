import { makeGetOneCompanyUseCase } from '@/main/factories/data/use-cases/make-get-one-company-use-case'
import { GetOneCompanyController } from '@/presentation/controller/user/get-one-company-controller'

export const makeGetOneCompanyController = () =>
  new GetOneCompanyController(makeGetOneCompanyUseCase())
