import { Model, Sequelize, DataTypes, Optional } from 'sequelize'

import { Company } from './empresa'
type UserAttributes = {
  id: string
  nome: string
  createdAt: Date
  updatedAt: Date
}

type UserCreationAttributes = Optional<UserAttributes, 'id'>

export type Models = Sequelize['models']
export class User extends Model<UserAttributes, UserCreationAttributes> {
  id: string
  nome: string
  createdAt: Date
  updatedAt: Date
  empresa: Company
  static associate(models: Models) {
    this.belongsTo(models.empresa, { as: 'empresa' })
  }

  static initModel(sequelize: Sequelize) {
    this.init(
      {
        nome: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        id: { type: DataTypes.STRING, primaryKey: true },
        updatedAt: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: 'usuario',
      },
    )
  }
}
