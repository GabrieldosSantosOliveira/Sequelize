import { SequelizeLoadCompaniesRepository } from '@/infra/database/sequelize/repositories/sequelize-load-companies-repository'

export const makeLoadCompaniesRepository = () =>
  new SequelizeLoadCompaniesRepository()
