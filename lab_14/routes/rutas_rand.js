const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');

router.get('/', controller.get_main);

router.get('/ascii', controller.get_ascii);

router.get('/pregunta', controller.get_pregunta);

module.exports = router;