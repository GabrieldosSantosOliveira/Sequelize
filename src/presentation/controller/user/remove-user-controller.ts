import { RemoveUserUseCase } from '@/app/use-cases/remove-user-use-case'
import { HttpRequest } from '@/data/protocols/http/http-request'
import { HttpResponse } from '@/data/protocols/http/http-response'
import { RemoveUserParamsDto } from '@/presentation/dtos/user/remove-user-params.dto'
import {
  badRequest,
  exception,
  noContent,
  serverError,
} from '@/presentation/helpers'
import { Controller } from '@/presentation/protocols/controller/controller'
export interface RemoveUserControllerRequestParams {
  id: string
}
export class RemoveUserController implements Controller {
  constructor(private readonly removeUserUseCase: RemoveUserUseCase) {}
  async handle(
    httpRequest: HttpRequest<
      unknown,
      unknown,
      RemoveUserControllerRequestParams
    >,
  ): Promise<HttpResponse> {
    try {
      const isValidParams = RemoveUserParamsDto.safeParse(httpRequest.params)
      if (!isValidParams.success) {
        return badRequest(isValidParams.error)
      }
      const { id } = isValidParams.data
      const hasException = await this.removeUserUseCase.handle(id)
      if (hasException.isLeft()) {
        return exception(hasException.value)
      }
      return noContent()
    } catch {
      return serverError()
    }
  }
}
