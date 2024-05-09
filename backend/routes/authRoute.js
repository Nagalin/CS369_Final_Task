const router = require('express').Router()
const {login, logout, getNewAccessToken} = require('../controllers/authController')

router.post('/login', login)
router.post('/logout',logout)
router.get('/access-token',getNewAccessToken)

module.exports = router