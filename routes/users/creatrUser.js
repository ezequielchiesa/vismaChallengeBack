async function createUser(req, res) {
    console.log(req)
    /*
        // Base de datos en memoria simple
        const users = [];

        try {
        const { name, email } = req.body;

        // Validaciones básicas
        if (!name || !email) {
        return res.status(400).json({
            error: 'Name and email are required'
        });
        }

        // Crear usuario simple
        const user = {
        id: Date.now(), // ID simple
        name,
        email,
        createdAt: new Date().toISOString()
        };

        // Guardar en el array
        users.push(user);

        res.status(201).json({
        message: 'User created successfully',
        user
        });

        } catch (error) {
            res.status(500).json({
            error: 'Internal server error'
            });
        }
     */
}

module.exports = createUser;