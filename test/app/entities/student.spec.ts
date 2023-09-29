import { Student } from '@/app/entities'
import { makeStudent } from '@/test/app/mocks/entities/make-student'

describe('Student', () => {
  it('should be able create Student', () => {
    expect(makeStudent()).toBeInstanceOf(Student)
  })
})
