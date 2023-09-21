import { HttpRequest } from '@/data/protocols/http/http-request'
import { Controller } from '@/presentation/protocols/controller/controller'
import { RouteHandlerMethod } from 'fastify'

export const makeFastifyRouterAdapter = (
  controller: Controller,
): RouteHandlerMethod => {
  return async (req, res) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
    }
    const httpResponse = await controller.handle(httpRequest)
    res.code(httpResponse.statusCode).send(httpResponse.body)
  }
}
