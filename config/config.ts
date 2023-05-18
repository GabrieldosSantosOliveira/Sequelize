import * as dotenv from 'dotenv'
import { Options } from 'sequelize'
dotenv.config()
const config: Options = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT as Options['dialect'],
  port: Number(process.env.DB_PORT),
  define: {
    timestamps: true,
  },
}
export default config
