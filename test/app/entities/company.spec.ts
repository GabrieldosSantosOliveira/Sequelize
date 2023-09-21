import { Company } from '@/app/entities'
import { makeCompany } from '@/test/factories/make-company'
describe('Company', () => {
  it('should be able create Company', () => {
    expect(makeCompany()).toBeInstanceOf(Company)
  })
})
