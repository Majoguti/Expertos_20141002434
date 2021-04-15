const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Clientes = require('../modelos/cliente');


// Crear nuevo cliente
// http://localhost:3100/cliente
router.post('/', async (req, res) => {
    const { body } = req;
    let newcliente = Clientes(body);
    await newcliente.save();
    res.send(newcliente);

});

//ActualizarPlan
router.put('/:id/actualizarPlan', async (req, res) => {
    Clientes.updateOne({ _id: req.params.id }, {
        plan: {
            nombre: req.body.nombre,
            precio: req.body.precio,
            cantidadProyectos: req.body.cantidadProyectos,
            descripcion: req.body.descripcion
        }
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


//Obtener todos los clientes
// http://localhost:3100/cliente/
router.get('/', async (req, res) => {

    let cliente = await Clientes.find();
    res.send(cliente)
});

//Obtener un cliente
// http://localhost:3100/cliente/<606d47a1a4be052ce8196d1a>
router.get('/:id', async (req, res) => {

    let cliente = await Clientes.findOne({ _id: req.params.id });
    res.send(cliente)
});

//Obtener los proyectos de un cliente
// http://localhost:3100/cliente/<606d47a1a4be052ce8196d1a>/proyectos/
router.get('/:id/proyectos', async (req, res) => {

    let data = await Clientes.findOne({ _id: req.params.id }, { proyectos: true });
    let { proyectos } = data;
    res.send(proyectos);
});


//Login Cliente
// http://localhost:3100/cliente/loginCliente
router.post('/loginCliente', (req, res) => {

    Clientes.findOne({ correo: req.body.correo, contrasenia: req.body.contrasenia }, { _id: true })
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

    Clientes.updateOne({ _id: req.params.id }, {
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


//Guardar Proyecto
router.put('/:id/proyectos', async (req, res) => {

    const id = req.params.id;
    const { body } = req;



    const result = await Clientes.updateOne({
        _id: mongoose.Types.ObjectId(id)
    },
        {
            $push: {
                proyectos: {
                    _id: mongoose.Types.ObjectId(),
                    nombreProyecto: body.nombreProyecto,
                    descripcion: body.descripcion,
                    fecha_creacion: new Date(),
                    archivos: []
                }
            }
        });
    if (result.nModified == 1) {
        res.send({ ok: true, mensaje: 'Proyecto Guardado con éxito' });

    }
});

//Obtener Archivos
// http://localhost:3100/cliente/id/proyectos/idP/archivos
router.get('/:id/proyectos/:idProyectos/archivos', async (req, res) => {

    const { id, idProyectos } = req.params;

    const data = await Clientes.findOne({
        _id: mongoose.Types.ObjectId(id),
        "proyectos._id": mongoose.Types.ObjectId(idProyectos)
    });

    let { proyectos } = data;
    let { archivos } = proyectos[0];
    res.send(proyectos);
});

// guardar archivos
//http://localhost:3100/cliente/606d47a1a4be052ce8196d1a/proyectos/606d4816a4be052ce8196d1b/archivos
router.put('/:id/proyectos/:idProyecto/archivos', async (req, res) => {

    const { id, idProyecto } = req.params;
    const { body } = req;

    const result = await Clientes.updateOne({
        _id: mongoose.Types.ObjectId(id),
        "proyectos._id": mongoose.Types.ObjectId(idProyecto)
    },
        {
            $push: {
                "proyectos.$.archivos": {
                    _id: mongoose.Types.ObjectId(),
                    nombre: body.nombre,
                    descripcion: body.descripcion,
                    fecha_creacion: new Date(),
                    extension: body.extension
                }
            }
        });

    if (result.nModified == 1) {
        res.send({
            ok: true, archivo: body
        });
    }
});


//carpetas compartidas
// http://localhost:3100/cliente/id/proyectos/idP/archivos
router.put('/compartir-carpetas/:correo', async (req, res) => {

    const { correo } = req.params;
    const { body } = req;

    const data = await Clientes.updateOne({
        correo: correo,
    }, {
        $push: {
            carpetas: {
                nombreProyecto: body.nombreProyecto,
                descripcion: body.descripcion,
                fecha_creacion: body.fecha_creacion,
                archivos: body.archivos
            }
        }
    });

    res.send(data);
});


//archivos compartidos
 //http://localhost:3100/cliente/compartir-archivos/majobob_1995@hotmail.com
router.put('/compartir-archivos/:correo', async (req, res) => {

    const { correo } = req.params;
    const { body } = req;

    const data = await Clientes.updateOne({
        correo: correo,
    }, {
        $push: {
            archivos: {
                nombre: body.nombre,
                descripcion: body.descripcion,
                fecha_creacion: body.fecha_creacion,
                extension: body.extension
            }
        }
    });

    res.send(data);
});




module.exports = router;