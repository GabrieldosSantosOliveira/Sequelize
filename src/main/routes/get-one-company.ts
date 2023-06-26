import { FastifyInstance } from 'fastify'

import { Company } from '../../infra/database/sequelize/models/empresa'

export default function GetOneCompany(fastify: FastifyInstance) {
  fastify.get('/empresas/:id', async function (req, res) {
    const resultado = await Company.findByPk(req.params.id as string)
    res.send(resultado)
  })
}
