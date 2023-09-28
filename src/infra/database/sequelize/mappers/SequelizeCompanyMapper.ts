import { Company } from '@/app/entities'

import { CompanyDto } from '../dtos/CompanyDto'
import { CompanyModel } from './../models/company'
export class SequelizeCompanyMapper {
  static toDomain(sequelizeCompany: CompanyModel): Company {
    return new Company({
      name: sequelizeCompany.nome,
      createdAt: sequelizeCompany.createdAt,
      id: sequelizeCompany.id,
      updatedAt: sequelizeCompany.updatedAt,
    })
  }

  static toSequelize(company: Company): CompanyDto {
    return {
      createdAt: company.createdAt,
      id: company.id,
      nome: company.name,
      updatedAt: company.updatedAt,
    }
  }
}
