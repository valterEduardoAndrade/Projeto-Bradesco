const pool = require('../config/database')

const normalizePhone = (phone) => {
    return String(phone || '').replace(/\D/g, '')
}

const verifyPhone = async (req, res) => {
    try {
        const { phone } = req.params
        const normalizedPhone = normalizePhone(phone)

        if (normalizedPhone.length < 8 || normalizedPhone.length > 20) {
            return res.status(400).json({
                success: false,
                message: 'Telefone invalido'
            })
        }

        const officialResult = await pool.query(
            `SELECT id, phone_number, channel_name, description
             FROM official_numbers
             WHERE phone_number = $1 AND is_active = true
             LIMIT 1`,
            [normalizedPhone]
        )

        if (officialResult.rows.length > 0) {
            return res.json({
                success: true,
                phone: normalizedPhone,
                status: 'official',
                message: 'Numero oficial encontrado',
                data: officialResult.rows[0]
            })
        }

        const reportResult = await pool.query(
            `SELECT COUNT(*)::int AS total
             FROM fraud_reports
             WHERE reported_phone = $1`,
            [normalizedPhone]
        )

        const totalReports = reportResult.rows[0].total

        if (totalReports > 0) {
            return res.json({
                success: true,
                phone: normalizedPhone,
                status: 'suspicious',
                message: 'Numero ja reportado como suspeito',
                reports: totalReports
            })
        }

        res.json({
            success: true,
            phone: normalizedPhone,
            status: 'unknown',
            message: 'Numero nao encontrado na base'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Erro ao verificar numero'
        })
    }
}

module.exports = {
    verifyPhone
}
