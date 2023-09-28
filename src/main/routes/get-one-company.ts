import { FastifyInstance } from 'fastify'

import { CompanyModel } from '../../infra/database/sequelize/models/company'

export default function GetOneCompany(fastify: FastifyInstance) {
  fastify.get('/empresas/:id', async function (req, res) {
    const resultado = await CompanyModel.findByPk('')
    res.send(resultado)
  })
}
