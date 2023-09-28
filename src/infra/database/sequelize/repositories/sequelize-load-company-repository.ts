import { Company } from '@/app/entities'
import { LoadCompanyRepository } from '@/app/repositories/load-company-repository'

import { SequelizeCompanyMapper } from '../mappers/SequelizeCompanyMapper'
import { CompanyModel } from '../models/company'

export class SequelizeLoadCompanyRepository implements LoadCompanyRepository {
  async findById(id: string): Promise<Company | null> {
    const rawCompany = await CompanyModel.findByPk(id)
    if (!rawCompany) {
      return null
    }
    return SequelizeCompanyMapper.toDomain(rawCompany)
  }
}
