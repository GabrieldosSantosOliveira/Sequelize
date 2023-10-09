import { SequelizeLoadAllUsersRepository } from '@/infra/database/sequelize/repositories/sequelize-load-all-users-repository'

export const makeLoadAllUsersRepository = () =>
  new SequelizeLoadAllUsersRepository()
