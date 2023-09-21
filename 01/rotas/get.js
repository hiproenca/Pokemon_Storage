const express = require('express');
const { listarPokemon } = require('../controladores/listarPokemon');



const rotas = express();

rotas.get('/listar', listarPokemon);

module.exports = rotas;