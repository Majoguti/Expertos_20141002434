const { model, Schema } = require('mongoose');


let cliente = new Schema({
    nombre: String,
    apellido: String,
    correo: String,
    //plan_actual: String,
    contrasenia: String,
    estado:Boolean,
    plan: {
        nombre: { type: String, default: '' },
        precio: { type: Number, default: 0 },
        cantidadProyectos: { type: Number, default: 0 },
        descripcion: { type: String, default: '' }
    },

    fotoPerfil: { type: String, default: 'https://www.optimaley.com/wp-content/uploads/2014/09/foto-perfil-generica.jpg' },
    proyectos: { type: Array, default: [] },
    carpetas: { type: Array, default: [] },
    archivos: { type: Array, default: [] },


});

module.exports = model('Cliente', cliente);