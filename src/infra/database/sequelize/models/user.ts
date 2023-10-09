import { Model, Sequelize, DataTypes, Optional } from 'sequelize'

import { CompanyModel } from './company'
type UserAttributes = {
  id: string
  nome: string
  createdAt: Date
  updatedAt: Date
}

type UserCreationAttributes = Optional<UserAttributes, 'id'> & {
  empresaId: string
}

export type Models = Sequelize['models']
export class UserModel extends Model<UserAttributes, UserCreationAttributes> {
  declare id: string
  declare nome: string
  declare createdAt: Date
  declare updatedAt: Date
  declare empresa: CompanyModel
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
