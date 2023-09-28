import { FastifyInstance } from 'fastify'

import { UserModel } from '../../infra/database/sequelize/models/user'

export default function DeleteUser(fastify: FastifyInstance) {
  fastify.delete('/usuarios/:id', async function (req, res) {
    const resultado = await UserModel.destroy({ where: req.params as any })
    res.send(resultado)
  })
}
