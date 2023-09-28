import { Exception } from '@/app/use-cases/errors/exception'
import { HttpStatusCode } from '@/presentation/helpers'

export class CompanyNotFoundException extends Error implements Exception {
  constructor() {
    super('Company not found')
    this.name = 'CompanyNotFoundException'
  }

  statusCode: number = HttpStatusCode.NOT_FOUND
}
