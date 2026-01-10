const express = require('express');
const cors = require('cors');

const createUser = require('./routes/users/creatrUser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  // origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:5173', 'http://localhost:4200'],
  origin: ['http://localhost:5173'],
  credentials: true
}));

app.use(express.json());

// Ruta test
app.get('/', (req, res) => {
  res.json({
    message: 'Visma Challenge Backend API',
    status: 'running',
    timestamp: new Date().toISOString()
  });
});

// POST / users - Crear usuario
app.post('/users', (req, res) => {
  try {
    createUser(req.body, res);
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;