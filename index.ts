import express, { json, urlencoded } from 'express'

import 'dotenv/config'
import { Company, User } from './models/index'
const app = express()
app.use(json())
app.use(
  urlencoded({
    extended: true,
  }),
)
app.get('/usuarios/:id/empresa', async function (req, res) {
  const resultado = await User.findByPk(req.params.id, {
    include: 'empresa',
  })
  res.json(resultado?.empresa)
})
app.get('/usuarios/:id', async function (req, res) {
  const resultado = await User.findByPk(req.params.id)
  res.json(resultado)
})

app.get('/usuarios', async function (req, res) {
  const resultado = await User.findAll()
  res.json(resultado)
})
app.post('/usuarios', async function (req, res) {
  const resultado = await User.create(req.body)
  res.json(resultado)
})
app.put('/usuarios/:id', async function (req, res) {
  const resultado = await User.update(req.body, { where: req.params })
  res.json(resultado)
})
app.delete('/usuarios/:id', async function (req, res) {
  const resultado = await User.destroy({ where: req.params })
  res.json(resultado)
})

app.get('/empresas/:id', async function (req, res) {
  const resultado = await Company.findByPk(req.params.id)
  res.json(resultado)
})
app.get('/empresas/:id/usuarios', async function (req, res) {
  const resultado = await Company.findByPk(req.params.id, {
    include: 'usuarios',
  })
  res.json(resultado?.usuarios)
})
app.get('/empresas', async function (req, res) {
  const resultado = await Company.findAll()
  res.json(resultado)
})
app.post('/empresas', async function (req, res) {
  const resultado = await Company.create(req.body)
  res.json(resultado)
})
app.put('/empresas/:id', async function (req, res) {
  const resultado = await Company.update(req.body, { where: req.params })
  res.json(resultado)
})
app.delete('/empresas/:id', async function (req, res) {
  const resultado = await Company.destroy({ where: req.params })
  res.json(resultado)
})
const PORT = Number(process.env.APP_PORT) || 3000
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
