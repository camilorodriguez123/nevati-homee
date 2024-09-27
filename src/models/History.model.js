const mongoose = require( 'mongoose' );

const HistorySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'users'
    },
    productsList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    }]
}, {
    timestamps: true    // Agrega campos de fecha: creacion y actualizacion del documento
});

const HistoryModel = mongoose.model(
    'History',            // Nombre de la coleccion
    HistorySchema          // Estructura de datos de nuestro modelo
); 


module.exports = HistoryModel;