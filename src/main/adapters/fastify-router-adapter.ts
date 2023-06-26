import { Controller } from '@/interface/controller'
import { HttpRequest } from '@/interface/http'
import { RouteHandlerMethod } from 'fastify'

export class FastifyRouterAdapter {
  static adapter(controller: Controller): RouteHandlerMethod {
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
}
