import { GetCompaniesUseCaseImpl } from '@/data/use-cases/company/get-companies-use-case-impl'
import { makeInMemoryRepositoryCompanies } from '@/test/infra/mocks/database/repositories/in-memory-repository-companies'
import { makeLoggerMock } from '@/test/infra/mocks/logger/logger'

const makeSut = () => {
  const { loggerMock } = makeLoggerMock()
  const { inMemoryRepositoryCompanies } = makeInMemoryRepositoryCompanies()
  const sut = new GetCompaniesUseCaseImpl(inMemoryRepositoryCompanies)
  return { sut, loggerMock, inMemoryRepositoryCompanies }
}
const SIZE = 10
const PAGE = 10
describe('GetCompaniesUseCaseImpl', () => {
  it('should return all companies', async () => {
    const { sut } = makeSut()
    const companies = await sut.handle(PAGE, SIZE)
    expect(companies).toEqual([])
  })
})
