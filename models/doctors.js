const mongoose = require('mongoose');

const doctorsSchema = new mongoose.Schema({
    nombre: String,
    especialidad: String,
    contacto: String,
});

module.exports = mongoose.model('Doctor', doctorsSchema, 'doctors');