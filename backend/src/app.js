const express = require('express')
const cors = require('cors')

const verifyRoutes = require('./routes/verifyRoutes')
const reportRoutes = require('./routes/reportRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', verifyRoutes)
app.use('/api', reportRoutes)

app.get('/health', (req, res) => {
    res.json({
        status: 'API ONLINE'
    })
})

module.exports = app
