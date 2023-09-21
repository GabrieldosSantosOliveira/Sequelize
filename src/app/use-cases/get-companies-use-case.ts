import { Company } from '@/app/entities'

export interface GetCompaniesUseCase {
  handle(): Promise<Company[]>
}
