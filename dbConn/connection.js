const mysql = require('mysql2/promise');
require('dotenv').config({ quiet: true });

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

const pool = mysql.createPool(dbConfig);

// Función para testear la conexión
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Conexión a MySQL exitosa');
    connection.release();
    return true;
  } catch (error) {
    console.error('❌ Error conectando a MySQL:', error.message);
    return false;
  }
}

// Función reutilizable para ejecutar queries
async function executeQuery(query, params = []) {
  try {
    const [results] = await pool.execute(query, params);
    return {
      success: true,
      data: results
    };
  } catch (error) {
    console.error('❌ Error ejecutando query:', error.message);
    throw {
      success: false,
      error: error.message,
      code: error.code
    };
  }
}

module.exports = { pool, testConnection, executeQuery };