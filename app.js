const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes.js');
const userRoutes = require('./routes/user.routes.js');
const eventTypeRoutes = require('./routes/tipoDeEvento.routes.js');
const eliminarTipoDeEventoRoutes = require('./routes/tipoDeEvento.routes.js')

const app = express();

// Habilita CORS //
app.use(cors());

app.use(morgan('dev'));
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', eventTypeRoutes);
app.use('/api', eventTypeRoutes);

module.exports = app;
