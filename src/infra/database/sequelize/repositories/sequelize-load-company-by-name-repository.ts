import { Company } from '@/app/entities'
import { LoadCompanyByNameRepository } from '@/app/repositories/load-company-by-name-repository'

import { SequelizeCompanyMapper } from '../mappers/SequelizeCompanyMapper'
import { CompanyModel } from '../models/company'

export class SequelizeLoadCompanyByNameRepository
  implements LoadCompanyByNameRepository
{
  async findByName(name: string): Promise<Company | null> {
    const rawCompany = await CompanyModel.findOne({ where: { nome: name } })
    if (!rawCompany) {
      return null
    }

    return SequelizeCompanyMapper.toDomain(rawCompany)
  }
}
