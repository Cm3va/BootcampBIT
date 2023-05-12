const mongoose = require('mongoose'); //llamamos la libreria que se instalo al principio del proyecto
const ProductoSchema = mongoose.Schema ({
    nombre:{
        type: String,
        require: true
    },
    categoria:{
        type: String,
        require: true
    },
    ubicacion:{
        type: String,
        require: true
    },
    precio:{
        type: Number,
        require: true
    },
    fec_cre:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('producto', ProductoSchema); //exportamos el modelo que permitira enviar la dara a la DB