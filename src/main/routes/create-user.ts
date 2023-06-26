import { FastifyInstance } from 'fastify'

import { User } from '../../infra/database/sequelize/models/usuario'

export default function CreateUser(fastify: FastifyInstance) {
  fastify.post('/usuarios', async function (req, res) {
    const resultado = await User.create(req.body as any)
    res.send(resultado)
  })
}
