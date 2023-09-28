import { Company } from '../entities'

export interface CreateCompanyRepository {
  create(company: Company): Promise<void>
}
