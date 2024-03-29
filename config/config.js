require('dotenv/config')
const config = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: Number(process.env.DB_PORT),
  define: {
    timestamps: true,
  },
}
module.exports = config
