const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

//Routes
const routesLit = require('./routes/rutas_lit')
const routesRand = require('./routes/rutas_rand')

app.use('/', routesLit);
app.use('/', routesRand)

//Error 404
app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'Error 404',
        message: `La ruta ${req.originalUrl} no existe`,
    });
});

app.listen(3000);