import { GetOneUserUseCase } from '@/app/use-cases/get-one-user-use-case'
import { HttpRequest } from '@/data/protocols/http/http-request'
import { HttpResponse } from '@/data/protocols/http/http-response'
import { GetOneUserControllerParamsDto } from '@/presentation/dtos/user/get-one-user-controller-params.dto'
import { badRequest, exception, ok, serverError } from '@/presentation/helpers'
import { Controller } from '@/presentation/protocols/controller/controller'
import { UserViewModel } from '@/presentation/view-models/user-view-model'
export interface GetOneUserControllerRequestParams {
  id: string
}
export class GetOneUserController implements Controller {
  constructor(private readonly getOneUserUseCase: GetOneUserUseCase) {}
  async handle(
    httpRequest: HttpRequest<
      unknown,
      unknown,
      GetOneUserControllerRequestParams
    >,
  ): Promise<HttpResponse> {
    try {
      const isValidParams = GetOneUserControllerParamsDto.safeParse(
        httpRequest.params,
      )
      if (!isValidParams.success) {
        return badRequest(isValidParams.error)
      }
      const { id } = isValidParams.data
      const hasException = await this.getOneUserUseCase.handle(id)
      if (hasException.isLeft()) {
        return exception(hasException.value)
      }
      return ok(UserViewModel.toHTTP(hasException.value))
    } catch {
      return serverError()
    }
  }
}
