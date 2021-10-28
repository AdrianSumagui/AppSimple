// Importo los paquetes necesarios.

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// HTTP request logger.

app.use(morgan('tiny'));

// Rutas

app.get('/api', (req, res) => {

    const data = {

        todo: 'Jugar a Valorant',
        todoDescription: 'Jugar con los panitas'

    };

    res.json(data);


}) ;

app.listen(PORT, console.log(`Servidor desplegado en el puerto ${PORT}`));

