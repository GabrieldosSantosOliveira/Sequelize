import { GetAllCompaniesOfUserUseCase } from '@/app/use-cases/get-all-companies-of-user-use-case'
import { HttpRequest } from '@/data/protocols/http/http-request'
import { HttpResponse } from '@/data/protocols/http/http-response'
import { GetAllCompaniesOfUserParamsDto } from '@/presentation/dtos/user/get-all-companies-of-user-params.dto'
import { badRequest, exception, ok } from '@/presentation/helpers'
import { Controller } from '@/presentation/protocols/controller/controller'
import { UserViewModel } from '@/presentation/view-models/user-view-model'

export interface GetAllCompaniesOfUserControllerRequestParams {
  id: string
}
export class GetAllCompaniesOfUserController implements Controller {
  constructor(
    private readonly getAllCompaniesOfUserUseCase: GetAllCompaniesOfUserUseCase,
  ) {}

  async handle(
    httpRequest: HttpRequest<
      unknown,
      unknown,
      GetAllCompaniesOfUserControllerRequestParams
    >,
  ): Promise<HttpResponse> {
    const isValidParams = GetAllCompaniesOfUserParamsDto.safeParse(
      httpRequest.params,
    )
    if (!isValidParams.success) {
      return badRequest(isValidParams.error)
    }
    const { id } = isValidParams.data
    const hasException = await this.getAllCompaniesOfUserUseCase.handle(id)
    if (hasException.isLeft()) {
      return exception(hasException.value)
    }
    return ok(
      UserViewModel.toHTTPWithCompany(
        hasException.value.user,
        hasException.value.company,
      ),
    )
  }
}
