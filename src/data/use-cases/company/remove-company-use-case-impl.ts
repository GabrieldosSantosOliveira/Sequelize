import { LoadCompanyByIdRepository } from '@/app/repositories/load-company-by-id-repository'
import { RemoveCompanyRepository } from '@/app/repositories/remove-company-repository'
import { Exception } from '@/app/use-cases/errors/exception'
import { RemoveCompanyUseCase } from '@/app/use-cases/remove-company-use-case'
import { Either, left, right } from '@/shared/either'

import { CompanyNotFoundException } from './errors/company-not-found'

export class RemoveCompanyUseCaseImpl implements RemoveCompanyUseCase {
  constructor(
    private readonly loadCompanyByIdRepository: LoadCompanyByIdRepository,
    private readonly removeCompanyRepository: RemoveCompanyRepository,
  ) {}

  async handle(id: string): Promise<Either<Exception, null>> {
    const companyExists = await this.loadCompanyByIdRepository.findById(id)
    if (!companyExists) {
      return left(new CompanyNotFoundException())
    }
    await this.removeCompanyRepository.remove(id)
    return right(null)
  }
}
