const buildSheetRoutes = require('./sheet/sheet')

module.exports = function buildRoutes (app, db) {
  buildSheetRoutes(app, db)
}
