import { GetCompaniesUseCase } from '@/app/use-cases/get-companies-use-case'
import { HttpRequest } from '@/data/protocols/http/http-request'
import { HttpResponse } from '@/data/protocols/http/http-response'
import { Logger } from '@/helpers/protocols/logger'
import { GetCompaniesControllerDto } from '@/presentation/dtos/company/get-companies-controller.dto'
import { Controller } from '@/presentation/protocols/controller/controller'
import { CompanyViewModel } from '@/presentation/view-models/company-view-model'

import { badRequest, ok } from './../../helpers'

export class GetCompaniesController implements Controller {
  constructor(
    private readonly getCompaniesUseCase: GetCompaniesUseCase,
    private readonly logger: Logger,
  ) {
    logger.info('instantiated GetCompaniesController')
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const isValidQueryParams = GetCompaniesControllerDto.safeParse(
      httpRequest.query,
    )
    if (!isValidQueryParams.success) {
      return badRequest(isValidQueryParams.error)
    }
    const query = isValidQueryParams.data
    this.logger.info('handling GetCompaniesController')
    const companies = await this.getCompaniesUseCase.handle(
      query.page || 1,
      query.sizePerPage,
    )
    return ok(companies.map(CompanyViewModel.toHTTP))
  }
}
