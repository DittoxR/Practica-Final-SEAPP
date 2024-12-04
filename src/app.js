const express = require('express');
const session = require('express-session');
const NoteRoutes = require('./routes/noteRoutes');
const authRoutes = require('./routes/authRoutes'); // Importar rutas de autenticación
const sequelize = require('./models/db');
const sessionMiddleware = require('./middleware/auth'); // Importar middleware de autenticación
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public')); // Servir archivos estáticos desde la carpeta public
app.set('views', './src/views');   // Establecer la carpeta de vistas
app.set('view engine', 'ejs');     // Motor de plantillas EJS

// Configuración de sesiones
app.use(
    session({
        secret: 'mi_secreto',
        resave: false,
        saveUninitialized: false,
    })
);

// Rutas de autenticación (registro, login, logout)
app.use(authRoutes);

// Proteger las rutas del blog con el middleware de sesiones
app.use('/', sessionMiddleware, NoteRoutes);

// Sincronizar base de datos y arrancar el servidor
sequelize.sync().then(() => {
    app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
});
