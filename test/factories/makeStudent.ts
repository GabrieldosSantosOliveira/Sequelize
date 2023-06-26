import { Student, StudentProps } from '@/app/entities/student'

export const makeStudent = (student: Partial<StudentProps> = {}) => {
  return new Student({ dateOfBirth: new Date(), name: 'any_name' })
}
