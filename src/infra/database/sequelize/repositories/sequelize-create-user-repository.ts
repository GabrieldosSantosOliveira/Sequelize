import { Company, User } from '@/app/entities'
import { CreateUserRepository } from '@/app/repositories/create-user-repository'

import { SequelizeUserMapper } from '../mappers/SequelizeUserMapper'
import { UserModel } from '../models/user'

export class SequelizeCreateUserRepository implements CreateUserRepository {
  async create(user: User, company: Company): Promise<void> {
    const rawUser = SequelizeUserMapper.toSequelize(user)
    await UserModel.create({ empresaId: company.id, ...rawUser })
  }
}
