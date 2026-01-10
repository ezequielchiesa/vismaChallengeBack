const { executeQuery } = require('../../dbConn/connection');

async function createUser(userData, res) {
    // console.log(userData, 'userData')

    try {
        const { name, email } = userData;
        if (!name || !email) {
            return res.status(400).json({
                success: false,
                message: 'Nombre y email son requeridos'
            });
        }

        const query = `
            INSERT INTO users (name, email, active)
            VALUES (?, ?, TRUE);
        `;
        const params = [name, email];

        const result = await executeQuery(query, params);

        res.status(201).json({
            success: true,
            message: 'Usuario creado exitosamente',
            data: {
                id: result.data.insertId,
                name,
                email
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al crear usuario',
            error: error.error || error.message
        });
    }
}

module.exports = createUser;