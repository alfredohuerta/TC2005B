const { Router, request, response } = require('express');
const express = require ('express');
const bodyParser = express.Router();

const weapons = ["Bad juju", "Malfeasant", "Last Word", "Thorn"];

router.get('/unaruta', (request, response, next) =>{
    response.sendFile(path.join(__dirname, '..', 'views', 'el-archivo.html'));
});

router.get('/', (request, response, next) =>{
    console.log(request.body);
    let respuesta = '<!DOCTYPE html><html lang="es-mx><head><title>Caballos</title><meta charset="utf-8"'
})