const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('./configs/database')
require('dotenv').config()

const PORT = process.env.PORT ?? 5000
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.listen(PORT,() => console.log(`Listening on port ${PORT}`))