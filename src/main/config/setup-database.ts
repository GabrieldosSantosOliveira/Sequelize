import { CompanyModel } from '@/infra/database/sequelize/models/company'
import { AlunoModel } from '@/infra/database/sequelize/models/student'
import { UserModel } from '@/infra/database/sequelize/models/user'
import { Sequelize } from 'sequelize'

import { env } from '../config/env'

export const setupDatabase = () => {
  AlunoModel.initModel(SequelizeService.getInstance())
  CompanyModel.initModel(SequelizeService.getInstance())
  UserModel.initModel(SequelizeService.getInstance())
  CompanyModel.associate(SequelizeService.getInstance().models)
  UserModel.associate(SequelizeService.getInstance().models)
}
export class SequelizeService extends Sequelize {
  private static _value: null | Sequelize = null
  private constructor() {
    super(
      env.DB_DATABASE as string,
      env.DB_USERNAME as string,
      env.DB_PASSWORD as string,
      {
        dialect: env.DB_DIALECT || 'postgres',
        port: env.DB_PORT,
        host: env.DB_HOST || 'localhost',
      },
    )
  }

  static getInstance() {
    if (!this._value) {
      this._value = new SequelizeService()
    }

    return this._value
  }
}
