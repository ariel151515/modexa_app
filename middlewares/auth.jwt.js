const jwt = require('jsonwebtoken');
const { SECRET } = require('../config.js');
const User = require('../models/User.js');

exports.verifyToken = async (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) return res.status(403).json({ message: "No token provided" });

    try {
        // si el token existe extraemos lo que hay dentro (recibimos el objeto decoded)
        const decoded = jwt.verify(token, SECRET);

        // el objeto decoded devuelve un id
        const user = await User.findById(decoded.id, { password: 0 }); // verifica si existe el id del usuario en el modelo 
        if (!user) return res.status(404).json({ message: 'Usuario no registrado' });

        next();
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized!" });
    }
};
