const express = require('express');
const { delPkmn } = require('../controladores/deletarPkmn');

const rotas = express();

rotas.delete('/deletarpkmn', delPkmn);

module.exports = rotas;