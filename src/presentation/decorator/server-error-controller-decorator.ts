import { HttpRequest } from '@/data/protocols/http/http-request'
import { HttpResponse } from '@/data/protocols/http/http-response'
import { Logger } from '@/helpers/protocols/logger'

import { serverError } from '../helpers'
import { Controller } from '../protocols/controller/controller'

export class ServerErrorControllerDecorator implements Controller {
  constructor(
    private readonly controller: Controller,
    private readonly logger: Logger,
  ) {}

  async handle(
    httpRequest: HttpRequest<unknown, unknown, unknown>,
  ): Promise<HttpResponse<unknown>> {
    try {
      return await this.controller.handle(httpRequest)
    } catch (error) {
      this.logger.error('Server Error', error)
      return serverError()
    }
  }
}
