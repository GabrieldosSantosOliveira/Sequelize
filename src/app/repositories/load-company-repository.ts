import { Company } from '../entities'

export interface LoadCompanyRepository {
  findById(id: string): Promise<Company | null>
}
