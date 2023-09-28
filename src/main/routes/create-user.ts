import { FastifyInstance } from 'fastify'

import { UserModel } from '../../infra/database/sequelize/models/user'

export default function CreateUser(fastify: FastifyInstance) {
  fastify.post('/usuarios', async function (req, res) {
    const resultado = await UserModel.create(req.body as any)
    res.send(resultado)
  })
}
