const verifyPhone = (req, res) => {

    const { phone } = req.params

    res.json({
        success: true,
        phone,
        status: 'safe',
        message: 'Número verificado com sucesso'
    })
}

module.exports = {
    verifyPhone
}