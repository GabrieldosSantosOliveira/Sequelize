import { Company, User } from '../entities'

export interface CreateUserRepository {
  create(user: User, company: Company): Promise<void>
}
