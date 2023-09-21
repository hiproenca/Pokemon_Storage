const { pool } = require('../conexao/conexao');
const bcrypt = require('bcrypt');

const cadastrarUsuarios = async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        if (!nome || !email || !senha) {
            return res.status(400).json('Erro: Todos os campos obrigatórios');
        } else if (senha.length < 5) {
            return res.status(400).json('Erro: A senha precisa ter pelo menos 5 digitos');
        }


        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const query = 'insert into usuarios (nome, email, senha) values ($1, $2, $3) returning *';
        const values = [nome, email, senhaCriptografada];

        const novoUsuario = await pool.query(query, values);
        console.log(novoUsuario);

        return res.status(201).json(novoUsuario.rows);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json('Internal Server Error');
    }
}

module.exports = {
    cadastrarUsuarios
}