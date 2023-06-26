import { env } from './config/env'
import { setupApp } from './config/setup-app'
setupApp().then(({ app }) => {
  app.listen({ port: env.APP_PORT })
})
