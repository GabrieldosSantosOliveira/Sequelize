import { SequelizeCountCompaniesRepository } from '@/infra/database/sequelize/repositories/sequelize-count-companies-repository'

export const makeCountCompaniesRepository = () =>
  new SequelizeCountCompaniesRepository()
