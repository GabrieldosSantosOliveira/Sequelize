import { Company } from '@/infra/database/sequelize/models/empresa'
import { FastifyInstance } from 'fastify'

export default function CreateCompany(fastify: FastifyInstance) {
  fastify.post('/empresas', async function (req, res) {
    const resultado = await Company.create(req.body as any)
    res.send(resultado)
  })
}
