const express = require('express');

const createUser = require('./routes/users/creatrUser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Ruta básica de prueba
app.get('/', (req, res) => {
  res.json({
    message: 'Visma Challenge Backend API',
    status: 'running',
    timestamp: new Date().toISOString()
  });
});

// POST /users - Crear usuario
app.post('/users', (req, res) => {
  console.log('llego aca 2');
  createUser(req);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;