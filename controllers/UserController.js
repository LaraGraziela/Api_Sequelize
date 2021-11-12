const express = require('express');
const UserController = express.Router();
const User = require('../models/UserModel');

//Definindo o que contém na página principal:
UserController.get('/', (req, res) => {
    //console.log('Página inicializada');
    res.send('Página inicializada.')
})

//Fazendo o POST:
UserController.post('/user', async (req,res) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    res.send(newUser)
})

UserController.get('/user', async (req, res) => {
    const user = await User.findAll();
    res.json(user)

})

UserController.get('/user/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.json(user)

})


//Deletando o usuário:
UserController.delete('/user/:id', async (req, res) => {
    const user = await User.destroy({
        where: { 
            id: req.params.id
        }
    });
    res.json('Usuário deletado.')

})

UserController.put('/user/:id', async (req, res) => {
    const user = await User.update({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    },{
        where: {
            id: req.params.id
        }
    });
    res.json('Usuário atualizado.')

})

// //Fazendo um get por parâmetro:
// UserController.get('/parametro/:id/:name', (req, res) =>{
//     res.send(`ID do usuário: ${req.params.id} | Nome do usuário: ${req.params.name}`);
// }) 


module.exports = UserController;