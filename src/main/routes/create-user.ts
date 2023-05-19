import { Router } from 'express'

import { User } from '../../infra/database/sequelize/models/usuario'

export default function CreateUser(router: Router) {
  router.post('/usuarios', async function (req, res) {
    const resultado = await User.create(req.body)
    res.json(resultado)
  })
}
