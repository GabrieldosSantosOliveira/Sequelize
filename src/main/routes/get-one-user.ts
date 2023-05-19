import { Router } from 'express'

import { User } from '../../infra/database/sequelize/models/usuario'

export default function GetOneUser(router: Router) {
  router.get('/usuarios/:id', async function (req, res) {
    const resultado = await User.findByPk(req.params.id)
    res.json(resultado)
  })
}
