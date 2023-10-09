import { SequelizeLoadUsersOfCompanyRepository } from '@/infra/database/sequelize/repositories/sequelize-load-users-of-company-repository'

export const makeLoadUsersOfCompanyRepository = () =>
  new SequelizeLoadUsersOfCompanyRepository()
