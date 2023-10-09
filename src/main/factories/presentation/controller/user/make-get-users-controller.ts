import { makeGetAllUsersUseCase } from '@/main/factories/data/use-cases/make-get-all-users-use-case'
import { GetUsersController } from '@/presentation/controller/user/get-users-controller'

export const makeGetUsersController = () =>
  new GetUsersController(makeGetAllUsersUseCase())
