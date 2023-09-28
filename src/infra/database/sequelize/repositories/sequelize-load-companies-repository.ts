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
    console.log(rawCompanies[0].dataValues.nome)

    return rawCompanies.map(SequelizeCompanyMapper.toDomain)
  }
}
