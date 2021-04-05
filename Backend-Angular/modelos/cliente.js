const { model, Schema } = require('mongoose');


let cliente = new Schema({
    nombre: String,
    apellido: String,
    correo: String,
    plan_actual: String,
    contrasenia: String,
    estado:Boolean,
    proyectos: { type: Array, default: [] }

});

module.exports = model('Cliente', cliente);