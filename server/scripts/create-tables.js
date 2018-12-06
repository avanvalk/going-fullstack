
const pg = require('pg');

const Client = pg.Client;

const databaseUrl = 'postgres://postgres:drewby864@localhost:5432/school';

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS students (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        yob VARCHAR(256),
        male VARCHAR(256),
      );
    `);
  })
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });