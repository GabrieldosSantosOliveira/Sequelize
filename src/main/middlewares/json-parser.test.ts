import { Express } from 'express'
import { Sequelize } from 'sequelize'
import request from 'supertest'

import { setupApp } from '../config/setup-app'
let app: Express
let sequelize: Sequelize
describe('Json Parser', () => {
  beforeAll(async () => {
    const appSetup = await setupApp()
    app = appSetup.app
    sequelize = appSetup.sequelize
  })
  afterAll(async () => {
    await sequelize.close()
  })
  it('should parser body', (done) => {
    app.get('/test_json_parser', (req, res) => {
      res.send(req.body)
    })
    request(app)
      .get('/test_json_parser')
      .send({ name: 'any_name' })
      .expect({ name: 'any_name' }, done)
  })
})
