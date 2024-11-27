// users.js (modelo de usuario)
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    correo: String,
    contraseña: String,
    rol: String,
    celular: String, // Campo añadido para el teléfono
    mascotas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mascota' }],
});

module.exports = mongoose.model('Usuario', usuarioSchema, 'users');
