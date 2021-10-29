const mongoose = require('mongoose');

// Schema

const Schema = mongoose.Schema;
const todoSchema = new Schema({

    todoTitle: String,
    todoDescription: String

});

// Modelo

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;