const fs = require('fs');
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://postgres:drewby864@localhost:5432/school';

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