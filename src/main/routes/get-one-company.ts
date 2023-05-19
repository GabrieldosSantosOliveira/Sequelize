import { Router } from 'express'

import { Company } from '../../infra/database/sequelize/models/empresa'

export default function GetOneCompany(router: Router) {
  router.get('/empresas/:id', async function (req, res) {
    const resultado = await Company.findByPk(req.params.id)
    res.json(resultado)
  })
}
