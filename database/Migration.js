const express = require('express');
const Migration = express.Router();
const Product = require('../models/ProductModel')
const User = require('../models/UserModel');
const db = require('./db');

//Rota usada para criar todas as tabelas:
Migration.get('/create-table', (req, res) => {
    //Comando para criar as tabelas:
    db.sync();

    //Feedback:
    res.send('Tabelas sendo geradas no banco de dados.');
})

module.exports = Migration;