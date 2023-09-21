const { pool } = require('../conexao/conexao');
const jwt = require('jsonwebtoken');
const chave = require('./chave');

const delPkmn = async (req, res) => {
    const { token, id } = req.body;

    try {
        const chaveSecreta = chave;
        const tokenUsuario = jwt.verify(token, chaveSecreta);

        if (!token) {
            return res.status(400).json('Token inválido');
        } else if (!id) {
            return res.status(400).json('Insira o id do Pokemon');
        }

        const queryPokemon = 'select apelido from pokemons where usuario_id = $1 and id = $2';
        const idPokemon = id;

        const pokemonEncontrado = await pool.query(tokenUsuario.id, id);

        if (pokemonEncontrado.rows.length !== idPokemon) {
            return res.status(404).json('Pokemon não encontrado');
        } else if (pokemonEncontrado.rows.length < 0) {
            return res.status(404).json('Nenhum pokemon disponível para ser deletado');
        }

        const query = 'delete from pokemons where id = $1 and usuario_id = $2 returning *';

        const values = [id, tokenUsuario.id];

        const deletarPkmn = await pool.query(query, values);

        return res.status(201).json(deletarPkmn.rows[0]);
    } catch (error) {
        console.log(error.message);

        return res.status(500).json('Internal Server Error');
    }
}

module.exports = {
    delPkmn
}