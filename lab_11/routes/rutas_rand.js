const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (require, response) =>{
    console.log('Route /');
    response.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

router.get('/ruta', (require, response) =>{
    console.log('Route /ruta');
    response.sendFile(path.join(__dirname, '..', 'public', 'ruta.html'));
});

router.get('/pregunta', (require, response) =>{
    console.log('Route /pregunta');
    response.sendFile(path.join(__dirname, '..', 'public', 'pregunta.html'));
});

module.exports = router;