import { RemoveCompanyUseCase } from '@/app/use-cases/remove-company-use-case'
import { HttpRequest } from '@/data/protocols/http/http-request'
import { HttpResponse } from '@/data/protocols/http/http-response'
import { RemoveCompanyParamDto } from '@/presentation/dtos/company/remove-company-param.dto'
import {
  HttpStatusCode,
  badRequest,
  exception,
  noContent,
  serverError,
} from '@/presentation/helpers'
import { Controller } from '@/presentation/protocols/controller/controller'
export interface RemoveCompanyControllerParams {
  id: string
}
export class RemoveCompanyController implements Controller {
  constructor(private readonly removeCompanyUseCase: RemoveCompanyUseCase) {}

  async handle(
    request: HttpRequest<unknown, unknown, RemoveCompanyControllerParams>,
  ): Promise<HttpResponse> {
    try {
      const isValidParams = RemoveCompanyParamDto.safeParse(request.params)
      if (!isValidParams.success) {
        return badRequest({
          statusCode: HttpStatusCode.BAD_REQUEST,
          error: 'Bad Request',
          message: isValidParams.error,
        })
      }
      const { id } = isValidParams.data
      const hasException = await this.removeCompanyUseCase.handle(id)
      if (hasException.isLeft()) {
        return exception(hasException.value)
      }
      return noContent()
    } catch {
      return serverError()
    }
  }
}
