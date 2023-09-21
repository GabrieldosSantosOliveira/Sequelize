import { Company } from '@/app/entities'
import { LoadCompaniesRepository } from '@/app/repositories/load-companies-repository'
import { GetCompaniesUseCase } from '@/app/use-cases/get-companies-use-case'

export class GetCompaniesUseCaseImpl implements GetCompaniesUseCase {
  constructor(
    private readonly loadCompaniesRepository: LoadCompaniesRepository,
  ) {}

  async handle(): Promise<Company[]> {
    return await this.loadCompaniesRepository.findAll()
  }
}
