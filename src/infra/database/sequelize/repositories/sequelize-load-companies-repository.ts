import { Company } from '@/app/entities'
import { LoadCompaniesRepository } from '@/app/repositories/load-companies-repository'

import { SequelizeCompanyMapper } from '../mappers/SequelizeCompanyMapper'
import { Company as CompanyModel } from './../models/empresa'
export class SequelizeLoadCompaniesRepository
  implements LoadCompaniesRepository
{
  async findAll(): Promise<Company[]> {
    const companies = await CompanyModel.findAll()
    return companies.map(SequelizeCompanyMapper.toDomain)
  }
}
