require('./db')

const express = require('express')
const bodyParser = require('body-parser')

var postMessageRoutes = require('./controllers/postMessgageController')

var app = express()

app.use(bodyParser.json())

app.use('/postMessages', postMessageRoutes)

app.listen(4000, () => console.log('server started at: 4000'))

