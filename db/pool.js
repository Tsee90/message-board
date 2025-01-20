const { Pool } = require('pg');
const dbenv = require('./dbenv');

dbenv.init();

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
});
