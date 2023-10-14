import { Schema, model } from "mongoose";

const AvailabilityShema = new Schema({
    name: {
        type: String,
        unique: true,
    },
    type: {
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
    enlaceDelEvento: {
        type: String,
        unique: true,
    },
    politicasDeCancelacion: {
        type: String,
        unique: true,
    },
    id_disponibilida: {
        type: String,
        unique: true,
    }
}, {
    timestamps: false,
    versionKey: false
}
)

export default model('Availability', AvailabilityShema)