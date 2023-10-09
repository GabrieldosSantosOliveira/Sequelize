import { CreateUserUseCase } from '@/app/use-cases/create-user-use-case'
import { HttpRequest } from '@/data/protocols/http/http-request'
import { HttpResponse } from '@/data/protocols/http/http-response'
import { CreateUserBodyDto } from '@/presentation/dtos/user/create-user-body.dto'
import {
  badRequest,
  created,
  exception,
  serverError,
} from '@/presentation/helpers'
import { Controller } from '@/presentation/protocols/controller/controller'
import { UserViewModel } from '@/presentation/view-models/user-view-model'

export class CreateUserController implements Controller {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}
  async handle(
    httpRequest: HttpRequest<unknown, unknown, unknown>,
  ): Promise<HttpResponse> {
    try {
      const isValidBody = CreateUserBodyDto.safeParse(httpRequest.body)
      if (!isValidBody.success) {
        return badRequest(isValidBody.error)
      }
      const body = isValidBody.data
      const hasException = await this.createUserUseCase.handle({
        companyId: body.companyId,
        name: body.name,
      })
      if (hasException.isLeft()) {
        return exception(hasException.value)
      }
      return created(
        UserViewModel.toHTTPWithCompany(
          hasException.value.user,
          hasException.value.company,
        ),
      )
    } catch {
      return serverError()
    }
  }
}
