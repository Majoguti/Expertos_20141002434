const { model, Schema } = require('mongoose');

let planes = new Schema({
    nombre:  String ,
    cantidadProyectos: Number,
    precio: Number,
    descripcion: String

});


module.exports = model('Planes', planes);