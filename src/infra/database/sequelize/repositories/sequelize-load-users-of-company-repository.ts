import {
  LoadUsersOfCompanyRepository,
  LoadUsersOfCompanyRepositoryResponse,
} from '@/app/repositories/load-users-of-company-repository'

import { SequelizeCompanyMapper } from '../mappers/SequelizeCompanyMapper'
import { SequelizeUserMapper } from '../mappers/SequelizeUserMapper'
import { CompanyModel } from '../models/company'

export class SequelizeLoadUsersOfCompanyRepository
  implements LoadUsersOfCompanyRepository
{
  async findAllUsersOfACompany(
    id: string,
  ): Promise<LoadUsersOfCompanyRepositoryResponse | null> {
    const rawCompanies = await CompanyModel.findByPk(id, {
      include: 'usuarios',
    })
    if (!rawCompanies) {
      return null
    }
    return {
      company: SequelizeCompanyMapper.toDomain(rawCompanies),
      user: rawCompanies.usuarios.map(SequelizeUserMapper.toDomain),
    }
  }
}
