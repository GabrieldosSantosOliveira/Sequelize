import { Company } from '@/app/entities'
import { LoadCompaniesRepository } from '@/app/repositories/load-companies-repository'
import { IGetCompaniesUseCase } from '@/interface/use-cases/get-companies-use-case'

export class GetCompaniesUseCase implements IGetCompaniesUseCase {
  constructor(
    private readonly loadCompaniesRepository: LoadCompaniesRepository,
  ) {}

  async handle(): Promise<Company[]> {
    return await this.loadCompaniesRepository.findAll()
  }
}
