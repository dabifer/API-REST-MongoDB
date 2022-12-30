const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb+srv://devlights_user:azIKbCB4gRGsmCsk@cluster0.7xfpu.mongodb.net/primerapirest');
        console.log('Base de dato online');
    } catch (error) {
        console.log(error);
        throw new Error('Error en MongoDB Atlas. Ver logs');
    }
}

module.exports = dbConnection;