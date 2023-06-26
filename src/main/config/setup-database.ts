import { Sequelize } from 'sequelize'

import { env } from '../config/env'
import { Aluno } from './../../infra/database/sequelize/models/aluno'
import { Company } from './../../infra/database/sequelize/models/empresa'
import { User } from './../../infra/database/sequelize/models/usuario'

export const setupDatabase = () => {
  const sequelize = new Sequelize(
    env.DB_DATABASE as string,
    env.DB_USERNAME as string,
    env.DB_PASSWORD as string,
    {
      dialect: env.DB_DIALECT,
      port: env.DB_PORT,
      host: env.DB_HOST,
    },
  )

  Aluno.initModel(sequelize)
  Company.initModel(sequelize)
  User.initModel(sequelize)
  Company.associate(sequelize.models)
  User.associate(sequelize.models)
  return { sequelize }
}
