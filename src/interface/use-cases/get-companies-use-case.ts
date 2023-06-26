import { Company } from '@/app/entities'

export interface IGetCompaniesUseCase {
  handle(): Promise<Company[]>
}
