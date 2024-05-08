const extractTokenFromHeader = require('../utils/extractTokenFromHeader')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const isAuthenticated = (req, res, next) => {
    const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY
    const cookiesHeader = req.headers.cookie
    if (!cookiesHeader) return res.status(403).send('Missing cookies header')

    const accessToken = extractTokenFromHeader('access-token',cookiesHeader)
    if(!accessToken) return res.status(403).send('Missing access token')

    jwt.verify(accessToken, ACCESS_TOKEN_KEY, (err, decoded) => {
        if(err) return res.status(403).send('invalid access token')
    
        req.id = decoded.id
        next()
    })
}

module.exports = isAuthenticated