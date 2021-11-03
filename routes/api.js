const express = require('express');
const router = express.Router();

// Importo el modelo.

const Todo = require('../models/Todo.js')

// Rutas

router.get('/', (req, res) => {

    Todo.find({ })

        .then((data) => {

            console.log('Data ', data);
            res.json(data);

        })

        .catch((error) => {

            console.log('Error ', error);

        });

});

router.post('/save', (req, res) => {

    console.log('Body: ', req.body);

        res.json({
            msg: 'Se han recibido los datos con éxito. :D'
        });
        
});



module.exports = router;