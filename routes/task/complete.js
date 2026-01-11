const { executeQuery } = require('../../dbConn/connection');

async function completeTask(taskId, res) {
    try {
        // Validar que el ID sea un número
        if (!taskId || isNaN(taskId)) {
            return res.status(400).json({
                success: false,
                message: 'ID de tarea inválido'
            });
        }

        // Query para marcar la tarea como completa
        const query = `
            UPDATE tasks 
            SET status = TRUE 
            WHERE id = ?;
        `;
        const params = [taskId];

        const result = await executeQuery(query, params);

        // Verificar si se actualizó alguna fila
        if (result.data.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Tarea no encontrada o ya está completa'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Tarea marcada como completa',
            data: {
                id: taskId,
                completed: true
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al completar tarea',
            error: error.error || error.message
        });
    }
}

module.exports = completeTask;