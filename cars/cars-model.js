const db = require('../dbConfig')

module.exports = {
    get(){
        return db('cars')
    }
}