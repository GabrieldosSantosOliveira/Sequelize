import { Company } from '@/app/entities'
import { LoadCompaniesRepository } from '@/app/repositories/load-companies-repository'

import { SequelizeCompanyMapper } from '../mappers/SequelizeCompanyMapper'
import { CompanyModel } from './../models/company'
export class SequelizeLoadCompaniesRepository
  implements LoadCompaniesRepository
{
  async findAll(page: number, sizePerPage: number): Promise<Company[]> {
    const offset = (page - 1) * sizePerPage
    const rawCompanies = await CompanyModel.findAll({
      offset,
      limit: sizePerPage,
    })

    return rawCompanies.map(SequelizeCompanyMapper.toDomain)
  }
}
