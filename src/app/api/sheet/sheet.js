module.exports = function buildSheetRoutes (app, db) {
  const sheetsCollection = db.collection('sheets')

  app.get('/sheet', (req, res) => {
    sheetsCollection.find().toArray()
      .then(results => res.status(200).json(results))
      .catch(error => res.json(error))
  })

  app.post('/sheet', (req, res) => {
    sheetsCollection.insertOne(req.body)
      .then(result => res.json(result))
      .catch(error => res.json(error))
  })
}
