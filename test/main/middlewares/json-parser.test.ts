import { setupApp } from '@/main/config/setup-app'
import { SequelizeService } from '@/main/config/setup-database'
import { FastifyInstance } from 'fastify'
import request from 'supertest'

let app: FastifyInstance | null | undefined = null
describe('Json Parser', () => {
  beforeAll(async () => {
    const appSetup = await setupApp()
    app = appSetup.app
  })
  afterAll(async () => {
    await SequelizeService.getInstance().close()
    await app?.close()
  })
  it('should parser body', async () => {
    app?.get('/test_json_parser', (req, res) => {
      res.send(req.body)
    })

    await app?.ready()
    request(app?.server)
      .get('/test_json_parser')
      .send({ name: 'any_name' })
      .expect({ name: 'any_name' })
  })
})
