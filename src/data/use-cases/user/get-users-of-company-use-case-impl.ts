import { LoadUsersOfCompanyRepository } from '@/app/repositories/load-users-of-company-repository'
import { Exception } from '@/app/use-cases/errors/exception'
import {
  GetUsersOfCompanyUseCase,
  GetUsersOfCompanyUseCaseResponse,
} from '@/app/use-cases/get-users-of-company-use-case'
import { Either, left, right } from '@/shared/either'

import { CompanyNotFoundException } from '../company/errors/company-not-found'

export class GetUsersOfCompanyUseCaseImpl implements GetUsersOfCompanyUseCase {
  constructor(
    private readonly loadUsersOfCompanyRepository: LoadUsersOfCompanyRepository,
  ) {}

  async handle(
    id: string,
  ): Promise<Either<Exception, GetUsersOfCompanyUseCaseResponse>> {
    const allUsersOfCompany =
      await this.loadUsersOfCompanyRepository.findAllUsersOfACompany(id)
    if (!allUsersOfCompany) {
      return left(new CompanyNotFoundException())
    }
    return right({
      company: allUsersOfCompany.company,
      user: allUsersOfCompany.user,
    })
  }
}
