import { Student, StudentProps } from '@/app/entities/student'
import { faker } from '@faker-js/faker'
export const makeStudent = (student: Partial<StudentProps> = {}) => {
  return new Student({
    id: faker.string.uuid(),
    dateOfBirth: new Date(),
    name: faker.person.firstName(),
    ...student,
  })
}
