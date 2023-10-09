import { makeCreateUserUseCase } from '@/main/factories/data/use-cases/make-create-user-use-case'
import { CreateUserController } from '@/presentation/controller/user/create-user-controller'

export const makeCreateUserController = () =>
  new CreateUserController(makeCreateUserUseCase())
