import { Company } from '@/app/entities'
import { LoadCompanyByIdRepository } from '@/app/repositories/load-company-by-id-repository'

import { SequelizeCompanyMapper } from '../mappers/SequelizeCompanyMapper'
import { CompanyModel } from '../models/company'

export class SequelizeLoadCompanyRepository
  implements LoadCompanyByIdRepository
{
  async findById(id: string): Promise<Company | null> {
    const rawCompany = await CompanyModel.findByPk(id)
    if (!rawCompany) {
      return null
    }
    return SequelizeCompanyMapper.toDomain(rawCompany)
  }
}
