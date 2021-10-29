const express = require('express');
const ProductModel = require('../models/ProductModel');
const ProductController = express.Router();

ProductController.post('/products', async (req, res) => {
    const newProduct = await ProductModel.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    })

    res.send(newProduct);
})

// ProductController.get('/products/:name/:description/:price', async (req, res) => {
//     const newProduct = await ProductModel.create({
//         name: req.params.name,
//         description: req.params.description,
//         price: req.params.price
//     })

//     res.send(newProduct);
// })


module.exports = ProductController;