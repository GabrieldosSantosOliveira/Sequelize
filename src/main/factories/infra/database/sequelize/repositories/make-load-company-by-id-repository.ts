import { SequelizeLoadCompanyRepository } from '@/infra/database/sequelize/repositories/sequelize-load-company-by-id-repository'

export const makeLoadCompanyByIdRepository = () =>
  new SequelizeLoadCompanyRepository()
