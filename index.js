const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const ProductController = require('./controllers/ProductController');
const UserController = require('./controllers/UserController');
const Migration = require('./database/Migration');

//Criando app:
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Usando a controller, é como chamar o "código dela"
app.use(Migration);
app.use(UserController);
app.use(ProductController);

//Listen (porta, callback):
app.listen(3000, () => {
    console.log('App rodando na porta http://localhost:3000');
})