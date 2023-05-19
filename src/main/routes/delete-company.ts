import { Router } from 'express'

import { Company } from '../../infra/database/sequelize/models/empresa'

export default function DeleteCompany(router: Router) {
  router.delete('/empresas/:id', async function (req, res) {
    const resultado = await Company.destroy({ where: req.params })
    res.json(resultado)
  })
}
