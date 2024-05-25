const router = require('express').Router()
const authRoute = require('./authRoute')
const productRoute = require('./productRoute')
const authenUser = require('../middlewares/authenUser')
const sql = require('../configs/database')
router.use(authRoute)
router.use(productRoute)

router.get('/demo',async (req, res) => {
    try {
        const pool = await sql.connect()
        const result = await pool.request()
        .query(
        `SELECT * FROM users`
    )
    res.status(200).send(result.recordset)
        
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
        
    }
   

})
router.get('/auth', authenUser, (req,res) => res.status(200).end())

module.exports = router