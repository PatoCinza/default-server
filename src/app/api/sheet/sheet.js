module.exports = function buildSheetRoutes (app) {
  app.get('/sheet', (req, res) => {
    res.json({ route: 'sheet' })
  })
}
