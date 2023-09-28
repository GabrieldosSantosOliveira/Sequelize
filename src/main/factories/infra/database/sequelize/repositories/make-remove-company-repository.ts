import { SequelizeRemoveCompanyRepository } from '@/infra/database/sequelize/repositories/sequelize-remove-company-repository'

export const makeRemoveCompanyRepository = () =>
  new SequelizeRemoveCompanyRepository()
