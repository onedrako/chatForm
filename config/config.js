require('dotenv').config()

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT,
  dbUrl: process.env.DATABASE_URL,
  frontendUrl: process.env.FRONTEND_URL,
  localhost: process.env.LOCALHOST
}

module.exports = { config }
