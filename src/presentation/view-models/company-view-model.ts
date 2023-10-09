import { Company, User } from '@/app/entities'

import { UserViewModel } from './user-view-model'

export class CompanyViewModel {
  static toHTTP(company: Company) {
    return {
      id: company.id,
      name: company.name,
      createdAt: company.createdAt,
      updatedAt: company.updatedAt,
    }
  }

  static toHTTPWithUsers(company: Company, users: User[]) {
    return {
      id: company.id,
      name: company.name,
      createdAt: company.createdAt,
      updatedAt: company.updatedAt,
      users: users.map(UserViewModel.toHTTP),
    }
  }
}
