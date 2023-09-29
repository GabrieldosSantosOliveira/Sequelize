import { GetCompaniesUseCaseImpl } from '@/data/use-cases/company/get-companies-use-case-impl'
import { makeCompany } from '@/test/app/mocks/entities/make-company'
import { makeInMemoryRepositoryCompanies } from '@/test/infra/mocks/database/repositories/in-memory-repository-companies'
import { makeLoggerMock } from '@/test/infra/mocks/logger/logger'
import { faker } from '@faker-js/faker'
const makeSut = () => {
  const url = faker.internet.url()
  const { loggerMock } = makeLoggerMock()
  const { inMemoryRepositoryCompanies } = makeInMemoryRepositoryCompanies()
  const sut = new GetCompaniesUseCaseImpl(
    inMemoryRepositoryCompanies,
    inMemoryRepositoryCompanies,
    url,
  )
  return { sut, loggerMock, inMemoryRepositoryCompanies }
}
const makeSutWithCompanies = async () => {
  const url = faker.internet.url()
  const { loggerMock } = makeLoggerMock()
  const { inMemoryRepositoryCompanies } = makeInMemoryRepositoryCompanies()
  const sut = new GetCompaniesUseCaseImpl(
    inMemoryRepositoryCompanies,
    inMemoryRepositoryCompanies,
    url,
  )
  const companies = Array.from({ length: 100 }).map(() => {
    return inMemoryRepositoryCompanies.create(makeCompany())
  })
  await Promise.all(companies)
  return { sut, loggerMock, inMemoryRepositoryCompanies }
}

describe('GetCompaniesUseCaseImpl', () => {
  it('should return 10 companies in page 10', async () => {
    const SIZE = 10
    const PAGE = 10
    const { sut } = await makeSutWithCompanies()
    const companies = await sut.handle(PAGE, SIZE)
    const expected = companies.isLeft() ? null : companies.value.data.length
    expect(expected).toEqual(SIZE)
  })
  it('should return 0 companies in page 1', async () => {
    const SIZE = 10
    const PAGE = 1
    const { sut } = makeSut()
    const companies = await sut.handle(PAGE, SIZE)
    const expected = companies.isLeft() ? null : companies.value.data.length
    expect(expected).toEqual(0)
  })
  it('should return next page if has next page', async () => {
    const SIZE = 10
    const PAGE = 1
    const { sut } = await makeSutWithCompanies()
    const companies = await sut.handle(PAGE, SIZE)
    const expected = companies.isLeft() ? null : companies.value.info.next
    expect(expected).toBeTruthy()
    expect(expected?.includes('2')).toBeTruthy()
  })
  it('should do not return next page if no has next page', async () => {
    const SIZE = 10
    const PAGE = 10
    const { sut } = await makeSutWithCompanies()
    const companies = await sut.handle(PAGE, SIZE)
    const expected = companies.isLeft() ? 0 : companies.value.info.next
    expect(expected).toBeFalsy()
  })
  it('should return prev page if has prev page', async () => {
    const SIZE = 10
    const PAGE = 10
    const { sut } = await makeSutWithCompanies()
    const companies = await sut.handle(PAGE, SIZE)
    const expected = companies.isLeft() ? null : companies.value.info.prev
    expect(expected).toBeTruthy()
    expect(expected?.includes('9')).toBeTruthy()
  })
})
