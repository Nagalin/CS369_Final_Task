const router = require('express').Router()
const upload = require('../configs/multer')
const { addProduct } = require('../controllers/productController')

router.post('/product',upload.single('pictureName'), addProduct)



module.exports = router