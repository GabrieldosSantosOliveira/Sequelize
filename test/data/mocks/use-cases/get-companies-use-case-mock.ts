import { Exception } from '@/app/use-cases/errors/exception'
import {
  GetCompaniesUseCase,
  GetCompaniesUseCaseResponse,
} from '@/app/use-cases/get-companies-use-case'
import { HttpStatusCode } from '@/presentation/helpers'
import { Either, left, right } from '@/shared/either'
import { makeCompany } from '@/test/app/mocks/entities/make-company'

export class GetCompaniesUseCaseMock implements GetCompaniesUseCase {
  data = Array.from({ length: 10 }).map(() => makeCompany())
  info = {
    count: 100,
    pages: 10,
    prev: null,
    next: 'http://localhost:3000/companies?page=2&sizePerPage=10',
  }

  async handle(): Promise<Either<Exception, GetCompaniesUseCaseResponse>> {
    return right<Exception, GetCompaniesUseCaseResponse>({
      data: this.data,
      info: this.info,
    })
  }
}
export const makeGetCompaniesUseCaseMock = () => {
  const getCompaniesUseCaseMock = new GetCompaniesUseCaseMock()
  return { getCompaniesUseCaseMock }
}
export class GetCompaniesUseCaseMockWithError implements GetCompaniesUseCase {
  async handle(): Promise<Either<Exception, GetCompaniesUseCaseResponse>> {
    throw new Error()
  }
}
export const makeGetCompaniesUseCaseMockWithError = () => {
  const getCompaniesUseCaseMockWithError =
    new GetCompaniesUseCaseMockWithError()
  return { getCompaniesUseCaseMockWithError }
}
export class GetCompaniesUseCaseMockWithException
  implements GetCompaniesUseCase
{
  async handle(): Promise<Either<Exception, GetCompaniesUseCaseResponse>> {
    return left<Exception, GetCompaniesUseCaseResponse>({
      message: 'error',
      statusCode: HttpStatusCode.NO_CONTENT,
    })
  }
}
export const makeGetCompaniesUseCaseMockWithException = () => {
  const getCompaniesUseCaseMockWithException =
    new GetCompaniesUseCaseMockWithException()
  return { getCompaniesUseCaseMockWithException }
}
