import { Company } from '../entities'

export interface LoadCompaniesRepository {
  findAll(): Promise<Company[]>
}
