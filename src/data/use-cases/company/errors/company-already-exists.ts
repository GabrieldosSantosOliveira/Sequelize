import { Exception } from '@/app/use-cases/errors/exception'
import { HttpStatusCode } from '@/presentation/helpers'

export class CompanyAlreadyExistsException extends Error implements Exception {
  constructor() {
    super('Company already exists')
    this.name = 'CompanyAlreadyExistsException'
  }

  statusCode: number = HttpStatusCode.CONFLICT
}
