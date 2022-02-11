const router = require('express').Router()
const {createProduct, getAllProduct} = require('../controllers/products')

router.route('/').post(createProduct)
router.route('/').get(getAllProduct)


module.exports = router