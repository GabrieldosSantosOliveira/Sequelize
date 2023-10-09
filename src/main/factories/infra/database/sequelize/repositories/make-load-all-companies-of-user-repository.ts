import { SequelizeLoadAllCompaniesOfUserRepository } from '@/infra/database/sequelize/repositories/sequelize-load-all-companies-of-user-repository'

export const makeLoadAllCompaniesOfUserRepository = () =>
  new SequelizeLoadAllCompaniesOfUserRepository()
