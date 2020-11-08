require('../db')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var postMessageRoutes = require('./controllers/postMessgageController')

var app = express()

app.use(bodyParser.json())
app.use(cors(3000, 'http://localhost:3000'))
app.use('/postMessages', postMessageRoutes)

app.listen(4000, () => console.log('server started at: 4000'))

