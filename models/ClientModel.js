const Sequelize = require('sequelize');

const db = require('../database/db');

const Client = db.define('Client', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    logradouro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pais: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

});

module.exports = Client;