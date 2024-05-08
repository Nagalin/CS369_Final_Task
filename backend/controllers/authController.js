const sql = require('../configs/database')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const generateToken = require('../utils/generateToken')
const extractTokenFromHeader = require('../utils/extractTokenFromHeader')
require('dotenv').config()

//@description      authenticate user's credential
//@route            POST /login
//@access           public
const loginController = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) 
        return res.status(400).send('Username and password are required');
    
    try {
        const pool = await sql.connect();
        const result = await pool.request()
            .input('username', sql.VarChar, username)
            .query('SELECT * FROM users WHERE username = @username');

        if (result.recordset.length === 0 
            || !await bcrypt.compare(password,result.recordset[0].password)) 
            return res.status(401).send('Invalid username or password')

        const accessToken = generateToken('accessToken',result.recordset[0].id)
        const refreshToken = generateToken('refreshToken',result.recordset[0].id)

        res.cookie('access-token',accessToken,{httpOnly: true})
        res.cookie('refresh-token',refreshToken,{httpOnly: true})
        res.end()
    
    } catch (err) {
        console.error(err)
        return res.status(500).send('Internal server error');
    }
}

//@description      create new access token with valid refresh token
//@route            GET /access-token
//@access           public
const getNewAccessToken = async (req,res) => {
    const REFRESH_TOKEN_KEY = process.env.REFRESH_TOKEN_KEY
    const cookiesHeader = req.headers.cookie
    if(!cookiesHeader) return res.status(403).send('cookie headers are missing')

    const refreshToken = extractTokenFromHeader('refresh-token',cookiesHeader)
    if(!refreshToken) return res.status(403).send('refresh token is missing')

    jwt.verify(refreshToken,REFRESH_TOKEN_KEY,(err,decoded) => {
        if(err) return res.status(403).send('invalid refresh token')

        const accessToken = generateToken('accessToken',decoded.id)
        res.cookie('access-token',accessToken,{httpOnly: true}).end()
    })
}

module.exports = {loginController,getNewAccessToken}