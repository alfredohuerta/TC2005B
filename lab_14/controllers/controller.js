const { request } = require('express');
const Libros = require('../models/libros.model');
let title = "Laboratorio 14 | ";
let libros = Libros.fetchAll();

//controladores para rutas_lit.js
exports.get_main = (require, response) =>{
    response.render('index.html', {
        usuario: request.session.usuario
    });
};

exports.get_libros = (require, response) =>{
    console.log(request.cookies);
    response.render('libros.html', {
        libros, 
        title,
        usuario: request.session.usuario
    });
};

exports.post_libros = (require, response) =>{
    const libro = new Libros(require.body.nombre);
    libro.save();
    response.status = 303;
    response.setHeader('Set-Cookie', 'ultimo_libro= ' + libro.nombre);
    response.redirect('/libros');
};

exports.get_poema = (require, response) =>{
    response.render('nostalgia.html', {
        title,
        usuario: request.session.usuario
    });
};

//controladores para rutas_rand
exports.get_ascii = (require, response) =>{
    response.render('ruta.html', {
        title,
        usuario: request.session.usuario
    });
};

exports.get_pregunta = (require, response) =>{
    response.render('pregunta.html', {
        title,
        usuario: request.session.usuario
    });
};