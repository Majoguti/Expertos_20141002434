const { model, Schema } = require('mongoose');


let administrador = new Schema({
    nombre: String,
    apellido: String,
    correo: String,
    contrasenia: String,
    fotoPerfil: { type: String , default:'https://www.optimaley.com/wp-content/uploads/2014/09/foto-perfil-generica.jpg'},


});

module.exports = model('Administrador', administrador);