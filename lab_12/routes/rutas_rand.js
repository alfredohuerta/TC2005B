const express = require('express');
const router = express.Router();

let title = "Laboratorio 12 | ";

router.get('/', (require, response) =>{
    console.log('Route /');
    response.render('index.html', {title})
});

router.get('/ruta', (require, response) =>{
    console.log('Route /ruta');
    response.render('ruta.html', {title});
});

router.get('/pregunta', (require, response) =>{
    console.log('Route /pregunta');
    response.render('pregunta.html', {title})
});

module.exports = router;