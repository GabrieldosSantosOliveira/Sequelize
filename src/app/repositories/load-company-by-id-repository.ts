import { Company } from '../entities'

export interface LoadCompanyByIdRepository {
  findById(id: string): Promise<Company | null>
}
