import { FastifyInstance } from 'fastify'

import { Company } from '../../infra/database/sequelize/models/empresa'

export default function UpdateCompany(fastify: FastifyInstance) {
  fastify.put('/empresas/:id', async function (req, res) {
    const resultado = await Company.update(req.body as any, {
      where: req.params as any,
    })
    res.send(resultado)
  })
}
