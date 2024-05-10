const router = require('express').Router()
const upload = require('../configs/multer')
const { addProduct, fetchProduct } = require('../controllers/productController')
const authenUser = require('../middlewares/authenUser')

router.post('/product', authenUser, upload.single('pictureName'), addProduct)
router.get('/product', fetchProduct)


module.exports = router