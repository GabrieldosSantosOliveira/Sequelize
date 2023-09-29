import { CountCompaniesRepository } from '@/app/repositories/count-companies-repository'

import { CompanyModel } from '../models/company'

export class SequelizeCountCompaniesRepository
  implements CountCompaniesRepository
{
  async count(): Promise<number> {
    const countCompanies = await CompanyModel.count()
    return countCompanies
  }
}
