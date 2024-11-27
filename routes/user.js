// routes/user.js
const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');

// Middleware para verificar el token JWT
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Suponiendo que el token esté en el header Authorization
  if (!token) {
    return res.status(403).json({ message: 'Acceso denegado, no se proporcionó token.' });
  }

  jwt.verify(token, 'TU_SECRETO', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token no válido' });
    }
    req.user = decoded; // Guarda el usuario decodificado
    next();
  });
};

// Endpoint para obtener el perfil del usuario
router.get('/profile', verifyToken, async (req, res) => {
  try {
    // Supongamos que el ID del usuario está en req.user.id (como se establece después de la verificación del token)
    const user = await Usuario.findById(req.user.id);
    
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Puedes llenar las mascotas asociadas si es necesario
    const userWithPets = await Usuario.findById(req.user.id).populate('mascotas');
    
    res.json(userWithPets);  // Devuelves los datos del usuario con las mascotas
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los datos del usuario' });
  }
});

module.exports = router;
