import { Either } from '@/shared/either'

import { Exception } from './errors/exception'

export interface RemoveCompanyUseCase {
  handle(id: string): Promise<Either<Exception, null>>
}
