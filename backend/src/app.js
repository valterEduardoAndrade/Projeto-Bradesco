const express = require('express')
const verifyRoutes = require('./routes/verifyRoutes')
const app = express()

app.use(express.json())

app.use('/api', verifyRoutes)

app.get('/health', (req, res) => {
    res.json({
        status: 'API ONLINE'
    })
})

module.exports = app