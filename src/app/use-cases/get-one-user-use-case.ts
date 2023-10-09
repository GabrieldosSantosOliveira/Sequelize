import { User } from '@/app/entities'
import { Exception } from '@/app/use-cases/errors/exception'
import { Either } from '@/shared/either'

export interface GetOneUserUseCase {
  handle(id: string): Promise<Either<Exception, User>>
}
