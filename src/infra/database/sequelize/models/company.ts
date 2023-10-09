import { Model, Sequelize, DataTypes, Optional } from 'sequelize'

import { Models, UserModel } from './user'
type CompanyAttributes = {
  id: string
  nome: string
  createdAt: Date
  updatedAt: Date
}

type CompanyCreationAttributes = Optional<CompanyAttributes, 'id'>
export class CompanyModel extends Model<
  CompanyAttributes,
  CompanyCreationAttributes
> {
  declare id: string
  declare nome: string
  declare createdAt: Date
  declare updatedAt: Date
  declare usuarios: UserModel[]
  static associate(models: Models) {
    this.hasMany(models.usuario, { as: 'usuarios' })
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
        modelName: 'empresa',
      },
    )
  }
}
