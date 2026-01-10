async function createUser(req, res) {
    console.log(req, 'req.body')
    try {
        res.status(201).json({
            success: true,
            message: 'Usuario creado exitosamente',
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al crear usuario',
            error: error.message
        });
    }
}

module.exports = createUser;