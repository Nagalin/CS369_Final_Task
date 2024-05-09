const jwt = require('jsonwebtoken')
require('dotenv').config()

const generateToken = (tokenType, id) => {
    const expirationTime = tokenType === 'accessToken' ? '10d': '2d'
    const SECRET_KEY = tokenType === 'accessToken'? 
    process.env.ACCESS_TOKEN_KEY : process.env.REFRESH_TOKEN_KEY

    const token = jwt.sign({id},SECRET_KEY,{expiresIn: expirationTime})
    return token
}

module.exports = generateToken