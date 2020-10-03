const express = require('express')
const mongodb = require('mongodb')

const buildRoutes = require('./api/index')
const client = mongodb.MongoClient

const config = require('./config')()

const initServer = (config, routeBuilder) => {
  console.log('[Server] Starting server')
  console.log(`[Server] Server config: ${config}`)

  const app = express()

  client.connect(config.database, function(err) {
    if(err) {
      console.log('database is not connected')
    }
    else {
      console.log('connected!!')
    }
  })

  app.use(express.json())

  routeBuilder(app)

  const port = config.server.port
  app.listen(port, () => {
    console.log(`[Server] Server listening on port ${port}`)
  })
}


module.exports = function App () {
  initServer(config, buildRoutes)
}
