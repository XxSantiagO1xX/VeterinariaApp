const mongoose = require('mongoose');

const medical_historySchema = new mongoose.Schema({
    id_pet: {type: mongoose.Schema.Types.ObjectId, ref: 'Mascota'},
    fecha_consulta: Date,
    descripcion: String,
    diagnostico: String,
    tratamiento: String,
    medicamentos: [String],
});

module.exports = mongoose.model('HistorialMedico', medical_historySchema, 'medical_history');