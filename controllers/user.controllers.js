const User = require('../models/User.js');

// trae la info del usuario por id
exports.getUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        res.status(201).json({ user });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error al traer el usuario' });
    }
};
