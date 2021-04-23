const exprees = require('express');
const cors = require('cors');
const database = require('./database/conexion');
const app = exprees();

app.use(exprees.urlencoded({ extended: true }));
app.use(exprees.json());
app.use(cors());
app.use(exprees.static('public'));

app.set('puerto', process.env.PORT || 3100);

app.get('/', function (req, res) {
    res.send('Se levanto el servidor');

});

// importar rutas

var rutacliente = require('./routes/clientes');
var rutaplan = require('./routes/plan');
var rutaadministrador = require('./routes/administrador');


// Usar rutas
app.use('/cliente', rutacliente);
app.use('/planes', rutaplan);
app.use('/administrador', rutaadministrador);



app.listen(app.get('puerto'), () => { console.log('Server on port http://localhost:3100') });
