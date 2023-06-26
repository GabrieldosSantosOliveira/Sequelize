import { HttpResponse } from '@/interface/http/http-response'

import { ServerError } from '../errors/server-error'
import { HttpStatusCode } from './http-status-code'

export const serverError = (): HttpResponse => {
  return {
    body: new ServerError().message,
    statusCode: HttpStatusCode.SERVER_ERROR,
  }
}
export const ok = (body: any): HttpResponse => {
  return { body, statusCode: HttpStatusCode.OK }
}
