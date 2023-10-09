import { Exception } from '@/app/use-cases/errors/exception'
import { RemoveCompanyUseCase } from '@/app/use-cases/remove-company-use-case'
import { CompanyNotFoundException } from '@/data/use-cases/company/errors/company-not-found'
import { Either, left, right } from '@/shared/either'

export class RemoveCompanyUseCaseMock implements RemoveCompanyUseCase {
  public id: string
  async handle(id: string): Promise<Either<Exception, null>> {
    this.id = id
    return right(null)
  }
}
export const makeRemoveCompanyUseCaseMock = () => {
  const removeCompanyUseCaseMock = new RemoveCompanyUseCaseMock()
  return { removeCompanyUseCaseMock }
}
export class RemoveCompanyUseCaseMockWithError implements RemoveCompanyUseCase {
  async handle(): Promise<Either<Exception, null>> {
    throw new Error()
  }
}
export const makeRemoveCompanyUseCaseMockWithError = () => {
  const removeCompanyUseCaseMockWithError =
    new RemoveCompanyUseCaseMockWithError()
  return { removeCompanyUseCaseMockWithError }
}
export class RemoveCompanyUseCaseMockWithException
  implements RemoveCompanyUseCase
{
  async handle(): Promise<Either<Exception, null>> {
    return left(new CompanyNotFoundException())
  }
}
export const makeRemoveCompanyUseCaseMockWithException = () => {
  const removeCompanyUseCaseMockWithException =
    new RemoveCompanyUseCaseMockWithException()
  return { removeCompanyUseCaseMockWithException }
}
