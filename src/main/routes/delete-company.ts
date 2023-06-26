import { FastifyInstance } from 'fastify'

import { Company } from '../../infra/database/sequelize/models/empresa'

export default function DeleteCompany(fastify: FastifyInstance) {
  fastify.delete('/empresas/:id', async function (req, res) {
    const resultado = await Company.destroy({ where: req.params as any })
    res.send(resultado)
  })
}
