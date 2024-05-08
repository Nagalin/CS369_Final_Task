const router = require('express').Router()
const {loginController,getNewAccessToken} = require('../controllers/authController')

router.post('/login', loginController)
router.get('/access-token',getNewAccessToken)

module.exports = router