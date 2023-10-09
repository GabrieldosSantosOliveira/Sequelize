import { LoadAllCompaniesOfUserRepository } from '@/app/repositories/load-all-companies-of-user-repository'
import { Exception } from '@/app/use-cases/errors/exception'
import {
  GetAllCompaniesOfUserUseCase,
  GetAllCompaniesOfUserUseCaseResponse,
} from '@/app/use-cases/get-all-companies-of-user-use-case'
import { Either, left, right } from '@/shared/either'

import { UserNotFoundException } from './errors/user-not-found-exception'

export class GetAllCompaniesOfUserUseCaseImpl
  implements GetAllCompaniesOfUserUseCase
{
  constructor(
    private readonly loadAllCompaniesOfUserRepository: LoadAllCompaniesOfUserRepository,
  ) {}

  async handle(
    id: string,
  ): Promise<Either<Exception, GetAllCompaniesOfUserUseCaseResponse>> {
    const companiesOfUser =
      await this.loadAllCompaniesOfUserRepository.findAllCompaniesOfUser(id)
    if (!companiesOfUser) {
      return left(new UserNotFoundException())
    }
    return right({
      company: companiesOfUser.company,
      user: companiesOfUser.user,
    })
  }
}
