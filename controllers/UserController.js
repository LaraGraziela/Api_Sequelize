const express = require('express');
const UserController = express.Router();
const User = require('../models/UserModel');

//Definindo o que contém na página principal:
UserController.get('/', (req, res) => {
    //console.log('Página inicializada');
    res.send('Página inicializada.')
})

//Fazendo o GET:
UserController.get('/user/:name/:email/:password', async (req,res) => {
    const newUser = await User.create({
        name: req.params.name,
        email: req.params.email,
        password: req.params.password
    })
    res.send(newUser)
})

//Usando o POST:
UserController.post('/user', (req, res) => {
    res.send('Método POST')
})


// //Fazendo um get por parâmetro:
// UserController.get('/parametro/:id/:name', (req, res) =>{
//     res.send(`ID do usuário: ${req.params.id} | Nome do usuário: ${req.params.name}`);
// }) 


module.exports = UserController;