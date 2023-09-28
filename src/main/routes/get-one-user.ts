import { FastifyInstance } from 'fastify'

import { UserModel } from '../../infra/database/sequelize/models/user'

export default function GetOneUser(fastify: FastifyInstance) {
  fastify.get('/usuarios/:id', async function (req, res) {
    const resultado = await UserModel.findByPk('')
    res.send(resultado)
  })
}
