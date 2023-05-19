import { Router } from 'express'

import { User } from '../../infra/database/sequelize/models/usuario'

export default function DeleteUser(router: Router) {
  router.delete('/usuarios/:id', async function (req, res) {
    const resultado = await User.destroy({ where: req.params })
    res.json(resultado)
  })
}
