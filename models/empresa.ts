import { Model, Sequelize, DataTypes, Optional } from 'sequelize'

import { Models, User } from './usuario'
type CompanyAttributes = {
  id: string
  nome: string
  createdAt: Date
  updatedAt: Date
}

type CompanyCreationAttributes = Optional<CompanyAttributes, 'id'>
export class Company extends Model<
  CompanyAttributes,
  CompanyCreationAttributes
> {
  id: string
  nome: string
  createdAt: Date
  updatedAt: Date
  usuarios: User
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
