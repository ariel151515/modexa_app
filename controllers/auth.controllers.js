const bcrypt = require('bcrypt');
const User = require('./../models/User.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const transporter = require('../emailConfig.js'); // Ruta al archivo de configuración

exports.signUp = async (req, res) => {
    try {
        const { name, email, password, timeZone, subscription } = req.body;

        const userExiste = await User.findOne({ email });
        if (userExiste) {
            res.status(401).json({ message: '¡El usuario ya existe!' });
        } else {
            const user = new User({
                name,
                email,
                password,
                timeZone,
                subscription: "Estandar"
            });

            const savedUser = user;
            savedUser.password = await User.encryptPassword(user.password);
            await savedUser.save();
        }

        res.status(201).json({ message: '¡Usuario agregado con éxito!' });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error del servidor' });
    }
};


exports.signIn = async (req, res) => {
    try {
        const userFound = await User.findOne({ email: req.body.email });
        if (!userFound) {
            return res.status(404).json({ message: "Email no registrado" });
        }

        const matchPassword = await User.comparePassword(req.body.password, userFound.password);
        if (!matchPassword) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ id: userFound._id }, process.env.SECRET, {
            expiresIn: '1d' // 1 dia
        })

        res.status(201).json({ token });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Hubo un problema en el servidor, por favor intenta de nuevo más tarde' });
    }
};


// Ruta para solicitar la recuperación de contraseña
exports.forgotPassword = async (req, res) => {
    try {
        const email = req.body.email;
        const userFound = await User.findOne({ email: req.body.email });
        if (!userFound) {
            return res.status(404).json({ message: "Email no registrado" });
        }

        const token = jwt.sign({ id: userFound._id }, process.env.SECRET, { expiresIn: '1d' })

        res.status(201).json({ token })

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Hubo un problema en el servidor, por favor intenta de nuevo más tarde' });
    }
};


exports.resetPassword = async (req, res) => {
    const token = req.params.token;
    const newPassword = req.body.password;

    try {
        // Verifica si el token es válido y no ha expirado
        const decodedToken = jwt.verify(token, process.env.SECRET);

        // Busca al usuario por su ID (puedes ajustar esto según tu modelo de datos)
        const user = await User.findById(decodedToken.id);

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Actualiza la contraseña del usuario en la base de datos
        user.password = await User.encryptPassword(newPassword);
        await user.save();

        res.json({ message: 'Contraseña actualizada con éxito' });
    } catch (err) {
        console.error(err);
        return res.status(401).json({ message: 'Token inválido o expirado' });
    }
};

