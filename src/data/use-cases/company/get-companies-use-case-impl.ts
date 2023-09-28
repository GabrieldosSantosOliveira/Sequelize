import { Company } from '@/app/entities'
import { LoadCompaniesRepository } from '@/app/repositories/load-companies-repository'
import { GetCompaniesUseCase } from '@/app/use-cases/get-companies-use-case'

export class GetCompaniesUseCaseImpl implements GetCompaniesUseCase {
  constructor(
    private readonly loadCompaniesRepository: LoadCompaniesRepository,
  ) {}

  async handle(
    page: number,
    sizePerPage?: number | undefined,
  ): Promise<Company[]> {
    const IS_PAGE_NUMBER_BIGGER_THAN_ONE: boolean = page > 1
    const PAGE: number = IS_PAGE_NUMBER_BIGGER_THAN_ONE ? 1 : page
    return await this.loadCompaniesRepository.findAll(PAGE, sizePerPage || 20)
  }
}
