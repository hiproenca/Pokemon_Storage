const express = require('express');
const { atualizarApelido } = require('../controladores/altApelidoPkmn');

const rotas = express();

rotas.patch('/apelido', atualizarApelido);

module.exports = rotas;


