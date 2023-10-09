import { User } from '@/app/entities'
import { LoadUserByIdRepository } from '@/app/repositories/load-user-by-id-repository'
import { Exception } from '@/app/use-cases/errors/exception'
import { GetOneUserUseCase } from '@/app/use-cases/get-one-user-use-case'
import { Either, left, right } from '@/shared/either'

import { UserNotFoundException } from './errors/user-not-found-exception'

export class GetOneUserUseCaseImpl implements GetOneUserUseCase {
  constructor(
    private readonly loadUserByIdRepository: LoadUserByIdRepository,
  ) {}

  async handle(id: string): Promise<Either<Exception, User>> {
    const user = await this.loadUserByIdRepository.findById(id)
    if (!user) {
      return left(new UserNotFoundException())
    }
    return right(user)
  }
}
