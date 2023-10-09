import { Either } from '@/shared/either'

import { Company, User } from '../entities'
import { Exception } from './errors/exception'
export interface GetAllCompaniesOfUserUseCaseResponse {
  user: User
  company: Company
}
export interface GetAllCompaniesOfUserUseCase {
  handle(
    id: string,
  ): Promise<Either<Exception, GetAllCompaniesOfUserUseCaseResponse>>
}
