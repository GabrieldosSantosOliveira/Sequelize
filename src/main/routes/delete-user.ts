import { FastifyInstance } from 'fastify'

import { User } from '../../infra/database/sequelize/models/usuario'

export default function DeleteUser(fastify: FastifyInstance) {
  fastify.delete('/usuarios/:id', async function (req, res) {
    const resultado = await User.destroy({ where: req.params as any })
    res.send(resultado)
  })
}
