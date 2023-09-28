import { HttpStatusCode } from '@/presentation/helpers'

export interface Exception {
  statusCode: HttpStatusCode
  message: string
}
