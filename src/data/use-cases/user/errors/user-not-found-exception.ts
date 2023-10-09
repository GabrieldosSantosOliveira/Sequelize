import { Exception } from '@/app/use-cases/errors/exception'
import { HttpStatusCode } from '@/presentation/helpers'

export class UserNotFoundException extends Error implements Exception {
  constructor() {
    super('User not found')
  }

  statusCode = HttpStatusCode.NOT_FOUND
}
