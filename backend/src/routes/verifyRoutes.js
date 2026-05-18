const express = require('express')

const router = express.Router()

const {
    verifyPhone
} = require('../controllers/verifyController')

router.get('/verify/:phone', verifyPhone)

module.exports = router