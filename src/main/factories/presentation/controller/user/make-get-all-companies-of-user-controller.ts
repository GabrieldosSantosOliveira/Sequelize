import { makeGetAllCompaniesOfUserUseCase } from '@/main/factories/data/use-cases/make-get-all-companies-of-user-use-case'
import { GetAllCompaniesOfUserController } from '@/presentation/controller/user/get-all-companies-of-user-controller'

export const makeGetAllCompaniesOfUserController = () =>
  new GetAllCompaniesOfUserController(makeGetAllCompaniesOfUserUseCase())
