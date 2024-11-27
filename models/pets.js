const mongoose = require('mongoose');

const mascotaSchema = new mongoose.Schema({
    nombre: String,
    especie: String,
    raza: String,
    edad: Number,
    sexo: String,
    id_dueño: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'},
    historial_medico: [{ type: mongoose.Schema.Types.ObjectId, ref: 'HistorialMeico'}],
});

module.exports = mongoose.model('Mascota' , mascotaSchema,'pets');