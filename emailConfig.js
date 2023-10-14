const nodemailer = require("nodemailer");
require('dotenv').config();


const nodemailerUser = process.env.NODEMAILER_USER;
const nodemailerPass = process.env.NODEMAILER_PASS;


const transporter = nodemailer.createTransport({
    host: "smtp.office365.net",
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: nodemailerUser,
        pass: nodemailerPass
    },
});

module.exports = transporter;