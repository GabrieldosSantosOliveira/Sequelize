import { Company } from '@/app/entities'

import { CompanyDto } from '../dtos/CompanyDto'
import { Company as SequelizeCompany } from './../models/empresa'
export class SequelizeCompanyMapper {
  static toDomain(sequelizeCompany: SequelizeCompany): Company {
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
      name: company.name,
      updatedAt: company.updatedAt,
    }
  }
}
