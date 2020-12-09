const express = require('express')
const server = express()
const carsRouter = require('./cars/cars-router')

server.get('/', (req, res) => {
    res.send('hello there')
})

server.use(express.json())
server.use('/cars', carsRouter)

module.exports = server;