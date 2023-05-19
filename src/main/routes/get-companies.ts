import { Router } from 'express'

import { Company } from '../../infra/database/sequelize/models/empresa'

export default function GetCompanies(router: Router) {
  router.get('/empresas', async function (req, res) {
    const resultado = await Company.findAll()
    res.json(resultado)
  })
}
