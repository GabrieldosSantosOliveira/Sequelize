import { makeGetUsersOfCompanyUseCase } from '@/main/factories/data/use-cases/make-get-users-of-company-use-case'
import { GetAllUsersOfCompanyController } from '@/presentation/controller/user/get-all-users-of-company-controller'

export const makeGetAllUsersOfCompanyController = () =>
  new GetAllUsersOfCompanyController(makeGetUsersOfCompanyUseCase())
