const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const cliente = require('../modelos/cliente');


// Crear nuevo cliente
router.post('/', async (req, res) => {
    const { body } = req;
    let newcliente = cliente(body);
    await newcliente.save();
    res.send(newcliente);

});


//Obtener todos los clientes
router.get('/', async (req, res) => {

    let cliente = await Cliente.find();
    res.send(cliente)
});


//Login Cliente
router.post('/loginCliente', (req, res) => {

    cliente.findOne({ correo: req.body.correo, contrasenia: req.body.contrasenia }, { nombre: true, apellido: true, correo: true, plan_actual: true , proyectos: true })
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



module.exports = router;