import { SequelizeCountUsersRepository } from '@/infra/database/sequelize/repositories/sequelize-count-users-repository'

export const makeCountUsersRepository = () =>
  new SequelizeCountUsersRepository()
