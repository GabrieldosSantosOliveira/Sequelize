import { makeStudent } from '@/test/factories/makeStudent'

import { Student } from './student'

describe('Student', () => {
  it('should be able create Student', () => {
    expect(makeStudent()).toBeInstanceOf(Student)
  })
})
