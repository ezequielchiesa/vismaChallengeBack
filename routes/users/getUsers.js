const { executeQuery } = require('../../dbConn/connection');

async function getUsers(userData, res) {
    // console.log(userData, 'userData')
    try {

        const query = `
            SELECT name, id from USERS where active = TRUE;
        `;

        const result = await executeQuery(query);

        res.status(200).json({
            success: true,
            message: 'Lista de Usuarios',
            data: result.data
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al consultar lista de usuarios',
            error: error.error || error.message
        });
    }
}

module.exports = getUsers;