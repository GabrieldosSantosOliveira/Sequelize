import { FastifyInstance } from 'fastify'

import { User } from '../../infra/database/sequelize/models/usuario'

export default function GetOneUser(fastify: FastifyInstance) {
  fastify.get('/usuarios/:id', async function (req, res) {
    const resultado = await User.findByPk(req.params.id as string)
    res.send(resultado)
  })
}
