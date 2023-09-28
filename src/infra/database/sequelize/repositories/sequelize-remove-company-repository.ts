import { RemoveCompanyRepository } from '@/app/repositories/remove-company-repository'

import { CompanyModel } from '../models/company'

export class SequelizeRemoveCompanyRepository
  implements RemoveCompanyRepository
{
  async remove(id: string): Promise<void> {
    await CompanyModel.destroy({ where: { id } })
  }
}
