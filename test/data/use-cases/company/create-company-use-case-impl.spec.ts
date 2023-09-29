import { CreateCompanyDto } from '@/app/use-cases/create-company-use-case'
import { CreateCompanyUseCaseImpl } from '@/data/use-cases/company/create-company-use-case-impl'
import { HttpStatusCode } from '@/presentation/helpers'
import { makeCompany } from '@/test/app/mocks/entities/make-company'
import { makeInMemoryRepositoryCompanies } from '@/test/infra/mocks/database/repositories/in-memory-repository-companies'
import { makeGenerateUUIDMock } from '@/test/infra/mocks/gateways/uuid/generate-uuid-mock'
import { faker } from '@faker-js/faker'
const makeSut = () => {
  const { inMemoryRepositoryCompanies } = makeInMemoryRepositoryCompanies()
  const { generateUUIDMock } = makeGenerateUUIDMock()
  const sut = new CreateCompanyUseCaseImpl(
    inMemoryRepositoryCompanies,
    inMemoryRepositoryCompanies,
    generateUUIDMock,
  )
  return { sut, inMemoryRepositoryCompanies, generateUUIDMock }
}
const makeRequest = (
  name: Partial<CreateCompanyDto> = {},
): CreateCompanyDto => {
  return {
    name: faker.company.name(),
    ...name,
  }
}
describe('CreateCompanyUseCaseImpl', () => {
  it('should create if success', async () => {
    const { sut, inMemoryRepositoryCompanies } = makeSut()
    const companyDto = makeRequest()
    await sut.handle(companyDto)
    const company = await inMemoryRepositoryCompanies.findByName(
      companyDto.name,
    )
    expect(company).toBeTruthy()
  })
  it('should return a exception if company already exists', async () => {
    const { sut, inMemoryRepositoryCompanies } = makeSut()
    const companyDto = makeRequest()
    await inMemoryRepositoryCompanies.create(
      makeCompany({ name: companyDto.name }),
    )
    const response = await sut.handle(companyDto)

    expect(response.isLeft()).toBeTruthy()
    expect(response.value?.statusCode).toBe(HttpStatusCode.CONFLICT)
  })
})
