import { SequelizeCreateCompanyRepository } from '@/infra/database/sequelize/repositories/sequelize-create-company-repository'

export const makeCreateCompanyRepository = () =>
  new SequelizeCreateCompanyRepository()
