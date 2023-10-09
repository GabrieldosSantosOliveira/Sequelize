import { Either } from '@/shared/either'

import { Exception } from './errors/exception'

export interface RemoveUserUseCase {
  handle(id: string): Promise<Either<Exception, null>>
}
