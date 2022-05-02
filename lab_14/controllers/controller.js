const Libros = require('../models/libros.model');
let title = "Laboratorio 13 | ";
let libros = Libros.fetchAll();

//controladores para rutas_lit.js
exports.get_main = (require, response) =>{
    response.render('index.html');
};

exports.get_libros = (require, response) =>{
    response.render('libros.html', {libros, title});
};

exports.post_libros = (require, response) =>{
    const libro = new Libros(require.body.nombre);
    libro.save();
    response.status = 303;
    response.setHeader('Set-Cookie', 'ultimo_libro= ' + libro.nombre);
    response.redirect('/libros');
};

exports.get_poema = (require, response) =>{
    response.render('nostalgia.html', {title});
};

//controladores para rutas_rand
exports.get_ascii = (require, response) =>{
    response.render('ruta.html', {title});
};

exports.get_pregunta = (require, response) =>{
    response.render('pregunta.html', {title});
};