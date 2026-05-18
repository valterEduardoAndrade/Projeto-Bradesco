const reports = []

const createReport = (req, res) => {

    const {
        name,
        email,
        phone,
        message
    } = req.body

    const newReport = {
        id: reports.length + 1,
        name,
        email,
        phone,
        message
    }

    reports.push(newReport)

    res.status(201).json({
        success: true,
        message: 'Denúncia registrada com sucesso',
        data: newReport
    })
}

const getReports = (req, res) => {

    res.json({
        success: true,
        total: reports.length,
        data: reports
    })
}

module.exports = {
    createReport,
    getReports
}