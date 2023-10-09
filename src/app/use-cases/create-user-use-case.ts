import { Either } from '@/shared/either'

import { Company, User } from '../entities'
import { Exception } from './errors/exception'
export interface CreateUserUseCaseParams {
  name: string
  companyId: string
}
export interface CreateUserUseCaseResponse {
  user: User
  company: Company
}
export interface CreateUserUseCase {
  handle(
    params: CreateUserUseCaseParams,
  ): Promise<Either<Exception, CreateUserUseCaseResponse>>
}
