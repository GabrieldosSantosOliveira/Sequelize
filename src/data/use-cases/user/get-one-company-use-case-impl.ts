import { Company } from '@/app/entities'
import { LoadCompanyByIdRepository } from '@/app/repositories/load-company-by-id-repository'
import { Exception } from '@/app/use-cases/errors/exception'
import { GetOneCompanyUseCase } from '@/app/use-cases/get-one-company-use-case'
import { Either, left, right } from '@/shared/either'

import { CompanyNotFoundException } from '../company/errors/company-not-found'

export class GetOneCompanyUseCaseImpl implements GetOneCompanyUseCase {
  constructor(
    private readonly loadCompanyByIdRepository: LoadCompanyByIdRepository,
  ) {}

  async handle(id: string): Promise<Either<Exception, Company>> {
    const companyExists = await this.loadCompanyByIdRepository.findById(id)
    if (!companyExists) {
      return left(new CompanyNotFoundException())
    }
    return right(companyExists)
  }
}
