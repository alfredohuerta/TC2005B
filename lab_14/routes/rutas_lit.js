const express = require("express");
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.get_main);

router.get('/libros', controller.get_libros);

router.post('/libros', controller.post_libros);

router.get('/poema', controller.get_poema);

module.exports = router;