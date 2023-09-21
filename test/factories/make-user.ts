import { User, UserProps } from '@/app/entities/user'

export const makeUser = (user: Partial<UserProps> = {}) => {
  return new User({
    name: 'any_name',
    ...user,
  })
}
