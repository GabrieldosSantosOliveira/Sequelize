import { Router } from 'express'

import { User } from '../../infra/database/sequelize/models/usuario'

export default function GetUserCompany(router: Router) {
  router.get('/usuarios/:id/empresa', async function (req, res) {
    const resultado = await User.findByPk(req.params.id, {
      include: 'empresa',
    })
    res.json(resultado?.empresa)
  })
}
