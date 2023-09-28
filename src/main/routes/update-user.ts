import { FastifyInstance } from 'fastify'

import { UserModel } from '../../infra/database/sequelize/models/user'

export default function UpdateUser(fastify: FastifyInstance) {
  fastify.put('/usuarios/:id', async function (req, res) {
    const resultado = await UserModel.update(req.body as any, {
      where: req.params as any,
    })
    res.send(resultado)
  })
}
