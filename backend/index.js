const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes')
const corsOptions = require('./configs/cors')
require('./configs/database')
require('dotenv').config()

const PORT = process.env.PORT
if(!PORT) throw new Error('Missing PORT variable in env file')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors(corsOptions))
app.use(router)

app.listen(PORT,() => console.log(`Listening on port ${PORT}`))