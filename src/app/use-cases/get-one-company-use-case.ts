import { Either } from '@/shared/either'

import { Company } from '../entities'
import { Exception } from './errors/exception'

export interface GetOneCompanyUseCase {
  handle(id: string): Promise<Either<Exception, Company>>
}
