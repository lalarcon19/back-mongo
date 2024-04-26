
const mongoose = require('mongoose');
require('dotenv').config();

const conectardb = () => {
    mongoose
    .connect(process.env.database)
    .then(() => console.log('Se hizo conexion a la base de datos'))
    .catch((err) => console.error(err));
}

module.exports = conectardb;