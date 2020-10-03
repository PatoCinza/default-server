const fs = require('fs')
const dotenv = require('dotenv')
const serverConfig = require('./server')

module.exports = function setupConfig () {
  const environment = process.env.NODE_ENV || 'development'

  dotenv.config()

  if (environment !== 'production') {
    const envConfig = dotenv.parse(fs.readFileSync(`.env.${environment}`))
    for (const key in envConfig) {
      if (envConfig[key]) {
        process.env[key] = envConfig[key]
      }
    }
  }

  return {
    server: serverConfig,
    database: process.env.DB_HOST
  }
}
