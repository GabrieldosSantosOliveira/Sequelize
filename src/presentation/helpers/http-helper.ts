import { Exception } from '@/app/use-cases/errors/exception'
import { HttpResponse } from '@/data/protocols/http/http-response'

import { ServerError } from '../errors/server-error'
import { HttpStatusCode, HttpStatusCodeDescription } from './http-status-code'

export const serverError = (): HttpResponse => {
  return {
    body: {
      statusCode: HttpStatusCode.SERVER_ERROR,
      error: HttpStatusCodeDescription[HttpStatusCode.SERVER_ERROR],
      message: new ServerError().message,
    },
    statusCode: HttpStatusCode.SERVER_ERROR,
  }
}
export const ok = (body: unknown): HttpResponse => {
  return { body, statusCode: HttpStatusCode.OK }
}
export const badRequest = (message: unknown): HttpResponse => {
  return {
    body: {
      statusCode: HttpStatusCode.BAD_REQUEST,
      error: HttpStatusCodeDescription[HttpStatusCode.BAD_REQUEST],
      message,
    },
    statusCode: HttpStatusCode.BAD_REQUEST,
  }
}

export const noContent = (): HttpResponse => {
  return {
    body: null,
    statusCode: HttpStatusCode.NO_CONTENT,
  }
}
export const exception = (exception: Exception): HttpResponse => {
  return {
    body: {
      statusCode: exception.statusCode,
      error: HttpStatusCodeDescription[exception.statusCode],
      message: exception.message,
    },
    statusCode: exception.statusCode,
  }
}
export const created = (body: unknown): HttpResponse => {
  return {
    body,
    statusCode: HttpStatusCode.CREATED,
  }
}
