const { request, response } = require('express');
const User = require('../models/user.model');

exports.get_login = (request, response) => {
    const usuario = request.session.usuario ? request.session.usuario: '';
    console.log(request.session.usuario);
    response.render('login.html', { usuario: usuario });
};

exports.login = (request, response) => {
    if (User.login(request.body.nombre, request.body.contraseña)){
        request.session.usuario = request.body.nombre;
        response.redirect('/');
    } else {
        response.redirect('/users/login');
    }
};

exports.logout = (request, response) => {
    request.session.destroy(() => {
        response.redirect('/users/login');
    });
}