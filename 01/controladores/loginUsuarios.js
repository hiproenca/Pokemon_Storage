const { pool } = require('../conexao/conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const chave = require('./chave');

const loginDeUsuarios = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await pool.query('select * from usuarios where email = $1', [email]);

        if (usuario.rowCount[0] < 1) {
            return res.status(404).json('Erro: usuario ou senha incorretos');
        }

        const senhaValida = await bcrypt.compare(senha, usuario.rows[0].senha);

        if (!senhaValida) {
            return res.status(404).json('Erro: usuario ou senha incorretos');
        }
        const chaveSecreta = chave;
        const token = jwt.sign({ id: usuario.rows[0].id }, chaveSecreta, { expiresIn: '2h' });

        const { senha: _, ...usuarioLogado } = usuario.rows[0];

        return res.status(200).json({ usuario: usuarioLogado, token });

    } catch (error) {
        console.log(error)
        return res.status(500).json('Internal Server Error');
    }
}

module.exports = {
    loginDeUsuarios
}