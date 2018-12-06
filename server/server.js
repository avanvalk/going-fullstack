const express = require('express');
const app = express();
const morgan = require('morgan');
const client = require('./db-client');

app.use(morgan('dev'));

app.use(express.json());

app.get('/api/tracks', (req, res) => {
  client.query(`
  SELECT id, name, yob)
  FROM track
  ORDER BY name;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/data/students', (req, res) => {
  client.query(`
    SELECT
      student.id
      student.name as name,
      start_date as "startDate",
      track.id as "trackId",
      track.name as track
    From student
    JOIN track
    ON student.track_id = track.id
    ORDER by start_date DESC, name ASC;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/students/:id', (req, res) => {
  client.query(`
    SELECT * FROM student WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.post('/api/students/:id', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO student (name, track_id, start_date)
    VALUES($1, $2, $3)
    RETURNING id;
  `,
  [body.name, body.trackId, body.startDate])
    .then(result => {
      const id = result.rows[0].id;

      return client.query(`
      SELECT
        student.id,
        student.name as name,
        start_date as "startDate",
        track.id as "trackId",
        track.name as track
      FROM student
      JOIN track
      ON student.track_id = track.id
      WHERE student.id = $1;
    `,
      [id]);
    })
    .then(result => {
      res.json(result.rows[0]);
    });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});

/* end configure and server start */