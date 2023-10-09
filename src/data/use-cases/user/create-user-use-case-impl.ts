import { User } from '@/app/entities'
import { GenerateUUID } from '@/app/gateways/uuid/generate-uuid'
import { CreateUserRepository } from '@/app/repositories/create-user-repository'
import { LoadCompanyByIdRepository } from '@/app/repositories/load-company-by-id-repository'
import {
  CreateUserUseCase,
  CreateUserUseCaseParams,
  CreateUserUseCaseResponse,
} from '@/app/use-cases/create-user-use-case'
import { Exception } from '@/app/use-cases/errors/exception'
import { Either, left, right } from '@/shared/either'

import { CompanyNotFoundException } from '../company/errors/company-not-found'

export class CreateUserUseCaseImpl implements CreateUserUseCase {
  constructor(
    private readonly createUserRepository: CreateUserRepository,
    private readonly loadCompanyByIdRepository: LoadCompanyByIdRepository,
    private readonly generateUUID: GenerateUUID,
  ) {}

  async handle(
    params: CreateUserUseCaseParams,
  ): Promise<Either<Exception, CreateUserUseCaseResponse>> {
    const companyExists = await this.loadCompanyByIdRepository.findById(
      params.companyId,
    )
    if (!companyExists) {
      return left(new CompanyNotFoundException())
    }
    const user = new User({
      id: this.generateUUID.randomUUID(),
      name: params.name,
    })
    this.createUserRepository.create(user, companyExists)
    return right({ user, company: companyExists })
  }
}
