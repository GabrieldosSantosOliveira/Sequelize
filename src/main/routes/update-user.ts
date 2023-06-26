import { FastifyInstance } from 'fastify'

import { User } from '../../infra/database/sequelize/models/usuario'

export default function UpdateUser(fastify: FastifyInstance) {
  fastify.put('/usuarios/:id', async function (req, res) {
    const resultado = await User.update(req.body as any, {
      where: req.params as any,
    })
    res.send(resultado)
  })
}
