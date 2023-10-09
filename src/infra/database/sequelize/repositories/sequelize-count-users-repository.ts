import { CountUsersRepository } from '@/app/repositories/count-users-repository'

import { UserModel } from '../models/user'

export class SequelizeCountUsersRepository implements CountUsersRepository {
  async count(): Promise<number> {
    const countUsers = await UserModel.count()
    return countUsers
  }
}
