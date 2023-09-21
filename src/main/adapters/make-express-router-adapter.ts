import { HttpRequest } from '@/data/protocols/http/http-request'
import { Controller } from '@/presentation/protocols/controller/controller'
import { Request, Response } from 'express'

export const makeExpressRouterAdapter = (controller: Controller) => {
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
