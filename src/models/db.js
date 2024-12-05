require('dotenv').config(); // Cargar las variables de entorno desde .env
const Sequelize = require('sequelize');

// Configuración de Sequelize con variables de entorno
const sequelize = new Sequelize(
  process.env.DB_NAME, // Nombre de la base de datos
  process.env.DB_USER, // Usuario
  process.env.DB_PASSWORD, // Contraseña
  {
    host: process.env.DB_HOST, // Host (nombre del contenedor)
    port: process.env.DB_PORT || 3306, // Puerto de MySQL
    dialect: 'mysql',
    dialectOptions: process.env.DB_SOCKET
      ? { socketPath: process.env.DB_SOCKET } // Conexión por socket (si aplica)
      : {},
  }
);

// Verificar la conexión
sequelize.authenticate()
  .then(() => console.log('Conexión establecida exitosamente.'))
  .catch(err => console.error('Error al conectar a la base de datos:', err));

module.exports = sequelize;
