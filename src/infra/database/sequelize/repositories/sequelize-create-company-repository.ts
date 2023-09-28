import { Company } from '@/app/entities'
import { CreateCompanyRepository } from '@/app/repositories/create-company-repository'

import { SequelizeCompanyMapper } from '../mappers/SequelizeCompanyMapper'
import { CompanyModel } from '../models/company'

export class SequelizeCreateCompanyRepository
  implements CreateCompanyRepository
{
  async create(company: Company): Promise<void> {
    const rawCompany = SequelizeCompanyMapper.toSequelize(company)
    await CompanyModel.create(rawCompany)
  }
}
