import { Company } from '@/app/entities'

export interface GetCompaniesUseCase {
  handle(page: number, sizePerPage?: number): Promise<Company[]>
}
