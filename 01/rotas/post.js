const express = require('express');
const { cadastrarUsuarios } = require('../controladores/cadastrarUsuarios');
const { loginDeUsuarios } = require('../controladores/loginUsuarios');
const { addPokemon } = require('../controladores/cadastrarPokemon');

const rotas = express();

rotas.post('/cadastro', cadastrarUsuarios);

rotas.post('/login', loginDeUsuarios);

rotas.post('/addpokemon', addPokemon);

module.exports = rotas;
