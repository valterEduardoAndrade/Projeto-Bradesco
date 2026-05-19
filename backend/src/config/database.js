require('dotenv').config()

const { Pool } = require('pg')

const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'valter_admin',
    password: process.env.DB_PASSWORD || 'bradesco_seguro_2026',
    database: process.env.DB_NAME || 'safecall_bradesco'
})

module.exports = pool
