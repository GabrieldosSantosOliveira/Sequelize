import { User } from '@/app/entities'
import { makeUser } from '@/test/app/mocks/entities/make-user'

describe('User', () => {
  it('should be able create User', () => {
    expect(makeUser()).toBeInstanceOf(User)
  })
})
