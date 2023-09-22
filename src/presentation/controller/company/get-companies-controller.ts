import { GetCompaniesUseCase } from '@/app/use-cases/get-companies-use-case'
import { HttpResponse } from '@/data/protocols/http/http-response'
import { Logger } from '@/helpers/protocols/logger'
import { serverError } from '@/presentation/helpers/http-helper'
import { Controller } from '@/presentation/protocols/controller/controller'
import { CompanyViewModel } from '@/presentation/view-models/company-view-model'

import { ok } from './../../helpers'

export class GetCompaniesController implements Controller {
  constructor(
    private readonly getCompaniesUseCase: GetCompaniesUseCase,
    private readonly logger: Logger,
  ) {
    this.logger.info('instantiated GetCompaniesController')
  }

  async handle(): Promise<HttpResponse> {
    try {
      const companies = await this.getCompaniesUseCase.handle()
      return ok(companies.map(CompanyViewModel.toHTTP))
    } catch (error) {
      this.logger.error('GetCompaniesController', error)
      return serverError()
    }
  }
}
