import { Company } from '@/app/entities/company'
import { User, UserProps } from '@/app/entities/user'

export const makeUser = (user: Partial<UserProps> = {}) => {
  return new User({
    company: new Company({ users: [], name: 'any_name' }),
    name: 'any_name',
  })
}
