const express = require('express')

const router = express.Router()

router.get('/verify/phone', (req, res) => {

    const { phone } = req.params

    res.json({
        success: true,
        phone,
        status: 'safe'
    })
})

module.exports = router