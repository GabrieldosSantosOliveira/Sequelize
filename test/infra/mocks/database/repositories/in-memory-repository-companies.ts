import { Company } from '@/app/entities'
import { LoadCompaniesRepository } from '@/app/repositories/load-companies-repository'

export class InMemoryRepositoryCompanies implements LoadCompaniesRepository {
  private readonly companies: Company[] = []
  async findAll(): Promise<Company[]> {
    return this.companies
  }
}
export const makeInMemoryRepositoryCompanies = () => {
  const inMemoryRepositoryCompanies = new InMemoryRepositoryCompanies()
  return { inMemoryRepositoryCompanies }
}
