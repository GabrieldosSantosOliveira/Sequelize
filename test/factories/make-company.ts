import { Company, CompanyProps } from '@/app/entities/company'
import { faker } from '@faker-js/faker'
export const makeCompany = (company: Partial<CompanyProps> = {}) => {
  return new Company({
    id: faker.string.uuid(),
    name: 'any_name',
    ...company,
  })
}
