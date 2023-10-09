import { makeRemoveUserUseCase } from '@/main/factories/data/use-cases/make-remove-user-use-case'
import { RemoveUserController } from '@/presentation/controller/user/remove-user-controller'

export const makeRemoveUserController = () =>
  new RemoveUserController(makeRemoveUserUseCase())
