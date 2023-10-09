import { RemoveUserRepository } from '@/app/repositories/remove-user-repository'

import { UserModel } from '../models/user'

export class SequelizeRemoveUserRepository implements RemoveUserRepository {
  async remove(id: string): Promise<void> {
    await UserModel.destroy({ where: { id } })
  }
}
