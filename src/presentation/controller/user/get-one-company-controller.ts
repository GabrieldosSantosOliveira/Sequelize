import { GetOneCompanyUseCase } from '@/app/use-cases/get-one-company-use-case'
import { HttpRequest } from '@/data/protocols/http/http-request'
import { HttpResponse } from '@/data/protocols/http/http-response'
import { GetOneCompanyControllerParamsDto } from '@/presentation/dtos/company/get-one-company-controller-params.dto'
import { badRequest, exception, ok, serverError } from '@/presentation/helpers'
import { Controller } from '@/presentation/protocols/controller/controller'
import { CompanyViewModel } from '@/presentation/view-models/company-view-model'
export interface GetOneCompanyControllerRequestParams {
  id: string
}
export class GetOneCompanyController implements Controller {
  constructor(private readonly getOneCompanyUseCase: GetOneCompanyUseCase) {}
  async handle(
    httpRequest: HttpRequest<
      unknown,
      unknown,
      GetOneCompanyControllerRequestParams
    >,
  ): Promise<HttpResponse> {
    try {
      const isValidParams = GetOneCompanyControllerParamsDto.safeParse(
        httpRequest.params,
      )
      if (!isValidParams.success) {
        return badRequest(isValidParams.error)
      }
      const { id } = isValidParams.data
      const hasException = await this.getOneCompanyUseCase.handle(id)
      if (hasException.isLeft()) {
        return exception(hasException.value)
      }
      return ok(CompanyViewModel.toHTTP(hasException.value))
    } catch {
      return serverError()
    }
  }
}
