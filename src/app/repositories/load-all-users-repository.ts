import { User } from '../entities'

export interface LoadAllUsersRepository {
  findAll(page: number, sizePerPage: number): Promise<User[]>
}
