const { Pool } = require('pg');

module.exports = new Pool({
  connectionString: '{{Postgres.DATABASE_URL}}' || process.env.DATABASE_URL,
});
