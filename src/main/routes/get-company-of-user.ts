import { FastifyInstance } from 'fastify'

import { Company } from '../../infra/database/sequelize/models/empresa'

export default function GetCompanyOfUser(fastify: FastifyInstance) {
  fastify.get('/empresas/:id/usuarios', async function (req, res) {
    const resultado = await Company.findByPk('', {
      include: 'usuarios',
    })
    res.send(resultado?.usuarios)
  })
}
