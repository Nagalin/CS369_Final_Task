const router = require('express').Router()
const authRoute = require('./authRoute')
const productRoute = require('./productRoute')
const authenUser = require('../middlewares/authenUser')

router.use(authRoute)
router.use(productRoute)
router.get('/auth', authenUser, (req,res) => res.status(200).end())

module.exports = router