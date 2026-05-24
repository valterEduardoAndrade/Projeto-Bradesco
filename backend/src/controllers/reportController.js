const pool = require('../config/database')

const normalizePhone = (phone) => {
    return String(phone || '').replace(/\D/g, '')
}

const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const createReport = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            message
        } = req.body

        if (!name || !email || !phone || !message) {
            return res.status(400).json({
                success: false,
                message: 'Nome, email, telefone e mensagem sao obrigatorios'
            })
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({
                success: false,
                message: 'Email invalido'
            })
        }

        const normalizedPhone = normalizePhone(phone)

        if (normalizedPhone.length < 8 || normalizedPhone.length > 20) {
            return res.status(400).json({
                success: false,
                message: 'Telefone invalido'
            })
        }

        const result = await pool.query(
            `INSERT INTO fraud_reports
                (reporter_name, reporter_email, reported_phone, message)
             VALUES ($1, $2, $3, $4)
             RETURNING id, reporter_name, reporter_email, reported_phone, message, created_at`,
            [
                name.trim(),
                email.trim().toLowerCase(),
                normalizedPhone,
                message.trim()
            ]
        )

        res.status(201).json({
            success: true,
            message: 'Denuncia registrada com sucesso',
            data: result.rows[0]
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Erro ao registrar denuncia'
        })
    }
}

const getReports = async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT id, reporter_name, reporter_email, reported_phone, message, created_at
             FROM fraud_reports
             ORDER BY created_at DESC`
        )

        res.json({
            success: true,
            total: result.rows.length,
            data: result.rows
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Erro ao listar denuncias'
        })
    }
}

module.exports = {
    createReport,
    getReports
}
