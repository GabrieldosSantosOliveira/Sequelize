import { env } from './config/env'
import { setupApp } from './config/setup-app'
const { app } = setupApp()

app.listen(env.APP_PORT, () => {
  console.log(`http://localhost:${env.APP_PORT}`)
})
