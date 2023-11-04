const mongoose = require('mongoose');
require('dotenv').config()

const connect = async (uri) => {
    try {
        const connection = await mongoose.connect(uri);
        console.log('Se ha conectado correctamente:', connection.connection.host);
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
};

module.exports = connect;


