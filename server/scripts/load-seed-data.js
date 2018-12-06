
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://postgres:drewby864@localhost:5432/school';
const students = require('./students.json');

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return Promise.all(
      students.map(student => {
        return client.query(`
          INSERT INTO students (name, yob, male)
          VALUES ($1, $2, $3);
        `,
        [student.name, student.yob, student.male]);
      })
    );
  })
  .then(
    () => console.log('seed data load complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });