import { HttpRequest } from '@/data/protocols/http/http-request'
import { HttpResponse } from '@/data/protocols/http/http-response'

export interface Controller {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>
}
