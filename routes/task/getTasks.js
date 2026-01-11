const { executeQuery } = require('../../dbConn/connection');

async function getTasks(reqTasks, res) {
    try {

        const query = `
            select t.id, title, description, created_at, status, u.name
            from tasks t
            inner join users u
            on t.assigned_user_id = u.id and u.active = TRUE
            order by t.created_at desc;
        `;

        const result = await executeQuery(query);

        res.status(200).json({
            success: true,
            message: 'Lista de Tareas',
            data: result.data
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al consultar lista de tareas',
            error: error.error || error.message
        });
    }
}

module.exports = getTasks;