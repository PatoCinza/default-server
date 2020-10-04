const express = require('express')
const mongodb = require('mongodb')

const buildRoutes = require('./api/index')
const client = mongodb.MongoClient

const config = require('./config')()

const initDatabase = ({ host = '', name = '' }) => {
  return client.connect(host, { useUnifiedTopology: true })
    .then(client => {
      console.log('Connected to Database')
      return client.db(name)
    })
    .catch(error => console.error(error))
}

const initServer = async (config, routeBuilder) => {
  const app = express()

  const db = await initDatabase(config.database)

  app.use(express.json())

  routeBuilder(app, db)

  const port = config.server.port
  app.listen(port, () => {
    console.log(`[Server] Server listening on port ${port}`)
  })
}


module.exports = function App () {
  initServer(config, buildRoutes)
}
