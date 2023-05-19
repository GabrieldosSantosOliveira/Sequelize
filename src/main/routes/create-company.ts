import { Router } from 'express'

import { Company } from '../../infra/database/sequelize/models/empresa'

export default function CreateCompany(router: Router) {
  router.post('/empresas', async function (req, res) {
    const resultado = await Company.create(req.body)
    res.json(resultado)
  })
}
