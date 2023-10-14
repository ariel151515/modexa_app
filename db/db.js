const mongoose = require("mongoose");
require('dotenv').config();


mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tlsAllowInvalidCertificates: true, // Habilitar certificados SSL no válidos
})
    .then(() => {
        console.log('Conexión exitosa a MongoDB');
    })
    .catch(err => {
        console.log('Error al conectar a MongoDB:', err);
    });
