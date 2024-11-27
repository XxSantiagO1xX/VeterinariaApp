const mongoose = require('mongoose');

const appointmentsSchema = new mongoose.Schema({
    id_dueño: {type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'},
    id_mascota: {type: mongoose.Schema.Types.ObjectId, ref: 'Mascota'},
    id_doctor: {type: mongoose.Schema.Types.ObjectId, ref: 'Doctor'},
    fecha_hora: Date,
    motivo: String,
    estado: String,
});

module.exports = mongoose.model('Cita', appointmentsSchema, 'appointments');