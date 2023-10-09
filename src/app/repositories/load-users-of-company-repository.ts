import { Company, User } from '../entities'

export interface LoadUsersOfCompanyRepositoryResponse {
  user: User[]
  company: Company
}
export interface LoadUsersOfCompanyRepository {
  findAllUsersOfACompany(
    id: string,
  ): Promise<LoadUsersOfCompanyRepositoryResponse | null>
}
