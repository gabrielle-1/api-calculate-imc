// Chama as dependências e atribui a variáveis
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./config/routes');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(routes);

app.use(cors({
    origin: '*'
}));

app.listen(21262, () =>{
    console.log('Expressa started em http://localhost:21262')
});

