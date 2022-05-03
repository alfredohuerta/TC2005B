const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// Settings
app.set('view engine', 'ejs');
app.set('views', 'views');
app.engine('html', require('ejs').renderFile);

//Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

//Session configuration 
app.use(session({
    secret: 'ñlknaeañco3pom4ñi3jrcñlawjomxñi3iq3mc4rsejf0438cnf83h4cknh43ui',
    resave: false,
    saveUninitialized: false,
}));

//Routes
const routesLit = require('./routes/rutas_lit')
const routesRand = require('./routes/rutas_rand')
const routesUser = require('./routes/auth.routes')
app.use('/', routesLit);
app.use('/', routesRand)
app.use('/users', routesUser)

//Error 404
app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'Error 404',
        message: `La ruta ${req.originalUrl} no existe`,
    });
});

app.listen(3000);