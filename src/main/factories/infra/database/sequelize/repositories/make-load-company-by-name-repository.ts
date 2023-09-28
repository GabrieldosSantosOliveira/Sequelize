import { SequelizeLoadCompanyByNameRepository } from '@/infra/database/sequelize/repositories/sequelize-load-company-by-name-repository'

export const makeLoadCompanyByNameRepository = () =>
  new SequelizeLoadCompanyByNameRepository()
