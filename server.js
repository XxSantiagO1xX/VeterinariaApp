require('dotenv').config();
const express = require('express');
require('./database'); // Conectar a MongoDB

const Usuario = require('./models/users');
const Mascota = require('./models/pets');
const HistorialMedico = require('./models/medical_history');
const Cita = require('./models/appointments');
const Doctor = require('./models/doctors');

const app = express();
app.use(express.json());

// Ruta para crear un usuario
app.post('/users', async (req, res) => {
    try {
        const newUser = new Usuario(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Ruta para crear una mascota
app.get('/pets', async (req, res) => {
    try {
        const pets = new Mascota.find({});
        res.json(pets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ruta para crear una cita
app.post('/appointments', async (req, res) => {
    try {
        const newAppointment = new Cita(req.body);
        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Ruta para crear un doctor
app.post('/doctors', async (req, res) => {
    try {
        const newDoctor = new Doctor(req.body);
        await newDoctor.save();
        res.status(201).json(newDoctor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Ruta para crear un historial médico
app.post('/medical_history', async (req, res) => {
    try {
        const newMedHistory = new HistorialMedico(req.body);
        await newMedHistory.save();
        res.status(201).json(newMedHistory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Ruta para obtener el perfil del usuario (con mascotas asociadas)
app.get('/users/profile', async (req, res) => {
    try {
        // Suponemos que el ID del usuario se pasa en la URL o a través de un middleware de autenticación.
        // Por ejemplo, aquí usamos req.query.id, pero en un proyecto real lo usarías con JWT en los headers
        const userId = req.query.id; // O usa req.user.id si tienes autenticación JWT

        const user = await Usuario.findById(userId).populate('mascotas');
        
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Devuelves el perfil con las mascotas
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los datos del usuario' });
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
