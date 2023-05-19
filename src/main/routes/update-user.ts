import { Router } from 'express'

import { User } from '../../infra/database/sequelize/models/usuario'

export default function UpdateUser(router: Router) {
  router.put('/usuarios/:id', async function (req, res) {
    const resultado = await User.update(req.body, { where: req.params })
    res.json(resultado)
  })
}
