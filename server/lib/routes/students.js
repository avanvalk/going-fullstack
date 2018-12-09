const express = require('express');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap
const client = require('../../db-client');

router
  .get('/', (req, res) => {
    client.query(`
      SELECT 
        id, 
        name,
        track_id as "trackId",
        start_date as "startDate"
      FROM student
      ORDER BY name;
    `)
      .then(result => {
        res.json(result.rows);
      });
  })

  .get('/:id', (req, res) => {
    client.query(`
      SELECT 
        id, 
        name,
        track_id as "trackId",
        start_date as "startDate"
      FROM student 
      WHERE id = $1;
    `,
    [req.params.id])
      .then(result => {
        res.json(result.rows[0]);
      });
  })

  .post('/', (req, res) => {
    const body = req.body;

    client.query(`
      INSERT INTO student (name, track_id, start_date)
      VALUES($1, $2, $3)
      RETURNING 
        id, 
        name,
        track_id as "trackId",
        start_date as "startDate";
    `,
    [body.name, body.trackId, body.startDate])
      .then(result => {
        res.json(result.rows[0]);
      });
  })
  
  .put('/:id', (req, res) => {
    const body = req.body;

    client.query(`
      UPDATE student
      SET
        name = $1,
        track_id = $2,
        start_date = $3
      WHERE id = $4
      RETURNING
        id, 
        name,
        track_id as "trackId",
        start_date as "startDate";
    `,
    [body.name, body.trackId, body.startDate, body.id])
      .then(result => {
        res.json(result.rows[0]);
      });
  });

module.exports = router;