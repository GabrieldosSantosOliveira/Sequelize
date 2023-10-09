import { Company, User } from '@/app/entities'

import { CompanyViewModel } from './company-view-model'

export class UserViewModel {
  static toHTTP(user: User) {
    return {
      id: user.id,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      name: user.name,
    }
  }

  static toHTTPWithCompany(user: User, company: Company) {
    return {
      id: user.id,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      name: user.name,
      company: CompanyViewModel.toHTTP(company),
    }
  }
}
