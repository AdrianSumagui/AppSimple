const express = require('express');
const router = express.Router();

module.exports = router;

// Rutas

router.get('/api', (req, res) => {

    Todo.find({ })

        .then((data) => {

            console.log('Data ', data);
            res.json(data);

        })

        .catch((error) => {

            console.log('Error ', error);

        });

});