const { Schema, model } = require("mongoose");

const eventTypeSchema = new Schema({
    name: {
        type: String,
    },
    location: [],// Tipo de evento
    editorHtml: {
        type: String,
        unique: false,
    },
    eventLink: {
        type: String,
        unique: false,
    },
    availability: {
        type: String,
        unique: false,
    },
    reminders: {
        type: String,
        unique: false,
    },
    cancellationPolicies: {
        type: String,
        unique: false,
    },
    time: {
        type: String,
        unique: false,
    },
    type: {
        type: String,
        unique: false,
    },
    notaInterna: {
        type: String,
        unique: false,
    },
    user: {
        type: String,
        unique: false,
    },
    estatus: {
        type: String,
        unique: false,
    },
}, {
    timestamps: true
});

module.exports = model('EventType', eventTypeSchema);
