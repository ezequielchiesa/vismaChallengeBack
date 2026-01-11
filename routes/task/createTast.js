const { executeQuery } = require('../../dbConn/connection');

async function createTask(taskData, res) {

    try {

        const { titulo, descripcion, usuario } = taskData;
        if (!titulo || !usuario) {
            return res.status(400).json({
                success: false,
                message: 'Usuario y título de tarea son requeridos'
            });
        }

        const query = `
            INSERT INTO tasks (title, description, assigned_user_id, status, created_at)
            VALUES (?, ?, ?, FALSE, NOW());
        `;
        const params = [titulo, descripcion, usuario];

        const result = await executeQuery(query, params);

        res.status(201).json({
            success: true,
            message: 'Tarea creado exitosamente',
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al crear tarea',
            error: error.error || error.message
        });
    }
}

module.exports = createTask;