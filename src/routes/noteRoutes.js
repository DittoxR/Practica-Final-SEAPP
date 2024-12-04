const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// Crear una nueva nota
router.post('/create', async (req, res) => {
    const { title, content } = req.body;
    await Note.create({ title, content });
    res.redirect('/');
});

// Mostrar todas las notas
router.get('/', async (req, res) => {
    const notes = await Note.findAll();
    res.render('index', { notes });
});

module.exports = router;

