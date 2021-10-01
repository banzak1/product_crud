const Pool = require("pg").Pool;

const pool = new Poll({
    user:"postgres",
    password:"ls5522",
    host: "localhost",
    port: 5432,
    database: "crud_produtos"
});

module.exports = pool;