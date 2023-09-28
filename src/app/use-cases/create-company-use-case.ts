import { Either } from '@/shared/either'

import { Exception } from './errors/exception'

export interface CreateCompanyDto {
  name: string
}
export interface CreateCompanyUseCase {
  handle(companyDto: CreateCompanyDto): Promise<Either<Exception, null>>
}
