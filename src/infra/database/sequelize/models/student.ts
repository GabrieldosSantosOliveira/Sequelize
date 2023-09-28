import { Model, DataTypes, Sequelize, Optional } from 'sequelize'
type AlunoAttributes = {
  id: string
  nome: string
  data_nascimento: Date
  idade: number
  createdAt: Date
  updatedAt: Date
}

type AlunoCreationAttributes = Optional<AlunoAttributes, 'id'>
export class AlunoModel extends Model<
  AlunoAttributes,
  AlunoCreationAttributes
> {
  declare id: string
  declare nome: string
  declare data_nascimento: Date
  declare idade: number
  declare createdAt: Date
  declare updatedAt: Date
  static initModel(sequelize: Sequelize) {
    this.init(
      {
        nome: DataTypes.STRING,
        idade: DataTypes.INTEGER,
        data_nascimento: DataTypes.DATE,
        createdAt: DataTypes.DATE,
        id: { type: DataTypes.STRING, primaryKey: true },
        updatedAt: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: 'aluno',
      },
    )
  }
}
