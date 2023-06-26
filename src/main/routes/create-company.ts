import { Company } from '@/infra/database/sequelize/models/empresa'
import { randomUUID } from 'crypto'
import { FastifyInstance } from 'fastify'

export default function CreateCompany(fastify: FastifyInstance) {
  fastify.post('/empresas', async function (req, res) {
    const resultado = await Company.create({
      ...req.body,
      id: randomUUID(),
    } as any)
    res.send(resultado)
  })
}
