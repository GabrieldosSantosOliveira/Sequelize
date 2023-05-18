import { Sequelize } from 'sequelize'

import config from '../config/config'
import { Aluno } from './aluno'
import { Company } from './empresa'
import { User } from './usuario'
const sequelize = new Sequelize(
  config.database as string,
  config.username as string,
  config.password as string,
  config,
)
Aluno.initModel(sequelize)
Company.initModel(sequelize)
User.initModel(sequelize)
Company.associate(sequelize.models)
User.associate(sequelize.models)

export { Aluno, Company, User }
