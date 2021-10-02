const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password:"552255",
    host: "localhost",
    port: 5432,
    database: "crud_produtos"
});

module.exports = pool;