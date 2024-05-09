const router = require('express').Router()
const authRoute = require('./authRoute')
const productRoute = require('./productRoute')
const authenUser = require('../middlewares/isAuthenticated')

router.use(authRoute)
router.use(authenUser)
router.use(productRoute)
router.get('/auth',(req,res) => res.status(200).end())

module.exports = router