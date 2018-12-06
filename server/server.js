
const express = require('express');
const app = express();
const morgan = require('morgan');
const pg = require('pg');

app.use(morgan('dev'));

app.use(express.json());

const Client = pg.Client;
const dbUrl = 'postgres://postgres:drewby864@localhost:5432/school';
const client = new Client(dbUrl);
client.connect();

app.get('/api/students', (req, res) => {

  client.query(`
    SELECT id, name FROM students;
  `)
    .then(result => {
      res.json(result.rows);
    });

});

app.get('/api/students/:id', (req, res) => {
  client.query(`
    SELECT * FROM students WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.post('/api/students', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO students (id, name, male)
    VALUES($1, $2, $3, $4)
    RETURNING id, name, male;
  `,
  [body.name, body.description, body.track, body.startDate])
    .then(result => {
      res.json(result.rows[0]);
    });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});