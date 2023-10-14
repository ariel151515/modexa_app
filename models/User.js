const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: {
        type: String,
        unique: false,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        unique: false,
    },
    timeZone: {
        type: String,
        unique: false,
    },
    subscription: {
        type: String,
        unique: false,
    }
}, {
    timestamps: true // Habilita los campos createdAt y updatedAt
});

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
};

module.exports = model('User', userSchema);
