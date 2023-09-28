import { FastifyInstance } from 'fastify'

import { UserModel } from '../../infra/database/sequelize/models/user'

export default function GetUsers(fastify: FastifyInstance) {
  fastify.get('/usuarios', async function (req, res) {
    const resultado = await UserModel.findAll()
    res.send(resultado)
  })
}
