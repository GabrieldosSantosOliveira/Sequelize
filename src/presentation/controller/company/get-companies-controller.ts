import { Controller } from '@/interface/controller/controller'
import { HttpRequest } from '@/interface/http/http-request'
import { HttpResponse } from '@/interface/http/http-response'
import { IGetCompaniesUseCase } from '@/interface/use-cases/get-companies-use-case'
import { serverError } from '@/presentation/helpers/http-helper'
import { CompanyViewModel } from '@/presentation/view-models/company-view-model'

import { ok } from './../../helpers'

export class GetCompaniesController implements Controller {
  constructor(private readonly getCompaniesUseCase: IGetCompaniesUseCase) {}

  async handle(
    httpRequest: HttpRequest<any, any, any>,
  ): Promise<HttpResponse<any>> {
    try {
      const companies = await this.getCompaniesUseCase.handle()
      return ok(companies.map(CompanyViewModel.toHTTP))
    } catch {
      return serverError()
    }
  }
}
