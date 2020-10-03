const buildSheetRoutes = require('./sheet/sheet')

module.exports = function buildRoutes (app) {
  buildSheetRoutes(app)
}
