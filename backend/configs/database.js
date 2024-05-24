const sql = require('mssql')
require('dotenv').config()

const config = {
    server:  process.env.SERVER,
    database: process.env.DATABASE,
    user: process.env.USERNAME,
    password:  process.env.PASSWORD,
    encrypt: false,
    trustServerCertificate: false
}

sql.connect(config)
.then(() => console.log('Connected to mssql database'))
.catch(err => console.error(err))

module.exports = sql