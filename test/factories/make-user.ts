import { User, UserProps } from '@/app/entities/user'
import { faker } from '@faker-js/faker'

export const makeUser = (user: Partial<UserProps> = {}) => {
  return new User({
    id: faker.string.uuid(),
    name: 'any_name',
    ...user,
  })
}
