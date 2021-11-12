const express = require('express');
const ClientController = express.Router();
const Client = require('../models/ClientModel');
const User = require('../models/UserModel');

ClientController.post('/client', async (req, res) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    
    const newClient = await Client.create({
        user_id: newUser.id,
        cpf: req.body.cpf,
        logradouro: req.body.logradouro,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado,
        pais: req.body.pais,
        cep: req.body.cep
    })

    res.json({
        id: newClient.id,
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        cpf: newClient.cpf,
        logradouro: newClient.logradouro,
        bairro: newClient.bairro,
        cidade: newClient.cidade,
        estado: newClient.estado,
        pais: newClient.pais,
        cep: newClient.cep
    });
})

ClientController.get('/client', async (req, res) => {
    const showClients = await Client.findAll()

    res.json(showClients);
})




module.exports = ClientController;