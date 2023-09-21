const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'catalogo_pokemons',
    password: 'turambar',
    port: 5432,
})

module.exports = {
    pool
};