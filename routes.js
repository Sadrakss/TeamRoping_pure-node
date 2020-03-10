const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
    const name = req.body.name
    const query = `INSERT INTO author("name_author")
    VALUES ($name)`
    return res.render('index.html')
})

module.exports = routes