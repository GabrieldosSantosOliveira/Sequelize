import { makeCompany } from '@/test/factories/make-company'

import { Company } from './company'

describe('Company', () => {
  it('should be able create Company', () => {
    expect(makeCompany()).toBeInstanceOf(Company)
  })
})
