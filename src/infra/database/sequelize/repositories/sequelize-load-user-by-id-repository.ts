import { User } from '@/app/entities'
import { LoadUserByIdRepository } from '@/app/repositories/load-user-by-id-repository'

import { SequelizeUserMapper } from '../mappers/SequelizeUserMapper'
import { UserModel } from '../models/user'

export class SequelizeLoadUserByIdRepository implements LoadUserByIdRepository {
  async findById(id: string): Promise<User | null> {
    const rawUser = await UserModel.findByPk(id)
    if (!rawUser) {
      return null
    }
    return SequelizeUserMapper.toDomain(rawUser)
  }
}
