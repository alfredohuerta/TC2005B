const express = require("express");
const router = express.Router();

let libros = ["Nostalgia de la muerte", "Altazor", "Poesía en movimiento", "Algo sobre la muerte del Mayor Sabines"];
let title = "Laboratorio 12 | ";

router.get('/', (require, response) =>{
    console.log('Route /');
    response.render('index.html', {title});
});

router.get('/libros', (require, response) =>{
    console.log('Route /libros');
    response.render('libros.html', {libros, title});
});

router.post('/libros', (require, response) =>{
    ans= String(require.body.nombre);
    libros.push(ans);
    response.redirect('/libros');
});

router.get('/nostalgia', (require, response) =>{
    console.log('Route /nostalgia');
    response.render('nostalgia.html', {title});
});

module.exports = router;