const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('noteblog', 'usuario', 'contraseña', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
