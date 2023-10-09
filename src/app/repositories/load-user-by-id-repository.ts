import { User } from '../entities'

export interface LoadUserByIdRepository {
  findById(id: string): Promise<User | null>
}
