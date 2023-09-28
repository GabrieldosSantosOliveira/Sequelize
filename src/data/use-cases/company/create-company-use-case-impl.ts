import { Company } from '@/app/entities'
import { GenerateUUID } from '@/app/gateways/uuid/generate-uuid'
import { CreateCompanyRepository } from '@/app/repositories/create-company-repository'
import { LoadCompanyByNameRepository } from '@/app/repositories/load-company-by-name-repository'
import {
  CreateCompanyDto,
  CreateCompanyUseCase,
} from '@/app/use-cases/create-company-use-case'
import { Exception } from '@/app/use-cases/errors/exception'
import { Either, left, right } from '@/shared/either'

import { CompanyAlreadyExistsException } from './errors/company-already-exists'

export class CreateCompanyUseCaseImpl implements CreateCompanyUseCase {
  constructor(
    private readonly loadCompanyByNameRepository: LoadCompanyByNameRepository,
    private readonly createCompanyRepository: CreateCompanyRepository,
    private readonly generateUUID: GenerateUUID,
  ) {}

  async handle(companyDto: CreateCompanyDto): Promise<Either<Exception, null>> {
    const companyExists = await this.loadCompanyByNameRepository.findByName(
      companyDto.name,
    )
    if (companyExists) {
      return left(new CompanyAlreadyExistsException())
    }

    const company = new Company({
      id: this.generateUUID.randomUUID(),
      name: companyDto.name,
    })
    await this.createCompanyRepository.create(company)
    return right(null)
  }
}
