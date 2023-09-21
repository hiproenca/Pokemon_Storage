const { pool } = require('../conexao/conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const chave = require('./chave');

const atualizarApelido = async (req, res) => {
    const { token, id, apelido } = req.body;

    try {
        const chaveSecreta = chave;
        const tokenUsuario = jwt.verify(token, chaveSecreta);

        if (!token || !apelido) {
            return res.status(400).json('Os campos são obrigatórios');
        }
        const idPokemon = id
        const encontrarApelido = 'select apelido from pokemons where usuario_id = $1 and id = $2';

        const valorUsuario = [tokenUsuario.id, idPokemon];


        const apelidoEncontrado = await pool.query(encontrarApelido, valorUsuario);

        if (apelidoEncontrado.rows.length === 0) {
            return res.status(404).json('Usuário não encontrado');
        }

        const alterarApelido = 'update pokemons set apelido = $1 where id = $2 returning *';
        const valorApelido = [apelido, id];

        const apelidoAlterado = await pool.query(alterarApelido, valorApelido);

        return res.status(201).json(apelidoAlterado.rows[0]);

    } catch (error) {
        console.log(error.message);

        return res.status(500).json('Internal Server Error');
    }
}

module.exports = {
    atualizarApelido
}