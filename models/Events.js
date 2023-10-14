import { Schema, model } from "mongoose";

const eventsShema = new Schema({
    name: {
        type: String,
        unique: true,
    },
    type: {
        type: String,
        unique: true,
    },
    color: {
        type: String,
        unique: true,
    },
    ubicacion: {
        type: String,
        unique: true,
    },
    descripcion: {
        type: String,
        unique: true,
    },
    duration: {
        type: String,
        unique: true,
    },
    availability: {
        type: String,
        unique: true,
    }
}, {
    timestamps: false,
    versionKey: false
}
)

export default model('Events', eventsShema)