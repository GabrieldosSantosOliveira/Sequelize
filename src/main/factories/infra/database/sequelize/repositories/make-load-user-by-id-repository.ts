import { SequelizeLoadUserByIdRepository } from '@/infra/database/sequelize/repositories/sequelize-load-user-by-id-repository'

export const makeLoadUserByIdRepository = () =>
  new SequelizeLoadUserByIdRepository()
