import { SequelizeLoadCompanyRepository } from '@/infra/database/sequelize/repositories/sequelize-load-company-repository'

export const makeLoadCompanyRepository = () =>
  new SequelizeLoadCompanyRepository()
