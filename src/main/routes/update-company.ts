import { FastifyInstance } from 'fastify'

import { CompanyModel } from '../../infra/database/sequelize/models/company'

export default function UpdateCompany(fastify: FastifyInstance) {
  fastify.put('/empresas/:id', async function (req, res) {
    const resultado = await CompanyModel.update(req.body as any, {
      where: req.params as any,
    })
    res.send(resultado)
  })
}
