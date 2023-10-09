import { LoadUserByIdRepository } from '@/app/repositories/load-user-by-id-repository'
import { RemoveUserRepository } from '@/app/repositories/remove-user-repository'
import { Exception } from '@/app/use-cases/errors/exception'
import { RemoveUserUseCase } from '@/app/use-cases/remove-user-use-case'
import { Either, left, right } from '@/shared/either'

import { UserNotFoundException } from './errors/user-not-found-exception'

export class RemoveUserUseCaseImpl implements RemoveUserUseCase {
  constructor(
    private readonly loadUserByIdRepository: LoadUserByIdRepository,
    private readonly removeUserRepository: RemoveUserRepository,
  ) {}

  async handle(id: string): Promise<Either<Exception, null>> {
    const userExists = await this.loadUserByIdRepository.findById(id)
    if (!userExists) {
      return left(new UserNotFoundException())
    }
    await this.removeUserRepository.remove(id)
    return right(null)
  }
}
