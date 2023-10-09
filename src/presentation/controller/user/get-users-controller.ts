import { GetAllUsersUseCase } from '@/app/use-cases/get-all-users-use-case'
import { HttpRequest } from '@/data/protocols/http/http-request'
import { HttpResponse } from '@/data/protocols/http/http-response'
import { GetUsersControllerDto } from '@/presentation/dtos/user/get-users-controller.dto'
import { badRequest, exception, ok, serverError } from '@/presentation/helpers'
import { Controller } from '@/presentation/protocols/controller/controller'
import { UserViewModel } from '@/presentation/view-models/user-view-model'

export class GetUsersController implements Controller {
  constructor(private readonly getAllUsersUseCase: GetAllUsersUseCase) {}
  async handle(
    httpRequest: HttpRequest<unknown, unknown, unknown>,
  ): Promise<HttpResponse> {
    try {
      const isValidQueryParams = GetUsersControllerDto.safeParse(
        httpRequest.query,
      )
      if (!isValidQueryParams.success) {
        return badRequest(isValidQueryParams.error)
      }
      const { page, sizePerPage } = isValidQueryParams.data
      const hasException = await this.getAllUsersUseCase.handle(
        page || 1,
        sizePerPage,
      )
      if (hasException.isLeft()) {
        return exception(hasException.value)
      }
      return ok({
        info: hasException.value.info,
        data: hasException.value.data.map(UserViewModel.toHTTP),
      })
    } catch {
      return serverError()
    }
  }
}
