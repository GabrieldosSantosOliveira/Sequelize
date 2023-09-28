import { FastifyInstance } from 'fastify'

import { CompanyModel } from '../../infra/database/sequelize/models/company'

export default function GetCompanyOfUser(fastify: FastifyInstance) {
  fastify.get('/empresas/:id/usuarios', async function (req, res) {
    const resultado = await CompanyModel.findByPk('', {
      include: 'usuarios',
    })
    res.send(resultado?.usuarios)
  })
}
