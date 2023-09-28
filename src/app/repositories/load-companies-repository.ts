import { Company } from '../entities'

export interface LoadCompaniesRepository {
  findAll(page: number, sizePerPage: number): Promise<Company[]>
}
