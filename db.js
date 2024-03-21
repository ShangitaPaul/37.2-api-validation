/** Database config for database. */


const { Client } = require("pg");
const {DB_URI,pool} = require("./config");

let db = new Client({
  connectionString: DB_URI
});

// pool.connect();


module.exports = pool;
