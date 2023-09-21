import { FastifyInstance } from 'fastify'

import { User } from '../../infra/database/sequelize/models/usuario'

export default function GetUserCompany(fastify: FastifyInstance) {
  fastify.get('/usuarios/:id/empresa', async function (req, res) {
    const resultado = await User.findByPk('', {
      include: 'empresa',
    })
    res.send(resultado?.empresa)
  })
}
