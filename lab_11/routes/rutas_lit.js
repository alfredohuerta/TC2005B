let libros = ["Nostalgia de la muerte", "Altazor", "Poesía en movimiento", "Algo sobre la muerte del Mayor Sabines"];

const express = require("express");
const { redirect } = require("express/lib/response");
const path = require('path');
const router = express.Router();

router.get('/', (require, response) =>{
    console.log('Route /');
    response.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

router.get('/libros', (require, response) =>{
    console.log('Route /libros');
    response.sendFile(path.join(__dirname, '..', 'public', 'libros.html'));
    let respuesta = '<!DOCTYPE html> <html lang="es-mx"> <head> <title>Laboratorio 11</title> <meta charset="utf-8"></meta> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> </head> <body class="mx-auto" style="width: 80%;"><br>' 
    for(let i in libros){
        respuesta += '<div classs="container"> <div class="row align-items-start"> <div class="card" style="width: 18rem;"> <div class="card-body"> <p class="card-text">' + libros[i] + '</p></div></div></div></div>';
    }
    respuesta += '<br><form action="/libros" method="POST"> <label for="nombre">Nombre del nuevo libro: </label> <input type="text" name="nombre" required> <input type="submit" value="Enviar"> </form>';
    response.send(respuesta);
});

router.post('/libros', (require, response) =>{
    ans= String(require.body.nombre);
    libros.push(ans);
    response.redirect('/libros');
});

router.get('/nostalgia', (require, response) =>{
    console.log('Route /nostalgia');
    response.sendFile(path.join(__dirname, '..', 'public', 'nostalgia.html'));
});

module.exports = router;