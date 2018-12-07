
const fs = require('fs');
// "require" pg
const pg = require('pg');
// Use the pg Client
const Client = pg.Client;
// database url
const databaseUrl = 'postgres://postgres:drewby864@localhost:5432/school';
// on windows, linux, or other systems where you need to 
// specify username and password
// const databaseUrl = 'postgres://<username>:<password>@localhost:5432/liveable_cities';

const client = new Client(databaseUrl);

client.connect();

client.query(`
  SELECT name, description, track, start_date FROM students;
`)
  .then(
    results => {
      fs.writeFileSync(
        'student.json', 
        JSON.stringify(results.rows, true, 2)
      );
    },
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });