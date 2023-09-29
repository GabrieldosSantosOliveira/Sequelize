import { Company } from '@/app/entities'
import { Either } from '@/shared/either'

import { Exception } from './errors/exception'
export interface GetCompaniesUseCaseResponseResult {
  count: number
  pages: number
  next: string | null
  prev: string | null
}
export interface GetCompaniesUseCaseResponse {
  info: GetCompaniesUseCaseResponseResult
  data: Company[]
}
export interface GetCompaniesUseCase {
  handle(
    page: number,
    sizePerPage?: number,
  ): Promise<Either<Exception, GetCompaniesUseCaseResponse>>
}
