// routes/auth.js
const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');

// Endpoint de login
router.post('/login', async (req, res) => {
  const { correo, contraseña } = req.body;

  try {
    const user = await Usuario.findOne({ correo });
    if (!user || user.contraseña !== contraseña) {
      return res.status(400).json({ message: 'Credenciales incorrectas' });
    }

    // Generar un token JWT usando la clave secreta desde el archivo .env
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Responder con el token
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Otras rutas de autenticación (por ejemplo, registro de usuario)
router.post('/register', async (req, res) => {
  const { nombre, correo, contraseña } = req.body;

  try {
    // Crear un nuevo usuario
    const newUser = new Usuario({ nombre, correo, contraseña });
    await newUser.save();

    // Generar un token JWT para el nuevo usuario
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor al registrar el usuario' });
  }
});

module.exports = router;

