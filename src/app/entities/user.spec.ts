import { makeUser } from '@/test/factories/make-user'

import { User } from './user'

describe('User', () => {
  it('should be able create User', () => {
    expect(makeUser()).toBeInstanceOf(User)
  })
})
