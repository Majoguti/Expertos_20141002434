const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Administrador = require('../modelos/administrador');


// Crear nuevo Administrador
// http://localhost:3100/administrador
router.post('/', async (req, res) => {
    const { body } = req;
    let newadministrador = Administrador(body);
    await newadministrador.save();
    res.send(newadministrador);

});


//Obtener todos los Administradores
// http://localhost:3100/administrador/
router.get('/', async (req, res) => {

    let administrador = await Administrador.find();
    res.send(administrador)
});

//Obtener un Administrador
//http://localhost:3100/administrador/607623fc9bebae352016fe77
router.get('/:id', async (req, res) => {

    let administrador = await Administrador.findOne({ _id: req.params.id });
    res.send(administrador)
});


//Login Administrador
// http://localhost:3100/administrador/loginAdministrador
router.post('/loginAdministrador', (req, res) => {

    Administrador.findOne({ correo: req.body.correo, contrasenia: req.body.contrasenia }, { _id: true })
        .then(datos => {

            if (datos) {
                res.send(datos);
                res.end();
            } else {
                res.send({ res: false });
                res.end();
            }
        })
        .catch(error => {
            res.send(error);
            res.end();
        });

});

// Actualizar fotoPerfil
router.put('/:id/actualizarFotoPerfil', (req, res) => {

    Administrador.updateOne({ _id: req.params.id }, {
        fotoPerfil: req.body.fotoPerfil
    })
        .then(datos => {
            res.send(datos);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });

});





module.exports = router;