import { HttpResponse } from '@/data/protocols/http/http-response'

import { ServerError } from '../errors/server-error'
import { HttpStatusCode } from './http-status-code'

export const serverError = (): HttpResponse => {
  return {
    body: new ServerError().message,
    statusCode: HttpStatusCode.SERVER_ERROR,
  }
}
export const ok = (body: unknown): HttpResponse => {
  return { body, statusCode: HttpStatusCode.OK }
}
