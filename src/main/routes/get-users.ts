import { FastifyInstance } from 'fastify'

import { User } from '../../infra/database/sequelize/models/usuario'

export default function GetUsers(fastify: FastifyInstance) {
  fastify.get('/usuarios', async function (req, res) {
    const resultado = await User.findAll()
    res.send(resultado)
  })
}
