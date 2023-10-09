import { Company, User } from '../entities'
export interface LoadAllCompaniesOfUserRepositoryResponse {
  user: User
  company: Company
}
export interface LoadAllCompaniesOfUserRepository {
  findAllCompaniesOfUser(
    id: string,
  ): Promise<LoadAllCompaniesOfUserRepositoryResponse | null>
}
