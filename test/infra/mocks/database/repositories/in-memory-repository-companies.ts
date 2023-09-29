import { Company } from '@/app/entities'
import { CountCompaniesRepository } from '@/app/repositories/count-companies-repository'
import { CreateCompanyRepository } from '@/app/repositories/create-company-repository'
import { LoadCompaniesRepository } from '@/app/repositories/load-companies-repository'
import { LoadCompanyByIdRepository } from '@/app/repositories/load-company-by-id-repository'
import { LoadCompanyByNameRepository } from '@/app/repositories/load-company-by-name-repository'
import { RemoveCompanyRepository } from '@/app/repositories/remove-company-repository'

export class InMemoryRepositoryCompanies
  implements
    LoadCompaniesRepository,
    CreateCompanyRepository,
    LoadCompanyByNameRepository,
    LoadCompanyByIdRepository,
    RemoveCompanyRepository,
    CountCompaniesRepository
{
  private readonly companies: Company[] = []
  async count(): Promise<number> {
    return this.companies.length
  }

  async findAll(page: number, sizePerPage: number): Promise<Company[]> {
    const SKIP = (page - 1) * sizePerPage
    const END = SKIP + sizePerPage
    return this.companies.slice(SKIP, END)
  }

  async findById(id: string): Promise<Company | null> {
    const companyExists = this.companies.find((company) => company.id === id)
    if (!companyExists) {
      return null
    }
    return companyExists
  }

  async remove(id: string): Promise<void> {
    const companyIndex = this.companies.findIndex(
      (company) => company.id === id,
    )
    if (companyIndex > -1) {
      this.companies.splice(companyIndex, 1)
    }
  }

  async findByName(name: string): Promise<Company | null> {
    const companyExists = this.companies.find(
      (company) => company.name === name,
    )
    if (!companyExists) {
      return null
    }
    return companyExists
  }

  async create(company: Company): Promise<void> {
    this.companies.push(company)
  }
}
export const makeInMemoryRepositoryCompanies = () => {
  const inMemoryRepositoryCompanies = new InMemoryRepositoryCompanies()
  return { inMemoryRepositoryCompanies }
}
