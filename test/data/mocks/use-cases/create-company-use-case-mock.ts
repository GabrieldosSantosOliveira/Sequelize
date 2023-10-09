import {
  CreateCompanyDto,
  CreateCompanyUseCase,
} from '@/app/use-cases/create-company-use-case'
import { Exception } from '@/app/use-cases/errors/exception'
import { CompanyNotFoundException } from '@/data/use-cases/company/errors/company-not-found'
import { Either, left, right } from '@/shared/either'

export class CreateCompanyUseCaseMock implements CreateCompanyUseCase {
  companyDto: CreateCompanyDto
  async handle(companyDto: CreateCompanyDto): Promise<Either<Exception, null>> {
    this.companyDto = companyDto
    return right(null)
  }
}
export const makeCreateCompanyUseCaseMock = () => {
  const createCompanyUseCaseMock = new CreateCompanyUseCaseMock()
  return { createCompanyUseCaseMock }
}
export class CreateCompanyUseCaseMockWithError implements CreateCompanyUseCase {
  async handle(): Promise<Either<Exception, null>> {
    throw new Error()
  }
}

export const makeCreateCompanyUseCaseMockWithError = () => {
  const createCompanyUseCaseMockWithError =
    new CreateCompanyUseCaseMockWithError()
  return { createCompanyUseCaseMockWithError }
}
export class CreateCompanyUseCaseMockWithException
  implements CreateCompanyUseCase
{
  async handle(): Promise<Either<Exception, null>> {
    return left(new CompanyNotFoundException())
  }
}
export const makeCreateCompanyUseCaseMockWithException = () => {
  const createCompanyUseCaseMockWithException =
    new CreateCompanyUseCaseMockWithException()
  return { createCompanyUseCaseMockWithException }
}
