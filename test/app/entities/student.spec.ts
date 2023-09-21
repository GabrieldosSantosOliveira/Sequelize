import { Student } from '@/app/entities'
import { makeStudent } from '@/test/factories/make-student'

describe('Student', () => {
  it('should be able create Student', () => {
    expect(makeStudent()).toBeInstanceOf(Student)
  })
})
