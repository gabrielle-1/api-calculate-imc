const express = require('express');
const imc = require('../imc');
const routes = express.Router();

let db = [
    {'1': {Nome: 'Cliente1', Idade: '20'}},
    {'2': {Nome: 'Cliente2', Idade: '40'}}
];

routes.get('/', (req, res) => {
    return res.json(db);
});

// Calcular IMC
routes.post('/calculate', (req, res) => {
    const { height, weight } = req.body;
  
    return res.json(req.body);


    if (!height || !weight) {
      return res.status(400).json({ error: 'Por favor, forneça a altura e o peso.' });
    }

    const numericHeight = Number(height);
    const numericWeight = Number(weight);

    if (numericHeight <= 0 || numericWeight <= 0) {
        return res.status(400).json({ error: 'A altura e o peso devem ser maiores que zero.' });
    }    

    const bmi = imc.calcularIMC(numericHeight, numericWeight);
    const roundedBmi = bmi.toFixed(2).toString().substring(0, 2);
    const formattedBmi = Number(roundedBmi);
    const interpretation = imc.interpretarIMC(formattedBmi); 

    console.log(numericHeight, numericWeight, formattedBmi);

    const response = {
        bmi,
        interpretation
    };

    return res.json(response);

});


module.exports = routes;

// routes.post('/calculate', (req, res) => {
//     const body = req.body;

//     if (!body) 
//         return res.status(400).end();
    
//     if (body.height && body.weight) {
//         const height = body.height;
//         const weight = body.weight;

//         if (height > 0 && weight > 0) {
//             const heightSquared = height * height;
//             const imc = weight / heightSquared;
    
//             return res.json(imc);
//         } else {
//             return res.status(400).end();
//         }
       
//     }
// });