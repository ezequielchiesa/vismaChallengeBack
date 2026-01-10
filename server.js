const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta básica de prueba
app.get('/', (req, res) => {
  res.json({
    message: 'Visma Challenge Backend API',
    status: 'running',
    timestamp: new Date().toISOString()
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;