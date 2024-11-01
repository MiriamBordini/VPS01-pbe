const express = require('express')
const router = express.Router()

const clientes = require('./controller/clientes')
const telefone = require('./controller/telefone')
const carros = require('./controller/carros')


router.post('/clientes', clientes.create);
router.get('/clientes', clientes.read);
router.put('/clientes/:id', clientes.update);
router.delete('/clientes/:id', clientes.deletar);

router.post('/telefone', telefone.create);
router.get('/telefone', telefone.read);
router.put('/telefone/:id', telefone.update);
router.delete('/telefone/:id', telefone.deletar);

router.post('/carros', carros.create);
router.get('/carros', carros.read);
router.put('/carros/:id', carros.update);
router.delete('/carros/:id', carros.deletar);

module.exports = router;