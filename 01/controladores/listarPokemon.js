const { pool } = require('../conexao/conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const chave = require('./chave');

const listarPokemon = async (req, res) => {
    const { token } = req.body;

    try {

        const chaveSecreta = chave;
        const tokenUsuario = jwt.verify(token, chaveSecreta);

        if (!token) {
            return res.status(400).json('Acesso negado: Insira um token válido');
        }

        const query = 'select * from pokemons where usuario_id = $1';
        const values = [tokenUsuario.id];

        const listarPokemon = await pool.query(query, values);

        return res.status(200).json(listarPokemon.rows)


    } catch (error) {
        console.log(error.message);
        return res.status(500).json('Internal Server Error');
    }
}

module.exports = {
    listarPokemon
}