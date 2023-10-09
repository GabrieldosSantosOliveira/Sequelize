import { CompanyNotFoundException } from '@/data/use-cases/company/errors/company-not-found'
import { RemoveCompanyUseCaseImpl } from '@/data/use-cases/company/remove-company-use-case-impl'
import { makeCompany } from '@/test/app/mocks/entities/make-company'
import { makeInMemoryRepositoryCompanies } from '@/test/infra/mocks/database/repositories/in-memory-repository-companies'
import { faker } from '@faker-js/faker'
const makeSut = () => {
  const { inMemoryRepositoryCompanies } = makeInMemoryRepositoryCompanies()
  const sut = new RemoveCompanyUseCaseImpl(
    inMemoryRepositoryCompanies,
    inMemoryRepositoryCompanies,
  )
  return { sut, inMemoryRepositoryCompanies }
}
const ID = faker.string.uuid()
describe('RemoveCompanyUseCaseImpl', () => {
  it('should return exception if company not exists', async () => {
    const { sut } = makeSut()
    const response = await sut.handle(ID)
    expect(response.value).toEqual(new CompanyNotFoundException())
  })
  it('should remove company if success', async () => {
    const { sut, inMemoryRepositoryCompanies } = makeSut()
    await inMemoryRepositoryCompanies.create(makeCompany({ id: ID }))
    const response = await sut.handle(ID)
    expect(response.value).toBeFalsy()
  })
  it('should call LoadCompanyByIdRepository with correct id', async () => {
    const { sut, inMemoryRepositoryCompanies } = makeSut()
    const loadCompanyByIdRepositorySpyOn = jest.spyOn(
      inMemoryRepositoryCompanies,
      'findById',
    )
    await sut.handle(ID)
    expect(loadCompanyByIdRepositorySpyOn).toHaveBeenCalledWith(ID)
  })
  it('should call RemoveCompanyRepository with correct id', async () => {
    const { sut, inMemoryRepositoryCompanies } = makeSut()
    await inMemoryRepositoryCompanies.create(makeCompany({ id: ID }))
    const removeCompanyRepositorySpyOn = jest.spyOn(
      inMemoryRepositoryCompanies,
      'remove',
    )
    await sut.handle(ID)
    expect(removeCompanyRepositorySpyOn).toHaveBeenCalledWith(ID)
  })
})
