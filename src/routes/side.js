import express from 'express'
import { register } from '../controllers/AuthController'
const router = express.Router()

const sideController = require('../controllers/SideController')

router.get('/trangchu', sideController.index)
router.get('/login', (req, res) => {
    res.render('login', {"layout": false})
})
router.get('/register', (req, res) => {
    res.render('register', {"layout": false})
})

router.post('/register', register)

module.exports = router