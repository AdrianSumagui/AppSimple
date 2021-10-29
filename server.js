// Importo los paquetes necesarios.

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/AppSimple', {

    useNewUrlParser: true,
    useUnifiedTopology: true

});

// Verifico que mongoose se ha conectado con éxito.

mongoose.connection.on('connected', () => {

    console.log('Mongoose está conectado.')

});



// Guardar datos a la base de datos.

const data = {

    todoTitle: 'Tarde de Valos',
    todoDescription: 'Jugar con los Panas al Valorant'

};

// Instanciar el modelo. 

const newTodo = new Todo(data);

newTodo.save((error) => {

    if (error) {

        console.log('Ha ocurrido un error. :(')

    } else {

        console.log('Los datos se han guardado correctamente. :D')

    }

});


// HTTP request logger.

app.use(morgan('tiny'));



app.listen(PORT, console.log(`Servidor desplegado en el puerto ${PORT}`));

