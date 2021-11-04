// Importo los paquetes necesarios.

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api.js');

mongoose.connect('mongodb://localhost/AppSimple', {

    useNewUrlParser: true,
    useUnifiedTopology: true

});

// Verifico que mongoose se ha conectado con éxito.

mongoose.connection.on('connected', () => {

    console.log('Mongoose está conectado.')

});

// Parseo el json.
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// HTTP request logger.

app.use(morgan('tiny'));
app.use('/api', routes);



app.listen(PORT, console.log(`Servidor desplegado en el puerto ${PORT}`));

