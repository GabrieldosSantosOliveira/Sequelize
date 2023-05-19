import { Router } from 'express'

import { Company } from '../../infra/database/sequelize/models/empresa'

export default function GetCompanyOfUser(router: Router) {
  router.get('/empresas/:id/usuarios', async function (req, res) {
    const resultado = await Company.findByPk(req.params.id, {
      include: 'usuarios',
    })
    res.json(resultado?.usuarios)
  })
}
