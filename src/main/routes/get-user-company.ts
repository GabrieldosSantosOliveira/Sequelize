import { FastifyInstance } from 'fastify'

import { UserModel } from '../../infra/database/sequelize/models/user'

export default function GetUserCompany(fastify: FastifyInstance) {
  fastify.get('/usuarios/:id/empresa', async function (req, res) {
    const resultado = await UserModel.findByPk('', {
      include: 'empresa',
    })
    res.send(resultado?.empresa)
  })
}
