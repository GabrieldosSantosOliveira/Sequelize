import {
  LoadAllCompaniesOfUserRepository,
  LoadAllCompaniesOfUserRepositoryResponse,
} from '@/app/repositories/load-all-companies-of-user-repository'

import { SequelizeCompanyMapper } from '../mappers/SequelizeCompanyMapper'
import { SequelizeUserMapper } from '../mappers/SequelizeUserMapper'
import { UserModel } from '../models/user'

export class SequelizeLoadAllCompaniesOfUserRepository
  implements LoadAllCompaniesOfUserRepository
{
  async findAllCompaniesOfUser(
    id: string,
  ): Promise<LoadAllCompaniesOfUserRepositoryResponse | null> {
    const rawUser = await UserModel.findByPk(id, { include: 'empresa' })
    if (!rawUser) {
      return null
    }
    return {
      user: SequelizeUserMapper.toDomain(rawUser),
      company: SequelizeCompanyMapper.toDomain(rawUser.empresa),
    }
  }
}
