import { Company } from '../entities'

export interface LoadCompanyByNameRepository {
  findByName(name: string): Promise<Company | null>
}
