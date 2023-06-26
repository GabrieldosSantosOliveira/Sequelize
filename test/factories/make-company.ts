import { Company, CompanyProps } from '@/app/entities/company'

export const makeCompany = (company: Partial<CompanyProps> = {}) => {
  return new Company({
    name: 'any_name',
  })
}
