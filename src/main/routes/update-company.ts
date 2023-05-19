import { Router } from 'express'

import { Company } from '../../infra/database/sequelize/models/empresa'

export default function UpdateCompany(router: Router) {
  router.put('/empresas/:id', async function (req, res) {
    const resultado = await Company.update(req.body, { where: req.params })
    res.json(resultado)
  })
}
