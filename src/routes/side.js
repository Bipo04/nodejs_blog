const express = require('express')
const router = express.Router()

const sideController = require('../app/controllers/SideController')

router.use('/', sideController.index)

module.exports = router