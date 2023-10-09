import { CountUsersRepository } from '@/app/repositories/count-users-repository'
import { LoadAllUsersRepository } from '@/app/repositories/load-all-users-repository'
import { Exception } from '@/app/use-cases/errors/exception'
import {
  GetAllUsersUseCase,
  GetAllUsersUseCaseResponse,
} from '@/app/use-cases/get-all-users-use-case'
import { Either, right } from '@/shared/either'

export class GetAllUsersUseCaseImpl implements GetAllUsersUseCase {
  constructor(
    private readonly countUsersRepository: CountUsersRepository,
    private readonly loadAllUsersRepository: LoadAllUsersRepository,
    private readonly url: string,
  ) {}

  async handle(
    page: number,
    sizePerPage?: number | undefined,
  ): Promise<Either<Exception, GetAllUsersUseCaseResponse>> {
    const PAGE = Math.max(page, 1)
    const SIZE_PER_PAGE = Math.min(sizePerPage || 10, 100)
    const [countOfCompanies, companies] = await Promise.all([
      this.countUsersRepository.count(),
      this.loadAllUsersRepository.findAll(PAGE, SIZE_PER_PAGE),
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
    const info: GetAllUsersUseCaseResponse['info'] = {
      count: countOfCompanies,
      pages: PAGES,
      prev: PREV_PAGE,
      next: NEXT_PAGE,
    }
    return right({ info, data: companies })
  }
}
