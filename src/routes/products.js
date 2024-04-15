const express = require('express')
const router = express.Router()

const productController = require('../app/controllers/ProductController')

router.use('/:slug', productController.index)
router.use('/', productController.index)

module.exports = router