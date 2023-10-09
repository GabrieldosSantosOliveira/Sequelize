import { GetUsersOfCompanyUseCase } from '@/app/use-cases/get-users-of-company-use-case'
import { HttpRequest } from '@/data/protocols/http/http-request'
import { HttpResponse } from '@/data/protocols/http/http-response'
import { GetAllUsersOfCompanyParamsDto } from '@/presentation/dtos/user/get-all-users-of-company-params.dto'
import { badRequest, exception, ok, serverError } from '@/presentation/helpers'
import { Controller } from '@/presentation/protocols/controller/controller'
import { CompanyViewModel } from '@/presentation/view-models/company-view-model'

export class GetAllUsersOfCompanyController implements Controller {
  constructor(
    private readonly getUsersOfCompanyUseCase: GetUsersOfCompanyUseCase,
  ) {}

  async handle(
    httpRequest: HttpRequest<unknown, unknown, unknown>,
  ): Promise<HttpResponse> {
    try {
      const isValidParams = GetAllUsersOfCompanyParamsDto.safeParse(
        httpRequest.params,
      )
      if (!isValidParams.success) {
        return badRequest(isValidParams.error)
      }
      const { id } = isValidParams.data
      const hasException = await this.getUsersOfCompanyUseCase.handle(id)
      if (hasException.isLeft()) {
        return exception(hasException.value)
      }
      return ok(
        CompanyViewModel.toHTTPWithUsers(
          hasException.value.company,
          hasException.value.user,
        ),
      )
    } catch {
      return serverError()
    }
  }
}
