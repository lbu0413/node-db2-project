const knex = require('knex')

const config = require('./knexfile')

// const db = knex(
//     process.env.NODE_ENV === 'production'
//      ? config.production
//      : config.development
// )

const database = 'development'

module.exports = knex(config[database]);