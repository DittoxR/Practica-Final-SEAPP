const { Sequelize } = require('sequelize');

// Conexión a la base de datos MySQL en un contenedor
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,  // Usar la variable de entorno para el host
    port: process.env.DB_PORT,  // Usar la variable de entorno para el puerto
    dialect: 'mysql',
});

module.exports = sequelize;
