const express = require('express');
const cors = require('cors');
require('dotenv').config({ quiet: true });

const createUser = require('./routes/users/createUser');
const getUsers = require('./routes/users/getUsers');
const createTask = require('./routes/task/createTast');
const getTasks = require('./routes/task/getTasks');
const { testConnection } = require('./dbConn/connection');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
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

// GET / getUsers - Obtener lista usuarios
app.get('/getUsers', (req, res) => {
  try {
    getUsers(req.body, res);
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});

// POST / task - Crear tarea
app.post('/task', (req, res) => {
  try {
    createTask(req.body, res);
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});

// GET / getTasks - Obtener lista tareas
app.get('/getTasks', (req, res) => {
  try {
    getTasks(req.body, res);
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});

app.listen(PORT, async () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  await testConnection(); // Testear conexión al iniciar
});

module.exports = app;