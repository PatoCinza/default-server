module.exports = (env) => ({
  host: env.DB_HOST || '',
  name: env.DB_NAME || ''
})
