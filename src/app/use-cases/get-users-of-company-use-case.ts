import { Either } from '@/shared/either'

import { Company, User } from '../entities'
import { Exception } from './errors/exception'
export interface GetUsersOfCompanyUseCaseResponse {
  user: User[]
  company: Company
}
export interface GetUsersOfCompanyUseCase {
  handle(
    id: string,
  ): Promise<Either<Exception, GetUsersOfCompanyUseCaseResponse>>
}
