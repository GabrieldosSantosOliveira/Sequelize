import { CreateCompanyUseCase } from '@/app/use-cases/create-company-use-case'
import { HttpRequest } from '@/data/protocols/http/http-request'
import { HttpResponse } from '@/data/protocols/http/http-response'
import { CreateCompanyBodyDto } from '@/presentation/dtos/company/create-company-body.dto'
import { badRequest, created, exception } from '@/presentation/helpers'
import { Controller } from '@/presentation/protocols/controller/controller'
export interface CreateCompanyControllerRequestBody {
  name: string
}
export class CreateCompanyController implements Controller {
  constructor(private readonly createCompanyUseCase: CreateCompanyUseCase) {}
  async handle(
    httpRequest: HttpRequest<
      CreateCompanyControllerRequestBody,
      unknown,
      unknown
    >,
  ): Promise<HttpResponse<unknown>> {
    const isValidBody = CreateCompanyBodyDto.safeParse(httpRequest.body)
    if (!isValidBody.success) {
      return badRequest(isValidBody.error)
    }
    const { name } = isValidBody.data
    const hasException = await this.createCompanyUseCase.handle({ name })
    if (hasException.isLeft()) {
      return exception(hasException.value)
    }
    return created(null)
  }
}
