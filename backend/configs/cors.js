require('dotenv').config()

const corsOptions = {
    origin: process.env.ORIGIN_URL,
    credentials: true
}

module.exports = corsOptions