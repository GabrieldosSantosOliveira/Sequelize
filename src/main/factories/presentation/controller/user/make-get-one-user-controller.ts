import { makeGetOneUserUseCase } from '@/main/factories/data/use-cases/make-get-one-user-use-case'
import { GetOneUserController } from '@/presentation/controller/user/get-one-user-controller'

export const makeGetOneUserController = () =>
  new GetOneUserController(makeGetOneUserUseCase())
