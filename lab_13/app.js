const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// Settings
app.set('view engine', 'ejs');
app.set('views', 'views');
app.engine('html', require('ejs').renderFile);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

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