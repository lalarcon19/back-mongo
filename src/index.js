const express = require('express');
const app = express();
const conectardb = require('../config/db');
const cors = require('cors')

conectardb();
app.use(cors());

app.use(express.json());
app.use('/api/clientes', require('../routes/rutasCliente'));
app.use('/api/empleados', require('../routes/rutasEmpleado'));

app.get('/', (req, res) => {
    res.send('Hola mundo');
})

app.listen(3000, () => {
    console.log("Servidor conectado http://localhost:3000");
})




