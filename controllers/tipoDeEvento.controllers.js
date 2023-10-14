const Eventtype = require('../models/EventType');

// Carga tipo de evento
exports.postTipoDeEvento = async (req, res) => {
    try {
        const nuevoDocumento = new Eventtype(req.body);
        await nuevoDocumento.save();
        res.status(201).json({ mensaje: 'Documento creado exitosamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ mensaje: 'Error al crear el documento' });
    }
};

// Trae todos los eventos
exports.getEventos = async (req, res) => {
    try {
        // Utiliza el método find() de Mongoose para obtener todos los eventos
        const eventos = await Eventtype.find();

        // Envía los eventos como respuesta en formato JSON
        res.status(200).json({ eventos });
    } catch (err) {
        console.error(err);
        res.status(500).json({ mensaje: 'Error al obtener los eventos' });
    }
};

// Elimina tipo de evento po id
exports.eliminarTipoDeEvento = async (req, res) => {
    const { id } = req.params;

    try {
        // Utiliza findByIdAndRemove para eliminar el tipo de evento por ID
        const tipoDeEventoEliminado = await Eventtype.findByIdAndRemove(id);

        if (!tipoDeEventoEliminado) {
            // Si no se encontró el tipo de evento, devuelve un error 404
            return res.status(404).json({ mensaje: 'Tipo de evento no encontrado' });
        }

        // Si se eliminó correctamente, devuelve una respuesta exitosa
        res.status(200).json({ mensaje: 'Tipo de evento eliminado con éxito' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ mensaje: 'Error al eliminar el tipo de evento' });
    }
}

