import { CountCompaniesRepository } from '@/app/repositories/count-companies-repository'
import { LoadCompaniesRepository } from '@/app/repositories/load-companies-repository'
import { Exception } from '@/app/use-cases/errors/exception'
import {
  GetCompaniesUseCase,
  GetCompaniesUseCaseResponse,
} from '@/app/use-cases/get-companies-use-case'
import { Either, right } from '@/shared/either'

export class GetCompaniesUseCaseImpl implements GetCompaniesUseCase {
  constructor(
    private readonly loadCompaniesRepository: LoadCompaniesRepository,
    private readonly countCompaniesRepository: CountCompaniesRepository,
    private readonly url: string,
  ) {}

  async handle(
    page: number,
    sizePerPage?: number | undefined,
  ): Promise<Either<Exception, GetCompaniesUseCaseResponse>> {
    const PAGE = Math.max(page, 1)
    const SIZE_PER_PAGE = Math.min(sizePerPage || 10, 100)
    const [countOfCompanies, companies] = await Promise.all([
      this.countCompaniesRepository.count(),
      this.loadCompaniesRepository.findAll(PAGE, SIZE_PER_PAGE),
    ])
    const PAGES = Math.ceil(countOfCompanies / SIZE_PER_PAGE)
    const NEXT = PAGES - PAGE > 0 ? PAGE + 1 : null
    const PREV = PAGE - 1 > 0 ? PAGE - 1 : null
    const NEXT_PAGE = NEXT
      ? new URL(
          `?page=${NEXT}&sizePerPage=${SIZE_PER_PAGE}`,
          this.url,
        ).toString()
      : null
    const PREV_PAGE = PREV
      ? new URL(
          `?page=${PREV}&sizePerPage=${SIZE_PER_PAGE}`,
          this.url,
        ).toString()
      : null
    const info: GetCompaniesUseCaseResponse['info'] = {
      count: countOfCompanies,
      pages: PAGES,
      prev: PREV_PAGE,
      next: NEXT_PAGE,
    }
    return right({ info, data: companies })
  }
}
