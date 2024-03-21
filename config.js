const { Pool } = require('pg');

/** Common config for bookstore. */
const DB_URI = 'postgresql:///books?host=/var/run/postgresql&user=shangita';
const pool = new Pool({
  user: 'shangita',
  host: '/var/run/postgresql/',
  database: process.env.NODE_ENV === "test" ? 'books-test' : 'books',
  port: 5432,
});

module.exports = { pool, DB_URI };
