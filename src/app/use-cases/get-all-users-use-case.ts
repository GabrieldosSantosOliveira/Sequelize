import { Either } from '@/shared/either'

import { User } from '../entities'
import { Exception } from './errors/exception'

export interface GetAllUsersUseCaseResponseResult {
  count: number
  pages: number
  next: string | null
  prev: string | null
}
export interface GetAllUsersUseCaseResponse {
  info: GetAllUsersUseCaseResponseResult
  data: User[]
}
export interface GetAllUsersUseCase {
  handle(
    page: number,
    sizePerPage?: number,
  ): Promise<Either<Exception, GetAllUsersUseCaseResponse>>
}
