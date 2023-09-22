import { makeGetCompaniesUseCase } from '@/main/factories/data/use-cases/make-get-companies-use-case'
import { makeLogger } from '@/main/factories/infra/logger/make-logger'
import { GetCompaniesController } from '@/presentation/controller/company/get-companies-controller'

export const makeGetCompaniesController = () =>
  new GetCompaniesController(makeGetCompaniesUseCase(), makeLogger())
