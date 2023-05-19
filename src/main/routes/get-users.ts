import { Router } from 'express'

import { User } from '../../infra/database/sequelize/models/usuario'

export default function GetUsers(router: Router) {
  router.get('/usuarios', async function (req, res) {
    const resultado = await User.findAll()
    res.json(resultado)
  })
}
