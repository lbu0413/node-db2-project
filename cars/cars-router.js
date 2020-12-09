const express = require('express')
const router = express.Router()
const Cars = require('./cars-model')

router.get('/', (req, res) => {
    Cars.get()
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ err: err.message })
        })
})

module.exports = router;