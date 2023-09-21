const { pool } = require('../conexao/conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const chave = require('./chave');

addPokemon = async (req, res) => {
    const { token, nome, habilidades, imagem, apelido } = req.body;

    try {
        const chaveSecreta = chave;
        const tokenUsuario = jwt.verify(token, chaveSecreta);
        if (!nome || !habilidades) {
            return res.status(400).json('O nome e a idade são campos obrigatórios');
        }

        const encontrarUsuario = 'select id from usuarios where id = $1';
        const valorUsuario = [tokenUsuario.id];

        const usuarioEncontrado = await pool.query(encontrarUsuario, valorUsuario);

        if (usuarioEncontrado.rows.length === 0) {
            return res.status(404).json('Usuário não encontrado');
        }

        const usuarioId = usuarioEncontrado.rows[0].id;

        const query = 'insert into pokemons (usuario_id, nome, habilidades, imagem, apelido) values ($1, $2, $3, $4, $5) returning *';

        const values = [usuarioId, nome, habilidades, imagem, apelido];

        const adicionarPokemon = await pool.query(query, values);

        return res.status(201).json(adicionarPokemon.rows[0]);


    } catch (error) {
        console.log(error.message)
        return res.status(500).json('Internal Server Error');
    }
}

module.exports = {
    addPokemon
}