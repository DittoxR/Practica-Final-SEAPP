const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Página de login
router.get('/login', (req, res) => {
    res.render('login', { error: null });
});

// Procesar login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (user && (await bcrypt.compare(password, user.password))) {
        req.session.userId = user.id; // Guardar el ID del usuario en la sesión
        return res.redirect('/');
    }

    res.render('login', { error: 'Credenciales inválidas' });
});

// Registro de usuarios
router.get('/register', (req, res) => {
    res.render('register', { error: null });
});

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        await User.create({ username, password });
        res.redirect('/login');
    } catch (error) {
        res.render('register', { error: 'Error al registrar usuario' });
    }
});

// Cerrar sesión
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
});

module.exports = router;
