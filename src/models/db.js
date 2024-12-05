const { Sequelize } = require('sequelize');

// Conexión a la base de datos MySQL en un contenedor
const sequelize = new Sequelize('noteblog', 'usuario', 'contraseña', {
    host: 'mysql-container',  // Nombre del contenedor MySQL
    dialect: 'mysql',
});

module.exports = sequelize;
