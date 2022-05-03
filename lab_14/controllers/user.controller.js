const User = require('../models/user.model');

exports.get_login = (request, response, next) => {
    const usuario = request.session.usuario ? request.session.usuario : '';
    response.render('login.html', {
        usuario: usuario,
    });
};

exports.login = (req, res, next) => {
    if (User.login(req.body.nombre, req.body.passwd)) {
        req.session.usuario = req.body.nombre;
        res.redirect('/');
    } else {
        res.redirect('/users/login');
    }
};

exports.logout = (req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};