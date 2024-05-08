const router = require('express').Router()
const authRoute = require('./authRoute')
const isAuthenticated = require('../middlewares/isAuthenticated')

router.use(authRoute)
router.use(isAuthenticated)
router.get('/auth',(req,res) => res.status(200).end())

module.exports = router