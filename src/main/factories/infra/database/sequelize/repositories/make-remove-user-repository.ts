import { SequelizeRemoveUserRepository } from '@/infra/database/sequelize/repositories/sequelize-remove-user-repository'

export const makeRemoveUserRepository = () =>
  new SequelizeRemoveUserRepository()
