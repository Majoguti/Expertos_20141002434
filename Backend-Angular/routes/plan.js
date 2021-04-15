const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const planes = require('../modelos/plan');



// Guardar plan
router.post('/', async (req, res) => {
    const { body } = req;
    let newplan = planes(body);
    await newplan.save();
    res.send(newplan);

});

//Obtener Planes
router.get('/', async (req, res) => {

    const id = req.params.id;
    let Planes = await planes.find({ }, {nombre: true, cantidadProyectos:true, precio: true, descripcion: true });
    res.send(Planes);

});


//Obtener Un Plan
router.get('/:id', (req, res) => {

    planes.findOne({ _id: req.params.id }, {})
        .then(dato => {
            res.send(dato);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });

});

module.exports = router;