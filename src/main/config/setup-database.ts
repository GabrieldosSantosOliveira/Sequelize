import { Sequelize } from 'sequelize'

import { env } from '../config/env'
import { Aluno } from './../../infra/database/sequelize/models/aluno'
import { Company } from './../../infra/database/sequelize/models/empresa'
import { User } from './../../infra/database/sequelize/models/usuario'

export const setupDatabase = () => {
  Aluno.initModel(SequelizeService.getInstance())
  Company.initModel(SequelizeService.getInstance())
  User.initModel(SequelizeService.getInstance())
  Company.associate(SequelizeService.getInstance().models)
  User.associate(SequelizeService.getInstance().models)
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
