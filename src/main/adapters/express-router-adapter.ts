import { Controller } from '@/interface/controller'
import { HttpRequest } from '@/interface/http'
import { Request, Response } from 'express'

export class ExpressRouterAdapter {
  static adapter(controller: Controller) {
    return async (req: Request, res: Response) => {
      const httpRequest: HttpRequest = {
        body: req.body,
        params: req.params,
        query: req.query,
      }
      const httpResponse = await controller.handle(httpRequest)
      res.status(httpResponse.statusCode).json(httpResponse.body)
    }
  }
}
