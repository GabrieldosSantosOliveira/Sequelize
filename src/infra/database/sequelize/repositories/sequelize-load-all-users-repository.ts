import { User } from '@/app/entities'
import { LoadAllUsersRepository } from '@/app/repositories/load-all-users-repository'

import { SequelizeUserMapper } from '../mappers/SequelizeUserMapper'
import { UserModel } from '../models/user'

export class SequelizeLoadAllUsersRepository implements LoadAllUsersRepository {
  async findAll(page: number, sizePerPage: number): Promise<User[]> {
    const offset = (page - 1) * sizePerPage
    const rawUsers = await UserModel.findAll({
      offset,
      limit: sizePerPage,
    })

    return rawUsers.map(SequelizeUserMapper.toDomain)
  }
}
