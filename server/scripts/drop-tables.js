
const pg = require('pg');

const Client = pg.Client;

const databaseUrl = 'postgres://postgres:drewby864@localhost:5432/school';

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      DROP TABLE IF EXISTS students;
    `);
  })
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });