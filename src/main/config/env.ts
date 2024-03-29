import 'dotenv/config'
import { Options } from 'sequelize'
export const env = {
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: Number(process.env.DB_PORT) || 3000,
  DB_DIALECT: process.env.DB_DIALECT as Options['dialect'],
  APP_PORT: Number(process.env.APP_PORT) || 3333,
  NODE_ENV: process.env.NODE_ENV === 'dev',
  BASE_URL: process.env.BASE_URL,
}
