import { SequelizeCreateUserRepository } from '@/infra/database/sequelize/repositories/sequelize-create-user-repository'

export const makeCreateUserRepository = () =>
  new SequelizeCreateUserRepository()
