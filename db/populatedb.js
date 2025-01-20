const dbenv = require('./dbenv');
const { Client } = require('pg');
dbenv.init();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ) NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  content TEXT NOT NULL
);

INSERT INTO messages (username, content) 
VALUES
  ('Bryan', 'This message is an lololol'),
  ('Odin', 'A message pushing the boundaries of stupidity'),
  ('Damon', 'Just a troll post nothing to see here');
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await client.connect();

  const checkTableQuery = `
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name   = 'messages'
      );
    `;

  const result = await client.query(checkTableQuery);

  if (!result.rows[0].exists) {
    await client.query(SQL);
    console.log('Table created and data seeded.');
  } else {
    console.log('Table already exists, no need to create or seed.');
  }

  await client.end();
  console.log('done');
}

main();
